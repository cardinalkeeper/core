
/* global Ext */

/**
 * @class
 * Базовый контроллер вкладки с таблицей.
 */

Ext.define("Cardinalkeeper.library.view.gridtab.GridController", {
	
	extend: "Ext.app.ViewController",
	
	alias: "controller.gridtab",
	
	/**
	 * Инициализация.
	 */
	init: function() {
		var me = this;
		/**
		 * @property
		 */
		me.contextmenu = me.createContextMenu();
	},
	
	/**
	 * Конструктор контекстного меню.
	 */
	createContextMenu: function() {
		var me = this;
		
		var config = me.getSubViewConfig("contextMenu", {
			viewModel: {
				parent: me.getViewModel()
			},
			listeners: {
				insertclick: "onInsert",
				updateclick: "onUpdate",
				deleteclick: "onDelete",
				scope: me
			}
		});
		
		return config ? Ext.create(config) : null;
	},
	
	/**
	 * Конструктор формы.
	 */
	createDialog: function() {
		var me = this;
		return Ext.create(me.getSubViewConfig("dialog", {
			viewModel: {
				parent: me.getViewModel(),
			},
			items: me.getSubViewConfig("form")
		}));
	},
	
	/**
	 * Получить конфиг субвида.
	 * @param {string} view = form | dialog | contextMenu
	 */
	getSubViewConfig: function(view, defaultConfig) {
		var me = this;
		
		var result = null;
		
		var viewConfig = me.getView().subViews[view];
		
		if (viewConfig !== false) {
			defaultConfig = defaultConfig || {};
			var config = { xtype: "gridtab" + view.toLowerCase() };
			viewConfig = viewConfig || {};
			viewConfig = Ext.isString(viewConfig) ? { xtype: viewConfig } : viewConfig;
			config = Ext.Object.merge(config, viewConfig);
			result = Ext.Object.merge(defaultConfig, config);
		}
		

		return result;
	},
	
	/**
	 * Обработчик события "Клик по пункту контекстного меню".
	 */
	onItemContextMenu: function(grid, record, item, index, event) {
		this.onContextMenu(grid, record, event);
	},
	
	/**
	 * Обработчик события "Клик по контейнеру с таблицей".
	 */
	onContainerContextMenu: function(grid, event) {
		grid.getSelectionModel().deselectAll();
		this.onContextMenu(grid, null, event);
	},
	
	/**
	 * Обработчик события "Клик по контейнеру с таблицей".
	 */
	onContainerClick: function(grid, event) {
		grid.getSelectionModel().deselectAll();
	},
	
	/**
	 * Обработчик события "Показ контекстного меню".
	 */
	onContextMenu: function(grid, record, event) {
		var me = this;
		if (me.contextmenu) {
			me.contextmenu.showAt(event.getXY());
			event.stopEvent();
		}
	},
	
	/**
	 * Обработчик события "Вставка записи".
	 */
	onInsert: function() {
		var me = this;
		var record = me.getView().getStore().getModel().create();
		var dialog = me.createDialog();
		dialog.getForm().loadRecord(record);
		dialog.show();
	},
	
	/**
	 * Обработчик события "Обновление записи".
	 */
	onUpdate: function() {
		var me = this;
		var selection = me.getView().getSelection();
		if (selection.length == 1) {
			var record = selection[0];
			var dialog = me.createDialog();
			dialog.getForm().loadRecord(record);
			dialog.show();
		}
	},
	
	/**
	 * Обработчик события "Удаление записи".
	 */
	onDelete: function() {
		var me = this;
		Ext.Msg.confirm("Удаление", "Удалить запись(и)?", function(confirm) {
			if (confirm == "yes") {
				var store = me.getView().getStore();
				me.getView().getSelection().forEach(function(record) {
					store.remove(record);
				});
				store.sync();
			}
		});
	}
	
});