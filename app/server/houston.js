Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
Houston.add_collection(Leagues);

Houston.methods("leagues", {

  "incrementRound" : function(){
     return "No of rounds incremented: " + Leagues.update({status : "active"}, { $inc : {
       round : 1
     }}, {multi : true});
  },

  "decrementLives" : function(){
    var latestWinners = winningTeams[winningTeams.length - 1].teams;
    var allActiveLeagues = Leagues.find({status : "active"}, {fields : {players : 1}}).fetch();
    var allActiveLeaguesLength = allActiveLeagues.length;

    for(var i = 0; i < allActiveLeaguesLength; i += 1) {
      var league = allActiveLeagues[i];
      for(var j = 0; j < league.players.length; j += 1) {
        var player = league.players[j];
        var choice = player.choices[player.choices.length -1];
        if(latestWinners.indexOf(choice) < 0) {
          Leagues.update({_id : league._id, "players.playerId" : player.playerId}, {$inc:{
              "players.$.livesLeft" : -1}
          });
        }
      }
    }
  },

  "activateLeagues" : function(){
    var nextGameWeek = new Date(pLGameweeks.filter(function(a){
      return new Date(a) > Date.now();
    })[0]);
    return "No of leagues activated: " + Leagues.update({starting : nextGameWeek}, {$set :
      {status: "active"}
    }, {multi : true});
  }
});
