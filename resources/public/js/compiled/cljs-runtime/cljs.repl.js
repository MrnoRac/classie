goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43623){
var map__43627 = p__43623;
var map__43627__$1 = cljs.core.__destructure_map(map__43627);
var m = map__43627__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43627__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43627__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43640_43887 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43641_43888 = null;
var count__43642_43889 = (0);
var i__43643_43890 = (0);
while(true){
if((i__43643_43890 < count__43642_43889)){
var f_43891 = chunk__43641_43888.cljs$core$IIndexed$_nth$arity$2(null,i__43643_43890);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43891], 0));


var G__43892 = seq__43640_43887;
var G__43893 = chunk__43641_43888;
var G__43894 = count__43642_43889;
var G__43895 = (i__43643_43890 + (1));
seq__43640_43887 = G__43892;
chunk__43641_43888 = G__43893;
count__43642_43889 = G__43894;
i__43643_43890 = G__43895;
continue;
} else {
var temp__5753__auto___43900 = cljs.core.seq(seq__43640_43887);
if(temp__5753__auto___43900){
var seq__43640_43905__$1 = temp__5753__auto___43900;
if(cljs.core.chunked_seq_QMARK_(seq__43640_43905__$1)){
var c__4649__auto___43906 = cljs.core.chunk_first(seq__43640_43905__$1);
var G__43907 = cljs.core.chunk_rest(seq__43640_43905__$1);
var G__43908 = c__4649__auto___43906;
var G__43909 = cljs.core.count(c__4649__auto___43906);
var G__43910 = (0);
seq__43640_43887 = G__43907;
chunk__43641_43888 = G__43908;
count__43642_43889 = G__43909;
i__43643_43890 = G__43910;
continue;
} else {
var f_43915 = cljs.core.first(seq__43640_43905__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43915], 0));


var G__43916 = cljs.core.next(seq__43640_43905__$1);
var G__43917 = null;
var G__43918 = (0);
var G__43919 = (0);
seq__43640_43887 = G__43916;
chunk__43641_43888 = G__43917;
count__43642_43889 = G__43918;
i__43643_43890 = G__43919;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43920 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43920], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43920)))?cljs.core.second(arglists_43920):arglists_43920)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43661_43930 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43662_43931 = null;
var count__43663_43932 = (0);
var i__43664_43933 = (0);
while(true){
if((i__43664_43933 < count__43663_43932)){
var vec__43688_43934 = chunk__43662_43931.cljs$core$IIndexed$_nth$arity$2(null,i__43664_43933);
var name_43935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43688_43934,(0),null);
var map__43691_43936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43688_43934,(1),null);
var map__43691_43937__$1 = cljs.core.__destructure_map(map__43691_43936);
var doc_43938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43691_43937__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43691_43937__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43935], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43939], 0));

if(cljs.core.truth_(doc_43938)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43938], 0));
} else {
}


var G__43940 = seq__43661_43930;
var G__43941 = chunk__43662_43931;
var G__43942 = count__43663_43932;
var G__43943 = (i__43664_43933 + (1));
seq__43661_43930 = G__43940;
chunk__43662_43931 = G__43941;
count__43663_43932 = G__43942;
i__43664_43933 = G__43943;
continue;
} else {
var temp__5753__auto___43944 = cljs.core.seq(seq__43661_43930);
if(temp__5753__auto___43944){
var seq__43661_43945__$1 = temp__5753__auto___43944;
if(cljs.core.chunked_seq_QMARK_(seq__43661_43945__$1)){
var c__4649__auto___43947 = cljs.core.chunk_first(seq__43661_43945__$1);
var G__43948 = cljs.core.chunk_rest(seq__43661_43945__$1);
var G__43949 = c__4649__auto___43947;
var G__43950 = cljs.core.count(c__4649__auto___43947);
var G__43951 = (0);
seq__43661_43930 = G__43948;
chunk__43662_43931 = G__43949;
count__43663_43932 = G__43950;
i__43664_43933 = G__43951;
continue;
} else {
var vec__43694_43952 = cljs.core.first(seq__43661_43945__$1);
var name_43953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43694_43952,(0),null);
var map__43697_43954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43694_43952,(1),null);
var map__43697_43955__$1 = cljs.core.__destructure_map(map__43697_43954);
var doc_43956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43697_43955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43697_43955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43953], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43957], 0));

if(cljs.core.truth_(doc_43956)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43956], 0));
} else {
}


var G__43960 = cljs.core.next(seq__43661_43945__$1);
var G__43961 = null;
var G__43962 = (0);
var G__43963 = (0);
seq__43661_43930 = G__43960;
chunk__43662_43931 = G__43961;
count__43663_43932 = G__43962;
i__43664_43933 = G__43963;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43700 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43701 = null;
var count__43702 = (0);
var i__43703 = (0);
while(true){
if((i__43703 < count__43702)){
var role = chunk__43701.cljs$core$IIndexed$_nth$arity$2(null,i__43703);
var temp__5753__auto___43965__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43965__$1)){
var spec_43966 = temp__5753__auto___43965__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43966)], 0));
} else {
}


