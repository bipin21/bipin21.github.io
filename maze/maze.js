$(document).ready(function () {
    "use strict";
    $("#start").click(function () {
        let start = true;
        $("#maze .boundary").removeClass("youlose");
        $("#status").text("Move mouse to the end without touching boundary in order to win the game");
        $("#maze .boundary").mouseover(function () {
            updateboundary();
        });
        function updateboundary(){
            if(start){
                $("#maze .boundary").addClass("youlose");
                $("#status").text("You Lose!!!!");
            }
        }
        $("#end").mouseenter(function () {
            if (!$(".boundary").hasClass("youlose")) {
                $("#status").text("Congratulation!! You Win");
                start = false;
            }
        });
        $("#maze").mouseleave(function () {
            updateboundary();
        });
    });
})