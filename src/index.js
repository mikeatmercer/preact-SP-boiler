require('es6-object-assign').polyfill();
require('nodelist-foreach-polyfill');


import App from "./App";
import habitat from "preact-habitat";
import $ from "jquery";





let _habitat = habitat(App);

(function () {

 
  if(document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value == 1) {
    return false; 
  }
  


  if(PRODUCTION_BUILD) {
    $("head").append(`<link rel="stylesheet" text="text/css" href="${SITE_DOMAIN}/Style%20Library/site_assets/style.css"/>`)
  
  }
  
  $(document).ready(function(){
   
    _habitat.render({
      selector: '#preact-widget-container',
      clean: true
    })
  })

}());

//js-webpart-titleCell
//Welcome to Brighter - topsection