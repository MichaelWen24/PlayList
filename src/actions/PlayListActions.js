export const HANDLE_TOGGLE_LISTENED = "HANDLE_TOGGLE_LISTENED";
export const HANDLE_TOGGLE_FAVORITE = "HANDLE_TOGGLE_FAVORITE";


export const handleToggleListened = (song) => {
    return {
        type: HANDLE_TOGGLE_LISTENED,
        payload: song,
    };
};

export const handleToggleFavorite = (song) => {
    return {
        type: HANDLE_TOGGLE_FAVORITE,
        payload: song,
    };
};