import { ContactHeader } from "../Contact/ContactHeader";
import { ContactNav } from "../Contact/ContactNav";
import "./Contact.css";

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <section className="contact-wrapper">
        <div className="overlay-footer"></div>
        <div className="header-welcome-text-wrapper">
          <ContactHeader />
        </div>
        <section className="hello">
          <div className="hello-word-2">
            <p>LET'S</p>
          </div>
          <p>CONNECT</p>
        </section>
        <ContactNav />
      </section>
    </footer>
  );
}
