const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';
const postEndpoint = 'https://almost-f5441-default-rtdb.firebaseio.com/';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteRequest = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${postEndpoint}/posts/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const postRequest = (payload) => new Promise((resolve, reject) => {
  fetch(`${postEndpoint}/posts.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchRequest = (payload) => new Promise((resolve, reject) => {
  fetch(`${postEndpoint}/posts/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// QUESTIONS
// 1. What are the similarities in each of the above functions?
// they all require a promise
// 2. What does GET do?
// it lists an entity/group of entities
// 3. What does POST do?
// it creates an entity
// 4. What does PATCH do?
// it updates an entity
// 5. What does DELETE do?
// it deletes an entity
// 6. OPTIONAL: Do you see an opportunity to create a utility function for your promise calls?

export {
  getRequest, postRequest, patchRequest, deleteRequest
};
