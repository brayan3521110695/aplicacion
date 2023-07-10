import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./"

function login(email, password){

  const auth =getAuth (app);

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential)
    // ...
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log (errorcode, errormessage)
  });
}

function singup(email, password) {
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });
}

export { login, singup }


