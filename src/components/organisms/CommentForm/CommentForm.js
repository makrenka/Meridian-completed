import { Component } from "../../../core/Component/Component";
import { FormManager } from "../../../core/FormManager/FormManager";
import { databaseService } from "../../../services/Database";

export class Comment extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
        };

        this.form = new FormManager();
    }

    static get observedAttributes() {
        return ["id", "title"];
    }

    toggleIsLoading() {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        })
    }

    createComment = (data) => {
        this.toggleIsLoading();
        databaseService.create("comments", {
            ...data,
        })
            .finally(() => {
                this.toggleIsLoading();
            });
    }

    componentDidMount() {
        this.form.init(this.querySelector('.comment-page__form'), {});
        this.addEventListener('submit', this.form.handleSubmit(this.createComment));
    }

    componentWillUnmount() {
        this.removeEventListener('submit', this.form.handleSubmit(this.createComment));
    }

    render() {
        return `
        <mrd-preloader is-loading="${this.state.isLoading}">
            <div class="comment-page__wrapper">
                <div class="comment-page__container">
                    <div class="comment-page__heading-wrapper">
                        <h1 class="comment-page__heading">Write your comment</h1>
                        <img src="../../assets/images/icons/close-window-icon.png"
                            class="comment-page__close-icon" alt="close-window-icon">
                    </div>
                    <form class="comment-page__form">
                        <div class="comment-page__form-item-id">
                            <input class="comment-page__form-control" type="text" name="id" value="${this.props.id}">
                        </div>
                        <div class="comment-page__form-item">
                            <label class="comment-page__form-label">Product</label>
                            <input class="comment-page__form-control" type="text" name="product" value="${this.props.title}">
                        </div>
                        <div class="comment-page__form-item">
                            <label class="comment-page__form-label">Your name</label>
                            <input class="comment-page__form-control" type="text" name="name">
                        </div>
                        <div class="comment-page__form-item">
                            <label class="comment-page__form-label">Your grade</label>
                            <input class="comment-page__form-range" type="range" name="grade" min="0" max="5" step="0.5">
                        </div>
                        <div class="comment-page__form-item">
                            <label for="exampleFormControlTextarea1" class="comment-page__form-label">
                                Your comment
                            </label>
                            <textarea name="description" class="comment-page__form-area" id="exampleFormControlTextarea1"
                                rows="5"></textarea>
                        </div>

                        <button type="submit" class="comment-page__btn">Send</button>
                    </form>
                </div>
            </div>
        </mrd-preloader>
        `
    }
}

customElements.define('comment-form', Comment);