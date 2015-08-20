/*****************************************************************************/
/* InputReality: Event Handlers */
/*****************************************************************************/
Template.InputReality.events({
  "submit form" : function(e){
    e.preventDefault();
    var gameWeek = $("#weeksDiv").children()[0].value;
    var deadlineTime = $("#gameweekDeadline").val().split(":");

    var entry = {gameWeek : gameWeek, deadline : deadlineTime, matches : [], winningTeams : []};

    for (var i = 1; i < 11; i += 1){
      var homeT = "#home" + i;
      var awayT = "#away" + i;
      var gDate = "#gameDate" + i;
      var gTime = "#gameTime" + i;
      var obj = {home : $(homeT).val(),
                 away : $(awayT).val(),
                 date : $(gDate).val(),
                 time : $(gTime).val()};
      entry.matches.push(obj);
    }

    Meteor.call("inputGames", entry, function(err, res){
      alert("games added");
    });
  },

  "click #setCurrentGameWeek" : function(){
    var gameWeek = $("#lowerWeeksDiv").children()[0].value;
    Meteor.call("setCurrentGameWeek", gameWeek);
  }

});

/*****************************************************************************/
/* InputReality: Helpers */
/*****************************************************************************/
Template.InputReality.helpers({
  "numberOfGames" : [1,2,3,4,5,6,7,8,9,10],

  "teams" : pLTeams
});

/*****************************************************************************/
/* InputReality: Lifecycle Hooks */
/*****************************************************************************/
Template.InputReality.created = function () {
};

Template.InputReality.rendered = function () {
};

Template.InputReality.destroyed = function () {
};
