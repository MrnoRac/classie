goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48379 = arguments.length;
var i__4830__auto___48380 = (0);
while(true){
if((i__4830__auto___48380 < len__4829__auto___48379)){
args__4835__auto__.push((arguments[i__4830__auto___48380]));

var G__48381 = (i__4830__auto___48380 + (1));
i__4830__auto___48380 = G__48381;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48167){
var G__48168 = cljs.core.first(seq48167);
var seq48167__$1 = cljs.core.next(seq48167);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48168,seq48167__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48173 = cljs.core.seq(sources);
var chunk__48174 = null;
var count__48175 = (0);
var i__48176 = (0);
while(true){
if((i__48176 < count__48175)){
var map__48183 = chunk__48174.cljs$core$IIndexed$_nth$arity$2(null,i__48176);
var map__48183__$1 = cljs.core.__destructure_map(map__48183);
var src = map__48183__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48183__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48183__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48183__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48183__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48184){var e_48382 = e48184;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48382);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48382.message)].join('')));
}

var G__48383 = seq__48173;
var G__48384 = chunk__48174;
var G__48385 = count__48175;
var G__48386 = (i__48176 + (1));
seq__48173 = G__48383;
chunk__48174 = G__48384;
count__48175 = G__48385;
i__48176 = G__48386;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48173);
if(temp__5753__auto__){
var seq__48173__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48173__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48173__$1);
var G__48387 = cljs.core.chunk_rest(seq__48173__$1);
var G__48388 = c__4649__auto__;
var G__48389 = cljs.core.count(c__4649__auto__);
var G__48390 = (0);
seq__48173 = G__48387;
chunk__48174 = G__48388;
count__48175 = G__48389;
i__48176 = G__48390;
continue;
} else {
var map__48186 = cljs.core.first(seq__48173__$1);
var map__48186__$1 = cljs.core.__destructure_map(map__48186);
var src = map__48186__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48187){var e_48391 = e48187;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48391);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48391.message)].join('')));
}

var G__48392 = cljs.core.next(seq__48173__$1);
var G__48393 = null;
var G__48394 = (0);
var G__48395 = (0);
seq__48173 = G__48392;
chunk__48174 = G__48393;
count__48175 = G__48394;
i__48176 = G__48395;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48188 = cljs.core.seq(js_requires);
var chunk__48189 = null;
var count__48190 = (0);
var i__48191 = (0);
while(true){
if((i__48191 < count__48190)){
var js_ns = chunk__48189.cljs$core$IIndexed$_nth$arity$2(null,i__48191);
var require_str_48396 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48396);


var G__48397 = seq__48188;
var G__48398 = chunk__48189;
var G__48399 = count__48190;
var G__48400 = (i__48191 + (1));
seq__48188 = G__48397;
chunk__48189 = G__48398;
count__48190 = G__48399;
i__48191 = G__48400;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48188);
if(temp__5753__auto__){
var seq__48188__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48188__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48188__$1);
var G__48401 = cljs.core.chunk_rest(seq__48188__$1);
var G__48402 = c__4649__auto__;
var G__48403 = cljs.core.count(c__4649__auto__);
var G__48404 = (0);
seq__48188 = G__48401;
chunk__48189 = G__48402;
count__48190 = G__48403;
i__48191 = G__48404;
continue;
} else {
var js_ns = cljs.core.first(seq__48188__$1);
var require_str_48405 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48405);


