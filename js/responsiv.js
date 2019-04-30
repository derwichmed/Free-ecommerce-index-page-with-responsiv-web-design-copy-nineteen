$(function (){
   $('body > header .nav_one .mobile_navs img').click(function (){
       $('body > header .nav_one .nav_bar').show('slow');
   });
   
   $('body > header .nav_one .nav_bar .mobile_header img').click(function (){
       $('body > header .nav_one .nav_bar').hide('slow');
   });
   
   $('body > header .nav_two > div > div:nth-child(1) .cateroeie_icon').click(function (){
       $('body > header .nav_two > div > div:nth-child(1) .categorie_menu').show('slow');
   });
   
   $('body > header .nav_two > div > div:nth-child(1) .categorie_menu .header_mobile img').click(function (){
       $('body > header .nav_two > div > div:nth-child(1) .categorie_menu').hide('slow');
   });
});