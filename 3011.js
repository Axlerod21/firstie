const data =  {
    name: "",
    email: "",
    pass: "",
    vPass: ""
};

function getInfo() {
 let info = data;
 let list = document.getElementsByClassName("inputstyle");
 
 info.name = document.getElementById("name");
 info.email = document.getElementById("email");
 info.pass = document.getElementById("pwd");
 info.vPass = document.getElementById("vpwd");

 console.log(data.name.value);
 console.log(data.email.value);
 console.log(data.pass.value);
 console.log(data.vPass.value);

/*for(let i = 0; i < list.length; i++) {
    data[list[i].id] = list[i].value;
}*/

 return info;
}

function valPass() {
    let first = document.getElementById("pwd"), second = document.getElementById("vpwd");
    if (first != second) {

    }
}

function showPwd() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function showVPwd() {
    var x = document.getElementById("vpwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  var pwd = document.getElementById("pwd");
  var myInput = document.getElementById("vpwd");

  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  myInput.onkeyup = function() {
    if(myInput.value == pwd.value) {
        msgText.classList.remove("invalid");
        msgText.classList.add("valid");
      } else {
        msgText.classList.remove("valid");
        msgText.classList.add("invalid");
      }
  }
