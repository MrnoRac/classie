goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35785 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35786 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35786);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35892 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35892)){
var new_db_35893 = temp__5753__auto___35892;
var fexpr__35789_35894 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35789_35894.cljs$core$IFn$_invoke$arity$1 ? fexpr__35789_35894.cljs$core$IFn$_invoke$arity$1(new_db_35893) : fexpr__35789_35894.call(null,new_db_35893));
} else {
}

var seq__35791 = cljs.core.seq(effects_without_db);
var chunk__35792 = null;
var count__35793 = (0);
var i__35794 = (0);
while(true){
if((i__35794 < count__35793)){
var vec__35811 = chunk__35792.cljs$core$IIndexed$_nth$arity$2(null,i__35794);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35811,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35811,(1),null);
var temp__5751__auto___35895 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35895)){
var effect_fn_35896 = temp__5751__auto___35895;
(effect_fn_35896.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35896.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35896.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35897 = seq__35791;
var G__35898 = chunk__35792;
var G__35899 = count__35793;
var G__35900 = (i__35794 + (1));
seq__35791 = G__35897;
chunk__35792 = G__35898;
count__35793 = G__35899;
i__35794 = G__35900;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35791);
if(temp__5753__auto__){
var seq__35791__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35791__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35791__$1);
var G__35901 = cljs.core.chunk_rest(seq__35791__$1);
var G__35902 = c__4649__auto__;
var G__35903 = cljs.core.count(c__4649__auto__);
var G__35904 = (0);
seq__35791 = G__35901;
chunk__35792 = G__35902;
count__35793 = G__35903;
i__35794 = G__35904;
continue;
} else {
var vec__35818 = cljs.core.first(seq__35791__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35818,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35818,(1),null);
var temp__5751__auto___35905 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35905)){
var effect_fn_35906 = temp__5751__auto___35905;
(effect_fn_35906.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35906.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35906.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35907 = cljs.core.next(seq__35791__$1);
var G__35908 = null;
var G__35909 = (0);
var G__35910 = (0);
seq__35791 = G__35907;
chunk__35792 = G__35908;
count__35793 = G__35909;
i__35794 = G__35910;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35373__auto___35911 = re_frame.interop.now();
var duration__35374__auto___35912 = (end__35373__auto___35911 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35374__auto___35912,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35373__auto___35911);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35785);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35913 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35913)){
var new_db_35914 = temp__5753__auto___35913;
var fexpr__35821_35915 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35821_35915.cljs$core$IFn$_invoke$arity$1 ? fexpr__35821_35915.cljs$core$IFn$_invoke$arity$1(new_db_35914) : fexpr__35821_35915.call(null,new_db_35914));
} else {
}

