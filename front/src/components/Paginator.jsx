// eslint-disable-next-line react/prop-types
export function Paginator({currentPage, perPage, setCurrentPage, setPerPage}) {

    const cambioPagina = (page) =>{
        setCurrentPage(page)
    }

    const cambioPerPage = (perPage) =>{
        setPerPage(perPage)
    }

    return (
        <div className="self-start mt-4 mb-10">
            <div className="flex flex-row space-x-2">
                <button className={`font-medium text-sm ${currentPage === 1 ? 'cursor-default' : 'hover:text-gray-600'}`} 
                 onClick={() => cambioPagina(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                <button className="font-medium hover:text-gray-600 text-sm"
                 onClick={() => cambioPagina(currentPage + 1)}>Siguiente</button>
            </div>
            <div className="">
                <span className="font-medium text-sm">
                    página {currentPage}
                </span>
                <span className="font-medium text-sm ml-4">
                    mostrar
                </span>
                <select className="ml-3 text-sm text-black"
                 value={perPage} onChange={(e) => cambioPerPage(parseInt(e.target.value))}>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    )
}