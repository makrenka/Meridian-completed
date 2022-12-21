import { Component } from "../../../core/Component/Component";

export class Comment extends Component {

    render() {
        return `
        <div class="comment-page__wrapper">
            <div class="comment-page__container">
                <h1 class="comment-page__heading">Write your comment</h1>
                <form class="comment-page__form">
                    <div class="comment-page__form-item">
                        <input class="comment-page__form-control" type="text" name="id" value="id">
                    </div>
                    <div class="comment-page__form-item">
                        <label class="comment-page__form-label">Product</label>
                        <input class="comment-page__form-control" type="text" name="product">
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
                            rows="10"></textarea>
                    </div>

                    <button type="submit" class="comment-page__btn">Send</button>
                </form>
            </div>
        </div>
        `
    }
}

customElements.define('comment-page', Comment);