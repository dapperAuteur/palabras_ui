// dev server
const APIURL = "//localhost:8081/api/ver0001/";
// deployed server on heroku
// const APIURL = "//peaceful-waters-22726.herokuapp.com/api/ver0001/";

export async function onAuth(params) {
  console.log(params);
}

export async function getPalabras(param) {
  return fetch(`${APIURL}${param}`)
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            throw err;
          })
        } else {
          let err = { errorMessage: "Please Try Again Later. Server Is NOT Responding." };
          throw err;
        }
      }
      return resp.json();
    })
}

export async function getPalabra(p, pObj) {
  console.log(p, pObj);
  return fetch(`${APIURL}${p}${pObj._id}`)
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            throw err;
          })
        } else {
          let err = { errorMessage: "Please Try Again Later. Server Is NOT Responding." };
          throw err;
        }
      }
      return resp.json();
    })
}

export async function createPalabra(p, pObj) {
  let token = `Bearer ${pObj.token}`;
  return fetch(`${APIURL}${p}`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    }),
    body: JSON.stringify({ ...pObj })
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            throw err;
          })
        } else {
          let err = { errorMessage: "Please Try Again Later. Server Is NOT Responding." }
          throw err;
        }
      }
      return resp.json();
    })
}

export async function removePalabra(p, pObj) {
  console.log(p, pObj);
  let token = `Bearer ${pObj.token}`;
  console.log(token);
  return fetch(`${APIURL}${p}${pObj._id}`, {
    method: 'delete',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    }),
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            throw err;
          })
        } else {
          let err = { errorMessage: "Please Try Again Later. Server Is NOT Responding." }
          throw err;
        }
      }
      return resp.json();
    })
}

export async function updatePalabra(p, pObj) {
  console.log(`${APIURL}${p}${pObj._id}`);
  console.log(pObj);
  let token = `Bearer ${pObj.token}`;
  console.log(token);
  return fetch(`${APIURL}${p}${pObj._id}`, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': token
    }),
    body: JSON.stringify({ ...pObj })
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { errorMessage: data.message }
            throw err;
          })
        } else {
          let err = { errorMessage: "Please Try Again Later, Server Is NOT Responding." }
          throw err;
        }
      }
      let myUpdatedPalabra = resp.json();
      return myUpdatedPalabra;
    })
}
