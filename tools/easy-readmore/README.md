#easyReadmore
Build your collapsing text with a simple system!

## USAGE

### Installation

```html
<script src="jquery.min.js"></script>
<script src="[path-to]/easy-readmore/dist/js/easyReadmore.min.js"></script>
```

### Markup
```html
<div class="readmore-wrapper">
    <h3>ReadMore Example</h3>
    <p>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        <a href="#" class="readmore open">Read More</a>
    </p>
    <p class="readmore-hidden">
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
        Lorem ipsum dolor si amet, Lorem ipsum dolor si amet, Lorem ipsum dolor si amet<br>
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
