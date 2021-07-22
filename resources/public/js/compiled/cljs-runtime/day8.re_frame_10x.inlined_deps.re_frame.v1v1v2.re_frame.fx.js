goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32391 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32392 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32392);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32542 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32542)){
var new_db_32543 = temp__5753__auto___32542;
var fexpr__32396_32544 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32396_32544.cljs$core$IFn$_invoke$arity$1 ? fexpr__32396_32544.cljs$core$IFn$_invoke$arity$1(new_db_32543) : fexpr__32396_32544.call(null,new_db_32543));
} else {
}

var seq__32397 = cljs.core.seq(effects_without_db);
var chunk__32398 = null;
var count__32399 = (0);
var i__32400 = (0);
while(true){
if((i__32400 < count__32399)){
var vec__32414 = chunk__32398.cljs$core$IIndexed$_nth$arity$2(null,i__32400);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32414,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32414,(1),null);
var temp__5751__auto___32546 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32546)){
var effect_fn_32547 = temp__5751__auto___32546;
(effect_fn_32547.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32547.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32547.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32550 = seq__32397;
var G__32551 = chunk__32398;
var G__32552 = count__32399;
var G__32553 = (i__32400 + (1));
seq__32397 = G__32550;
chunk__32398 = G__32551;
count__32399 = G__32552;
i__32400 = G__32553;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32397);
if(temp__5753__auto__){
var seq__32397__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32397__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32397__$1);
var G__32554 = cljs.core.chunk_rest(seq__32397__$1);
var G__32555 = c__4649__auto__;
var G__32556 = cljs.core.count(c__4649__auto__);
var G__32557 = (0);
seq__32397 = G__32554;
chunk__32398 = G__32555;
count__32399 = G__32556;
i__32400 = G__32557;
continue;
} else {
var vec__32418 = cljs.core.first(seq__32397__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32418,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32418,(1),null);
var temp__5751__auto___32605 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32605)){
var effect_fn_32606 = temp__5751__auto___32605;
(effect_fn_32606.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32606.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32606.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32607 = cljs.core.next(seq__32397__$1);
var G__32608 = null;
var G__32609 = (0);
var G__32610 = (0);
seq__32397 = G__32607;
chunk__32398 = G__32608;
count__32399 = G__32609;
i__32400 = G__32610;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32043__auto___32611 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32044__auto___32612 = (end__32043__auto___32611 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32044__auto___32612,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32043__auto___32611);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32391);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32614 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32614)){
var new_db_32616 = temp__5753__auto___32614;
var fexpr__32433_32617 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32433_32617.cljs$core$IFn$_invoke$arity$1 ? fexpr__32433_32617.cljs$core$IFn$_invoke$arity$1(new_db_32616) : fexpr__32433_32617.call(null,new_db_32616));
} else {
}

