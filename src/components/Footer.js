import "../css/Footer.css";

function Footer() {
  const fecha = new Date();
  const year = fecha.getFullYear();

  return <div className="footer">© {year} Nesstop. Made with ❤️</div>;
}

export default Footer;
