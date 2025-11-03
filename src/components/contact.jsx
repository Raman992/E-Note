import React from 'react'
import "./CSS/contact.css"

const Contact = () => {
  return (

    <div className="contact-page">
      <section className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out via any of the platforms below
        </p>
        <div className="contact-links">
          {/* <a href="mailto:ramanshakya992@gmail.com" className="contact-link"></a> */}
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&to=ramanshakya992@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fas fa-envelope"></i>
            <div className="contact-info">
              <div className="contact-name">Email</div>
              <div className="contact-desc">ramanshakya992@gmail.com</div>
            </div>
            <i className="fas fa-paper-plane"></i>
          </a>

          <a
            href="https://github.com/Raman992"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fab fa-github"></i>
            <div className="contact-info">
              <div className="contact-name">GitHub</div>
              <div className="contact-desc">View my projects</div>
            </div>
            <i className="fas fa-external-link-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/raman-shakya-a2bb65284"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className="fab fa-linkedin"></i>
            <div className="contact-info">
              <div className="contact-name">LinkedIn</div>
              <div className="contact-desc">Connect professionally</div>
            </div>
            <i className="fas fa-external-link-alt"></i>
          </a>

        </div>

        <footer className="contact-footer">
          🌻 Open For Work 🌻
        </footer>
      </section>
    </div>

  )
}

export default Contact;
