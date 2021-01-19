export const HANDLE_TOGGLE_LISTENED = "HANDLE_TOGGLE_LISTENED";
export const HANDLE_TOGGLE_FAVORITE = "HANDLE_TOGGLE_FAVORITE";


export const handleToggleListened = () => {
    return {
        type: HANDLE_TOGGLE_LISTENED
    };
};

export const handleToggleFavorite = () => {
    return {
        type: HANDLE_TOGGLE_FAVORITE
    };
};