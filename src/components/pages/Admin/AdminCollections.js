import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import { Component, eventBus } from "../../../core";
import { FormManager } from "../../../core/FormManager/FormManager";
import { authService } from "../../../services/Auth";
import { databaseService } from "../../../services/Database";
import { storageService } from "../../../services/Storage";

export class AdminCollections extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
        };

        this.form = new FormManager();
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    static get observedAttributes() {
        return ["path"];
    }

    checkUser() {
        this.toggleIsLoading();
        authService.init()
            .then((user) => {
                authService.user = user;
                if (!authService.user) {
                    eventBus.emit(appEvents.changeRoute, {
                        target: appRoutes[this.props.path ?? "signIn"],
                    });
                }
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error.message,
                    }
                })
            })
            .finally(() => {
                this.toggleIsLoading();
            })
    }

    createCollection = (data) => {
        this.toggleIsLoading();
        storageService.uploadImage(data.image)
            .then((snapshot) => {
                storageService.getDownloadURL(snapshot.ref)
                    .then((url) => {
                        databaseService.create("collections", {
                            ...data,
                            image: url,
                        });
                    });
            }).finally(() => {
                this.toggleIsLoading();
            })
    }

    componentDidMount() {
        this.checkUser();
        this.form.init(this.querySelector('.admin-page__collections-form'), {});
        this.addEventListener('submit', this.form.handleSubmit(this.createCollection));
    }

    componentWillUnmount() {
        this.checkUser();
        this.removeEventListener('submit', this.form.handleSubmit(this.createCollection));
    }

    render() {
        return `
        <div class="admin-page__wrapper">
            <div class="admin-page__container">
                <h1 class="admin-page__heading">Admin Collections Page</h1>
                
                <form class="admin-page__collections-form">
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Collection number</label>
                        <input class="admin-page__form-control" type="number" name="collectionNumber">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Section number</label>
                        <input class="admin-page__form-control" type="number" name="sectionNumber">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Upload a photo</label>
                        <input class="admin-page__form-file" type="file" id="formFile" name="image">
                    </div>                    
                    
                    <button type="submit" class="admin-page__btn">Send</button>
                </form>
            </div>
        </div>
        `
    }
}

customElements.define('admin-collections-page', AdminCollections);