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
    return Template.instance().playerName.get();
  },

  "playerLivesLeft" : function(){
    return this.livesLeft;
  },

  "playerChoice" : function(){
    var deadline = new Date(currentGameweek());
    deadline = deadline.setHours(11,55);
    if(Date.now > deadline && Date.now() < new Date(nextGameweek())){
      return this.choices[this.choices.length -1];
    }
  }

});

/*****************************************************************************/
/* LeaguePlayersTable: Lifecycle Hooks */
/*****************************************************************************/
Template.LeaguePlayersTable.created = function () {
  var player = this.data.playerId;
  var self = this;
  self.playerName = new ReactiveVar("Waiting for response from server...");
  Meteor.call('getFullName', player, function (err, asyncValue) {
      if (err)
          console.log(err);
      else
          self.playerName.set(asyncValue);
  });
};

Template.LeaguePlayersTable.rendered = function () {
};

Template.LeaguePlayersTable.destroyed = function () {
};
