
/* global Ext */

/**
 * @class
 * Класс контекстного меню.
 */

Ext.define("Cardinalkeeper.library.view.gridtab.ContextMenu", {
	
	extend: "Ext.menu.Menu",
	
	requires: ["Cardinalkeeper.library.view.gridtab.ContextMenuController"],
	
	xtype: "gridtabcontextmenu",
	
	listeners: {
		click: "onClick",
		beforeshow: "onBeforeShow"
	},
	
	controller: "gridtabcontextmenu",
	
	items: [{
		itemId: "insert",
		cls: "none single multi",
		text: "Добавить"
	}, {
		itemId: "update",
		cls: "single",
		text: "Редактировать"
	}, {
		itemId: "delete",
		cls: "single multi",
		text: "Удалить"
	}]
	
});