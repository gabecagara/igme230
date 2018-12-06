$('.mainmenu').click(function() {
    $(this).find("submenu").slideToggle(); 
});

let selection = ("article0.txt")   /*making the selction to be this text file on default.  */

/*happens on load, */
        $("form").val(selection); /* gets the value of the dropdown and loads your name to that dropdown menu eleemnt by default. CHOOSECONTENT IS THE OPTION ON THE DROPDOWN */
        $("article").load(selection);  /* changes article HEADER to content found in text file. CONTENT DISPLAYS THE TEXT FROM THE TEXT FILE AS THE HEADER IN THE PAGE */

        $('input: radio[name=content]').change(function() {
            selection = $(this).val();  /* reassigns the content value to the current and new dropdown value  */
            $("article").load(selection); /*loads content in */
        });


