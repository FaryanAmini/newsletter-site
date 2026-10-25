import { Link } from 'react-router-dom'
import { sampleIssues } from '../data.js'

export default function Archive() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="section-label">Archive</div>
        <h2 className="serif" style={{ maxWidth: '820px' }}>Every issue we've ever sent</h2>
        <p className="page-sub">
          Browse past newsletters by date. Subscribe below to get future issues
          the moment they publish.
        </p>
        <div className="issue-grid">
          {sampleIssues.map((issue) => (
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
        <div className="center-cta">
          <Link className="btn btn-primary" to="/#subscribe">Subscribe to get the next one</Link>
        </div>
      </div>
    </section>
  )
}
