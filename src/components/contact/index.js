import React, { useState, useEffect } from "react";
import { StyledContact, StyledForm, StyledGroup, GroupButton } from "./styled";
import Input from "../shared/input";
import Button from "../shared/button";
import { StyledTitle } from "../about/styled";
import { Element } from "react-scroll";
import { sendEmail } from "../../utils";

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
  const [response, setResponse] = useState("Enviar");
  const verification = () => {
    const send = () => {
      setResponse("Enviando...");
      sendEmail(info, setResponse);
    };
    info.name && info.email ? send() : setError(true);
  };
  useEffect(() => {
    if (response === "Enviado") {
      setInfo(schema);
      setError(false);
      setResponse(response);
    } else setResponse(response);
  }, [response]);
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
              keyboardType={'email'}
              value={info.email}
              onChange={e => setInfo({ ...info, email: e.target.value })}
              error={error && !info.email}
              type='email'
            />
            <StyledGroup>
              <Input
                placeholder="Telefone"
                keyboardType={'numeric'}
                value={info.phone}
                onChange={e => setInfo({ ...info, phone: e.target.value })}
                // error={error && !info.phone}
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
              textArea
              placeholder='Descrição'
              value={info.description}
              onChange={e => setInfo({ ...info, description: e.target.value })}
            />
            <GroupButton>
              <Button text={response} onClick={verification} />
            </GroupButton>
          </StyledForm>
        </StyledContact>
      </Element>
    </div>
  );
};

export default Contact;
