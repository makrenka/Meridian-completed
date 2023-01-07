import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core/Component/Component";

export class BreadcrumpCart extends Component {

    render() {
        return `
        <div class="product-main__breadcrump-wrapper cart__breadcrump-wrapper">
            <div class="container">
                <nav class="product-main__breadcrump">
                    <ul class="product-main__breadcrump-list">
                        <li class="product-main__breadcrump-item">
                            <mrd-link-breadcrump to="${appRoutes.home}" class="product-main__breadcrump-link">
                                Home
                            </mrd-link-breadcrump>
                            <p class="product-main__breadcrump-text-sep">/</p>
                        </li>
                        <li class="product-main__breadcrump-item">
                            <p class="product-main__breadcrump-text">SHOPPING CART</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-breadcrump-cart', BreadcrumpCart);