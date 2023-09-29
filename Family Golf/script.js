// gsap.to("nav", {
//     backgroundColor: "#000",
//     duration: 1,
//     delay: 1
// })

// gsap.to("#nav",{
//     backgroundColor: "#000",
//     duration: 0.5,
//     height: "120px",
//     scrollTrigger:{
//         trigger: "#nav",
//         scroller: "body",
//         marker: true,
//         start: "top -10%",
//         end:"top-11%",
//         scrub: 2
//     }
// })

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });