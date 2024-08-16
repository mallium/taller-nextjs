"use client";
import pruebas from "@/app/data/pruebas.json";

export default function Home() {
  let titulo = pruebas.pageTitle;
  let asignatura1 = pruebas.tests[0].subjectName;
  //console.log(titulo);
  return (
    <>
      <div className="cabecera">
        <h1>Asignaturas</h1>
      </div>
      <div className="contenedor">
        {pruebas.tests.map((ramo, i) => (
          <div className={i % 2 == 0 ? "ramo" : "ramo impar"} key={i}>
            <div className="parte1">
              <div className="codCurso">{ramo.subjectId}</div>
              <div className="tituloCurso">{ramo.subjectName}</div>
            </div>
            <div className="parte2">{ramo.testDate}</div>
          </div>
        ))}
      </div>
    </>
  );
}