var G__48406 = cljs.core.next(seq__48188__$1);
var G__48407 = null;
var G__48408 = (0);
var G__48409 = (0);
seq__48188 = G__48406;
chunk__48189 = G__48407;
count__48190 = G__48408;
i__48191 = G__48409;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48193){
var map__48194 = p__48193;
var map__48194__$1 = cljs.core.__destructure_map(map__48194);
var msg = map__48194__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48194__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48194__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196(s__48197){
return (new cljs.core.LazySeq(null,(function (){
var s__48197__$1 = s__48197;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48197__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__48204 = cljs.core.first(xs__6308__auto__);
var map__48204__$1 = cljs.core.__destructure_map(map__48204);
var src = map__48204__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48204__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48204__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__48197__$1,map__48204,map__48204__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48194,map__48194__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196_$_iter__48198(s__48199){
return (new cljs.core.LazySeq(null,((function (s__48197__$1,map__48204,map__48204__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48194,map__48194__$1,msg,info,reload_info){
return (function (){
var s__48199__$1 = s__48199;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48199__$1);
if(temp__5753__auto____$1){
var s__48199__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48199__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__48199__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__48201 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__48200 = (0);
while(true){
if((i__48200 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__48200);
cljs.core.chunk_append(b__48201,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48410 = (i__48200 + (1));
i__48200 = G__48410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48201),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196_$_iter__48198(cljs.core.chunk_rest(s__48199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48201),null);
}
} else {
var warning = cljs.core.first(s__48199__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196_$_iter__48198(cljs.core.rest(s__48199__$2)));
}
} else {
return null;
}
break;
}
});})(s__48197__$1,map__48204,map__48204__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48194,map__48194__$1,msg,info,reload_info))
,null,null));
});})(s__48197__$1,map__48204,map__48204__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__48194,map__48194__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196(cljs.core.rest(s__48197__$1)));
} else {
var G__48411 = cljs.core.rest(s__48197__$1);
s__48197__$1 = G__48411;
continue;
}
} else {
var G__48412 = cljs.core.rest(s__48197__$1);
s__48197__$1 = G__48412;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__48207_48413 = cljs.core.seq(warnings);
var chunk__48208_48414 = null;
var count__48209_48415 = (0);
var i__48210_48416 = (0);
while(true){
if((i__48210_48416 < count__48209_48415)){
var map__48217_48417 = chunk__48208_48414.cljs$core$IIndexed$_nth$arity$2(null,i__48210_48416);
var map__48217_48418__$1 = cljs.core.__destructure_map(map__48217_48417);
var w_48419 = map__48217_48418__$1;
var msg_48420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217_48418__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217_48418__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217_48418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48217_48418__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48423)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48421),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48422),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48420__$1)].join(''));


var G__48424 = seq__48207_48413;
var G__48425 = chunk__48208_48414;
var G__48426 = count__48209_48415;
var G__48427 = (i__48210_48416 + (1));
seq__48207_48413 = G__48424;
chunk__48208_48414 = G__48425;
count__48209_48415 = G__48426;
i__48210_48416 = G__48427;
continue;
} else {
var temp__5753__auto___48428 = cljs.core.seq(seq__48207_48413);
if(temp__5753__auto___48428){
var seq__48207_48429__$1 = temp__5753__auto___48428;
if(cljs.core.chunked_seq_QMARK_(seq__48207_48429__$1)){
var c__4649__auto___48430 = cljs.core.chunk_first(seq__48207_48429__$1);
var G__48431 = cljs.core.chunk_rest(seq__48207_48429__$1);
var G__48432 = c__4649__auto___48430;
var G__48433 = cljs.core.count(c__4649__auto___48430);
var G__48434 = (0);
seq__48207_48413 = G__48431;
chunk__48208_48414 = G__48432;
count__48209_48415 = G__48433;
i__48210_48416 = G__48434;
continue;
} else {
var map__48218_48435 = cljs.core.first(seq__48207_48429__$1);
var map__48218_48436__$1 = cljs.core.__destructure_map(map__48218_48435);
var w_48437 = map__48218_48436__$1;
var msg_48438__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48218_48436__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48218_48436__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48218_48436__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48218_48436__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48441)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48439),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48440),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48438__$1)].join(''));


