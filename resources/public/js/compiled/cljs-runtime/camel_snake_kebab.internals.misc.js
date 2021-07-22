goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33542 = arguments.length;
var i__4830__auto___33543 = (0);
while(true){
if((i__4830__auto___33543 < len__4829__auto___33542)){
args__4835__auto__.push((arguments[i__4830__auto___33543]));

var G__33544 = (i__4830__auto___33543 + (1));
i__4830__auto___33543 = G__33544;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__33536){
var map__33537 = p__33536;
var map__33537__$1 = cljs.core.__destructure_map(map__33537);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33537__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5751__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5751__auto__){
var vec__33538 = temp__5751__auto__;
var seq__33539 = cljs.core.seq(vec__33538);
var first__33540 = cljs.core.first(seq__33539);
var seq__33539__$1 = cljs.core.next(seq__33539);
var first = first__33540;
var rest = seq__33539__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq33531){
var G__33532 = cljs.core.first(seq33531);
var seq33531__$1 = cljs.core.next(seq33531);
var G__33533 = cljs.core.first(seq33531__$1);
var seq33531__$2 = cljs.core.next(seq33531__$1);
var G__33534 = cljs.core.first(seq33531__$2);
var seq33531__$3 = cljs.core.next(seq33531__$2);
var G__33535 = cljs.core.first(seq33531__$3);
var seq33531__$4 = cljs.core.next(seq33531__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33532,G__33533,G__33534,G__33535,seq33531__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4223__auto__ = (function (){var G__33541 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__33541) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__33541));
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
