(function titleScroller(text) {
document.title = text;
console.log(text);
setTimeout(function() {
titleScroller(text.substr(1) + text.substr(0, 1));
}, 300);
}(" uwu   "));
		