/*****************************************************************************/
/* LeaguesViewRow: Event Handlers */
/*****************************************************************************/

Template.LeaguesViewRow.events({

});

/*****************************************************************************/
/* LeaguesViewRow: Helpers */
/*****************************************************************************/
Template.LeaguesViewRow.helpers({
  "livesLeft" : function(){
    var player = $.grep(this.players, function(e){
      return e.playerId === Meteor.userId();
    })[0];
    return player.livesLeft;
  },

  "playersLeft" : function(){
    return $.grep(this.players, function(e){
      return e.livesLeft > 0;
    }).length;
  },

  "playersStarted" : function(){
    return this.players.length;
  },

  "weekPick" : function(){
    var player = $.grep(this.players, function(e){
      return e.playerId === Meteor.userId();
    })[0];
    if(this.round === player.choices.length){
      return choices[choices.length -1];
    } else {
      return "Pick";
    }
  }

});

/*****************************************************************************/
/* LeaguesViewRow: Lifecycle Hooks */
/*****************************************************************************/
Template.LeaguesViewRow.created = function () {
};

Template.LeaguesViewRow.rendered = function () {
};

Template.LeaguesViewRow.destroyed = function () {
};
