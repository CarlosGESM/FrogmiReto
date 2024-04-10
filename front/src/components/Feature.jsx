import { useEffect, useState } from "react";
import { fetchFeatures } from "../api/api";
import { Paginator } from "./Paginator";
import { FeatureText } from "./FeatureText";

export function Feature(){
    const [feature, setFeature] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(1)

    useEffect(() => {
        fetchFeatures(setFeature, currentPage, perPage);
    }, [currentPage, perPage])

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-extrabold text-white text-2xl">Lista de Terremotos</h1>
            <div className="mt-5">
                {feature.map(terremoto => (
                    <div key={terremoto.id} className="">
                        <FeatureText
                         id={terremoto.id} 
                         type={terremoto.type}
                         magnitude={terremoto.attributes.magnitude}
                         place={terremoto.attributes.place}
                         time={terremoto.attributes.time}
                         tsunami={terremoto.attributes.tsunami}
                         magType={terremoto.attributes.mag_type}
                         title={terremoto.attributes.title}
                         longitude={terremoto.attributes.coordinates.longitude}
                         latitude={terremoto.attributes.coordinates.latitude}
                         />
                    </div>
                ))}
            </div>
            <Paginator 
             currentPage={currentPage}
             perPage={perPage}
             setCurrentPage={setCurrentPage}
             setPerPage={setPerPage}/>
        </div>
    );
}