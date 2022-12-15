import { initializeApp } from "firebase/app";

export class CloudService {
    constructor() {
        this.config = {
            apiKey: process.env.API_KEY,
            authDomain: "meridian-21fb3.firebaseapp.com",
            projectId: "meridian-21fb3",
            storageBucket: "meridian-21fb3.appspot.com",
            messagingSenderId: "263906861293",
            appId: process.env.APP_ID,
            measurementId: "G-N0DGWTEP3L"
        };

        this.app = initializeApp(this.config);
    }
}

export const cloudService = new CloudService();