import React from 'react';
import Header from '../Header';
import styled from 'styled-components';

const Main = styled.main`
    color: var(--black);
    flex: 1;
    padding: 0% 10%;
    margin-top: 30px;
    margin-bottom: 20px;
`;

function PageDefault({ title, children }) {
  console.log('__titulo', title);
  return (
    <div>
      <Header title={title} />
      <Main>
        {children}
      </Main>
    </div>
  );
}

export default PageDefault;
