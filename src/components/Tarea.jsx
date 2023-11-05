export default Tarea;
function Tarea({
  nombre,
  prioridad,
  fechaCreacion,
  fechaVencimiento,
  descripcion,
}) {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <h2 className="text-4xl font-semibold"> {nombre}</h2>
        <button className="bg-yellow-600 font-bold text-sm">
          Modificar
        </button>
      </div>
      <p className="text-lg text-left">Prioridad: {prioridad}</p>
      <p className="text-lg text-left">Fecha de creación: {fechaCreacion}</p>
      <p className="text-lg text-left">
        Fecha de vencimiento: {fechaVencimiento}
      </p>

      <p className="text-lg text-left mt-10">Descripción: </p>
      <p className="bg-zinc-900 w-full h-96 text-left px-2 py-1">{descripcion}</p>
      <button className="mt-4 mr-2 bg-zinc-600">Regresar</button>
      <button className="bg-rose-700"> Eliminar </button>
    </div>
  );
}
