#USAGE
This tool provides a *smooth scroll* to each elements inside the page. This tool provides also a *"back top"* button to scroll page to the top.

## Install and initialize
```html
<script src="jquery.min.js"></script>
<script src="easySmoothScroll.min.js"></script>
<script>
    $(document).ready(function(){
        easySmoothScroll()
    });
</script>
```

## Simple usage
You can use *easySmoothScroll* simply adding **".scroll"** class to a link element and place the id of your target elements as a value of the link *href* attribute.
```html
<a href="#targetId" class="scroll">SmootScroll Link</a>
[...]
<section id="targetId">...</div>
```

### The "BackTop" button
To generate a "backTop" (page scroll to top) button simply add a link with the attribute *href="#"* and assign a class named **".back-top"**. 
```html
<a href="#" class="back-top">Back to Top Link</a>
```

## Customize
It's possible to customize **speed**, **offset** and **class names** by function options.

```javascript
$(document).ready(function(){
    easySmoothScroll({
        element: '.scroll',
        speed: 500,
        offset: 0,
        backTopElement: '.back-top',
    });
});
```

### Customizing with data attributes

You can overwrite your global options *speed* and *offset* on each link simply using data attributes: **data-speed=""** and **data-offset=""**
```html
<a href="#targetId" class="scroll" data-speed="500" data-offset="100">SmootScroll Link</a>
``` 