window.addEventListener("load", function(){


    gsap.registerPlugin(ScrollTrigger);
    
    const area  = document.querySelector(".js-area");
    const wrap  = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;
    

    gsap.set(wrap,  { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });
    
    gsap.to(items, {
      xPercent: -100 * ( num - 1 ), 
      ease: "none",
      scrollTrigger: {
        trigger: area, 
        start: "top top", 
        end: "+=4000", 
        pin: true, 
        scrub: true, 
      }
    });
});

window.addEventListener("load", function(){


  gsap.registerPlugin(ScrollTrigger);
  
  const text = document.querySelectorAll(".js-text");

  gsap.to(text, {
  delay: 1,
  duration: 1, 
  opacity: 1, 
  y: 0, 

  scrollTrigger: {
  trigger: text,
  start: "top center",
  end: "bottom center",
  scrub: 1,

   },
  });
  });