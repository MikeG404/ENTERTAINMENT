import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import { MoviePage, SeriePage, BookmarkPage, HomePage } from './pages/index'
import './App.css'

function App() {

	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<HomePage />} />
					<Route path="/movie" element={<MoviePage />}></Route>
					<Route path="/serie" element={<SeriePage />}></Route>
					<Route path="/bookmark" element={<BookmarkPage />}></Route>
				</Route>
			</Routes>

		</>
	)
}

export default App
