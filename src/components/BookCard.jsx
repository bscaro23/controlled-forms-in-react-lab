const BookCard = (props) => {
    const {title, author} = props
    return(
        <div>
            <h2>{title}</h2>
            <h3>by {author}</h3>
        </div>
    )
}

export default BookCard