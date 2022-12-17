import { initializeApp } from "firebase/app";

export class CloudService {
    constructor() {
        this.config = {
            apiKey: process.env.API_KEY,
            authDomain: "meridian-4ffc1.firebaseapp.com",
            projectId: "meridian-4ffc1",
            storageBucket: "meridian-4ffc1.appspot.com",
            messagingSenderId: "98755449483",
            appId: process.env.APP_ID,
        };

        this.app = initializeApp(this.config);
    }
}

export const cloudService = new CloudService();