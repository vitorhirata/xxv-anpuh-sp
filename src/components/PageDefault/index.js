import React from 'react';
import Header from '../Header';
import HeaderBack from '../HeaderBack';
import styled from 'styled-components';

const Main = styled.main`
    color: var(--black);
    flex: 1;
    padding: 0% 10%;
    margin-top: 30px;
    margin-bottom: 20px;
`;

function PageDefault({ title, backPath, children }) {
  const isBasePage = backPath === undefined;
  console.log('__titulo', title);
  console.log('__isBasePage', isBasePage);

  return (
    <div>
      {isBasePage ? <Header title={title} /> : <HeaderBack title={title} backPath={backPath}></HeaderBack>}
      <Main>
        {children}
      </Main>
    </div>
  );
}

export default PageDefault;
