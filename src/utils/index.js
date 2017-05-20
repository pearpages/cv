export function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    const res = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
    return res;
}

export function getNextNonVisibleAnchor() {
    const anchors = document.querySelectorAll('.anchor');
    let res = 0;
    let currentPos = window.outerHeight;
    console.log(currentPos);
    for (let el of anchors) {
        let top = el.getBoundingClientRect().top;
        if (top > currentPos) {
            return top;
        }
    }
    return res;
}