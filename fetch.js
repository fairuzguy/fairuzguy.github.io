async function fetchAsync (url, requestData) {
    let response = await fetch(url, {
        body: JSON.stringify(requestData), 
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    let responseData = await response.json();
    return responseData;
}