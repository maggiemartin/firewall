Parse.initialize("STaZjwg248AVhhW7hsrWTCEE9btscUOvFbpkAGS4", "PdlOWVl6Sx3O8eHZc1OKrSHAxD1JPk7TbuZ7ow5R");


(function () {

  // Create Instance of Collection
  App.builds = new App.Collections.Builds();

  App.builds.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


  (function($) {

    var allPanels = $('.Testing > section > dd').hide();



    $('.Testing > section > dt > a').click(function() {

      allPanels.slideUp();
      alert('hello');
      $(this).parent().next().slideDown();

      return false;
    });


  })(jQuery);

}());