var seq__35822 = cljs.core.seq(effects_without_db);
var chunk__35823 = null;
var count__35824 = (0);
var i__35825 = (0);
while(true){
if((i__35825 < count__35824)){
var vec__35835 = chunk__35823.cljs$core$IIndexed$_nth$arity$2(null,i__35825);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35835,(1),null);
var temp__5751__auto___35916 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35916)){
var effect_fn_35917 = temp__5751__auto___35916;
(effect_fn_35917.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35917.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35917.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35918 = seq__35822;
var G__35919 = chunk__35823;
var G__35920 = count__35824;
var G__35921 = (i__35825 + (1));
seq__35822 = G__35918;
chunk__35823 = G__35919;
count__35824 = G__35920;
i__35825 = G__35921;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35822);
if(temp__5753__auto__){
var seq__35822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35822__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35822__$1);
var G__35922 = cljs.core.chunk_rest(seq__35822__$1);
var G__35923 = c__4649__auto__;
var G__35924 = cljs.core.count(c__4649__auto__);
var G__35925 = (0);
seq__35822 = G__35922;
chunk__35823 = G__35923;
count__35824 = G__35924;
i__35825 = G__35925;
continue;
} else {
var vec__35839 = cljs.core.first(seq__35822__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35839,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35839,(1),null);
var temp__5751__auto___35926 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35926)){
var effect_fn_35927 = temp__5751__auto___35926;
(effect_fn_35927.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35927.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35927.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35928 = cljs.core.next(seq__35822__$1);
var G__35929 = null;
var G__35930 = (0);
var G__35931 = (0);
seq__35822 = G__35928;
chunk__35823 = G__35929;
count__35824 = G__35930;
i__35825 = G__35931;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35854){
var map__35855 = p__35854;
var map__35855__$1 = cljs.core.__destructure_map(map__35855);
var effect = map__35855__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35856 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35857 = null;
var count__35858 = (0);
var i__35859 = (0);
while(true){
if((i__35859 < count__35858)){
var effect = chunk__35857.cljs$core$IIndexed$_nth$arity$2(null,i__35859);
re_frame.fx.dispatch_later(effect);


var G__35933 = seq__35856;
var G__35934 = chunk__35857;
var G__35935 = count__35858;
var G__35936 = (i__35859 + (1));
seq__35856 = G__35933;
chunk__35857 = G__35934;
count__35858 = G__35935;
i__35859 = G__35936;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35856);
if(temp__5753__auto__){
var seq__35856__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35856__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35856__$1);
var G__35938 = cljs.core.chunk_rest(seq__35856__$1);
var G__35939 = c__4649__auto__;
var G__35940 = cljs.core.count(c__4649__auto__);
var G__35941 = (0);
seq__35856 = G__35938;
chunk__35857 = G__35939;
count__35858 = G__35940;
i__35859 = G__35941;
continue;
} else {
var effect = cljs.core.first(seq__35856__$1);
re_frame.fx.dispatch_later(effect);


var G__35942 = cljs.core.next(seq__35856__$1);
var G__35943 = null;
var G__35944 = (0);
var G__35945 = (0);
seq__35856 = G__35942;
chunk__35857 = G__35943;
count__35858 = G__35944;
i__35859 = G__35945;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35860 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35861 = null;
var count__35862 = (0);
var i__35863 = (0);
while(true){
if((i__35863 < count__35862)){
var vec__35878 = chunk__35861.cljs$core$IIndexed$_nth$arity$2(null,i__35863);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35878,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35878,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35946 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35946)){
var effect_fn_35947 = temp__5751__auto___35946;
(effect_fn_35947.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35947.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35947.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35948 = seq__35860;
var G__35949 = chunk__35861;
var G__35950 = count__35862;
var G__35951 = (i__35863 + (1));
seq__35860 = G__35948;
chunk__35861 = G__35949;
count__35862 = G__35950;
i__35863 = G__35951;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35860);
if(temp__5753__auto__){
var seq__35860__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35860__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35860__$1);
var G__35952 = cljs.core.chunk_rest(seq__35860__$1);
var G__35953 = c__4649__auto__;
var G__35954 = cljs.core.count(c__4649__auto__);
var G__35955 = (0);
seq__35860 = G__35952;
chunk__35861 = G__35953;
count__35862 = G__35954;
i__35863 = G__35955;
continue;
} else {
var vec__35881 = cljs.core.first(seq__35860__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35881,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35881,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35957 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35957)){
var effect_fn_35958 = temp__5751__auto___35957;
(effect_fn_35958.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35958.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35958.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35959 = cljs.core.next(seq__35860__$1);
var G__35960 = null;
var G__35961 = (0);
var G__35962 = (0);
seq__35860 = G__35959;
chunk__35861 = G__35960;
count__35862 = G__35961;
i__35863 = G__35962;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35884 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35885 = null;
var count__35886 = (0);
var i__35887 = (0);
while(true){
if((i__35887 < count__35886)){
var event = chunk__35885.cljs$core$IIndexed$_nth$arity$2(null,i__35887);
re_frame.router.dispatch(event);


var G__35963 = seq__35884;
var G__35964 = chunk__35885;
var G__35965 = count__35886;
var G__35966 = (i__35887 + (1));
seq__35884 = G__35963;
chunk__35885 = G__35964;
count__35886 = G__35965;
i__35887 = G__35966;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35884);
if(temp__5753__auto__){
var seq__35884__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35884__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35884__$1);
var G__35967 = cljs.core.chunk_rest(seq__35884__$1);
var G__35969 = c__4649__auto__;
var G__35970 = cljs.core.count(c__4649__auto__);
var G__35971 = (0);
seq__35884 = G__35967;
chunk__35885 = G__35969;
count__35886 = G__35970;
i__35887 = G__35971;
continue;
} else {
var event = cljs.core.first(seq__35884__$1);
re_frame.router.dispatch(event);


var G__35972 = cljs.core.next(seq__35884__$1);
var G__35973 = null;
var G__35974 = (0);
var G__35975 = (0);
seq__35884 = G__35972;
chunk__35885 = G__35973;
count__35886 = G__35974;
i__35887 = G__35975;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35888 = cljs.core.seq(value);
var chunk__35889 = null;
var count__35890 = (0);
var i__35891 = (0);
while(true){
if((i__35891 < count__35890)){
var event = chunk__35889.cljs$core$IIndexed$_nth$arity$2(null,i__35891);
clear_event(event);


var G__35976 = seq__35888;
var G__35977 = chunk__35889;
var G__35978 = count__35890;
var G__35979 = (i__35891 + (1));
seq__35888 = G__35976;
chunk__35889 = G__35977;
count__35890 = G__35978;
i__35891 = G__35979;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35888);
if(temp__5753__auto__){
var seq__35888__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35888__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35888__$1);
var G__35980 = cljs.core.chunk_rest(seq__35888__$1);
var G__35981 = c__4649__auto__;
var G__35982 = cljs.core.count(c__4649__auto__);
var G__35983 = (0);
seq__35888 = G__35980;
chunk__35889 = G__35981;
count__35890 = G__35982;
i__35891 = G__35983;
continue;
} else {
var event = cljs.core.first(seq__35888__$1);
clear_event(event);


var G__35984 = cljs.core.next(seq__35888__$1);
var G__35985 = null;
var G__35986 = (0);
var G__35987 = (0);
seq__35888 = G__35984;
chunk__35889 = G__35985;
count__35890 = G__35986;
i__35891 = G__35987;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
