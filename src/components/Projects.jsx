import { useState } from "react";
import { ProjectsData } from "../data/ProjectsData";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">프로젝트</h2>

      <div className="projects-list">
        {ProjectsData.map((project) => {
          // ✅ tech가 배열이든 문자열이든 안전하게 배열로 변환
          const techArray = Array.isArray(project.tech)
            ? project.tech
            : (project.tech || "")
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean);

          return (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              {/* ===== 상단 텍스트 ===== */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* ===== 기술 스택 태그 ===== */}
              <div className="project-tags">
                {techArray.map((t, i) => (
                  <span className="project-tag" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              {/* ===== 하단 영역: 날짜 + 자세히 보기 ===== */}
              <div className="project-footer">
                {project.period && (
                  <div className="project-period">{project.period}</div>
                )}
                <div className="project-more">자세히 보기 →</div>
              </div>
            </div>
          );
        })}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
