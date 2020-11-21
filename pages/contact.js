import { useState, useEffect } from "react";
import Head from "next/head";
const Contact = () => {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    // detect if the message was successfully sent
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className="contact-wrapper">
        <>
          <h1>Get in Touch</h1>
          {success && (
            <p className="thank-you-note">
              Thank you so much for your message :)
            </p>
          )}
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            // avoid showing captcha when submitting the form
            netlify-honeypot="bot-field"
            // this tells netlify that we want the user to stay on this page after the form submission
            action="/contact?success=true"
          >
            <label className="label">
              <span>Name&emsp;</span>
              <input type="text" name="name" placeholder="Name" />
            </label>
            <label className="label">
              <span>Email&ensp;&emsp;</span>
              <input
                type="email"
                required
                name="email"
                placeholder="email@example.com"
              />
            </label>
            <label className="label">
              <span>Message</span>
              <textarea
                rows="5"
                placeholder="Enter message"
                name="message"
                required
              ></textarea>
            </label>
            <input type="hidden" name="form-name" value="contact" />
            <button>Send</button>
          </form>

          <style jsx global>{`
            body {
              background: #cfe5c8;
            }

            .contact-wrapper {
              text-align: center;
              padding-bottom: 25px;
              margin-top: 20px;
              width: 100%;
            }
            h1 {
              padding-bottom: 40px;
              color: #4d7a6a;
            }
            .thank-you-note {
              color: #4d7a6a;
              margin-top: -30px;
              padding-bottom: 15px;
            }
            .contact-form {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              width: 50%;
              margin: auto;
              background: #f8fff8;
              padding: 10px;
            }
            .contact-form label,
            .contact-form button {
              margin: 25px;
            }
            button {
              width: 35%;
              margin: auto;
              height: 35px;
              color: white;
              background: #4d7a6a;
              border: none;
              box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
              border-radius: 2px;
              cursor: pointer;
            }
            button:hover {
              background-color: rgb(66, 133, 95);
            }
            .label {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 70%;
              margin: auto;
              height: 35px;
            }
            .label input {
              height: 35px;
              width: 100%;
            }
            .label input,
            .label textarea {
              flex: 0.9;
              border: none;
              padding-left: 3px;
            }
            .label span {
              margin: auto;
              flex: 0.25;
              height: 80%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f3f5f3;
              color: #38555e;
            }
            input,
            textarea {
              background: #faf8ff;
              border-left: 1px solid #c9dadb !important;
            }
            @media (max-width: 1100px) {
              .contact-form {
                width: 60%;
              }
              .contact-wrapper {
                margin-left: -20px;
              }
              .label {
                width: 90%;
              }
            }
            @media (max-width: 750px) {
              .contact-form {
                width: 80%;
              }
              .contact-wrapper {
                margin-left: -20px;
              }
              .label {
                width: 90%;
              }
            }
            @media (max-width: 550px) {
              .contact-form {
                width: 99%;
              }
              .contact-wrapper {
                margin-left: -20px;
              }
              .label {
                width: 100%;
              }
            }
          `}</style>
        </>
      </main>
    </>
  );
};

export default Contact;
