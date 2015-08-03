Accounts.ui.config({
  requestPermissions: {},
  passwordSignupFields : "USERNAME_AND_EMAIL",
  forceEmailLowercase: true,
  forceUsernameLowercase: true,
  forcePasswordLowercase: true,
  extraSignupFields: [{
    fieldName: 'firstName',
    fieldLabel: 'First name',
    inputType: 'text',
    visible: true,
    validate: function(value, errorFunction) {
      if (!value) {
        errorFunction("Please enter your first name");
        return false;
      } else {
        return true;
      }
    }
  }, {
    fieldName: 'lastName',
    fieldLabel: 'Last name',
    inputType: 'text',
    visible: true,
    validate: function(value, errorFunction) {
      if (!value) {
        errorFunction("Please enter your last name");
        return false;
      } else {
        return true;
      }
    }
  }]
});
