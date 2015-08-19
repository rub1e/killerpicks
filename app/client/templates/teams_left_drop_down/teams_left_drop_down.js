/*****************************************************************************/
/* TeamsLeftDropDown: Event Handlers */
/*****************************************************************************/
Template.TeamsLeftDropDown.events({
  "click input[name=quickChoiceButton]" : function(e){
    var chosenTeam = $(e.currentTarget).siblings(".teamsLeftDropDown").val();
    var player = $.grep(this.players, function(e){
      return e.playerId === Meteor.userId();
    })[0];
    if(chosenTeam !== "Pick this week's team" && player.choices.indexOf(chosenTeam) < 0) {
      Meteor.call("makeChoice", chosenTeam, this._id, function(err, res){
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
  },

  "disableSelect" : function(){
    var player = $.grep(this.players, function(e){
      return e.playerId === Meteor.userId();
    })[0];
    if(player.choices.length === this.round){
      return "disabled";
    } else {
      return "";
    }
  },

  "styleSelect" : function(){
    var player = $.grep(this.players, function(e){
      return e.playerId === Meteor.userId();
    })[0];
    if(player.choices.length === this.round){
      return "background-color:grey";
    } else {
      return "";
    }
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
