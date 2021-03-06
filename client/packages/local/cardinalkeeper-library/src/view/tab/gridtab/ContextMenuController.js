
/* global Ext */

/**
 * @class
 * Контроллер контекстного меню.
 */

Ext.define("Cardinalkeeper.library.view.gridtab.ContextMenuController", {
	
	extend: "Ext.app.ViewController",
	
	alias: "controller.gridtabcontextmenu",
	
	/**
	 * Обработчик события "Клик по контекстному меню".
	 * @inheritdoc Ext.menu.Menu#click
	 */
	onClick: function(menu, item, event) {
		if (item) this.fireViewEvent(item.getItemId() + "click");
	},
	
	/**
	 * Обработчик события "Перед показом контекстного меню".
	 */
	onBeforeShow: function() {
		var me = this;
		var mode;
		var grid = me.getViewModel().getParent().getView();
		switch (grid.getSelection().length) {
			case 0: mode = "none"; break;
			case 1: mode = "single"; break;
			default: mode = "multi"; break;
		}
		me.getView().items.each(function(item) {
			item[item.hasCls(mode) ? "enable" : "disable"].call(item);
		});
	},
	
});