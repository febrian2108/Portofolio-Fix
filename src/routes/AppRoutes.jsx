import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes

