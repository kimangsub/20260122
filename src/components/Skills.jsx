// src/components/Skills.jsx
import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={20} />,
      skills: [
        {
          name: 'JavaScript (ES6+)',
          description: [
            'ES6+ 문법을 활용하여 가독성 있고 유지보수하기 쉬운 코드를 작성할 수 있습니다.',
            '비동기 처리(async/await)를 이해하고 API 통신 로직에 적용할 수 있습니다.',
            'DOM 조작 및 이벤트 처리를 통해 사용자 인터랙션을 구현할 수 있습니다.',
          ],
        },
        {
          name: 'HTML5 / CSS3',
          description: [
            '시맨틱 태그를 활용하여 웹 표준을 준수한 마크업을 작성할 수 있습니다.',
            'Flexbox와 Grid를 활용한 레이아웃 구성이 가능합니다.',
            '반응형 UI를 고려한 구조 설계 및 스타일링이 가능합니다.',
          ],
        },
        {
          name: 'React.js',
          description: [
            'Hooks를 사용하여 함수형 컴포넌트에서 생명주기와 상태를 관리할 수 있습니다.',
            'useState와 useRecoil을 사용하여 전역 및 로컬 상태 관리를 구현할 수 있습니다.',
            '컴포넌트 단위로 UI를 분리하여 재사용성을 고려한 구조 설계가 가능합니다.',
            'Props를 활용하여 컴포넌트 간 데이터 흐름을 관리할 수 있습니다.',
            'API 연동을 통해 데이터를 받아와 화면에 렌더링하는 작업이 가능합니다.',
          ],
        },
        {
          name: 'React Native',
          description: [
            'React Native의 기본 구조와 컴포넌트 개념에 대한 이해가 있습니다.',
            '웹 React와의 차이점과 모바일 UI 구성 방식에 대해 학습한 경험이 있습니다.',
          ],
        },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server size={20} />,
      skills: [
        {
          name: 'Java',
          description: [
            '객체지향 프로그래밍 개념을 이해하고 이를 기반으로 코드를 작성할 수 있습니다.',
            '기본적인 컬렉션 프레임워크(List, Map 등)를 활용할 수 있습니다.',
          ],
        },
        {
          name: 'Spring Boot',
          description: [
            'Spring Boot를 활용하여 RESTful API 서버를 구축할 수 있습니다.',
            'Controller, Service, Repository 계층 구조에 대한 이해가 있습니다.',
            'API 요청/응답 흐름을 이해하고 간단한 비즈니스 로직을 구현할 수 있습니다.',
          ],
        },
        {
          name: 'SQL',
          description: [
            '기본적인 SQL 문법(SELECT, INSERT, UPDATE, DELETE)을 이해하고 있습니다.',
            '데이터베이스 테이블 구조와 관계 개념에 대한 기초 지식이 있습니다.',
          ],
        },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench size={20} />,
      skills: [
        {
          name: 'AWS EC2 / AWS S3',
          description: [
            'EC2를 활용한 서버 환경 구성 및 배포 경험이 있습니다.',
            'S3를 활용하여 정적 파일을 업로드하고 관리할 수 있습니다.',
          ],
        },
        {
          name: 'Git / GitHub',
          description: ['Git을 활용한 버전 관리 및 기본적인 브랜치 전략을 이해합니다.'],
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* ✅ 섹션 타이틀 (다시 추가) */}
        <div className="skills-header">
          <h1>기술 스택</h1>
        </div>

        <div className="skills-list">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h2 className="category-title">{category.title}</h2>
              </div>

              <div className="category-divider" />

              <div className="skills-grid">
                {category.skills.map((skill, sidx) => (
                  <div key={sidx} className="skill-item">
                    <h3 className="skill-name">{skill.name}</h3>

                    <ul className="skill-description">
                      {skill.description.map((line, lidx) => (
                        <li key={lidx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
