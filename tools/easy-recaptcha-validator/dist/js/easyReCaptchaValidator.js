/*! 
 *  easyReCaptchaValidator | A simple way to include and validate Google ReCaptcha 
 *  Version 1.0.1 - Date: 13/11/2015 
 *  HomePage: https://github.com/Gix075/jqueryEasyTools/tree/master/tools/easy-recaptcha-validator 
*/ 


/*! 
    Include this on head:
    <script src="https://www.google.com/recaptcha/api.js?onload=reCaptchaValidator&render=explicit" async defer></script> 
*/


function easyReCaptchaValidator(params) {
    this.params = params,
    this.getCaptcha = function (elementID,theme) {
        var useTheme = (!theme || theme == "")? this.params.theme : theme;
        grecaptcha.render(elementID, {
            'sitekey' : this.params.publicKey, 
            'theme' : useTheme
        });  
    },
    this.validateCaptcha = function(elementID) {
        var reCaptchaVal = {
            response: $('#'+elementID).find('.g-recaptcha-response').val()
        }
        if(reCaptchaVal.response != "") {
            var plugin = this;
            $.ajax({
                url: this.params.phpValidator,
                type: 'POST',
                data: reCaptchaVal,
                dataType: 'json',
                success: function(data) {
                    if(data.success === true) {
                        if (plugin.params.debug === true) console.log('reCaptchaValidator: Validation Success!'); // DEBUG Node
                        plugin.params.callbacks.success();
                    }else{
                        if (plugin.params.debug === true) console.log('reCaptchaValidator: Validation Fail!'); // DEBUG Node
                        plugin.params.callbacks.error();
                    }
                },
                error: function() {
                    if (plugin.params.debug === true) console.log('reCaptchaValidator: AjaxError!'); // DEBUG Node
                    plugin.params.callbacks.error();
                }
            });//end ajax
        }else{
            if (this.params.debug === true) console.log('reCaptchaValidator: No reCaptcha Data!'); // DEBUG Node
            this.params.callbacks.error();
        }
    }
}