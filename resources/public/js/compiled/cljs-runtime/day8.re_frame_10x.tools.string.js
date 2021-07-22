goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40089 = arguments.length;
var i__4830__auto___40090 = (0);
while(true){
if((i__4830__auto___40090 < len__4829__auto___40089)){
args__4835__auto__.push((arguments[i__4830__auto___40090]));

var G__40091 = (i__4830__auto___40090 + (1));
i__4830__auto___40090 = G__40091;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__40059){
var vec__40060 = p__40059;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40060,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq40048){
var G__40049 = cljs.core.first(seq40048);
var seq40048__$1 = cljs.core.next(seq40048);
var G__40050 = cljs.core.first(seq40048__$1);
var seq40048__$2 = cljs.core.next(seq40048__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40049,G__40050,seq40048__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40095 = arguments.length;
var i__4830__auto___40096 = (0);
while(true){
if((i__4830__auto___40096 < len__4829__auto___40095)){
args__4835__auto__.push((arguments[i__4830__auto___40096]));

var G__40097 = (i__4830__auto___40096 + (1));
i__4830__auto___40096 = G__40097;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__40081){
var vec__40082 = p__40081;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40082,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq40076){
var G__40077 = cljs.core.first(seq40076);
var seq40076__$1 = cljs.core.next(seq40076);
var G__40078 = cljs.core.first(seq40076__$1);
var seq40076__$2 = cljs.core.next(seq40076__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40077,G__40078,seq40076__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
