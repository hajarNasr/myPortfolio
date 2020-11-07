const Footer = () => {
  const tag = "<Code/>";
  return (
    <footer>
      <p>
        <code>&copy;2020 Made with {tag}</code>
      </p>

      <style jsx>{`
        footer {
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer p {
          padding: 0;
          margin: 0;
          margin: auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
