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
    return Template.instance().deadPlayerName.get();
  },

  "roundDiedIn" : function(){
    return this.roundDied;
  }

});

/*****************************************************************************/
/* DeadPlayersTable: Lifecycle Hooks */
/*****************************************************************************/
Template.DeadPlayersTable.created = function () {
  var player = this.data.playerId;
  var self = this;
  self.deadPlayerName = new ReactiveVar("Waiting for response from server...");
  Meteor.call('getFullName', player, function (err, asyncValue) {
      if (err)
          console.log(err);
      else
          self.deadPlayerName.set(asyncValue);
  });
};

Template.DeadPlayersTable.rendered = function () {
};

Template.DeadPlayersTable.destroyed = function () {
};
