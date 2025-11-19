import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Teams from './pages/Teams'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

// Layout & Providers
import { AppLayout } from './shared/AppLayout'
import { ThemeProvider } from './providers/ThemeProvider'
import { QueryProvider } from './providers/QueryProvider'
import { AuthProvider } from './providers/AuthProvider'
import { ThreeSceneProvider } from './providers/ThreeSceneProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <ThreeSceneProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}> 
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="teams" element={<Teams />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="projects/:id" element={<ProjectDetail />} />
                  <Route path="achievements" element={<Achievements />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="login" element={<Login />} />
                  <Route path="dashboard/*" element={<Dashboard />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ThreeSceneProvider>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
