/*! jquery-dateFormat 05-10-2014 */
var DateFormat={};!function(a){var b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=["January","February","March","April","May","June","July","August","September","October","November","December"],f={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},g=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;a.format=function(){function a(a){return b[parseInt(a,10)]||a}function h(a){return c[parseInt(a,10)]||a}function i(a){var b=parseInt(a,10)-1;return d[b]||a}function j(a){var b=parseInt(a,10)-1;return e[b]||a}function k(a){return f[a]||a}function l(a){var b,c,d,e,f,g=a,h="";return-1!==g.indexOf(".")&&(e=g.split("."),g=e[0],h=e[1]),f=g.split(":"),3===f.length?(b=f[0],c=f[1],d=f[2].replace(/\s.+/,"").replace(/[a-z]/gi,""),g=g.replace(/\s.+/,"").replace(/[a-z]/gi,""),{time:g,hour:b,minute:c,second:d,millis:h}):{time:"",hour:"",minute:"",second:"",millis:""}}function m(a,b){for(var c=b-String(a).length,d=0;c>d;d++)a="0"+a;return a}return{parseDate:function(a){var b={date:null,year:null,month:null,dayOfMonth:null,dayOfWeek:null,time:null};if("number"==typeof a)return this.parseDate(new Date(a));if("function"==typeof a.getFullYear)b.year=String(a.getFullYear()),b.month=String(a.getMonth()+1),b.dayOfMonth=String(a.getDate()),b.time=l(a.toTimeString()+"."+a.getMilliseconds());else if(-1!=a.search(g))values=a.split(/[T\+-]/),b.year=values[0],b.month=values[1],b.dayOfMonth=values[2],b.time=l(values[3].split(".")[0]);else switch(values=a.split(" "),6===values.length&&isNaN(values[5])&&(values[values.length]="()"),values.length){case 6:b.year=values[5],b.month=k(values[1]),b.dayOfMonth=values[2],b.time=l(values[3]);break;case 2:subValues=values[0].split("-"),b.year=subValues[0],b.month=subValues[1],b.dayOfMonth=subValues[2],b.time=l(values[1]);break;case 7:case 9:case 10:b.year=values[3],b.month=k(values[1]),b.dayOfMonth=values[2],b.time=l(values[4]);break;case 1:subValues=values[0].split(""),b.year=subValues[0]+subValues[1]+subValues[2]+subValues[3],b.month=subValues[5]+subValues[6],b.dayOfMonth=subValues[8]+subValues[9],b.time=l(subValues[13]+subValues[14]+subValues[15]+subValues[16]+subValues[17]+subValues[18]+subValues[19]+subValues[20]);break;default:return null}return b.date=new Date(b.year,b.month-1,b.dayOfMonth),b.dayOfWeek=String(b.date.getDay()),b},date:function(b,c){try{var d=this.parseDate(b);if(null===d)return b;for(var e=(d.date,d.year),f=d.month,g=d.dayOfMonth,k=d.dayOfWeek,l=d.time,n="",o="",p="",q=!1,r=0;r<c.length;r++){var s=c.charAt(r),t=c.charAt(r+1);if(q)"'"==s?(o+=""===n?"'":n,n="",q=!1):n+=s;else switch(n+=s,p="",n){case"ddd":o+=a(k),n="";break;case"dd":if("d"===t)break;o+=m(g,2),n="";break;case"d":if("d"===t)break;o+=parseInt(g,10),n="";break;case"D":g=1==g||21==g||31==g?parseInt(g,10)+"st":2==g||22==g?parseInt(g,10)+"nd":3==g||23==g?parseInt(g,10)+"rd":parseInt(g,10)+"th",o+=g,n="";break;case"MMMM":o+=j(f),n="";break;case"MMM":if("M"===t)break;o+=i(f),n="";break;case"MM":if("M"===t)break;o+=m(f,2),n="";break;case"M":if("M"===t)break;o+=parseInt(f,10),n="";break;case"y":case"yyy":if("y"===t)break;o+=n,n="";break;case"yy":if("y"===t)break;o+=String(e).slice(-2),n="";break;case"yyyy":o+=e,n="";break;case"HH":o+=m(l.hour,2),n="";break;case"H":if("H"===t)break;o+=parseInt(l.hour,10),n="";break;case"hh":hour=0===parseInt(l.hour,10)?12:l.hour<13?l.hour:l.hour-12,o+=m(hour,2),n="";break;case"h":if("h"===t)break;hour=0===parseInt(l.hour,10)?12:l.hour<13?l.hour:l.hour-12,o+=parseInt(hour,10),n="";break;case"mm":o+=m(l.minute,2),n="";break;case"m":if("m"===t)break;o+=l.minute,n="";break;case"ss":o+=m(l.second.substring(0,2),2),n="";break;case"s":if("s"===t)break;o+=l.second,n="";break;case"S":case"SS":if("S"===t)break;o+=n,n="";break;case"SSS":o+=l.millis.substring(0,3),n="";break;case"a":o+=l.hour>=12?"PM":"AM",n="";break;case"p":o+=l.hour>=12?"p.m.":"a.m.",n="";break;case"E":o+=h(k),n="";break;case"'":n="",q=!0;break;default:o+=s,n=""}}return o+=p}catch(u){return console&&console.log&&console.log(u),b}},prettyDate:function(a){var b,c,d;return("string"==typeof a||"number"==typeof a)&&(b=new Date(a)),"object"==typeof a&&(b=new Date(a.toString())),c=((new Date).getTime()-b.getTime())/1e3,d=Math.floor(c/86400),isNaN(d)||0>d?void 0:60>c?"just now":120>c?"1 minute ago":3600>c?Math.floor(c/60)+" minutes ago":7200>c?"1 hour ago":86400>c?Math.floor(c/3600)+" hours ago":1===d?"Yesterday":7>d?d+" days ago":31>d?Math.ceil(d/7)+" weeks ago":d>=31?"more than 5 weeks ago":void 0},toBrowserTimeZone:function(a,b){return this.date(new Date(a),b||"MM/dd/yyyy HH:mm:ss")}}}()}(DateFormat),function(a){a.format=DateFormat.format}(jQuery);

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

(function () {

  App.Collections.Builds = Parse.Collection.extend({
    model: App.Models.Build,

     comparator: function (model) {
       return -model.get('order');

  }


  });

}());

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

Parse.initialize("STaZjwg248AVhhW7hsrWTCEE9btscUOvFbpkAGS4", "PdlOWVl6Sx3O8eHZc1OKrSHAxD1JPk7TbuZ7ow5R");


(function () {

  // Create Instance of Collection
  App.builds = new App.Collections.Builds();

  App.builds.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });

}());
