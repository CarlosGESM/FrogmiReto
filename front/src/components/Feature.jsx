import { useEffect, useState } from "react";
import { fetchFeatures } from "../api/api";

export function Feature(){
    const [feature, setFeature] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(10)

    
    useEffect(() => {
        fetchFeatures(setFeature, currentPage, perPage);
    }, [currentPage, perPage])

    const cambioPagina = (page) =>{
        setCurrentPage(page)
    }

    const cambioPerPage = (perPage) =>{
        setPerPage(perPage)
    }

    return (
        <div className="">
            <h1 className="text-orange-700">Lista de Terremotos</h1>
            <div className="">
                {feature.map(terremoto => (
                    <div key={terremoto.id} className="">
                        <strong>Magnitud:</strong> {terremoto.attributes.magnitude}, <strong>Lugar:</strong> {terremoto.attributes.place}
                    </div>
                ))}
            </div>
            <div className="">
                <button onClick={() => cambioPagina(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                <button onClick={() => cambioPagina(currentPage + 1)}>Siguiente</button>
                <div className="">
                    <span>página {currentPage}</span> <span className="">mostrar {perPage}</span>
                    <select name="" id="" value={perPage} onChange={(e) => cambioPerPage(parseInt(e.target.value))}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
}