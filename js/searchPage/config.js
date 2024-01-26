import { API_URL } from "../urls.js";

// Start Search Article
async function searchArticleFetch() {

    let res = await fetch(API_URL + 'search-article');
    let data = await res.json();

    data.map(article => {
        const el = document.createElement('search-article');

        el.setAttribute('title', article.title);
        el.setAttribute('src', article.img_uri);
        el.setAttribute('href', article.link);
        el.setAttribute('paragraph', article.paragraph);
        el.setAttribute('datetime', moment().format('dddd') + ', ' + moment().format('LL'));

        document.getElementById('search-articles').appendChild(el);
    });
};
// End Search Article

searchArticleFetch();