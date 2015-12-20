#easyHeightEqualizer
Equalize the height of each element of a group selected by class name.

## USAGE

### Installation

```html
<script src="jquery.min.js"></script>
<script src="[path-to]/easy-readmore/dist/js/easyHeightEqualizer.min.js"></script>
```

### Markup
```html
<div class="exampleItem">
    <p>Lorem ipsum dolor si amet, lorem ipsum dolor si amet, lorem ipsum dolor si amet, lorem ipsum dolor si amet, lorem ipsum dolor si amet.</p>
</div>
<div class="exampleItem">
    <p>Lorem ipsum dolor si amet</p>
</div>
<div class="exampleItem">
    <p>Lorem ipsum dolor si amet, lorem ipsum dolor si amet, lorem ipsum dolor si amet.</p>
</div>
```
###Javascript
```javascript
$(document).on('ready', function() {
    easyHeightEqualizer('.exampleItem');
});  
```
