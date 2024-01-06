// ==UserScript==
// @name block coupang article ad
// @name:ko 쿠팡 납치글 무효화
// @description:ko 웹 페이지에서 쿠팡 페이지를 봐야만 컨텐츠를 표시하는 사이트를 무효화합니다.
// @version 0.0.2
// @match https://*/*
// @match https://ggul.zal.kr/*
// @match https://humor-pangi.reviewtoday.net/*

// @run-at document-end
// @run-at document-idle

// @downloadURL  https://raw.githubusercontent.com/wwwhana/block-ads/main/block-coupang.js
// @updateURL https://raw.githubusercontent.com/wwwhana/block-ads/main/block-coupang.js
// ==/UserScript==

(function(){
    "use strict";
    let v = document.getElementById("bo_v_atc") || document.getElementById("inner-content-body") ;
    v && (() => { v.classList.remove("omit_wrap"); 
    v.classList.remove("hided");
    v.style.maxHeight = "unset" })();

	let vx = document.getElementsByClassName("post-contents") && document.getElementsByClassName("post-contents")[0];
	vx && vx.children  && vx.children[0] && vx.children[0] && (() => {
	console.log("Z");
	vx.children[0].style.height = "unset" ;
	vx.children[0].style.overflow = "unset";
	})(); 
})();
