import React from 'react';
import styled from "styled-components";
import dog from "../../assets/img/dog.jpg";
import { Roxo, Branco} from '../UI/Variaveis';

const Principal = styled.section`
    padding: 4rem; 
    margin-bottom: 4.5rem;

    height: calc(100vh - 4.25rem);
`
const PrincipalDiv = styled.div`
    display: flex;
    position: relative;
`

const MenuPrincipal = styled.div`
    display: flex;
    flex-direction: column;
`
const TituloPrincipal = styled.h1`
    width: 24rem;
    
    margin-top: 2rem;
    margin-bottom: 2.9rem;

    font-size: 4rem;
    font-weight: 900;

    color: ${Roxo};
`

const Paragrafo = styled.p`
    width: 24rem;

    font-size: 1rem;

    color: ${Roxo};
`

const ImgPrincipal = styled.div`
    position: relative;


    width: 90%;
    width: 100vh;
    height: 100%;
    height: 70vh;

    top: 2rem;
    left: 7rem;
    background-image: url(${props => props.img});
    background-attachment: fixed;
    background-size: 90rem;
    opacity: 0.8;
    background-position: -6% 40%;
    background-repeat: no-repeat;
`

const BotaoPrincipal = styled.div`
    display: flex;

    padding: 2rem;
    align-items: center;
`

const PrimeiroBotao = styled.button`
    text-align: center;
    font-weight: 700;
    font-size: 1rem;

    background: ${Branco};
    color: ${Roxo};
    
    height: 2.5rem;
    width: 6rem;
    
    border-radius: 2rem;
    border: none;
    
    cursor: pointer;
    position: absolute;
    top: 23rem;
    left: 9rem;
    
    transition: all ease 1s;

    :hover {
        background: ${Roxo};
        color: ${Branco};
    }
`

const SegundoBotao = styled.button`
    text-align: center;
    font-weight: 700;
    font-size: 1rem;

    background: ${Roxo};
    color: ${Branco};

    height: 2.5rem;
    width: 6rem;

    position: absolute;
    top: 23rem;
    left: -0.1rem;
    cursor: pointer;

    border-radius: 2rem;
    border: none;

    transition: all ease 1s;

    :hover {
        background: ${Branco};
        color: ${Roxo};
    }
`

const Conteudo = () => {
    return(
        <Principal>
            <PrincipalDiv>
                <MenuPrincipal>
                    <TituloPrincipal>Find<br />Your Best Friend</TituloPrincipal>
                    <Paragrafo>First place potential adopters turn 
                        when looking to get a new pet.
                    </Paragrafo>
                </MenuPrincipal>
                <ImgPrincipal img={dog} alt="dog" ></ImgPrincipal>
                <BotaoPrincipal>
                    <PrimeiroBotao>PET QUIZ</PrimeiroBotao>
                    <SegundoBotao>SEARCH</SegundoBotao>
                </BotaoPrincipal>
            </PrincipalDiv>
        </Principal>
    );
};

export default Conteudo;