"use client";
import { useState } from "react";
import { materias } from './data/data';
import Header from "./components/Header";
import MateriaList from "./components/MateriaList";
import ResumenInscripcion from "./components/ResumenInscripcion";

export default function Home() {
  const [materiasInscritas, setMateriasInscritas] = useState([]);

  // Función para inscribir una materia
  const inscribirMateria = (materia) => {
    if (!materiasInscritas.find((m) => m.id === materia.id)) {
      setMateriasInscritas([...materiasInscritas, materia]);
    }
  };

  // Función para eliminar una materia
  const eliminarMateria = (id) => {
    setMateriasInscritas(materiasInscritas.filter((m) => m.id !== id));
  };

  // Función para limpiar todas las inscripciones
  const limpiarInscripciones = () => {
    setMateriasInscritas([]);
  };


  const totalUnidades = materiasInscritas.reduce(
    (acc, m) => acc + m.unidadesValorativas,
    0
  );

  return (
    <div>
      <Header numMaterias={materiasInscritas.length} />
      <MateriaList materias={materias} inscribirMateria={inscribirMateria} />
      <ResumenInscripcion
        materiasInscritas={materiasInscritas}
        totalUnidades={totalUnidades}
        eliminarMateria={eliminarMateria}
        limpiarInscripciones={limpiarInscripciones}
      />
    </div>
  );
}