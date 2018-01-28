const APIURL = "//localhost:8081/api/ver0001/";

export async function getWords(param) {
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

export async function getPalabra(p, p_id) {
  return fetch(`${APIURL}${p}/${p_id}`)
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
