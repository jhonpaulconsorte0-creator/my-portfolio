import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // This form doesn't submit anywhere real — it just confirms locally.
    setSubmitted(true);
  }

  return (
    <div className="page container contact">
      <span className="eyebrow"> contact</span>
      <h1>Contact</h1>
      <p className="contact-intro">
        If you want to know more, contact me.
      </p>

      <div className="contact-info mono">
        <div>
          <span className="contact-label">Email: </span> jhonpaulconsorte0@gmail.com.com
        </div>
        <div>
          <span className="contact-label">Github: </span> https://github.com/jhonpaulconsorte0-creator/my-portfolio.git
        </div>
        <div>
          <span className="contact-label">Contact Number: </span> +639105400932
        </div>
      </div>
      
      {submitted ? (
        <div className="contact-success">
          <p>Thanks, {form.name || 'friend'} — message received (locally).</p>
          <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>
            send another
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="field-label mono">name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span className="field-label mono">email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span className="field-label mono">message</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn">
            send message
          </button>
        </form>
      )}
    </div>
  );
}