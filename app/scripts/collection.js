(function () {

  App.Collections.Builds = Parse.Collection.extend({
    model: App.Models.Build,

     comparator: function (model) {
       return -model.get('order');

  }


  });

}());
