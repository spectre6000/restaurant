$(function(){

  // bugger = function (text) {
  //   console.log(text);
  // };

  var tabHolder = '#tab1'
  
  contentPlacer = function(tab) {
    if (tab === "#tab1") {
      $("#page-content").replaceWith("<div style='width: 100%; padding: 50px;'id='page-content'>Welcome to whatever this restaurant is called!</div>");
    } 
    else if (tab === "#tab2") {
      $("#page-content").replaceWith("<div style='width: 100%; padding: 50px;' id='page-content'>food varieties</div>");
    } 
    else if (tab === "#tab3") {
      $("#page-content").replaceWith("<div style='width: 100%; padding: 50px;'id='page-content'>your mom's house</div>");
    };
  };

  makeactive = function (tab) {
    $( tabHolder ).css("background-color", "#243132");
    tabHolder = "#tab" + tab;
    $( tabHolder ).css("background-color", "red");
    contentPlacer(tabHolder);
  };

  $( "#content" ).append( "<img id='banner' src='images/bigPic.jpg'>" )
    $("#banner").css({"width": "100%", "height": "200", "position": "absolute", "top": "0", "left": "0", "z-index": "-10"});
  $( "#content" ).append( "<h1 id='page_title'>This is a restaurant!</h1>" )
    $("#page_title").css({"font-size": "8em", "color": "#ddd", "margin": ".2em 1.5em" });
  $( "#content" ).append( "<ul><li onClick='makeactive(1)' id='tab1' class='' >home</li><li onClick='makeactive(2)' id='tab2' class='' >menu</li><li onClick='makeactive(3)' id='tab3' class='' >location</li></ul>" )
    $("ul").css({"width": "100%", "height": "40", "list-style": "none", "padding": "0"});
      
      $("li").css({"background-color": "#243132", "color": "#ddd", "width": "33.333%", "height": "30", "float": "left", "text-align": "center", "padding-top": ".5em" });
      $( tabHolder ).css({"background-color": "red"});
      $("li").hover(function() {
        $(this).css('cursor','pointer');
        }, function() {
            $(this).css('cursor','auto');
        });
  $( "#content" ).append( "<div id='page-content'>Welcome to whatever this restaurant is called!</div>" )
    $("#page-content").css({"width": "100%", "padding": "50px"});

      
});      