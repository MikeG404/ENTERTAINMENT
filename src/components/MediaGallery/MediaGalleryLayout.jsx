import { Fragment } from 'react';
import { useMovieStore } from '../../stores/useMovieStore.js';
import { Outlet, useLocation } from 'react-router-dom';
import MediaGallery from './MediaGallery.jsx';

const MediaGalleryLayout = () => {
    const movies = useMovieStore((s) => s.movies);
    const location = useLocation(); // Détecte la route actuelle
    
    // Définir le titre et filtrer les données selon la page
    let sectionTitle = "Recommended for you";
    let filteredMovies = movies;
    
    if (location.pathname === '/movies') {
        sectionTitle = "Movies";
        // filteredMovies = movies.filter(m => m.category === "Movie");
    } else if (location.pathname === '/series') {
        sectionTitle = "TV Series";
        // filteredMovies = movies.filter(m => m.category === "TV Series");
    }

    return (
        <Fragment>
            <Fragment>
                <Outlet />
            </Fragment>
            <MediaGallery 
                movies={filteredMovies} 
                sectionTitle={sectionTitle}
            />
        </Fragment>
    )
}

export default MediaGalleryLayout;