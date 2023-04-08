/*
  NAB Innovation Center Vietnam
  Program: WeCamp batch 2
  Assessment: Assignment 1
  Authors: Thanh Huyen
  Created  date: 25/03/2023 (e.g. 31/07/2023)
  Last modified: 25/03/2023 (e.g. 05/08/2023)
  Acknowledgement: https://www.w3schools.com/howto/howto_html_include.asp
*/
function addHTML() {
    var el, i, domEl, fileName, xmlHttp;
    
    /*Iterate all DOM*/
    el = document.getElementsByTagName("*");
    for (i = 0; i < el.length; i++) {
       domEl = el[i];
       
       /*find the element having w3-include-html attribute*/
       fileName = domEl.getAttribute("w3-include-html");
       if (fileName) {
          
          /*http request with attribute value as file name*/
          xmlHttp = new XMLHttpRequest();
          xmlHttp.onreadystatechange = function() {
             if (this.readyState == 4) {
                if (this.status == 200) {
                   domEl.innerHTML = this.responseText;
                }
                if (this.status == 404) {
                   domEl.innerHTML = "Page not found.";
                }
                
                /* Remove the attribute and invoke the function again*/
                domEl.removeAttribute("w3-include-html");
                addHTML();
             }
          }
          xmlHttp.open("GET", fileName, true);
          xmlHttp.send();
          
          /*function ends*/
          return;
       }
    }
}
addHTML(); 