var G__48442 = cljs.core.next(seq__48207_48429__$1);
var G__48443 = null;
var G__48444 = (0);
var G__48445 = (0);
seq__48207_48413 = G__48442;
chunk__48208_48414 = G__48443;
count__48209_48415 = G__48444;
i__48210_48416 = G__48445;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48192_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48192_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48221){
var map__48222 = p__48221;
var map__48222__$1 = cljs.core.__destructure_map(map__48222);
var msg = map__48222__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48222__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48223 = cljs.core.seq(updates);
var chunk__48225 = null;
var count__48226 = (0);
var i__48227 = (0);
while(true){
if((i__48227 < count__48226)){
var path = chunk__48225.cljs$core$IIndexed$_nth$arity$2(null,i__48227);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48292_48446 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48296_48447 = null;
var count__48297_48448 = (0);
var i__48298_48449 = (0);
while(true){
if((i__48298_48449 < count__48297_48448)){
var node_48450 = chunk__48296_48447.cljs$core$IIndexed$_nth$arity$2(null,i__48298_48449);
if(cljs.core.not(node_48450.shadow$old)){
var path_match_48451 = shadow.cljs.devtools.client.browser.match_paths(node_48450.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48451)){
var new_link_48452 = (function (){var G__48307 = node_48450.cloneNode(true);
G__48307.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48451),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48307;
})();
(node_48450.shadow$old = true);

(new_link_48452.onload = ((function (seq__48292_48446,chunk__48296_48447,count__48297_48448,i__48298_48449,seq__48223,chunk__48225,count__48226,i__48227,new_link_48452,path_match_48451,node_48450,path,map__48222,map__48222__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48450);
});})(seq__48292_48446,chunk__48296_48447,count__48297_48448,i__48298_48449,seq__48223,chunk__48225,count__48226,i__48227,new_link_48452,path_match_48451,node_48450,path,map__48222,map__48222__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48451], 0));

goog.dom.insertSiblingAfter(new_link_48452,node_48450);


var G__48453 = seq__48292_48446;
var G__48454 = chunk__48296_48447;
var G__48455 = count__48297_48448;
var G__48456 = (i__48298_48449 + (1));
seq__48292_48446 = G__48453;
chunk__48296_48447 = G__48454;
count__48297_48448 = G__48455;
i__48298_48449 = G__48456;
continue;
} else {
var G__48457 = seq__48292_48446;
var G__48458 = chunk__48296_48447;
var G__48459 = count__48297_48448;
var G__48460 = (i__48298_48449 + (1));
seq__48292_48446 = G__48457;
chunk__48296_48447 = G__48458;
count__48297_48448 = G__48459;
i__48298_48449 = G__48460;
continue;
}
} else {
var G__48461 = seq__48292_48446;
var G__48462 = chunk__48296_48447;
var G__48463 = count__48297_48448;
var G__48464 = (i__48298_48449 + (1));
seq__48292_48446 = G__48461;
chunk__48296_48447 = G__48462;
count__48297_48448 = G__48463;
i__48298_48449 = G__48464;
continue;
}
} else {
var temp__5753__auto___48465 = cljs.core.seq(seq__48292_48446);
if(temp__5753__auto___48465){
var seq__48292_48466__$1 = temp__5753__auto___48465;
if(cljs.core.chunked_seq_QMARK_(seq__48292_48466__$1)){
var c__4649__auto___48467 = cljs.core.chunk_first(seq__48292_48466__$1);
var G__48468 = cljs.core.chunk_rest(seq__48292_48466__$1);
var G__48469 = c__4649__auto___48467;
var G__48470 = cljs.core.count(c__4649__auto___48467);
var G__48471 = (0);
seq__48292_48446 = G__48468;
chunk__48296_48447 = G__48469;
count__48297_48448 = G__48470;
i__48298_48449 = G__48471;
continue;
} else {
var node_48472 = cljs.core.first(seq__48292_48466__$1);
if(cljs.core.not(node_48472.shadow$old)){
var path_match_48473 = shadow.cljs.devtools.client.browser.match_paths(node_48472.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48473)){
var new_link_48474 = (function (){var G__48310 = node_48472.cloneNode(true);
G__48310.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48473),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48310;
})();
(node_48472.shadow$old = true);

(new_link_48474.onload = ((function (seq__48292_48446,chunk__48296_48447,count__48297_48448,i__48298_48449,seq__48223,chunk__48225,count__48226,i__48227,new_link_48474,path_match_48473,node_48472,seq__48292_48466__$1,temp__5753__auto___48465,path,map__48222,map__48222__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48472);
});})(seq__48292_48446,chunk__48296_48447,count__48297_48448,i__48298_48449,seq__48223,chunk__48225,count__48226,i__48227,new_link_48474,path_match_48473,node_48472,seq__48292_48466__$1,temp__5753__auto___48465,path,map__48222,map__48222__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48473], 0));

goog.dom.insertSiblingAfter(new_link_48474,node_48472);


var G__48475 = cljs.core.next(seq__48292_48466__$1);
var G__48476 = null;
var G__48477 = (0);
var G__48478 = (0);
seq__48292_48446 = G__48475;
chunk__48296_48447 = G__48476;
count__48297_48448 = G__48477;
i__48298_48449 = G__48478;
continue;
} else {
var G__48479 = cljs.core.next(seq__48292_48466__$1);
var G__48480 = null;
var G__48481 = (0);
var G__48482 = (0);
seq__48292_48446 = G__48479;
chunk__48296_48447 = G__48480;
count__48297_48448 = G__48481;
i__48298_48449 = G__48482;
continue;
}
} else {
var G__48483 = cljs.core.next(seq__48292_48466__$1);
var G__48484 = null;
var G__48485 = (0);
var G__48486 = (0);
seq__48292_48446 = G__48483;
chunk__48296_48447 = G__48484;
count__48297_48448 = G__48485;
i__48298_48449 = G__48486;
continue;
}
}
} else {
}
}
break;
}


