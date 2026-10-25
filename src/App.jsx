import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Archive from './pages/Archive.jsx'

// React Router doesn't scroll to hash targets on client-side navigation,
// so links like to="/#subscribe" need this to land on the section.
function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
