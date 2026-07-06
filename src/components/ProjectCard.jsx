import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { title, description, liveUrl, githubUrl } = project

  return (
    <article className="project-card">
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
      <div className="project-card__actions">
        <a
          className="project-card__btn project-card__btn--primary"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
        <a
          className="project-card__btn project-card__btn--ghost"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  )
}
