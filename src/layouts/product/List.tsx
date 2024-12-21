import React from "react";
import Book from "../../models/Book";
import BookProps from "./components/BookProps";

const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: require("./../../images/books/1.png"),
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: require("./../../images/books/2.jpg")
,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: require("./../../images/books/1.png")
,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl:require("./../../images/books/1.png")
,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: require("./../../images/books/2.jpg")
,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: require("./../../images/books/1.png")
,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: require("./../../images/books/1.png")
,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: require("./../../images/books/1.png")
,
        },

    ];
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map((book) => (
                            <BookProps key={book.id}  book={book} />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default List;