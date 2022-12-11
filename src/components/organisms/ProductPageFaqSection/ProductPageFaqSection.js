import { Component } from "../../../core/Component/Component";

export class ProductPageFaqSection extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    question: 'Can I return my furniture?',
                    text: `In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day
                        returns policy. However, you will be charged an administrative fee to cover this. Your refund
                        will be processed as soon as the product has been returned to our warehouse and has been
                        thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for
                        items that are not damaged.

                        What do I do if my item arrives damaged, or if I have received the wrong item?
                        In the unlikely event that you receive a damaged item, please contact us within 24 hours of
                        receiving your order. You can contact us via telephone or email. We will ask you to send
                        photographs and a description of the damage and will then thoroughly investigate. If required,
                        we will repair, replace, or refund your damaged item.

                        If you receive an incorrect item, please report it to us as soon as possible and we will make
                        arrangements for this to be returned and the correct item sent to you.`
                },
                {
                    question: 'Can your furniture be left outside?',
                    text: `In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day
                        returns policy. However, you will be charged an administrative fee to cover this. Your refund
                        will be processed as soon as the product has been returned to our warehouse and has been
                        thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for
                        items that are not damaged.

                        What do I do if my item arrives damaged, or if I have received the wrong item?
                        In the unlikely event that you receive a damaged item, please contact us within 24 hours of
                        receiving your order. You can contact us via telephone or email. We will ask you to send
                        photographs and a description of the damage and will then thoroughly investigate. If required,
                        we will repair, replace, or refund your damaged item.

                        If you receive an incorrect item, please report it to us as soon as possible and we will make
                        arrangements for this to be returned and the correct item sent to you.`
                },
            ]
        }
    }

    addClass = (evt) => {
        const target = evt.target.closest('.product-main__faq-question');
        if(evt.target.className != 'product-main__faq-question-icon') return;
        evt.target.parentNode.nextElementSibling
            .classList.toggle('product-main__faq-question-text--active');
    } 

    componentDidMount() {
        this.addEventListener('click', this.addClass);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.addClass);
    }

    render() {
        return `
        
        <section class="product-main__faq">
            <div class="container">
                <h2 class="product-main__faq-heading">Frequently Asked Questions</h2>
                
                    ${this.state.data.map(({ question, text }) => {
                        return `
                        <div class="product-main__faq-question">
                            <div class="product-main__faq-question-wrapper">
                                <h6 class="product-main__faq-question-heading">${question}</h6>
                                <img src="../../assets/images/icons/cross-icon.svg" alt="cross-icon"
                                    class="product-main__faq-question-icon">
                            </div>
                            <p class="product-main__faq-question-text">
                                ${text}
                            </p>
                        </div>
                        `
                    }).join(' ')}
                    
                
            </div>
        </section>
        `
    }
}

customElements.define('mrd-pp-faq-section', ProductPageFaqSection);