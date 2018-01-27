export const userLogout = () => ({
  type: "USER_LOGOUT"
});

export const authenticateUser = currentUser => ({
  type: "AUTHENTICATE_USER",
  currentUser
});

const authRequest = (authInfo, url) => {
  return fetch(url, {
    method: "post",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(authInfo)
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = { authErrorMessage: data.message };
            throw err;
          })
        } else {
          let err = { authErrorMessage: "Please Try Again Later. Server Is NOT Responding." };
          throw err;
        }
      }
      return resp.json();
    });
}

export const signUp = (authInfo) => (
  (dispatch, getState) => (
    authRequest(authInfo, '/api/ver0001/auth/signup')
      .then(currentUser => dispatch(authenticateUser(currentUser)))
  )
);

export const signIn = (authInfo) => (
  (dispatch, getState) => (
    authRequest(authInfo, '/api/ver0001/auth/signin')
      .then(currentUser => dispatch(authenticateUser(currentUser)))
  )
);
