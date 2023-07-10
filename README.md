This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function login(){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  }
)
  .catch(
    
  (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }
  );
}

function goToDashboard() {

}

function login(enamil,password,callback) {
  //toda mi ejecucion
  callback()
}

login("ejemplo@ejemplo.com","123456")

// // function declarattiva
// funcion login() {

// }

// // funcion de expresion
// 

callback

//funcion declarativa
//funcion de expresion
//funcion flecha o arrow function
//callbacks
//promesas
//eventos bloqueantes(sincronico)
///eventos no bloqueantes(asincronico)
//javascript es mono hilo-multihilo
//polling
//pilas y colas
//timers (setTimeout,msetImmediate)
//event loop
//IIFE
//parametros y argumentos

function hello() {
  console.log("hola mundo")
}

setTimeout(hello,500)
setImmediate(hello)

const promise = new promise(
(resolve, reject) => {
  try{
    resolve("hola")
  } catch {
    reject("error")
  }
}
}

promise 
.then(
(result)=>{
  console.log()
 }
)
.catch(
  (error)=>{
    console.log(error)
  }
)
