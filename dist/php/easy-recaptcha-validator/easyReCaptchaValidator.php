<?php

    /* ****************************************************************** */
    /* googleReCaptcha Validator | PHP WebService */
    /* ------------------------------------------ */
    /* Author: Gix075 */
    /* License: MIT */
    /* ****************************************************************** */
    
    /* ============================================== */
    /* Configuration */
    /* ============================================== */

    // Place here your ReCaptcha Secret Key
    $secretKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; 


    /* DO NOT CHANGE CODE BELOW THIS ALERT */
    /* ============================================== */
    $googleServer = "https://www.google.com/recaptcha/api/siteverify"; // do not change this value
    
    // Validation
    $reCaptchaVal = $_REQUEST['response'];
    $reCaptchaOptions = "?secret=".$secretKey."&response=".$reCaptchaVal;
    $url = $googleServer.$reCaptchaOptions;
    
    $response = file_get_contents($url);
    echo $response; 
?>

