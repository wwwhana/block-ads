// ==UserScript==
// @name block coupang article ad
// @name:ko 쿠팡 납치글 무효화
// @description:ko 웹 페이지에서 쿠팡 페이지를 봐야만 컨텐츠를 표시하는 사이트를 무효화합니다.
// @version 0.0.1
// @match https://*/*
// @match https://ggul.zal.kr/*

// @run-at document-end
// @downloadURL  https://gist.github.com/wwwhana/39de5cc2a9ea2b4169e9e8c79ab717c8
// ==/UserScript==

(function(){
    "use strict";
    const v = document.getElementById("bo_v_atc") || document.getElementById("inner-content-body") ;
    v && (() => { v.classList.remove("omit_wrap"); 
    v.classList.remove("hided");
    v.style.maxHeight = "unset" })();
})();
