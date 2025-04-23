const Footer = () => {
  return (

      <footer style={{ display: "flex", justifyContent: "space-between" }}>
        <p>@Copyright by none 2025</p>
        <div style={{ display: "flex", flexGrow: "1", justifyContent: 'center'}}>
          <ul style={{ listStyle: "none", display: "flex", gap: '20px' }}>
            <li>Privacy policy</li> <li>Cookie Policy</li>
          </ul>
        </div>
      </footer>  );
};

export default Footer;
