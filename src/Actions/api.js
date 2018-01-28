const APIURL = "//localhost:8081/api/ver0001/";

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

export async function getPalabra(p, pId) {
  return fetch(`${APIURL}${p}${pId}`)
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
  return fetch(`${APIURL}${p}`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
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

export async function removePalabra(p, pId) {
  return fetch(`${APIURL}${p}${pId}`, {
    method: 'delete'
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
  return fetch(`${APIURL}${p}${pObj}._id`, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ pObj })
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
