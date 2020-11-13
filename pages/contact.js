const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>Keep in Touch</h1>
      <form className="contact-form">
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
          <textarea rows="5" placeholder="Enter message"></textarea>
        </label>
        <button>Send</button>
      </form>
      <style jsx global>{`
        body {
          background: #cfe5c8;
        }
        .contact-wrapper {
          margin-top: 80px;
          text-align: center;
          height: 82vh;
          min-height: 82vh;
        }
        h1 {
          margin-bottom: 50px;
          color: #4d7a6a;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          height: 65%;
          width: 50%;
          margin: auto;
          background: #f8fff8;
        }
        button {
          width: 30%;
          margin: auto;
          height: 30px;
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
      `}</style>
    </div>
  );
};

export default Contact;
