/*****************************************************************************/
/* InputReality: Event Handlers */
/*****************************************************************************/
Template.InputReality.events({
  "submit form" : function(e){
    e.preventDefault();
    var gameWeek = $("#weeksDiv").children()[0].value;
    var entry = {gameWeek : gameWeek, matches : [], winningTeams : [1,2,3,4,5,6,7,8,9,10]};
    for (var i = 1; i < 11; i += 1){
      var home = "#home" + i;
      var away = "#away" + i;
      var string = $(home).val() + " v " + $(away).val();
      entry.matches.push(string);
    }
    Meteor.call("inputGames", entry, function(err, res){
      $("#inputReality").find("select").val("");
    });
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
