(function () {

  App.Views.ListBuilds = Parse.View.extend({


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


      ///begin pie chart svg here///
      (function ($, document) {
        $.fn.easyaspie = function () {
          var	size	= parseInt(this.data('size')),
          radius	= size / 2,
          value	= parseInt(this.data('value'));

          // pie all the things!
          if (this.length > 1){
            this.each( function() {
              $(this).easyaspie();
            });
            return this;
          }
          //only numbers here
          if (isNaN(value)) {
            return this;
          }

          // set the size of this
          this.css({
            height: size,
            width: size
          }).addClass('pie-sliced');

          // make value behave
          value = Math.min(Math.max(value, 0), 100);
          // make some svg
          this.pie = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (value >= 100) {
            this.pie.slice = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            this.pie.slice.setAttribute('r', radius);
            this.pie.slice.setAttribute('cx', radius);
            this.pie.slice.setAttribute('cy', radius);

          } else {
            this.pie.slice = document.createElementNS("http://www.w3.org/2000/svg", "path");

            //calculate x,y coordinates of the point on the circle to draw the arc to.
            var x = Math.cos((2 * Math.PI)/(100/value));
            var y = Math.sin((2 * Math.PI)/(100/value));

            //should the arc go the long way round?
            var longArc = (value <= 50) ? 0 : 1;

            var d = "M" + radius + "," + radius + " L" + radius + "," + 0 + ", A" + radius + "," + radius + " 0 " + longArc + ",1 " + (radius + y*radius) + "," + (radius - x*radius) + " z";
            this.pie.slice.setAttribute('d', d);
          }
          //add the slice to the pie.
          $(this.pie.slice).appendTo(this.pie);

          // add the pie to this
          $(this.pie).appendTo(this);

          return this;
        };

        $('.pie').easyaspie();
      })(jQuery, document);

///accordion effect code goes here

      (function($) {

        var allPanels = $('.Testing > section > dd').hide();

        var allTiles = $('.Testing > section > dt > a > .tiles').fadeIn();

        $('.Testing > section > dt > a').click(function() {

          allPanels.slideUp();
          allTiles.fadeIn();
          $(this).parent().next().slideDown();
          $(this).find('.tiles').hide();
          return false;

        });
      })(jQuery);

    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();

      var divUtc = moment.utc().format('hh:mm a - MM/DD/YYYY');
      var localTime  = moment.utc(divUtc).toDate();

      localTime = moment(localTime).format('hh:mm a - MM/DD/YYYY');
      App.localTime = localTime

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
