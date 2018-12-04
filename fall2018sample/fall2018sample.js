/* Don't use <script> tags in a linked js file! */
let content = ("content1.txt")   /* makes content value be default equal to this text file */
        $("#choose-content").val(content); /* gets the value of the dropdown and loads your name to that dropdown menu eleemnt by default */
        $("#content").load(content);  /* changes article HEADER to content found in text file */

        $("#choose-content").change(function() {
            content = $(this).val();  /* reassigns the content value to the new dropdown value  */
            $("#content").load(content); 
        });




 // ajax EXTERNAL FILE When you want to receive display or load and happens in real time
//  jquuery is the p5 to javascript


$(".menubox").click(function() {
    $(this).find(".submenu").toggle(); 
});

// wehenever you click on the id menubox, you will execute this function, whichever menu box you click, it will either hide or show the submenu list item. find is a method that find the value of that children. toggle is to hide/show