/*****************************************************************************/
/* CreateLeagueButtons: Event Handlers */
/*****************************************************************************/
Template.CreateLeagueButtons.events({
});

/*****************************************************************************/
/* CreateLeagueButtons: Helpers */
/*****************************************************************************/
Template.CreateLeagueButtons.helpers({
  "leagueReadyToConfirm" : function(){
    return Session.get("leagueReady") === "yes";
  }
});

/*****************************************************************************/
/* CreateLeagueButtons: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateLeagueButtons.created = function () {
};

Template.CreateLeagueButtons.rendered = function () {
};

Template.CreateLeagueButtons.destroyed = function () {
};
