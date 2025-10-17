import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getMovies, getSeries, getTrendingMovies } from '../services/service';

export const useMovieStore = create(
  persist(
    (set, get) => ({
      media: [],
      trending: [],
      bookmarks: [],
      searchQuery: '',
      isMediaLoading: false,
      isTrendingLoading: false,
      mediaError: null,
      trendingError: null,

      // Actions synchrones
      setSearchQuery: (query) => set({ searchQuery: query }),
      toggleBookmark: (id) => {
        const { bookmarks } = get();
        const next = bookmarks.includes(id)
          ? bookmarks.filter((b) => b !== id)
          : [...bookmarks, id];
        set({ bookmarks: next });
      },
      isBookmarked: (id) => get().bookmarks.includes(id),

      fetchTrending: async () => {
        set({ isTrendingLoading: true, trendingError: null });
        try {
          const list = await getTrendingMovies();
          set({ trending: list, isTrendingLoading: false });
        } catch (e) { 
          set({
            trendingError: e.message ?? 'Erreur de chargement',
            isTrendingLoading: false,
          });
        }
      },

      fetchMedia: async () => {
        set({ isMediaLoading: true, mediaError: null});
        try {
          const moviesList = await getMovies();
          const seriesList = await getSeries();
          const mixedList = moviesList.concat(seriesList);
          set({ media: mixedList, isMediaLoading: false});
        } catch (e) {
          set({
            mediaError: e.message ?? 'Erreur de chargement',
            isMediaLoading: false,
          })
        }
      }
    }),
    {
      name: 'movie-store',
      partialize: (state) => ({
        bookmarks: state.bookmarks,
        searchQuery: state.searchQuery,
      }),
    }
  )
);
