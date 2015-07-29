/*****************************************************************************/
/* TeamsLeftDropDown: Event Handlers */
/*****************************************************************************/
Template.TeamsLeftDropDown.events({
  "click input[name=quickChoiceButton]" : function(e){
    var chosenTeam = $(e.currentTarget).siblings(".teamsLeftDropDown").val();
    var player = $.grep(this.players, function(e){
      return e.playerId === Meteor.userId();
    })[0];
    if(chosenTeam && player.choices.indexOf(chosenTeam) < 0) {
      console.log("sending team ID", chosenTeam, this._id);
      Meteor.call("makeChoice", chosenTeam, this._id, Meteor.userId(), function(err, res){
        Meteor.call("playerLeaguesArray", function(error, result){
          Session.set("leagues", result);
        });

      });
    }
  }
});

/*****************************************************************************/
/* TeamsLeftDropDown: Helpers */
/*****************************************************************************/
Template.TeamsLeftDropDown.helpers({

  "teamsLeft": function(){
    var player = $.grep(this.players, function(e){
      return e.playerId === Meteor.userId();
    })[0];

    return pLTeams.filter(function(a){
      return player.choices.indexOf(a) < 0;
    });
  }

});

/*****************************************************************************/
/* TeamsLeftDropDown: Lifecycle Hooks */
/*****************************************************************************/
Template.TeamsLeftDropDown.created = function () {
};

Template.TeamsLeftDropDown.rendered = function () {
};

Template.TeamsLeftDropDown.destroyed = function () {
};
