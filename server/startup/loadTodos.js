Meteor.startup(function () {
    if (Todos.find().count() === 0) {
        var todos = [
            {
                description: 'Drink'
      },
            {
                description: 'Eat'
      },
            {
                description: 'Develop'
      },
            {
                description: 'Sleep (if necessary)'
      }
    ];

        for (var i = 0; i < todos.length; i++) {
            Todos.insert(todos[i]);
        }
    }
});
