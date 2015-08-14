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
