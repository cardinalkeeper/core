
/* global Ext */

/**
 * @class
 */

Ext.define("Cardinalkeeper.view.main.Main", {
	
	extend: "Ext.panel.Panel",
	
	requires: [
		"Cardinalkeeper.view.main.MainModel", 
		"Cardinalkeeper.view.main.MainController"
	],
	
	plugins: "viewport",
	
	controller: "main",
	viewModel: "main",
	
	ui: "navigation",
	
	layout: "border",
	border: false,
	
	items: [{
		region: "west",
		xtype: "treepanel",
		reference: "mainmenu",
		itemId: "mainmenu",
		split: true,
		width: 400,
		border: false,
		rootVisible: false,
		store: "MainMenu",
		title: "Кардинал Кипер 2015",
		bind: {
			title: "{applicationTitle}"
		}
	}, {
		region: "center",
		xtype: "tabpanel",
		reference: "desktop",
		itemId: "desktop",
		border: false,
		defaults: {
			border: false
		}
	}]
	
});