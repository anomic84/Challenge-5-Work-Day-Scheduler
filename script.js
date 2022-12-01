var saveBtn = $(".saveBtn")

$(function () {
    var currentDate = dayjs().format('MMM' + ',' + 'DD' + ',' + 'YYYY')
    $("#currentDay").text(currentDate)

    var currentTime = dayjs().hour()
    var timeBlock = $(".time-block")
    // Smart for loop
    timeBlock.each(function () {
        var hour = parseInt($(this).attr("id"))
        // Set the class of col to present/past/future so colors visually reflect where user is at in the day
        if (hour === currentTime) {
            $(this).children(".col-md-10").attr("class", "present col-md-10 description")
        } else if (hour < currentTime) {
            $(this).children(".col-md-10").attr("class", "past col-md-10 description")
        } else {
            $(this).children(".col-md-10").attr("class", "future col-md-10 description")
        }
    })
    // save button to local storage
    saveBtn.on("click", function (event) {
        event.preventDefault()
        var value = $(this).siblings(".col-md-10").val().replace(key)
        var key = $(this).parent().attr("id")
        localStorage.setItem(key, JSON.stringify(value))
    })
    //jquery function to save text in each box to JSON 
    $("#9 textarea").val(JSON.parse(localStorage.getItem("9")))
    $("#10 textarea").val(JSON.parse(localStorage.getItem("10")))
    $("#11 textarea").val(JSON.parse(localStorage.getItem("11")))
    $("#12 textarea").val(JSON.parse(localStorage.getItem("12")))
    $("#13 textarea").val(JSON.parse(localStorage.getItem("13")))
    $("#14 textarea").val(JSON.parse(localStorage.getItem("14")))
    $("#15 textarea").val(JSON.parse(localStorage.getItem("15")))
    $("#16 textarea").val(JSON.parse(localStorage.getItem("16")))
    $("#17 textarea").val(JSON.parse(localStorage.getItem("17")))
});
