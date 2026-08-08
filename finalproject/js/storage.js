/* ==========================================
   STORAGE.JS
   Handles Local Storage for Favorite Strategies
========================================== */

const STORAGE_KEY = "favoriteStrategies";

/* ===========================
   GET FAVORITES
=========================== */

export function getFavorites() {

    const favorites = localStorage.getItem(STORAGE_KEY);

    return favorites ? JSON.parse(favorites) : [];

}

/* ===========================
   SAVE FAVORITES
=========================== */

export function saveFavorites(favorites) {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(favorites)

    );

}

/* ===========================
   TOGGLE FAVORITE
=========================== */

export function toggleFavorite(id) {

    let favorites = getFavorites();

    if (favorites.includes(id)) {

        favorites = favorites.filter(item => item !== id);

    } else {

        favorites.push(id);

    }

    saveFavorites(favorites);

    return favorites;

}

/* ===========================
   CHECK FAVORITE
=========================== */

export function isFavorite(id) {

    const favorites = getFavorites();

    return favorites.includes(id);

}