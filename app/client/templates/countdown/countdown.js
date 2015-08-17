/*****************************************************************************/
/* Countdown: Event Handlers */
/*****************************************************************************/
Template.Countdown.events({
});

/*****************************************************************************/
/* Countdown: Helpers */
/*****************************************************************************/
Template.Countdown.helpers({

  "timeLeft" : function(){
    return Session.get("msTillDeadline");
  }

});

/*****************************************************************************/
/* Countdown: Lifecycle Hooks */
/*****************************************************************************/
Template.Countdown.created = function () {
  var deadline = Reality.findOne({gameWeek : nextGameweek()}, function(err, res){
    console.log("REality accessed");
  }).deadline;
  var timer = Meteor.setInterval(function(){
    var msTillDeadline = deadline - Date.now();
    if(msTillDeadline > 0){
      Session.set("msTillDeadline", msTillDeadline);
    } else {
      Meteor.clearInterval(timer);
    }
  }, 1000);
};

Template.Countdown.rendered = function () {
};

Template.Countdown.destroyed = function () {
};
