/**
* Backbone.js/RequireJS Template
*
* @info		Model template
* @version	0.4
* @author	Jasal Vadgama - http://blacklabelcreative.com/
* @license	MIT
**/

define([
	// add global app dependency
	'app' // App

	// additional module dependencies
], function() {
	var Model = Backbone.Model.extend({
			defaults: function() {
				return {
					title: 'empty model'
				};
			},

			// Ensure that each item created has 'title'
			initialize: function() {
				if (!this.get('title')) {
					this.set({
						title: this.defaults.title
					});
				}
			}
		});

	// what we return here will be used by other modules
	return Model;
});