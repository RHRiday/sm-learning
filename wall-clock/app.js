function setTime() {

    var canvas = document.getElementById("clock");
    var context = canvas.getContext("2d");
    var clockRadius = canvas.width / 2;

    context.beginPath();

    context.fillStyle = "black";
    context.arc(clockRadius, clockRadius, clockRadius, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = "white";

    context.beginPath();
    context.arc(clockRadius, clockRadius, 3.5, 0, 2 * Math.PI);
    context.fill();

    context.font = clockRadius / 4 + "px arial";
    context.textAlign = "center";
    context.textBaseline = "middle";

    for (var i = 1; i <= 12; i++) {

        context.fillText(i, clockRadius + clockRadius * 0.8 * Math.sin(i * 2 * Math.PI / 12), clockRadius - (clockRadius * 0.8 * Math.cos(i * 2 * Math.PI / 12)));

    }

    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    var fullHours = hours % 12 + minutes / 60 + seconds / 3600;

    var hoursAngle = fullHours * 2 * Math.PI / 12;
    var minutesAngle = minutes * 2 * Math.PI / 60;
    var secondsAngle = seconds * 2 * Math.PI / 60;

    context.strokeStyle = "white";
    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + clockRadius * 0.5 * Math.sin(hoursAngle), clockRadius - (clockRadius * 0.6 * Math.cos(hoursAngle)));
    context.lineWidth = 3;
    context.stroke();

    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + clockRadius * 0.7 * Math.sin(minutesAngle), clockRadius - (clockRadius * 0.8 * Math.cos(minutesAngle)));
    context.lineWidth = 2;
    context.stroke();

    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + clockRadius * 0.8 * Math.sin(secondsAngle), clockRadius - (clockRadius * 0.8 * Math.cos(secondsAngle)));
    context.lineWidth = 1;
    context.stroke();

}

setInterval(setTime, 1000);