var seq__32434 = cljs.core.seq(effects_without_db);
var chunk__32435 = null;
var count__32436 = (0);
var i__32437 = (0);
while(true){
if((i__32437 < count__32436)){
var vec__32448 = chunk__32435.cljs$core$IIndexed$_nth$arity$2(null,i__32437);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32448,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32448,(1),null);
var temp__5751__auto___32619 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32619)){
var effect_fn_32620 = temp__5751__auto___32619;
(effect_fn_32620.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32620.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32620.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32621 = seq__32434;
var G__32622 = chunk__32435;
var G__32623 = count__32436;
var G__32624 = (i__32437 + (1));
seq__32434 = G__32621;
chunk__32435 = G__32622;
count__32436 = G__32623;
i__32437 = G__32624;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32434);
if(temp__5753__auto__){
var seq__32434__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32434__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32434__$1);
var G__32626 = cljs.core.chunk_rest(seq__32434__$1);
var G__32627 = c__4649__auto__;
var G__32628 = cljs.core.count(c__4649__auto__);
var G__32629 = (0);
seq__32434 = G__32626;
chunk__32435 = G__32627;
count__32436 = G__32628;
i__32437 = G__32629;
continue;
} else {
var vec__32452 = cljs.core.first(seq__32434__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,(1),null);
var temp__5751__auto___32630 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32630)){
var effect_fn_32631 = temp__5751__auto___32630;
(effect_fn_32631.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32631.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32631.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32632 = cljs.core.next(seq__32434__$1);
var G__32633 = null;
var G__32634 = (0);
var G__32635 = (0);
seq__32434 = G__32632;
chunk__32435 = G__32633;
count__32436 = G__32634;
i__32437 = G__32635;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32455){
var map__32456 = p__32455;
var map__32456__$1 = cljs.core.__destructure_map(map__32456);
var effect = map__32456__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32456__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32456__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__32458 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32459 = null;
var count__32460 = (0);
var i__32461 = (0);
while(true){
if((i__32461 < count__32460)){
var effect = chunk__32459.cljs$core$IIndexed$_nth$arity$2(null,i__32461);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32646 = seq__32458;
var G__32647 = chunk__32459;
var G__32648 = count__32460;
var G__32649 = (i__32461 + (1));
seq__32458 = G__32646;
chunk__32459 = G__32647;
count__32460 = G__32648;
i__32461 = G__32649;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32458);
if(temp__5753__auto__){
var seq__32458__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32458__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32458__$1);
var G__32651 = cljs.core.chunk_rest(seq__32458__$1);
var G__32652 = c__4649__auto__;
var G__32653 = cljs.core.count(c__4649__auto__);
var G__32654 = (0);
seq__32458 = G__32651;
chunk__32459 = G__32652;
count__32460 = G__32653;
i__32461 = G__32654;
continue;
} else {
var effect = cljs.core.first(seq__32458__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32655 = cljs.core.next(seq__32458__$1);
var G__32656 = null;
var G__32657 = (0);
var G__32658 = (0);
seq__32458 = G__32655;
chunk__32459 = G__32656;
count__32460 = G__32657;
i__32461 = G__32658;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32484 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32485 = null;
var count__32486 = (0);
var i__32487 = (0);
while(true){
if((i__32487 < count__32486)){
var vec__32507 = chunk__32485.cljs$core$IIndexed$_nth$arity$2(null,i__32487);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32507,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32662 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32662)){
var effect_fn_32663 = temp__5751__auto___32662;
(effect_fn_32663.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32663.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32663.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32664 = seq__32484;
var G__32665 = chunk__32485;
var G__32666 = count__32486;
var G__32667 = (i__32487 + (1));
seq__32484 = G__32664;
chunk__32485 = G__32665;
count__32486 = G__32666;
i__32487 = G__32667;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32484);
if(temp__5753__auto__){
var seq__32484__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32484__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32484__$1);
var G__32668 = cljs.core.chunk_rest(seq__32484__$1);
var G__32669 = c__4649__auto__;
var G__32670 = cljs.core.count(c__4649__auto__);
var G__32671 = (0);
seq__32484 = G__32668;
chunk__32485 = G__32669;
count__32486 = G__32670;
i__32487 = G__32671;
continue;
} else {
var vec__32514 = cljs.core.first(seq__32484__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32514,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32514,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32675 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32675)){
var effect_fn_32676 = temp__5751__auto___32675;
(effect_fn_32676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32676.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32677 = cljs.core.next(seq__32484__$1);
var G__32678 = null;
var G__32679 = (0);
var G__32680 = (0);
seq__32484 = G__32677;
chunk__32485 = G__32678;
count__32486 = G__32679;
i__32487 = G__32680;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32517 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32518 = null;
var count__32519 = (0);
var i__32520 = (0);
while(true){
if((i__32520 < count__32519)){
var event = chunk__32518.cljs$core$IIndexed$_nth$arity$2(null,i__32520);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32681 = seq__32517;
var G__32682 = chunk__32518;
var G__32683 = count__32519;
var G__32684 = (i__32520 + (1));
seq__32517 = G__32681;
chunk__32518 = G__32682;
count__32519 = G__32683;
i__32520 = G__32684;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32517);
if(temp__5753__auto__){
var seq__32517__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32517__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32517__$1);
var G__32686 = cljs.core.chunk_rest(seq__32517__$1);
var G__32687 = c__4649__auto__;
var G__32688 = cljs.core.count(c__4649__auto__);
var G__32689 = (0);
seq__32517 = G__32686;
chunk__32518 = G__32687;
count__32519 = G__32688;
i__32520 = G__32689;
continue;
} else {
var event = cljs.core.first(seq__32517__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32690 = cljs.core.next(seq__32517__$1);
var G__32691 = null;
var G__32692 = (0);
var G__32693 = (0);
seq__32517 = G__32690;
chunk__32518 = G__32691;
count__32519 = G__32692;
i__32520 = G__32693;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32525 = cljs.core.seq(value);
var chunk__32526 = null;
var count__32527 = (0);
var i__32528 = (0);
while(true){
if((i__32528 < count__32527)){
var event = chunk__32526.cljs$core$IIndexed$_nth$arity$2(null,i__32528);
clear_event(event);


var G__32696 = seq__32525;
var G__32697 = chunk__32526;
var G__32698 = count__32527;
var G__32699 = (i__32528 + (1));
seq__32525 = G__32696;
chunk__32526 = G__32697;
count__32527 = G__32698;
i__32528 = G__32699;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32525);
if(temp__5753__auto__){
var seq__32525__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32525__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32525__$1);
var G__32700 = cljs.core.chunk_rest(seq__32525__$1);
var G__32701 = c__4649__auto__;
var G__32702 = cljs.core.count(c__4649__auto__);
var G__32703 = (0);
seq__32525 = G__32700;
chunk__32526 = G__32701;
count__32527 = G__32702;
i__32528 = G__32703;
continue;
} else {
var event = cljs.core.first(seq__32525__$1);
clear_event(event);


var G__32706 = cljs.core.next(seq__32525__$1);
var G__32707 = null;
var G__32708 = (0);
var G__32709 = (0);
seq__32525 = G__32706;
chunk__32526 = G__32707;
count__32527 = G__32708;
i__32528 = G__32709;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
