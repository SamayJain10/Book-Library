const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const users = [
  { id: 1, name: 'Samay Jain', age: 22, phone: '9874521236', email: 'samay@example.com', address: 'Delhi' ,username: 'admin', password: 'password' },
  { id: 2, name: 'Abhinav', age: 25, phone: '8752030010', email: 'abhinav@example.com', address: 'Ghaziabad',username: 'user1', password: 'password01'  }
];

let books = [
  { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", rating: 4.2,  imageUrl: "http://localhost:3000/assets/images/book1.jpg" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", rating: 4.7, imageUrl: "http://localhost:3000/assets/images/book2.jpeg"  },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", rating: 4.1, imageUrl: "http://localhost:3000/assets/images/book3.jpeg"  },
  { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", rating: 4.5 , imageUrl: "http://localhost:3000/assets/images/book4.jpeg" },
  { id: 5, title: "The Selfish Gene", author: "Richard Dawkins", genre: "Science", rating: 4.4, imageUrl: "http://localhost:3000/assets/images/book5.jpeg" },
  { id: 6, title: "1984", author: "George Orwell", genre: "Fiction", rating: 4.6 , imageUrl: "http://localhost:3000/assets/images/book6.jpeg"},
  { id: 7, title: "Moby Dick", author: "Herman Melville", genre: "Fiction", rating: 5.0 , imageUrl: "http://localhost:3000/assets/images/book7.jpeg"},
  { id: 8, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", rating: 4.4 , imageUrl: "http://localhost:3000/assets/images/book8.jpeg"},
  { id: 9, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical Fiction", rating: 4.3, imageUrl: "http://localhost:3000/assets/images/book9.jpg" },
  { id: 10, title: "The Odyssey", author: "Homer", genre: "Mythology", rating: 4.2, imageUrl: "http://localhost:3000/assets/images/book10.jpg" },
  { id: 11, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Fiction", rating: 4.5 },
  { id: 12, title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", rating: 4.4 },
  { id: 13, title: "Jane Eyre", author: "Charlotte Brontë", genre: "Romance", rating: 4.3 },
  { id: 14, title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Adventure", rating: 4.7 },
  { id: 15, title: "Les Misérables", author: "Victor Hugo", genre: "Historical Fiction", rating: 4.6 },
  { id: 16, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.8 },
  { id: 17, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.9 },
  { id: 18, title: "Anna Karenina", author: "Leo Tolstoy", genre: "Romance", rating: 4.2 },
  { id: 19, title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Horror", rating: 4.3 },
  { id: 20, title: "Dracula", author: "Bram Stoker", genre: "Horror", rating: 4.1 },
  { id: 21, title: "Frankenstein", author: "Mary Shelley", genre: "Horror", rating: 4.0 },
  { id: 22, title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", rating: 4.5 },
  { id: 23, title: "The Sun Also Rises", author: "Ernest Hemingway", genre: "Fiction", rating: 4.2 },
  { id: 24, title: "The Grapes of Wrath", author: "John Steinbeck", genre: "Fiction", rating: 4.6 },
  { id: 25, title: "East of Eden", author: "John Steinbeck", genre: "Fiction", rating: 4.4 },
  { id: 26, title: "Slaughterhouse-Five", author: "Kurt Vonnegut", genre: "Science Fiction", rating: 4.3 },
  { id: 27, title: "The Bell Jar", author: "Sylvia Plath", genre: "Autobiography", rating: 4.0 },
  { id: 28, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", genre: "Magical Realism", rating: 4.5 },
  { id: 29, title: "Love in the Time of Cholera", author: "Gabriel García Márquez", genre: "Romance", rating: 4.3 },
  { id: 30, title: "The Trial", author: "Franz Kafka", genre: "Fiction", rating: 4.0 },
  { id: 31, title: "The Shining", author: "Stephen King", genre: "Horror", rating: 4.6 },
  { id: 32, title: "It", author: "Stephen King", genre: "Horror", rating: 4.5 },
  { id: 33, title: "The Road", author: "Cormac McCarthy", genre: "Post-apocalyptic Fiction", rating: 4.2 },
  { id: 34, title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", genre: "Biography", rating: 4.5 },
  { id: 35, title: "Educated", author: "Tara Westover", genre: "Autobiography", rating: 4.7 },
  { id: 36, title: "Becoming", author: "Michelle Obama", genre: "Autobiography", rating: 4.8 },
  { id: 37, title: "Steve Jobs", author: "Walter Isaacson", genre: "Biography", rating: 4.6 },
  { id: 38, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Science", rating: 4.7 },
  { id: 39, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Psychology", rating: 4.4 },
  { id: 40, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-help", rating: 4.1 },
  { id: 41, title: "Dune", author: "Frank Herbert", genre: "Science Fiction", rating: 4.6 },
  { id: 42, title: "The Hunger Games", author: "Suzanne Collins", genre: "Dystopian", rating: 4.3 },
  { id: 43, title: "The Fault in Our Stars", author: "John Green", genre: "Romance", rating: 4.4 },
  { id: 44, title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", rating: 4.1 },
  { id: 45, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Thriller", rating: 4.3 },
  { id: 46, title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", rating: 4.0 },
  { id: 47, title: "Good Omens", author: "Neil Gaiman and Terry Pratchett", genre: "Fantasy", rating: 4.6 },
  { id: 48, title: "A Game of Thrones", author: "George R.R. Martin", genre: "Fantasy", rating: 4.7 },
  { id: 49, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", rating: 4.8 },
  { id: 50, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", rating: 4.9 }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    username: req.body.username || `user${users.length + 1}`, 
    password: req.body.password || 'password' 
  };
  users.push(newUser);
  console.log('User added:', newUser);
  res.status(201).json(newUser);
});

app.use('/assets', express.static('assets'));


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Login successful', userId: user.id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


function authenticate(req, res, next) {
  if (req.headers.userid) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
}

app.get('/books', (req, res) => {
  res.json(books);
});


app.post('/books', authenticate, (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(book);
  res.status(201).json(book);
});


app.put('/books/:id', authenticate, (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  
  book.title = req.body.title;
  book.author = req.body.author;
  res.json(book);
});


app.delete('/books/:id', authenticate, (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  
  const index = books.indexOf(book);
  books.splice(index, 1);
  
  res.json(book);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
