// json-server --watch db.json --port 3004

export function getArtists() {
    const request = fetch(`http://localhost:5000/artist`, { method: 'GET' })
        .then(response => response.json());
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}
