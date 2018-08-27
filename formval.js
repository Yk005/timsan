 function check_Alpha(letters){
    var regexn = /^[a-zA-Z]+$/;
    var regexp = /^\d{11}$/;
    var regexe = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
    var regexps = /^([\w\-@#\$%\^\*!\.]{6,}$/
    //form validation for surname, firstname, phone, email, password and select(level and institution)
      if(regexn.test(letters.sname.value) == false){
          alert("Name must be in alphabets only");
          letters.sname.focus();
          return false;
        }
      if(regexn.test(letters.fname.value) == false){
          alert("Name must be in alphabets only");
          letters.fname.focus();
          return false;
        }

      if(regexp.test(letters.phone.value) == false){
          alert("phone must be numbers");
          letters.phone.focus();
          return false;
        }

      if(regexe.test(letters.email.value) == false){
          alert("incorrect email address");
          letters.email.focus();
          return false;
        }
      if(regexps.test(letters.pass.value) == false){
          alert("Password must contain number and special characters!");
          letters.pass.focus();
          return false;
        }
    

    return true;
  }
