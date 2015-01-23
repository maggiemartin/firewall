(function () {

  App.Models.Build = Parse.Object.extend({

    className: 'Build',

    idAttribute: 'objectId',

    defaults: {
      name: '',
      owner: ''
    },

    initialize: function () {
      var t = this.get('name');
    
    }




  });

}());
