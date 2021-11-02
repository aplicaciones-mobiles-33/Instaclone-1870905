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
    apiKey: "AIzaSyDxRl9acClS5PvZz8OghL53eelewL8rpSI",
    authDomain: "insta-clone-app-e56a2.firebaseapp.com",
    projectId: "insta-clone-app-e56a2",
    storageBucket: "insta-clone-app-e56a2.appspot.com",
    messagingSenderId: "592506101628",
    appId: "1:592506101628:web:6869365d5687882e5d0ef9"
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
