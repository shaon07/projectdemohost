function ctSetCookie(t,o,e){var n;("string"==typeof t&&"string"==typeof o||"number"==typeof o)&&(n="ct_pointer_data"===t,t=[[t,o,e]]),"none"!==ctPublicFunctions.data__cookies_type&&("native"===ctPublicFunctions.data__cookies_type?t.forEach(function(t,o,e){var n=void 0!==t[2]?"expires="+n+"; ":"",c="https:"===location.protocol?"; secure":"";document.cookie=t[0]+"="+encodeURIComponent(t[1])+"; "+n+"path=/; samesite=lax"+c}):"alternative"!==ctPublicFunctions.data__cookies_type||n||("rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("alt_sessions",{method:"POST",data:{cookies:t}}):"admin_ajax"===ctPublicFunctions.data__ajax_type&&apbct_public_sendAJAX({action:"apbct_alt_session__save__AJAX",cookies:t},{notJson:1})))}function ctDeleteCookie(t){var o;"none"!==ctPublicFunctions.data__cookies_type&&("native"===ctPublicFunctions.data__cookies_type?(o="https:"===location.protocol?"; secure":"",document.cookie=t+'=""; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; samesite=lax'+o):ctPublicFunctions.data__cookies_type)}function apbct_public_sendAJAX(o,e,n){var c=e.callback||null,a=e.callback_context||null,l=e.callback_params||null,t=e.async||!0,s=e.notJson||null,i=e.timeout||15e3,n=n||null,r=e.button||null,u=e.spinner||null,p=e.progressbar||null,_=e.silent||null,d=e.no_nonce||null;"string"==typeof o?o=(o=d?o:o+"&_ajax_nonce="+ctPublicFunctions._ajax_nonce)+"&no_cache="+Math.random():(d||(o._ajax_nonce=ctPublicFunctions._ajax_nonce),o.no_cache=Math.random()),r&&(r.setAttribute("disabled","disabled"),r.style.cursor="not-allowed"),u&&jQuery(u).css("display","inline"),jQuery.ajax({type:"POST",url:ctPublicFunctions._ajax_url,data:o,async:t,success:function(t){r&&(r.removeAttribute("disabled"),r.style.cursor="pointer"),u&&jQuery(u).css("display","none"),(t=s?t:JSON.parse(t)).error?(setTimeout(function(){p&&p.fadeOut("slow")},1e3),console.log("Error happens: "+(t.error||"Unkown"))):c&&(l?c.apply(a,l.concat(t,o,e,n)):c(t,o,e,n))},error:function(t,o,e){r&&(r.removeAttribute("disabled"),r.style.cursor="pointer"),u&&jQuery(u).css("display","none"),e&&!_&&(console.log("APBCT_AJAX_ERROR"),console.log(t),console.log(o),console.log("Anti-spam by Cleantalk plugin error: "+e+"Please, contact Cleantalk tech support https://wordpress.org/support/plugin/cleantalk-spam-protect/"))},timeout:i})}function apbct_public_sendREST(o,e){var n=e.callback||null,t=e.data||[],c=e.method||"POST";jQuery.ajax({type:c,url:ctPublicFunctions._rest_url+"cleantalk-antispam/v1/"+o,data:t,beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",ctPublicFunctions._rest_nonce)},success:function(t){t.error?console.log("Error happens: "+(t.error||"Unknown")):n&&n(t,o,e,null)},error:function(t,o,e){e&&(console.log("APBCT_REST_ERROR"),console.log(t),console.log(o),console.log("Anti-spam by Cleantalk plugin REST API error: "+e+" Please, contact Cleantalk tech support https://wordpress.org/support/plugin/cleantalk-spam-protect/"))}})}
//# sourceMappingURL=apbct-public--functions.min.js.map
