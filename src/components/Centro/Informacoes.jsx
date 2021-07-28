import React from 'react';
import styled from "styled-components";
import animal from "../../assets/img/dog-blue.jpg"
import cachorro from "../../assets/img/dogyellow.jpg"
import { Branco, Roxo } from '../UI/Variaveis';

const InformacoesPricipal = styled.section`
    color: ${Branco};
    background: ${Roxo};
    padding-top: 2rem;
`

const InformacoesDiv = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
`

const MenuInformacoes = styled.div`
    width: 50%;

    margin-top: -8rem;
    padding-right: 2rem;
    padding-left: 4rem;
`

const TituloInformacoes = styled.h2`
    font-weight: 600;
    font-size: 4rem;

    text-transform: uppercase;

    margin-bottom: 2rem;
`

const TextoInformacoes = styled.p`
    margin-bottom: 2rem;
    line-height: 2rem;

    font-size: 1.2rem;
    font-weight: 600;

    width: 30rem;
`

const TextoInformacoes2 = styled.p`
    line-height: 2rem;

    font-size: 1.2rem;
    font-weight: 600;

    width: 30rem;
`

const InformacoesImg = styled.div`
    margin-top: 4rem;
    margin-bottom: 4rem;

    width: 50%;
    width: 100vh;
    height: 20%;
    height: 80vh;


    top: 2rem;
    margin-left: -4rem;

    background-image: url(${props => props.img});
    background-attachment: fixed;
    background-size: 100rem;
    background-position: -50% 50%;
    background-repeat: no-repeat;
`

const PainelInformacoes = styled.div`
    display: flex;

    padding-left: 4rem;

    text-align: right;
    align-items: center;
`

const PainelImg = styled.div`
    margin-top: 4rem;
    margin-bottom: 4rem;


    width: 100%;
    width: 100vh;
    height: 20%;
    height: 80vh;
    
    align-items: center;

    top: 2rem;

    background-image: url(${props => props.img});
    background-attachment: fixed;
    background-size: 40rem;
    background-position: -1% 40%;
    background-repeat: no-repeat;
`

const PainelDiv = styled.div`
    width: 37%;
`

const Informacoes = () => {
    return(
        <InformacoesPricipal>
            <InformacoesDiv >
                <MenuInformacoes>
                    <TituloInformacoes>our ong</TituloInformacoes>
                    <TextoInformacoes>We have the purpose of helping our animals and finding a suitable home for 
                        each one, with lots of love and affection. your best friend is here</TextoInformacoes>
                    <TextoInformacoes2>We have the purpose of helping our animals and finding a suitable home for 
                        each one, with lots of love and affection. your best friend is here</TextoInformacoes2>
                </MenuInformacoes>
                <InformacoesImg img={animal} alt="animal"></InformacoesImg>
            </InformacoesDiv>
            <PainelInformacoes>
                <PainelImg img={cachorro}></PainelImg>
                <PainelDiv>
                    <TituloInformacoes>our ong</TituloInformacoes>
                    <TextoInformacoes>We have the purpose of helping our animals and finding a suitable home for 
                        each one, with lots of love and affection. your best friend is here</TextoInformacoes>
                    <TextoInformacoes2>We have the purpose of helping our animals and finding a suitable home for 
                        each one, with lots of love and affection. your best friend is here</TextoInformacoes2>
                </PainelDiv>
            </PainelInformacoes>
        </InformacoesPricipal>
    );
};

export default Informacoes;