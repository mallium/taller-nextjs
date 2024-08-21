import { useState, useEffect } from "react";

const Ramo = ({ datosRamo, indice }) => {
  const [contador, setContador] = useState(0);
  const [estaContando, setEstaContando] = useState(false);

  const handleOnClick = (e) => {
    //setContador(contador + 1);
    setEstaContando(!estaContando);
  };

  useEffect(() => {
    let intervalId;
    if (estaContando) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setContador(contador + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [estaContando, contador]);

  return (
    <div className={indice % 2 == 0 ? "ramo" : "ramo impar"} key={indice}>
      <div className="parte1">
        <div className="codCurso">{datosRamo.subjectId}</div>
        <div className="tituloCurso">{datosRamo.subjectName}</div>
      </div>
      <div className="parte2" onClick={handleOnClick}>
        {contador}
      </div>
    </div>
  );
};

export default Ramo;
