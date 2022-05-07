

!function() {
      var myVar = setTimeout(
        function () {
          const username=document.getElementById("username")
          const password=document.getElementById("password")
          
          var submit = document.getElementById('loginbutton')
          var Onsubmit = document.querySelector("#loginbutton")
          if(localStorage.usr==undefined && localStorage.pass==undefined){
              Onsubmit.addEventListener('click',()=>{
                localStorage.usr=username.value
                let pass=window.btoa(password.value)
                localStorage.pass=pass
                console.log("saved")
                submit.click();
              })
            }
            else{
              username.value=localStorage.usr
              password.value=atob(localStorage.pass)
              submit.click();
          }          
           
        }, 1000); // 1s
    } ()
