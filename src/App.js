import './App.css';
import Banner from './components/mainpage/Banner';
import Contact from './pages/Contact';
import CustomerReview from './pages/CustomerReview';
import Dashboard from './pages/Dashboard';
import Footer from './pages/Footer';
import NavbarPage from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Banner />
      <CustomerReview />
      <Contact />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
