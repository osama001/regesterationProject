var signUpBtn=document.getElementById('goTsignup')
var signinBtn=document.getElementById('goTsignin')
var displayingUser=document.getElementById('displayingUser')
var displaying=document.getElementById('displaying')
var signInSubmit=document.getElementById('signin')
var signOut=document.getElementById('signOut')
var signupSubmit=document.getElementById('signupSubmit')
var Btn=document.getElementById('h1')
var signupForm = document.querySelector('.signupForm')
var signinForm = document.querySelector('.signinForm')
var logEmail = document.querySelector('.logEmail')
var logPass = document.querySelector('.logPass')

var Upname=document.getElementById('Upname')
var UpEmail=document.getElementById('UpEmail')
var Uppassword=document.getElementById('Uppassword')
   //// displayin sign up form 
   function displayingContainer(name , hide){
           name.style.display='block'
           hide.style.display='none'
   }
signUpBtn.addEventListener('click', function(){
  
  displayingContainer(signupForm,signinForm)
 
})


///// displaying sign in form 


signinBtn.addEventListener('click', function(){
        displayingContainer(signinForm,signupForm)
      
     })
    

     let users= [ ]
     if(localStorage.getItem('users') !=null)
{
    users= JSON.parse( localStorage.getItem('users'))
    console.log(users) 
   
}





    
     let user;

     signupSubmit.addEventListener('click',function(){
             for(i=0 ; i< users.length ;i++){
        
                     if(Upname.value == users[i].name ){
                              return   alert ('name is already used  refresh and put another name')
                        }
                      
                }
             for(i=0 ; i< users.length ;i++){
        
                 if(UpEmail.value == users[i].Email ){
                        return  alert ('email is already used ')
                        }
                      
                }




                     user = {
                        name:Upname.value,
                        Email:UpEmail.value,
                        pass:Uppassword.value
                     }
                     validation(user)
                        signinForm.style.display='none'
                        signupForm.style.display='none'  
                     users.push(user)
                     localStorage.setItem('users',JSON.stringify(users))
                     displaying.style.display='flex'
                     displayingUser.innerHTML=` welcome ${ user.name}`
                   
                    
                   
     }) 

     function validation(data){
             
                     if(data.name.length < 2 ){
                           alert('more than 2 letters to valid name')
                     }
        if(!data.Email.charAt((data.Email.indexOf('@')))==true ){
              alert('please type a valid email ')  
        }
        if(data.pass.length < 6){
              alert('password must be 6 characters or more')
        }
        let hasUpperCase = false;
        for(i=0; i<data.pass.length;i++) {
                console.log(data.pass[i] == data.pass[i].toUpperCase())
                if(data.pass[i] == data.pass[i].toUpperCase()) hasUpperCase = true
        }

        if (!hasUpperCase ) {
                console.log(data.pass)
                alert('please enter uppercase leter in password')
        }
     }


     signInSubmit.addEventListener('click',function(){
        users=  JSON.parse(localStorage.getItem('users'))
         console.log(users)
        login(logEmail.value,logPass.value)
     })


      

     function login(email,pass){
         users=  JSON.parse(localStorage.getItem('users'))
         console.log(users)
         if(users == null ){
                alert('there no users until now  ')
         }
         else {
                 let checked = false
         for(i=0 ; i<users.length;i++){
              
           
                if(email == users[i].Email && pass == users[i].pass)
                {
                        displaying.style.display='flex'
                        displayingUser.innerHTML=` welcome ${  users[i].name}`
                        signinForm.style.display='none'
                        signupForm.style.display='none' 
                        checked= true 
                        break;
                }
        }
        if (! checked ){
           return    alert('account not valid please sign up first ')
        }
}
     }

     signOut.addEventListener('click',function(){
        displaying.style.display='none'
        signinForm.style.display='block'
     })