import { Component } from "../../../core/Component/Component";

export class HomeCommentSlider extends Component {

    render() {
        return `
        <section class="homepage-main__comment-section">
            <div class="container homepage-main__comment-section-container">
                <div class="swiper homepage-main__comment-section-slider">
                    <div class="swiper-wrapper homepage-main__comment-section-slider-wrapper">
                        <div class="swiper-slide homepage-main__comment-section-slide">
                            <div class="homepage-main__comment-section-wrapper">
                                <div class="homepage-main__comment-section-comment">
                                    <h2 class="homepage-main__comment-section-comment-heading">FURNITURE TO WRITE HOME
                                        ABOUT</h2>
                                    <img src="../../assets/images/homepage-comment-picture-adapt.jpg" alt="comment-picture"
                                        class="homepage-main__comment-section-slide-img-adaptive">
                                    <p class="homepage-main__comment-section-comment-text">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit. Id dictum quam nisi, eget est commodo neque aliquam leo.
                                        Rhoncus habitant
                                        eu
                                        aliquam elit ipsum sagittis, sit proin. Donec magna sapien et blandit vehicula
                                        vestibulum.
                                        Laoreet
                                        sagittis augue quis lacinia. Ut enim eget semper odio pretium rhoncus. Blandit
                                        velit augue
                                        donec ut
                                        rhoncus semper imperdiet adipiscing dignissim. Nisl sit dui etiam morbi morbi
                                        facilisi
                                        tristique.
                                    </p>
                                    <div class="homepage-main__comment-section-comment-author">
                                        <div class="homepage-main__comment-section-comment-author-rating">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                        </div>
                                        <p class="homepage-main__comment-section-comment-author-name">Wade Warren</p>
                                    </div>
                                </div>
                                <img src="../../assets/images/homepage-comment-picture.jpg" alt="comment-picture"
                                    class="homepage-main__comment-section-slide-img">
                            </div>
                        </div>
                        <div class="swiper-slide homepage-main__comment-section-slide">
                            <div class="homepage-main__comment-section-wrapper">
                                <div class="homepage-main__comment-section-comment">
                                    <h2 class="homepage-main__comment-section-comment-heading">FURNITURE TO WRITE HOME
                                        ABOUT</h2>
                                    <img src="../../assets/images/homepage-comment-picture-adapt.jpg" alt="comment-picture"
                                        class="homepage-main__comment-section-slide-img-adaptive">
                                    <p class="homepage-main__comment-section-comment-text">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit. Id dictum quam nisi, eget est commodo neque aliquam leo.
                                        Rhoncus habitant
                                        eu
                                        aliquam elit ipsum sagittis, sit proin. Donec magna sapien et blandit vehicula
                                        vestibulum.
                                        Laoreet
                                        sagittis augue quis lacinia. Ut enim eget semper odio pretium rhoncus. Blandit
                                        velit augue
                                        donec ut
                                        rhoncus semper imperdiet adipiscing dignissim. Nisl sit dui etiam morbi morbi
                                        facilisi
                                        tristique.
                                    </p>
                                    <div class="homepage-main__comment-section-comment-author">
                                        <div class="homepage-main__comment-section-comment-author-rating">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                            <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                                class="homepage-main__comment-section-comment-author-rating-img">
                                        </div>
                                        <p class="homepage-main__comment-section-comment-author-name">Wade Warren</p>
                                    </div>
                                </div>
                                <img src="../../assets/images/homepage-comment-picture.jpg" alt="comment-picture"
                                    class="homepage-main__comment-section-slide-img">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination homepage-main__comment-section-slider-pagination"></div>
                    <div class="swiper-button-prev homepage-main__comment-section-slider-button-prev">
                        <img src="../../assets/images/icons/left-slider-arrow.svg" alt="left-slider-arrow"
                            class="homepage-main__comment-section-slider-button-prev-img">
                    </div>
                    <div class="swiper-button-next homepage-main__comment-section-slider-button-next">
                        <img src="../../assets/images/icons/right-slider-arrow.svg" alt="right-slider-arrow"
                            class="homepage-main__comment-section-slider-button-next-img">
                    </div>
                </div>
            </div>

            <div class="swiper homepage-main__comment-section-slider-adapt">
                <div class="swiper-wrapper homepage-main__comment-section-slider-wrapper">
                    <div class="swiper-slide homepage-main__comment-section-slide">
                        <div class="homepage-main__comment-section-wrapper">
                            <div class="homepage-main__comment-section-comment">
                                <h2 class="homepage-main__comment-section-comment-heading">FURNITURE TO WRITE HOME
                                    ABOUT</h2>
                                <img src="../../assets/images/homepage-comment-picture-adapt.jpg" alt="comment-picture"
                                    class="homepage-main__comment-section-slide-img-adaptive">
                                <p class="homepage-main__comment-section-comment-text">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit. Id dictum quam nisi, eget est commodo neque aliquam leo.
                                    Rhoncus habitant
                                    eu
                                    aliquam elit ipsum sagittis, sit proin. Donec magna sapien et blandit vehicula
                                    vestibulum.
                                    Laoreet
                                    sagittis augue quis lacinia. Ut enim eget semper odio pretium rhoncus. Blandit
                                    velit augue
                                    donec ut
                                    rhoncus semper imperdiet adipiscing dignissim. Nisl sit dui etiam morbi morbi
                                    facilisi
                                    tristique.
                                </p>
                                <div class="homepage-main__comment-section-comment-author">
                                    <div class="homepage-main__comment-section-comment-author-rating">
                                        <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                            class="homepage-main__comment-section-comment-author-rating-img">
                                        <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                            class="homepage-main__comment-section-comment-author-rating-img">
                                        <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                            class="homepage-main__comment-section-comment-author-rating-img">
                                        <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                            class="homepage-main__comment-section-comment-author-rating-img">
                                        <img src="../../assets/images/icons/rating-star.svg" alt="rating-star"
                                            class="homepage-main__comment-section-comment-author-rating-img">
                                    </div>
                                    <p class="homepage-main__comment-section-comment-author-name">Wade Warren</p>
                                </div>
                            </div>
                            <img src="../../assets/images/homepage-comment-picture.jpg" alt="comment-picture"
                                class="homepage-main__comment-section-slide-img">
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination homepage-main__comment-section-slider-pagination"></div>
                <div class="swiper-button-prev homepage-main__comment-section-slider-button-prev">
                    <img src="../../assets/images/icons/left-slider-arrow.svg" alt="left-slider-arrow"
                        class="homepage-main__comment-section-slider-button-prev-img">
                </div>
                <div class="swiper-button-next homepage-main__comment-section-slider-button-next">
                    <img src="../../assets/images/icons/right-slider-arrow.svg" alt="right-slider-arrow"
                        class="homepage-main__comment-section-slider-button-next-img">
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('mrd-comment-slider', HomeCommentSlider);