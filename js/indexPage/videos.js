const sliderVideo = `
<div class="swiper-slide">
    <a href="" class="article-link">
        <div class="slide-img">
            <img src="" alt="">
            <i class="fa-solid fa-play"></i>
        </div>
        <div class="slide-text">
            <h5 class="article-title"></h5>
        </div>
    </a>
</div>
`;

class SliderVideo extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallback() {
        this.innerHTML = sliderVideo;
        this.querySelector('h5').innerHTML = this.getAttribute('text');
        this.querySelector('img').setAttribute('src', this.getAttribute('src'));
        this.querySelector('a').setAttribute('href', this.getAttribute('href'));
    }
}

window.customElements.define('slide-videos', SliderVideo);