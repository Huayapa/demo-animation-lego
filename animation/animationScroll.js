import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import ScrollTrigger from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";
export const animateScroll = (legoGroup) => {
  const vw = window.innerWidth / 1000;
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(legoGroup.position, { x: 3 * vw, y: 1 * vw, z: 0 });
  gsap.set(legoGroup.rotation, { x: Math.PI/2, y: -Math.PI/2, z: 0 });

  // let idle;
  // const startIdle = () =>
  //   idle = gsap.to(legoGroup.rotation,{
  //     z: "+=0.3",
  //     x: "+=0.8",
  //     // y: "-=0.4",
  //     duration: 3,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "sine.inOut"
  //   });
  // const stopIdle = () => idle?.kill();
  // ScrollTrigger.create({
  //   trigger: ".section-violet",
  //   start: "top center",
  //   end: "bottom center",
  //   onEnter: startIdle,
  //   onEnterBack: startIdle,
  //   onLeave: stopIdle,
  //   onLeaveBack: stopIdle
  // });

  const tl = gsap.timeline({
    scrollTrigger: {
      x: 60,
      trigger: "main",
      start: "top 10%",
      end: "bottom 50%",
      scrub: 1,
    }
  });

  tl
  .to(legoGroup.position, { x: -2 * vw, y: 0.4 * vw, z: 2 }, 0)
  .to(legoGroup.rotation, { x: 2 , y: 0.4 }, 0)
  .to(legoGroup.position, { x: 2 * vw, y: 0, z: 0.4 }, 1)
  .to(legoGroup.rotation, { x: -2 * vw, y: 0 }, 1)
  .to(legoGroup.position, { x: 0 * vw, y: 0 , z: -2  }, 2)
  .to(legoGroup.position, { x: 0, y: 0}, 3);

  ScrollTrigger.create({
    trigger: "section:nth-child(11)",
    start: "top center",
    onEnter: () => {
      gsap.to(legoGroup.rotation, {
        x: 2,
        y: 2,
        duration: 2
      });
    }
  });


  gsap.utils.toArray(".section-liquid").forEach(section => {

    gsap.fromTo(section,
      { clipPath: "ellipse(20% 10% at 50% 100%)" },
      {
        clipPath: "ellipse(120% 120% at 50% 100%)",
        duration: 1.4,
        ease: "expo.out",

        scrollTrigger:{
          trigger: section,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

  });

const title = gsap.timeline({
  scrollTrigger:{
    trigger: ".title",
    start: "top 80%"
  }
});

title
.from(".title", {
  scaleX: 0,
  transformOrigin: "left",
  duration: 0.5,
  ease: "power2.out"
})
.from(".title", {
  y: 120,
  opacity: 0,
  skewY: 6,
  duration: 0.9,
  ease: "power4.out"
}, "-=0.2");

const image = gsap.timeline({
  scrollTrigger:{
    trigger: ".img-box",
    start: "top 85%",
    end: "bottom 20%",
    scrub: true
  }
});

image
.fromTo(".img-reel",
  {
    scale:0.6,
    rotate:-12,
    y:120,
    filter:"blur(6px)"
  },
  {
    scale:1,
    rotate:0,
    y:0,
    filter:"blur(0px)",
    ease:"none"
  }
)

.to(".img-reel",{
  scale:1.2,
  y:-120,
  rotate:3,
  ease:"none"
});
}