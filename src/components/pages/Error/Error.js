import { Component } from "../../../core";

export class ErrorPage extends Component {
  render() {
    return `
    <div class="error-page__wrapper">
        <div class="container">
            <h1 class="error-page__h1">The page was not found</h1>
        </div>
    </div>
    `;
  }
}

customElements.define('error-page', ErrorPage)