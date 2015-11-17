
/* global Ext, Cardinalkeeper */

/**
 * @class
 */

Ext.define("Cardinalkeeper.library.view.gridtab.Dialog", {
	
	extend: "Cardinalkeeper.library.view.window.Modal",
	
	requires: [
		"Cardinalkeeper.library.view.gridtab.DialogController",
		"Cardinalkeeper.library.view.gridtab.Form"
	],
	
	xtype: "gridtabdialog",
	
	controller: "gridtabdialog",
	
	viewModel: {
		data: {
			insertTitle: "Название формы не задано"
		},
		formulas: {
			ok: function(get) {
				return get("record").phantom ? "Добавить" : "Обновить";
			},
			okDisabled: function(get) {
				return !get("form.isDirty") || !get("form.isValid");
			},
			title: function(get) {
				return get("record").phantom ? get("insertTitle") : get("updateTitle");
			},
			updateTitle: function(get) {
				return get("insertTitle");
			}
		}
	},
	
	listeners: {
		beforeshow: "onBeforeShow"
	},
	
	bind: "{title}",

	buttons: [{
		text: "Ок",
		handler: "onSubmit",
		bind: {
			text: "{ok}",
			disabled: "{okDisabled}"
			//disabled: "{form.submitDisabled}"
			//disabled: "{!form.isDirty || !form.isValid}" // TODO потом выяснить, почему не оказывает действия! http://javascript.ru/forum/showthread.php?p=374642#post374642
			//disabled: "{!form.isDirty}"
		}
	}, {
		text: "Отмена",
		handler: function() {
			this.up("window").close();
		}
	}],
	
	getForm: function() {
		return this.lookupReference("form");
	},
	
	onBeforeAdd: function(component) {
		if (component instanceof Cardinalkeeper.view.base.tab.gridtab.Form) {
			component.setReference("form");
		}
	}
	
});