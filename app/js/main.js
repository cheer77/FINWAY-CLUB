$(function () {

    $(".js-range-slider").ionRangeSlider({
        grid: true,
    });

    let range = document.querySelector('.board__progress-num');
    let rangeNum = document.querySelector('.board__progress-text');
    range.oninput = function () {
        console.log(this.value);
        rangeNum.innerHTML = this.value;
    };

});