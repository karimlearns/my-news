const articleBodyHeader = `
<div class="article-img">
    <img src="" alt="">
</div>
<div class="article-subtitle">
    <span class="subtitle">/span>
</div>
<div class="article-datetime">
    <time datetime=""></time>
</div>
`;

// Start Custom image Header
class ArticleBodyHeader extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = articleBodyHeader;

        this.querySelector('.subtitle').innerText = this.getAttribute('subtitle');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('time').innerText = this.getAttribute('date');
        this.querySelector('time').setAttribute('datetime', this.getAttribute('date'));
    }
}

window.customElements.define('article-body-header', ArticleBodyHeader);
// End Custom image Header