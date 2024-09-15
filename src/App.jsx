
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Homepage'
import FaQ from './components/fff'
function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/homepage" element={<Home />} />
      <Route path="/faq" element={<FaQ />} />
      <Route path="/chat" element={<iframe src="/chat.html" width="100%" height="500px" />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
