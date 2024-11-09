const baseUrl = "http://localhost:3001";

function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse)
}

export function postItem({name, weather, imageUrl}) {
    return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name, imageUrl, weather }),
    }).then(checkResponse)
}

export function deleteItem({name, weather, imageUrl}) {
  return fetch(`${baseUrl}/items`, {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkResponse)
}
