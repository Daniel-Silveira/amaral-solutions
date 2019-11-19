import React, { useState, useEffect } from "react";
import {
  StyledSimulator,
  StyledButton,
  StyledGroup,
  StyledGroupSelect,
  StyledSelected
} from "./styled";
import ListCars from "./list-cars";
import Home from "./home";

const Simulator = () => {
  const [info, setInfo] = useState({
    marca: [],
    modelo: [],
    selectedMarca: "",
    selectedModelo: "",
    value: "",
    mouth: "",
    valueParcial: "",
    type: "Pessoal"
  });
  const types = ["Carro", "Pessoal", "Casa"];
  useEffect(() => {
    setInfo({ ...info, valueParcial: (info.value / info.mouth).toFixed() });
  }, [info.value, info.mouth]);

  return (
    <StyledSimulator>
      <h2 style={{ textAlign: "center" }}>Simule já</h2>
      <StyledGroupSelect>
        {types.map(i => (
          <StyledSelected onClick={() => setInfo({...info, type: i})} selected={info.type === i}>
            {i}
          </StyledSelected>
        ))}
      </StyledGroupSelect>
      {info.type === "Pessoal" ? (
        <Home info={info} setInfo={setInfo} />
      ) : (
        info.type === "Carro" && <ListCars info={info} setInfo={setInfo} />
      )}
      <StyledGroup>
        {info.valueParcial && (
          <p>
            <bold>Resumo:</bold> {info.mouth} parcelas de R${info.valueParcial},00
          </p>
        )}
        <StyledButton>Simular</StyledButton>
      </StyledGroup>
    </StyledSimulator>
  );
};

export default Simulator;
