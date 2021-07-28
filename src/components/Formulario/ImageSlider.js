import React, { useState } from 'react';
import { SliderData } from './SliderData';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Branco, Roxo } from '../UI/Variaveis';

const Slider = styled.div`
  position: relative;

  margin-top:5rem;

  height: 100vh;

  display: flex;
  justify-content: space-evenly;

  align-items: center;
  text-align: center;

`;

const SliderDiv = styled.div`
  display: flex;
  flex-direction column;

  padding-left: 6rem;
  
  whidth: 50%;
`

const Texto = styled.h2`
  margin-top: -2rem;

  Font-size: 4rem;
  font-weight: 600;

`;

const Paragrafo = styled.p`
  font-size: 1rem;

  margin-bottom: 1rem;
  margin-top: .9rem;
`;

const FormularioPrincipal = styled.form`
  align-items: center;

  display: flex;
  flex-direction column

`

const Botao = styled.button`
  width: 23rem;
  height: 3.5rem;

  border-radius: 1rem;
  border: none;

  margin-bottom: 2rem;

  font-weight: 700;
  font-size: 1rem;

  background: ${Roxo};
  color: ${Branco};

  cursor: pointer;

  
  transition: all ease 1s;

  &:hover {
    opacity: 0.8;
  }

`;

const FormularioParagrafo = styled.p`
  font-size: .8rem;
  
  line-height: 1rem;
`;

const Importante = styled.strong`
  font-weight: bold;
  text-decoration: underline;
`

const Img = styled.img`
    
    margin-left: 2rem;    

    width: 40rem;
    height: 35rem;
    border-radius: 5rem;
    
`;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
 }

  return (
        <Slider>
          <SliderDiv>
            <Texto>Get Started</Texto>
            <Paragrafo>Already have an account? <Importante>Sing in</Importante></Paragrafo>
            <FormularioPrincipal>
                <TextField className="Field" id="standard-basic" label="Nome" />
                <TextField className="Field" id="standard-basic" label="Email" />
                <TextField className="Field" id="standard-basic" label="Counry" />
                <Botao>Sing up</Botao>
                <FormularioParagrafo>By singing up, I agree to the <Importante>Terms of Service</Importante><br/>and <strong>Privacy Policy</strong></FormularioParagrafo>
            </FormularioPrincipal>
          </SliderDiv>
        <NavigateBeforeIcon className="left-arrow" style={{fontSize:50}} onClick={prevSlide} />
        <NavigateNextIcon className="right-arrow" style={{fontSize:50}} className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}>
                    {index === current && (
                    <Img src={slide.image} alt='travel image'/>
                    )}
                </div>
            );
        })}
        </Slider>
  );
};

export default ImageSlider;