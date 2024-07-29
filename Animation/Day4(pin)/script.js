gsap.to("#page2 h1",{
        transform:"translateX(-60%)",
        
 scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:1,
           
            pin:true,
        }
})
gsap.to("#page3 img",{
        width:"70%",
    
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:1,
           
            pin:true,
        }
})