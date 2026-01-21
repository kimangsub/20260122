import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <section id="home" className="hero">
            <h1>
                안녕하세요.<br />
                <span>신입 개발자 안수빈입니다.</span>
            </h1>

            <a href="#projects" className="hero-btn">
                둘러보기
            </a>

        </section>
    )
}