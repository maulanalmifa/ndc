$(document).ready(function(){
    $flag=1;
    $("#myName").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
                $('#submit').attr('disabled',true);
                 $("#error_name").text("* Your account must be registered to NDC General Committee");
        }
        else
        {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_name").text("");

        }
   });
    $("#dob").focusout(function(){
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
                $('#submit').attr('disabled',true);
                $("#error_dob").text("* You have to enter your Date of Birth!");
        }
        else
        {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_dob").text("");
        }
   });
    $("#gender").focusout(function(){
        if($(this).val==1){
            $(this).css("border-color", "#FF0000");
                $('#submit').attr('disabled',true);
                 $("#error_gender").text("* Please select city to held an event");
        }
        else
        {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_gender").text("");
    
        }
    });

   $("#title").focusout(function(){
    if($(this).val()==''){
        $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
             $("#error_title").text("* Please anter your event title");
    }
    else
    {
        $(this).css("border-color", "#2eb82e");
        $('#submit').attr('disabled',false);
        $("#error_name").text("");

    }
});

       $( "#submit" ).click(function() {
           if($("#myName" ).val()=='')
           {
            $("#myName").css("border-color", "#FF0000");
                $('#submit').attr('disabled',true);
                 $("#error_name").text("* Your account must be registered to NDC General Committee");
        }
           if($("#dob" ).val()=='')
           {
            $("#dob").css("border-color", "#FF0000");
                $('#submit').attr('disabled',true);
                 $("#error_dob").text("* You have to enter your Date of Birth!");
        }
        });
});
