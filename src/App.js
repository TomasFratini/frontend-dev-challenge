import { Faq } from './Components/Faq';
import Footer from './Components/Footer';
import Forms from './Components/Forms';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Nota from './Components/Nota';
import './CSS/App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Nota/>
      <Faq/>
      <Forms/>
      <Footer/>
    </>

  );
}

export default App;
