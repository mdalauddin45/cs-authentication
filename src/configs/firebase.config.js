import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9yNELz8DqXl_em1Xma0wCBLRTAczPBto",
  authDomain: "own-products.firebaseapp.com",
  projectId: "own-products",
  storageBucket: "own-products.appspot.com",
  messagingSenderId: "951921943109",
  appId: "1:951921943109:web:6dcca851b62651b475f92c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
