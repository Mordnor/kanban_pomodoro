// Drag and Drop Function
var el = document.getElementById('items');
var sortable = Sortable.create(el);

$(document).ready(function(){
    var clock = $('.clock').FlipClock(1500, {
        countdown: true,
        clockFace: 'MinuteCounter'
    });

});
