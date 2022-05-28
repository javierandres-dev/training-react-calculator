import './stylesheets/App.css';
import { Footer } from './components/Footer';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <div className='container'>
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
