/*****************************************************************************/
/* Navbar: Event Handlers */
/*****************************************************************************/
Template.Navbar.events({

  "click #logoutButton" : function(){
    Meteor.logout();
  }

});

/*****************************************************************************/
/* Navbar: Helpers */
/*****************************************************************************/
Template.Navbar.helpers({
  "loggedInFullName" : function(){
    var user = Meteor.user();
    return user.profile.firstName + " " + user.profile.lastName;
  }
});

/*****************************************************************************/
/* Navbar: Lifecycle Hooks */
/*****************************************************************************/
Template.Navbar.created = function () {
};

Template.Navbar.rendered = function () {
};

Template.Navbar.destroyed = function () {
};
