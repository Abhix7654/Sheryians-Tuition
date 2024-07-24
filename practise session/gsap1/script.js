var tl = gsap.timeline()

tl.to("#boy",{
        x:600,
        duration:2,
        delay:0.5
})
tl.to("#girl",{
        x:600,
        y:-700,
        duration:2,
       
})
tl.to("#boy",{
        x:1100,
        duration:1.5,
      
      
})
tl.to("#boy",{
        x:1050,
        duration:0.1,
      opacity:0
      
})
tl.to("#km",{
       
        duration:0.1,
      opacity:0
      
})
tl.to("#cn",{
        duration:1,
        opacity:100

})
tl.to("#qt",{
        duration:1,
        opacity:100

})
gsap.to("#one",{
        x:600,
        duration:2,
        delay:0.5,
        opacity:100
})

gsap.to("#two",{
        x:600,
        y:-700,
        duration:6,
        delay:2.5,
        opacity:100
})
gsap.to("#one",{
       
        duration:1,
        delay:2,
        opacity:0
})