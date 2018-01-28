# USAGE

**easyYouTube** is included in jqueryEasyTools pack, but can use it also in "stand-alone" mode installing only the files inside the directory:

`
tools/easy-youtube/dist/
`

## Installation
```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/easyYouTube.js"></script>
```

## Markup
```html
<div id="youTubeVideo"></div>
```

## Javascript
```javascript
$(document).on('ready', function() {
    easyYouTube({
        element: "#youTubeVideo",
        videoId: "V_YlZ1JdcVk"
    });
});
```

### Parameters

| Option | Type | Allowed Values | Description |
| --- | --- | --- | --- |
| element | STRING | Any string | The DOM element where video iframe will be placed. This parameter is mandatory! Without customize this parameter, function will not work! |
| videoId | STRING | Any string | The YouTube video id. This parameter is mandatory! Without customize this parameter, function will not work! |
| responsive | BOOL | true/false | **Default:** true . If switched on **true** this parameter launchs a video player javascript resizing. The player iframe will be resized at the same width of container element. Player height will be calculated according the ratio value placed on _ratio_ parameter. |
| ratio | STRING | any valid ratio as "16/9" | **Default:** "16/9" . This parameter controls the video ratio for responsive player. This parameter works only if "responsive" option is setted on "true". |
| width | STRING / NUMBER | any valid string or number | **Default:** "560" . This parameter controls the video player width. Using this parameters means that the width will be alwais the same. This parameter works only if "responsive" option is setted on "false". |
| height | STRING / NUMBER | any valid string or number | **Default:** "315" . This parameter controls the video player height. Using this parameters means that the height will be alwais the same. This parameter works only if "responsive" option is setted on "false". |
| noCookie | BOOL | true/false | **Default:** true . This parameter controls source domain. It changes the domain youtube.com to **youtube-nocookie.com**. |
| fullscreen | BOOL | true/false | **Default:** true . This parameter allows or not the full screen view. |
| autoplay | BOOL | true/false | **Default:** false . This parameter if value is "true" allows the video autoplay. |
| controls | BOOL | true/false | **Default:** true . This parameter, if value is "true", shows the video player controls. |
| related | BOOL | true/false | **Default:** true . This parameter, if value is "true", shows related video. |
| showinfo | BOOL | true/false | **Default:** true . This parameter, if value is "true", shows info about current video. |

See a live example at [http://factory.brainleaf.eu/tools/jquery/easy-youtube/](http://factory.brainleaf.eu/tools/jquery/easy-youtube/)