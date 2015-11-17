
/* global Ext */

/**
 * @class
 */

Ext.define("Cardinalkeeper.library.view.gridtab.GridModel", {
	
	extend: "Ext.app.ViewModel",
	
	alias: "viewmodel.gridtab",
	
	stores: {
		gridStore: {
			model: "{gridDataModel}",
			autoLoad: true
		}
	}
	
});


