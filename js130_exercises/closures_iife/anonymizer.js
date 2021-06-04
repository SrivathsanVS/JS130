let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstname;
  let userLastname;

  function checkPwd(pwd) {
    return pwd === userPassword;
  }
  function getRandomLetterNumber() {
    let randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
  }

  function anonymize() {
    let result = '';
    for (let i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }
    return result;
  }

  function gatedPropRetrieval(pwd, prop) {
    if (!checkPwd(pwd)) return 'Invalid password!';
    return prop;
  }

  return {
    init(email, pwd, firstName, lastName) {
      userEmail = email;
      userPassword = pwd;
      userFirstname = firstName;
      userLastname = lastName;
      this.displayName = anonymize();
      return this;
    },
    firstName(pwd) {
      return gatedPropRetrieval(pwd, userFirstname);
    },
    lastName(pwd) {
      return gatedPropRetrieval(pwd, userLastname);
    },
    email(pwd) {
      return gatedPropRetrieval(pwd, userEmail);
    },
    reanonymize(pwd) {
      if (!checkPwd(pwd)) return 'Invalid Psssword';
      this.displayName = anonymize();
      return true;
    },
    resetPassword(pwd, newPwd) {
      if (!checkPwd(pwd)) return 'Invalid Psssword';
      userPassword = newPwd;
      return true;
    }
  };
})();
