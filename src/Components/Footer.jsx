export default function Footer() {
  return (
    <footer className="footer">
      <ul className="contact-links">
        <li>
          <a id="link-mail" href="mailto:softwaredevelopmentacademy@gmail.com">
            <span className="fas fa-envelope"></span>Mail
          </a>
        </li>
        <li>
          <a
            id="link-instagram"
            href="https://www.instagram.com/munamii.cakery/"
            target="_blank"
          >
            <span className="fab fa-instagram-square"></span>Instagram
          </a>
        </li>
        <li>
          <a
            id="link-facebook"
            href="https://www.facebook.com/munamiicupcakes/"
            target="_blank"
          >
            <span className="fab fa-facebook-square"></span>Facebook
          </a>
        </li>
      </ul>
    </footer>
  );
}
