export function isWholeInViewport(element) {
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

export function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight|| rect.bottom >= 0 && rect.top <= window.innerHeight;
}

export function getNextNonVisibleAnchorAbsoluteOffset() {
    const anchors = document.querySelectorAll('.anchor');
    let res = 0;
    let bottom = window.innerHeight;
    for (let el of anchors) {
        let top = el.getBoundingClientRect().top;
        if (top > bottom) {
            return top + window.pageYOffset;
        }
    }
    return res;
}

export function getNextAnchorAbsoluteOffset() {
    const anchors = document.querySelectorAll('.anchor');
    let res = 0;
    for (let el of anchors) {
        let top = el.getBoundingClientRect().top;
        if (parseInt(top) > 1) {
            return top + window.pageYOffset;
        }
    }
    return res;
}

export function getNextAnchorElement() {
    const anchors = document.querySelectorAll('.anchor');
    let res = anchors[Object.keys(anchors)[0]];

    if (document.documentElement.clientHeight === (window.pageYOffset + window.innerHeight)) {
        return res;
    }

    for (let el of anchors) {
        let top = el.getBoundingClientRect().top;
        if (parseInt(top) > 1) {
            return el;
        }
    }
    return res;
}

export function findActiveAnchor(anchors) {
    let id = anchors[0].id;
    anchors.find(anchor => {
        const el = document.getElementById(anchor.id);
        const pos = el.getBoundingClientRect();
        if (pos.top <= 20 && pos.bottom > 0) {
            id = anchor.id;
        }
    });
    return id;
}

export function isDocumentBottom(margin = 0) {
    return ( (document.documentElement.clientHeight - margin )  <= (window.innerHeight + window.pageYOffset));
}