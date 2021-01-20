export const HANDLE_TOGGLE_LISTENED = "HANDLE_TOGGLE_LISTENED";
export const HANDLE_TOGGLE_FAVORITE = "HANDLE_TOGGLE_FAVORITE";


export const handleToggleListened = (id) => {
    return {
        type: HANDLE_TOGGLE_LISTENED,
        payload: id,
    };
};

export const handleToggleFavorite = (id) => {
    return {
        type: HANDLE_TOGGLE_FAVORITE,
        payload: id,
    };
};