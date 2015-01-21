Parse.initialize("STaZjwg248AVhhW7hsrWTCEE9btscUOvFbpkAGS4", "PdlOWVl6Sx3O8eHZc1OKrSHAxD1JPk7TbuZ7ow5R");


(function () {

  // Create Instance of Collection
  App.builds = new App.Collections.Builds();

  App.builds.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });




}());
$('.items_completed').click(function(){

console.log('working');
});
