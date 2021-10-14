function calc() {

    startDate = new Date($('#startDate').val());
    endDate = new Date($('#endDate').val());

    // diffDay = (endDate - startDate) / (1000 * 60 * 60 * 24);
    // nextDay = startDate.getTime() + (1000 * 60 * 60 * 24);
    // console.log(startDate);
    // console.log(new Date(nextDay).getDay());

    var count = 0;
    var index = startDate.getTime();

    while (index <= endDate.getTime()) {
        dayOfIndex = new Date(index).getDay();
        checkedDays().forEach(element => {
            if (dayOfIndex == element) {
                count++;
            }
        });
        index = index + (1000 * 60 * 60 * 24);
    }
    writeOutput(count);
}

function checkedDays() {
    var days = [];
    $('input[type=checkbox]:checked').each(function () {
        days.push($(this).val());
    });

    return days;
}

function writeOutput(output) {
    $('#totalDays').html(output)
}

$('input').each(function () {
    $(this).on('input', calc)
});