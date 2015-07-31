/*****************************************************************************/
/* LoginUser: Event Handlers */
/*****************************************************************************/

Accounts.config({
  forbidClientAccountCreation : true
});


Template.LoginUser.events({

  'submit form': function(event){
    event.preventDefault();
    var email = $('input[name=logEmail]').val();
    var password = $('input[name=logPassword]').val();
    Meteor.loginWithPassword(email, password, function(error){
      console.log(error);
    });
  }

});

/*****************************************************************************/
/* LoginUser: Helpers */
/*****************************************************************************/
Template.LoginUser.helpers({
});

/*****************************************************************************/
/* LoginUser: Lifecycle Hooks */
/*****************************************************************************/
Template.LoginUser.created = function () {
};

Template.LoginUser.rendered = function () {
};

Template.LoginUser.destroyed = function () {
};
