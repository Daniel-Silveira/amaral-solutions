import React from "react";
import { StyledAbout, StyledImage, StyledText, StyledTitle } from "./styled";
import DefaultText from "../shared/text";

const About = () => {
  return (
    <div>
      <StyledTitle type='subtitle' text='Um pouco sobre nós..' center />

      <StyledAbout>
        <StyledImage>
          <img src={require("../../assets/img/sobre.png")} />
        </StyledImage>
        <StyledText>
          <DefaultText
            type='titleCard'
            text='Somos uma equipe de profissionais  apaixonados por tecnologia e sempre a procura de novos desafios.'
          />
          <DefaultText
            text='Estamos atuando no mercado desde 2017, e desde então estamos trabalhando com muita dedicação para desenvolver e  manter um bom relacionamento com os nosso clientes e sempre visando em maximizar os resultados e o retorno do investimento realizado.
Para isso contamos com uma equipe especializada no que faz e muito dedicada para sempre dar o seu melhor resultado.'
          />
        </StyledText>
      </StyledAbout>
    </div>
  );
};

export default About;
