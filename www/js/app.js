'use strict';

(function(global){
    
    var app = { };
    
    function bootStrap(){
        console.log('bootstrap');
        app.kMobile = new kendo.mobile.Application(document.body,{
            tranisition:'slide',
            skin:'nova',
            initial:'views/home.html'
        })
    }
    
    document.addEventListener('deviceready',function(){
        bootStrap();
    },false)
    
    window.app = app;
    
})(window);