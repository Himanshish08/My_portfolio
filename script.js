
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

// GSAP Animations
var tl = gsap.timeline();

// Page 1 Animations
tl.from("#page1 #nav h1", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    stagger: 0.5
});
tl.from("#page1 #nav h3", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    delay: 0.3,
    stagger: 0.5
});
tl.from("#part2 #content", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.5
});
tl.from("#photo img", {
    x: 500,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.5
});

// Page 2 Animations (About Me)
tl.from("#page2 #me #left img", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
});
tl.from("#page2 #me #right h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.3
});
tl.from("#page2 #me #right h3", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.2
});
tl.from("#page2 #me #right h4", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
});
tl.from("#page2 #me #right button", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    delay: 0.3
});

// Page 3 Animations (My Skills)
tl.from("#page3 #heading h1", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: 0.3
});
tl.from("#page3 #boxes #box", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3
});
tl.from("#page3 #boxes #box h2", {
    x: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.2
});
tl.from("#page3 #boxes #box h4", {
    x: 30,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.2
});

// Page 4 Animations (Contact Me)
tl.from("#page4 #heading h1", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 0.3
});
tl.from("#page4 #links #link", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3
});
