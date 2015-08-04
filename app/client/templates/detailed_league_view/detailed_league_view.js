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
    var chairman = this.players[0].playerId;
    // var profile = Meteor.users.findOne({_id : chairman}, {fields : {"profile.firstName" : 1, "profile.lastName" : 1}});
    // return profile.profile.firstName + " " + profile.profile.lastName;
    var name;
    Meteor.call("getPlayerName", chairman, function(err, res){
      name = res;
    });
    return name;
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
      var leaguePlayers = this.players.filter(function(a){
        return a.roundDied === 0;
      }).sort(function(a, b){
        return a.livesLeft > b.livesLeft;
      });
      return leaguePlayers;
  },

  "deadPlayers" : function(){
      return this.players.filter(function(a){
        return a.roundDied > 0;
      }).sort(function(a, b){
        return a.livesLeft < b.livesLeft;
      });
  }

});

/*****************************************************************************/
/* DetailedLeagueView: Lifecycle Hooks */
/*****************************************************************************/
Template.DetailedLeagueView.created = function () {
};

Template.DetailedLeagueView.rendered = function () {
};

Template.DetailedLeagueView.destroyed = function () {
};
