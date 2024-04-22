import React from 'react';
import Header from './Header';
import MyCard from './MyCard';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <MyCard image="url_de_la_imagen" name="nombre_del_perrito" description="descripción_del_perrito" />
      <Footer description="Esta es una galería de imágenes de perritos en adopción." />
    </div>
  );
}

export default App;
