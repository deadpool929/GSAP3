let tl = gsap.timeline();

tl.from(".nav .nav-1 , .nav .nav-2 h3 , .nav .nav-3 h4 , .nav .nav-3 button", {
  y: -100,
  duration: 1,
  stagger: 0.2,
  scale: 0,
  opacity: 0,
});

tl.from(".page1 .container1 h1", {
  x: -500,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".page1 .container2 img", {
  scale: 0,
  duartion: 0.7,
});

gsap.from(".page2 .box", {
  scale: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page2 .box ",
    scroller: "body",
    scrub: 0.1,
    start: "top 70%",
    end: "bottom 50%",
  },
});
