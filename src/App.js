import './App.css';
/* import Header from './Header';
import Stack from './Stack'; */

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img src='../src/logo.svg'/>
      </header>
      <nav className='nav'>
        <ul>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Contacts</a></li>
        </ul>
      </nav>
      <main className='content'>This is content block</main>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
