import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Branco, Preto, Roxo} from '../UI/Variaveis';

const RodapePrincipal = styled.footer`
    text-align: center;
    align-items: center;
    

    background: ${Roxo};

    height: 7rem;

    display: flex;
    justify-content: space-around;
`;

const Paragrafo1 = styled.p`
    margin-top:1rem;
    margin-bottom: .5rem;

    font-size: .9rem;
    font-weight: 800;
    line-height: 1.5rem;


    color: ${Branco};

    cursor: pointer;
`

const Paragrafo = styled.p`
    font-size: .9rem;
    font-weight: 800;
    line-height: 1.5rem;


    color: ${Preto};

    cursor: pointer;
`;

const Rodape = () => {
    return (
        <RodapePrincipal>
            <div>
                <Paragrafo1>Criado por Marcielen barbosa</Paragrafo1>
                <a href="https://www.facebook.com/marcielen.miriam/"><FacebookIcon /></a>
                <a href="https://www.linkedin.com/in/marcielen-barbosa-8340b6208/"><LinkedInIcon /></a>
                <a href="https://www.instagram.com/marcii_barbosa/"><InstagramIcon /></a>
            </div>
            <Paragrafo>Créditos Unsplash</Paragrafo>
            <Paragrafo>Créditos Freepik</Paragrafo>
            <Paragrafo>Créditos Dribbble</Paragrafo>
        </RodapePrincipal>
    );
};

export default Rodape;