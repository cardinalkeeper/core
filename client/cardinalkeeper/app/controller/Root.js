
/* global Ext */

/**
 * @class
 * Основной контроллер.
 */

Ext.define("Cardinalkeeper.controller.Root", {
	
	extend: "Ext.app.Controller",
	
	refs: [{
		ref: "desktopTabPanel",
		selector: "tabpanel#desktop"
	}],
	
	control: {
		"treepanel#mainmenu": {
			itemclick: "onTreePanelItemClick"
		}
	},
	
	privates: {
		
		/**
		 * Удаление корневой папки из пути.
		 * @param {String} path Путь, например "/path/to/folder"
		 */
		clearRootPath: function(path) {
			var separator = "/";
			path = path.substring(1).split(separator);
			path.shift();
			return separator + path.join(separator) + separator;
		}
		
	},
	
	/**
	 * Обработчик события "Клик по пункту в дереве главного меню".
	 * При клике происходит считывание пути path, удаление корневой папки и редирект по полученному пути.
	 * @inheritdoc Ext.tree.Panel#itemclick
	 */
	onTreePanelItemClick: function(treePanel, record) {
		var path = this.clearRootPath(record.getPath("path"));
		this.redirectTo(path);
	}
	
});