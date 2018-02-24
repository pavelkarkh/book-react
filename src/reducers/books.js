const initialState = window && window.localStorage ? JSON.parse(localStorage.getItem('books')) || []: [];

export default function books(state = initialState, action) {
    switch(action.type) {
        case 'ADD_BOOK': {
            const tempStrorage = [
                action.payload,
                ...state
            ];
            window && window.localStorage ? localStorage.setItem('books', JSON.stringify(tempStrorage)): '';
            return tempStrorage;
        }
        case 'EDIT_BOOK': {
            const { id, title, author } = action.payload;
            const tempStrorage = state.map(book =>
                (book.id === id) ? {...book, title, author} : book
            );
            window && window.localStorage ? localStorage.setItem('books', JSON.stringify(tempStrorage)): '';
            return tempStrorage;
        }
        case 'REMOVE_BOOK': {
            const tempStrorage = state.filter(book => book.id !== action.payload);
            window && window.localStorage ? localStorage.setItem('books', JSON.stringify(tempStrorage)): '';
            return tempStrorage;
        }
        default:
            return state;
    }
}