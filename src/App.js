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
          <Dictionary keyWord="Galaxy" />
        </main>
        <footer className="footer text-center">
          Open-Sourced on
          <a
            href="https://github.com/iammansura/Dictionary-App"
            alt="GitHub link"
          >
            {' '}
            GitHub
          </a>
          and hosted on{' '}
          <a
            href="https://mansuras-dictionary-app.netlify.app"
            alt="Netlify link"
          >
            Netlify
          </a>
          coded by{' '}
          <a
            href="https://www.linkedin.com/in/mansura-akter-bb377023a/"
            alt="GitHub link"
          >
            Mansura Akter
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
