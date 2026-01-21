import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <ul className="navbar-menu">
        <li><a href="#home">홈</a></li>
        <li><a href="#projects">프로젝트</a></li>
        <li><a href="#skills">기술스택</a></li>
        <li><a href="#education">교육</a></li>
        <li><a href="#contact">연락처</a></li>
      </ul>
    </nav>
  );
}