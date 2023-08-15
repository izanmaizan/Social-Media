const facebook = document.querySelector('.facebook');
const fbURL = 'https://www.facebook.com/kodezeru/';

const tiktok = document.querySelector('.tiktok');
const ttURL = 'https://www.tiktok.com/@kodezeru_/';

const instagram = document.querySelector('.instagram');
const igURL = 'https://www.instagram.com/izan.mia/';

const youtube = document.querySelector('.youtube');
const ytURL = 'https://www.youtube.com/@KodeZeru/';

const github = document.querySelector('.github');
const ghURL = 'https://www.github.com/izanmaizan/';

const linkedin = document.querySelector('.linkedin');
const inURL = 'https://www.linkedin.com/in/izanmaizan/';

facebook.addEventListener('click', () => {
    window.open(fbURL, '_blank').focus();
});
tiktok.addEventListener('click', () => {
    window.open(ttURL, '_blank').focus();
});
instagram.addEventListener('click', () => {
    window.open(igURL, '_blank').focus();
});
youtube.addEventListener('click', () => {
    window.open(ytURL, '_blank').focus();
});
github.addEventListener('click', () => {
    window.open(ghURL, '_blank').focus();
});
linkedin.addEventListener('click', () => {
    window.open(inURL, '_blank').focus();
});