import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Home />
			</BrowserRouter>
			<Footer />
		</>
	)
}

export default App
