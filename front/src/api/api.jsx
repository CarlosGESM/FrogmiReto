export async function fetchFeatures(featureData, currentPage, perPage) {
    try {
        const response =  await fetch(`http://127.0.0.1:3000/api/v1/features/?page=${currentPage}&per_page=${perPage}`);
        const jsonData =  await response.json();
        if (jsonData && jsonData.data) {
            featureData(jsonData.data);
        } else {
            console.error('Error en el Fetching de los datos: formato de datos incorrecto');
        }
    } catch (error) {
        console.error('Error en el Fetching de los datos:', error);
    }
}

export async function fetchOnlyFeatures(featureData) {
    try {
        const response =  await fetch(`http://127.0.0.1:3000/api/v1/features/`);
        const jsonData =  await response.json();
        if (jsonData && jsonData.data) {
            featureData(jsonData.data);
        } else {
            console.error('Error en el Fetching de los datos: formato de datos incorrecto');
        }
    } catch (error) {
        console.error('Error en el Fetching de los datos:', error);
    }
}

export async function fetchComments(feature_id, commentsData) {
    if (feature_id){
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/v1/features/${feature_id}/comments`);
            const jsonData = await response.json();
            commentsData(jsonData);
            console.info("Estado:", response.status);
        } catch (error) {
            commentsData([]);
        }
    }else{
        commentsData([])
    }
}

export async function createComment(feature_id, contenido){
    if(contenido){
        const finalBody = {
                comment:{
                    body: `${contenido}`
                }
                }
        try{
            const response = await fetch(`http://127.0.0.1:3000/api/v1/features/${feature_id}/comments`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(finalBody)
            });
            if (response.ok){
                console.log('Comentario Creado Correctamente');
            }else{
                console.error('Error al crear el Comentario', response.status)
            }
        }catch(e){
            console.error(e)
        }
    }
}