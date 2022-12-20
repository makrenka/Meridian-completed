import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import { FormManager } from "../../../core/FormManager/FormManager";
import { authService } from "../../../services/Auth";
import { databaseService } from "../../../services/Database";
import { storageService } from "../../../services/Storage";

export class Admin extends Component {
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

    checkUser() {
        this.toggleIsLoading();
        authService.init()
            .then((user) => {
                authService.user = user;
                if (!authService.user) {
                    this.dispatch(appEvents.changeRoute, {
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

    createProduct = (data) => {
        this.toggleIsLoading();
        storageService.uploadImage(data.image1)
            .then((snapshot) => {
                storageService.getDownloadURL(snapshot.ref)
                    .then((url) => {
                        databaseService.create("products", {
                            ...data,
                            image1: url,
                            image2: url,
                            image3: url,
                            image4: url,
                            image5: url,
                        });
                    })
            })
            .finally(() => {
                this.toggleIsLoading();
            });
    }

    componentDidMount() {
        this.checkUser();
        this.form.init(this.querySelector('.admin-page__form'), {});
        this.addEventListener('submit', this.form.handleSubmit(this.createProduct));
    }

    componentWillUnmount() {
        this.checkUser();
        this.removeEventListener('submit', this.form.handleSubmit(this.createProduct));
    }

    render() {

        return `
        <div class="admin-page__wrapper">
            <div class="admin-page__container">
                <h1 class="admin-page__heading">Admin Page</h1>
                <mrd-link to="${appRoutes.adminCollections}">
                    <button class="admin-page__collections-btn">Collections</button>
                </mrd-link>
                
                <form class="admin-page__form">
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Product name</label>
                        <input class="admin-page__form-control" type="text" name="title">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Price</label>
                        <input class="admin-page__form-price" type="number" name="price">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Discount</label>
                        <input class="admin-page__form-price" type="number" name="discount">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Photo</label>
                        <input class="admin-page__form-file" type="file" id="formFile" name="image1">
                    </div>                    
                                      
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            What’s Included?
                        </label>
                        <textarea name="includes" class="admin-page__form-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            Delivery
                        </label>
                        <textarea name="delivery" class="admin-page__form-area" id="exampleFormControlTextarea2" rows="3"></textarea>
                    </div>
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            Dimensions
                        </label>
                        <textarea name="dimensions" class="admin-page__form-area" id="exampleFormControlTextarea3" rows="3"></textarea>
                    </div>
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            Finance
                        </label>
                        <textarea name="finance" class="admin-page__form-area" id="exampleFormControlTextarea4" rows="3"></textarea>
                    </div>
                    <button type="submit" class="admin-page__btn">Send</button>
                </form>
            </div>
        </div>
        `
    }
}

customElements.define('admin-page', Admin);