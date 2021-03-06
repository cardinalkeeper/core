
/* global Ext */

/**
 * @class
 * Модель пункта главного меню.
 */

Ext.define("Cardinalkeeper.model.MainMenuItem", {
	
	extend: "Ext.data.TreeModel",
	
	proxy: {
		type: "memory",
		reader: {
			type: "json",
			rootProperty: "children"
		}
	},
	
	fields: [{
		name: "path",
		type: "string"
	}]
	
});