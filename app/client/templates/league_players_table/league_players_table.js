/*****************************************************************************/
/* LeaguePlayersTable: Event Handlers */
/*****************************************************************************/
Template.LeaguePlayersTable.events({
});

/*****************************************************************************/
/* LeaguePlayersTable: Helpers */
/*****************************************************************************/
Template.LeaguePlayersTable.helpers({

  "alivePlayerName" : function(){
    var userEntry = Meteor.users.findOne({_id : this.playerId},{fields : {"profile.firstName" : 1, "profile.lastName" : 1}});
    return userEntry.profile.firstName + " " + userEntry.profile.lastName;
  },

  "playerLivesLeft" : function(){
    return this.livesLeft;
  },

  "playerChoice" : function(){
    return this.choices[this.choices.length -1];
  }

});

/*****************************************************************************/
/* LeaguePlayersTable: Lifecycle Hooks */
/*****************************************************************************/
Template.LeaguePlayersTable.created = function () {
};

Template.LeaguePlayersTable.rendered = function () {
};

Template.LeaguePlayersTable.destroyed = function () {
};