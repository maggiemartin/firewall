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

        var allTiles = $('.Testing > section > dt > a > .tiles').show();

        $('.Testing > section > dt > a').click(function() {

          allPanels.slideUp();
          allTiles.fadeIn(300);

          $(this).parent().next().slideDown();
          $(this).find('.tiles').fadeOut(300);
          return false;



        });


      })(jQuery);




       var localTime;
       var divUtc;


    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();

      var divUtc = moment.utc().format('hh:mm a - MM/DD/YYYY');
      var localTime  = moment.utc(divUtc).toDate();


      localTime = moment(localTime).format('hh:mm a - MM/DD/YYYY');
      App.localTime = localTime
      console.log(App.localTime);
      
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



      }




  });

}());
