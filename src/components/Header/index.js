import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 75px;
    z-index: 100;

    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: var(--yellow);
    color: var(--black);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const HeaderTitle = styled.div`
  padding: 25px 0px;
`;

function Header( { title } ) {
  return (
    <HeaderWrapper>
      <Menu />

      <HeaderTitle>
        <p>{title}</p>
      </HeaderTitle>
    </HeaderWrapper>
  );
}

export default Header;
