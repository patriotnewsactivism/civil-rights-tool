import { jsPDF } from 'jspdf';

/**
 * Generate a comprehensive Activist/Journalist Legal Toolkit PDF
 */
export function generateActivistToolkitPDF(state = null) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const lineHeight = 7;
  let yPos = margin;

  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace = 20) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Helper to add text with wrapping
  const addWrappedText = (text, fontSize = 10, isBold = false) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    lines.forEach(line => {
      checkPageBreak();
      doc.text(line, margin, yPos);
      yPos += lineHeight;
    });
  };

  // COVER PAGE
  doc.setFillColor(200, 16, 46); // Red
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('ACTIVIST & JOURNALIST', pageWidth / 2, 25, { align: 'center' });
  doc.text('LEGAL TOOLKIT', pageWidth / 2, 38, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Know Your Rights • Stay Safe • Document Everything', pageWidth / 2, 50, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
  yPos = 80;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'italic');
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPos, { align: 'center' });
  yPos += 15;
  
  if (state) {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`State-Specific Guide: ${state}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 10;
  }

  doc.setFontSize(10);
  doc.text('Civil Rights Legal Toolkit • www.wtpnews.org', pageWidth / 2, yPos, { align: 'center' });
  
  // TABLE OF CONTENTS
  doc.addPage();
  yPos = margin;
  
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  addWrappedText('TABLE OF CONTENTS', 20, true);
  yPos += 5;
  
  const toc = [
    '1. Know Your Rights Overview',
    '2. First Amendment Protections',
    '3. Fourth Amendment (Search & Seizure)',
    '4. Recording Police & Public Officials',
    '5. Stop and ID Laws',
    '6. Marijuana/Cannabis Laws',
    '7. FOIA & Public Records Requests',
    '8. Emergency Legal Resources',
    '9. Attorney Contact Information',
    '10. Documentation Best Practices'
  ];
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  toc.forEach(item => {
    yPos += lineHeight;
    doc.text(item, margin + 5, yPos);
  });
  
  // SECTION 1: KNOW YOUR RIGHTS OVERVIEW
  doc.addPage();
  yPos = margin;
  
  doc.setFillColor(30, 58, 138);
  doc.rect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('1. KNOW YOUR RIGHTS OVERVIEW', margin, yPos + 5);
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  addWrappedText('As an activist, journalist, or concerned citizen, understanding your constitutional rights is critical for protecting yourself during interactions with law enforcement and government officials.', 11);
  yPos += 3;
  
  doc.setFont('helvetica', 'bold');
  addWrappedText('Key Constitutional Rights:', 11, true);
  
  const rights = [
    '• First Amendment: Freedom of speech, press, assembly, and petition',
    '• Fourth Amendment: Protection from unreasonable searches and seizures',
    '• Fifth Amendment: Right to remain silent, due process',
    '• Sixth Amendment: Right to an attorney',
    '• Fourteenth Amendment: Equal protection under the law'
  ];
  
  doc.setFont('helvetica', 'normal');
  rights.forEach(right => {
    addWrappedText(right, 10);
  });
  
  // SECTION 2: FIRST AMENDMENT
  checkPageBreak(40);
  yPos += 5;
  
  doc.setFillColor(30, 58, 138);
  doc.rect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('2. FIRST AMENDMENT PROTECTIONS', margin, yPos + 5);
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  addWrappedText('The First Amendment protects your right to speak, publish, assemble, and petition the government. This is the foundation of journalism and activism.', 11);
  yPos += 3;
  
  doc.setFont('helvetica', 'bold');
  addWrappedText('What You Can Do:', 11, true);
  
  const firstAmendment = [
    '✓ Record police in public (protected in all 50 states)',
    '✓ Protest on public sidewalks and parks',
    '✓ Criticize government officials',
    '✓ Publish truthful information obtained legally',
    '✓ Refuse to reveal confidential sources (limited shield protection)',
    '✓ Attend public meetings and government proceedings'
  ];
  
  doc.setFont('helvetica', 'normal');
  firstAmendment.forEach(item => {
    addWrappedText(item, 10);
  });
  
  yPos += 3;
  doc.setFont('helvetica', 'bold');
  addWrappedText('Important Limitations:', 11, true);
  
  const limitations = [
    '✗ Cannot interfere with police operations',
    '✗ Cannot trespass on private property',
    '✗ Cannot incite imminent lawless action',
    '✗ Cannot make true threats',
    '✗ Must comply with reasonable time/place/manner restrictions'
  ];
  
  doc.setFont('helvetica', 'normal');
  limitations.forEach(item => {
    addWrappedText(item, 10);
  });
  
  // SECTION 3: RECORDING POLICE
  doc.addPage();
  yPos = margin;
  
  doc.setFillColor(30, 58, 138);
  doc.rect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('4. RECORDING POLICE & PUBLIC OFFICIALS', margin, yPos + 5);
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  addWrappedText('The right to record police officers performing their duties in public is constitutionally protected. Federal courts across the country have consistently upheld this right.', 11);
  yPos += 3;
  
  doc.setFont('helvetica', 'bold');
  addWrappedText('Best Practices for Recording:', 11, true);
  
  const recordingTips = [
    '1. Announce you are recording (optional but recommended)',
    '2. Maintain a safe distance (typically 10-15 feet)',
    '3. Do not interfere with police operations',
    '4. Record continuously - do not stop until safe',
    '5. Stream to cloud storage when possible',
    '6. Do NOT delete footage if ordered (assert 1st & 4th Amendment)',
    '7. Request supervisor if threatened',
    '8. Get badge numbers and names',
    '9. Document the scene from multiple angles',
    '10. Note time, date, location, and weather conditions'
  ];
  
  doc.setFont('helvetica', 'normal');
  recordingTips.forEach(tip => {
    addWrappedText(tip, 10);
  });
  
  // SECTION 4: IF STOPPED BY POLICE
  checkPageBreak(40);
  yPos += 5;
  
  doc.setFillColor(220, 38, 38);
  doc.rect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('IF YOU ARE STOPPED BY POLICE', margin, yPos + 5);
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  const policeStopped = [
    '1. Stay calm and keep hands visible',
    '2. Ask "Am I free to go?" If yes, leave calmly',
    '3. Ask "Am I being detained?" If yes, ask why',
    '4. You can record the entire encounter',
    '5. Ask for badge numbers and names',
    '6. Do not consent to searches ("I do not consent to any searches")',
    '7. Remain silent: "I am invoking my Fifth Amendment right to remain silent"',
    '8. Request attorney: "I want to speak with my lawyer"',
    '9. Do not resist physically, even if arrest is unlawful',
    '10. Document everything afterwards - time, location, witnesses, injuries'
  ];
  
  doc.setFont('helvetica', 'bold');
  policeStopped.forEach(step => {
    addWrappedText(step, 10, step.includes('1.') || step.includes('7.') || step.includes('8.'));
  });
  
  // SECTION 5: EMERGENCY CONTACTS
  doc.addPage();
  yPos = margin;
  
  doc.setFillColor(220, 38, 38);
  doc.rect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('8. EMERGENCY LEGAL RESOURCES', margin, yPos + 5);
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  doc.setFont('helvetica', 'bold');
  addWrappedText('National Legal Hotlines:', 12, true);
  
  const hotlines = [
    'ACLU Legal Hotline: Varies by state - visit aclu.org',
    'National Lawyers Guild Hotline: Text "NLGNOW" to 73278',
    'Reporters Committee Hotline: (800) 336-4243',
    'Electronic Frontier Foundation: (415) 436-9333',
    'Press Freedom Hotline: (202) 795-9300'
  ];
  
  doc.setFont('helvetica', 'normal');
  hotlines.forEach(hotline => {
    addWrappedText(hotline, 10);
  });
  
  yPos += 5;
  doc.setFont('helvetica', 'bold');
  addWrappedText('What to Do If Arrested:', 12, true);
  
  const ifArrested = [
    '1. Invoke right to remain silent immediately',
    '2. Request attorney before answering ANY questions',
    '3. Do not sign anything without attorney present',
    '4. Do not discuss case with cellmates',
    '5. Write down everything you remember ASAP',
    '6. Request medical attention for any injuries',
    '7. Do not waive Miranda rights',
    '8. Contact family/attorney as soon as allowed'
  ];
  
  doc.setFont('helvetica', 'normal');
  ifArrested.forEach(step => {
    addWrappedText(step, 10);
  });
  
  // DOCUMENTATION SECTION
  doc.addPage();
  yPos = margin;
  
  doc.setFillColor(30, 58, 138);
  doc.rect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 15, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('10. DOCUMENTATION BEST PRACTICES', margin, yPos + 5);
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  addWrappedText('Proper documentation is crucial for legal action and accountability. Follow these guidelines to protect yourself and build your case.', 11);
  yPos += 3;
  
  const documentation = [
    '📸 Record video continuously during interactions',
    '📝 Write detailed notes immediately afterwards',
    '🕐 Document exact times, dates, locations',
    '👥 Get names and contact info of witnesses',
    '🏥 Photograph all injuries immediately',
    '📧 Send yourself timestamped emails with details',
    '☁️ Upload footage to cloud storage immediately',
    '📋 File FOIA requests for body cam, dash cam footage',
    '🚨 File formal complaints when appropriate',
    '⚖️ Consult attorney within 48 hours of serious incidents'
  ];
  
  doc.setFont('helvetica', 'normal');
  documentation.forEach(tip => {
    addWrappedText(tip, 10);
  });
  
  // FOOTER ON EACH PAGE
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('Civil Rights Legal Toolkit • www.wtpnews.org • BuildMyBot.ai', pageWidth / 2, pageHeight - 10, { align: 'center' });
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
  }
  
  // Save the PDF
  const filename = state 
    ? `Activist-Toolkit-${state.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`
    : `Activist-Journalist-Legal-Toolkit-${new Date().toISOString().split('T')[0]}.pdf`;
  
  doc.save(filename);
  
  return filename;
}

/**
 * Generate a quick reference ID card PDF
 */
export function generateIDCardPDF(state) {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [85.6, 53.98] // Credit card size
  });
  
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  
  // Front of card
  doc.setFillColor(30, 58, 138);
  doc.rect(0, 0, width, height, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('KNOW YOUR RIGHTS', width / 2, 8, { align: 'center' });
  
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  const rights = [
    '✓ Right to remain silent',
    '✓ Right to refuse searches',
    '✓ Right to record police',
    '✓ Right to an attorney'
  ];
  
  let y = 15;
  rights.forEach(right => {
    doc.text(right, 5, y);
    y += 5;
  });
  
  doc.setFontSize(6);
  doc.text(`State: ${state || 'All 50 States'}`, width / 2, height - 8, { align: 'center' });
  doc.text('www.wtpnews.org', width / 2, height - 4, { align: 'center' });
  
  // Back of card
  doc.addPage();
  doc.setFillColor(200, 16, 46);
  doc.rect(0, 0, width, height, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('IF STOPPED:', width / 2, 8, { align: 'center' });
  
  doc.setFontSize(6);
  doc.setFont('helvetica', 'normal');
  const steps = [
    '1. Ask: "Am I free to go?"',
    '2. "I do not consent to searches"',
    '3. "I invoke my right to remain silent"',
    '4. "I want to speak with my lawyer"',
    '5. Record the entire encounter',
    '6. Get badge numbers & names'
  ];
  
  y = 15;
  steps.forEach(step => {
    doc.text(step, 5, y);
    y += 6;
  });
  
  doc.setFontSize(5);
  doc.text('Do NOT physically resist. Assert rights verbally.', width / 2, height - 4, { align: 'center' });
  
  const filename = `Rights-Card-${state ? state.replace(/\s+/g, '-') : 'National'}.pdf`;
  doc.save(filename);
  
  return filename;
}
