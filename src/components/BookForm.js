import React, { useContext, useState } from 'react'
import { BookContext } from './context/BookContext';
const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { dispatch } = useContext(BookContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title !== "" && author !== "") {
            dispatch({
                type: 'ADD_BOOK', book: {
                    title, author
                }
            });
        }

        setTitle('');
        setAuthor('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} />
                <input type="submit" value="Add Book" />
            </form>

        </div>
    );
}

export default BookForm;