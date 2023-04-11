import './App.css';
import Banner from './components/mainpage/Banner';
import Dashboard from './pages/Dashboard';
import Footer from './pages/Footer';
import NavbarPage from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Banner />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
