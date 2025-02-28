export default function Header({ numMaterias }) {
    return (
      <header>
        <h1>Sistema de Inscripción a Materias Universitarias</h1>
        <p>Materias inscritas: {numMaterias}</p>
      </header>
    );
  }