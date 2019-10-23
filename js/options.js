$(function () {
    document.dispatchEvent(new Event('DOMSubtreeModified', {bubbles: true}));
});

