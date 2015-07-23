/*****************************************************************************/
/* TeamsLeftDropDown: Event Handlers */
/*****************************************************************************/
Template.TeamsLeftDropDown.events({
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
    })
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
