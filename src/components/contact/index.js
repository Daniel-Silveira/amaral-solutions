import React, { useState } from "react";
import { StyledContact, StyledForm, StyledGroup, GroupButton } from "./styled";
import Input from "../shared/input";
import Button from "../shared/button";
import { StyledTitle } from "../about/styled";
import { Element } from "react-scroll";

const Contact = () => {
  const schema = {
    name: "",
    email: "",
    phone: "",
    whats: "",
    description: ""
  };
  const [info, setInfo] = useState(schema);
  const [error, setError] = useState(false);
  const verification = () => {
    const send = () => {
      setInfo(schema);
      setError(false);
      alert("Enviado");
      console.log(info);
    };
    info.name && info.email && info.phone ? send() : setError(true);
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <Element name='Contato'>
        <StyledTitle type='subtitle' text='Entre em contato com a gente' center />
        <StyledContact>
          <StyledForm onSubmit={e => e.preventDefault()}>
            <Input
              placeholder={error ? "Campo de Nome obrigatório" : "Nome *"}
              value={info.name}
              onChange={e => setInfo({ ...info, name: e.target.value })}
              error={error && !info.name}
            />
            <Input
              placeholder={error ? "Campo de E-mail obrigatório" : "E-mail *"}
              value={info.email}
              onChange={e => setInfo({ ...info, email: e.target.value })}
              error={error && !info.email}
              type='email'
            />
            <StyledGroup>
              <Input
                placeholder={error ? "Campo de Telefone obrigatório" : "Telefone *"}
                value={info.phone}
                onChange={e => setInfo({ ...info, phone: e.target.value })}
                error={error && !info.phone}
                type='tel'
              />
              <Input
                placeholder='WhatsApp'
                value={info.whats}
                onChange={e => setInfo({ ...info, whats: e.target.value })}
                type='tel'
              />
            </StyledGroup>
            <Input
              type='textArea'
              placeholder='Descrição'
              value={info.description}
              onChange={e => setInfo({ ...info, description: e.target.value })}
            />
            <GroupButton>
              <Button text='Enviar' onClick={verification} />
            </GroupButton>
          </StyledForm>
        </StyledContact>
      </Element>
    </div>
  );
};

export default Contact;
