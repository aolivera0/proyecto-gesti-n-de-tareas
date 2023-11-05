import { useState } from "react";
import "./App.css";
import "./components/InfoTarea";
import "./components/InfoUsuario";
import InfoUsuario from "./components/InfoUsuario";
import InfoTarea from "./components/InfoTarea";
import avatar from "./images/avatar.jpg";
import Tarea from "./components/Tarea";

function App() {
  const [count, setCount] = useState(0);
  const listaTareas = [
    {
      nombre: "Tarea 1",
      vence: "dd/mm/aaaa",
      prioridad: "baja",
    },
    {
      nombre: "Tarea 2",
      vence: "dd/mm/aaaa",
      prioridad: "alta",
    },
    {
      nombre: "Tarea 3",
      vence: "dd/mm/aaaa",
      prioridad: "alta",
    },
  ];

  return (
    <main className="grid gap-10 grid-cols-3">
      {/* <h1>Holiwis</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className="flex">
        <InfoUsuario nombre="usuario1" imagen={avatar} />
      </div>
      <div className="col-start-2 col-end-4">
        {/* <div className='flex justify-end'>
          <button className='bg-slate-700'>Tus estadísticas</button>
          <button className='bg-slate-700 ml-2 mr-4'>Filtrar </button>
        </div>
        <InfoTarea titulo="Tareas Cercanas" listaTareas={listaTareas} />
        <InfoTarea titulo="Tareas Vencidas" listaTareas={listaTareas} />
        <InfoTarea titulo="Tareas Completadas" listaTareas={listaTareas} /> */}
        <Tarea
          nombre="Tarea 1"
          prioridad="Alta"
          fechaCreacion="dd/mm/aaaa"
          fechaVencimiento="dd/mm/aaaa"
          descripcion="Hacer la declaración de renta mía y de mi mamá"
        />
      </div>
      <div></div>
    </main>
  );
}

export default App;
