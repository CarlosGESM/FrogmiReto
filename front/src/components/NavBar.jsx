import { ChangeButton } from "./ChangeButton";

// eslint-disable-next-line react/prop-types
export function NavBar({ cambio, setCambio }) {
    
    const handleClick = () => {
      setCambio(!cambio);
    };
  
    return (
      <nav className="h-20 w-full flex flex-col items-center p-8">
        <h1 className="f font-extrabold text-2xl text-white">Proyecto Reto Frogmi</h1>
        <ChangeButton texto={cambio ? "Comentarios" : "Terremotos"} accion={handleClick} />
      </nav>
    );
  }