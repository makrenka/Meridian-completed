import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";
import { authService } from "../../../services/Auth";

export class Admin extends Component {

    componentDidMount() {
        if (!authService.user) {
            this.dispatch('change-route', {
                target: appRoutes[this.props.path ?? "signUp"],
            });
        }
    }

    render() {
        console.log(authService.user)
        return `
        <div class="admin-page__wrapper">
            <div class="admin-page__container">
                <h1 class="admin-page__heading">Admin Page</h1>
                <form class="admin-page__form">
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Collection name</label>
                        <input class="admin-page__form-control" type="text" name="title">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Price</label>
                        <input class="admin-page__form-price" type="number" name="price">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Upload a photo</label>
                        <input class="admin-page__form-file" type="file" id="formFile" name="poster">
                    </div>
                    <div class="admin-page__form-item">
                        <label class="admin-page__form-label">Chose a type</label>
                        <select class="admin-page__form-select" name="type">
                            <option selected value="livingroom">For the living room</option>
                            <option value="bedroom">For bedroom</option>
                            <option value="kitchen">For kitchen</option>
                            <option value="hallway">For hallway</option>
                            <option value="bathroom">For bathroom</option>
                        </select>
                    </div>
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            What’s Included?
                        </label>
                        <textarea name="description" class="admin-page__form-area" id="exampleFormControlTextarea1" rows="3">
                        </textarea>
                    </div>
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            Delivery
                        </label>
                        <textarea name="description" class="admin-page__form-area" id="exampleFormControlTextarea1" rows="3">
                        </textarea>
                    </div>
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            Dimensions
                        </label>
                        <textarea name="description" class="admin-page__form-area" id="exampleFormControlTextarea1" rows="3">
                        </textarea>
                    </div>
                    <div class="admin-page__form-item">
                        <label for="exampleFormControlTextarea1" class="admin-page__form-label">
                            Finance
                        </label>
                        <textarea name="description" class="admin-page__form-area" id="exampleFormControlTextarea1" rows="3">
                        </textarea>
                    </div>
                    <button type="submit" class="admin-page__btn">Send</button>
                </form>
            </div>
        </div>
        `
    }
}

customElements.define('admin-page', Admin);