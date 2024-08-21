"use client";
import pruebas from "@/app/data/pruebas.json";
import Ramo from "@/app/components/ramo";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const [contador, setContador] = useState(0);
  const handleOnClick = (e) => {
    setContador(contador + 1);
  };
  return (
    <>
      <div className="cabecera">
        <h1>Asignaturas</h1>
        <Button onClick={handleOnClick}>Apriétame</Button>
        <h2>{contador}</h2>
      </div>
      <div className="contenedor">
        {pruebas.tests.map((ramo, i) => (
          <Ramo datosRamo={ramo} indice={i}></Ramo>
        ))}
      </div>
    </>
  );
}
