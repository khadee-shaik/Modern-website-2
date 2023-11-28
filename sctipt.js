document.onload = 
window.open('https://www.google.com');


// gsap animations

let circle = document.querySelector('#circle');
window.addEventListener('mousemove',function(details){
    // console.log(details);

  let Valuex  = details.pageX;
   let Valuey= details.pageY;

setTimeout(function(){
    circle.style.top = `${Valuey}px`;
    circle.style.left = `${Valuex}px`;

},100);
   
});

$('#hero h1').textillate({
    in:{
        effect:'fadeInUp'
    },
    loop:true,
    out:{
        effect:'fadeOutRight'
    }
})
// var t1 = gsap.timeline();
gsap.to('.fadeanimation',{
    scrollTrigger: {
        trigger:'#down',
        // pin: true,
        // scrub: 1,
        start:'top 5%',
        // markers:true,
        toggleActions:'play pause resume reverse',
    },
    opacity:0,
    y:-100,
    stagger:.3,
    duration: 2,
    onComplete: function(){
        $('#down #text h3').textillate('start')
    }
})

$('#down #text h3').textillate({
    autoStart: false,
    in: {
        effect:'fadeInUp',
        delay:15
    },
    callback: function(){
        gsap.fromTo('#down #text img',{
            opacity:0,
            y:-30,
            duration:3,
            ease:'Expo.easeInOut'
        },{
            opacity:0,
            y:30
        })
    }
})