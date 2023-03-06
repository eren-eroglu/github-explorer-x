function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10  text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
