import { Fragment } from 'react';
import { useMovieStore } from '../../stores/useMovieStore.js';
import { Outlet, useLocation } from 'react-router-dom';
import MediaGallery from './MediaGallery.jsx';

const MediaGalleryLayout = () => {
    const movies = useMovieStore((s) => s.movies);
    const tvSeries = useMovieStore((s) => s.tvSeries);
    const location = useLocation(); // Détecte la route actuelle
    

    let sectionTitle = "Recommended for you";
    let mediaType = [];
    
    if (location.pathname === '/movies') {
        sectionTitle = "Movies";
        mediaType = movies;
    } else if (location.pathname === '/series') {
        sectionTitle = "TV Series";
        mediaType = tvSeries;
    }

    return (
        <Fragment>
            <Fragment>
                <Outlet />
            </Fragment>
            <MediaGallery 
                movies={mediaType} 
                sectionTitle={sectionTitle}
            />
        </Fragment>
    )
}

export default MediaGalleryLayout;