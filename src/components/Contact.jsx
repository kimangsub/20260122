// src/components/Contact.jsx
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const githubUrl = "https://github.com/kimangsub";
  const emailAddress = "kimangsub@naver.com";

  const [githubText, setGithubText] = useState("GitHub");

  // ✅ Email: hover = 주소, leave = Email, click = 토글 고정
  const [emailText, setEmailText] = useState("Email");
  const [emailLocked, setEmailLocked] = useState(false);

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">연락</h2>

      <p className="contact-desc">
        끝까지 봐주셔서 감사합니다.<br />
        함께 일하고 싶으시다면 언제든 연락주세요!
      </p>

      <div className="contact-buttons">
        {/* GitHub 버튼 */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github"
          onMouseEnter={() => setGithubText(githubUrl)}
          onMouseLeave={() => setGithubText("GitHub")}
        >
          {githubText}
        </a>

        {/* Email 버튼 */}
        <button
          type="button"
          className="contact-btn email"
          onMouseEnter={() => {
            if (!emailLocked) setEmailText(emailAddress);
          }}
          onMouseLeave={() => {
            if (!emailLocked) setEmailText("Email");
          }}
          onClick={() => {
            // ✅ 토글: 고정 <-> 원복
            setEmailLocked((prev) => {
              const next = !prev;
              setEmailText(next ? emailAddress : "Email");
              return next;
            });
          }}
        >
          {emailText}
        </button>
      </div>
    </section>
  );
}
