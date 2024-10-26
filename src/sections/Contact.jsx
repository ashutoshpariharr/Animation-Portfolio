import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const {t} = useTranslation()

  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Ashutosh Parihar',
        from_email: form.email,
        to_email: 'ashutoshparihar512@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )    
    .then(
      () => {
        setLoading(false);
        showAlert({
          show: true,
          text: 'Thank you for your message 😃',
          type: 'success',
        });
  
        setTimeout(() => {
          hideAlert(false);
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, 4000);
      },
      (error) => {
        setLoading(false);
        console.error(error);
  
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: 'danger',
        });
      }
    );
  }  

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">{t("contact_talk")}</h3>
          <p className="text-lg text-white-600 mt-3">
            {t("contact_description")}
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">{t("contact_form_name")}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">{t("contact_form_email")}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">{t("contact_form_message")}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={`${t("placeholder_message")}`}
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? `${t("contact_form_sending")}` : `${t("contact_form_submit")}`}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
