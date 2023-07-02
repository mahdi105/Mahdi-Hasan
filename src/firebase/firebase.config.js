// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsmpQw9kxRYMLa9s_iupJaDQBj0R_BcMU",
  authDomain: "mahdi-hasan-portfolio.firebaseapp.com",
  projectId: "mahdi-hasan-portfolio",
  storageBucket: "mahdi-hasan-portfolio.appspot.com",
  messagingSenderId: "912391682682",
  appId: "1:912391682682:web:bb960ecedecaa3dd3f19c3",
  measurementId: "G-L44358G9BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app