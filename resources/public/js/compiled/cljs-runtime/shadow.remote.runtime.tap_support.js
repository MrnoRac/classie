goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44421,p__44422){
var map__44423 = p__44421;
var map__44423__$1 = cljs.core.__destructure_map(map__44423);
var svc = map__44423__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44423__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44423__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44423__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44424 = p__44422;
var map__44424__$1 = cljs.core.__destructure_map(map__44424);
var msg = map__44424__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44424__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44424__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44424__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44424__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44432,p__44433){
var map__44434 = p__44432;
var map__44434__$1 = cljs.core.__destructure_map(map__44434);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44434__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44435 = p__44433;
var map__44435__$1 = cljs.core.__destructure_map(map__44435);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44435__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44439,p__44440){
var map__44441 = p__44439;
var map__44441__$1 = cljs.core.__destructure_map(map__44441);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44441__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44442 = p__44440;
var map__44442__$1 = cljs.core.__destructure_map(map__44442);
var msg = map__44442__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44442__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44444,tid){
var map__44445 = p__44444;
var map__44445__$1 = cljs.core.__destructure_map(map__44445);
var svc = map__44445__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44445__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44455 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44456 = null;
var count__44457 = (0);
var i__44458 = (0);
while(true){
if((i__44458 < count__44457)){
var vec__44473 = chunk__44456.cljs$core$IIndexed$_nth$arity$2(null,i__44458);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44473,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44473,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44503 = seq__44455;
var G__44504 = chunk__44456;
var G__44505 = count__44457;
var G__44506 = (i__44458 + (1));
seq__44455 = G__44503;
chunk__44456 = G__44504;
count__44457 = G__44505;
i__44458 = G__44506;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44455);
if(temp__5753__auto__){
var seq__44455__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44455__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44455__$1);
var G__44510 = cljs.core.chunk_rest(seq__44455__$1);
var G__44511 = c__4649__auto__;
var G__44512 = cljs.core.count(c__4649__auto__);
var G__44513 = (0);
seq__44455 = G__44510;
chunk__44456 = G__44511;
count__44457 = G__44512;
i__44458 = G__44513;
continue;
} else {
var vec__44476 = cljs.core.first(seq__44455__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44476,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44476,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44522 = cljs.core.next(seq__44455__$1);
var G__44523 = null;
var G__44524 = (0);
var G__44525 = (0);
seq__44455 = G__44522;
chunk__44456 = G__44523;
count__44457 = G__44524;
i__44458 = G__44525;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44446_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44446_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44449_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44449_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44450_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44450_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44451_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44451_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44479){
var map__44480 = p__44479;
var map__44480__$1 = cljs.core.__destructure_map(map__44480);
var svc = map__44480__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44480__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44480__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
