(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {
      // Light the Fire
      Parse.history.start();
    },

    routes: {
      '' : 'home'

    },

    home: function () {
      new App.Views.ListBuilds({ collection: App.builds });
    }



  });

}());
