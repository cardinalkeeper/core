
/* global Ext */

Ext.application({
    
    name: 'Cardinalkeeper',

    extend: 'Cardinalkeeper.Application',

    requires: [
        'Cardinalkeeper.view.main.Main'
    ],

    mainView: 'Cardinalkeeper.view.main.Main'
	
});