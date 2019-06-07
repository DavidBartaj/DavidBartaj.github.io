$(document).ready(function () {

    // Ітервал між показом слайдів
    $('.carousel').carousel({
        interval: 5000,
        pause: false
    });


    $(`.contactsHeader a`).mouseover(function () {
        $(this).css({
            background: `#516a4a`,
            color: `white`,
            cursor: `pointer`
        })
    });
    $(`.contactsHeader a`).mouseout(function () {
        $(this).css({
            background: ``,
            color: ``,
            cursor: ``

        })
    });


// Кнопки для гортання боксів з товарами
    let itemCountClickINGoods = 5;

    $(`#nextItemINGoods`).click(function () {
        if (itemCountClickINGoods == 5) {
            $(`.item1`).animate({
                left: -370
            }, 500);
            $(`.item2`).animate({
                left: 0
            }, 500);
            $(`.item3`).animate({
                left: 400
            }, 500);
            $(`.item4`).animate({
                left: 800
            }, 500)
        } else if (itemCountClickINGoods == 6) {
            $(`.item1`).animate({
                left: -370
            }, 500);
            $(`.item2`).animate({
                left: -370
            }, 500);
            $(`.item3`).animate({
                left: 0
            }, 500);
            $(`.item4`).animate({
                left: 400
            }, 500);
            $(`.item5`).animate({
                left: 800
            }, 500)
        } else if (itemCountClickINGoods == 7) {
            $(`.item1`).animate({
                left: -370
            }, 500);
            $(`.item2`).animate({
                left: -370
            }, 500);
            $(`.item3`).animate({
                left: -370
            }, 500);
            $(`.item4`).animate({
                left: 0
            }, 500);
            $(`.item5`).animate({
                left: 400
            }, 500);
            $(`.item6`).animate({
                left: 800
            }, 500)
        } else if (itemCountClickINGoods >= 8) {
            itemCountClickINGoods = 7
        }
        itemCountClickINGoods++;
        console.log(itemCountClickINGoods)
    });
    $(`#prevItemINGoods`).click(function () {
        if (itemCountClickINGoods == 6) {
            $(`.item1`).animate({
                left: 0
            }, 500);
            $(`.item2`).animate({
                left: 400
            }, 500);
            $(`.item3`).animate({
                left: 800
            }, 500);
            $(`.item4`).animate({
                left: 1170
            }, 500);
        } else if (itemCountClickINGoods == 7) {
            $(`.item2`).animate({
                left: 0
            }, 500);
            $(`.item3`).animate({
                left: 400
            }, 500);
            $(`.item4`).animate({
                left: 800
            }, 500);
            $(`.item5`).animate({
                left: 1170
            }, 500);

        } else if (itemCountClickINGoods == 8) {
            $(`.item2`).animate({
                left: -370
            }, 500);
            $(`.item3`).animate({
                left: 0
            }, 500);
            $(`.item4`).animate({
                left: 400
            }, 500);
            $(`.item5`).animate({
                left: 800
            }, 500);
            $(`.item6`).animate({
                left: 1170
            }, 500)
        } else if (itemCountClickINGoods < 6) {
            itemCountClickINGoods = 6
        }
        itemCountClickINGoods--;
        console.log(itemCountClickINGoods)
    });

    // Відкриття модалки з товаром
    $(`.itemWrap div`).click(function () {
        let code = $(this).html();
        $(`.bigSizeGood`).append(code).css({
            display: `flex`,
            zIndex: 7
        });
        console.log(`work`)
    });


    // Закриття по кліку модалки з конкретним товаром
    $(`.bigSizeGood`).click(function () {
        let code = $(this).html(``);
        $(`.bigSizeGood`).append(code).css({
            display: `none`
        });

    })


});