var countdown = function() {

  var gameData = GameStateData.find().fetch();
  var roundTimer = !!gameData[0] && gameData[0].roundTimer;

  console.log(roundTimer)

  if (roundTimer >= 1) {

      GameStateData.update({}, {
          $inc: {
              roundTimer: -1
          }
      });

  } else if (roundTimer === 0) {

      GameStateData.update({}, {
          $set: {
              roundTimer: 15
          }
      });

                ts = UserInput.find({category: "delete" }).fetch(); 
                console.log(ts)
                
                for (i = 0; i < (ts.length); i++) {
                    
                    UserInput.remove({
                        _id: ts[i]._id
                    })
                }


  }
}

      timeout1 = Meteor.setInterval(countdown, 1000)


Meteor.startup(function() {
  if (GameStateData.find().count() === 0) {
      GameStateData.insert({
          roundTimer: 15
      });
  }
});