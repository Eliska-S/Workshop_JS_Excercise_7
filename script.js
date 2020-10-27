$('.button').on('click', () => {
    console.log("Yeah, you clicked me!");
})

$('.button2').on ('click', () => {
    $('.button').text("Text changed");
})

$('.b3').on('click', () => {
    $('button').css('backgroundColor', 'green');
    $('button').css('color', 'white');
})