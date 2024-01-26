import { API_URL } from "../urls.js";

async function sliderFetch() {
    let res = await fetch(API_URL + 'slider');
    let data = await res.json();

    data.map(slide => {
        const el = document.createElement('slider-component');

        el.setAttribute('src', slide.img_uri);
        el.setAttribute('text', slide.title);
        el.setAttribute('href', slide.link);

        document.getElementById('carousel-inner').appendChild(el);
    })

    let slides = document.getElementsByClassName('carousel-item');
    slides[0].classList.add('active');
}

// Start sideHeader Article
async function sideHeaderArticleFetch() {

    let res = await fetch(API_URL + 'header-articles');
    let data = await res.json();

    data.map(article => {
        const el = document.createElement('side-article');

        el.setAttribute('text', article.title);
        el.setAttribute('src', article.img_uri);
        el.setAttribute('href', article.link);
        el.setAttribute('category', article.category);

        document.getElementById('header-articles').appendChild(el);
    })
};
// End sideHeader Article

// Start News Article
async function newsArticleFetch() {

    let res = await fetch(API_URL + 'news');
    let data = await res.json();

    data.map(nw => {
        const el = document.createElement('news-article');

        el.setAttribute('title', nw.title);
        el.setAttribute('src', nw.img_uri);
        el.setAttribute('href', nw.link);
        el.setAttribute('category', nw.category);
        el.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mt-4');

        document.getElementById('news-article').appendChild(el);
    });
};
// End News Article

// Start News Article
async function mostReadCardFetch() {
    let res = await fetch(API_URL + 'most-read');
    let data = await res.json();

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            const ele = document.createElement('most-read-card');

            ele.setAttribute('title', data[i].title);
            ele.setAttribute('src', data[i].img_uri);
            ele.setAttribute('href', data[i].link);
            ele.setAttribute('except', data[i].paragraph);
            ele.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ', ' + moment(parseInt(data[i].date)).format('LL'));

            document.getElementById('most-read').appendChild(ele);

        } else {
            const element = document.createElement('big-most-read-card');

            element.setAttribute('title', data[i].title);
            element.setAttribute('src', data[i].img_uri);
            element.setAttribute('href', data[i].link);
            element.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ', ' + moment(parseInt(data[i].date)).format('LL'));

            document.getElementById('most-read').appendChild(element);
        }
    }
}
// End News Article

// Start News Article
async function opinionArticleFetch() {

    let res = await fetch(API_URL + 'opinion-articles');
    let data = await res.json();

    data.map(article => {
        const el = document.createElement('opinion-articles');

        el.setAttribute('title', article.title);
        el.setAttribute('src', article.user_uri);
        el.setAttribute('href', article.link);
        el.setAttribute('user_name', article.user_name);
        el.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mt-4');

        document.getElementById('opinion-article').appendChild(el);
    })
}
// End News Article

// Start Video
async function sliderVideo() {
    let res = await fetch(API_URL + 'videos');
    let data = await res.json();

    data.map(video => {
        const el = document.createElement('slide-videos');

        el.setAttribute('src', video.img_uri);
        el.setAttribute('text', video.title);
        el.setAttribute('href', video.link);
        el.classList.add('swiper-slide');

        document.getElementById('swiper-wrapper').appendChild(el);
    })
}
// End Video

// Start Latest News
async function latestNewsFetch() {
    let response = await fetch(API_URL + 'latest-news')
    let data = await response.json()

    data.map(article => {
        if (article.position === "right") {
            const el = document.createElement('current-news');

            el.setAttribute('title', article.title)
            el.setAttribute('src', article.img_uri)
            el.setAttribute('href', article.link)
            el.setAttribute('category', article.category)
            el.setAttribute('except', article.paragraph)
            document.getElementById('first-article').appendChild(el)
        } else if (article.position === "side") {
            const el = document.createElement('side-article');

            el.setAttribute('text', article.title)
            el.setAttribute('src', article.img_uri)
            el.setAttribute('href', article.link)
            el.setAttribute('category', article.category)
            document.getElementById('side-article').appendChild(el);
        } else {
            const el = document.createElement('current-news');

            el.classList.add('col-sm-6')
            el.setAttribute('title', article.title)
            el.setAttribute('src', article.img_uri)
            el.setAttribute('href', article.link)
            el.setAttribute('category', article.category)
            document.getElementById('bottom-article').appendChild(el)
        }
    })
}
// End News Article

sliderFetch();

sideHeaderArticleFetch();

newsArticleFetch();

mostReadCardFetch();

opinionArticleFetch();

sliderVideo();

latestNewsFetch();