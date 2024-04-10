import { useState } from "react";
import { createComment, fetchComments, fetchOnlyFeatures } from "../api/api";

export function Comment() {

    const [comments, setComments] = useState([]);
    const [features, setFeatures] = useState([]);
    const [featureId, setFeatureId] = useState("");
    const [idExists, setIdExists] = useState(false);
    const [errorMessageGet, setErrorMessageGet] = useState();
    const [dataComment, setDataComment] = useState();
    const [errorMessageCreate, setErrorMessageCreate] = useState();

    const validateId = async () => {
        try{
            if (featureId){
                fetchOnlyFeatures(setFeatures);
                const featuresIds = features.map(feature =>(feature.id));
                if (featuresIds.includes(featureId)){
                    setIdExists(true)
                    console.log('la id se encuentra dentro de la bd')
                    setErrorMessageGet('ID validada correctamente')
                }else{
                    console.log('la id NO se encuentra dentro de la bd')
                    setErrorMessageGet('La ID no existe')
                    setIdExists(false)
                }
                
            }else{
                console.log('No se ha introducido ninguna id')
                setErrorMessageGet("No se ha introducido ninguna ID")
            }
        } catch (error){
            console.error('Error en toma de dato: ',error)
        }
    }

    const handleSearch = async () => {
        try {
            if (idExists) {
                fetchComments(featureId, setComments);
            } else {
                console.log('La ID ingresada no existe.');
            }
        } catch (error) {
            console.error('Error en la búsqueda:', error);
        }
    };

    const handleSubmit = async () =>{
        try {
            if(dataComment){
                if(featureId){
                    if(idExists){
                        createComment(featureId,dataComment)
                        setErrorMessageCreate("Comentario Guardado Correctamente")
                    }else{
                        setErrorMessageCreate("La ID no es valida o no se ha validado")
                    }
                }else{
                    if(idExists)
                    setErrorMessageCreate("Ingrese la ID en la parte superior")
                }
            }else{
                console.log("Sin contenido")
                setErrorMessageCreate("Campo Vacío")
            }
        } catch (error) {
            console.error(error)
            setErrorMessageCreate("Error al guardar el comentario")

        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center border-2 rounded-md p-3 mt-8">
                <h1 className="font-extrabold text-xl">Buscar Comentarios</h1>
                <div className="felx flex-row space-x-3 mt-5">
                    <input className="text-gray-700 font-bold text-center"
                    type="text"
                    value={featureId}
                    onChange={(e) => setFeatureId(e.target.value)} 
                    placeholder="Ingresar ID del Feature" 
                    />
                    <button className="border-2 rounded-md w-24 hover:text-gray-700 hover:font-bold hover:border-gray-700"
                    onClick={validateId}>
                        Validar ID
                    </button>
                </div>
                <h1 className="text-white mr-28">{errorMessageGet}</h1>
                <div className="mt-4 mb-2 w-full flex justify-center">
                    <button className="border-2 rounded-md w-24 mr-24 hover:text-gray-700 hover:font-bold hover:border-gray-700"
                    onClick={handleSearch}>
                        Buscar
                    </button>
                </div>
                <div className="p-3 max-w-96">
                    {comments.map(comment => (
                        <p className="border-2 p-2 mb-3" 
                        key={comment.id}>
                            {comment.body}
                        </p>
                    ))}
                </div>
            </div>
            <div>
                <div className="mt-3 flex flex-col items-center w-full border-2 border-white rounded-md">
                    <div className="flex flex-col items-center w-full">
                        <h1 className="font-extrabold text-xl mb-3 mt-2">Añadir Comentario</h1>
                        <textarea className="text-gray-700 min-w-96 min-h-32 max-h-full p-3 rounded-md"
                         name="contenido"
                         placeholder="Ingrese el comentario"  
                         onChange={(e) => setDataComment(e.target.value)}></textarea>
                    </div>
                    <h1 className="mt-3">{errorMessageCreate}</h1>
                    <button className="bg-gray-600 w-32 min-h-8 rounded-md mt-3 mb-5" 
                     onClick={handleSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
}
