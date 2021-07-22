goog.provide('day8.re_frame_10x.fx.local_storage');
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e35553){if((e35553 instanceof Error)){
var _ = e35553;
return (new goog.testing.storage.FakeMechanism());
} else {
throw e35553;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){

return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(var_args){
var G__35555 = arguments.length;
switch (G__35555) {
case 1:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.fx.local_storage.load.cljs$lang$maxFixedArity = 2);

day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e35558){if((e35558 instanceof Error)){
var _ = e35558;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e35558;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__35561 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__35562 = null;
var count__35563 = (0);
var i__35564 = (0);
while(true){
if((i__35564 < count__35563)){
var k = chunk__35562.cljs$core$IIndexed$_nth$arity$2(null,i__35564);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__35601 = seq__35561;
var G__35602 = chunk__35562;
var G__35603 = count__35563;
var G__35604 = (i__35564 + (1));
seq__35561 = G__35601;
chunk__35562 = G__35602;
count__35563 = G__35603;
i__35564 = G__35604;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35561);
if(temp__5753__auto__){
var seq__35561__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35561__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35561__$1);
var G__35605 = cljs.core.chunk_rest(seq__35561__$1);
var G__35606 = c__4649__auto__;
var G__35607 = cljs.core.count(c__4649__auto__);
var G__35608 = (0);
seq__35561 = G__35605;
chunk__35562 = G__35606;
count__35563 = G__35607;
i__35564 = G__35608;
continue;
} else {
var k = cljs.core.first(seq__35561__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__35609 = cljs.core.next(seq__35561__$1);
var G__35610 = null;
var G__35611 = (0);
var G__35612 = (0);
seq__35561 = G__35609;
chunk__35562 = G__35610;
count__35563 = G__35611;
i__35564 = G__35612;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__35580 = arguments.length;
switch (G__35580) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___35616 = arguments.length;
var i__4830__auto___35617 = (0);
while(true){
if((i__4830__auto___35617 < len__4829__auto___35616)){
args_arr__4850__auto__.push((arguments[i__4830__auto___35617]));

var G__35618 = (i__4830__auto___35617 + (1));
i__4830__auto___35617 = G__35618;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((1)),(0),null));
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4851__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0)));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq35575){
var G__35576 = cljs.core.first(seq35575);
var seq35575__$1 = cljs.core.next(seq35575);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35576,seq35575__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__35588){
var map__35589 = p__35588;
var map__35589__$1 = cljs.core.__destructure_map(map__35589);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"or","or",235744169));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),day8.re_frame_10x.fx.local_storage.load.cljs$core$IFn$_invoke$arity$2(key,or));
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
