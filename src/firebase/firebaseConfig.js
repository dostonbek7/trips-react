
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCK1ac0-i0RcbRdtgAzkD2qGKpEsYnZOC4",
  authDomain: "login-page-59a68.firebaseapp.com",
  projectId: "login-page-59a68",
  storageBucket: "login-page-59a68.appspot.com",
  messagingSenderId: "265569346021",
  appId: "1:265569346021:web:286251a715749fa50acf0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
