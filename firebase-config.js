// Cole aqui a configuração do seu projeto Firebase (veja o README.md, passo 4).
// Enquanto estiver como null, o site funciona salvando só no navegador de quem abre.
window.FIREBASE_CONFIG = // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqRLXdauS73xJjdva6ImWSr3waXMR7Rnk",
  authDomain: "lista-giftmjth.firebaseapp.com",
  projectId: "lista-giftmjth",
  storageBucket: "lista-giftmjth.firebasestorage.app",
  messagingSenderId: "209189824947",
  appId: "1:209189824947:web:6891921340ba13a3eb43c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* Exemplo de como fica depois de preenchido:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "minha-lista.firebaseapp.com",
  projectId: "minha-lista",
  storageBucket: "minha-lista.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
*/
