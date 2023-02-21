export default function DEPE(){};

DEPE.fetchData = async (url, callback) => {
    const response = await fetch(url);
    const response_json = await response.json();
    console.log("fetchData", response_json);
}