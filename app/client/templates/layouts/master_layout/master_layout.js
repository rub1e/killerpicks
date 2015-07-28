Template.MasterLayout.helpers({

});

Template.MasterLayout.events({
  "click #logoutButton" : function(){
    Meteor.logout();
  }
});
