document.addEventListener('DOMContentLoaded', function(){
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('news_row_item_bottom_row_block__img')) {
            if (event.target.getAttribute("src") == 'img/like-green.png' ){
                event.target.setAttribute('src', 'img/like-white.png')
            } else{
                event.target.setAttribute('src', 'img/like-green.png')
            }

        }
    });

    fetch("https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json", {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    }).then((response) => response.json())
        .then(function (json) {
        let lists = document.querySelector(".news_row")

            for (let i = 0; i < json.length;i++){
                if (json[i].imgUrl == undefined){
                    json[i].imgUrl = "img/Rectangle-min.png"
                }
                if (json[i].imgUrl.indexOf("hh") === 0) {
                    json[i].imgUrl = "img/Rectangle-min.png"
                }

                lists.innerHTML += '<div class="news_row_item">\n' +
                    '                        <div class="news_row_item_top">\n' +
                    '                            <img class="news_row_item_top__img" src="'+json[i].imgUrl+'" alt="">\n' +
                    '                        </div>\n' +
                    '                        <div class="news_row_item_bottom">\n' +
                    '                            <div class="news_row_item_bottom__title">'+json[i].name +'</div>\n' +
                    '                            <div class="news_row_item_bottom__date">'+json[i].date +'</div>\n' +
                    '                            <div class="news_row_item_bottom__description">'+json[i].text +'</div>\n' +
                    '                            <div class="news_row_item_bottom_row">\n' +
                    '                                <div class="news_row_item_bottom_row__author">'+json[i].author +' </div>\n' +
                    '                                <div class="news_row_item_bottom_row_block">\n' +
                    '                                    <img class="news_row_item_bottom_row_block__img" src="img/like-white.png" alt="">\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                    </div>' ;

            }

    });



});





