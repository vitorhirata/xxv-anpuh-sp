import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components';
import cartaz from '../../data/cartaz.webp';

const P = styled.p`
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

const Image = styled.img`
  display: block;
  width: 80%;
`;

function Inicio() {
  return(
    <PageDefault title="Início">
      <P>
        A ANPUH-SP, com a colaboração de docentes da PUC-SP, tem a satisfação
        de receber a comunidade acadêmica no XXV Encontro Estadual de História, que
        ocorrerá em um <strong>formato digital e on-line entre os dias 08 e 11 de setembro de
          2020</strong>, para debates e intercâmbios a partir da produção de conhecimento histórico,
        abordando de forma integrada questões referentes à pesquisa, à análise
        historiográfica, à difusão do conhecimento histórico e ao ensino de História em todos
        os níveis.
      </P>

      <P>
        O tema do encontro, Desigualdades e Diferenças, expressa discussões e
        debates incontornáveis que permeiam o cenário nacional e internacional. Propõe à
        comunidade de historiadores numerosas questões sobre as condições de cidadania na
        atual conjuntura do país, afetada por agendas governamentais descomprometidas
        com a superação de desigualdades e limitadas diante da consideração das diferenças,
        além de marcadas por condutas obscurantistas, autoritárias, excludentes, alicerçadas
        no conservadorismo moral e cultural. Impõem-se aos profissionais da área,
        conscientes da repercussão do produto de seu trabalho no conjunto da sociedade,
        reflexões e posicionamentos capazes de enfrentar o perigo do enfraquecimento dos
        mecanismos democráticos construídos historicamente bem como o risco de
        naturalização da desigualdade social persistente na sociedade brasileira, com
        perversos desdobramentos na vida atual e futura.
      </P>

      <P>Clique no link a seguir para acessar o <a
        href="https://www.encontro2020.sp.anpuh.org/"
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration: 'underline', color: 'blue'}}>site do evento</a>.
      </P>

      <ImageContainer>
        <Image src={cartaz} alt="Cartaz do XXV Encontro de História da ANPUH-SP" />
      </ImageContainer>
   </PageDefault>
  );
}

export default Inicio;
