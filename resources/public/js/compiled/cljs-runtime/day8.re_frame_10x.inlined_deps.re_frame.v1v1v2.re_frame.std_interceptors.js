goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.debug = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$debug_before(context){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling re-frame event:",day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], 0));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$debug_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors/not-found",-713204725));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors/not-found",-713204725))){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes in:",event], 0));
} else {
var vec__32219_32480 = clojure.data.diff(orig_db,new_db);
var only_before_32481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219_32480,(0),null);
var only_after_32482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219_32480,(1),null);
var db_changed_QMARK__32483 = (((!((only_before_32481 == null)))) || ((!((only_after_32482 == null)))));
if(db_changed_QMARK__32483){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db clojure.data/diff for:",event], 0));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:",only_before_32481], 0));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :",only_after_32482], 0));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes resulted from:",event], 0));
}
}

return context;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.unwrap = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$unwrap_before(context){
var vec__32312 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(1),null);
var event = vec__32312;
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(event))) && (cljs.core.map_QMARK_(payload)))))){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"unwrap\" interceptor requires event to be a 2-vector of [event-id payload-map]. Got ",event], 0));

return context;
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_coeffect(context,new cljs.core.Keyword(null,"event","event",301435442),payload);
}
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$unwrap_after(context){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_coeffect(context,new cljs.core.Keyword(null,"event","event",301435442),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$trim_v_before(context){
if((!(cljs.core.vector_QMARK_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442)))))){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"trim-v\" interceptor expected event to be a vector. Got a ",cljs.core.type(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442)))], 0));

return context;
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.subvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
}
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$trim_v_after(context){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_coeffect(context,new cljs.core.Keyword(null,"event","event",301435442),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403)));
})], 0));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.db_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__32327 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32328 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32328);

try{try{var map__32329 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__32329__$1 = cljs.core.__destructure_map(map__32329);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32329__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32329__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32043__auto___32494 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32044__auto___32495 = (end__32043__auto___32494 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32044__auto___32495,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32043__auto___32494);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32327);
}})():(function (){var map__32330 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__32330__$1 = cljs.core.__destructure_map(map__32330);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
})());
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__32045__auto___32499 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__32045__auto___32499);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.fx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__32335 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32336 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32336);

try{try{var map__32337 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__32337__$1 = cljs.core.__destructure_map(map__32337);
var coeffects = map__32337__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32337__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32043__auto___32536 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32044__auto___32537 = (end__32043__auto___32536 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32044__auto___32537,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32043__auto___32536);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32335);
}})():(function (){var map__32338 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__32338__$1 = cljs.core.__destructure_map(map__32338);
var coeffects = map__32338__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32338__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
})());
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__32045__auto___32541 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__32045__auto___32541);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.ctx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__32344 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32345 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32345);

try{try{return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32043__auto___32558 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32044__auto___32559 = (end__32043__auto___32558 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32044__auto___32559,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32043__auto___32558);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32344);
}})():(handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context)));
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__32045__auto___32561 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__32045__auto___32561);

} else {
}

return new_context;
})], 0));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.path = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$path(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32566 = arguments.length;
var i__4830__auto___32567 = (0);
while(true){
if((i__4830__auto___32567 < len__4829__auto___32566)){
args__4835__auto__.push((arguments[i__4830__auto___32567]));

var G__32569 = (i__4830__auto___32567 + (1));
i__4830__auto___32567 = G__32569;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten(args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_(path)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"path\" interceptor given no params"], 0));
} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var original_db = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_coeffect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_db,path));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek(db_store);
var new_db_store = cljs.core.pop(db_store);
var context_SINGLEQUOTE_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors/not-found",-713204725));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.std-interceptors/not-found",-713204725))){
return context_SINGLEQUOTE_;
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_effect(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(original_db,path,db));
}
})], 0));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq32388){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32388));
}));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.enrich = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$enrich(f){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var db = ((cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event)));
})], 0));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.after = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$after(f){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
var event = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
})], 0));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.on_changes = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$on_changes(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32640 = arguments.length;
var i__4830__auto___32642 = (0);
while(true){
if((i__4830__auto___32642 < len__4829__auto___32640)){
args__4835__auto__.push((arguments[i__4830__auto___32642]));

var G__32643 = (i__4830__auto___32642 + (1));
i__4830__auto___32642 = G__32643;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$on_change_after(context){
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32406_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__32406_SHARP_);
}),in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32410_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,p1__32410_SHARP_);
}),in_paths);
var changed_ins_QMARK_ = (function (){var and__4221__auto__ = cljs.core.contains_QMARK_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(and__4221__auto__){
return cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(changed_ins_QMARK_)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins)));
} else {
return context;
}
})], 0));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq32411){
var G__32412 = cljs.core.first(seq32411);
var seq32411__$1 = cljs.core.next(seq32411);
var G__32413 = cljs.core.first(seq32411__$1);
var seq32411__$2 = cljs.core.next(seq32411__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32412,G__32413,seq32411__$2);
}));

/**
 * An interceptor which adds registered global interceptors to the context's queue.
 * 
 * NOTE: :queue is a Clojure.lang.PersistentQueue and not a vector.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.inject_global_interceptors = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inject-global-interceptors","inject-global-interceptors",-2144129737),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$std_interceptors$inject_global_interceptors_before(context){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (p1__32476_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.settings.get_global_interceptors(),p1__32476_SHARP_);
}));
})], 0));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.std_interceptors.js.map
