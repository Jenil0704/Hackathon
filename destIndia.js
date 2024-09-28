// function locoMotive(){
//     (function () {
//         const locomotiveScroll = new LocomotiveScroll();
//     })();
// }

// window.addEventListener('DOMContentLoaded', function(dets){
//     if(dets.deltaY > 0){
//         gsap.to('.marquee', {
//             transform : 'translateX(-200%)',
//             repeat : -1,
//             duration : 2,
//             ease : "none"
//         })
//         gsap.to('.marquee img',{
//             rotate : 180
//         })
//     }

  

//     else{
//         gsap.to('.marquee', {
//             transform : 'translateX(0%)',
//             repeat : -1,
//             duration : 2,
//             ease : "none"
//         })
//         gsap.to('.marquee img',{
//             rotate : 0
//         })
//     }
// })

// locoMotive();

var text = document.querySelector('.text h1');

window.addEventListener('DOMContentLoaded', function() {
    gsap.from(".text h1", {
        duration: 1.8,
        rotationX: 360,
        y: 30,
        opacity: 0,
        stagger: 0.07,
        ease: "expo.out",
    });
});


gsap.from('.kochi', {
    x : -670,
    duration : 0.8,
})

gsap.from('.ahmedabad', {
    x : 670,
    duration : 0.8
})

gsap.from('.banglore', {
    x : -670,
    duration : 0.8,
    scrollTrigger : {
        trigger : ".banglore",
        start : "top 80%",
        end : "bottom 5%",
    }
})

gsap.from('.jaipur', {
    x : 670,
    duration : 0.8,
    scrollTrigger : {
        trigger : ".jaipur",
        start : "top 80%",
        end : "bottom 5%",
    }
})

gsap.from('.mumbai', {
    x : -670,
    duration : 0.8,
    scrollTrigger : {
        trigger : '.mumbai',
        start : "top 70%",
        end : "bottom 10%",
    }
})