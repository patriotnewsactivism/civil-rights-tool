import { useState, useEffect } from 'react';
import { Mail, Send, Inbox, Star, Trash2, Search, User, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function MessagingPanel() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [view, setView] = useState<'inbox' | 'sent' | 'compose'>('inbox');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [composeForm, setComposeForm] = useState({
    recipient_username: '',
    subject: '',
    message_text: '',
  });
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    loadCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      loadMessages();
    }
  }, [view, currentUser]);

  const loadCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setCurrentUser(user);
  };

  const loadMessages = async () => {
    if (!currentUser) return;
    
    setLoading(true);
    try {
      let query = supabase
        .from('private_messages')
        .select(`
          *,
          sender:sender_id(username, display_name),
          recipient:recipient_id(username, display_name)
        `)
        .order('created_at', { ascending: false });

      if (view === 'inbox') {
        query = query.eq('recipient_id', currentUser.id);
      } else if (view === 'sent') {
        query = query.eq('sender_id', currentUser.id);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMessages(data || []);

      // Update unread count
      if (view === 'inbox') {
        const unread = data?.filter(m => !m.is_read).length || 0;
        setUnreadCount(unread);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      // Find recipient by username
      const { data: recipientData } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('username', composeForm.recipient_username.toLowerCase())
        .single();

      if (!recipientData) {
        alert('User not found');
        return;
      }

      const { error } = await supabase
        .from('private_messages')
        .insert({
          sender_id: currentUser.id,
          recipient_id: recipientData.id,
          subject: composeForm.subject,
          message_text: composeForm.message_text,
        });

      if (error) throw error;

      setComposeForm({ recipient_username: '', subject: '', message_text: '' });
      setView('sent');
      loadMessages();
    } catch (error: any) {
      console.error('Error sending message:', error);
      alert(error.message || 'Failed to send message');
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      await supabase
        .from('private_messages')
        .update({ is_read: true })
        .eq('id', messageId);
      
      loadMessages();
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!confirm('Delete this message?')) return;
    
    try {
      await supabase
        .from('private_messages')
        .delete()
        .eq('id', messageId);
      
      setSelectedMessage(null);
      loadMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      msg.subject?.toLowerCase().includes(search) ||
      msg.message_text?.toLowerCase().includes(search) ||
      msg.sender?.username?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <button
            onClick={() => setView('compose')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
          >
            <Send className="h-4 w-4" />
            <span>New Message</span>
          </button>
        </div>

        <nav className="px-2">
          <button
            onClick={() => setView('inbox')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg mb-1 ${
              view === 'inbox' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Inbox className="h-5 w-5" />
            <span className="flex-1 text-left">Inbox</span>
            {unreadCount > 0 && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setView('sent')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
              view === 'sent' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Send className="h-5 w-5" />
            <span>Sent</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {view === 'compose' ? (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">New Message</h2>
            <form onSubmit={sendMessage} className="max-w-2xl space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To (username)
                </label>
                <input
                  type="text"
                  value={composeForm.recipient_username}
                  onChange={(e) => setComposeForm({ ...composeForm, recipient_username: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="username"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={composeForm.subject}
                  onChange={(e) => setComposeForm({ ...composeForm, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  value={composeForm.message_text}
                  onChange={(e) => setComposeForm({ ...composeForm, message_text: e.target.value })}
                  rows={10}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setComposeForm({ recipient_username: '', subject: '', message_text: '' });
                    setView('inbox');
                  }}
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-6 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            {/* Search Bar */}
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search messages..."
                />
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-hidden flex">
              <div className="w-96 bg-white border-r border-gray-200 overflow-y-auto">
                {loading ? (
                  <div className="flex items-center justify-center p-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : filteredMessages.length === 0 ? (
                  <div className="text-center p-12">
                    <Mail className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No messages</p>
                  </div>
                ) : (
                  <div>
                    {filteredMessages.map((message) => (
                      <div
                        key={message.id}
                        onClick={() => {
                          setSelectedMessage(message);
                          if (!message.is_read && view === 'inbox') {
                            markAsRead(message.id);
                          }
                        }}
                        className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                          selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                        } ${!message.is_read && view === 'inbox' ? 'bg-blue-50/30' : ''}`}
                      >
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <span className="font-semibold text-gray-900">
                              {view === 'inbox' 
                                ? message.sender?.display_name || message.sender?.username 
                                : message.recipient?.display_name || message.recipient?.username}
                            </span>
                          </div>
                          {!message.is_read && view === 'inbox' && (
                            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {message.subject || '(No subject)'}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-2">{message.message_text}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(message.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message Detail */}
              <div className="flex-1 bg-white overflow-y-auto">
                {selectedMessage ? (
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedMessage.subject || '(No subject)'}
                        </h2>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <User className="h-4 w-4" />
                          <span>
                            {view === 'inbox' ? 'From: ' : 'To: '}
                            {view === 'inbox'
                              ? selectedMessage.sender?.display_name || selectedMessage.sender?.username
                              : selectedMessage.recipient?.display_name || selectedMessage.recipient?.username}
                          </span>
                          <span>•</span>
                          <span>{new Date(selectedMessage.created_at).toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {view === 'inbox' && (
                          <button
                            onClick={() => {
                              setComposeForm({
                                recipient_username: selectedMessage.sender?.username || '',
                                subject: `Re: ${selectedMessage.subject || ''}`,
                                message_text: `\n\n--- Original Message ---\n${selectedMessage.message_text}`,
                              });
                              setView('compose');
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="Reply"
                          >
                            <Mail className="h-5 w-5" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteMessage(selectedMessage.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-wrap text-gray-700">{selectedMessage.message_text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Mail className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Select a message to read</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
