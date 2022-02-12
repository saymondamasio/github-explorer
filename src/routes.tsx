import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Repositories } from './pages/Repositories'
import { Repository } from './pages/Repository'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/repositories/:user/:repo" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  )
}
