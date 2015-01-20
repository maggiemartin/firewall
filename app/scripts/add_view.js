(function () {

  App.Views.AddBuild = Parse.View.extend({

    events: {
      'submit #addCoffee' : 'addBuild'
    },

    initialize: function () {
      this.render();

      $('#buildList').html(this.$el);
    },

    render: function () {
      this.$el.html($('#addTemp').html());
    },

    addBuild: function (e) {
      e.preventDefault();

      var c = new App.Models.Build({
        name: $('#coffee_name').val()

      });

      c.save(null, {
        success: function () {
          App.builds.add(c);
          App.router.navigate('', { trigger: true });
        }
      });

    }

  });

}());
