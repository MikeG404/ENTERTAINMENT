import { NavLink, Routes, Route } from 'react-router-dom'
import { MoviePage, SeriePage, BookmarkPage } from './pages/index'
import './App.css'
import Header from './components/Header'

function App() {

	return (
		<>
			<Header />

			<nav>
				<NavLink to="/" end>Home</NavLink>
				<NavLink to="/movie" end>Movie</NavLink>
				<NavLink to="/serie" end>Serie</NavLink>
				<NavLink to="/bookmark" end>BookMark</NavLink>
			</nav>

			<Routes>
				<Route path="/" element={<MoviePage />}></Route>
				<Route path="/movie" element={<MoviePage />}></Route>
				<Route path="/serie" element={<SeriePage />}></Route>
				<Route path="/bookmark" element={<BookmarkPage />}></Route>
			</Routes>

			<main>

			</main>
		</>
	)
}

export default App
