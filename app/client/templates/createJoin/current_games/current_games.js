/*****************************************************************************/
/* CurrentGames: Event Handlers */
/*****************************************************************************/
Template.CurrentGames.events({
});

/*****************************************************************************/
/* CurrentGames: Helpers */
/*****************************************************************************/
Template.CurrentGames.helpers({

  "game" : function(){
    var gamesArr = Reality.findOne({gameWeek : currentGameweek()}).matches;
    var formattedMatches = [];
    for(var i = 0; i < gamesArr.length; i += 1){
      var str = pLTeamsAbbrev[gamesArr[i].home] + " v " + pLTeamsAbbrev[gamesArr[i].away];
      formattedMatches.push(str);
    }
    return formattedMatches;
  }

});

/*****************************************************************************/
/* CurrentGames: Lifecycle Hooks */
/*****************************************************************************/
Template.CurrentGames.created = function () {
};

Template.CurrentGames.rendered = function () {
};

Template.CurrentGames.destroyed = function () {
};
