//Script Requires Jquery to run

<script>
                                  $(window).on('keydown',function(event)
    {
    if(event.keyCode==123)
    {
        alert('Entered F12');
        return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==74)
    {
        alert('Lol You Are Kid')
        return false;  //Prevent from ctrl+shift+i
    }
    else if(event.ctrlKey && event.keyCode==74)
    {
        alert('Lol You Are Kid')
        return false;  //Prevent from ctrl+shift+i
    }
});
$(document).on("contextmenu",function(e)
{
alert('Lol You Are really Kid')
e.preventDefault();
});
                            </script>
                            
                            
   <--- Creater Codeslide Market --->    <--- Creater Codeslide Market --->    <--- Creater Codeslide Market --->     <--- Creater Codeslide Market --->     <--- Creater Codeslide Market --->
