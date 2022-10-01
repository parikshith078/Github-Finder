import { FaHashtag } from "react-icons/fa";

function Footer() {
  const footerDate = new Date().getFullYear();

  return (
    <footer className="footer px-3 pb-4 mx-auto text-primary-content footer-center">
      <div>
        <FaHashtag size="32" />
        <p>CopyRight &copy; {footerDate} All right reserver</p>
      </div>
    </footer>
  );
}

export default Footer;
