const searchArticle = `
<div class="article-card">
    <a href="" class="article-link">
        <div class="row">
            <div class="col-md-4">
                <img src="" alt="">
            </div>
            <div class="col-md-8">
                <h4></h4>
                <p></p>
                <time datetime=""></time>
            </div>
        </div>
    </a>
</div>
`;

class SearchArticle extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = searchArticle;

        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('h4').innerText = this.getAttribute('title');
        this.querySelector('p').innerText = this.getAttribute('paragraph');
        this.querySelector('time').setAttribute('datetime', this.getAttribute('datetime'));
        this.querySelector('time').innerText = this.getAttribute('datetime');
    }
}

window.customElements.define('search-article', SearchArticle);