import { useState } from "react";
import { fetchComments, fetchOnlyFeatures } from "../api/api";

// eslint-disable-next-line react/prop-types
export function Comment() {

    const [comments, setComments] = useState([]);
    const [features, setFeatures] = useState([]);
    const [featureId, setFeatureId] = useState("");
    const [idExists, setIdExists] = useState(true);

    const validateId = async () => {
        try{
            if (featureId){
                fetchOnlyFeatures(setFeatures);
                const featuresIds = features.map(feature =>(feature.id));
                if (featuresIds.includes(featureId)){
                    setIdExists(true)
                    console.log('la id se encuentra dentro de la bd')
                }else{
                    console.log('la id NO se encuentra dentro de la bd')
                    setIdExists(false)
                }
                
            }else{
                console.log('No se ha introducido ninguna id')
            }
        } catch (error){
            console.error('error en la validación de ID')
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

    return (
        <div>
            <h1>Comentarios Terremoto</h1>
            <input type="text"
                value={featureId}
                onChange={(e) => setFeatureId(e.target.value)} 
                placeholder="Ingresar ID del Feature" 
            />
            <button onClick={validateId}>
                Validar ID
            </button>
            <button onClick={handleSearch}>
                Buscar
            </button>
            <div>
                {comments.map(comment => (
                    <p key={comment.id}>
                        {comment.body}
                    </p>
                ))}
            </div>  
        </div>
    );
}
