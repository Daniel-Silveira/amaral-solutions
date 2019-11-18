import React from "react";
import { StyledServices, StyledBox, StyledImage, StyledText } from "./styled";
import DefaultText from "../shared/text";
const Services = () => {
  const data = [
    {
      url: require("../../assets/img/code.svg"),
      title: "Sites e Sistemas Web",
      description:
        "Desenvolvimento de sites e sistemas web personalizados de acordo com a necessidade do seu negócio"
    },
    {
      url: require("../../assets/img/app.svg"),
      title: "Aplicativos",
      description:
        "Desenvolvimento de aplicativos totalmente planejado para o seu negócio nas plataformas Android e IOS"
    },
    {
      url: require("../../assets/img/ux.svg"),
      title: "Layout",
      description:
        "Criação do seu layout com uma equipe especializada para atender da melhor forma a ideia do seu negócio"
    },
    {
      url: require("../../assets/img/nuvem.svg"),
      title: "Hospedagem e Domínio",
      description: "Registramos e configuramos domínios e hospedagem de acordo com sua necessidade"
    }
  ];
  return (
    <div>
      <StyledText type='subtitle' text='Trabalhamos com' center />
      <StyledServices>
        {data.map(i => (
          <StyledBox>
            <StyledImage>
              <img src={i.url} />
            </StyledImage>
            <DefaultText type='titleCard' text={i.title} />
            <DefaultText text={i.description} />
          </StyledBox>
        ))}
      </StyledServices>
    </div>
  );
};

export default Services;
