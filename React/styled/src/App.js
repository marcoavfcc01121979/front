import React from 'react';
import { Container, Head, BemVindo } from './styles'

function App() {
    return (
        <Container className=''>
            <Head>
                <a>Projeto Styled</a>
            </Head>

            <BemVindo cor='00FF00'>
                Bem Vindo ao Sistema
            </BemVindo>

        </Container>
  );
}

export default App;


/*
 *  <header className='header'>
              <a className='titulo'>Projeto Styled</a>
          </header>
          <h1>Seja Bem Vindo!</h1>
 */