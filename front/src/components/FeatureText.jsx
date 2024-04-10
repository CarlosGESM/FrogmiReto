// eslint-disable-next-line react/prop-types
export function FeatureText({id, type, magnitude, place, time, tsunami, magType, title, longitude, latitude}){
    return(
        <div className="flex flex-col border-4 rounded-lg shadow-md p-3 mb-5">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-white">{title}</h1>
                <h1 className="font-extrabold text-white">id: <span className="f font-semibold">{id}</span></h1>
            </div>
            <div>
                <h1 className="font-extrabold text-white text-xl">Atributos</h1>
                <h1>Tipo: {type}</h1>
                <h1>Magnitud: {magnitude}</h1>
                <h1>Lugar: {place}</h1>
                <h1>Duración: {time}</h1>
                <h1>Tsunami: {tsunami}</h1>
                <h1>Tipo Magnitud: {magType}</h1>
                <div className="flex flex-col border-2">
                    <h1 className="self-center">Coordenadas</h1>
                    <div className="flex flex-row justify-between">
                        <h1 className="ml-7">Longitud</h1>
                        <h1 className="mr-9">Latitud</h1>
                    </div>
                    <div className="flex flex-row pl-2 pr-2 pb-2 justify-between">
                        <h3 className="ml-6">{longitude}</h3>
                        <h3 className="mr-6">{latitude}</h3>
                    </div>
                </div>
            </div>



        </div>
    )
}