// src/components/Education.jsx
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="education-title">교육</h2>

      <div className="education-card">
        <h3 className="education-course">
          공공데이터 융합 AWS 클라우드 활용 풀스택 개발자 양성과정
        </h3>

        <p className="education-period">2024.01 ~ 2024.06 · 약 6개월 과정</p>

        <p className="education-desc">
          React 기반 프론트엔드와 Java · Spring Boot 기반 백엔드를 함께 학습하며,
          OpenAPI 연동 및 AWS 클라우드 배포까지 경험한 실무 중심 풀스택 교육과정입니다.
        </p>

        <div className="education-section">
          <h4>주요 학습 내용</h4>
          <ul>
            <li>HTML, CSS, JavaScript 기반 웹 화면 구현</li>
            <li>React를 활용한 SPA 프론트엔드 개발</li>
            <li>Java, Spring Boot 기반 REST API 서버 개발</li>
            <li>SQL 및 데이터베이스 설계</li>
            <li>OpenAPI 연동 및 공공데이터 활용</li>
            <li>AWS 기반 웹 애플리케이션 배포</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
