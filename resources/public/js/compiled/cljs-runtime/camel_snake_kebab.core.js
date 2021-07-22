goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33794 = arguments.length;
var i__4830__auto___33795 = (0);
while(true){
if((i__4830__auto___33795 < len__4829__auto___33794)){
args__4835__auto__.push((arguments[i__4830__auto___33795]));

var G__33796 = (i__4830__auto___33795 + (1));
i__4830__auto___33795 = G__33796;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((4) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq33733){
var G__33734 = cljs.core.first(seq33733);
var seq33733__$1 = cljs.core.next(seq33733);
var G__33735 = cljs.core.first(seq33733__$1);
var seq33733__$2 = cljs.core.next(seq33733__$1);
var G__33736 = cljs.core.first(seq33733__$2);
var seq33733__$3 = cljs.core.next(seq33733__$2);
var G__33737 = cljs.core.first(seq33733__$3);
var seq33733__$4 = cljs.core.next(seq33733__$3);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33734,G__33735,G__33736,G__33737,seq33733__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33797 = arguments.length;
var i__4830__auto___33798 = (0);
while(true){
if((i__4830__auto___33798 < len__4829__auto___33797)){
args__4835__auto__.push((arguments[i__4830__auto___33798]));

var G__33799 = (i__4830__auto___33798 + (1));
i__4830__auto___33798 = G__33799;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__33698__auto__,rest__33699__auto__){
var convert_case__33700__auto__ = (function (p1__33697__33701__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__33697__33701__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33699__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__33698__auto__,convert_case__33700__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq33738){
var G__33739 = cljs.core.first(seq33738);
var seq33738__$1 = cljs.core.next(seq33738);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33739,seq33738__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33800 = arguments.length;
var i__4830__auto___33801 = (0);
while(true){
if((i__4830__auto___33801 < len__4829__auto___33800)){
args__4835__auto__.push((arguments[i__4830__auto___33801]));

var G__33802 = (i__4830__auto___33801 + (1));
i__4830__auto___33801 = G__33802;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq33740){
var G__33741 = cljs.core.first(seq33740);
var seq33740__$1 = cljs.core.next(seq33740);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33741,seq33740__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33803 = arguments.length;
var i__4830__auto___33804 = (0);
while(true){
if((i__4830__auto___33804 < len__4829__auto___33803)){
args__4835__auto__.push((arguments[i__4830__auto___33804]));

var G__33805 = (i__4830__auto___33804 + (1));
i__4830__auto___33804 = G__33805;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq33742){
var G__33743 = cljs.core.first(seq33742);
var seq33742__$1 = cljs.core.next(seq33742);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33743,seq33742__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33806 = arguments.length;
var i__4830__auto___33807 = (0);
while(true){
if((i__4830__auto___33807 < len__4829__auto___33806)){
args__4835__auto__.push((arguments[i__4830__auto___33807]));

var G__33808 = (i__4830__auto___33807 + (1));
i__4830__auto___33807 = G__33808;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq33744){
var G__33745 = cljs.core.first(seq33744);
var seq33744__$1 = cljs.core.next(seq33744);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33745,seq33744__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33809 = arguments.length;
var i__4830__auto___33810 = (0);
while(true){
if((i__4830__auto___33810 < len__4829__auto___33809)){
args__4835__auto__.push((arguments[i__4830__auto___33810]));

var G__33811 = (i__4830__auto___33810 + (1));
i__4830__auto___33810 = G__33811;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__33698__auto__,rest__33699__auto__){
var convert_case__33700__auto__ = (function (p1__33697__33701__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__33697__33701__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33699__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__33698__auto__,convert_case__33700__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq33746){
var G__33747 = cljs.core.first(seq33746);
var seq33746__$1 = cljs.core.next(seq33746);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33747,seq33746__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33812 = arguments.length;
var i__4830__auto___33813 = (0);
while(true){
if((i__4830__auto___33813 < len__4829__auto___33812)){
args__4835__auto__.push((arguments[i__4830__auto___33813]));

var G__33814 = (i__4830__auto___33813 + (1));
i__4830__auto___33813 = G__33814;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq33748){
var G__33749 = cljs.core.first(seq33748);
var seq33748__$1 = cljs.core.next(seq33748);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33749,seq33748__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33815 = arguments.length;
var i__4830__auto___33816 = (0);
while(true){
if((i__4830__auto___33816 < len__4829__auto___33815)){
args__4835__auto__.push((arguments[i__4830__auto___33816]));

var G__33817 = (i__4830__auto___33816 + (1));
i__4830__auto___33816 = G__33817;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq33750){
var G__33751 = cljs.core.first(seq33750);
var seq33750__$1 = cljs.core.next(seq33750);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33751,seq33750__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33818 = arguments.length;
var i__4830__auto___33819 = (0);
while(true){
if((i__4830__auto___33819 < len__4829__auto___33818)){
args__4835__auto__.push((arguments[i__4830__auto___33819]));

var G__33820 = (i__4830__auto___33819 + (1));
i__4830__auto___33819 = G__33820;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq33752){
var G__33753 = cljs.core.first(seq33752);
var seq33752__$1 = cljs.core.next(seq33752);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33753,seq33752__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33821 = arguments.length;
var i__4830__auto___33822 = (0);
while(true){
if((i__4830__auto___33822 < len__4829__auto___33821)){
args__4835__auto__.push((arguments[i__4830__auto___33822]));

var G__33823 = (i__4830__auto___33822 + (1));
i__4830__auto___33822 = G__33823;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__33698__auto__,rest__33699__auto__){
var convert_case__33700__auto__ = (function (p1__33697__33701__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__33697__33701__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33699__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__33698__auto__,convert_case__33700__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq33754){
var G__33755 = cljs.core.first(seq33754);
var seq33754__$1 = cljs.core.next(seq33754);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33755,seq33754__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33825 = arguments.length;
var i__4830__auto___33826 = (0);
while(true){
if((i__4830__auto___33826 < len__4829__auto___33825)){
args__4835__auto__.push((arguments[i__4830__auto___33826]));

var G__33827 = (i__4830__auto___33826 + (1));
i__4830__auto___33826 = G__33827;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq33756){
var G__33757 = cljs.core.first(seq33756);
var seq33756__$1 = cljs.core.next(seq33756);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33757,seq33756__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33828 = arguments.length;
var i__4830__auto___33829 = (0);
while(true){
if((i__4830__auto___33829 < len__4829__auto___33828)){
args__4835__auto__.push((arguments[i__4830__auto___33829]));

var G__33830 = (i__4830__auto___33829 + (1));
i__4830__auto___33829 = G__33830;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq33758){
var G__33759 = cljs.core.first(seq33758);
var seq33758__$1 = cljs.core.next(seq33758);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33759,seq33758__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33831 = arguments.length;
var i__4830__auto___33832 = (0);
while(true){
if((i__4830__auto___33832 < len__4829__auto___33831)){
args__4835__auto__.push((arguments[i__4830__auto___33832]));

var G__33833 = (i__4830__auto___33832 + (1));
i__4830__auto___33832 = G__33833;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq33760){
var G__33761 = cljs.core.first(seq33760);
var seq33760__$1 = cljs.core.next(seq33760);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33761,seq33760__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33838 = arguments.length;
var i__4830__auto___33839 = (0);
while(true){
if((i__4830__auto___33839 < len__4829__auto___33838)){
args__4835__auto__.push((arguments[i__4830__auto___33839]));

var G__33840 = (i__4830__auto___33839 + (1));
i__4830__auto___33839 = G__33840;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__33698__auto__,rest__33699__auto__){
var convert_case__33700__auto__ = (function (p1__33697__33701__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__33697__33701__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33699__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__33698__auto__,convert_case__33700__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq33762){
var G__33763 = cljs.core.first(seq33762);
var seq33762__$1 = cljs.core.next(seq33762);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33763,seq33762__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33841 = arguments.length;
var i__4830__auto___33842 = (0);
while(true){
if((i__4830__auto___33842 < len__4829__auto___33841)){
args__4835__auto__.push((arguments[i__4830__auto___33842]));

var G__33843 = (i__4830__auto___33842 + (1));
i__4830__auto___33842 = G__33843;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq33764){
var G__33765 = cljs.core.first(seq33764);
var seq33764__$1 = cljs.core.next(seq33764);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33765,seq33764__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33844 = arguments.length;
var i__4830__auto___33845 = (0);
while(true){
if((i__4830__auto___33845 < len__4829__auto___33844)){
args__4835__auto__.push((arguments[i__4830__auto___33845]));

var G__33846 = (i__4830__auto___33845 + (1));
i__4830__auto___33845 = G__33846;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq33766){
var G__33767 = cljs.core.first(seq33766);
var seq33766__$1 = cljs.core.next(seq33766);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33767,seq33766__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33847 = arguments.length;
var i__4830__auto___33848 = (0);
while(true){
if((i__4830__auto___33848 < len__4829__auto___33847)){
args__4835__auto__.push((arguments[i__4830__auto___33848]));

var G__33849 = (i__4830__auto___33848 + (1));
i__4830__auto___33848 = G__33849;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq33768){
var G__33769 = cljs.core.first(seq33768);
var seq33768__$1 = cljs.core.next(seq33768);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33769,seq33768__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33850 = arguments.length;
var i__4830__auto___33851 = (0);
while(true){
if((i__4830__auto___33851 < len__4829__auto___33850)){
args__4835__auto__.push((arguments[i__4830__auto___33851]));

var G__33852 = (i__4830__auto___33851 + (1));
i__4830__auto___33851 = G__33852;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__33698__auto__,rest__33699__auto__){
var convert_case__33700__auto__ = (function (p1__33697__33701__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__33697__33701__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33699__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__33698__auto__,convert_case__33700__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq33770){
var G__33771 = cljs.core.first(seq33770);
var seq33770__$1 = cljs.core.next(seq33770);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33771,seq33770__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33853 = arguments.length;
var i__4830__auto___33854 = (0);
while(true){
if((i__4830__auto___33854 < len__4829__auto___33853)){
args__4835__auto__.push((arguments[i__4830__auto___33854]));

var G__33855 = (i__4830__auto___33854 + (1));
i__4830__auto___33854 = G__33855;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq33772){
var G__33773 = cljs.core.first(seq33772);
var seq33772__$1 = cljs.core.next(seq33772);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33773,seq33772__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33856 = arguments.length;
var i__4830__auto___33857 = (0);
while(true){
if((i__4830__auto___33857 < len__4829__auto___33856)){
args__4835__auto__.push((arguments[i__4830__auto___33857]));

var G__33858 = (i__4830__auto___33857 + (1));
i__4830__auto___33857 = G__33858;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq33774){
var G__33775 = cljs.core.first(seq33774);
var seq33774__$1 = cljs.core.next(seq33774);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33775,seq33774__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33859 = arguments.length;
var i__4830__auto___33860 = (0);
while(true){
if((i__4830__auto___33860 < len__4829__auto___33859)){
args__4835__auto__.push((arguments[i__4830__auto___33860]));

var G__33861 = (i__4830__auto___33860 + (1));
i__4830__auto___33860 = G__33861;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq33776){
var G__33777 = cljs.core.first(seq33776);
var seq33776__$1 = cljs.core.next(seq33776);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33777,seq33776__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33862 = arguments.length;
var i__4830__auto___33863 = (0);
while(true){
if((i__4830__auto___33863 < len__4829__auto___33862)){
args__4835__auto__.push((arguments[i__4830__auto___33863]));

var G__33864 = (i__4830__auto___33863 + (1));
i__4830__auto___33863 = G__33864;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__33698__auto__,rest__33699__auto__){
var convert_case__33700__auto__ = (function (p1__33697__33701__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__33697__33701__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33699__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__33698__auto__,convert_case__33700__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq33778){
var G__33779 = cljs.core.first(seq33778);
var seq33778__$1 = cljs.core.next(seq33778);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33779,seq33778__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33869 = arguments.length;
var i__4830__auto___33870 = (0);
while(true){
if((i__4830__auto___33870 < len__4829__auto___33869)){
args__4835__auto__.push((arguments[i__4830__auto___33870]));

var G__33871 = (i__4830__auto___33870 + (1));
i__4830__auto___33870 = G__33871;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq33780){
var G__33781 = cljs.core.first(seq33780);
var seq33780__$1 = cljs.core.next(seq33780);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33781,seq33780__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33872 = arguments.length;
var i__4830__auto___33873 = (0);
while(true){
if((i__4830__auto___33873 < len__4829__auto___33872)){
args__4835__auto__.push((arguments[i__4830__auto___33873]));

var G__33874 = (i__4830__auto___33873 + (1));
i__4830__auto___33873 = G__33874;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq33782){
var G__33783 = cljs.core.first(seq33782);
var seq33782__$1 = cljs.core.next(seq33782);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33783,seq33782__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33875 = arguments.length;
var i__4830__auto___33876 = (0);
while(true){
if((i__4830__auto___33876 < len__4829__auto___33875)){
args__4835__auto__.push((arguments[i__4830__auto___33876]));

var G__33877 = (i__4830__auto___33876 + (1));
i__4830__auto___33876 = G__33877;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq33784){
var G__33785 = cljs.core.first(seq33784);
var seq33784__$1 = cljs.core.next(seq33784);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33785,seq33784__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33878 = arguments.length;
var i__4830__auto___33879 = (0);
while(true){
if((i__4830__auto___33879 < len__4829__auto___33878)){
args__4835__auto__.push((arguments[i__4830__auto___33879]));

var G__33880 = (i__4830__auto___33879 + (1));
i__4830__auto___33879 = G__33880;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__33698__auto__,rest__33699__auto__){
var convert_case__33700__auto__ = (function (p1__33697__33701__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__33697__33701__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33699__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__33698__auto__,convert_case__33700__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq33786){
var G__33787 = cljs.core.first(seq33786);
var seq33786__$1 = cljs.core.next(seq33786);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33787,seq33786__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33881 = arguments.length;
var i__4830__auto___33882 = (0);
while(true){
if((i__4830__auto___33882 < len__4829__auto___33881)){
args__4835__auto__.push((arguments[i__4830__auto___33882]));

var G__33883 = (i__4830__auto___33882 + (1));
i__4830__auto___33882 = G__33883;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq33788){
var G__33789 = cljs.core.first(seq33788);
var seq33788__$1 = cljs.core.next(seq33788);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33789,seq33788__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33884 = arguments.length;
var i__4830__auto___33885 = (0);
while(true){
if((i__4830__auto___33885 < len__4829__auto___33884)){
args__4835__auto__.push((arguments[i__4830__auto___33885]));

var G__33886 = (i__4830__auto___33885 + (1));
i__4830__auto___33885 = G__33886;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq33790){
var G__33791 = cljs.core.first(seq33790);
var seq33790__$1 = cljs.core.next(seq33790);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33791,seq33790__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33887 = arguments.length;
var i__4830__auto___33888 = (0);
while(true){
if((i__4830__auto___33888 < len__4829__auto___33887)){
args__4835__auto__.push((arguments[i__4830__auto___33888]));

var G__33889 = (i__4830__auto___33888 + (1));
i__4830__auto___33888 = G__33889;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__33703__auto__,rest__33704__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__33703__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__33704__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq33792){
var G__33793 = cljs.core.first(seq33792);
var seq33792__$1 = cljs.core.next(seq33792);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33793,seq33792__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
