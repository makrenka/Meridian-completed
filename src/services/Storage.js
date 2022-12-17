import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { cloudService } from "./Cloud";

class Storage {
    constructor() {
        this.storage = getStorage(cloudService.app);
    }


    uploadImage(file) {
        const imageRef = ref(this.storage, `/images/${file.name}`);
        return uploadBytes(imageRef, file);
    }

    getDownloadURL(ref) {
        return getDownloadURL(ref);
    }

}

export const storageService = new Storage();
