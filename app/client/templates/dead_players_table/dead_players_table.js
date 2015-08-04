/*****************************************************************************/
/* DeadPlayersTable: Event Handlers */
/*****************************************************************************/
Template.DeadPlayersTable.events({
});

/*****************************************************************************/
/* DeadPlayersTable: Helpers */
/*****************************************************************************/
Template.DeadPlayersTable.helpers({

  "playerName" : function(){
    var userEntry = Meteor.users.findOne({_id : this.playerId},{fields : {"profile.firstName" : 1, "profile.lastName" : 1}});
    return userEntry.profile.firstName + userEntry.profile.lastName;
  },

  "roundDiedIn" : function(){
    return this.roundDied;
  }

});

/*****************************************************************************/
/* DeadPlayersTable: Lifecycle Hooks */
/*****************************************************************************/
Template.DeadPlayersTable.created = function () {
};

Template.DeadPlayersTable.rendered = function () {
};

Template.DeadPlayersTable.destroyed = function () {
};
