/*global $,document , x, duration ,y , */
$(document).ready(function () {
    $(".gear-check").click(function () {
        $(".color-option").show();
    });
    
    
    $(".color-option ul li")
    .eq(0).css("backgroundColor"," #E41B17 ").end()
    .eq(1).css("backgroundColor"," #5f315c ").end()
    .eq(2).css("backgroundColor"," #0c66a5 ").end()
    .eq(3).css("backgroundColor"," #706636 ");
    
    // 1. Simple mode, it styles document scrollbar:
    $(function () {  
        $("body").niceScroll();
    });
    
    // 2. Instance with object returned:
    var nice = false;
    $(function () {  
        nice = $("body").niceScroll();
    });
    
    // 3. Style a DIV and change cursor color:
    $(function () {  
        $("#thisdiv").niceScroll({cursorcolor:"#00F"});
    });
    
    // 4. DIV with "wrapper", formed by two divs, the first is the vieport, the latter is the content:
    $(function () {
        $("#viewportdiv").niceScroll("#wrapperdiv",{cursorcolor:"#00F"});
    });
    
    // 5. Get nicescroll object:
    var nice = $("#mydiv").getNiceScroll();
    
    // 6. Hide scrollbars:
    $("#mydiv").getNiceScroll().hide();
    
    // 7. Check for scrollbars resize (when content or position have changed):
    $("#mydiv").getNiceScroll().resize();
    
    // 8. Scrolling to a position:
    $("#mydiv").getNiceScroll(0).doScrollLeft(x, duration); // Scroll X Axis
    $("#mydiv").getNiceScroll(0).doScrollTop(y, duration); // Scroll Y Axis    
});



    