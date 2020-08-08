import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Main = styled.main`
    color: var(--black);
    flex: 1;
    padding-top: 5%;
    padding: 0% 10%;
    margin-top: 30px;
    margin-bottom: 20px;
`;

function PageDefault({ title, children }) {
  console.log('__titulo', title);
  console.log('__chidren', children);
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
