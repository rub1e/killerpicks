/*****************************************************************************/
/* JoinLeague: Event Handlers */
/*****************************************************************************/
Template.JoinLeague.events({
  "click #joinLeagueButton" : function(){
    Meteor.call("enterLeague", $("input[name=enterLeagueForm]").val(), function(err, res){
      console.log("res:", res);
    });
  }
});

/*****************************************************************************/
/* JoinLeague: Helpers */
/*****************************************************************************/
Template.JoinLeague.helpers({
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
