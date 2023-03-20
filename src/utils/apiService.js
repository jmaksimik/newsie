async function makeApiCall(url1, url2) {
    try {
        const nytResponseJSON = await fetch(url1);
        const guardianResponseJSON = await fetch(url2);
        const nytData = await nytResponseJSON.json();
        const guardianData = await guardianResponseJSON.json();
    } catch (err) {
        console.log(err)
    }
}

export default {
    makeApiCall,
}