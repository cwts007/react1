import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

export default function App() {
  const dogs = [
    { name: 'Bruce', image: 'src/images/p1.jpg', description: 'babea', tag: { text: 'Grande', color: 'danger' } },
    { name: 'Steve', image: 'src/images/p2.jpg', description: 'Muerde', tag: { text: 'Chico', color: 'success' } },
    { name: 'Nicko', image: 'src/images/p3.jpg', description: 'Se hace pipi', tag: { text: 'Mediano', color: 'primary' } },
    { name: 'Adrian', image: 'src/images/p4.jpg', description: '3 patas 1/2 Cola', tag: { text: 'Enano', color: 'warning' } },
  ];

  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className='contenedor'>
        {dogs.map((dog, index) => (
          <MyCard
            key={index}
            image={dog.image}
            name={dog.name}
            description={dog.description}
            tag={dog.tag}
          />
        ))}
      </div>
      <Footer description="Descubre nuestra galería de adopción de perros y encuentra a tu nuevo mejor amigo. Tenemos una amplia variedad de perros, cada uno con su propia personalidad única y todos en busca de un hogar lleno de amor. Cada foto captura su espíritu y carácter únicos. Al adoptar un perro, le das una segunda oportunidad en la vida y la posibilidad de llenar tu hogar con alegría y amor incondicional. No esperes más, tu compañero peludo para siempre te está esperando.” 😊" />
    </div>
  );
}