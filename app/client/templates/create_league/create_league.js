/*****************************************************************************/
/* CreateLeague: Event Handlers */
/*****************************************************************************/
Template.CreateLeague.events({
  "click #createLeagueButton": function(e){
    var startingGameWeek = $("#weeksDropDown").val();
    var proposedLeagueName = $("#newLeagueName").val();
    var fee = $("input[name=newLeagueFee]").val();
    console.log(fee);
    var carryOn = true;
    e.preventDefault();
    $("#errorMessage").text("");

    if(!proposedLeagueName || proposedLeagueName.match(/[^A-Za-z0-9_. ]/)){
      $("#errorMessage").append("<li>Please enter a valid name for your league</li>");
      $("label").css("color:red");
      carryOn = false;
    }
    if(!startingGameWeek){
      $("#errorMessage").append("<li>Please choose a starting gameweek from the drop-down menu</li>");
      $("label").css("color:red");
      carryOn = false;
    }
    if(isNaN(fee)){
      console.log("isnan", fee);
      $("#errorMessage").append("<li>The league fee can only be a positive whole number, '0', or left blank</li>");
      $("label").css("color:red");
      carryOn = false;
    }
    if(Leagues.findOne({leagueName : proposedLeagueName, status : {$ne : "ended"}})){
      $("#errorMessage").append("<li>An active league with this name already exists: please choose another</li>");
      $("label").css("color:red");
      carryOn = false;
    }
    if(carryOn){
      Session.set("uniqueLeagueCode", undefined);
      Meteor.call("createLeague", proposedLeagueName, startingGameWeek, +fee, function(err, res){
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
  $("#errorMessage").text("");
  $("#weeksDropDown").val("");
  $("#newLeagueName").val("");
  $("input[name=newLeagueFee]").val("");
};

Template.CreateLeague.rendered = function () {
};

Template.CreateLeague.destroyed = function () {
};
