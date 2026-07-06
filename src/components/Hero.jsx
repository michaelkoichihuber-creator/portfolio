import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <span className="hero__mark" aria-hidden="true" />
        <h1 className="hero__name">Michael Huber</h1>
        <p className="hero__subtitle">Computer Engineering Student &amp; Full-Stack Developer</p>
        <p className="hero__intro">
          I build modern, production-quality React applications — from
          component-driven UIs to full e-commerce experiences — with a focus
          on clean architecture, responsive design, and real-world polish.
        </p>
      </div>
    </section>
  )
}
