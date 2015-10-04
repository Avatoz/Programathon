


setTimeout(function() {

    $("#mascaradas").animate({
        left: '250px',
        height: '+=490px',
        width: '+=680px'
    });
    
}, 1000);




$('img.draggable').each(function(i, el) {

    var tLeft = Math.floor(Math.random() * 500),
            tTop = Math.floor(Math.random() * 500);

    $(el).css({position: 'absolute', left: tLeft, top: tTop});

});

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();


var canvas = document.getElementById("canvasMundo1"),
        ctx = canvas.getContext("2d"),
        width = 1020,
        height = 500,
        player = {
            x: width / 2,
            y: height - 5,
            width: 100,
            height: 100,
            speed: 3,
            velX: 0,
            velY: 0,
            jumping: false
        },
keys = [],
        friction = 0.8,
        gravity = 0;


canvas.width = width;
canvas.height = height;





//if (jQuery) {
//    (function($) {
//
//
//        $.memoryGame = function() {
//
//        }
//
//        $.memoryGame.data = {
//            firstSelected: null,
//            secondSelected: null,
//            timeout: 750,
//            moves: 0,
//            completed: false,
//            startTime: 0,
//            intervalId: null
//        };
//
//        $.memoryGame.init = function() {
//            $('canvasMundo1').each(function() {
//                init($(this), arguments);
//            });
//        }
//
//        $.memoryGame.data.cover = "images/cover.png";
//
//        $.memoryGame.images = [
//            "images/backpack.png",
//            "images/boat.png",
//            "images/dinosaur.png",
//            "images/home.png",
//            "images/hourglass.png",
//            "images/map.png",
//            "images/officer.png",
//            "images/paint.png",
//            "images/penguin.png",
//            "images/people.png",
//            "images/run.png",
//            "images/toys.png"
//        ];
//
//        function shuffle(ary) {
//            idx = ary.length - 1;
//
//            while (idx > 0) {
//                jdx = parseInt(Math.random() * 10)
//                tmp = ary[idx];
//                ary[idx] = ary[jdx]
//                ary[jdx] = tmp;
//                idx--;
//            }
//        }
//
//
//
//        function updateTime() {
//            var now = new Date();
//            var delta = parseInt((now.valueOf() - $.memoryGame.data.startTime) / 1000);
//            var min = parseInt(delta / 60);
//            var sec = delta % 60;
//
//            sec = sec < 10 ? "0" + sec : sec;
//            $('.memoryGameTimeData').text(min + ":" + sec);
//
//        }
//
//        function endGame() {
//            clearInterval($.memoryGame.data.intervalId);
//            $('#memoryGameRestartButton').show();
//        }
//
//        function startGame() {
//            $.memoryGame.init();
//        }
//
//        function selectCard(evt) {
//            var target = evt.currentTarget;
//            var $img = $('img', target);
//
//            if ($img.data('matched') || $.memoryGame.data.secondSelected) {
//                return;
//            }
//
//            $img.attr('src', $img.attr('data-src'));
//
//            if (!$.memoryGame.data.firstSelected) {
//                $.memoryGame.data.firstSelected = $img;
//            }
//            else {
//                var $first = $.memoryGame.data.firstSelected;
//
//                if ($first.attr('data-src') === $img.attr('data-src')) {
//                    $first.data('matched', true);
//                    $img.data('matched', true);
//                    $.memoryGame.data.firstSelected = null;
//
//                    if ($('.memoryGame img[src="' + $.memoryGame.data.cover + '"]').length == 0) {
//                        endGame();
//                    }
//                }
//                else {
//                    $.memoryGame.data.secondSelected = $img;
//                    setTimeout(deSelectCard, $.memoryGame.data.timeout)
//                }
//
//                $.memoryGame.data.moves += 1;
//                updateStats();
//            }
//        }
//
//        function updateStats() {
//            $('.memoryGameMovesData').text($.memoryGame.data.moves);
//        }
//
//        function deSelectCard() {
//            $.memoryGame.data.firstSelected.attr('src', $.memoryGame.data.cover);
//            $.memoryGame.data.firstSelected = null;
//            $.memoryGame.data.secondSelected.attr('src', $.memoryGame.data.cover);
//            $.memoryGame.data.secondSelected = null;
//        }
//
//        $(document).ready(function() {
//            $.memoryGame.init();
//        });
//
//    })(jQuery);
//}