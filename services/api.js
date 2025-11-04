function handleError(error) {
    console.log("APPI Error", error.message || error);
}

async function fetchData() {
    try{
        throw new Error("Fallo en la API");
    } catch (error) {
        handleError(error);
    }
}

module.exports = {fetchData};