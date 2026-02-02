import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

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