var G__48487 = seq__48223;
var G__48488 = chunk__48225;
var G__48489 = count__48226;
var G__48490 = (i__48227 + (1));
seq__48223 = G__48487;
chunk__48225 = G__48488;
count__48226 = G__48489;
i__48227 = G__48490;
continue;
} else {
var G__48491 = seq__48223;
var G__48492 = chunk__48225;
var G__48493 = count__48226;
var G__48494 = (i__48227 + (1));
seq__48223 = G__48491;
chunk__48225 = G__48492;
count__48226 = G__48493;
i__48227 = G__48494;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48223);
if(temp__5753__auto__){
var seq__48223__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48223__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48223__$1);
var G__48495 = cljs.core.chunk_rest(seq__48223__$1);
var G__48496 = c__4649__auto__;
var G__48497 = cljs.core.count(c__4649__auto__);
var G__48498 = (0);
seq__48223 = G__48495;
chunk__48225 = G__48496;
count__48226 = G__48497;
i__48227 = G__48498;
continue;
} else {
var path = cljs.core.first(seq__48223__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48313_48499 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48317_48500 = null;
var count__48318_48501 = (0);
var i__48319_48502 = (0);
while(true){
if((i__48319_48502 < count__48318_48501)){
var node_48503 = chunk__48317_48500.cljs$core$IIndexed$_nth$arity$2(null,i__48319_48502);
if(cljs.core.not(node_48503.shadow$old)){
var path_match_48504 = shadow.cljs.devtools.client.browser.match_paths(node_48503.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48504)){
var new_link_48505 = (function (){var G__48332 = node_48503.cloneNode(true);
G__48332.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48504),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48332;
})();
(node_48503.shadow$old = true);

(new_link_48505.onload = ((function (seq__48313_48499,chunk__48317_48500,count__48318_48501,i__48319_48502,seq__48223,chunk__48225,count__48226,i__48227,new_link_48505,path_match_48504,node_48503,path,seq__48223__$1,temp__5753__auto__,map__48222,map__48222__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48503);
});})(seq__48313_48499,chunk__48317_48500,count__48318_48501,i__48319_48502,seq__48223,chunk__48225,count__48226,i__48227,new_link_48505,path_match_48504,node_48503,path,seq__48223__$1,temp__5753__auto__,map__48222,map__48222__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48504], 0));

goog.dom.insertSiblingAfter(new_link_48505,node_48503);


var G__48506 = seq__48313_48499;
var G__48507 = chunk__48317_48500;
var G__48508 = count__48318_48501;
var G__48509 = (i__48319_48502 + (1));
seq__48313_48499 = G__48506;
chunk__48317_48500 = G__48507;
count__48318_48501 = G__48508;
i__48319_48502 = G__48509;
continue;
} else {
var G__48510 = seq__48313_48499;
var G__48511 = chunk__48317_48500;
var G__48512 = count__48318_48501;
var G__48513 = (i__48319_48502 + (1));
seq__48313_48499 = G__48510;
chunk__48317_48500 = G__48511;
count__48318_48501 = G__48512;
i__48319_48502 = G__48513;
continue;
}
} else {
var G__48514 = seq__48313_48499;
var G__48515 = chunk__48317_48500;
var G__48516 = count__48318_48501;
var G__48517 = (i__48319_48502 + (1));
seq__48313_48499 = G__48514;
chunk__48317_48500 = G__48515;
count__48318_48501 = G__48516;
i__48319_48502 = G__48517;
continue;
}
} else {
var temp__5753__auto___48518__$1 = cljs.core.seq(seq__48313_48499);
if(temp__5753__auto___48518__$1){
var seq__48313_48519__$1 = temp__5753__auto___48518__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48313_48519__$1)){
var c__4649__auto___48520 = cljs.core.chunk_first(seq__48313_48519__$1);
var G__48521 = cljs.core.chunk_rest(seq__48313_48519__$1);
var G__48522 = c__4649__auto___48520;
var G__48523 = cljs.core.count(c__4649__auto___48520);
var G__48524 = (0);
seq__48313_48499 = G__48521;
chunk__48317_48500 = G__48522;
count__48318_48501 = G__48523;
i__48319_48502 = G__48524;
continue;
} else {
var node_48525 = cljs.core.first(seq__48313_48519__$1);
if(cljs.core.not(node_48525.shadow$old)){
var path_match_48526 = shadow.cljs.devtools.client.browser.match_paths(node_48525.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48526)){
var new_link_48527 = (function (){var G__48334 = node_48525.cloneNode(true);
G__48334.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48526),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48334;
})();
(node_48525.shadow$old = true);

(new_link_48527.onload = ((function (seq__48313_48499,chunk__48317_48500,count__48318_48501,i__48319_48502,seq__48223,chunk__48225,count__48226,i__48227,new_link_48527,path_match_48526,node_48525,seq__48313_48519__$1,temp__5753__auto___48518__$1,path,seq__48223__$1,temp__5753__auto__,map__48222,map__48222__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48525);
});})(seq__48313_48499,chunk__48317_48500,count__48318_48501,i__48319_48502,seq__48223,chunk__48225,count__48226,i__48227,new_link_48527,path_match_48526,node_48525,seq__48313_48519__$1,temp__5753__auto___48518__$1,path,seq__48223__$1,temp__5753__auto__,map__48222,map__48222__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48526], 0));

