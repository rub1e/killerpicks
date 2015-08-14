/*****************************************************************************/
/* CreateLeagueButtons: Event Handlers */
/*****************************************************************************/
Template.CreateLeagueButtons.events({
    
});

/*****************************************************************************/
/* CreateLeagueButtons: Helpers */
/*****************************************************************************/
Template.CreateLeagueButtons.helpers({
  "noNewLeague" : function(){
    return Session.get("uniqueLeagueCode") === undefined;
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
