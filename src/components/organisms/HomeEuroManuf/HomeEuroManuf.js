import { Component } from "../../../core/Component/Component";

export class HomeEuroManuf extends Component {

    render() {
        return `
        <div class="homepage-main__european-manufacturing">
            <div class="homepage-main__european-manufacturing-img"></div>
            <div class="container">
                <div class="homepage-main__european-manufacturing-wrapper">
                    <img src="../../../assets/images/icons/needle-1.svg" alt="needle-icon"
                        class="homepage-main__european-manufacturing-icon">
                    <h4 class="homepage-main__european-manufacturing-heading">COMMITED TO EUROPIAN MANUFACTURING</h4>
                    <p class="homepage-main__european-manufacturing-text">Our Products Are Made With <strong>high
                            quality</strong> European <strong>fabric</strong> And Sewn By A <strong>small</strong> Team
                        <strong>CRAFTSPEOPLE</strong> In <strong>EUROPE</strong>
                    </p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('mrd-euro-manuf', HomeEuroManuf);