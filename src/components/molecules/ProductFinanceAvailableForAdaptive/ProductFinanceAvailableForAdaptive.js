import { Component } from "../../../core/Component/Component";

export class ProductFinanceAvailableForAdaptive extends Component {

    render() {
        return `
        
        <div class="product-main__product-section-options-available">
            <img src="../../assets/images/icons/available-icon.svg" alt="available-icon">
            <div class="product-main__product-section-options-available-text-wrapper">
                <p class="product-main__product-section-options-available-text">
                    Finance Available | Affordable Payments
                </p>
                <p class="product-main__product-section-options-available-text">
                    <span>Up to 36 months.</span>
                </p>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-finance-available-adaptive', ProductFinanceAvailableForAdaptive);