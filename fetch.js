async function fetchAsync (url, requestData) {
    let response = await fetch(url, {body: requestData, method: 'POST'});
    let responseData = await response.json();
    return responseData;
}