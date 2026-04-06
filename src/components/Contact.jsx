import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [typoSuggestion, setTypoSuggestion] = useState(null);

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Prefill message from URL query params
    try {
      const params = new URLSearchParams(window.location.search);
      const preMessage = params.get('message');
      const subject = params.get('subject');
      if (preMessage || subject) {
        setForm(prev => ({
          ...prev,
          message: subject ? `${subject}\n\n${(preMessage || '')}` : (preMessage || '')
        }));
      }
    } catch (err) {
      // ignore if URLSearchParams unavailable
    }
  }, []);

  // Email validation function
  const validateEmail = (email) => {
    // 1. Basic syntax validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valid: false, reason: 'Invalid email format' };
    }

    // 2. Check for common typos in popular domains
    const commonDomains = {
      'gmail.com': ['gmil.com', 'gmai.com', 'gnail.com', 'gmial.com', 'gmal.com'],
      'yahoo.com': ['yaho.com', 'yahooo.com', 'yhoo.com', 'yaho0.com'],
      'outlook.com': ['outlok.com', 'outook.com', 'outlool.com'],
      'hotmail.com': ['hotmal.com', 'hotmil.com', 'hotmait.com'],
      'protonmail.com': ['protonmai.com', 'protonmal.com'],
      'icloud.com': ['iclod.com', 'icould.com']
    };

    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) {
      return { valid: false, reason: 'Invalid email format' };
    }

    for (const [correct, typos] of Object.entries(commonDomains)) {
      if (typos.includes(domain)) {
        return { 
          valid: false, 
          reason: `Did you mean ${email.split('@')[0]}@${correct}?`,
          suggestion: `${email.split('@')[0]}@${correct}`
        };
      }
    }

    return { valid: true };
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    // Reset confirmation when email changes
    if (name === 'email') {
      setEmailConfirmed(false);
      setShowConfirmation(false);
      setTypoSuggestion(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    // Validate email format and check for typos
    const emailCheck = validateEmail(form.email);
    if (!emailCheck.valid) {
      if (emailCheck.suggestion) {
        setTypoSuggestion(emailCheck);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
      return;
    }

    // First click: Show confirmation dialog
    if (!emailConfirmed) {
      setShowConfirmation(true);
      return;
    }

    // Second click: Actually send the email
    setLoading(true);
    setSubmitStatus('idle');

    const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
});

if (response.ok) {
  setLoading(false);
  setSubmitStatus('success');
  setEmailConfirmed(false);
  setShowConfirmation(false);
  setForm({ name: '', email: '', message: '' });
  setTimeout(() => setSubmitStatus('idle'), 5000);
} else {
  throw new Error('Failed to send email');
}
  };

  const confirmEmail = () => {
    setEmailConfirmed(true);
    setShowConfirmation(false);
  };

  const editEmail = () => {
    setShowConfirmation(false);
    setEmailConfirmed(false);
  };

  const acceptSuggestion = () => {
    setForm(prev => ({ ...prev, email: typoSuggestion.suggestion }));
    setTypoSuggestion(null);
  };

  const dismissSuggestion = () => {
    setTypoSuggestion(null);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>
          Have questions or want to join? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors" 
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors" 
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors resize-none" 
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Tell us about your interest..."
                ></textarea>
              </div>
              
              {/* Typo Suggestion Dialog */}
              {typoSuggestion && (
                <div className="p-4 rounded-lg bg-yellow-600/10 border border-yellow-600/30 space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-yellow-400 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        Possible typo detected
                      </p>
                      <p className="text-xs text-gray-300 mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {typoSuggestion.reason}
                      </p>
                      <div className="bg-white/5 rounded p-2 mb-3">
                        <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Current:</p>
                        <p className="text-sm text-white line-through" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{form.email}</p>
                        <p className="text-xs text-gray-400 mt-2 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Suggested:</p>
                        <p className="text-sm text-green-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{typoSuggestion.suggestion}</p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={acceptSuggestion}
                          className="flex-1 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition-all text-sm"
                          style={{ fontFamily: 'Rajdhani, sans-serif' }}
                        >
                          ✓ Use Suggested Email
                        </button>
                        <button
                          type="button"
                          onClick={dismissSuggestion}
                          className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all text-sm"
                          style={{ fontFamily: 'Rajdhani, sans-serif' }}
                        >
                          Keep Current
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Email Confirmation Dialog */}
              {showConfirmation && (
                <div className="p-4 rounded-lg bg-blue-600/10 border border-blue-600/30 space-y-3">
                  <p className="text-sm font-semibold text-blue-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Please verify your email address:
                  </p>
                  <p className="text-lg font-bold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {form.email}
                  </p>
                  <p className="text-xs text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    We'll send a confirmation to this email. Make sure it's correct!
                  </p>
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={confirmEmail}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      ✓ Email is Correct
                    </button>
                    <button
                      type="button"
                      onClick={editEmail}
                      className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      ✎ Edit Email
                    </button>
                  </div>
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-3 rounded-lg font-semibold transition-all transform shadow-lg flex items-center justify-center gap-2 ${
                  loading 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700 shadow-green-600/30 hover:shadow-green-600/50'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700 shadow-red-600/30 hover:shadow-red-600/50'
                    : emailConfirmed
                    ? 'bg-green-600 hover:bg-green-700 hover:scale-105 shadow-green-600/30 hover:shadow-green-600/50'
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-blue-600/30 hover:shadow-blue-600/50'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                {loading ? 'Sending...' : 
                 submitStatus === 'success' ? 'Message Sent!' :
                 submitStatus === 'error' ? 'Failed to Send' : 
                 emailConfirmed ? 'Send Message ✓' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-sm mt-2 p-3 rounded-lg bg-green-600/10 text-green-400 border border-green-600/20" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Thank you! Your message has been sent successfully. Check your email for confirmation.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-sm mt-2 p-3 rounded-lg bg-red-600/10 text-red-400 border border-red-600/20" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Something went wrong! Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Email</p>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>management@thrustmit.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Location</p>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Bay No. 11, Techshila, Opp. Hostel Block 14, <br/>Manipal Institute of Technology, Manipal,<br /> Udupi, Karnataka - 576104, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Phone</p>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Team Leader: +91 9881032081<br/>Team Manager: +91 9920511275</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;