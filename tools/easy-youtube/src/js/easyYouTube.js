/*! 
    ==============================================================
    Easy YouTube - version 1.0.0
    http://factory.brainleaf.eu/tools/jquery/easy-youtube
    ==============================================================
*/

function easyYouTube(options) {
    var defaults = {
        element: "",
        videoId: "",
        responsive: true,
        ratio: "16/9",
        width: "560",
        height: "315",
        noCookie: true,
        fullscreen: true,
        autoplay: false,
        controls: true,
        related: true,
        showinfo: true
    },
    settings = $.extend({}, defaults, options),
    element = settings.element,
    ratio = settings.ratio,
    domain = (settings.noCookie === true) ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/",
    autoplay = (settings.autoplay === true) ? "&autoplay=1" : "&autoplay=0",
    controls = (settings.controls === true) ? "&controls=1" : "&controls=0",
    related = (settings.related === true) ? "&rel=1" : "&rel=0",
    showinfo = (settings.showinfo === true) ? "&showinfo=1" : "&showinfo=0",
    fullscreen = (settings.fullscreen === true) ? " allowfullscreen" : "",
    url = domain + settings.videoId + "?" + autoplay + controls + related + showinfo,
    markup = '<iframe src="'+ url +'" frameborder="0"'+ fullscreen +' style="opacity:0"></iframe>';
    
    if(element === "") {
        console.log('easyYouTube.js --> Error --> No element selected');
        return;
    }
    
    $(element).html(markup);
    
    if (settings.responsive === true) {
        
        var playerSizes = playerSizes();
        playerResize (playerSizes.playerW,playerSizes.playerH);
        $(element).find('iframe').css({'opacity': 1});

    } else {
        playerResize (settings.width,settings.height);
        $(element).find('iframe').css({'opacity': 1});
    }
    
    function playerSizes () {
        var playerRatio = ratio.split('/');
            playerRatio[0] = parseInt(playerRatio[0]);
            playerRatio[1] = parseInt(playerRatio[1]);
        var playerSizes = {
                playerW: $(element).innerWidth(),
                playerH: $(element).innerWidth()*playerRatio[1]/playerRatio[0]
            };
        return playerSizes;
    }
    
    function playerResize (playerW,playerH) {
        $(element).find('iframe').attr('width',playerW);
        $(element).find('iframe').attr('height',playerH);
    }
    
}

