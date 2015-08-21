/*****************************************************************************/
/* Winners: Event Handlers */
/*****************************************************************************/
Template.Winners.events({

  "submit form" : function(e) {
    e.preventDefault();
    var gameWeek = $("#gameWeekWinner").children()[0].value;
    var arrayOfWinners = $(".winnerSelect").map(function(a){
      return this.value;
    }).get();
    Meteor.call("inputWinners", gameWeek, arrayOfWinners, function(err, res){
      alert("winners added");
    });
  }
  
});

/*****************************************************************************/
/* Winners: Helpers */
/*****************************************************************************/
Template.Winners.helpers({
  "numberOfGames" : [1,2,3,4,5,6,7,8,9,10],

  "teams" : pLTeams
});

/*****************************************************************************/
/* Winners: Lifecycle Hooks */
/*****************************************************************************/
Template.Winners.created = function () {
};

Template.Winners.rendered = function () {
};

Template.Winners.destroyed = function () {
};
