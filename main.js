var playPause = anime({
    targets: 'div.box',
    translateX: [
        { value: 200, duration: 500 },
        { value: 0, duration: 800 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i, l) {
        return i * 1000;
    },
    autoplay: false,
    loop: true
});
document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;


// anime({
//     targets: 'div.box.blue',
//     translateX: [
//         { value: 200, duration: 500, delay: 1000 },
//         { value: 0, duration: 800 }
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 1000
//     }
// });

// anime({
//     targets: 'div.box.green',
//     translateX: [
//         { value: 200, duration: 500, delay: 2000 },
//         { value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 2000
//     }
// });

// anime({
//     targets: 'div.box.yellow',
//     translateX: [
//         { value: 200, duration: 500, delay: 3000 },
//         { value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 3000
//     }
// });

// anime({
//     targets: 'div.box.green',
//     translateX: [
//         { value: 200, duration: 500, delay: 2000 },
//         { value: 0, duration: 500 }
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 2000
//     }
// });