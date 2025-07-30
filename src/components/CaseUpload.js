import { useState } from 'react';
import { supabase } from '../lib/supabase';

/**
 * CaseUpload component
 *
 * Provides a form for adding new civil rights cases to the Supabase database.
 * Fields include title, jurisdiction, court, citation, summary, document URL,
 * comma‑separated tags, and a filing date. Upon submission, the data is
 * inserted into the `cases` table. Successful submissions reset the form
 * and display a confirmation message; errors display an error message.
 */
export default function CaseUpload() {
  // Form state storing values for each input field
  const [formData, setFormData] = useState({
    title: '',
    jurisdiction: '',
    court: '',
    citation: '',
    summary: '',
    document_url: '',
    tags: '',
    date_filed: ''
  });
  // Loading and message state for user feedback
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  /**
   * Handles changes to any form input. It updates the formData state
   * using the input's name attribute as the key.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Submits the form data to Supabase. Converts the tags string
   * into an array and performs an insert into the cases table.
   * Provides success or error feedback accordingly.
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Extract and process tags into an array of trimmed nonempty strings
    const tagArray = formData.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const { data, error } = await supabase.from('cases').insert({
      title: formData.title,
      jurisdiction: formData.jurisdiction || null,
      court: formData.court || null,
      citation: formData.citation || null,
      summary: formData.summary || null,
      document_url: formData.document_url || null,
      tags: tagArray,
      date_filed: formData.date_filed || null
    });

        console.log(data);

    if (error) {
      console.error('Error inserting case:', error);
      setMessage('\u274c Error adding case: ' + error.message);
    } else {
      setMessage('\u2705 Case added successfully!');
      // Reset form data on success
      setFormData({
        title: '',
        jurisdiction: '',
        court: '',
        citation: '',
        summary: '',
        document_url: '',
        tags: '',
        date_filed: ''
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Case</h2>
      <div className="mb-3">
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Case Title"
          required
        />
      </div>
      <div className="mb-3">
        <input
          name="jurisdiction"
          type="text"
          value={formData.jurisdiction}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Jurisdiction (e.g., federal, state)"
        />
      </div>
      <div className="mb-3">
        <input
          name="court"
          type="text"
          value={formData.court}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Court (e.g., Supreme Court)"
        />
      </div>
      <div className="mb-3">
        <input
          name="citation"
          type="text"
          value={formData.citation}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Citation"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          className="border p-2 w-full h-24"
          placeholder="Case summary"
        />
      </div>
      <div className="mb-3">
        <input
          name="document_url"
          type="url"
          value={formData.document_url}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Document URL (e.g., PDF link)"
        />
      </div>
      <div className="mb-3">
        <input
          name="tags"
          type="text"
          value={formData.tags}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Tags (comma separated)"
        />
      </div>
      <div className="mb-3">
        <input
          name="date_filed"
          type="date"
          value={formData.date_filed}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Add Case'}
      </button>
      {message && (
        <p className="mt-4 text-sm font-semibold">
          {message}
        </p>
      )}
    </form>
  );
}
