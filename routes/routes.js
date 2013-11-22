/* 
 * Author : Drew A. Clinkenbeard
 * YourTwoPercent.org
 * Routes for pages.
 */
var AppRouter = Backbone.Router.extend({
    routes: {
        "about": "about",
        "start_two": "start_two",
        "restart_two": "restart_two",
        "increase_two" : "increase_two",
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    },
    start_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("start_two");
    },
    about: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("about");
    },
    defaultRoute: function( ){
        pageLoader("home");
        
    }
});
           