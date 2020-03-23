$(window).load(function(){
    //aboutSet()
    efficacyEffect()
    productEffect()
    recipesEffect()
    partnerEffect()
    //snsEffect()
})

// function aboutSet(){
//     $(window).on("resize",aboutTbox)
//     aboutTbox()
//     function aboutTbox(){
//         $("#about_tbox").css({"height":$("#about_video").innerHeight()})
//     }
// }

function efficacyEffect(){
    var grayLayer=$("<div class='gray_layer'></div>")

    $(".efficacy_btn").on("click",onEfficacyClick)

    function onEfficacyClick(){
        grayLayer.appendTo($(this).parent().parent())

        $(".efficacy_btn").animate({"opacity":1},400,"easeOutCubic")
        $(".efficacy_infor").animate({"top":100,"opacity":0},400,"easeOutCubic")

        $(this).parent().parent().children(".gray_layer").animate({"opacity":1},800,"easeOutCubic")
        $(this).parent().next().animate({"top":-75,"opacity":1},300,"easeOutCubic")
        $(this).animate({"opacity":0},300,"easeOutCubic")
    }
}


function productEffect(){
    var $productList=$("#product_list")
    var $productLi=$productList.children()
    var productLiWidth=$productLi.outerWidth()
    var currentPosition

    productReset()
    $productList.children().last().prependTo($productList)

    $(window).on("resize",productReset)
    $("#product_next_btn").on("click",onProductNext)
    $("#product_prev_btn").on("click",onProductPrev)

    function productReset(){
        $productLi.css({"width":12.5+"%"})
        productLiWidth=$productLi.outerWidth()
        $productList.css({"width":200+"%","left":-productLiWidth})    
    }

    function onProductNext(){
        currentPosition=$productList.position().left
        $("#product_list:not(:animated)").animate({"left":currentPosition-productLiWidth},500,"easeOutCubic",function(){
            $productList.children().first().appendTo($productList)
            $productList.css({"left":-productLiWidth})
        })
    }

    function onProductPrev(){
        currentPosition=$productList.position().left
        $("#product_list:not(:animated)").animate({"left":currentPosition+productLiWidth},500,"easeOutCubic",function(){
            $productList.children().last().prependTo($productList)
            $productList.css({"left":-productLiWidth})
        })
    }
}


function recipesEffect(){
    var $recipesName=$("#recipes_name_list li")
    var $recipesList=$("#recipes_list li")
    var recipesClickNum

    $recipesName.eq(0).addClass("selected")
    $recipesList.eq(0).show()

    $recipesName.on("click",onRecipesClick)

    function onRecipesClick(){
        recipesClickNum=$recipesName.index($(this))
        $recipesName.removeClass("selected")
        $recipesList.hide()
        $recipesName.eq(recipesClickNum).addClass("selected")
        $recipesList.eq(recipesClickNum).show()
    }
}


function partnerEffect(){
    $("#partner_list li").on("mouseenter",onPartnerOver)
    $("#partner_list li").on("mouseleave",onPartnerOut)

    function onPartnerOver(){
        onPartnerOut()

        $(this).children(".partner_circle").addClass("selected")
    }
    function onPartnerOut(){
        $(".partner_circle").removeClass("selected")
    }
}