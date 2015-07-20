/*****************************************************************************/
/* LeagueCodeGen: Event Handlers */
/*****************************************************************************/
Template.LeagueCodeGen.events({
});

/*****************************************************************************/
/* LeagueCodeGen: Helpers */
/*****************************************************************************/
Template.LeagueCodeGen.helpers({
  "confirmedLeagueName" : function(){
    if(Session.get("uniqueLeagueCode") !== undefined) {
      return Leagues.findOne({_id : Session.get("uniqueLeagueCode")}).leagueName;
    }
  },
  "uniqueLeagueCode" : Session.get("uniqueLeagueCode"),
  "confirmedLeagueStartWeek" : Leagues.findOne({_id : Session.get("uniqueLeagueCode")}).starting,
  "newLeagueCreated" : function(){
    return Session.get("uniqueLeagueCode") !== undefined;
  }
});

/*****************************************************************************/
/* LeagueCodeGen: Lifecycle Hooks */
/*****************************************************************************/
Template.LeagueCodeGen.created = function () {
};

Template.LeagueCodeGen.rendered = function () {
};

Template.LeagueCodeGen.destroyed = function () {
};
