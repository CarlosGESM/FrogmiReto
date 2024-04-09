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
        } catch (error) {
            commentsData([]);
        }
    }else{
        commentsData([])
    }
}
