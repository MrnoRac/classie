goog.provide('classie.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("classie.events","initialize-db","classie.events/initialize-db",-2145517303),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__33420__auto__ = classie.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__33420__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__33420__auto__;
}catch (e38058){var e = e38058;
throw e;
}}):(function (_,___$1){
return classie.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-data","process-data",1368271805),(function (p__38059){
var map__38060 = p__38059;
var map__38060__$1 = cljs.core.__destructure_map(map__38060);
var vec__38061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38060__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061,(1),null);
return classie.gen_table.process(value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-incoming","update-incoming",-594512241),(function (db,p__38064){
var vec__38065 = p__38064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38065,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38065,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"incoming","incoming",-1710131427),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-outgoing","update-outgoing",1928550455),(function (db,p__38068){
var vec__38069 = p__38068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"outgoing","outgoing",1124752575),value);
}));

//# sourceMappingURL=classie.events.js.map
