goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35397){
var map__35398 = p__35397;
var map__35398__$1 = cljs.core.__destructure_map(map__35398);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__35399_35428 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35400_35429 = null;
var count__35401_35430 = (0);
var i__35402_35431 = (0);
while(true){
if((i__35402_35431 < count__35401_35430)){
var vec__35415_35432 = chunk__35400_35429.cljs$core$IIndexed$_nth$arity$2(null,i__35402_35431);
var k_35433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35415_35432,(0),null);
var cb_35434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35415_35432,(1),null);
try{var G__35419_35435 = cljs.core.deref(re_frame.trace.traces);
(cb_35434.cljs$core$IFn$_invoke$arity$1 ? cb_35434.cljs$core$IFn$_invoke$arity$1(G__35419_35435) : cb_35434.call(null,G__35419_35435));
}catch (e35418){var e_35436 = e35418;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35433,"while storing",cljs.core.deref(re_frame.trace.traces),e_35436], 0));
}

var G__35437 = seq__35399_35428;
var G__35438 = chunk__35400_35429;
var G__35439 = count__35401_35430;
var G__35440 = (i__35402_35431 + (1));
seq__35399_35428 = G__35437;
chunk__35400_35429 = G__35438;
count__35401_35430 = G__35439;
i__35402_35431 = G__35440;
continue;
} else {
var temp__5753__auto___35441 = cljs.core.seq(seq__35399_35428);
if(temp__5753__auto___35441){
var seq__35399_35442__$1 = temp__5753__auto___35441;
if(cljs.core.chunked_seq_QMARK_(seq__35399_35442__$1)){
var c__4649__auto___35443 = cljs.core.chunk_first(seq__35399_35442__$1);
var G__35444 = cljs.core.chunk_rest(seq__35399_35442__$1);
var G__35445 = c__4649__auto___35443;
var G__35446 = cljs.core.count(c__4649__auto___35443);
var G__35447 = (0);
seq__35399_35428 = G__35444;
chunk__35400_35429 = G__35445;
count__35401_35430 = G__35446;
i__35402_35431 = G__35447;
continue;
} else {
var vec__35420_35448 = cljs.core.first(seq__35399_35442__$1);
var k_35449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35420_35448,(0),null);
var cb_35450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35420_35448,(1),null);
try{var G__35424_35451 = cljs.core.deref(re_frame.trace.traces);
(cb_35450.cljs$core$IFn$_invoke$arity$1 ? cb_35450.cljs$core$IFn$_invoke$arity$1(G__35424_35451) : cb_35450.call(null,G__35424_35451));
}catch (e35423){var e_35452 = e35423;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35449,"while storing",cljs.core.deref(re_frame.trace.traces),e_35452], 0));
}

var G__35460 = cljs.core.next(seq__35399_35442__$1);
var G__35461 = null;
var G__35462 = (0);
var G__35463 = (0);
seq__35399_35428 = G__35460;
chunk__35400_35429 = G__35461;
count__35401_35430 = G__35462;
i__35402_35431 = G__35463;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
