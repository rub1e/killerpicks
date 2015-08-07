/*****************************************************************************/
/* DetailedLeagueView: Event Handlers */
/*****************************************************************************/
Template.DetailedLeagueView.events({
});

/*****************************************************************************/
/* DetailedLeagueView: Helpers */
/*****************************************************************************/
Template.DetailedLeagueView.helpers({

  "chairmanName" : function(){
    return Template.instance().chairmanName.get();
  },

  "round" : function(){
    return this.round;
  },

  "leagueEntryFee" : function(){
    return this.payment;
  },

  "leaguePrizePool" : function(){
    return this.payment * this.players.length;
  },

  "leagueEntryCode" : function(){
    return this._id;
  },

  "leaguePlayers" : function(){
    return this.players.filter(function(a){
      return a.roundDied === 0;
    }).sort(function(a, b){
      return a.livesLeft > b.livesLeft;
    });
  },

  "deadPlayers" : function(){
      return this.players.filter(function(a){
        return a.roundDied > 0;
      }).sort(function(a, b){
        return a.livesLeft > b.livesLeft;
      });
  },

  "leagueNameReplaced" : function(){
    return this.leagueName.replace(" ", "zzz");
  },

  "leagueStarting" : function (){
    return this.starting.toString().substring(0, 15);
  }

});

/*****************************************************************************/
/* DetailedLeagueView: Lifecycle Hooks */
/*****************************************************************************/
Template.DetailedLeagueView.created = function () {
  var chairman = this.data.players[0].playerId;
  var self = this;
  self.chairmanName = new ReactiveVar("Waiting for response from server...");
  Meteor.call('getFullName', chairman, function (err, asyncValue) {
      if (err)
          console.log(err);
      else
          self.chairmanName.set(asyncValue);
  });
};

Template.DetailedLeagueView.rendered = function () {
};

Template.DetailedLeagueView.destroyed = function () {
};
