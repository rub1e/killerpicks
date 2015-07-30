/*****************************************************************************/
/* NewUserRegister: Event Handlers */
/*****************************************************************************/
Template.NewUserRegister.events({

  'submit form': function(event){
    event.preventDefault();
    var email = $('input[name=regEmail]').val();
    var password = $('input[name=regPassword]').val();
    var fullName = $('input[name=fullName]').val();
    var username = $('input[name=regUsername]').val();
    Accounts.createUser({
        email: email,
        password: password,
        username: username,
        createdAt: new Date(),
        profile: {
          fullName: fullName,
          leaguesMemberOf: []
        }
    });
  }

});

/*****************************************************************************/
/* NewUserRegister: Helpers */
/*****************************************************************************/
Template.NewUserRegister.helpers({
});

/*****************************************************************************/
/* NewUserRegister: Lifecycle Hooks */
/*****************************************************************************/
Template.NewUserRegister.created = function () {
};

Template.NewUserRegister.rendered = function () {
};

Template.NewUserRegister.destroyed = function () {
};
