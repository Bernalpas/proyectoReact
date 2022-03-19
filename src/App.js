
import './App.css';
import Reloj from './Componentes/Reloj'
import Navegacion from './Componentes/Navegacion'
import Footer from './Componentes/Footer';
import Producto from './Componentes/Producto';


function App() {
  return (
    <div className="App">
      <Navegacion />

      <Producto titulo="Teléfonos Celulares" datos="Prueba" />
      
      <br></br>
      <hr></hr>
      <br></br>
      <Reloj />
      <Footer />
    </div>
  );
}

export default App;
