Meteor.subscribe('leaguesColl');

/*****************************************************************************/
/* CreateLeague: Event Handlers */
/*****************************************************************************/
Template.CreateLeague.events({
  "click #createLeagueButton": function(e){
    var startingGameWeek = $("#weeksDropDown").val();
    var proposedLeagueName = $("#newLeagueName").val();
    e.preventDefault();

    if(Leagues.findOne({leagueName : proposedLeagueName})){
      console.log("name already exists");
    } else {
      Session.set("uniqueLeagueCode", undefined);
      Meteor.call("createLeague", proposedLeagueName, startingGameWeek, function(err, res){
        Session.set("uniqueLeagueCode", res);
        console.log("league created");
      });
    }
  },

  "click #closeCreateLeagueButton" : function(e){
    Session.set("uniqueLeagueCode", undefined);
  }

});

/*****************************************************************************/
/* CreateLeague: Helpers */
/*****************************************************************************/
Template.CreateLeague.helpers({
  "newLeagueCreated" : function(){
    return Session.get("uniqueLeagueCode") !== undefined;
  }
});

/*****************************************************************************/
/* CreateLeague: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateLeague.created = function () {
};

Template.CreateLeague.rendered = function () {
};

Template.CreateLeague.destroyed = function () {
};
