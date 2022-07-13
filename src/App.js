import logo from './dictionary.png'
import Dictionary from './componenets/dictionary'
// import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="Dictionary-logo" className="logo img-fluid " />
        </header>
        <main>
          <Dictionary keyWord="bangladesh" />
        </main>
        <footer className="footer text-center">
          Coded by
          <a
            href="https://github.com/iammansura/Dictionary-App"
            alt="GitHub link"
          >
            {' '}
            Mansura Akter{' '}
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
