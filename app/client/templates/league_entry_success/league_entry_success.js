/*****************************************************************************/
/* LeagueEntrySuccess: Event Handlers */
/*****************************************************************************/
Template.LeagueEntrySuccess.events({
});

/*****************************************************************************/
/* LeagueEntrySuccess: Helpers */
/*****************************************************************************/
Template.LeagueEntrySuccess.helpers({
  "leagueName" : function(){
    return Leagues.findOne({_id : Session.get("leagueJustJoined")}).leagueName;
  }
});

/*****************************************************************************/
/* LeagueEntrySuccess: Lifecycle Hooks */
/*****************************************************************************/
Template.LeagueEntrySuccess.created = function () {
};

Template.LeagueEntrySuccess.rendered = function () {
};

Template.LeagueEntrySuccess.destroyed = function () {
};
