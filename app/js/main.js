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



    $('.board__stat-btn').on('click', function (e) {


        $('.board__stat-btn-img').toggleClass('board__stat-btn-img--active');
        $('.board__stat-items-hidden').toggleClass('board__stat-items-hidden--active');

    });

    $('.board__structur-btn').on('click', function (e) {


        $('.board__structur-btn-img').toggleClass('board__structur-btn-img--active');
        $('.board__structur-items-hidden').toggleClass('board__structur-items-hidden--active');

    });

});