goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46692 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46692(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46693 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46693(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45807 = coll;
var G__45808 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45807,G__45808) : shadow.dom.lazy_native_coll_seq.call(null,G__45807,G__45808));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45858 = arguments.length;
switch (G__45858) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45874 = arguments.length;
switch (G__45874) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45892 = arguments.length;
switch (G__45892) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45901 = arguments.length;
switch (G__45901) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45927 = arguments.length;
switch (G__45927) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45945 = arguments.length;
switch (G__45945) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45970){if((e45970 instanceof Object)){
var e = e45970;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45970;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45973 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45974 = null;
var count__45975 = (0);
var i__45976 = (0);
while(true){
if((i__45976 < count__45975)){
var el = chunk__45974.cljs$core$IIndexed$_nth$arity$2(null,i__45976);
var handler_46717__$1 = ((function (seq__45973,chunk__45974,count__45975,i__45976,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45973,chunk__45974,count__45975,i__45976,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46717__$1);


var G__46718 = seq__45973;
var G__46719 = chunk__45974;
var G__46720 = count__45975;
var G__46721 = (i__45976 + (1));
seq__45973 = G__46718;
chunk__45974 = G__46719;
count__45975 = G__46720;
i__45976 = G__46721;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45973);
if(temp__5753__auto__){
var seq__45973__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45973__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45973__$1);
var G__46722 = cljs.core.chunk_rest(seq__45973__$1);
var G__46723 = c__4649__auto__;
var G__46724 = cljs.core.count(c__4649__auto__);
var G__46725 = (0);
seq__45973 = G__46722;
chunk__45974 = G__46723;
count__45975 = G__46724;
i__45976 = G__46725;
continue;
} else {
var el = cljs.core.first(seq__45973__$1);
var handler_46726__$1 = ((function (seq__45973,chunk__45974,count__45975,i__45976,el,seq__45973__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45973,chunk__45974,count__45975,i__45976,el,seq__45973__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46726__$1);


var G__46727 = cljs.core.next(seq__45973__$1);
var G__46728 = null;
var G__46729 = (0);
var G__46730 = (0);
seq__45973 = G__46727;
chunk__45974 = G__46728;
count__45975 = G__46729;
i__45976 = G__46730;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45989 = arguments.length;
switch (G__45989) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46004 = cljs.core.seq(events);
var chunk__46005 = null;
var count__46006 = (0);
var i__46007 = (0);
while(true){
if((i__46007 < count__46006)){
var vec__46022 = chunk__46005.cljs$core$IIndexed$_nth$arity$2(null,i__46007);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46022,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46732 = seq__46004;
var G__46733 = chunk__46005;
var G__46734 = count__46006;
var G__46735 = (i__46007 + (1));
seq__46004 = G__46732;
chunk__46005 = G__46733;
count__46006 = G__46734;
i__46007 = G__46735;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46004);
if(temp__5753__auto__){
var seq__46004__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46004__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46004__$1);
var G__46736 = cljs.core.chunk_rest(seq__46004__$1);
var G__46737 = c__4649__auto__;
var G__46738 = cljs.core.count(c__4649__auto__);
var G__46739 = (0);
seq__46004 = G__46736;
chunk__46005 = G__46737;
count__46006 = G__46738;
i__46007 = G__46739;
continue;
} else {
var vec__46031 = cljs.core.first(seq__46004__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46031,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46742 = cljs.core.next(seq__46004__$1);
var G__46743 = null;
var G__46744 = (0);
var G__46745 = (0);
seq__46004 = G__46742;
chunk__46005 = G__46743;
count__46006 = G__46744;
i__46007 = G__46745;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46043 = cljs.core.seq(styles);
var chunk__46044 = null;
var count__46045 = (0);
var i__46046 = (0);
while(true){
if((i__46046 < count__46045)){
var vec__46063 = chunk__46044.cljs$core$IIndexed$_nth$arity$2(null,i__46046);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46063,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46063,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46748 = seq__46043;
var G__46749 = chunk__46044;
var G__46750 = count__46045;
var G__46751 = (i__46046 + (1));
seq__46043 = G__46748;
chunk__46044 = G__46749;
count__46045 = G__46750;
i__46046 = G__46751;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46043);
if(temp__5753__auto__){
var seq__46043__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46043__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46043__$1);
var G__46752 = cljs.core.chunk_rest(seq__46043__$1);
var G__46753 = c__4649__auto__;
var G__46754 = cljs.core.count(c__4649__auto__);
var G__46755 = (0);
seq__46043 = G__46752;
chunk__46044 = G__46753;
count__46045 = G__46754;
i__46046 = G__46755;
continue;
} else {
var vec__46070 = cljs.core.first(seq__46043__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46070,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46757 = cljs.core.next(seq__46043__$1);
var G__46758 = null;
var G__46759 = (0);
var G__46760 = (0);
seq__46043 = G__46757;
chunk__46044 = G__46758;
count__46045 = G__46759;
i__46046 = G__46760;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46083_46763 = key;
var G__46083_46764__$1 = (((G__46083_46763 instanceof cljs.core.Keyword))?G__46083_46763.fqn:null);
switch (G__46083_46764__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46767 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_46767,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_46767,"aria-");
}
})())){
el.setAttribute(ks_46767,value);
} else {
(el[ks_46767] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46106){
var map__46107 = p__46106;
var map__46107__$1 = cljs.core.__destructure_map(map__46107);
var props = map__46107__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46107__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46108 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46108,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46108,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46108,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46111 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46111,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46111;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46116 = arguments.length;
switch (G__46116) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46124){
var vec__46127 = p__46124;
var seq__46128 = cljs.core.seq(vec__46127);
var first__46129 = cljs.core.first(seq__46128);
var seq__46128__$1 = cljs.core.next(seq__46128);
var nn = first__46129;
var first__46129__$1 = cljs.core.first(seq__46128__$1);
var seq__46128__$2 = cljs.core.next(seq__46128__$1);
var np = first__46129__$1;
var nc = seq__46128__$2;
var node = vec__46127;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46134 = nn;
var G__46135 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46134,G__46135) : create_fn.call(null,G__46134,G__46135));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46137 = nn;
var G__46138 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46137,G__46138) : create_fn.call(null,G__46137,G__46138));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46143 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46143,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46143,(1),null);
var seq__46146_46773 = cljs.core.seq(node_children);
var chunk__46147_46774 = null;
var count__46148_46775 = (0);
var i__46149_46776 = (0);
while(true){
if((i__46149_46776 < count__46148_46775)){
var child_struct_46777 = chunk__46147_46774.cljs$core$IIndexed$_nth$arity$2(null,i__46149_46776);
var children_46778 = shadow.dom.dom_node(child_struct_46777);
if(cljs.core.seq_QMARK_(children_46778)){
var seq__46189_46779 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46778));
var chunk__46191_46780 = null;
var count__46192_46781 = (0);
var i__46193_46782 = (0);
while(true){
if((i__46193_46782 < count__46192_46781)){
var child_46783 = chunk__46191_46780.cljs$core$IIndexed$_nth$arity$2(null,i__46193_46782);
if(cljs.core.truth_(child_46783)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46783);


var G__46785 = seq__46189_46779;
var G__46786 = chunk__46191_46780;
var G__46787 = count__46192_46781;
var G__46788 = (i__46193_46782 + (1));
seq__46189_46779 = G__46785;
chunk__46191_46780 = G__46786;
count__46192_46781 = G__46787;
i__46193_46782 = G__46788;
continue;
} else {
var G__46789 = seq__46189_46779;
var G__46790 = chunk__46191_46780;
var G__46791 = count__46192_46781;
var G__46792 = (i__46193_46782 + (1));
seq__46189_46779 = G__46789;
chunk__46191_46780 = G__46790;
count__46192_46781 = G__46791;
i__46193_46782 = G__46792;
continue;
}
} else {
var temp__5753__auto___46793 = cljs.core.seq(seq__46189_46779);
if(temp__5753__auto___46793){
var seq__46189_46794__$1 = temp__5753__auto___46793;
if(cljs.core.chunked_seq_QMARK_(seq__46189_46794__$1)){
var c__4649__auto___46795 = cljs.core.chunk_first(seq__46189_46794__$1);
var G__46796 = cljs.core.chunk_rest(seq__46189_46794__$1);
var G__46797 = c__4649__auto___46795;
var G__46798 = cljs.core.count(c__4649__auto___46795);
var G__46799 = (0);
seq__46189_46779 = G__46796;
chunk__46191_46780 = G__46797;
count__46192_46781 = G__46798;
i__46193_46782 = G__46799;
continue;
} else {
var child_46800 = cljs.core.first(seq__46189_46794__$1);
if(cljs.core.truth_(child_46800)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46800);


var G__46802 = cljs.core.next(seq__46189_46794__$1);
var G__46803 = null;
var G__46804 = (0);
var G__46805 = (0);
seq__46189_46779 = G__46802;
chunk__46191_46780 = G__46803;
count__46192_46781 = G__46804;
i__46193_46782 = G__46805;
continue;
} else {
var G__46806 = cljs.core.next(seq__46189_46794__$1);
var G__46807 = null;
var G__46808 = (0);
var G__46809 = (0);
seq__46189_46779 = G__46806;
chunk__46191_46780 = G__46807;
count__46192_46781 = G__46808;
i__46193_46782 = G__46809;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46778);
}


var G__46810 = seq__46146_46773;
var G__46811 = chunk__46147_46774;
var G__46812 = count__46148_46775;
var G__46813 = (i__46149_46776 + (1));
seq__46146_46773 = G__46810;
chunk__46147_46774 = G__46811;
count__46148_46775 = G__46812;
i__46149_46776 = G__46813;
continue;
} else {
var temp__5753__auto___46815 = cljs.core.seq(seq__46146_46773);
if(temp__5753__auto___46815){
var seq__46146_46816__$1 = temp__5753__auto___46815;
if(cljs.core.chunked_seq_QMARK_(seq__46146_46816__$1)){
var c__4649__auto___46817 = cljs.core.chunk_first(seq__46146_46816__$1);
var G__46818 = cljs.core.chunk_rest(seq__46146_46816__$1);
var G__46819 = c__4649__auto___46817;
var G__46820 = cljs.core.count(c__4649__auto___46817);
var G__46821 = (0);
seq__46146_46773 = G__46818;
chunk__46147_46774 = G__46819;
count__46148_46775 = G__46820;
i__46149_46776 = G__46821;
continue;
} else {
var child_struct_46822 = cljs.core.first(seq__46146_46816__$1);
var children_46823 = shadow.dom.dom_node(child_struct_46822);
if(cljs.core.seq_QMARK_(children_46823)){
var seq__46198_46824 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46823));
var chunk__46200_46825 = null;
var count__46201_46826 = (0);
var i__46202_46827 = (0);
while(true){
if((i__46202_46827 < count__46201_46826)){
var child_46828 = chunk__46200_46825.cljs$core$IIndexed$_nth$arity$2(null,i__46202_46827);
if(cljs.core.truth_(child_46828)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46828);


var G__46829 = seq__46198_46824;
var G__46830 = chunk__46200_46825;
var G__46831 = count__46201_46826;
var G__46832 = (i__46202_46827 + (1));
seq__46198_46824 = G__46829;
chunk__46200_46825 = G__46830;
count__46201_46826 = G__46831;
i__46202_46827 = G__46832;
continue;
} else {
var G__46833 = seq__46198_46824;
var G__46834 = chunk__46200_46825;
var G__46835 = count__46201_46826;
var G__46836 = (i__46202_46827 + (1));
seq__46198_46824 = G__46833;
chunk__46200_46825 = G__46834;
count__46201_46826 = G__46835;
i__46202_46827 = G__46836;
continue;
}
} else {
var temp__5753__auto___46837__$1 = cljs.core.seq(seq__46198_46824);
if(temp__5753__auto___46837__$1){
var seq__46198_46838__$1 = temp__5753__auto___46837__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46198_46838__$1)){
var c__4649__auto___46839 = cljs.core.chunk_first(seq__46198_46838__$1);
var G__46840 = cljs.core.chunk_rest(seq__46198_46838__$1);
var G__46841 = c__4649__auto___46839;
var G__46842 = cljs.core.count(c__4649__auto___46839);
var G__46843 = (0);
seq__46198_46824 = G__46840;
chunk__46200_46825 = G__46841;
count__46201_46826 = G__46842;
i__46202_46827 = G__46843;
continue;
} else {
var child_46844 = cljs.core.first(seq__46198_46838__$1);
if(cljs.core.truth_(child_46844)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46844);


var G__46845 = cljs.core.next(seq__46198_46838__$1);
var G__46846 = null;
var G__46847 = (0);
var G__46848 = (0);
seq__46198_46824 = G__46845;
chunk__46200_46825 = G__46846;
count__46201_46826 = G__46847;
i__46202_46827 = G__46848;
continue;
} else {
var G__46849 = cljs.core.next(seq__46198_46838__$1);
var G__46850 = null;
var G__46851 = (0);
var G__46852 = (0);
seq__46198_46824 = G__46849;
chunk__46200_46825 = G__46850;
count__46201_46826 = G__46851;
i__46202_46827 = G__46852;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46823);
}


var G__46853 = cljs.core.next(seq__46146_46816__$1);
var G__46854 = null;
var G__46855 = (0);
var G__46856 = (0);
seq__46146_46773 = G__46853;
chunk__46147_46774 = G__46854;
count__46148_46775 = G__46855;
i__46149_46776 = G__46856;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46229 = cljs.core.seq(node);
var chunk__46230 = null;
var count__46231 = (0);
var i__46232 = (0);
while(true){
if((i__46232 < count__46231)){
var n = chunk__46230.cljs$core$IIndexed$_nth$arity$2(null,i__46232);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46859 = seq__46229;
var G__46860 = chunk__46230;
var G__46861 = count__46231;
var G__46862 = (i__46232 + (1));
seq__46229 = G__46859;
chunk__46230 = G__46860;
count__46231 = G__46861;
i__46232 = G__46862;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46229);
if(temp__5753__auto__){
var seq__46229__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46229__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46229__$1);
var G__46864 = cljs.core.chunk_rest(seq__46229__$1);
var G__46865 = c__4649__auto__;
var G__46866 = cljs.core.count(c__4649__auto__);
var G__46867 = (0);
seq__46229 = G__46864;
chunk__46230 = G__46865;
count__46231 = G__46866;
i__46232 = G__46867;
continue;
} else {
var n = cljs.core.first(seq__46229__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46868 = cljs.core.next(seq__46229__$1);
var G__46869 = null;
var G__46870 = (0);
var G__46871 = (0);
seq__46229 = G__46868;
chunk__46230 = G__46869;
count__46231 = G__46870;
i__46232 = G__46871;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46243 = arguments.length;
switch (G__46243) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46255 = arguments.length;
switch (G__46255) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46271 = arguments.length;
switch (G__46271) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46878 = arguments.length;
var i__4830__auto___46879 = (0);
while(true){
if((i__4830__auto___46879 < len__4829__auto___46878)){
args__4835__auto__.push((arguments[i__4830__auto___46879]));

var G__46880 = (i__4830__auto___46879 + (1));
i__4830__auto___46879 = G__46880;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46292_46881 = cljs.core.seq(nodes);
var chunk__46293_46882 = null;
var count__46294_46883 = (0);
var i__46295_46884 = (0);
while(true){
if((i__46295_46884 < count__46294_46883)){
var node_46885 = chunk__46293_46882.cljs$core$IIndexed$_nth$arity$2(null,i__46295_46884);
fragment.appendChild(shadow.dom._to_dom(node_46885));


var G__46886 = seq__46292_46881;
var G__46887 = chunk__46293_46882;
var G__46888 = count__46294_46883;
var G__46889 = (i__46295_46884 + (1));
seq__46292_46881 = G__46886;
chunk__46293_46882 = G__46887;
count__46294_46883 = G__46888;
i__46295_46884 = G__46889;
continue;
} else {
var temp__5753__auto___46890 = cljs.core.seq(seq__46292_46881);
if(temp__5753__auto___46890){
var seq__46292_46891__$1 = temp__5753__auto___46890;
if(cljs.core.chunked_seq_QMARK_(seq__46292_46891__$1)){
var c__4649__auto___46892 = cljs.core.chunk_first(seq__46292_46891__$1);
var G__46893 = cljs.core.chunk_rest(seq__46292_46891__$1);
var G__46894 = c__4649__auto___46892;
var G__46895 = cljs.core.count(c__4649__auto___46892);
var G__46896 = (0);
seq__46292_46881 = G__46893;
chunk__46293_46882 = G__46894;
count__46294_46883 = G__46895;
i__46295_46884 = G__46896;
continue;
} else {
var node_46897 = cljs.core.first(seq__46292_46891__$1);
fragment.appendChild(shadow.dom._to_dom(node_46897));


var G__46898 = cljs.core.next(seq__46292_46891__$1);
var G__46899 = null;
var G__46900 = (0);
var G__46901 = (0);
seq__46292_46881 = G__46898;
chunk__46293_46882 = G__46899;
count__46294_46883 = G__46900;
i__46295_46884 = G__46901;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46288){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46288));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46316_46907 = cljs.core.seq(scripts);
var chunk__46317_46908 = null;
var count__46318_46909 = (0);
var i__46319_46910 = (0);
while(true){
if((i__46319_46910 < count__46318_46909)){
var vec__46326_46911 = chunk__46317_46908.cljs$core$IIndexed$_nth$arity$2(null,i__46319_46910);
var script_tag_46912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46326_46911,(0),null);
var script_body_46913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46326_46911,(1),null);
eval(script_body_46913);


var G__46916 = seq__46316_46907;
var G__46917 = chunk__46317_46908;
var G__46918 = count__46318_46909;
var G__46919 = (i__46319_46910 + (1));
seq__46316_46907 = G__46916;
chunk__46317_46908 = G__46917;
count__46318_46909 = G__46918;
i__46319_46910 = G__46919;
continue;
} else {
var temp__5753__auto___46920 = cljs.core.seq(seq__46316_46907);
if(temp__5753__auto___46920){
var seq__46316_46921__$1 = temp__5753__auto___46920;
if(cljs.core.chunked_seq_QMARK_(seq__46316_46921__$1)){
var c__4649__auto___46925 = cljs.core.chunk_first(seq__46316_46921__$1);
var G__46926 = cljs.core.chunk_rest(seq__46316_46921__$1);
var G__46927 = c__4649__auto___46925;
var G__46928 = cljs.core.count(c__4649__auto___46925);
var G__46929 = (0);
seq__46316_46907 = G__46926;
chunk__46317_46908 = G__46927;
count__46318_46909 = G__46928;
i__46319_46910 = G__46929;
continue;
} else {
var vec__46329_46930 = cljs.core.first(seq__46316_46921__$1);
var script_tag_46931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46329_46930,(0),null);
var script_body_46932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46329_46930,(1),null);
eval(script_body_46932);


var G__46933 = cljs.core.next(seq__46316_46921__$1);
var G__46934 = null;
var G__46935 = (0);
var G__46936 = (0);
seq__46316_46907 = G__46933;
chunk__46317_46908 = G__46934;
count__46318_46909 = G__46935;
i__46319_46910 = G__46936;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46332){
var vec__46333 = p__46332;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46349 = arguments.length;
switch (G__46349) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46369 = cljs.core.seq(style_keys);
var chunk__46370 = null;
var count__46371 = (0);
var i__46372 = (0);
while(true){
if((i__46372 < count__46371)){
var it = chunk__46370.cljs$core$IIndexed$_nth$arity$2(null,i__46372);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46942 = seq__46369;
var G__46943 = chunk__46370;
var G__46944 = count__46371;
var G__46945 = (i__46372 + (1));
seq__46369 = G__46942;
chunk__46370 = G__46943;
count__46371 = G__46944;
i__46372 = G__46945;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46369);
if(temp__5753__auto__){
var seq__46369__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46369__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46369__$1);
var G__46946 = cljs.core.chunk_rest(seq__46369__$1);
var G__46947 = c__4649__auto__;
var G__46948 = cljs.core.count(c__4649__auto__);
var G__46949 = (0);
seq__46369 = G__46946;
chunk__46370 = G__46947;
count__46371 = G__46948;
i__46372 = G__46949;
continue;
} else {
var it = cljs.core.first(seq__46369__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46950 = cljs.core.next(seq__46369__$1);
var G__46951 = null;
var G__46952 = (0);
var G__46953 = (0);
seq__46369 = G__46950;
chunk__46370 = G__46951;
count__46371 = G__46952;
i__46372 = G__46953;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k46387,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__46401 = k46387;
var G__46401__$1 = (((G__46401 instanceof cljs.core.Keyword))?G__46401.fqn:null);
switch (G__46401__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46387,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__46403){
var vec__46404 = p__46403;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46404,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46404,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46386){
var self__ = this;
var G__46386__$1 = this;
return (new cljs.core.RecordIter((0),G__46386__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46388,other46389){
var self__ = this;
var this46388__$1 = this;
return (((!((other46389 == null)))) && ((((this46388__$1.constructor === other46389.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46388__$1.x,other46389.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46388__$1.y,other46389.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46388__$1.__extmap,other46389.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k46387){
var self__ = this;
var this__4479__auto____$1 = this;
var G__46426 = k46387;
var G__46426__$1 = (((G__46426 instanceof cljs.core.Keyword))?G__46426.fqn:null);
switch (G__46426__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46387);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__46386){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__46432 = cljs.core.keyword_identical_QMARK_;
var expr__46433 = k__4481__auto__;
if(cljs.core.truth_((pred__46432.cljs$core$IFn$_invoke$arity$2 ? pred__46432.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46433) : pred__46432.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46433)))){
return (new shadow.dom.Coordinate(G__46386,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46432.cljs$core$IFn$_invoke$arity$2 ? pred__46432.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46433) : pred__46432.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46433)))){
return (new shadow.dom.Coordinate(self__.x,G__46386,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__46386),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__46386){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46386,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46394){
var extmap__4512__auto__ = (function (){var G__46449 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46394,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46394)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46449);
} else {
return G__46449;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46394),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46394),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k46461,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__46472 = k46461;
var G__46472__$1 = (((G__46472 instanceof cljs.core.Keyword))?G__46472.fqn:null);
switch (G__46472__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46461,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__46480){
var vec__46482 = p__46480;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46482,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46482,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46460){
var self__ = this;
var G__46460__$1 = this;
return (new cljs.core.RecordIter((0),G__46460__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46462,other46463){
var self__ = this;
var this46462__$1 = this;
return (((!((other46463 == null)))) && ((((this46462__$1.constructor === other46463.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46462__$1.w,other46463.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46462__$1.h,other46463.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46462__$1.__extmap,other46463.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k46461){
var self__ = this;
var this__4479__auto____$1 = this;
var G__46489 = k46461;
var G__46489__$1 = (((G__46489 instanceof cljs.core.Keyword))?G__46489.fqn:null);
switch (G__46489__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46461);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__46460){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__46490 = cljs.core.keyword_identical_QMARK_;
var expr__46491 = k__4481__auto__;
if(cljs.core.truth_((pred__46490.cljs$core$IFn$_invoke$arity$2 ? pred__46490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46491) : pred__46490.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46491)))){
return (new shadow.dom.Size(G__46460,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46490.cljs$core$IFn$_invoke$arity$2 ? pred__46490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46491) : pred__46490.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46491)))){
return (new shadow.dom.Size(self__.w,G__46460,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__46460),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__46460){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46460,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46464){
var extmap__4512__auto__ = (function (){var G__46497 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46464,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46464)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46497);
} else {
return G__46497;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46464),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46464),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__46990 = (i + (1));
var G__46991 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46990;
ret = G__46991;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46502){
var vec__46503 = p__46502;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46503,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46507 = arguments.length;
switch (G__46507) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46996 = ps;
var G__46997 = (i + (1));
el__$1 = G__46996;
i = G__46997;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46519 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46519,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46519,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46519,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46523_46998 = cljs.core.seq(props);
var chunk__46524_46999 = null;
var count__46525_47000 = (0);
var i__46526_47001 = (0);
while(true){
if((i__46526_47001 < count__46525_47000)){
var vec__46544_47002 = chunk__46524_46999.cljs$core$IIndexed$_nth$arity$2(null,i__46526_47001);
var k_47003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46544_47002,(0),null);
var v_47004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46544_47002,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_47003);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47003),v_47004);


var G__47005 = seq__46523_46998;
var G__47006 = chunk__46524_46999;
var G__47007 = count__46525_47000;
var G__47008 = (i__46526_47001 + (1));
seq__46523_46998 = G__47005;
chunk__46524_46999 = G__47006;
count__46525_47000 = G__47007;
i__46526_47001 = G__47008;
continue;
} else {
var temp__5753__auto___47009 = cljs.core.seq(seq__46523_46998);
if(temp__5753__auto___47009){
var seq__46523_47010__$1 = temp__5753__auto___47009;
if(cljs.core.chunked_seq_QMARK_(seq__46523_47010__$1)){
var c__4649__auto___47011 = cljs.core.chunk_first(seq__46523_47010__$1);
var G__47012 = cljs.core.chunk_rest(seq__46523_47010__$1);
var G__47013 = c__4649__auto___47011;
var G__47014 = cljs.core.count(c__4649__auto___47011);
var G__47015 = (0);
seq__46523_46998 = G__47012;
chunk__46524_46999 = G__47013;
count__46525_47000 = G__47014;
i__46526_47001 = G__47015;
continue;
} else {
var vec__46552_47016 = cljs.core.first(seq__46523_47010__$1);
var k_47017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46552_47016,(0),null);
var v_47018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46552_47016,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_47017);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47017),v_47018);


var G__47019 = cljs.core.next(seq__46523_47010__$1);
var G__47020 = null;
var G__47021 = (0);
var G__47022 = (0);
seq__46523_46998 = G__47019;
chunk__46524_46999 = G__47020;
count__46525_47000 = G__47021;
i__46526_47001 = G__47022;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46561 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(1),null);
var seq__46564_47023 = cljs.core.seq(node_children);
var chunk__46566_47024 = null;
var count__46567_47025 = (0);
var i__46568_47026 = (0);
while(true){
if((i__46568_47026 < count__46567_47025)){
var child_struct_47028 = chunk__46566_47024.cljs$core$IIndexed$_nth$arity$2(null,i__46568_47026);
if((!((child_struct_47028 == null)))){
if(typeof child_struct_47028 === 'string'){
var text_47029 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47029),child_struct_47028].join(''));
} else {
var children_47030 = shadow.dom.svg_node(child_struct_47028);
if(cljs.core.seq_QMARK_(children_47030)){
var seq__46590_47032 = cljs.core.seq(children_47030);
var chunk__46592_47034 = null;
var count__46593_47035 = (0);
var i__46594_47036 = (0);
while(true){
if((i__46594_47036 < count__46593_47035)){
var child_47037 = chunk__46592_47034.cljs$core$IIndexed$_nth$arity$2(null,i__46594_47036);
if(cljs.core.truth_(child_47037)){
node.appendChild(child_47037);


var G__47038 = seq__46590_47032;
var G__47039 = chunk__46592_47034;
var G__47040 = count__46593_47035;
var G__47041 = (i__46594_47036 + (1));
seq__46590_47032 = G__47038;
chunk__46592_47034 = G__47039;
count__46593_47035 = G__47040;
i__46594_47036 = G__47041;
continue;
} else {
var G__47042 = seq__46590_47032;
var G__47043 = chunk__46592_47034;
var G__47044 = count__46593_47035;
var G__47045 = (i__46594_47036 + (1));
seq__46590_47032 = G__47042;
chunk__46592_47034 = G__47043;
count__46593_47035 = G__47044;
i__46594_47036 = G__47045;
continue;
}
} else {
var temp__5753__auto___47046 = cljs.core.seq(seq__46590_47032);
if(temp__5753__auto___47046){
var seq__46590_47047__$1 = temp__5753__auto___47046;
if(cljs.core.chunked_seq_QMARK_(seq__46590_47047__$1)){
var c__4649__auto___47048 = cljs.core.chunk_first(seq__46590_47047__$1);
var G__47049 = cljs.core.chunk_rest(seq__46590_47047__$1);
var G__47050 = c__4649__auto___47048;
var G__47051 = cljs.core.count(c__4649__auto___47048);
var G__47052 = (0);
seq__46590_47032 = G__47049;
chunk__46592_47034 = G__47050;
count__46593_47035 = G__47051;
i__46594_47036 = G__47052;
continue;
} else {
var child_47053 = cljs.core.first(seq__46590_47047__$1);
if(cljs.core.truth_(child_47053)){
node.appendChild(child_47053);


var G__47055 = cljs.core.next(seq__46590_47047__$1);
var G__47056 = null;
var G__47057 = (0);
var G__47058 = (0);
seq__46590_47032 = G__47055;
chunk__46592_47034 = G__47056;
count__46593_47035 = G__47057;
i__46594_47036 = G__47058;
continue;
} else {
var G__47059 = cljs.core.next(seq__46590_47047__$1);
var G__47060 = null;
var G__47061 = (0);
var G__47062 = (0);
seq__46590_47032 = G__47059;
chunk__46592_47034 = G__47060;
count__46593_47035 = G__47061;
i__46594_47036 = G__47062;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47030);
}
}


var G__47064 = seq__46564_47023;
var G__47065 = chunk__46566_47024;
var G__47066 = count__46567_47025;
var G__47067 = (i__46568_47026 + (1));
seq__46564_47023 = G__47064;
chunk__46566_47024 = G__47065;
count__46567_47025 = G__47066;
i__46568_47026 = G__47067;
continue;
} else {
var G__47068 = seq__46564_47023;
var G__47069 = chunk__46566_47024;
var G__47070 = count__46567_47025;
var G__47071 = (i__46568_47026 + (1));
seq__46564_47023 = G__47068;
chunk__46566_47024 = G__47069;
count__46567_47025 = G__47070;
i__46568_47026 = G__47071;
continue;
}
} else {
var temp__5753__auto___47072 = cljs.core.seq(seq__46564_47023);
if(temp__5753__auto___47072){
var seq__46564_47073__$1 = temp__5753__auto___47072;
if(cljs.core.chunked_seq_QMARK_(seq__46564_47073__$1)){
var c__4649__auto___47074 = cljs.core.chunk_first(seq__46564_47073__$1);
var G__47075 = cljs.core.chunk_rest(seq__46564_47073__$1);
var G__47076 = c__4649__auto___47074;
var G__47077 = cljs.core.count(c__4649__auto___47074);
var G__47079 = (0);
seq__46564_47023 = G__47075;
chunk__46566_47024 = G__47076;
count__46567_47025 = G__47077;
i__46568_47026 = G__47079;
continue;
} else {
var child_struct_47080 = cljs.core.first(seq__46564_47073__$1);
if((!((child_struct_47080 == null)))){
if(typeof child_struct_47080 === 'string'){
var text_47081 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47081),child_struct_47080].join(''));
} else {
var children_47082 = shadow.dom.svg_node(child_struct_47080);
if(cljs.core.seq_QMARK_(children_47082)){
var seq__46601_47083 = cljs.core.seq(children_47082);
var chunk__46603_47084 = null;
var count__46604_47085 = (0);
var i__46605_47086 = (0);
while(true){
if((i__46605_47086 < count__46604_47085)){
var child_47087 = chunk__46603_47084.cljs$core$IIndexed$_nth$arity$2(null,i__46605_47086);
if(cljs.core.truth_(child_47087)){
node.appendChild(child_47087);


var G__47088 = seq__46601_47083;
var G__47089 = chunk__46603_47084;
var G__47090 = count__46604_47085;
var G__47091 = (i__46605_47086 + (1));
seq__46601_47083 = G__47088;
chunk__46603_47084 = G__47089;
count__46604_47085 = G__47090;
i__46605_47086 = G__47091;
continue;
} else {
var G__47092 = seq__46601_47083;
var G__47093 = chunk__46603_47084;
var G__47094 = count__46604_47085;
var G__47095 = (i__46605_47086 + (1));
seq__46601_47083 = G__47092;
chunk__46603_47084 = G__47093;
count__46604_47085 = G__47094;
i__46605_47086 = G__47095;
continue;
}
} else {
var temp__5753__auto___47097__$1 = cljs.core.seq(seq__46601_47083);
if(temp__5753__auto___47097__$1){
var seq__46601_47098__$1 = temp__5753__auto___47097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46601_47098__$1)){
var c__4649__auto___47102 = cljs.core.chunk_first(seq__46601_47098__$1);
var G__47103 = cljs.core.chunk_rest(seq__46601_47098__$1);
var G__47104 = c__4649__auto___47102;
var G__47105 = cljs.core.count(c__4649__auto___47102);
var G__47106 = (0);
seq__46601_47083 = G__47103;
chunk__46603_47084 = G__47104;
count__46604_47085 = G__47105;
i__46605_47086 = G__47106;
continue;
} else {
var child_47107 = cljs.core.first(seq__46601_47098__$1);
if(cljs.core.truth_(child_47107)){
node.appendChild(child_47107);


var G__47108 = cljs.core.next(seq__46601_47098__$1);
var G__47109 = null;
var G__47110 = (0);
var G__47111 = (0);
seq__46601_47083 = G__47108;
chunk__46603_47084 = G__47109;
count__46604_47085 = G__47110;
i__46605_47086 = G__47111;
continue;
} else {
var G__47112 = cljs.core.next(seq__46601_47098__$1);
var G__47113 = null;
var G__47114 = (0);
var G__47115 = (0);
seq__46601_47083 = G__47112;
chunk__46603_47084 = G__47113;
count__46604_47085 = G__47114;
i__46605_47086 = G__47115;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47082);
}
}


var G__47116 = cljs.core.next(seq__46564_47073__$1);
var G__47117 = null;
var G__47118 = (0);
var G__47119 = (0);
seq__46564_47023 = G__47116;
chunk__46566_47024 = G__47117;
count__46567_47025 = G__47118;
i__46568_47026 = G__47119;
continue;
} else {
var G__47120 = cljs.core.next(seq__46564_47073__$1);
var G__47121 = null;
var G__47122 = (0);
var G__47123 = (0);
seq__46564_47023 = G__47120;
chunk__46566_47024 = G__47121;
count__46567_47025 = G__47122;
i__46568_47026 = G__47123;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47134 = arguments.length;
var i__4830__auto___47135 = (0);
while(true){
if((i__4830__auto___47135 < len__4829__auto___47134)){
args__4835__auto__.push((arguments[i__4830__auto___47135]));

var G__47136 = (i__4830__auto___47135 + (1));
i__4830__auto___47135 = G__47136;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46621){
var G__46622 = cljs.core.first(seq46621);
var seq46621__$1 = cljs.core.next(seq46621);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46622,seq46621__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46632 = arguments.length;
switch (G__46632) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__43430__auto___47144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_46653){
var state_val_46654 = (state_46653[(1)]);
if((state_val_46654 === (1))){
var state_46653__$1 = state_46653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46653__$1,(2),once_or_cleanup);
} else {
if((state_val_46654 === (2))){
var inst_46647 = (state_46653[(2)]);
var inst_46651 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46653__$1 = (function (){var statearr_46657 = state_46653;
(statearr_46657[(7)] = inst_46647);

return statearr_46657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46653__$1,inst_46651);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43273__auto__ = null;
var shadow$dom$state_machine__43273__auto____0 = (function (){
var statearr_46658 = [null,null,null,null,null,null,null,null];
(statearr_46658[(0)] = shadow$dom$state_machine__43273__auto__);

(statearr_46658[(1)] = (1));

return statearr_46658;
});
var shadow$dom$state_machine__43273__auto____1 = (function (state_46653){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_46653);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e46659){var ex__43276__auto__ = e46659;
var statearr_46660_47147 = state_46653;
(statearr_46660_47147[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_46653[(4)]))){
var statearr_46661_47148 = state_46653;
(statearr_46661_47148[(1)] = cljs.core.first((state_46653[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47149 = state_46653;
state_46653 = G__47149;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
shadow$dom$state_machine__43273__auto__ = function(state_46653){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43273__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43273__auto____1.call(this,state_46653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43273__auto____0;
shadow$dom$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43273__auto____1;
return shadow$dom$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_46662 = f__43431__auto__();
(statearr_46662[(6)] = c__43430__auto___47144);

return statearr_46662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
