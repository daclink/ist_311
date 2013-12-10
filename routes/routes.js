/* 
 * Author : Drew A. Clinkenbeard
 * YourTwoPercent.org
 * Routes for pages.
 */
var AppRouter = Backbone.Router.extend({
    routes: {
        "about": "about",
        "start_two": "start_two",
        "once_start_two": "once_start_two",
        "span_start_two": "span_start_two",
        "always_start_two": "always_start_two",
        "restart_two": "restart_two",
        "once_restart_two": "once_restart_two",
        "span_restart_two": "span_restart_two",
        "always_restart_two": "always_restart_two",
        "increase_two": "increase_two",
        "once_increase_two": "once_increase_two",
        "span_increase_two": "span_increase_two",
        "always_increase_two": "always_increase_two",
        "about_us": "about_us",
        "why_two": "why_two",
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    },
    start_two: function( ) {
        // Note the variable in the route definition being passed in here
        console.log("in routes, firing start_two");
        pageLoader("start_two");
    },
    once_start_two: function( ) {
        // Note the variable in the route definition being passed in here
        console.log("in routes, firing Once_start_two");
        pageLoader("once_start_two");
    },
    span_start_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("span_start_two");
    },
    always_start_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("always_start_two");
    },
    once_restart_two: function( ) {
        // Note the variable in the route definition being passed in here
        console.log("in routes, firing Once_start_two");
        pageLoader("once_restart_two");
    },
    span_restart_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("span_restart_two");
    },
    always_restart_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("always_restart_two");
    },
    increase_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("increase_two");
    },
    once_increase_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("once_increase_two");
    },
    always_increase_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("always_increase_two");
    },
    span_increase_two: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("span_increase_two");
    },
    about: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("about");
    },
    about_us: function( ) {
        // Note the variable in the route definition being passed in here
        pageLoader("about_us");
    },
    why_two: function( ) {
        pageLoader("why_two");
    },
    defaultRoute: function( ) {
        pageLoader("home");

    }
});
           