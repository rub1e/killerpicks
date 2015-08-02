/*****************************************************************************/
/* JoinLeague: Event Handlers */
/*****************************************************************************/
Template.JoinLeague.events({
  "click #joinLeagueButton" : function(e){
    $("#errorMessage").text("");
    var code = $("input[name=enterLeagueForm]").val();
    var league = Leagues.findOne({_id : code});
    var players;

    if(league){

      players = league.players;
      for(var i = 0; i < players.length; i += 1) {
        if (players[i].playerId === Meteor.userId()) {
          return $("#errorMessage").text("You're already in this league");
        }
      }

      Session.set("nameOfLeagueJoining", league.leagueName);
      Session.set("dateOfLeagueJoining", league.starting.toString().substring(0, 15));

      if(league.payment === 0){
        Session.set("leagueFee", 0);
      } else {
        Session.set("leagueFee", league.payment);
      }
    } else {
      return $("#errorMessage").text("Enter a valid league ID");
    }
  },

  "show.bs.modal #joinLeagueModal" : function(){
    Session.set("leagueJustJoined", undefined);
    Session.set("leagueFee", undefined);
    Session.set("doubleConfirm", undefined);
    Session.set("nameOfLeagueJoining", undefined);
    Session.set("dateOfLeagueJoining", undefined);
  },

  "click #confirmLeagueButton" : function(){
    if(Session.get("leagueFee") > 0 && !$("input[name=feeCheck]").prop("checked")) {
      Session.set("doubleConfirm", true);
    } else {
      var code = $("input[name=enterLeagueForm]").val();
      Meteor.call("enterLeague", code, function(err, res){
        console.log("enter league res:", res);
        Meteor.call("playerLeaguesArray", function(error, result){
          Session.set("leagues", result);
          console.log("joinleague sessioncalled ");
          Session.set("leagueJustJoined", code);
        });
      });
    }
  }

});

/*****************************************************************************/
/* JoinLeague: Helpers */
/*****************************************************************************/
Template.JoinLeague.helpers({

  "leagueJustJoined" : function(){
    return Session.get("leagueJustJoined");
  },

  "confirmationNeeded" : function(){
    return Session.get("leagueFee") !== undefined;
  },

  "extraFeeConfirmation" : function(){
    return Session.get("leagueFee") > 0;
  },

  "doubleConfirm" : function(){
    return Session.get("doubleConfirm");
  },

  "leagueJoinName" : function(){
    return Session.get("nameOfLeagueJoining");
  },

  "leagueJoinStartDate" : function(){
    return Session.get("dateOfLeagueJoining");
  },

  "fee" : function(){
    return Session.get("leagueFee");
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
