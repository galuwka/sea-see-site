/*global $*/


/*$(document).ready(function(){
TriggerClick = 0;

$("#img1").click(function(){
 if(TriggerClick==0){
     TriggerClick=1;
     $("#img1").animate({width:'30%'}, 3000);
 }else{
     TriggerClick=0;
     $("#img1").animate({width:'80%'}, 3000);
 };
 });
});
$(document).ready(function(){
TriggerClick = 0;

$("#img2").click(function(){
 if(TriggerClick==0){
     TriggerClick=1;
     $("#img2").animate({width:'30%'}, 3000);
 }else{
     TriggerClick=0;
     $("#img2").animate({width:'80%'}, 3000);
 };
 });
});
$(document).ready(function(){
TriggerClick = 0;

$("#img3").click(function(){
 if(TriggerClick==0){
     TriggerClick=1;
     $("#img3").animate({width:'30%'}, 3000);
 }else{
     TriggerClick=0;
     $("#img3").animate({width:'80%'}, 3000);
 };
 });
});*/
// Stop carousel

$('.carousel').carousel({
  interval: false
});
$('a[href^="#"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 2000, 'swing', function() {
        window.location.hash = target;
    });
});

