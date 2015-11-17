
/* global Ext */

/**
 * @class
 * Базовый класс вкладки с таблицей.
 */

Ext.define("Cardinalkeeper.library.view.gridtab.Grid", {
	
	extend: "Ext.grid.Panel",
	
	requires: [
		"Cardinalkeeper.library.view.gridtab.GridController",
		"Cardinalkeeper.library.view.gridtab.GridModel",
		"Cardinalkeeper.library.view.gridtab.ContextMenu",
		"Cardinalkeeper.library.view.gridtab.Dialog"
	],
	
	controller: "gridtab",
	viewModel: "gridtab",
	
	subViews: {
		form: null,
		dialog: null,
		contextMenu: null
	},
	
	selModel: {
		mode: "multi"
	},
	
	bind: {
		title: "{title}",
		store: "{gridStore}"
	},
	
	listeners: {
		itemcontextmenu: "onItemContextMenu",
		containercontextmenu: "onContainerContextMenu",
		containerclick: "onContainerClick"
	},
	
	bbar: {
		xtype: "pagingtoolbar",
		displayInfo: true,
		bind: {
			store: "{gridStore}"
		}
	}
	
});