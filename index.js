/*global $*/


$(document).ready(function(){
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
});