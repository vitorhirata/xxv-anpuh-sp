import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components';
import ANPUH_logo from '../../data/ANPUH-SP_logo.webp';
import FFLCH_logo from '../../data/FFLCH_logo.webp';

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 70px;
  margin-bottom: 80px;
`;

const Image = styled.img`
  display: block;
  width: 200px;
  height: 100px;
`;

function Apoio() {
  return(
    <PageDefault title="Apoio">
      <h2>Apoio e realização</h2>

      <ImageWrapper>
        <ImageContainer>
          <Image src={ANPUH_logo} alt="Logo da ANPUH-SP" />
        </ImageContainer>

        <ImageContainer>
          <Image src={FFLCH_logo} alt="Logo da FFLCH-SP" />
        </ImageContainer>
      </ImageWrapper>
    </PageDefault>
  );
}

export default Apoio;
