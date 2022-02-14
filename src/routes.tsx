import { HashRouter, Route, Routes } from 'react-router-dom'
import { Repositories } from './pages/Repositories'
import { Repository } from './pages/Repository'

export function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/repositories/:user/:repo" element={<Repository />} />
      </Routes>
    </HashRouter>
  )
}
