import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>

                <div className="modal-body">
                    <p>{project.detail?.content}</p>

                    <div className="modal-images">
                        {project.detail?.images?.map((img, idx) => (
                            <img src={img} alt="" key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}