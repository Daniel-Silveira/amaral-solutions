import React, { useState, useEffect } from "react";
import { StyledSelect, StyledOptions, StyledGroup, StyledBox } from "./styled";
import { getMarcas, getModelo } from "../../../../../utils";
import Home from "../home";

const ListCars = ({ info, setInfo }) => {
  useEffect(() => {
    getMarcas(info, setInfo);
  }, []);
  useEffect(() => {
    getModelo(info, setInfo, info.selectedMarca);
  }, [info.selectedMarca]);

  return (
    <div>
      <StyledGroup>
        <StyledBox>
          <label>Marca</label>
          <StyledSelect onChange={i => setInfo({ ...info, selectedMarca: i.target.value })}>
            <StyledOptions value='0'></StyledOptions>
            {info.marca.map(i => (
              <StyledOptions value={i.id}>{i.fipe_name}</StyledOptions>
            ))}
          </StyledSelect>
        </StyledBox>
        <StyledBox>
          {info.modelo.length ? (
            <>
              <label>Modelo</label>

              <StyledSelect onChange={i => setInfo({ ...info, selectedModelo: i.target.value })}>
                <StyledOptions value='0'></StyledOptions>
                {info.modelo.map(i => (
                  <StyledOptions> {i.fipe_name} </StyledOptions>
                ))}
              </StyledSelect>
            </>
          ) : null}
        </StyledBox>
      </StyledGroup>
      {info.selectedModelo ? <Home info={info} setInfo={setInfo} /> : null}
    </div>
  );
};

export default ListCars;
