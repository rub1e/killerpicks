/*****************************************************************************/
/* LoginUser: Event Handlers */
/*****************************************************************************/
Template.LoginUser.events({

  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=logEmail]').val();
    var password = $('[name=logPassword]').val();
    Meteor.loginWithPassword(email, password);
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
