import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
