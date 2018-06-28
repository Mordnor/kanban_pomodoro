// Drag and Drop Function
var el = document.getElementById('items');
var sortable = Sortable.create(el);



$(document).ready(function(){
    // Timer Countdown
    var clock = $('.clock').FlipClock(1499, {
        autoStart: false,
        clockFace: 'MinuteCounter'
    });
    clock.setCountdown(true);
    clock.stop();
    // Event button
    var btn_start = $('#btn_start');
    btn_start.click(function(){
        clock.start();
    })

    var btn_pause = $('#btn_pause');
    btn_pause.click(function(){
        clock.stop();
    })

    var btn_reset = $('#btn_reset');
    btn_reset.click(function(){
        clock.reset();
    })
});
