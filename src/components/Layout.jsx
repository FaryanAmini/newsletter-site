import { NavLink, Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { site } from '../data.js'

export default function Layout() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href="/">{site.name}<span>.</span></a>
          <nav>
            <ul className="nav-links">
              <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
              <li><NavLink to="/archive" className={({ isActive }) => (isActive ? 'active' : '')}>Archive</NavLink></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="btn btn-primary" href="#subscribe">Subscribe</a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid footer-grid-simple">
            <div className="footer-brand">
              <a className="logo" href="/">{site.name}<span>.</span></a>
              <p>
                {site.tagline} We send one email a week — no spam, no
                list-sharing.
              </p>
            </div>
            <div className="footer-col">
              <h4>Site</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/archive">Archive</a></li>
                <li><a href="#subscribe">Subscribe</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 {site.name}. All rights reserved.</span>
            {/*
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Unsubscribe</a>
            </div>
            */}
          </div>
        </div>
      </footer>
    </>
  )
}
