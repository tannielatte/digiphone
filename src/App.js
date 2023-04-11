import './App.css';
import Banner from './components/mainpage/Banner';
import Footer from './pages/Footer';
import NavbarPage from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
