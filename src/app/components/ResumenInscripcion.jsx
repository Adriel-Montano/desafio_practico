export default function ResumenInscripcion({
    materiasInscritas,
    totalUnidades,
    eliminarMateria,
    limpiarInscripciones,
  }) {
    return (
      <div>
        <h2>Resumen de Inscripción</h2>
        {materiasInscritas.length === 0 ? (
          <p>No hay materias inscritas.</p>
        ) : (
          <>
            <ul>
              {materiasInscritas.map((materia) => (
                <li key={materia.id}>
                  {materia.nombre} - {materia.unidadesValorativas} UV
                  <button onClick={() => eliminarMateria(materia.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <p>Total de Unidades Valorativas: {totalUnidades}</p>
            <button className="clear-button" onClick={limpiarInscripciones}>
            Limpiar Inscripciones
          </button>
          </>
        )}
      </div>
    );
  }