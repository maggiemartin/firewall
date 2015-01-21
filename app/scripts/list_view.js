(function () {

  App.Views.ListBuilds = Parse.View.extend({

    //tagName: 'ul',
    className: 'Testing',

    events: {},

    template: _.template($('#listTemp').html()),

    initialize: function (options) {

      this.options = options;

      this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#buildList').html(this.$el);

      (function($) {

        var allPanels = $('.Testing > section > dd').hide();



        $('.Testing > section > dt > a').click(function() {

          allPanels.slideUp();

          $(this).parent().next().slideDown();

          return false;
        });


      })(jQuery);


          //console.log(c.attributes.build);





    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();

      // Sorting On The Fly
      // if (this.options.sort != undefined) {
      //   // Setting up a localized collection to sort by our sort param
      //   var local_collection = this.collection.sortBy( function (model) {
      //     return model.get(self.options.sort);
      //   });
      //   _.each(local_collection, function (c) {
      //     self.$el.append(self.template(c.toJSON()));
      //   })
      // } else {
        // Sort from our default comparator in our collection constructor
        this.collection.sort();

        this.collection.each(function (c) {
          self.$el.append(self.template(c.toJSON()));

        });


        //  $(".").css({'width' : monster.health +"%"});

        //  if (build.health < 30) {$("#health-bar2").css({'background-color' : "red"})}
        //else if  (monster.health > 29 & monster.health < 75)    {$("#health-bar2").css({'background-color' : "rgb(237,255,88)"})}
        //  else if (monster.health > 74)
        //  {$("#health-bar2").css({'background-color' : "hsla(85, 100%, 50%, 1)"})}
        //  }
      }




  });

}());
