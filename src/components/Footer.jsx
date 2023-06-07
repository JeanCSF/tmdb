import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    const fullYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://wa.me/5511932094609" target="_blank" rel="external" title="Watsapp"> <FaWhatsapp /> </a>
                <a href="https://github.com/JeanCSF" target="_blank" rel="external" title="Github"> <FaGithub /> </a>
                <a href="https://www.linkedin.com/in/jean-carlos-6149a2232/" target="_blank" rel="external" title="Linkedin"> <FaLinkedin /> </a>
            </div>
            <p><a href="https://jeancsf.github.io/portfolio" target="_blank" rel="external">JeanCSF&copy; {fullYear}</a></p>
        </footer>
    )
}
export default Footer;
