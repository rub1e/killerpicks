/*****************************************************************************/
/* LeaguesViewTable: Event Handlers */
/*****************************************************************************/
Template.LeaguesViewTable.events({
});

/*****************************************************************************/
/* LeaguesViewTable: Helpers */
/*****************************************************************************/
Template.LeaguesViewTable.helpers({

  "playerLeagues" : function(){
    console.log("playerLeagues called");
    return Session.get("leagues");
  }

});

/*****************************************************************************/
/* LeaguesViewTable: Lifecycle Hooks */
/*****************************************************************************/
Template.LeaguesViewTable.created = function () {
  
  Meteor.call("playerLeaguesArray", function(err, res){
    Session.set("leagues", res);
  });

};

Template.LeaguesViewTable.rendered = function () {
};

Template.LeaguesViewTable.destroyed = function () {
};
