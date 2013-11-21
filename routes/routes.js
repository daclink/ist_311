/* 
 * Author : Drew A. Clinkenbeard
 * YourTwoPercent.org
 * Routes for pages.
 */
var AppRouter = Backbone.Router.extend({
    routes: {
        "/about": "about",
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    },
    about: function( ) {
        // Note the variable in the route definition being passed in here
        alert( "ABOUT!");
        pageLoader("about");
    },
    defaultRoute: function( ){
        pageLoader("home");
        alert("home!");
        
    }
});
           