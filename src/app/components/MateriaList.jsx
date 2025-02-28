export default function MateriaList({ materias, inscribirMateria }) {
    return (
      <div>
        <h2>Materias Disponibles</h2>
        <ul className="materia-grid">
          {materias.map((materia) => (
            <li
              key={materia.id}
              className={`materia-card materia-color-${materia.id}`} // Asignamos una clase basada en el ID
            >
              <div className="materia-content">
                <h3>{materia.nombre}</h3>
                <p>{materia.descripcion}</p>
                <p>Horario: {materia.horario}</p>
                <p>Profesor: {materia.profesor}</p>
                <p>Unidades Valorativas: {materia.unidadesValorativas}</p>
                <button onClick={() => inscribirMateria(materia)}>Inscribir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }