goog.provide('classie.core');
classie.core.dev_setup = (function classie$core$dev_setup(){
if(classie.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
classie.core.mount_root = (function classie$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classie.views.main_panel], null),root_el);
});
classie.core.init = (function classie$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("classie.events","initialize-db","classie.events/initialize-db",-2145517303)], null));

classie.core.dev_setup();

return classie.core.mount_root();
});

//# sourceMappingURL=classie.core.js.map
