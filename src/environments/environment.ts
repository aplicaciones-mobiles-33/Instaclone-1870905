// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const environment = {
  production: false, 
  firebaseConfig : {
    apiKey: "AIzaSyDcMueHAXP4ofAjiV9CcR4JEj1JiPC9iyw",
    authDomain: "insta-clone-app-8f063.firebaseapp.com",
    projectId: "insta-clone-app-8f063",
    storageBucket: "insta-clone-app-8f063.appspot.com",
    messagingSenderId: "538442410886",
    appId: "1:538442410886:web:ea70d1613371a0adbd5a07"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
