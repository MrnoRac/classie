goog.provide('camel_snake_kebab.internals.alter_name');

/**
 * @interface
 */
camel_snake_kebab.internals.alter_name.AlterName = function(){};

var camel_snake_kebab$internals$alter_name$AlterName$alter_name$dyn_33010 = (function (this$,f){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (camel_snake_kebab.internals.alter_name.alter_name[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4522__auto__.call(null,this$,f));
} else {
var m__4519__auto__ = (camel_snake_kebab.internals.alter_name.alter_name["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4519__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("AlterName.alter-name",this$);
}
}
});
/**
 * Alters the name of this with f.
 */
camel_snake_kebab.internals.alter_name.alter_name = (function camel_snake_kebab$internals$alter_name$alter_name(this$,f){
if((((!((this$ == null)))) && ((!((this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 == null)))))){
return this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2(this$,f);
} else {
return camel_snake_kebab$internals$alter_name$AlterName$alter_name$dyn_33010(this$,f);
}
});

goog.object.set(camel_snake_kebab.internals.alter_name.AlterName,"string",true);

goog.object.set(camel_snake_kebab.internals.alter_name.alter_name,"string",(function (this$,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$) : f.call(null,this$));
}));

(cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace(this$__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced keywords are not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),this$__$1], null));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__32992 = cljs.core.name(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32992) : f.call(null,G__32992));
})());
}
}));

(cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace(this$__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced symbols are not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),this$__$1], null));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__33002 = cljs.core.name(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33002) : f.call(null,G__33002));
})());
}
}));

//# sourceMappingURL=camel_snake_kebab.internals.alter_name.js.map