var G__43967 = seq__43700;
var G__43968 = chunk__43701;
var G__43969 = count__43702;
var G__43970 = (i__43703 + (1));
seq__43700 = G__43967;
chunk__43701 = G__43968;
count__43702 = G__43969;
i__43703 = G__43970;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__43700);
if(temp__5753__auto____$1){
var seq__43700__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43700__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__43700__$1);
var G__43972 = cljs.core.chunk_rest(seq__43700__$1);
var G__43973 = c__4649__auto__;
var G__43974 = cljs.core.count(c__4649__auto__);
var G__43975 = (0);
seq__43700 = G__43972;
chunk__43701 = G__43973;
count__43702 = G__43974;
i__43703 = G__43975;
continue;
} else {
var role = cljs.core.first(seq__43700__$1);
var temp__5753__auto___43976__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___43976__$2)){
var spec_43977 = temp__5753__auto___43976__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43977)], 0));
} else {
}


var G__43978 = cljs.core.next(seq__43700__$1);
var G__43979 = null;
var G__43980 = (0);
var G__43981 = (0);
seq__43700 = G__43978;
chunk__43701 = G__43979;
count__43702 = G__43980;
i__43703 = G__43981;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43982 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43983 = cljs.core.ex_cause(t);
via = G__43982;
t = G__43983;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43733 = datafied_throwable;
var map__43733__$1 = cljs.core.__destructure_map(map__43733);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43733__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43733__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43733__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43734 = cljs.core.last(via);
var map__43734__$1 = cljs.core.__destructure_map(map__43734);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43734__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43734__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43734__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43735 = data;
var map__43735__$1 = cljs.core.__destructure_map(map__43735);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43735__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43735__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43735__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43736 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43736__$1 = cljs.core.__destructure_map(map__43736);
var top_data = map__43736__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43742 = phase;
var G__43742__$1 = (((G__43742 instanceof cljs.core.Keyword))?G__43742.fqn:null);
switch (G__43742__$1) {
case "read-source":
var map__43747 = data;
var map__43747__$1 = cljs.core.__destructure_map(map__43747);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43747__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43747__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43752 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43752__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43752,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43752);
var G__43752__$2 = (cljs.core.truth_((function (){var fexpr__43755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43755.cljs$core$IFn$_invoke$arity$1 ? fexpr__43755.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43755.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43752__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43752__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43752__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43752__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43762 = top_data;
var G__43762__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43762,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43762);
var G__43762__$2 = (cljs.core.truth_((function (){var fexpr__43766 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43766.cljs$core$IFn$_invoke$arity$1 ? fexpr__43766.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43766.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43762__$1);
var G__43762__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43762__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43762__$2);
var G__43762__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43762__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43762__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43762__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43762__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43772 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(3),null);
var G__43776 = top_data;
var G__43776__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43776,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43776);
var G__43776__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43776__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43776__$1);
var G__43776__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43776__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43776__$2);
var G__43776__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43776__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43776__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43776__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43776__$4;
}

break;
case "execution":
var vec__43777 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43777,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43777,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43777,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43777,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43730_SHARP_){
var or__4223__auto__ = (p1__43730_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__43787 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43787.cljs$core$IFn$_invoke$arity$1 ? fexpr__43787.cljs$core$IFn$_invoke$arity$1(p1__43730_SHARP_) : fexpr__43787.call(null,p1__43730_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__43788 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43788__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43788,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43788);
var G__43788__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43788__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43788__$1);
var G__43788__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43788__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43788__$2);
var G__43788__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43788__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43788__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43788__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43788__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43742__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43799){
var map__43800 = p__43799;
var map__43800__$1 = cljs.core.__destructure_map(map__43800);
var triage_data = map__43800__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43802 = phase;
var G__43802__$1 = (((G__43802 instanceof cljs.core.Keyword))?G__43802.fqn:null);
switch (G__43802__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43803 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43804 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43805 = loc;
var G__43806 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43830_43996 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43831_43997 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43832_43998 = true;
var _STAR_print_fn_STAR__temp_val__43833_43999 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43832_43998);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43833_43999);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43794_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43794_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43831_43997);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43830_43996);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43803,G__43804,G__43805,G__43806) : format.call(null,G__43803,G__43804,G__43805,G__43806));

break;
case "macroexpansion":
var G__43845 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43846 = cause_type;
var G__43847 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43848 = loc;
var G__43849 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43845,G__43846,G__43847,G__43848,G__43849) : format.call(null,G__43845,G__43846,G__43847,G__43848,G__43849));

break;
case "compile-syntax-check":
var G__43850 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43851 = cause_type;
var G__43852 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43853 = loc;
var G__43854 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43850,G__43851,G__43852,G__43853,G__43854) : format.call(null,G__43850,G__43851,G__43852,G__43853,G__43854));

break;
case "compilation":
var G__43857 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43858 = cause_type;
var G__43859 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43860 = loc;
var G__43861 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43857,G__43858,G__43859,G__43860,G__43861) : format.call(null,G__43857,G__43858,G__43859,G__43860,G__43861));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43863 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43864 = symbol;
var G__43865 = loc;
var G__43866 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43867_44000 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43868_44001 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43869_44002 = true;
var _STAR_print_fn_STAR__temp_val__43870_44003 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43869_44002);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43870_44003);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43797_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43797_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43868_44001);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43867_44000);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43863,G__43864,G__43865,G__43866) : format.call(null,G__43863,G__43864,G__43865,G__43866));
} else {
var G__43872 = "Execution error%s at %s(%s).\n%s\n";
var G__43873 = cause_type;
var G__43874 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43875 = loc;
var G__43876 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43872,G__43873,G__43874,G__43875,G__43876) : format.call(null,G__43872,G__43873,G__43874,G__43875,G__43876));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43802__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
