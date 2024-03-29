const latestNews = `
<a href="" class="article-link">
    <img src="" alt="">
    <div class="card-text mt-3">
        <span class="article-category"></span>
        <h5 class="article-title"></h5>
        <p></p>
    </div>
</a>
`;

class LatestNews extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = latestNews;
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('span').innerText = this.getAttribute('category');
        this.querySelector('h5').innerText = this.getAttribute('title');

        if (this.getAttribute('except')) {
            this.querySelector('p').innerText = this.getAttribute('except');
        } else {
            this.querySelector('p').style.display = 'none';
        }
    }
}

window.customElements.define('current-news', LatestNews);