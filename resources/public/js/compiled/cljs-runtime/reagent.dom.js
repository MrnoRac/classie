goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37138 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37139 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37139);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37145 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37146 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37146);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37145);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37138);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37153 = arguments.length;
switch (G__37153) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37162 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37162,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37162,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37168_37226 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37169_37227 = null;
var count__37170_37228 = (0);
var i__37171_37229 = (0);
while(true){
if((i__37171_37229 < count__37170_37228)){
var vec__37209_37230 = chunk__37169_37227.cljs$core$IIndexed$_nth$arity$2(null,i__37171_37229);
var container_37231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209_37230,(0),null);
var comp_37232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37209_37230,(1),null);
reagent.dom.re_render_component(comp_37232,container_37231);


var G__37233 = seq__37168_37226;
var G__37234 = chunk__37169_37227;
var G__37235 = count__37170_37228;
var G__37236 = (i__37171_37229 + (1));
seq__37168_37226 = G__37233;
chunk__37169_37227 = G__37234;
count__37170_37228 = G__37235;
i__37171_37229 = G__37236;
continue;
} else {
var temp__5753__auto___37239 = cljs.core.seq(seq__37168_37226);
if(temp__5753__auto___37239){
var seq__37168_37240__$1 = temp__5753__auto___37239;
if(cljs.core.chunked_seq_QMARK_(seq__37168_37240__$1)){
var c__4649__auto___37242 = cljs.core.chunk_first(seq__37168_37240__$1);
var G__37243 = cljs.core.chunk_rest(seq__37168_37240__$1);
var G__37244 = c__4649__auto___37242;
var G__37245 = cljs.core.count(c__4649__auto___37242);
var G__37246 = (0);
seq__37168_37226 = G__37243;
chunk__37169_37227 = G__37244;
count__37170_37228 = G__37245;
i__37171_37229 = G__37246;
continue;
} else {
var vec__37219_37247 = cljs.core.first(seq__37168_37240__$1);
var container_37248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219_37247,(0),null);
var comp_37249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219_37247,(1),null);
reagent.dom.re_render_component(comp_37249,container_37248);


var G__37250 = cljs.core.next(seq__37168_37240__$1);
var G__37251 = null;
var G__37252 = (0);
var G__37253 = (0);
seq__37168_37226 = G__37250;
chunk__37169_37227 = G__37251;
count__37170_37228 = G__37252;
i__37171_37229 = G__37253;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
