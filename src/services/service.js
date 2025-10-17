// src/services/service.js
const BASE_URL = 'https://api.themoviedb.org/3';
const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE = 'https://image.tmdb.org/t/p/w780';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

function resolveArtwork(entity) {
  if (entity.backdrop_path) return `${BACKDROP_BASE}${entity.backdrop_path}`;
  if (entity.poster_path) return `${POSTER_BASE}${entity.poster_path}`;
  return '';
}

function mapMovie(m) {
  return {
    id: m.id,
    category: 'Movie',
    title: m.title ?? m.name ?? 'Untitled',
    year: m.release_date ? Number(m.release_date.slice(0, 4)) : null,
    image: resolveArtwork(m),
  };
}
function mapSeries(s) {
  return {
    id: s.id,
    category: 'TV Series',
    title: s.name ?? s.title ?? 'Untitled',
    year: s.first_air_date ? Number(s.first_air_date.slice(0, 4)) : null,
    image: resolveArtwork(s),
  };
}

export async function getTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day`, options);
  if (!res.ok) throw new Error(`TMDB error: ${res.status}`);
  const data = await res.json();
  return data.results.slice(0, 10).map(mapMovie);
}

export async function getSeries(page = 1) {
  const res = await fetch(`${BASE_URL}/tv/popular?page=${page}`, options);
  if (!res.ok) throw new Error(`TMDB error: ${res.status}`);
  const data = await res.json();
  return data.results.map(mapSeries);
}

export async function getMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/popular?page=${page}`, options);
  if (!res.ok) throw new Error(`TMDB error: ${res.status}`);
  const data = await res.json();
  return data.results.map(mapMovie);
}
