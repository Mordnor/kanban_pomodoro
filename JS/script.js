// Drag and Drop Function
$(document).ready(function() {

    function supp() {
        $(".remove").click(function(event) {
            $(this).parents('li').remove();
        });
    };


    supp()

    $("#add").click(function(event) {
        var task = $(".addText").val()
        console.log(task);
        $("<li class='toDo'>" + task + "<i class='remove'> ✖ </i>" + "</li>").appendTo('#items')
        supp()
    });
});

var el = document.getElementById('items');
var sortable = Sortable.create(el);



$(document).ready(function() {
    // Timer Countdown
    var clock = $('.clock').FlipClock(4, {
        autoStart: false,
        clockFace: 'MinuteCounter',
        onInterval: function() {
            if (this.getFaceValue() == 0) {
                console.log($(".toDo")[0]);
                $("#done").append($(".toDo")[0]);
            }
        }

    });
    var time = clock.getFaceValue();
    console.log(time);
    clock.setCountdown(true);
    clock.stop();
    // Event button
    var btn_start = $('#btn_start');
    btn_start.click(function() {
        clock.start();
    })

    var btn_pause = $('#btn_pause');
    btn_pause.click(function() {
        clock.stop();
    })

    var btn_reset = $('#btn_reset');
    btn_reset.click(function() {
        clock.reset();
    })

});
