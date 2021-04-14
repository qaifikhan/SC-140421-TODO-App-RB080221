$(document).ready(function() {
    console.log("DOM ready!!")

    function renderProductImages(url, pos) {
        // <img class="preview-images active" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg" />

        var image = $("<img>").attr("src", url).addClass("preview-images");
        if(pos === 0) {
            image.addClass("active");
        }

        image.click(function() {
            $(".preview-images").removeClass("active");
            image.addClass("active");
            $("#left-preview-img").attr("src", url)
        })

        $("#product-images").append(image);
    }

    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/3", function(response) {
        var productData = response;
        
        $("#left-preview-img").attr("src", productData.preview);
        
        for(var i=0; i< productData.photos.length; i++) {
            renderProductImages(productData.photos[i], i);
        }
    })
});