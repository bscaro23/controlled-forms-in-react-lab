import { useState } from 'react';
import BookCard from './BookCard';

  

const BookShelf = (props) => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
    const [formData, setFormData] = useState({
    title: '',
    author: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        
        setBooks([...books, formData]);
       
        setFormData({ title: '', author: '' });
      };
    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                />
                <label htmlFor="lastName">Author: </label>
                <input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                />
                <button type="submit">Add   Book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, idx) => {
                return <BookCard key={idx} {...book}/>
            })}
        </div>
        </div>
    )
}

export default BookShelf;