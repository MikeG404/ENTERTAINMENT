import { create } from "zustand";

export const useMovieStore = create((set) => ({
  movies: [
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      genre: ["Adventure", "Drama", "Sci-Fi"],
      rating: 8.6,
      image:
        "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      genre: ["Action", "Crime", "Drama"],
      rating: 9.0,
      image:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: 4,
      title: "Parasite",
      year: 2019,
      genre: ["Comedy", "Drama", "Thriller"],
      rating: 8.6,
      image:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    },
    {
      id: 5,
      title: "Dune: Part One",
      year: 2021,
      genre: ["Adventure", "Sci-Fi"],
      rating: 8.0,
      image:
        "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    },
  ],
}));
