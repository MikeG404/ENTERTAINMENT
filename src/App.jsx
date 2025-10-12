import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import TrendingSection from './components/Trending/TrendingSection'
import { MoviePage, SeriePage, BookmarkPage, HomePage } from './pages/index'
import './App.scss'

function App() {

	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route element={<TrendingSection />}>
						<Route index element={<HomePage />} />
						<Route path="/movies" element={<MoviePage />}></Route>
						<Route path="/series" element={<SeriePage />}></Route>
					</Route>
					<Route path="/bookmarks" element={<BookmarkPage />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
