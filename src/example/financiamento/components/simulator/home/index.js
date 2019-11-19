import React from "react";
import { StyledHome } from "../styled";

const Home = ({ info, setInfo }) => {
  return (
    <StyledHome>
      <label>Valor: R${info.value}</label>
      <input
        type='range'
        min='500'
        max='20000'
        step='500'
        value={info.value}
        onChange={e => setInfo({ ...info, value: e.target.value })}
      />
      {info.value ? (
        <>
          <label>Meses: {info.mouth}</label>
          <input
            type='range'
            min='3'
            max='36'
            step='3'
            value={info.mouth}
            onChange={e => setInfo({ ...info, mouth: e.target.value })}
          />
        </>
      ) : null}
    </StyledHome>
  );
};

export default Home;
