TweenMax.from(document.getElementsByClassName("txt"), 2, {
    opacity: 0,
    delay: 10,
})

TweenMax.from(document.getElementsByClassName("p"), 2, {
    opacity: 0,
    delay: 12,
})

TweenMax.staggerFrom(".sidebar-menu li", 1, {
    opacity: 0,
    y: 10
}, 0.2);

TweenMax.from(".sidebar-footer", 0.5, {
    opacity: 0,
    delay: 1.2,
    y: 10,
    transition: "unset"
})