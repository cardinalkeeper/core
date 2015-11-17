Ext.data.JsonP.Cardinalkeeper_library_view_gridtab_Grid({"tagname":"class","name":"Cardinalkeeper.library.view.gridtab.Grid","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Grid.js","href":null}],"aliases":{},"alternateClassNames":[],"extends":"Ext.grid.Panel","mixins":[],"requires":["Cardinalkeeper.library.view.gridtab.ContextMenu","Cardinalkeeper.library.view.gridtab.Dialog","Cardinalkeeper.library.view.gridtab.GridController","Cardinalkeeper.library.view.gridtab.GridModel"],"uses":[],"members":[{"name":"bbar","tagname":"property","owner":"Cardinalkeeper.library.view.gridtab.Grid","id":"property-bbar","meta":{"private":true}},{"name":"bind","tagname":"property","owner":"Cardinalkeeper.library.view.gridtab.Grid","id":"property-bind","meta":{"private":true}},{"name":"controller","tagname":"property","owner":"Cardinalkeeper.library.view.gridtab.Grid","id":"property-controller","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"Cardinalkeeper.library.view.gridtab.Grid","id":"property-listeners","meta":{"private":true}},{"name":"selModel","tagname":"property","owner":"Cardinalkeeper.library.view.gridtab.Grid","id":"property-selModel","meta":{"private":true}},{"name":"subViews","tagname":"property","owner":"Cardinalkeeper.library.view.gridtab.Grid","id":"property-subViews","meta":{"private":true}},{"name":"viewModel","tagname":"property","owner":"Cardinalkeeper.library.view.gridtab.Grid","id":"property-viewModel","meta":{"private":true}}],"code_type":"ext_define","id":"class-Cardinalkeeper.library.view.gridtab.Grid","component":false,"superclasses":["Ext.grid.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.Panel<div class='subclass '><strong>Cardinalkeeper.library.view.gridtab.Grid</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Cardinalkeeper.library.view.gridtab.ContextMenu' rel='Cardinalkeeper.library.view.gridtab.ContextMenu' class='docClass'>Cardinalkeeper.library.view.gridtab.ContextMenu</a></div><div class='dependency'><a href='#!/api/Cardinalkeeper.library.view.gridtab.Dialog' rel='Cardinalkeeper.library.view.gridtab.Dialog' class='docClass'>Cardinalkeeper.library.view.gridtab.Dialog</a></div><div class='dependency'><a href='#!/api/Cardinalkeeper.library.view.gridtab.GridController' rel='Cardinalkeeper.library.view.gridtab.GridController' class='docClass'>Cardinalkeeper.library.view.gridtab.GridController</a></div><div class='dependency'><a href='#!/api/Cardinalkeeper.library.view.gridtab.GridModel' rel='Cardinalkeeper.library.view.gridtab.GridModel' class='docClass'>Cardinalkeeper.library.view.gridtab.GridModel</a></div></pre><div class='doc-contents'><p>Базовый класс вкладки с таблицей.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bbar' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Cardinalkeeper.library.view.gridtab.Grid'>Cardinalkeeper.library.view.gridtab.Grid</span><br/></div><a href='#!/api/Cardinalkeeper.library.view.gridtab.Grid-property-bbar' class='name expandable'>bbar</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{xtype: &quot;pagingtoolbar&quot;, displayInfo: true, bind: {store: &quot;{gridStore}&quot;}}</code></p></div></div></div><div id='property-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Cardinalkeeper.library.view.gridtab.Grid'>Cardinalkeeper.library.view.gridtab.Grid</span><br/></div><a href='#!/api/Cardinalkeeper.library.view.gridtab.Grid-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{title: &quot;{title}&quot;, store: &quot;{gridStore}&quot;}</code></p></div></div></div><div id='property-controller' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Cardinalkeeper.library.view.gridtab.Grid'>Cardinalkeeper.library.view.gridtab.Grid</span><br/></div><a href='#!/api/Cardinalkeeper.library.view.gridtab.Grid-property-controller' class='name expandable'>controller</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;gridtab&quot;</code></p></div></div></div><div id='property-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Cardinalkeeper.library.view.gridtab.Grid'>Cardinalkeeper.library.view.gridtab.Grid</span><br/></div><a href='#!/api/Cardinalkeeper.library.view.gridtab.Grid-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{itemcontextmenu: &quot;onItemContextMenu&quot;, containercontextmenu: &quot;onContainerContextMenu&quot;, containerclick: &quot;onContainerClick&quot;}</code></p></div></div></div><div id='property-selModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Cardinalkeeper.library.view.gridtab.Grid'>Cardinalkeeper.library.view.gridtab.Grid</span><br/></div><a href='#!/api/Cardinalkeeper.library.view.gridtab.Grid-property-selModel' class='name expandable'>selModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{mode: &quot;multi&quot;}</code></p></div></div></div><div id='property-subViews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Cardinalkeeper.library.view.gridtab.Grid'>Cardinalkeeper.library.view.gridtab.Grid</span><br/></div><a href='#!/api/Cardinalkeeper.library.view.gridtab.Grid-property-subViews' class='name expandable'>subViews</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{form: null, dialog: null, contextMenu: null}</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Cardinalkeeper.library.view.gridtab.Grid'>Cardinalkeeper.library.view.gridtab.Grid</span><br/></div><a href='#!/api/Cardinalkeeper.library.view.gridtab.Grid-property-viewModel' class='name expandable'>viewModel</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;gridtab&quot;</code></p></div></div></div></div></div></div></div>","meta":{}});