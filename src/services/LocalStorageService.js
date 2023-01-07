import { appEvents } from "../constants/appEvents";
import { eventBus } from "../core/EventBus";

class LocalStorageService {
    constructor() {
        this.storage = window.localStorage;
    }

    dispatchEvent(key) {
        eventBus.emit(appEvents.localStorage, {
            detail: key ? { key, value: this.getItem(key) } : null,
            bubbles: true,
        });
    }

    getItem(key) {
        try {
            return JSON.parse(this.storage.getItem(key));
        } catch (error) {
            console.error(error.message);
        }
    }

    setItem(key, value) {
        try {
            this.storage.setItem(key, JSON.stringify(value));
            eventBus.emit(key);
        } catch (error) {
            console.error(error.message);
        }
    }

    removeItem(key) {
        this.storage.removeItem(key);
        eventBus.emit(key);
    }

    clear() {
        this.storage.clear();
        eventBus.emit();
    }
}

const localStorageService = new LocalStorageService();
export default localStorageService;