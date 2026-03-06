import "./ContactHeader.css";

export function ContactHeader() {
  return (
    <header className="contact-header">
      <p>[KAY]</p>

      <div className="copyright">
        <span className="small-device copyright-sym">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <text x="50%" y="50%" dy=".3em">
              ©
            </text>
          </svg>
        </span>

        <span className="small-device">2026</span>
        <span className="large-device">[COPYRIGHT 2026]</span>
      </div>
    </header>
  );
}
