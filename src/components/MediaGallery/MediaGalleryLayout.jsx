import { Fragment, useMemo } from 'react';
import { useMovieStore } from '../../stores/useMovieStore.js';
import { Outlet, useLocation } from 'react-router-dom';
import MediaGallery from './MediaGallery.jsx';

const MediaGalleryLayout = () => {
    const media = useMovieStore((s) => s.media);
    const searchQuery = useMovieStore((s) => s.searchQuery);
    const location = useLocation();
    

    let sectionTitle = "Recommended for you";
    let mediaType = media;
    
    if (location.pathname === '/movies') {
        sectionTitle = "Movies";
        mediaType = media.filter((elem) => elem.category === "Movie");
    } else if (location.pathname === '/series') {
        sectionTitle = "TV Series";
        mediaType = media.filter((elem) => elem.category === "TV Series");
    }

    const filteredMedia = useMemo(() => {
        if (!searchQuery) return mediaType

        return mediaType.filter((elem) => 
            elem.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })

    return (
        <Fragment>
            <Fragment>
                <Outlet />
            </Fragment>
            <MediaGallery 
                movies={filteredMedia} 
                sectionTitle={sectionTitle}
            />
        </Fragment>
    )
}

export default MediaGalleryLayout;