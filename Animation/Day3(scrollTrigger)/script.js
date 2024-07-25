gsap.from("#page2 .card",{
        y:400,
        duration:2,
       
        stagger:0.2,
        scrollTrigger:{
                trigger:"#page2 .card",
                scroller:"body",
                start:"top 60%",
                end:"top 50%",
                scrub:3,
                markers:true
        }

}

)