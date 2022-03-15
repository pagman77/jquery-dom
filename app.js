"use strict";


//1
const $imgArticle = $("article>img");
$imgArticle.addClass("image-center");

//2
const $pArticle = $("article>p:last-child");
$pArticle.addClass("hidden");

//3
const $title = $("#title");
$title.css(
        "font-size",
        `${randomNumber()}px`
)
/**Choose random number between 1-100 */
function randomNumber(){
  return Math.floor(Math.random() * (100 - 1) + 1);
}

//4

const $wheresMyList = $("aside>ol");
const $listElement = $("<li>")
const listMessage = "I love puppies!"

$listElement.text(listMessage);
$wheresMyList.append($listElement);

//5

const $aside = $("aside");
const message = "We sincerly apoligize for the existance of the previous list.";
$aside.html(message);

//6

const $body = $("body");

const jsList = document.querySelectorAll(".form-control")
const $JQueryList = $(".form-control");

$JQueryList.
on("change", function(){
  console.log("hi")

  let $red = $($JQueryList).eq(0).val();
  let $green = $($JQueryList).eq(1).val();
  let $blue = $($JQueryList).eq(2).val();

  $body.css("background-color", `rgb(${$red}, ${$green}, ${$blue}`);
})

//7

$imgArticle.on(
  "click", function (){
    $imgArticle.addClass("hidden");
  }
)