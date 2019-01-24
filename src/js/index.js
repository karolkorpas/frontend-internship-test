/* Here goes your JS code */

           
function showpopub()
{
    this.style.display = "none";
    pop.style.display = "block";
}
function disappearpopub()
{
    showpopipform.style.display = "block";
    pop.style.display = "none";
}



var showpopipform = document.getElementById("show-popup-form");
var pop = document.getElementById("pop");
var exit = document.getElementById("exit");
var thanks = document.getElementById("thanks");


showpopipform.onclick = showpopub;
exit.onclick = disappearpopub;

////check password

var confirm = document.getElementById("form").confirm;
          
confirm.onclick = function(e)
{
    e.preventDefault();
    
    //document.getElementById("form").submit();
    
    
    var email = document.getElementById("form").email;
    var conditionMail = /(?=.*[@])(?=.*[.])/;
    
    var password = document.getElementById("password"); 
    var conditionPassword = /.{1,}/;
    
    var checkbox_1 = document.getElementById("checkbox_1");
    
    
    //mail
   if(conditionMail.test(email.value))
       confirm_mail = true;
   else
   {
       confirm_mail = false;
       email.placeholder = "Invalid format e-mail";
   }
   
   //password
   if(conditionPassword.test(password.value))
       confirm_password = true;
   else
   {
       confirm_password = false;
       password.placeholder = "Enter the password";
   }
   
   //checkbox
   if(checkbox_1.checked)
       confirm_checkbox = true;
   else
       confirm_checkbox = false;
    
   //submit
    
    if(confirm_mail === true && confirm_password === true && confirm_checkbox === true)
    {
            setTimeout(function()
            {
                showpopipform.style.display = "none";
                pop.style.display = "none";
                thanks.style.display = "block";
                
            }, 3000);
             setTimeout(function()
            {
                document.getElementById("form").submit();
            }, 6000);
            
    }
    
    
    
};
