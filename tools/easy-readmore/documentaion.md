# USAGE

**easyReadmore** is included in *jqueryEasyTools* pack, but can use it also in "stand-alone" mode installing only the files inside the directory:
```
tool/easy-readmore/dist/
```
### Installation

```html
<script src="jquery.min.js"></script>
<script src="[path-to]/easy-readmore/dist/js/easyReadmore.pack.min.js"></script>
```

### Markup
```html
<div class="readmore-wrapper">
    <h3>ReadMore Example</h3>
    <p>
        Visible Content
        <a href="#" class="readmore open">Read More</a>
    </p>
    <p class="readmore-hidden">
        Hidden content
        <a href="#" class="readmore close">Close</a>
    </p>
</div>
```
###Javascript
```javascript
$(document).on('ready', function() {
    easyReadmore();
});
```
## Parameters

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| **btnClass** | [STRING] | ".readmore" | *The readmore button class* |
| **hideOpenBtn** | [BOOL] | true | *If setted on true the readmore button will be hidden after click* |
| **ease** | [STRING] | "swing" | *Animation easing.<br>If want use a custom ease you need to include jquery.easing.x.x.js plugin.<br>jQuery easing is included in easyReadmore.pack.min.js* |
| **speed** | [NUMBER] | 300 | *Animation speed in milliseconds* |