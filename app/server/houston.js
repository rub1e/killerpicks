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
    var livesLostcount = 0;
    var leaguesCheckedCount = 0;

    for(var i = 0; i < allActiveLeaguesLength; i += 1) {
      var league = allActiveLeagues[i];
      leaguesCheckedCount = i + 1;
      for(var j = 0; j < league.players.length; j += 1) {
        var player = league.players[j];
        var choice = player.choices[player.choices.length -1];
        if(latestWinners.indexOf(choice) < 0) {
          livesLostcount += 1;
          Leagues.update({_id : league._id, "players.playerId" : player.playerId}, {$inc :
              {"players.$.livesLeft" : -1}
          });
        }
      }
    }
    return "Number of leagues checked: " + leaguesCheckedCount + ", number of lives lost: " + livesLostcount;
  },

  "activateLeagues" : function(){
    var nextGameWeek = new Date(pLGameweeks.filter(function(a){
      return new Date(a) > Date.now();
    })[0]);
    return "No of leagues activated: " + Leagues.update({starting : nextGameWeek}, {$set :
      {status: "active"}
    }, {multi : true});
  },

  "randomPickSweep" : function(){
    var allActiveLeagues = Leagues.find({status : "active"}, {fields : {players : 1, round : 1}}).fetch();
    var allActiveLeaguesLength = allActiveLeagues.length;

    for(var i = 0; i < allActiveLeaguesLength; i += 1) {
      var league = allActiveLeagues[i];
      var round = league.round;
      for(var j = 0; j < league.players.length; j += 1) {
        var player = league.players[j];
        var choices = player.choices;
        if(round > choices.length) {
          var teamsLeft = pLTeams.filter(function(a){
            return choices.indexOf(a) < 0;
          });
          var randomIndex = Math.round(Math.random() * (teamsLeft.length - 1));
          var randomChoice = teamsLeft[randomIndex];
          console.log(randomChoice, " added to ", player, " in ", league);
          Meteor.call("makeChoice", randomChoice, league._id, player.playerId);
        }
      }
    }
  },

  "checkForDead" : function(){
    var allPlayingLeagues = Leagues.find({status : "active", round : {$gt : 0}}, {fields : {players : 1, round : 1}}).fetch();
    var allPlayingLeaguesLength = allPlayingLeagues.length;

    for(var i = 0; i < allPlayingLeaguesLength; i += 1) {
      var league = allPlayingLeagues[i];
      var round = league.round;
      for(var j = 0; j < league.players.length; j += 1) {
        var player = league.players[j];
        var livesLeft = player.livesLeft;
        if(livesLeft < 1) {
          Leagues.update({_id : league._id, "players.playerId" : player.playerId}, {$set: {
            "players.$.roundDied" : round
          }});
        }
      }
    }
  },

  "checkForChamps" : function(){
    var allPlayingLeagues = Leagues.find({status : "active", round : {$gt : 0}, "players.roundDied" : {$gt : 0}}, {fields : {players : 1, round : 1}}).fetch();
    var allPlayingLeaguesLength = allPlayingLeagues.length;

  }

});
