import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://wa.me/5511932094609" target="_blank"> <FaWhatsapp /> </a>
                <a href="https://github.com/JeanCSF" target="_blank"> <FaGithub /> </a>
                <a class="link-light" href="https://www.linkedin.com/in/jean-carlos-6149a2232/" target="_blank"> <FaLinkedin /> </a>
            </div>
            <p>JeanCSF&copy; 2023</p>
        </footer>
    )
}
export default Footer;
