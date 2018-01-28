#easyFormValidator 2.1.0
Simple jQuery tool for forms validation

```javascript
$(document).ready(function() {
    var globOpts = {
        bootstrap: true,
        mail: {
            format: true,
            confirm: true
        },
        password: {
            format: true,
            formatRegEx: /\b([A-Z0-9])([a-z0-9]+)?\b/gm,
            confirm: true
        },
		telephone: {
			numbersOnly: false
		},
        showErrors: true
    }

    var fv = new formValidator(globOpts)
    var validation = fv.validate('#form', '#submit', {
        success: function() {
            alert('validation success!')
        },
        fail: function() {
            alert('validation fail!')
        }
    });

});
```

[**easyGmap DOCUMENTATION WIKI**](https://github.com/Gix075/jqueryEasyTools/wiki/TOOL---easyFormValidator)
