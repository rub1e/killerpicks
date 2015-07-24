pLTeams = ["Arsenal", "Aston Villa", "Bournemouth", "Chelsea", "Crystal Palace", "Everton", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Norwich City", "Southampton", "Stoke City", "Sunderland", "Swansea City", "Tottenham Hotspur", "Watford", "West Bromwich Albion", "West Ham United"];

/*****************************************************************************/
/* LeaguesView: Event Handlers *  /
/*****************************************************************************/
Template.LeaguesView.events({
});

/*****************************************************************************/
/* LeaguesView: Helpers */
/*****************************************************************************/
Template.LeaguesView.helpers({
  "playerLeagues" : function(){
    console.log("playerLeagues called");
    return Session.get("leagues");
  }
});

/*****************************************************************************/
/* LeaguesView: Lifecycle Hooks */
/*****************************************************************************/
Template.LeaguesView.created = function () {
  Meteor.call("playerLeaguesArray", function(err, res){
    Session.set("leagues", res);
  });
};

Template.LeaguesView.rendered = function () {
};

Template.LeaguesView.destroyed = function () {
};
