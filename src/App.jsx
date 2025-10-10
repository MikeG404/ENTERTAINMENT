import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import { MoviePage, SeriePage, BookmarkPage, HomePage } from './pages/index'
import './App.scss'

function App() {

	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/movies" element={<MoviePage />}></Route>
					<Route path="/series" element={<SeriePage />}></Route>
					<Route path="/bookmarks" element={<BookmarkPage />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
