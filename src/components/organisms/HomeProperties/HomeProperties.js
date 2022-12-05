import { Component } from "../../../core/Component/Component";

export class HomeProperties extends Component {

    render() {
        return `
        <div class="container">
            <div class="homepage-main__properties">
                <div class="homepage-main__property">
                    <img src="../../assets/images/properties-icons/guarantee.svg" alt="guarantee"
                        class="homepage-main__property-img guarantee">
                    <h4 class="homepage-main__property-heading">8 YEAR GUARANTEE</h4>
                    <p class="homepage-main__property-text">For your 'peace' of mind</p>
                </div>
                <div class="homepage-main__property">
                    <img src="../../assets/images/properties-icons/rust-free.svg" alt="rust-free"
                        class="homepage-main__property-img rust-free">
                    <h4 class="homepage-main__property-heading">Rust Free</h4>
                    <p class="homepage-main__property-text">Quality Materials</p>
                </div>
                <div class="homepage-main__property">
                    <img src="../../assets/images/properties-icons/service.svg" alt="service"
                        class="homepage-main__property-img service">
                    <h4 class="homepage-main__property-heading">PREMIUM SERVICE</h4>
                    <p class="homepage-main__property-text">Premium delivery available</p>
                </div>
            </div>
        </div>

        <div class="homepage-main__properties-adapt">
            <div class="homepage-main__property">
                <img src="../../assets/images/properties-icons/guarantee.svg" alt="guarantee"
                    class="homepage-main__property-img guarantee">
                <h4 class="homepage-main__property-heading">8 YEAR GUARANTEE</h4>
                <p class="homepage-main__property-text">For your 'peace' of mind</p>
            </div>
            <div class="homepage-main__property">
                <img src="../../assets/images/properties-icons/rust-free.svg" alt="rust-free"
                    class="homepage-main__property-img rust-free">
                <h4 class="homepage-main__property-heading">Rust Free</h4>
                <p class="homepage-main__property-text">Quality Materials</p>
            </div>
            <div class="homepage-main__property">
                <img src="../../assets/images/properties-icons/service.svg" alt="service"
                    class="homepage-main__property-img service">
                <h4 class="homepage-main__property-heading">PREMIUM SERVICE</h4>
                <p class="homepage-main__property-text">Premium delivery available</p>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-home-properties', HomeProperties);