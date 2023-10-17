// Mouse Flolower Animation
Shery.mouseFollower();
// Mouse Magnet Animation
Shery.makeMagnet(".magnet");
// Hover on text and play video animation 
Shery.hoverWithMediaCircle(".hvr", { videos: ['./0.mp4', './1.mp4', './2.mp4'] });

// fleft pin animation

gsap.to(".fleftItem", {
    scrollTrigger: {
        trigger: ".fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
});

// fright images animation

let sections = document.querySelectorAll(".fleftItem");


Shery.imageEffect('#images', {
    style: 3,
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                },
            })
        })
    },
});


