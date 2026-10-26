import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site, sampleIssues } from '../data.js'

export default function Home() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function subscribe(e) {
    e.preventDefault()
    if (!email.trim()) return
    // TODO:(Mailchimp, Buttondown, etc.)
    // thinking Beehive
    //
    setDone(true)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-orb-3" aria-hidden="true" />
        <div className="container">
          <span className="eyebrow">A weekly newsletter</span>
          <h1 className="serif">
            Ideas worth<br />reading, <em>every week.</em>
          </h1>
          <p>{site.tagline} No noise, no spam — just one good email.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#subscribe">Subscribe free</a>
            <Link className="btn btn-ghost" to="/archive">Read the archive</Link>
          </div>
          <div className="hero-stats">
            <div><strong>Weekly</strong><span>Every Sunday</span></div>
            <div><strong>100% free</strong><span>Forever</span></div>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="subscribe">
        <div className="container">
          <div className="section-label">Join the list</div>
          <h2 className="serif">One email a week. That's it.</h2>
          <p className="page-sub">
            You'll get every issue the morning it goes out, plus an occasional
            behind-the-scenes note. Unsubscribe anytime.
          </p>
          {done ? (
            <div className="signup-card">
              <p className="signup-success">
                You're on the list! Check your inbox to confirm your subscription.
              </p>
            </div>
          ) : (
            <form className="signup-card" onSubmit={subscribe}>
              <input
                className="search-input"
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-label">Recent issues</div>
              <h2 className="serif">The latest from the list</h2>
            </div>
            <Link className="btn btn-ghost btn-sm" to="/archive">Full archive →</Link>
          </div>
          <div className="issue-grid preview-grid">
            {sampleIssues.slice(0, 3).map((issue) => (
              <article className="issue-card" key={issue.slug}>
                <div className="issue-meta">
                  <span className="issue-num">Issue #{issue.number}</span>
                  <span>{issue.date}</span>
                </div>
                <h3>{issue.title}</h3>
                <p>{issue.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
