import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact">
      <form
        name="contact"
        method="post"
        className="contact_form"
        data-netlify="true"
        onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
        <label for="name"> </label>
        Ton Nom: <input type="text" name="name" />
        <label for="email"> </label>
        Ton Email: <input type="email" name="email" />
        <label for="number"> </label>
        Combien tu seras: <input type="number" name="number" />
        <label for="message"> </label>
        Ton Message: <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
      ,
    </div>
  );
}

export default ContactForm;
