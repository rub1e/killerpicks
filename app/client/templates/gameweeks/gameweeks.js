
/*****************************************************************************/
/* Gameweeks: Event Handlers */
/*****************************************************************************/
Template.Gameweeks.events({

});

/*****************************************************************************/
/* Gameweeks: Helpers */
/*****************************************************************************/
Template.Gameweeks.helpers({

  "weeksList" : function(){
    var weeksAfterNow = pLGameweeks.filter(function(a){
      return new Date(a) > Date.now();
    });

    return weeksAfterNow;
  }

});

/*****************************************************************************/
/* Gameweeks: Lifecycle Hooks */
/*****************************************************************************/
Template.Gameweeks.created = function () {
};

Template.Gameweeks.rendered = function () {
};

Template.Gameweeks.destroyed = function () {
};
