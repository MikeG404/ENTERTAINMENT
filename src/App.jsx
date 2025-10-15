import './App.scss'
import MainLayout from './components/MainLayout'
import TrendingGalleryLayout from './components/Trending/TrendingGalleryLayout'
import MediaGalleryLayout from './components/MediaGallery/MediaGalleryLayout'
import { MoviePage, SeriePage, BookmarkPage, HomePage } from './pages/index'
import { Routes, Route } from 'react-router-dom'

function App() {

	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route element={<MediaGalleryLayout />}>
						<Route element={<TrendingGalleryLayout />}>
							<Route index element={<HomePage />} />
						</Route>
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
