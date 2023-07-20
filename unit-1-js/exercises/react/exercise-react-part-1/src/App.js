import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';

function App() {
  return (
    <div className="App">
      <MovieList />
      <ChoresList />
      <BookList />
    </div>
  );
}

export default App;
