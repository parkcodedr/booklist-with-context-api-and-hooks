import React, { useReducer, createContext } from 'react';
import { useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });


    useEffect(() => {

    }, [])
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;