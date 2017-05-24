function fetch(varobj)
{
    let x=varobj;
    console.log(x.firstname.value);
    console.log(x.lastname.value);
    console.log(x.pwd.value);
    console.log(x.number.value);
    console.log(x.email.value);
    console.log(x.gender.value);
    console.log(x.place.value);

}
 let varobj=fetch(document.details.elements);// without hardcoding



/*function fetch()
{
    let name1= document.details.elements.firstname.value;
    let name2= document.details.elements.lastname.value;
    let pswd= document.details.elements.pwd.value;
    let mob= document.details.elements.number.value;
    let email= document.details.elements.email.value;
    let gender= document.details.elements.gender.value;
    let dob= document.details.elements.bday.value;
    let cf_pwd = document.details.elements.cpwd.value;
    console.log("first name is "+name1);
    console.log("last name is "+name2);
    console.log("password is "+pswd);
    console.log("Mobile number is "+mob);
    console.log("email-id is "+email);
    console.log("Gender is "+gender);
    console.log("dob is "+dob);
}

function CheckPassword()   

{   
var passw= document.details.elements.pwd.value ; 
var cpassw= document.details.elements.cpwd.value ; 
if(passw!=cpassw)  
{     
alert("password not matching");
return false;
}
else
{
    fetch();
}

}  */
