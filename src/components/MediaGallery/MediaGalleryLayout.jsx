import { Fragment } from 'react';
import { useMovieStore } from '../../stores/useMovieStore.js';
import { Outlet, useLocation } from 'react-router-dom';
import MediaGallery from './MediaGallery.jsx';

const MediaGalleryLayout = () => {
    const media = useMovieStore((s) => s.media);
    const location = useLocation(); // Détecte la route actuelle
    

    let sectionTitle = "Recommended for you";
    let mediaType = media;
    
    if (location.pathname === '/movies') {
        sectionTitle = "Movies";
        mediaType = media.filter((elem) => elem.category === "Movie");
    } else if (location.pathname === '/series') {
        sectionTitle = "TV Series";
        mediaType = media.filter((elem) => elem.category === "TV Series");
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