import React, {useState} from 'react';
import styled from '@emotion/styled';

const Boton = styled.button`
  background:-webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top: 3rem;
  font-size: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

const Contenedor = styled.div`
  align-items: center;
  display:flex;
  padding-top:5rem;
  flex-direction: column;
`;

function App() {

  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    const frase = await api.json();
    // console.log(frase[0]);
    setFrase(frase[0]);
  }
  return (
    <Contenedor>
      <Boton onClick={ () => consultarAPI()}>Obtener cambios</Boton>
    </Contenedor>
  );
}

export default App;
