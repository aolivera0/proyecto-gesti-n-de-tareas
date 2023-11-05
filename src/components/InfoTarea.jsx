export default InfoTarea;
function InfoTarea({ titulo, listaTareas }) {
  const listaImprimir = listaTareas.map((tarea) => {
    return (
      <li className="list-none text-left ml-6 py-1">
        <a href="" className="text-slate-400 hover:text-white">
          {tarea.nombre} --- Vence: {tarea.vence} --- Prioridad:{" "}
          {tarea.prioridad}
        </a>{" "}
      </li>
    );
  });

  console.log(listaImprimir);

  return (
    <div className="bg-zinc-700 m-4 px-4 py-8 rounded-sm">
      <h1 className="mx-4 mb-4 text-left"> {titulo} </h1>
      <ul> {listaImprimir}</ul>
    </div>
  );
}
