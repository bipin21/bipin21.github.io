$(function () {
    let width = 50;
    let amount = 10;
    let interval = 250;
    let noOfCircle = 10;

    $("#start").click(function () {
        width = parseInt($("#width").val());
        amount = parseInt($("#growthAmount").val());
        interval = parseInt($("#interval").val());
        noOfCircle = parseInt($("#noOfCircle").val());
        for (let i = 0; i < noOfCircle; i++) {
            let newCircle = $("<div class='circle'>");
            newCircle.css({
                "background-color": generateRandomColor(),
                "position": "absolute",
                "top": getRandomInt(80) + "vh",
                "left": getRandomInt(100) + "%",
                "border-radius": "50%"
            });
            $("body").append(newCircle);
        }
        setInterval(increaseCircleSize, interval);
        $("div").click(function () {
            $(this).remove();
        });
    });

    const increaseCircleSize = () => {
        $(".circle").css("height", width + "px").css("width", width + "px");
        width += amount;
    }

    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const getRandomInt = (rand) => {
        return Math.floor(Math.random() * rand);
    }
});

