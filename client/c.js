Template.counter.helpers({
    returnTimer: function() {
        return GameStateData.find({})
    },
    returnResponses: function() {
        return UserInput.find({})
    }
});

Template.main.helpers({
    returnUserInput: function() {
        return UserInput.find({})
    }
});

Template.main.events({
    'click .submit': function() {

        var userInput = $('.userInput').val();
        console.log(userInput);
        var id = Meteor.userId();
        console.log(id)

        UserInput.insert({
            createdBy: id,
            userInput: userInput,
            category: "delete"
        });


    }
});