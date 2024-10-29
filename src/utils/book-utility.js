function getImgUrl(name) {

    return new URL(`../assets/book-covers/${name}`, import.meta.url).href;
}
export { getImgUrl };