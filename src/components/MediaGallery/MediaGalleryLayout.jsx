import styles from './mediagallerylayout.module.scss'
import { Fragment } from 'react';
import { useMovieStore } from '../../stores/useMovieStore.js';
import { Outlet } from 'react-router-dom';
import MediaGallery from './MediaGallery.jsx';

const MediaGalleryLayout = () => {
const movies = useMovieStore((s) => s.movies)

    return (
        <Fragment>
            <Fragment>
                <Outlet />
            </Fragment>
            <MediaGallery movies={movies}/>
        </Fragment>
    )
}

export default MediaGalleryLayout;