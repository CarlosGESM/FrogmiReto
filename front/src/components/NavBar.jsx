// eslint-disable-next-line react/prop-types
export function NavBar({ cambio, setCambio }) {
    const handleClick = () => {
      setCambio(!cambio);
    };
  
    return (
      <nav className="h-20 w-full flex ">
        <button onClick={handleClick}>
          {cambio ? "Comments" : "Features"}
        </button>
      </nav>
    );
  }