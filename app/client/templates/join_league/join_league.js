/*****************************************************************************/
/* JoinLeague: Event Handlers */
/*****************************************************************************/
Template.JoinLeague.events({
  "click #joinLeagueButton" : function(){
    var code = $("input[name=enterLeagueForm]").val();
    if(code){
      Meteor.call("enterLeague", code, function(err, res){
        console.log("enter league res:", res);
        Meteor.call("playerLeaguesArray", function(error, result){
          Session.set("leagues", result);
          console.log("joinleague sessioncalled ");
          Session.set("leagueJustJoined", code);
        });
      });
    }
  },
  
  "show.bs.modal #joinLeagueModal" : function(){
    Session.set("leagueJustJoined", undefined);
  }

});

/*****************************************************************************/
/* JoinLeague: Helpers */
/*****************************************************************************/
Template.JoinLeague.helpers({

  "leagueJustJoined" : function(){
    return Session.get("leagueJustJoined");
  }

});

/*****************************************************************************/
/* JoinLeague: Lifecycle Hooks */
/*****************************************************************************/
Template.JoinLeague.created = function () {
};

Template.JoinLeague.rendered = function () {
};

Template.JoinLeague.destroyed = function () {
};