goog.dom.insertSiblingAfter(new_link_48527,node_48525);


var G__48528 = cljs.core.next(seq__48313_48519__$1);
var G__48529 = null;
var G__48530 = (0);
var G__48531 = (0);
seq__48313_48499 = G__48528;
chunk__48317_48500 = G__48529;
count__48318_48501 = G__48530;
i__48319_48502 = G__48531;
continue;
} else {
var G__48532 = cljs.core.next(seq__48313_48519__$1);
var G__48533 = null;
var G__48534 = (0);
var G__48535 = (0);
seq__48313_48499 = G__48532;
chunk__48317_48500 = G__48533;
count__48318_48501 = G__48534;
i__48319_48502 = G__48535;
continue;
}
} else {
var G__48536 = cljs.core.next(seq__48313_48519__$1);
var G__48537 = null;
var G__48538 = (0);
var G__48539 = (0);
seq__48313_48499 = G__48536;
chunk__48317_48500 = G__48537;
count__48318_48501 = G__48538;
i__48319_48502 = G__48539;
continue;
}
}
} else {
}
}
break;
}


var G__48540 = cljs.core.next(seq__48223__$1);
var G__48541 = null;
var G__48542 = (0);
var G__48543 = (0);
seq__48223 = G__48540;
chunk__48225 = G__48541;
count__48226 = G__48542;
i__48227 = G__48543;
continue;
} else {
var G__48544 = cljs.core.next(seq__48223__$1);
var G__48545 = null;
var G__48546 = (0);
var G__48547 = (0);
seq__48223 = G__48544;
chunk__48225 = G__48545;
count__48226 = G__48546;
i__48227 = G__48547;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48339){
var map__48340 = p__48339;
var map__48340__$1 = cljs.core.__destructure_map(map__48340);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48340__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48343){
var map__48344 = p__48343;
var map__48344__$1 = cljs.core.__destructure_map(map__48344);
var _ = map__48344__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48344__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48345,done,error){
var map__48346 = p__48345;
var map__48346__$1 = cljs.core.__destructure_map(map__48346);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48346__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48348,done,error){
var map__48352 = p__48348;
var map__48352__$1 = cljs.core.__destructure_map(map__48352);
var msg = map__48352__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48352__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48352__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48352__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48353){
var map__48354 = p__48353;
var map__48354__$1 = cljs.core.__destructure_map(map__48354);
var src = map__48354__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48354__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48355 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48355) : done.call(null,G__48355));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48356){
var map__48357 = p__48356;
var map__48357__$1 = cljs.core.__destructure_map(map__48357);
var msg__$1 = map__48357__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48358){var ex = e48358;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48360){
var map__48361 = p__48360;
var map__48361__$1 = cljs.core.__destructure_map(map__48361);
var env = map__48361__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48361__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__48364){
var map__48365 = p__48364;
var map__48365__$1 = cljs.core.__destructure_map(map__48365);
var msg = map__48365__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48365__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48374){
var map__48375 = p__48374;
var map__48375__$1 = cljs.core.__destructure_map(map__48375);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48375__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48375__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48376){
var map__48377 = p__48376;
var map__48377__$1 = cljs.core.__destructure_map(map__48377);
var svc = map__48377__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48377__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
