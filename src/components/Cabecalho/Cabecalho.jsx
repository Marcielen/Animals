import React from 'react';
import styled from "styled-components";
import animais from "../../assets/img/animais.png";
import busca from "../../assets/img/svg/lupa.svg"
import { Roxo, Branco, Preto  } from '../UI/Variaveis';

const CabecalhoInicial = styled.header`
    width: 100%;
    height: 5.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${Roxo};

    border-bottom: 1px soLid ${Roxo};
    box-sizing: border-box;
`

const CabecalhoDiv = styled.div`
    display: flex;
    align-items: center;
`

const ImgLogo = styled.img`
    width: 3.25rem;
    margin-left: 4rem;
    margin-right: .75rem;
`
const CabecalhoBusca = styled.a`
    position: absolute;
    left: 9.8rem;
`
const CabecalhoBuscaImg = styled.img`
    position: absolute;
    left: 9.8rem;
`
const Input = styled.input`
    margin-left: 1.5rem;
    float:left;
    border-radius: 5rem;
    background: ${Branco};
    color: ${Preto};
    padding-left:35px;
    font-size:18px;
    border:none;
    height: 2.5rem;
    width: 18rem;

    :focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outLine: 0;
    } 
`

const MenuItem = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    margin-right: 4rem;
`
const Li = styled.li`
    position: relative;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    font-weight:700;
    cursor: pointer;
    text-decoration: none;
    list-style:none
`

const Botao = styled.button`
    height: 3rem;
    width: 9rem;

    border: none;

    background: ${Roxo};
    color: ${Branco};

    font-weight: 700;

    margin-left: 1.5rem;

    cursor: pointer;

    transition: all ease 0.5s;

    :hover {
        opacity: 0.9;
    }
}
`

const Cabecalho = () => {
    return (
        <CabecalhoInicial>
            <CabecalhoDiv>
                <ImgLogo src={animais} alt="logo" />
                <CabecalhoBusca  href="#" ></CabecalhoBusca><CabecalhoBuscaImg alt="busca" src={busca} />
                <Input aria-label="buscar" placeholder="Who do you want to find?" />
            </CabecalhoDiv>
            <nav>
                <MenuItem class="header__List">
                    <Li><a href="#"></a>About</Li>
                    <Li><a href="#"></a>Location</Li>
                    <Li><a href="#"></a>FAQ</Li>
                    <Botao class="header__button">Contact Us</Botao>
                </MenuItem>
            </nav>
        </CabecalhoInicial>
    );
};

export default Cabecalho;