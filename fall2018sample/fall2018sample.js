/* Don't use <script> tags in a linked js file! */

/*AJAX */
/*let content equal the defaul. content is the variable that is the identifier you are loading */
/* #content selecets the ID "content" on the html file */
/* #choosecontent refers to the "content menu" */
/* 3 thigns you need to grab from the html; ID for both (use # to access it) */


let selection = ("content1.txt")   /*making the selction to be this text file on default.  */

/*happens on load, */
        $("#choose-content").val(selection); /* gets the value of the dropdown and loads your name to that dropdown menu eleemnt by default. CHOOSECONTENT IS THE OPTION ON THE DROPDOWN */
        $("#content").load(selection);  /* changes article HEADER to content found in text file. CONTENT DISPLAYS THE TEXT FROM THE TEXT FILE AS THE HEADER IN THE PAGE */

        $("#choose-content").change(function() {
            selection = $(this).val();  /* reassigns the content value to the current and new dropdown value  */
            $("#content").load(selection); /*loads content in */
        });




 // ajax EXTERNAL FILE When you want to receive display or load and happens in real time
//  jquuery is the p5 to javascript
/*mobile */


$(".menubox").click(function() {
    $(this).find(".submenu").slideToggle(); 
});

// wehenever you click on the id menubox, you will execute this function, whichever menu box you click, it will either hide or show the submenu list item. find is a method that find the value of that children. toggle is to hide/

// flexbox is used for one HTMLTableRowElement, but grids are used for more sections

/*if a menu box is clicked, then do this function in here  and find the next closet element(submenu) element of that */

/*change and click in $("#choose-content").change/CLICK(function(), click will be the trigger event*/