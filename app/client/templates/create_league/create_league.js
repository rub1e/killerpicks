Meteor.subscribe('leaguesColl');

/*****************************************************************************/
/* CreateLeague: Event Handlers */
/*****************************************************************************/
Template.CreateLeague.events({
  "click #createLeagueButton": function(e){
    var startingGameWeek = $("#weeksDropDown").val();
    var proposedLeagueName = $("#newLeagueName").val();
    var fee = $("input[name=newLeagueFee]").val();
    e.preventDefault();

    if(Leagues.findOne({leagueName : proposedLeagueName})){
      console.log("name already exists");
    } else {
      Session.set("uniqueLeagueCode", undefined);
      Meteor.call("createLeague", proposedLeagueName, startingGameWeek, fee, function(err, res){
        Session.set("uniqueLeagueCode", res);
        console.log("league created");
        Meteor.call("playerLeaguesArray", function(err, res){
          console.log("array updated");
          Session.set("leagues", res);
        });
      });
    }
  },

  "show.bs.modal #createLeagueBtn" : function(e){
    Session.set("uniqueLeagueCode", undefined);
  }

});

/*****************************************************************************/
/* CreateLeague: Helpers */
/*****************************************************************************/
Template.CreateLeague.helpers({
  "noNewLeague" : function(){
    return Session.get("uniqueLeagueCode") === undefined;
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
