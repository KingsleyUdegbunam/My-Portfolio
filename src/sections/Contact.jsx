import { ContactHeader } from "../Components/Contact/ContactHeader";
import { ContactNav } from "../Components/Contact/ContactNav";
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
            <p>COME</p>
            <p>SAY</p>
          </div>
          <p>HI</p>
        </section>
        <ContactNav />
      </section>
    </footer>
  );
}
