import { Today } from "@mui/icons-material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import Calendar from "react-calendar";

export default InfoUsuario;
function InfoUsuario({ nombre, imagen }) {
  return (
    <div>
      <div className="flex flex-col  w-96 m-auto">
        <p className="mb-4 text-lg text-left"> Bienvenido {nombre} :) </p>

        <div className="flex gap-5 m-auto mb-5">
          <img src={imagen} alt="imagen" width={100} />

          <div className="flex flex-col justify-evenly">
            <ControlPointIcon fontSize="large" />
            <FindInPageRoundedIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="w-96">
        <Calendar className="text-sm" />
      </div>
    </div>
  );
}
