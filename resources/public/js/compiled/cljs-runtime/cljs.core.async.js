goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43520 = arguments.length;
switch (G__43520) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43521 = (function (f,blockable,meta43522){
this.f = f;
this.blockable = blockable;
this.meta43522 = meta43522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43523,meta43522__$1){
var self__ = this;
var _43523__$1 = this;
return (new cljs.core.async.t_cljs$core$async43521(self__.f,self__.blockable,meta43522__$1));
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43523){
var self__ = this;
var _43523__$1 = this;
return self__.meta43522;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43522","meta43522",-1574154242,null)], null);
}));

(cljs.core.async.t_cljs$core$async43521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43521");

(cljs.core.async.t_cljs$core$async43521.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43521.
 */
cljs.core.async.__GT_t_cljs$core$async43521 = (function cljs$core$async$__GT_t_cljs$core$async43521(f__$1,blockable__$1,meta43522){
return (new cljs.core.async.t_cljs$core$async43521(f__$1,blockable__$1,meta43522));
});

}

return (new cljs.core.async.t_cljs$core$async43521(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43526 = arguments.length;
switch (G__43526) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43532 = arguments.length;
switch (G__43532) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43535 = arguments.length;
switch (G__43535) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45760 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45760) : fn1.call(null,val_45760));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45760) : fn1.call(null,val_45760));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43560 = arguments.length;
switch (G__43560) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___45770 = n;
var x_45771 = (0);
while(true){
if((x_45771 < n__4706__auto___45770)){
(a[x_45771] = x_45771);

var G__45774 = (x_45771 + (1));
x_45771 = G__45774;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43585 = (function (flag,meta43586){
this.flag = flag;
this.meta43586 = meta43586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43587,meta43586__$1){
var self__ = this;
var _43587__$1 = this;
return (new cljs.core.async.t_cljs$core$async43585(self__.flag,meta43586__$1));
}));

(cljs.core.async.t_cljs$core$async43585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43587){
var self__ = this;
var _43587__$1 = this;
return self__.meta43586;
}));

(cljs.core.async.t_cljs$core$async43585.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43586","meta43586",1416554926,null)], null);
}));

(cljs.core.async.t_cljs$core$async43585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43585");

(cljs.core.async.t_cljs$core$async43585.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43585.
 */
cljs.core.async.__GT_t_cljs$core$async43585 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43585(flag__$1,meta43586){
return (new cljs.core.async.t_cljs$core$async43585(flag__$1,meta43586));
});

}

return (new cljs.core.async.t_cljs$core$async43585(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43644 = (function (flag,cb,meta43645){
this.flag = flag;
this.cb = cb;
this.meta43645 = meta43645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43646,meta43645__$1){
var self__ = this;
var _43646__$1 = this;
return (new cljs.core.async.t_cljs$core$async43644(self__.flag,self__.cb,meta43645__$1));
}));

(cljs.core.async.t_cljs$core$async43644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43646){
var self__ = this;
var _43646__$1 = this;
return self__.meta43645;
}));

(cljs.core.async.t_cljs$core$async43644.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43644.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43645","meta43645",117291886,null)], null);
}));

(cljs.core.async.t_cljs$core$async43644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43644");

(cljs.core.async.t_cljs$core$async43644.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43644.
 */
cljs.core.async.__GT_t_cljs$core$async43644 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43644(flag__$1,cb__$1,meta43645){
return (new cljs.core.async.t_cljs$core$async43644(flag__$1,cb__$1,meta43645));
});

}

return (new cljs.core.async.t_cljs$core$async43644(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43669_SHARP_){
var G__43687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43669_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43687) : fret.call(null,G__43687));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43670_SHARP_){
var G__43692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43670_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43692) : fret.call(null,G__43692));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45785 = (i + (1));
i = G__45785;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___45787 = arguments.length;
var i__4830__auto___45788 = (0);
while(true){
if((i__4830__auto___45788 < len__4829__auto___45787)){
args__4835__auto__.push((arguments[i__4830__auto___45788]));

var G__45789 = (i__4830__auto___45788 + (1));
i__4830__auto___45788 = G__45789;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43708){
var map__43709 = p__43708;
var map__43709__$1 = cljs.core.__destructure_map(map__43709);
var opts = map__43709__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43698){
var G__43699 = cljs.core.first(seq43698);
var seq43698__$1 = cljs.core.next(seq43698);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43699,seq43698__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43716 = arguments.length;
switch (G__43716) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43430__auto___45791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_43771){
var state_val_43775 = (state_43771[(1)]);
if((state_val_43775 === (7))){
var inst_43761 = (state_43771[(2)]);
var state_43771__$1 = state_43771;
var statearr_43789_45792 = state_43771__$1;
(statearr_43789_45792[(2)] = inst_43761);

(statearr_43789_45792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (1))){
var state_43771__$1 = state_43771;
var statearr_43791_45793 = state_43771__$1;
(statearr_43791_45793[(2)] = null);

(statearr_43791_45793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (4))){
var inst_43732 = (state_43771[(7)]);
var inst_43732__$1 = (state_43771[(2)]);
var inst_43739 = (inst_43732__$1 == null);
var state_43771__$1 = (function (){var statearr_43793 = state_43771;
(statearr_43793[(7)] = inst_43732__$1);

return statearr_43793;
})();
if(cljs.core.truth_(inst_43739)){
var statearr_43796_45794 = state_43771__$1;
(statearr_43796_45794[(1)] = (5));

} else {
var statearr_43798_45797 = state_43771__$1;
(statearr_43798_45797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (13))){
var state_43771__$1 = state_43771;
var statearr_43801_45798 = state_43771__$1;
(statearr_43801_45798[(2)] = null);

(statearr_43801_45798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (6))){
var inst_43732 = (state_43771[(7)]);
var state_43771__$1 = state_43771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43771__$1,(11),to,inst_43732);
} else {
if((state_val_43775 === (3))){
var inst_43764 = (state_43771[(2)]);
var state_43771__$1 = state_43771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43771__$1,inst_43764);
} else {
if((state_val_43775 === (12))){
var state_43771__$1 = state_43771;
var statearr_43808_45799 = state_43771__$1;
(statearr_43808_45799[(2)] = null);

(statearr_43808_45799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (2))){
var state_43771__$1 = state_43771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43771__$1,(4),from);
} else {
if((state_val_43775 === (11))){
var inst_43750 = (state_43771[(2)]);
var state_43771__$1 = state_43771;
if(cljs.core.truth_(inst_43750)){
var statearr_43809_45802 = state_43771__$1;
(statearr_43809_45802[(1)] = (12));

} else {
var statearr_43810_45803 = state_43771__$1;
(statearr_43810_45803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (9))){
var state_43771__$1 = state_43771;
var statearr_43814_45804 = state_43771__$1;
(statearr_43814_45804[(2)] = null);

(statearr_43814_45804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (5))){
var state_43771__$1 = state_43771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43815_45805 = state_43771__$1;
(statearr_43815_45805[(1)] = (8));

} else {
var statearr_43816_45806 = state_43771__$1;
(statearr_43816_45806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (14))){
var inst_43759 = (state_43771[(2)]);
var state_43771__$1 = state_43771;
var statearr_43825_45809 = state_43771__$1;
(statearr_43825_45809[(2)] = inst_43759);

(statearr_43825_45809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (10))){
var inst_43746 = (state_43771[(2)]);
var state_43771__$1 = state_43771;
var statearr_43834_45810 = state_43771__$1;
(statearr_43834_45810[(2)] = inst_43746);

(statearr_43834_45810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43775 === (8))){
var inst_43743 = cljs.core.async.close_BANG_(to);
var state_43771__$1 = state_43771;
var statearr_43843_45811 = state_43771__$1;
(statearr_43843_45811[(2)] = inst_43743);

(statearr_43843_45811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_43844 = [null,null,null,null,null,null,null,null];
(statearr_43844[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_43844[(1)] = (1));

return statearr_43844;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_43771){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_43771);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e43855){var ex__43276__auto__ = e43855;
var statearr_43856_45812 = state_43771;
(statearr_43856_45812[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_43771[(4)]))){
var statearr_43862_45813 = state_43771;
(statearr_43862_45813[(1)] = cljs.core.first((state_43771[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45814 = state_43771;
state_43771 = G__45814;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_43771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_43771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_43871 = f__43431__auto__();
(statearr_43871[(6)] = c__43430__auto___45791);

return statearr_43871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43877){
var vec__43878 = p__43877;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43878,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43878,(1),null);
var job = vec__43878;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43430__auto___45815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_43885){
var state_val_43886 = (state_43885[(1)]);
if((state_val_43886 === (1))){
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43885__$1,(2),res,v);
} else {
if((state_val_43886 === (2))){
var inst_43882 = (state_43885[(2)]);
var inst_43883 = cljs.core.async.close_BANG_(res);
var state_43885__$1 = (function (){var statearr_43929 = state_43885;
(statearr_43929[(7)] = inst_43882);

return statearr_43929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43885__$1,inst_43883);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0 = (function (){
var statearr_43946 = [null,null,null,null,null,null,null,null];
(statearr_43946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__);

(statearr_43946[(1)] = (1));

return statearr_43946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1 = (function (state_43885){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_43885);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e43958){var ex__43276__auto__ = e43958;
var statearr_43959_45816 = state_43885;
(statearr_43959_45816[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_43885[(4)]))){
var statearr_43964_45817 = state_43885;
(statearr_43964_45817[(1)] = cljs.core.first((state_43885[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45818 = state_43885;
state_43885 = G__45818;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = function(state_43885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1.call(this,state_43885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_43971 = f__43431__auto__();
(statearr_43971[(6)] = c__43430__auto___45815);

return statearr_43971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44005){
var vec__44006 = p__44005;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44006,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44006,(1),null);
var job = vec__44006;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___45819 = n;
var __45820 = (0);
while(true){
if((__45820 < n__4706__auto___45819)){
var G__44009_45821 = type;
var G__44009_45822__$1 = (((G__44009_45821 instanceof cljs.core.Keyword))?G__44009_45821.fqn:null);
switch (G__44009_45822__$1) {
case "compute":
var c__43430__auto___45824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45820,c__43430__auto___45824,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async){
return (function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = ((function (__45820,c__43430__auto___45824,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async){
return (function (state_44022){
var state_val_44023 = (state_44022[(1)]);
if((state_val_44023 === (1))){
var state_44022__$1 = state_44022;
var statearr_44024_45826 = state_44022__$1;
(statearr_44024_45826[(2)] = null);

(statearr_44024_45826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44023 === (2))){
var state_44022__$1 = state_44022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44022__$1,(4),jobs);
} else {
if((state_val_44023 === (3))){
var inst_44020 = (state_44022[(2)]);
var state_44022__$1 = state_44022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44022__$1,inst_44020);
} else {
if((state_val_44023 === (4))){
var inst_44012 = (state_44022[(2)]);
var inst_44013 = process(inst_44012);
var state_44022__$1 = state_44022;
if(cljs.core.truth_(inst_44013)){
var statearr_44025_45827 = state_44022__$1;
(statearr_44025_45827[(1)] = (5));

} else {
var statearr_44026_45828 = state_44022__$1;
(statearr_44026_45828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44023 === (5))){
var state_44022__$1 = state_44022;
var statearr_44027_45829 = state_44022__$1;
(statearr_44027_45829[(2)] = null);

(statearr_44027_45829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44023 === (6))){
var state_44022__$1 = state_44022;
var statearr_44028_45830 = state_44022__$1;
(statearr_44028_45830[(2)] = null);

(statearr_44028_45830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44023 === (7))){
var inst_44018 = (state_44022[(2)]);
var state_44022__$1 = state_44022;
var statearr_44029_45831 = state_44022__$1;
(statearr_44029_45831[(2)] = inst_44018);

(statearr_44029_45831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45820,c__43430__auto___45824,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async))
;
return ((function (__45820,switch__43272__auto__,c__43430__auto___45824,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0 = (function (){
var statearr_44030 = [null,null,null,null,null,null,null];
(statearr_44030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__);

(statearr_44030[(1)] = (1));

return statearr_44030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1 = (function (state_44022){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44022);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44031){var ex__43276__auto__ = e44031;
var statearr_44032_45832 = state_44022;
(statearr_44032_45832[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44022[(4)]))){
var statearr_44033_45833 = state_44022;
(statearr_44033_45833[(1)] = cljs.core.first((state_44022[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45834 = state_44022;
state_44022 = G__45834;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = function(state_44022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1.call(this,state_44022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__;
})()
;})(__45820,switch__43272__auto__,c__43430__auto___45824,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async))
})();
var state__43432__auto__ = (function (){var statearr_44034 = f__43431__auto__();
(statearr_44034[(6)] = c__43430__auto___45824);

return statearr_44034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
});})(__45820,c__43430__auto___45824,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async))
);


break;
case "async":
var c__43430__auto___45835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45820,c__43430__auto___45835,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async){
return (function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = ((function (__45820,c__43430__auto___45835,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async){
return (function (state_44047){
var state_val_44048 = (state_44047[(1)]);
if((state_val_44048 === (1))){
var state_44047__$1 = state_44047;
var statearr_44049_45836 = state_44047__$1;
(statearr_44049_45836[(2)] = null);

(statearr_44049_45836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (2))){
var state_44047__$1 = state_44047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44047__$1,(4),jobs);
} else {
if((state_val_44048 === (3))){
var inst_44045 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44047__$1,inst_44045);
} else {
if((state_val_44048 === (4))){
var inst_44037 = (state_44047[(2)]);
var inst_44038 = async(inst_44037);
var state_44047__$1 = state_44047;
if(cljs.core.truth_(inst_44038)){
var statearr_44050_45837 = state_44047__$1;
(statearr_44050_45837[(1)] = (5));

} else {
var statearr_44051_45838 = state_44047__$1;
(statearr_44051_45838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (5))){
var state_44047__$1 = state_44047;
var statearr_44052_45839 = state_44047__$1;
(statearr_44052_45839[(2)] = null);

(statearr_44052_45839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (6))){
var state_44047__$1 = state_44047;
var statearr_44053_45840 = state_44047__$1;
(statearr_44053_45840[(2)] = null);

(statearr_44053_45840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44048 === (7))){
var inst_44043 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
var statearr_44054_45841 = state_44047__$1;
(statearr_44054_45841[(2)] = inst_44043);

(statearr_44054_45841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45820,c__43430__auto___45835,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async))
;
return ((function (__45820,switch__43272__auto__,c__43430__auto___45835,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0 = (function (){
var statearr_44055 = [null,null,null,null,null,null,null];
(statearr_44055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__);

(statearr_44055[(1)] = (1));

return statearr_44055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1 = (function (state_44047){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44047);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44059){var ex__43276__auto__ = e44059;
var statearr_44060_45844 = state_44047;
(statearr_44060_45844[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44047[(4)]))){
var statearr_44061_45846 = state_44047;
(statearr_44061_45846[(1)] = cljs.core.first((state_44047[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45847 = state_44047;
state_44047 = G__45847;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = function(state_44047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1.call(this,state_44047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__;
})()
;})(__45820,switch__43272__auto__,c__43430__auto___45835,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async))
})();
var state__43432__auto__ = (function (){var statearr_44062 = f__43431__auto__();
(statearr_44062[(6)] = c__43430__auto___45835);

return statearr_44062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
});})(__45820,c__43430__auto___45835,G__44009_45821,G__44009_45822__$1,n__4706__auto___45819,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44009_45822__$1)].join('')));

}

var G__45848 = (__45820 + (1));
__45820 = G__45848;
continue;
} else {
}
break;
}

var c__43430__auto___45849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44085){
var state_val_44086 = (state_44085[(1)]);
if((state_val_44086 === (7))){
var inst_44080 = (state_44085[(2)]);
var state_44085__$1 = state_44085;
var statearr_44087_45850 = state_44085__$1;
(statearr_44087_45850[(2)] = inst_44080);

(statearr_44087_45850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (1))){
var state_44085__$1 = state_44085;
var statearr_44088_45851 = state_44085__$1;
(statearr_44088_45851[(2)] = null);

(statearr_44088_45851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (4))){
var inst_44065 = (state_44085[(7)]);
var inst_44065__$1 = (state_44085[(2)]);
var inst_44066 = (inst_44065__$1 == null);
var state_44085__$1 = (function (){var statearr_44089 = state_44085;
(statearr_44089[(7)] = inst_44065__$1);

return statearr_44089;
})();
if(cljs.core.truth_(inst_44066)){
var statearr_44090_45852 = state_44085__$1;
(statearr_44090_45852[(1)] = (5));

} else {
var statearr_44091_45853 = state_44085__$1;
(statearr_44091_45853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (6))){
var inst_44070 = (state_44085[(8)]);
var inst_44065 = (state_44085[(7)]);
var inst_44070__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44072 = [inst_44065,inst_44070__$1];
var inst_44073 = (new cljs.core.PersistentVector(null,2,(5),inst_44071,inst_44072,null));
var state_44085__$1 = (function (){var statearr_44092 = state_44085;
(statearr_44092[(8)] = inst_44070__$1);

return statearr_44092;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44085__$1,(8),jobs,inst_44073);
} else {
if((state_val_44086 === (3))){
var inst_44082 = (state_44085[(2)]);
var state_44085__$1 = state_44085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44085__$1,inst_44082);
} else {
if((state_val_44086 === (2))){
var state_44085__$1 = state_44085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44085__$1,(4),from);
} else {
if((state_val_44086 === (9))){
var inst_44077 = (state_44085[(2)]);
var state_44085__$1 = (function (){var statearr_44093 = state_44085;
(statearr_44093[(9)] = inst_44077);

return statearr_44093;
})();
var statearr_44094_45856 = state_44085__$1;
(statearr_44094_45856[(2)] = null);

(statearr_44094_45856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (5))){
var inst_44068 = cljs.core.async.close_BANG_(jobs);
var state_44085__$1 = state_44085;
var statearr_44095_45857 = state_44085__$1;
(statearr_44095_45857[(2)] = inst_44068);

(statearr_44095_45857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44086 === (8))){
var inst_44070 = (state_44085[(8)]);
var inst_44075 = (state_44085[(2)]);
var state_44085__$1 = (function (){var statearr_44097 = state_44085;
(statearr_44097[(10)] = inst_44075);

return statearr_44097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44085__$1,(9),results,inst_44070);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0 = (function (){
var statearr_44099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__);

(statearr_44099[(1)] = (1));

return statearr_44099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1 = (function (state_44085){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44085);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44101){var ex__43276__auto__ = e44101;
var statearr_44102_45859 = state_44085;
(statearr_44102_45859[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44085[(4)]))){
var statearr_44103_45860 = state_44085;
(statearr_44103_45860[(1)] = cljs.core.first((state_44085[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45861 = state_44085;
state_44085 = G__45861;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = function(state_44085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1.call(this,state_44085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44106 = f__43431__auto__();
(statearr_44106[(6)] = c__43430__auto___45849);

return statearr_44106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


var c__43430__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44148){
var state_val_44149 = (state_44148[(1)]);
if((state_val_44149 === (7))){
var inst_44144 = (state_44148[(2)]);
var state_44148__$1 = state_44148;
var statearr_44150_45864 = state_44148__$1;
(statearr_44150_45864[(2)] = inst_44144);

(statearr_44150_45864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (20))){
var state_44148__$1 = state_44148;
var statearr_44151_45865 = state_44148__$1;
(statearr_44151_45865[(2)] = null);

(statearr_44151_45865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (1))){
var state_44148__$1 = state_44148;
var statearr_44152_45866 = state_44148__$1;
(statearr_44152_45866[(2)] = null);

(statearr_44152_45866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (4))){
var inst_44109 = (state_44148[(7)]);
var inst_44109__$1 = (state_44148[(2)]);
var inst_44110 = (inst_44109__$1 == null);
var state_44148__$1 = (function (){var statearr_44154 = state_44148;
(statearr_44154[(7)] = inst_44109__$1);

return statearr_44154;
})();
if(cljs.core.truth_(inst_44110)){
var statearr_44155_45868 = state_44148__$1;
(statearr_44155_45868[(1)] = (5));

} else {
var statearr_44156_45869 = state_44148__$1;
(statearr_44156_45869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (15))){
var inst_44124 = (state_44148[(8)]);
var state_44148__$1 = state_44148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44148__$1,(18),to,inst_44124);
} else {
if((state_val_44149 === (21))){
var inst_44139 = (state_44148[(2)]);
var state_44148__$1 = state_44148;
var statearr_44157_45870 = state_44148__$1;
(statearr_44157_45870[(2)] = inst_44139);

(statearr_44157_45870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (13))){
var inst_44141 = (state_44148[(2)]);
var state_44148__$1 = (function (){var statearr_44158 = state_44148;
(statearr_44158[(9)] = inst_44141);

return statearr_44158;
})();
var statearr_44160_45872 = state_44148__$1;
(statearr_44160_45872[(2)] = null);

(statearr_44160_45872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (6))){
var inst_44109 = (state_44148[(7)]);
var state_44148__$1 = state_44148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44148__$1,(11),inst_44109);
} else {
if((state_val_44149 === (17))){
var inst_44134 = (state_44148[(2)]);
var state_44148__$1 = state_44148;
if(cljs.core.truth_(inst_44134)){
var statearr_44164_45873 = state_44148__$1;
(statearr_44164_45873[(1)] = (19));

} else {
var statearr_44165_45875 = state_44148__$1;
(statearr_44165_45875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (3))){
var inst_44146 = (state_44148[(2)]);
var state_44148__$1 = state_44148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44148__$1,inst_44146);
} else {
if((state_val_44149 === (12))){
var inst_44121 = (state_44148[(10)]);
var state_44148__$1 = state_44148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44148__$1,(14),inst_44121);
} else {
if((state_val_44149 === (2))){
var state_44148__$1 = state_44148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44148__$1,(4),results);
} else {
if((state_val_44149 === (19))){
var state_44148__$1 = state_44148;
var statearr_44168_45876 = state_44148__$1;
(statearr_44168_45876[(2)] = null);

(statearr_44168_45876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (11))){
var inst_44121 = (state_44148[(2)]);
var state_44148__$1 = (function (){var statearr_44169 = state_44148;
(statearr_44169[(10)] = inst_44121);

return statearr_44169;
})();
var statearr_44170_45877 = state_44148__$1;
(statearr_44170_45877[(2)] = null);

(statearr_44170_45877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (9))){
var state_44148__$1 = state_44148;
var statearr_44172_45878 = state_44148__$1;
(statearr_44172_45878[(2)] = null);

(statearr_44172_45878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (5))){
var state_44148__$1 = state_44148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44174_45882 = state_44148__$1;
(statearr_44174_45882[(1)] = (8));

} else {
var statearr_44175_45883 = state_44148__$1;
(statearr_44175_45883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (14))){
var inst_44127 = (state_44148[(11)]);
var inst_44124 = (state_44148[(8)]);
var inst_44124__$1 = (state_44148[(2)]);
var inst_44126 = (inst_44124__$1 == null);
var inst_44127__$1 = cljs.core.not(inst_44126);
var state_44148__$1 = (function (){var statearr_44176 = state_44148;
(statearr_44176[(11)] = inst_44127__$1);

(statearr_44176[(8)] = inst_44124__$1);

return statearr_44176;
})();
if(inst_44127__$1){
var statearr_44177_45884 = state_44148__$1;
(statearr_44177_45884[(1)] = (15));

} else {
var statearr_44180_45885 = state_44148__$1;
(statearr_44180_45885[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (16))){
var inst_44127 = (state_44148[(11)]);
var state_44148__$1 = state_44148;
var statearr_44182_45886 = state_44148__$1;
(statearr_44182_45886[(2)] = inst_44127);

(statearr_44182_45886[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (10))){
var inst_44118 = (state_44148[(2)]);
var state_44148__$1 = state_44148;
var statearr_44184_45887 = state_44148__$1;
(statearr_44184_45887[(2)] = inst_44118);

(statearr_44184_45887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (18))){
var inst_44131 = (state_44148[(2)]);
var state_44148__$1 = state_44148;
var statearr_44185_45888 = state_44148__$1;
(statearr_44185_45888[(2)] = inst_44131);

(statearr_44185_45888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44149 === (8))){
var inst_44115 = cljs.core.async.close_BANG_(to);
var state_44148__$1 = state_44148;
var statearr_44186_45889 = state_44148__$1;
(statearr_44186_45889[(2)] = inst_44115);

(statearr_44186_45889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1 = (function (state_44148){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44148);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44190){var ex__43276__auto__ = e44190;
var statearr_44191_45891 = state_44148;
(statearr_44191_45891[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44148[(4)]))){
var statearr_44192_45893 = state_44148;
(statearr_44192_45893[(1)] = cljs.core.first((state_44148[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45894 = state_44148;
state_44148 = G__45894;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__ = function(state_44148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1.call(this,state_44148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44193 = f__43431__auto__();
(statearr_44193[(6)] = c__43430__auto__);

return statearr_44193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));

return c__43430__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44199 = arguments.length;
switch (G__44199) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44203 = arguments.length;
switch (G__44203) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44215 = arguments.length;
switch (G__44215) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43430__auto___45899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44241){
var state_val_44242 = (state_44241[(1)]);
if((state_val_44242 === (7))){
var inst_44237 = (state_44241[(2)]);
var state_44241__$1 = state_44241;
var statearr_44246_45900 = state_44241__$1;
(statearr_44246_45900[(2)] = inst_44237);

(statearr_44246_45900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (1))){
var state_44241__$1 = state_44241;
var statearr_44247_45902 = state_44241__$1;
(statearr_44247_45902[(2)] = null);

(statearr_44247_45902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (4))){
var inst_44218 = (state_44241[(7)]);
var inst_44218__$1 = (state_44241[(2)]);
var inst_44219 = (inst_44218__$1 == null);
var state_44241__$1 = (function (){var statearr_44248 = state_44241;
(statearr_44248[(7)] = inst_44218__$1);

return statearr_44248;
})();
if(cljs.core.truth_(inst_44219)){
var statearr_44249_45903 = state_44241__$1;
(statearr_44249_45903[(1)] = (5));

} else {
var statearr_44250_45904 = state_44241__$1;
(statearr_44250_45904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (13))){
var state_44241__$1 = state_44241;
var statearr_44251_45906 = state_44241__$1;
(statearr_44251_45906[(2)] = null);

(statearr_44251_45906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (6))){
var inst_44218 = (state_44241[(7)]);
var inst_44224 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44218) : p.call(null,inst_44218));
var state_44241__$1 = state_44241;
if(cljs.core.truth_(inst_44224)){
var statearr_44252_45907 = state_44241__$1;
(statearr_44252_45907[(1)] = (9));

} else {
var statearr_44253_45909 = state_44241__$1;
(statearr_44253_45909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (3))){
var inst_44239 = (state_44241[(2)]);
var state_44241__$1 = state_44241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44241__$1,inst_44239);
} else {
if((state_val_44242 === (12))){
var state_44241__$1 = state_44241;
var statearr_44254_45910 = state_44241__$1;
(statearr_44254_45910[(2)] = null);

(statearr_44254_45910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (2))){
var state_44241__$1 = state_44241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44241__$1,(4),ch);
} else {
if((state_val_44242 === (11))){
var inst_44218 = (state_44241[(7)]);
var inst_44228 = (state_44241[(2)]);
var state_44241__$1 = state_44241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44241__$1,(8),inst_44228,inst_44218);
} else {
if((state_val_44242 === (9))){
var state_44241__$1 = state_44241;
var statearr_44261_45911 = state_44241__$1;
(statearr_44261_45911[(2)] = tc);

(statearr_44261_45911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (5))){
var inst_44221 = cljs.core.async.close_BANG_(tc);
var inst_44222 = cljs.core.async.close_BANG_(fc);
var state_44241__$1 = (function (){var statearr_44263 = state_44241;
(statearr_44263[(8)] = inst_44221);

return statearr_44263;
})();
var statearr_44264_45912 = state_44241__$1;
(statearr_44264_45912[(2)] = inst_44222);

(statearr_44264_45912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (14))){
var inst_44235 = (state_44241[(2)]);
var state_44241__$1 = state_44241;
var statearr_44266_45913 = state_44241__$1;
(statearr_44266_45913[(2)] = inst_44235);

(statearr_44266_45913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (10))){
var state_44241__$1 = state_44241;
var statearr_44267_45914 = state_44241__$1;
(statearr_44267_45914[(2)] = fc);

(statearr_44267_45914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44242 === (8))){
var inst_44230 = (state_44241[(2)]);
var state_44241__$1 = state_44241;
if(cljs.core.truth_(inst_44230)){
var statearr_44268_45915 = state_44241__$1;
(statearr_44268_45915[(1)] = (12));

} else {
var statearr_44269_45916 = state_44241__$1;
(statearr_44269_45916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_44270 = [null,null,null,null,null,null,null,null,null];
(statearr_44270[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_44270[(1)] = (1));

return statearr_44270;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_44241){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44241);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44271){var ex__43276__auto__ = e44271;
var statearr_44272_45917 = state_44241;
(statearr_44272_45917[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44241[(4)]))){
var statearr_44273_45918 = state_44241;
(statearr_44273_45918[(1)] = cljs.core.first((state_44241[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45919 = state_44241;
state_44241 = G__45919;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_44241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_44241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44274 = f__43431__auto__();
(statearr_44274[(6)] = c__43430__auto___45899);

return statearr_44274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43430__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44304){
var state_val_44305 = (state_44304[(1)]);
if((state_val_44305 === (7))){
var inst_44300 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
var statearr_44308_45920 = state_44304__$1;
(statearr_44308_45920[(2)] = inst_44300);

(statearr_44308_45920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (1))){
var inst_44279 = init;
var inst_44280 = inst_44279;
var state_44304__$1 = (function (){var statearr_44309 = state_44304;
(statearr_44309[(7)] = inst_44280);

return statearr_44309;
})();
var statearr_44310_45921 = state_44304__$1;
(statearr_44310_45921[(2)] = null);

(statearr_44310_45921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (4))){
var inst_44287 = (state_44304[(8)]);
var inst_44287__$1 = (state_44304[(2)]);
var inst_44288 = (inst_44287__$1 == null);
var state_44304__$1 = (function (){var statearr_44315 = state_44304;
(statearr_44315[(8)] = inst_44287__$1);

return statearr_44315;
})();
if(cljs.core.truth_(inst_44288)){
var statearr_44316_45922 = state_44304__$1;
(statearr_44316_45922[(1)] = (5));

} else {
var statearr_44317_45923 = state_44304__$1;
(statearr_44317_45923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (6))){
var inst_44280 = (state_44304[(7)]);
var inst_44287 = (state_44304[(8)]);
var inst_44291 = (state_44304[(9)]);
var inst_44291__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44280,inst_44287) : f.call(null,inst_44280,inst_44287));
var inst_44292 = cljs.core.reduced_QMARK_(inst_44291__$1);
var state_44304__$1 = (function (){var statearr_44318 = state_44304;
(statearr_44318[(9)] = inst_44291__$1);

return statearr_44318;
})();
if(inst_44292){
var statearr_44319_45925 = state_44304__$1;
(statearr_44319_45925[(1)] = (8));

} else {
var statearr_44320_45926 = state_44304__$1;
(statearr_44320_45926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (3))){
var inst_44302 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44304__$1,inst_44302);
} else {
if((state_val_44305 === (2))){
var state_44304__$1 = state_44304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44304__$1,(4),ch);
} else {
if((state_val_44305 === (9))){
var inst_44291 = (state_44304[(9)]);
var inst_44280 = inst_44291;
var state_44304__$1 = (function (){var statearr_44325 = state_44304;
(statearr_44325[(7)] = inst_44280);

return statearr_44325;
})();
var statearr_44326_45928 = state_44304__$1;
(statearr_44326_45928[(2)] = null);

(statearr_44326_45928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (5))){
var inst_44280 = (state_44304[(7)]);
var state_44304__$1 = state_44304;
var statearr_44327_45929 = state_44304__$1;
(statearr_44327_45929[(2)] = inst_44280);

(statearr_44327_45929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (10))){
var inst_44298 = (state_44304[(2)]);
var state_44304__$1 = state_44304;
var statearr_44328_45930 = state_44304__$1;
(statearr_44328_45930[(2)] = inst_44298);

(statearr_44328_45930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44305 === (8))){
var inst_44291 = (state_44304[(9)]);
var inst_44294 = cljs.core.deref(inst_44291);
var state_44304__$1 = state_44304;
var statearr_44330_45931 = state_44304__$1;
(statearr_44330_45931[(2)] = inst_44294);

(statearr_44330_45931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43273__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43273__auto____0 = (function (){
var statearr_44334 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44334[(0)] = cljs$core$async$reduce_$_state_machine__43273__auto__);

(statearr_44334[(1)] = (1));

return statearr_44334;
});
var cljs$core$async$reduce_$_state_machine__43273__auto____1 = (function (state_44304){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44304);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44335){var ex__43276__auto__ = e44335;
var statearr_44337_45932 = state_44304;
(statearr_44337_45932[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44304[(4)]))){
var statearr_44338_45933 = state_44304;
(statearr_44338_45933[(1)] = cljs.core.first((state_44304[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45934 = state_44304;
state_44304 = G__45934;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43273__auto__ = function(state_44304){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43273__auto____1.call(this,state_44304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43273__auto____0;
cljs$core$async$reduce_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43273__auto____1;
return cljs$core$async$reduce_$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44339 = f__43431__auto__();
(statearr_44339[(6)] = c__43430__auto__);

return statearr_44339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));

return c__43430__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43430__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44351){
var state_val_44352 = (state_44351[(1)]);
if((state_val_44352 === (1))){
var inst_44346 = cljs.core.async.reduce(f__$1,init,ch);
var state_44351__$1 = state_44351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44351__$1,(2),inst_44346);
} else {
if((state_val_44352 === (2))){
var inst_44348 = (state_44351[(2)]);
var inst_44349 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44348) : f__$1.call(null,inst_44348));
var state_44351__$1 = state_44351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44351__$1,inst_44349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43273__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43273__auto____0 = (function (){
var statearr_44357 = [null,null,null,null,null,null,null];
(statearr_44357[(0)] = cljs$core$async$transduce_$_state_machine__43273__auto__);

(statearr_44357[(1)] = (1));

return statearr_44357;
});
var cljs$core$async$transduce_$_state_machine__43273__auto____1 = (function (state_44351){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44351);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44358){var ex__43276__auto__ = e44358;
var statearr_44359_45936 = state_44351;
(statearr_44359_45936[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44351[(4)]))){
var statearr_44360_45938 = state_44351;
(statearr_44360_45938[(1)] = cljs.core.first((state_44351[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45939 = state_44351;
state_44351 = G__45939;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43273__auto__ = function(state_44351){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43273__auto____1.call(this,state_44351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43273__auto____0;
cljs$core$async$transduce_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43273__auto____1;
return cljs$core$async$transduce_$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44361 = f__43431__auto__();
(statearr_44361[(6)] = c__43430__auto__);

return statearr_44361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));

return c__43430__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44365 = arguments.length;
switch (G__44365) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43430__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44394){
var state_val_44395 = (state_44394[(1)]);
if((state_val_44395 === (7))){
var inst_44374 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44396_45941 = state_44394__$1;
(statearr_44396_45941[(2)] = inst_44374);

(statearr_44396_45941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (1))){
var inst_44368 = cljs.core.seq(coll);
var inst_44369 = inst_44368;
var state_44394__$1 = (function (){var statearr_44397 = state_44394;
(statearr_44397[(7)] = inst_44369);

return statearr_44397;
})();
var statearr_44398_45942 = state_44394__$1;
(statearr_44398_45942[(2)] = null);

(statearr_44398_45942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (4))){
var inst_44369 = (state_44394[(7)]);
var inst_44372 = cljs.core.first(inst_44369);
var state_44394__$1 = state_44394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44394__$1,(7),ch,inst_44372);
} else {
if((state_val_44395 === (13))){
var inst_44388 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44399_45944 = state_44394__$1;
(statearr_44399_45944[(2)] = inst_44388);

(statearr_44399_45944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (6))){
var inst_44378 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44378)){
var statearr_44400_45946 = state_44394__$1;
(statearr_44400_45946[(1)] = (8));

} else {
var statearr_44401_45947 = state_44394__$1;
(statearr_44401_45947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (3))){
var inst_44392 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44394__$1,inst_44392);
} else {
if((state_val_44395 === (12))){
var state_44394__$1 = state_44394;
var statearr_44403_45948 = state_44394__$1;
(statearr_44403_45948[(2)] = null);

(statearr_44403_45948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (2))){
var inst_44369 = (state_44394[(7)]);
var state_44394__$1 = state_44394;
if(cljs.core.truth_(inst_44369)){
var statearr_44404_45949 = state_44394__$1;
(statearr_44404_45949[(1)] = (4));

} else {
var statearr_44405_45950 = state_44394__$1;
(statearr_44405_45950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (11))){
var inst_44385 = cljs.core.async.close_BANG_(ch);
var state_44394__$1 = state_44394;
var statearr_44406_45951 = state_44394__$1;
(statearr_44406_45951[(2)] = inst_44385);

(statearr_44406_45951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (9))){
var state_44394__$1 = state_44394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44407_45952 = state_44394__$1;
(statearr_44407_45952[(1)] = (11));

} else {
var statearr_44408_45953 = state_44394__$1;
(statearr_44408_45953[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (5))){
var inst_44369 = (state_44394[(7)]);
var state_44394__$1 = state_44394;
var statearr_44409_45955 = state_44394__$1;
(statearr_44409_45955[(2)] = inst_44369);

(statearr_44409_45955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (10))){
var inst_44390 = (state_44394[(2)]);
var state_44394__$1 = state_44394;
var statearr_44410_45959 = state_44394__$1;
(statearr_44410_45959[(2)] = inst_44390);

(statearr_44410_45959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44395 === (8))){
var inst_44369 = (state_44394[(7)]);
var inst_44381 = cljs.core.next(inst_44369);
var inst_44369__$1 = inst_44381;
var state_44394__$1 = (function (){var statearr_44412 = state_44394;
(statearr_44412[(7)] = inst_44369__$1);

return statearr_44412;
})();
var statearr_44413_45960 = state_44394__$1;
(statearr_44413_45960[(2)] = null);

(statearr_44413_45960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_44414 = [null,null,null,null,null,null,null,null];
(statearr_44414[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_44414[(1)] = (1));

return statearr_44414;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_44394){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44394);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44415){var ex__43276__auto__ = e44415;
var statearr_44416_45961 = state_44394;
(statearr_44416_45961[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44394[(4)]))){
var statearr_44417_45962 = state_44394;
(statearr_44417_45962[(1)] = cljs.core.first((state_44394[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45963 = state_44394;
state_44394 = G__45963;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_44394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_44394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44418 = f__43431__auto__();
(statearr_44418[(6)] = c__43430__auto__);

return statearr_44418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));

return c__43430__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44420 = arguments.length;
switch (G__44420) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45969 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45969(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45972 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45972(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45979 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45979(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45982 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45982(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44470 = (function (ch,cs,meta44471){
this.ch = ch;
this.cs = cs;
this.meta44471 = meta44471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44472,meta44471__$1){
var self__ = this;
var _44472__$1 = this;
return (new cljs.core.async.t_cljs$core$async44470(self__.ch,self__.cs,meta44471__$1));
}));

(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44472){
var self__ = this;
var _44472__$1 = this;
return self__.meta44471;
}));

(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44470.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44471","meta44471",-470272715,null)], null);
}));

(cljs.core.async.t_cljs$core$async44470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44470");

(cljs.core.async.t_cljs$core$async44470.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44470.
 */
cljs.core.async.__GT_t_cljs$core$async44470 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44470(ch__$1,cs__$1,meta44471){
return (new cljs.core.async.t_cljs$core$async44470(ch__$1,cs__$1,meta44471));
});

}

return (new cljs.core.async.t_cljs$core$async44470(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43430__auto___45984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44628){
var state_val_44629 = (state_44628[(1)]);
if((state_val_44629 === (7))){
var inst_44624 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44630_45985 = state_44628__$1;
(statearr_44630_45985[(2)] = inst_44624);

(statearr_44630_45985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (20))){
var inst_44526 = (state_44628[(7)]);
var inst_44538 = cljs.core.first(inst_44526);
var inst_44539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44538,(0),null);
var inst_44540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44538,(1),null);
var state_44628__$1 = (function (){var statearr_44631 = state_44628;
(statearr_44631[(8)] = inst_44539);

return statearr_44631;
})();
if(cljs.core.truth_(inst_44540)){
var statearr_44632_45987 = state_44628__$1;
(statearr_44632_45987[(1)] = (22));

} else {
var statearr_44633_45988 = state_44628__$1;
(statearr_44633_45988[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (27))){
var inst_44577 = (state_44628[(9)]);
var inst_44483 = (state_44628[(10)]);
var inst_44570 = (state_44628[(11)]);
var inst_44572 = (state_44628[(12)]);
var inst_44577__$1 = cljs.core._nth(inst_44570,inst_44572);
var inst_44578 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44577__$1,inst_44483,done);
var state_44628__$1 = (function (){var statearr_44634 = state_44628;
(statearr_44634[(9)] = inst_44577__$1);

return statearr_44634;
})();
if(cljs.core.truth_(inst_44578)){
var statearr_44635_45994 = state_44628__$1;
(statearr_44635_45994[(1)] = (30));

} else {
var statearr_44636_45995 = state_44628__$1;
(statearr_44636_45995[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (1))){
var state_44628__$1 = state_44628;
var statearr_44637_45996 = state_44628__$1;
(statearr_44637_45996[(2)] = null);

(statearr_44637_45996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (24))){
var inst_44526 = (state_44628[(7)]);
var inst_44545 = (state_44628[(2)]);
var inst_44546 = cljs.core.next(inst_44526);
var inst_44492 = inst_44546;
var inst_44493 = null;
var inst_44494 = (0);
var inst_44495 = (0);
var state_44628__$1 = (function (){var statearr_44638 = state_44628;
(statearr_44638[(13)] = inst_44494);

(statearr_44638[(14)] = inst_44545);

(statearr_44638[(15)] = inst_44493);

(statearr_44638[(16)] = inst_44492);

(statearr_44638[(17)] = inst_44495);

return statearr_44638;
})();
var statearr_44639_45997 = state_44628__$1;
(statearr_44639_45997[(2)] = null);

(statearr_44639_45997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (39))){
var state_44628__$1 = state_44628;
var statearr_44643_45998 = state_44628__$1;
(statearr_44643_45998[(2)] = null);

(statearr_44643_45998[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (4))){
var inst_44483 = (state_44628[(10)]);
var inst_44483__$1 = (state_44628[(2)]);
var inst_44484 = (inst_44483__$1 == null);
var state_44628__$1 = (function (){var statearr_44644 = state_44628;
(statearr_44644[(10)] = inst_44483__$1);

return statearr_44644;
})();
if(cljs.core.truth_(inst_44484)){
var statearr_44645_45999 = state_44628__$1;
(statearr_44645_45999[(1)] = (5));

} else {
var statearr_44646_46000 = state_44628__$1;
(statearr_44646_46000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (15))){
var inst_44494 = (state_44628[(13)]);
var inst_44493 = (state_44628[(15)]);
var inst_44492 = (state_44628[(16)]);
var inst_44495 = (state_44628[(17)]);
var inst_44518 = (state_44628[(2)]);
var inst_44519 = (inst_44495 + (1));
var tmp44640 = inst_44494;
var tmp44641 = inst_44493;
var tmp44642 = inst_44492;
var inst_44492__$1 = tmp44642;
var inst_44493__$1 = tmp44641;
var inst_44494__$1 = tmp44640;
var inst_44495__$1 = inst_44519;
var state_44628__$1 = (function (){var statearr_44647 = state_44628;
(statearr_44647[(13)] = inst_44494__$1);

(statearr_44647[(15)] = inst_44493__$1);

(statearr_44647[(18)] = inst_44518);

(statearr_44647[(16)] = inst_44492__$1);

(statearr_44647[(17)] = inst_44495__$1);

return statearr_44647;
})();
var statearr_44648_46001 = state_44628__$1;
(statearr_44648_46001[(2)] = null);

(statearr_44648_46001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (21))){
var inst_44549 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44652_46002 = state_44628__$1;
(statearr_44652_46002[(2)] = inst_44549);

(statearr_44652_46002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (31))){
var inst_44577 = (state_44628[(9)]);
var inst_44581 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44577);
var state_44628__$1 = state_44628;
var statearr_44653_46003 = state_44628__$1;
(statearr_44653_46003[(2)] = inst_44581);

(statearr_44653_46003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (32))){
var inst_44571 = (state_44628[(19)]);
var inst_44570 = (state_44628[(11)]);
var inst_44569 = (state_44628[(20)]);
var inst_44572 = (state_44628[(12)]);
var inst_44583 = (state_44628[(2)]);
var inst_44584 = (inst_44572 + (1));
var tmp44649 = inst_44571;
var tmp44650 = inst_44570;
var tmp44651 = inst_44569;
var inst_44569__$1 = tmp44651;
var inst_44570__$1 = tmp44650;
var inst_44571__$1 = tmp44649;
var inst_44572__$1 = inst_44584;
var state_44628__$1 = (function (){var statearr_44654 = state_44628;
(statearr_44654[(21)] = inst_44583);

(statearr_44654[(19)] = inst_44571__$1);

(statearr_44654[(11)] = inst_44570__$1);

(statearr_44654[(20)] = inst_44569__$1);

(statearr_44654[(12)] = inst_44572__$1);

return statearr_44654;
})();
var statearr_44655_46008 = state_44628__$1;
(statearr_44655_46008[(2)] = null);

(statearr_44655_46008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (40))){
var inst_44596 = (state_44628[(22)]);
var inst_44601 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44596);
var state_44628__$1 = state_44628;
var statearr_44656_46012 = state_44628__$1;
(statearr_44656_46012[(2)] = inst_44601);

(statearr_44656_46012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (33))){
var inst_44587 = (state_44628[(23)]);
var inst_44589 = cljs.core.chunked_seq_QMARK_(inst_44587);
var state_44628__$1 = state_44628;
if(inst_44589){
var statearr_44657_46013 = state_44628__$1;
(statearr_44657_46013[(1)] = (36));

} else {
var statearr_44658_46014 = state_44628__$1;
(statearr_44658_46014[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (13))){
var inst_44508 = (state_44628[(24)]);
var inst_44515 = cljs.core.async.close_BANG_(inst_44508);
var state_44628__$1 = state_44628;
var statearr_44659_46015 = state_44628__$1;
(statearr_44659_46015[(2)] = inst_44515);

(statearr_44659_46015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (22))){
var inst_44539 = (state_44628[(8)]);
var inst_44542 = cljs.core.async.close_BANG_(inst_44539);
var state_44628__$1 = state_44628;
var statearr_44660_46016 = state_44628__$1;
(statearr_44660_46016[(2)] = inst_44542);

(statearr_44660_46016[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (36))){
var inst_44587 = (state_44628[(23)]);
var inst_44591 = cljs.core.chunk_first(inst_44587);
var inst_44592 = cljs.core.chunk_rest(inst_44587);
var inst_44593 = cljs.core.count(inst_44591);
var inst_44569 = inst_44592;
var inst_44570 = inst_44591;
var inst_44571 = inst_44593;
var inst_44572 = (0);
var state_44628__$1 = (function (){var statearr_44661 = state_44628;
(statearr_44661[(19)] = inst_44571);

(statearr_44661[(11)] = inst_44570);

(statearr_44661[(20)] = inst_44569);

(statearr_44661[(12)] = inst_44572);

return statearr_44661;
})();
var statearr_44662_46021 = state_44628__$1;
(statearr_44662_46021[(2)] = null);

(statearr_44662_46021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (41))){
var inst_44587 = (state_44628[(23)]);
var inst_44603 = (state_44628[(2)]);
var inst_44604 = cljs.core.next(inst_44587);
var inst_44569 = inst_44604;
var inst_44570 = null;
var inst_44571 = (0);
var inst_44572 = (0);
var state_44628__$1 = (function (){var statearr_44663 = state_44628;
(statearr_44663[(19)] = inst_44571);

(statearr_44663[(11)] = inst_44570);

(statearr_44663[(25)] = inst_44603);

(statearr_44663[(20)] = inst_44569);

(statearr_44663[(12)] = inst_44572);

return statearr_44663;
})();
var statearr_44664_46025 = state_44628__$1;
(statearr_44664_46025[(2)] = null);

(statearr_44664_46025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (43))){
var state_44628__$1 = state_44628;
var statearr_44665_46026 = state_44628__$1;
(statearr_44665_46026[(2)] = null);

(statearr_44665_46026[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (29))){
var inst_44612 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44666_46027 = state_44628__$1;
(statearr_44666_46027[(2)] = inst_44612);

(statearr_44666_46027[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (44))){
var inst_44621 = (state_44628[(2)]);
var state_44628__$1 = (function (){var statearr_44667 = state_44628;
(statearr_44667[(26)] = inst_44621);

return statearr_44667;
})();
var statearr_44668_46028 = state_44628__$1;
(statearr_44668_46028[(2)] = null);

(statearr_44668_46028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (6))){
var inst_44561 = (state_44628[(27)]);
var inst_44560 = cljs.core.deref(cs);
var inst_44561__$1 = cljs.core.keys(inst_44560);
var inst_44562 = cljs.core.count(inst_44561__$1);
var inst_44563 = cljs.core.reset_BANG_(dctr,inst_44562);
var inst_44568 = cljs.core.seq(inst_44561__$1);
var inst_44569 = inst_44568;
var inst_44570 = null;
var inst_44571 = (0);
var inst_44572 = (0);
var state_44628__$1 = (function (){var statearr_44669 = state_44628;
(statearr_44669[(28)] = inst_44563);

(statearr_44669[(27)] = inst_44561__$1);

(statearr_44669[(19)] = inst_44571);

(statearr_44669[(11)] = inst_44570);

(statearr_44669[(20)] = inst_44569);

(statearr_44669[(12)] = inst_44572);

return statearr_44669;
})();
var statearr_44670_46029 = state_44628__$1;
(statearr_44670_46029[(2)] = null);

(statearr_44670_46029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (28))){
var inst_44587 = (state_44628[(23)]);
var inst_44569 = (state_44628[(20)]);
var inst_44587__$1 = cljs.core.seq(inst_44569);
var state_44628__$1 = (function (){var statearr_44671 = state_44628;
(statearr_44671[(23)] = inst_44587__$1);

return statearr_44671;
})();
if(inst_44587__$1){
var statearr_44672_46030 = state_44628__$1;
(statearr_44672_46030[(1)] = (33));

} else {
var statearr_44673_46034 = state_44628__$1;
(statearr_44673_46034[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (25))){
var inst_44571 = (state_44628[(19)]);
var inst_44572 = (state_44628[(12)]);
var inst_44574 = (inst_44572 < inst_44571);
var inst_44575 = inst_44574;
var state_44628__$1 = state_44628;
if(cljs.core.truth_(inst_44575)){
var statearr_44674_46036 = state_44628__$1;
(statearr_44674_46036[(1)] = (27));

} else {
var statearr_44675_46037 = state_44628__$1;
(statearr_44675_46037[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (34))){
var state_44628__$1 = state_44628;
var statearr_44676_46038 = state_44628__$1;
(statearr_44676_46038[(2)] = null);

(statearr_44676_46038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (17))){
var state_44628__$1 = state_44628;
var statearr_44677_46040 = state_44628__$1;
(statearr_44677_46040[(2)] = null);

(statearr_44677_46040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (3))){
var inst_44626 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44628__$1,inst_44626);
} else {
if((state_val_44629 === (12))){
var inst_44554 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44678_46041 = state_44628__$1;
(statearr_44678_46041[(2)] = inst_44554);

(statearr_44678_46041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (2))){
var state_44628__$1 = state_44628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44628__$1,(4),ch);
} else {
if((state_val_44629 === (23))){
var state_44628__$1 = state_44628;
var statearr_44679_46042 = state_44628__$1;
(statearr_44679_46042[(2)] = null);

(statearr_44679_46042[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (35))){
var inst_44610 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44680_46047 = state_44628__$1;
(statearr_44680_46047[(2)] = inst_44610);

(statearr_44680_46047[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (19))){
var inst_44526 = (state_44628[(7)]);
var inst_44530 = cljs.core.chunk_first(inst_44526);
var inst_44531 = cljs.core.chunk_rest(inst_44526);
var inst_44532 = cljs.core.count(inst_44530);
var inst_44492 = inst_44531;
var inst_44493 = inst_44530;
var inst_44494 = inst_44532;
var inst_44495 = (0);
var state_44628__$1 = (function (){var statearr_44681 = state_44628;
(statearr_44681[(13)] = inst_44494);

(statearr_44681[(15)] = inst_44493);

(statearr_44681[(16)] = inst_44492);

(statearr_44681[(17)] = inst_44495);

return statearr_44681;
})();
var statearr_44682_46051 = state_44628__$1;
(statearr_44682_46051[(2)] = null);

(statearr_44682_46051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (11))){
var inst_44526 = (state_44628[(7)]);
var inst_44492 = (state_44628[(16)]);
var inst_44526__$1 = cljs.core.seq(inst_44492);
var state_44628__$1 = (function (){var statearr_44683 = state_44628;
(statearr_44683[(7)] = inst_44526__$1);

return statearr_44683;
})();
if(inst_44526__$1){
var statearr_44684_46052 = state_44628__$1;
(statearr_44684_46052[(1)] = (16));

} else {
var statearr_44685_46053 = state_44628__$1;
(statearr_44685_46053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (9))){
var inst_44557 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44686_46054 = state_44628__$1;
(statearr_44686_46054[(2)] = inst_44557);

(statearr_44686_46054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (5))){
var inst_44490 = cljs.core.deref(cs);
var inst_44491 = cljs.core.seq(inst_44490);
var inst_44492 = inst_44491;
var inst_44493 = null;
var inst_44494 = (0);
var inst_44495 = (0);
var state_44628__$1 = (function (){var statearr_44687 = state_44628;
(statearr_44687[(13)] = inst_44494);

(statearr_44687[(15)] = inst_44493);

(statearr_44687[(16)] = inst_44492);

(statearr_44687[(17)] = inst_44495);

return statearr_44687;
})();
var statearr_44688_46055 = state_44628__$1;
(statearr_44688_46055[(2)] = null);

(statearr_44688_46055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (14))){
var state_44628__$1 = state_44628;
var statearr_44689_46059 = state_44628__$1;
(statearr_44689_46059[(2)] = null);

(statearr_44689_46059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (45))){
var inst_44618 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44690_46060 = state_44628__$1;
(statearr_44690_46060[(2)] = inst_44618);

(statearr_44690_46060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (26))){
var inst_44561 = (state_44628[(27)]);
var inst_44614 = (state_44628[(2)]);
var inst_44615 = cljs.core.seq(inst_44561);
var state_44628__$1 = (function (){var statearr_44691 = state_44628;
(statearr_44691[(29)] = inst_44614);

return statearr_44691;
})();
if(inst_44615){
var statearr_44692_46061 = state_44628__$1;
(statearr_44692_46061[(1)] = (42));

} else {
var statearr_44693_46062 = state_44628__$1;
(statearr_44693_46062[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (16))){
var inst_44526 = (state_44628[(7)]);
var inst_44528 = cljs.core.chunked_seq_QMARK_(inst_44526);
var state_44628__$1 = state_44628;
if(inst_44528){
var statearr_44694_46066 = state_44628__$1;
(statearr_44694_46066[(1)] = (19));

} else {
var statearr_44695_46067 = state_44628__$1;
(statearr_44695_46067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (38))){
var inst_44607 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44696_46073 = state_44628__$1;
(statearr_44696_46073[(2)] = inst_44607);

(statearr_44696_46073[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (30))){
var state_44628__$1 = state_44628;
var statearr_44697_46074 = state_44628__$1;
(statearr_44697_46074[(2)] = null);

(statearr_44697_46074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (10))){
var inst_44493 = (state_44628[(15)]);
var inst_44495 = (state_44628[(17)]);
var inst_44507 = cljs.core._nth(inst_44493,inst_44495);
var inst_44508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44507,(0),null);
var inst_44509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44507,(1),null);
var state_44628__$1 = (function (){var statearr_44700 = state_44628;
(statearr_44700[(24)] = inst_44508);

return statearr_44700;
})();
if(cljs.core.truth_(inst_44509)){
var statearr_44701_46075 = state_44628__$1;
(statearr_44701_46075[(1)] = (13));

} else {
var statearr_44702_46076 = state_44628__$1;
(statearr_44702_46076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (18))){
var inst_44552 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44703_46077 = state_44628__$1;
(statearr_44703_46077[(2)] = inst_44552);

(statearr_44703_46077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (42))){
var state_44628__$1 = state_44628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44628__$1,(45),dchan);
} else {
if((state_val_44629 === (37))){
var inst_44483 = (state_44628[(10)]);
var inst_44587 = (state_44628[(23)]);
var inst_44596 = (state_44628[(22)]);
var inst_44596__$1 = cljs.core.first(inst_44587);
var inst_44598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44596__$1,inst_44483,done);
var state_44628__$1 = (function (){var statearr_44704 = state_44628;
(statearr_44704[(22)] = inst_44596__$1);

return statearr_44704;
})();
if(cljs.core.truth_(inst_44598)){
var statearr_44705_46079 = state_44628__$1;
(statearr_44705_46079[(1)] = (39));

} else {
var statearr_44706_46080 = state_44628__$1;
(statearr_44706_46080[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (8))){
var inst_44494 = (state_44628[(13)]);
var inst_44495 = (state_44628[(17)]);
var inst_44497 = (inst_44495 < inst_44494);
var inst_44498 = inst_44497;
var state_44628__$1 = state_44628;
if(cljs.core.truth_(inst_44498)){
var statearr_44707_46081 = state_44628__$1;
(statearr_44707_46081[(1)] = (10));

} else {
var statearr_44708_46082 = state_44628__$1;
(statearr_44708_46082[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43273__auto__ = null;
var cljs$core$async$mult_$_state_machine__43273__auto____0 = (function (){
var statearr_44709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44709[(0)] = cljs$core$async$mult_$_state_machine__43273__auto__);

(statearr_44709[(1)] = (1));

return statearr_44709;
});
var cljs$core$async$mult_$_state_machine__43273__auto____1 = (function (state_44628){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44628);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44710){var ex__43276__auto__ = e44710;
var statearr_44711_46084 = state_44628;
(statearr_44711_46084[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44628[(4)]))){
var statearr_44712_46085 = state_44628;
(statearr_44712_46085[(1)] = cljs.core.first((state_44628[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46086 = state_44628;
state_44628 = G__46086;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43273__auto__ = function(state_44628){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43273__auto____1.call(this,state_44628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43273__auto____0;
cljs$core$async$mult_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43273__auto____1;
return cljs$core$async$mult_$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44713 = f__43431__auto__();
(statearr_44713[(6)] = c__43430__auto___45984);

return statearr_44713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44717 = arguments.length;
switch (G__44717) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_46090 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46090(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46091 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46091(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46092 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46092(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46093 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46093(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46094 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46094(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46095 = arguments.length;
var i__4830__auto___46097 = (0);
while(true){
if((i__4830__auto___46097 < len__4829__auto___46095)){
args__4835__auto__.push((arguments[i__4830__auto___46097]));

var G__46098 = (i__4830__auto___46097 + (1));
i__4830__auto___46097 = G__46098;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44729){
var map__44730 = p__44729;
var map__44730__$1 = cljs.core.__destructure_map(map__44730);
var opts = map__44730__$1;
var statearr_44733_46102 = state;
(statearr_44733_46102[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44736_46103 = state;
(statearr_44736_46103[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_44738_46104 = state;
(statearr_44738_46104[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44725){
var G__44726 = cljs.core.first(seq44725);
var seq44725__$1 = cljs.core.next(seq44725);
var G__44727 = cljs.core.first(seq44725__$1);
var seq44725__$2 = cljs.core.next(seq44725__$1);
var G__44728 = cljs.core.first(seq44725__$2);
var seq44725__$3 = cljs.core.next(seq44725__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44726,G__44727,G__44728,seq44725__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44744 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44745){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44745 = meta44745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44746,meta44745__$1){
var self__ = this;
var _44746__$1 = this;
return (new cljs.core.async.t_cljs$core$async44744(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44745__$1));
}));

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44746){
var self__ = this;
var _44746__$1 = this;
return self__.meta44745;
}));

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44744.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44745","meta44745",827931751,null)], null);
}));

(cljs.core.async.t_cljs$core$async44744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44744");

(cljs.core.async.t_cljs$core$async44744.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44744.
 */
cljs.core.async.__GT_t_cljs$core$async44744 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44744(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44745){
return (new cljs.core.async.t_cljs$core$async44744(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44745));
});

}

return (new cljs.core.async.t_cljs$core$async44744(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43430__auto___46118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44827){
var state_val_44828 = (state_44827[(1)]);
if((state_val_44828 === (7))){
var inst_44786 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
if(cljs.core.truth_(inst_44786)){
var statearr_44829_46120 = state_44827__$1;
(statearr_44829_46120[(1)] = (8));

} else {
var statearr_44831_46121 = state_44827__$1;
(statearr_44831_46121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (20))){
var inst_44775 = (state_44827[(7)]);
var state_44827__$1 = state_44827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44827__$1,(23),out,inst_44775);
} else {
if((state_val_44828 === (1))){
var inst_44758 = calc_state();
var inst_44759 = cljs.core.__destructure_map(inst_44758);
var inst_44760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44759,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44759,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44759,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44763 = inst_44758;
var state_44827__$1 = (function (){var statearr_44832 = state_44827;
(statearr_44832[(8)] = inst_44762);

(statearr_44832[(9)] = inst_44763);

(statearr_44832[(10)] = inst_44761);

(statearr_44832[(11)] = inst_44760);

return statearr_44832;
})();
var statearr_44833_46122 = state_44827__$1;
(statearr_44833_46122[(2)] = null);

(statearr_44833_46122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (24))){
var inst_44766 = (state_44827[(12)]);
var inst_44763 = inst_44766;
var state_44827__$1 = (function (){var statearr_44834 = state_44827;
(statearr_44834[(9)] = inst_44763);

return statearr_44834;
})();
var statearr_44835_46123 = state_44827__$1;
(statearr_44835_46123[(2)] = null);

(statearr_44835_46123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (4))){
var inst_44775 = (state_44827[(7)]);
var inst_44777 = (state_44827[(13)]);
var inst_44774 = (state_44827[(2)]);
var inst_44775__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44774,(0),null);
var inst_44776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44774,(1),null);
var inst_44777__$1 = (inst_44775__$1 == null);
var state_44827__$1 = (function (){var statearr_44836 = state_44827;
(statearr_44836[(7)] = inst_44775__$1);

(statearr_44836[(14)] = inst_44776);

(statearr_44836[(13)] = inst_44777__$1);

return statearr_44836;
})();
if(cljs.core.truth_(inst_44777__$1)){
var statearr_44837_46125 = state_44827__$1;
(statearr_44837_46125[(1)] = (5));

} else {
var statearr_44838_46126 = state_44827__$1;
(statearr_44838_46126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (15))){
var inst_44800 = (state_44827[(15)]);
var inst_44767 = (state_44827[(16)]);
var inst_44800__$1 = cljs.core.empty_QMARK_(inst_44767);
var state_44827__$1 = (function (){var statearr_44840 = state_44827;
(statearr_44840[(15)] = inst_44800__$1);

return statearr_44840;
})();
if(inst_44800__$1){
var statearr_44841_46130 = state_44827__$1;
(statearr_44841_46130[(1)] = (17));

} else {
var statearr_44842_46131 = state_44827__$1;
(statearr_44842_46131[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (21))){
var inst_44766 = (state_44827[(12)]);
var inst_44763 = inst_44766;
var state_44827__$1 = (function (){var statearr_44843 = state_44827;
(statearr_44843[(9)] = inst_44763);

return statearr_44843;
})();
var statearr_44844_46132 = state_44827__$1;
(statearr_44844_46132[(2)] = null);

(statearr_44844_46132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (13))){
var inst_44793 = (state_44827[(2)]);
var inst_44794 = calc_state();
var inst_44763 = inst_44794;
var state_44827__$1 = (function (){var statearr_44845 = state_44827;
(statearr_44845[(9)] = inst_44763);

(statearr_44845[(17)] = inst_44793);

return statearr_44845;
})();
var statearr_44846_46133 = state_44827__$1;
(statearr_44846_46133[(2)] = null);

(statearr_44846_46133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (22))){
var inst_44821 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44847_46136 = state_44827__$1;
(statearr_44847_46136[(2)] = inst_44821);

(statearr_44847_46136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (6))){
var inst_44776 = (state_44827[(14)]);
var inst_44784 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44776,change);
var state_44827__$1 = state_44827;
var statearr_44848_46139 = state_44827__$1;
(statearr_44848_46139[(2)] = inst_44784);

(statearr_44848_46139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (25))){
var state_44827__$1 = state_44827;
var statearr_44849_46140 = state_44827__$1;
(statearr_44849_46140[(2)] = null);

(statearr_44849_46140[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (17))){
var inst_44776 = (state_44827[(14)]);
var inst_44768 = (state_44827[(18)]);
var inst_44803 = (inst_44768.cljs$core$IFn$_invoke$arity$1 ? inst_44768.cljs$core$IFn$_invoke$arity$1(inst_44776) : inst_44768.call(null,inst_44776));
var inst_44804 = cljs.core.not(inst_44803);
var state_44827__$1 = state_44827;
var statearr_44850_46141 = state_44827__$1;
(statearr_44850_46141[(2)] = inst_44804);

(statearr_44850_46141[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (3))){
var inst_44825 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44827__$1,inst_44825);
} else {
if((state_val_44828 === (12))){
var state_44827__$1 = state_44827;
var statearr_44852_46142 = state_44827__$1;
(statearr_44852_46142[(2)] = null);

(statearr_44852_46142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (2))){
var inst_44763 = (state_44827[(9)]);
var inst_44766 = (state_44827[(12)]);
var inst_44766__$1 = cljs.core.__destructure_map(inst_44763);
var inst_44767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44766__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44766__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44766__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44827__$1 = (function (){var statearr_44857 = state_44827;
(statearr_44857[(16)] = inst_44767);

(statearr_44857[(12)] = inst_44766__$1);

(statearr_44857[(18)] = inst_44768);

return statearr_44857;
})();
return cljs.core.async.ioc_alts_BANG_(state_44827__$1,(4),inst_44769);
} else {
if((state_val_44828 === (23))){
var inst_44812 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
if(cljs.core.truth_(inst_44812)){
var statearr_44858_46150 = state_44827__$1;
(statearr_44858_46150[(1)] = (24));

} else {
var statearr_44859_46151 = state_44827__$1;
(statearr_44859_46151[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (19))){
var inst_44807 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44860_46152 = state_44827__$1;
(statearr_44860_46152[(2)] = inst_44807);

(statearr_44860_46152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (11))){
var inst_44776 = (state_44827[(14)]);
var inst_44790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44776);
var state_44827__$1 = state_44827;
var statearr_44861_46159 = state_44827__$1;
(statearr_44861_46159[(2)] = inst_44790);

(statearr_44861_46159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (9))){
var inst_44776 = (state_44827[(14)]);
var inst_44767 = (state_44827[(16)]);
var inst_44797 = (state_44827[(19)]);
var inst_44797__$1 = (inst_44767.cljs$core$IFn$_invoke$arity$1 ? inst_44767.cljs$core$IFn$_invoke$arity$1(inst_44776) : inst_44767.call(null,inst_44776));
var state_44827__$1 = (function (){var statearr_44862 = state_44827;
(statearr_44862[(19)] = inst_44797__$1);

return statearr_44862;
})();
if(cljs.core.truth_(inst_44797__$1)){
var statearr_44863_46162 = state_44827__$1;
(statearr_44863_46162[(1)] = (14));

} else {
var statearr_44864_46163 = state_44827__$1;
(statearr_44864_46163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (5))){
var inst_44777 = (state_44827[(13)]);
var state_44827__$1 = state_44827;
var statearr_44865_46164 = state_44827__$1;
(statearr_44865_46164[(2)] = inst_44777);

(statearr_44865_46164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (14))){
var inst_44797 = (state_44827[(19)]);
var state_44827__$1 = state_44827;
var statearr_44866_46165 = state_44827__$1;
(statearr_44866_46165[(2)] = inst_44797);

(statearr_44866_46165[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (26))){
var inst_44817 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44867_46166 = state_44827__$1;
(statearr_44867_46166[(2)] = inst_44817);

(statearr_44867_46166[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (16))){
var inst_44809 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
if(cljs.core.truth_(inst_44809)){
var statearr_44868_46167 = state_44827__$1;
(statearr_44868_46167[(1)] = (20));

} else {
var statearr_44869_46168 = state_44827__$1;
(statearr_44869_46168[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (10))){
var inst_44823 = (state_44827[(2)]);
var state_44827__$1 = state_44827;
var statearr_44870_46169 = state_44827__$1;
(statearr_44870_46169[(2)] = inst_44823);

(statearr_44870_46169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (18))){
var inst_44800 = (state_44827[(15)]);
var state_44827__$1 = state_44827;
var statearr_44871_46170 = state_44827__$1;
(statearr_44871_46170[(2)] = inst_44800);

(statearr_44871_46170[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44828 === (8))){
var inst_44775 = (state_44827[(7)]);
var inst_44788 = (inst_44775 == null);
var state_44827__$1 = state_44827;
if(cljs.core.truth_(inst_44788)){
var statearr_44872_46171 = state_44827__$1;
(statearr_44872_46171[(1)] = (11));

} else {
var statearr_44873_46172 = state_44827__$1;
(statearr_44873_46172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43273__auto__ = null;
var cljs$core$async$mix_$_state_machine__43273__auto____0 = (function (){
var statearr_44876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44876[(0)] = cljs$core$async$mix_$_state_machine__43273__auto__);

(statearr_44876[(1)] = (1));

return statearr_44876;
});
var cljs$core$async$mix_$_state_machine__43273__auto____1 = (function (state_44827){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44827);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e44878){var ex__43276__auto__ = e44878;
var statearr_44879_46174 = state_44827;
(statearr_44879_46174[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44827[(4)]))){
var statearr_44880_46175 = state_44827;
(statearr_44880_46175[(1)] = cljs.core.first((state_44827[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46182 = state_44827;
state_44827 = G__46182;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43273__auto__ = function(state_44827){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43273__auto____1.call(this,state_44827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43273__auto____0;
cljs$core$async$mix_$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43273__auto____1;
return cljs$core$async$mix_$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_44882 = f__43431__auto__();
(statearr_44882[(6)] = c__43430__auto___46118);

return statearr_44882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_46184 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_46184(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_46185 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_46185(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_46186 = (function() {
var G__46187 = null;
var G__46187__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__46187__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__46187 = function(p,v){
switch(arguments.length){
case 1:
return G__46187__1.call(this,p);
case 2:
return G__46187__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46187.cljs$core$IFn$_invoke$arity$1 = G__46187__1;
G__46187.cljs$core$IFn$_invoke$arity$2 = G__46187__2;
return G__46187;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44891 = arguments.length;
switch (G__44891) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46186(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_46186(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44899 = arguments.length;
switch (G__44899) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44896_SHARP_){
if(cljs.core.truth_((p1__44896_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44896_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44896_SHARP_.call(null,topic)))){
return p1__44896_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44896_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44902 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44903){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44903 = meta44903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44904,meta44903__$1){
var self__ = this;
var _44904__$1 = this;
return (new cljs.core.async.t_cljs$core$async44902(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44903__$1));
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44904){
var self__ = this;
var _44904__$1 = this;
return self__.meta44903;
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44903","meta44903",1630548847,null)], null);
}));

(cljs.core.async.t_cljs$core$async44902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44902");

(cljs.core.async.t_cljs$core$async44902.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44902.
 */
cljs.core.async.__GT_t_cljs$core$async44902 = (function cljs$core$async$__GT_t_cljs$core$async44902(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44903){
return (new cljs.core.async.t_cljs$core$async44902(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44903));
});

}

return (new cljs.core.async.t_cljs$core$async44902(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43430__auto___46196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_44991){
var state_val_44992 = (state_44991[(1)]);
if((state_val_44992 === (7))){
var inst_44987 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_44993_46197 = state_44991__$1;
(statearr_44993_46197[(2)] = inst_44987);

(statearr_44993_46197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (20))){
var state_44991__$1 = state_44991;
var statearr_44994_46204 = state_44991__$1;
(statearr_44994_46204[(2)] = null);

(statearr_44994_46204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (1))){
var state_44991__$1 = state_44991;
var statearr_44996_46205 = state_44991__$1;
(statearr_44996_46205[(2)] = null);

(statearr_44996_46205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (24))){
var inst_44970 = (state_44991[(7)]);
var inst_44979 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44970);
var state_44991__$1 = state_44991;
var statearr_44997_46206 = state_44991__$1;
(statearr_44997_46206[(2)] = inst_44979);

(statearr_44997_46206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (4))){
var inst_44917 = (state_44991[(8)]);
var inst_44917__$1 = (state_44991[(2)]);
var inst_44919 = (inst_44917__$1 == null);
var state_44991__$1 = (function (){var statearr_44999 = state_44991;
(statearr_44999[(8)] = inst_44917__$1);

return statearr_44999;
})();
if(cljs.core.truth_(inst_44919)){
var statearr_45000_46207 = state_44991__$1;
(statearr_45000_46207[(1)] = (5));

} else {
var statearr_45002_46208 = state_44991__$1;
(statearr_45002_46208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (15))){
var inst_44964 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_45003_46209 = state_44991__$1;
(statearr_45003_46209[(2)] = inst_44964);

(statearr_45003_46209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (21))){
var inst_44984 = (state_44991[(2)]);
var state_44991__$1 = (function (){var statearr_45005 = state_44991;
(statearr_45005[(9)] = inst_44984);

return statearr_45005;
})();
var statearr_45006_46210 = state_44991__$1;
(statearr_45006_46210[(2)] = null);

(statearr_45006_46210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (13))){
var inst_44946 = (state_44991[(10)]);
var inst_44948 = cljs.core.chunked_seq_QMARK_(inst_44946);
var state_44991__$1 = state_44991;
if(inst_44948){
var statearr_45008_46211 = state_44991__$1;
(statearr_45008_46211[(1)] = (16));

} else {
var statearr_45009_46212 = state_44991__$1;
(statearr_45009_46212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (22))){
var inst_44976 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
if(cljs.core.truth_(inst_44976)){
var statearr_45010_46213 = state_44991__$1;
(statearr_45010_46213[(1)] = (23));

} else {
var statearr_45011_46214 = state_44991__$1;
(statearr_45011_46214[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (6))){
var inst_44970 = (state_44991[(7)]);
var inst_44972 = (state_44991[(11)]);
var inst_44917 = (state_44991[(8)]);
var inst_44970__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44917) : topic_fn.call(null,inst_44917));
var inst_44971 = cljs.core.deref(mults);
var inst_44972__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44971,inst_44970__$1);
var state_44991__$1 = (function (){var statearr_45014 = state_44991;
(statearr_45014[(7)] = inst_44970__$1);

(statearr_45014[(11)] = inst_44972__$1);

return statearr_45014;
})();
if(cljs.core.truth_(inst_44972__$1)){
var statearr_45015_46215 = state_44991__$1;
(statearr_45015_46215[(1)] = (19));

} else {
var statearr_45016_46216 = state_44991__$1;
(statearr_45016_46216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (25))){
var inst_44981 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_45017_46217 = state_44991__$1;
(statearr_45017_46217[(2)] = inst_44981);

(statearr_45017_46217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (17))){
var inst_44946 = (state_44991[(10)]);
var inst_44955 = cljs.core.first(inst_44946);
var inst_44956 = cljs.core.async.muxch_STAR_(inst_44955);
var inst_44957 = cljs.core.async.close_BANG_(inst_44956);
var inst_44958 = cljs.core.next(inst_44946);
var inst_44930 = inst_44958;
var inst_44931 = null;
var inst_44932 = (0);
var inst_44933 = (0);
var state_44991__$1 = (function (){var statearr_45019 = state_44991;
(statearr_45019[(12)] = inst_44930);

(statearr_45019[(13)] = inst_44932);

(statearr_45019[(14)] = inst_44931);

(statearr_45019[(15)] = inst_44933);

(statearr_45019[(16)] = inst_44957);

return statearr_45019;
})();
var statearr_45020_46218 = state_44991__$1;
(statearr_45020_46218[(2)] = null);

(statearr_45020_46218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (3))){
var inst_44989 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44991__$1,inst_44989);
} else {
if((state_val_44992 === (12))){
var inst_44966 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_45021_46219 = state_44991__$1;
(statearr_45021_46219[(2)] = inst_44966);

(statearr_45021_46219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (2))){
var state_44991__$1 = state_44991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44991__$1,(4),ch);
} else {
if((state_val_44992 === (23))){
var state_44991__$1 = state_44991;
var statearr_45023_46220 = state_44991__$1;
(statearr_45023_46220[(2)] = null);

(statearr_45023_46220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (19))){
var inst_44972 = (state_44991[(11)]);
var inst_44917 = (state_44991[(8)]);
var inst_44974 = cljs.core.async.muxch_STAR_(inst_44972);
var state_44991__$1 = state_44991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44991__$1,(22),inst_44974,inst_44917);
} else {
if((state_val_44992 === (11))){
var inst_44930 = (state_44991[(12)]);
var inst_44946 = (state_44991[(10)]);
var inst_44946__$1 = cljs.core.seq(inst_44930);
var state_44991__$1 = (function (){var statearr_45031 = state_44991;
(statearr_45031[(10)] = inst_44946__$1);

return statearr_45031;
})();
if(inst_44946__$1){
var statearr_45033_46221 = state_44991__$1;
(statearr_45033_46221[(1)] = (13));

} else {
var statearr_45034_46222 = state_44991__$1;
(statearr_45034_46222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (9))){
var inst_44968 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_45035_46223 = state_44991__$1;
(statearr_45035_46223[(2)] = inst_44968);

(statearr_45035_46223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (5))){
var inst_44927 = cljs.core.deref(mults);
var inst_44928 = cljs.core.vals(inst_44927);
var inst_44929 = cljs.core.seq(inst_44928);
var inst_44930 = inst_44929;
var inst_44931 = null;
var inst_44932 = (0);
var inst_44933 = (0);
var state_44991__$1 = (function (){var statearr_45036 = state_44991;
(statearr_45036[(12)] = inst_44930);

(statearr_45036[(13)] = inst_44932);

(statearr_45036[(14)] = inst_44931);

(statearr_45036[(15)] = inst_44933);

return statearr_45036;
})();
var statearr_45037_46224 = state_44991__$1;
(statearr_45037_46224[(2)] = null);

(statearr_45037_46224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (14))){
var state_44991__$1 = state_44991;
var statearr_45041_46225 = state_44991__$1;
(statearr_45041_46225[(2)] = null);

(statearr_45041_46225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (16))){
var inst_44946 = (state_44991[(10)]);
var inst_44950 = cljs.core.chunk_first(inst_44946);
var inst_44951 = cljs.core.chunk_rest(inst_44946);
var inst_44952 = cljs.core.count(inst_44950);
var inst_44930 = inst_44951;
var inst_44931 = inst_44950;
var inst_44932 = inst_44952;
var inst_44933 = (0);
var state_44991__$1 = (function (){var statearr_45042 = state_44991;
(statearr_45042[(12)] = inst_44930);

(statearr_45042[(13)] = inst_44932);

(statearr_45042[(14)] = inst_44931);

(statearr_45042[(15)] = inst_44933);

return statearr_45042;
})();
var statearr_45043_46226 = state_44991__$1;
(statearr_45043_46226[(2)] = null);

(statearr_45043_46226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (10))){
var inst_44930 = (state_44991[(12)]);
var inst_44932 = (state_44991[(13)]);
var inst_44931 = (state_44991[(14)]);
var inst_44933 = (state_44991[(15)]);
var inst_44939 = cljs.core._nth(inst_44931,inst_44933);
var inst_44941 = cljs.core.async.muxch_STAR_(inst_44939);
var inst_44942 = cljs.core.async.close_BANG_(inst_44941);
var inst_44943 = (inst_44933 + (1));
var tmp45038 = inst_44930;
var tmp45039 = inst_44932;
var tmp45040 = inst_44931;
var inst_44930__$1 = tmp45038;
var inst_44931__$1 = tmp45040;
var inst_44932__$1 = tmp45039;
var inst_44933__$1 = inst_44943;
var state_44991__$1 = (function (){var statearr_45044 = state_44991;
(statearr_45044[(12)] = inst_44930__$1);

(statearr_45044[(13)] = inst_44932__$1);

(statearr_45044[(17)] = inst_44942);

(statearr_45044[(14)] = inst_44931__$1);

(statearr_45044[(15)] = inst_44933__$1);

return statearr_45044;
})();
var statearr_45045_46228 = state_44991__$1;
(statearr_45045_46228[(2)] = null);

(statearr_45045_46228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (18))){
var inst_44961 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_45046_46233 = state_44991__$1;
(statearr_45046_46233[(2)] = inst_44961);

(statearr_45046_46233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (8))){
var inst_44932 = (state_44991[(13)]);
var inst_44933 = (state_44991[(15)]);
var inst_44935 = (inst_44933 < inst_44932);
var inst_44936 = inst_44935;
var state_44991__$1 = state_44991;
if(cljs.core.truth_(inst_44936)){
var statearr_45048_46234 = state_44991__$1;
(statearr_45048_46234[(1)] = (10));

} else {
var statearr_45049_46235 = state_44991__$1;
(statearr_45049_46235[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45050[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45050[(1)] = (1));

return statearr_45050;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_44991){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_44991);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45051){var ex__43276__auto__ = e45051;
var statearr_45052_46236 = state_44991;
(statearr_45052_46236[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_44991[(4)]))){
var statearr_45053_46237 = state_44991;
(statearr_45053_46237[(1)] = cljs.core.first((state_44991[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46238 = state_44991;
state_44991 = G__46238;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_44991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_44991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45054 = f__43431__auto__();
(statearr_45054[(6)] = c__43430__auto___46196);

return statearr_45054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45056 = arguments.length;
switch (G__45056) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45059 = arguments.length;
switch (G__45059) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45062 = arguments.length;
switch (G__45062) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43430__auto___46244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45106){
var state_val_45107 = (state_45106[(1)]);
if((state_val_45107 === (7))){
var state_45106__$1 = state_45106;
var statearr_45108_46245 = state_45106__$1;
(statearr_45108_46245[(2)] = null);

(statearr_45108_46245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (1))){
var state_45106__$1 = state_45106;
var statearr_45109_46246 = state_45106__$1;
(statearr_45109_46246[(2)] = null);

(statearr_45109_46246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (4))){
var inst_45067 = (state_45106[(7)]);
var inst_45066 = (state_45106[(8)]);
var inst_45069 = (inst_45067 < inst_45066);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45069)){
var statearr_45110_46251 = state_45106__$1;
(statearr_45110_46251[(1)] = (6));

} else {
var statearr_45111_46252 = state_45106__$1;
(statearr_45111_46252[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (15))){
var inst_45092 = (state_45106[(9)]);
var inst_45097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45092);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45106__$1,(17),out,inst_45097);
} else {
if((state_val_45107 === (13))){
var inst_45092 = (state_45106[(9)]);
var inst_45092__$1 = (state_45106[(2)]);
var inst_45093 = cljs.core.some(cljs.core.nil_QMARK_,inst_45092__$1);
var state_45106__$1 = (function (){var statearr_45112 = state_45106;
(statearr_45112[(9)] = inst_45092__$1);

return statearr_45112;
})();
if(cljs.core.truth_(inst_45093)){
var statearr_45113_46256 = state_45106__$1;
(statearr_45113_46256[(1)] = (14));

} else {
var statearr_45114_46257 = state_45106__$1;
(statearr_45114_46257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (6))){
var state_45106__$1 = state_45106;
var statearr_45115_46258 = state_45106__$1;
(statearr_45115_46258[(2)] = null);

(statearr_45115_46258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (17))){
var inst_45099 = (state_45106[(2)]);
var state_45106__$1 = (function (){var statearr_45117 = state_45106;
(statearr_45117[(10)] = inst_45099);

return statearr_45117;
})();
var statearr_45118_46259 = state_45106__$1;
(statearr_45118_46259[(2)] = null);

(statearr_45118_46259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (3))){
var inst_45104 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45106__$1,inst_45104);
} else {
if((state_val_45107 === (12))){
var _ = (function (){var statearr_45120 = state_45106;
(statearr_45120[(4)] = cljs.core.rest((state_45106[(4)])));

return statearr_45120;
})();
var state_45106__$1 = state_45106;
var ex45116 = (state_45106__$1[(2)]);
var statearr_45121_46260 = state_45106__$1;
(statearr_45121_46260[(5)] = ex45116);


if((ex45116 instanceof Object)){
var statearr_45123_46261 = state_45106__$1;
(statearr_45123_46261[(1)] = (11));

(statearr_45123_46261[(5)] = null);

} else {
throw ex45116;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (2))){
var inst_45065 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45066 = cnt;
var inst_45067 = (0);
var state_45106__$1 = (function (){var statearr_45125 = state_45106;
(statearr_45125[(11)] = inst_45065);

(statearr_45125[(7)] = inst_45067);

(statearr_45125[(8)] = inst_45066);

return statearr_45125;
})();
var statearr_45126_46262 = state_45106__$1;
(statearr_45126_46262[(2)] = null);

(statearr_45126_46262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (11))){
var inst_45071 = (state_45106[(2)]);
var inst_45072 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45106__$1 = (function (){var statearr_45128 = state_45106;
(statearr_45128[(12)] = inst_45071);

return statearr_45128;
})();
var statearr_45129_46263 = state_45106__$1;
(statearr_45129_46263[(2)] = inst_45072);

(statearr_45129_46263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (9))){
var inst_45067 = (state_45106[(7)]);
var _ = (function (){var statearr_45130 = state_45106;
(statearr_45130[(4)] = cljs.core.cons((12),(state_45106[(4)])));

return statearr_45130;
})();
var inst_45078 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45067) : chs__$1.call(null,inst_45067));
var inst_45079 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45067) : done.call(null,inst_45067));
var inst_45080 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45078,inst_45079);
var ___$1 = (function (){var statearr_45131 = state_45106;
(statearr_45131[(4)] = cljs.core.rest((state_45106[(4)])));

return statearr_45131;
})();
var state_45106__$1 = state_45106;
var statearr_45132_46264 = state_45106__$1;
(statearr_45132_46264[(2)] = inst_45080);

(statearr_45132_46264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (5))){
var inst_45090 = (state_45106[(2)]);
var state_45106__$1 = (function (){var statearr_45133 = state_45106;
(statearr_45133[(13)] = inst_45090);

return statearr_45133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45106__$1,(13),dchan);
} else {
if((state_val_45107 === (14))){
var inst_45095 = cljs.core.async.close_BANG_(out);
var state_45106__$1 = state_45106;
var statearr_45134_46265 = state_45106__$1;
(statearr_45134_46265[(2)] = inst_45095);

(statearr_45134_46265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (16))){
var inst_45102 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45135_46266 = state_45106__$1;
(statearr_45135_46266[(2)] = inst_45102);

(statearr_45135_46266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (10))){
var inst_45067 = (state_45106[(7)]);
var inst_45083 = (state_45106[(2)]);
var inst_45084 = (inst_45067 + (1));
var inst_45067__$1 = inst_45084;
var state_45106__$1 = (function (){var statearr_45136 = state_45106;
(statearr_45136[(14)] = inst_45083);

(statearr_45136[(7)] = inst_45067__$1);

return statearr_45136;
})();
var statearr_45137_46267 = state_45106__$1;
(statearr_45137_46267[(2)] = null);

(statearr_45137_46267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (8))){
var inst_45088 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45138_46268 = state_45106__$1;
(statearr_45138_46268[(2)] = inst_45088);

(statearr_45138_46268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45139[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45139[(1)] = (1));

return statearr_45139;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_45106){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45106);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45140){var ex__43276__auto__ = e45140;
var statearr_45141_46270 = state_45106;
(statearr_45141_46270[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45106[(4)]))){
var statearr_45142_46272 = state_45106;
(statearr_45142_46272[(1)] = cljs.core.first((state_45106[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46274 = state_45106;
state_45106 = G__46274;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_45106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_45106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45143 = f__43431__auto__();
(statearr_45143[(6)] = c__43430__auto___46244);

return statearr_45143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45146 = arguments.length;
switch (G__45146) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43430__auto___46277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45178){
var state_val_45179 = (state_45178[(1)]);
if((state_val_45179 === (7))){
var inst_45158 = (state_45178[(7)]);
var inst_45157 = (state_45178[(8)]);
var inst_45157__$1 = (state_45178[(2)]);
var inst_45158__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45157__$1,(0),null);
var inst_45159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45157__$1,(1),null);
var inst_45160 = (inst_45158__$1 == null);
var state_45178__$1 = (function (){var statearr_45180 = state_45178;
(statearr_45180[(7)] = inst_45158__$1);

(statearr_45180[(8)] = inst_45157__$1);

(statearr_45180[(9)] = inst_45159);

return statearr_45180;
})();
if(cljs.core.truth_(inst_45160)){
var statearr_45181_46278 = state_45178__$1;
(statearr_45181_46278[(1)] = (8));

} else {
var statearr_45182_46279 = state_45178__$1;
(statearr_45182_46279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (1))){
var inst_45147 = cljs.core.vec(chs);
var inst_45148 = inst_45147;
var state_45178__$1 = (function (){var statearr_45183 = state_45178;
(statearr_45183[(10)] = inst_45148);

return statearr_45183;
})();
var statearr_45184_46280 = state_45178__$1;
(statearr_45184_46280[(2)] = null);

(statearr_45184_46280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (4))){
var inst_45148 = (state_45178[(10)]);
var state_45178__$1 = state_45178;
return cljs.core.async.ioc_alts_BANG_(state_45178__$1,(7),inst_45148);
} else {
if((state_val_45179 === (6))){
var inst_45174 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45185_46281 = state_45178__$1;
(statearr_45185_46281[(2)] = inst_45174);

(statearr_45185_46281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (3))){
var inst_45176 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45178__$1,inst_45176);
} else {
if((state_val_45179 === (2))){
var inst_45148 = (state_45178[(10)]);
var inst_45150 = cljs.core.count(inst_45148);
var inst_45151 = (inst_45150 > (0));
var state_45178__$1 = state_45178;
if(cljs.core.truth_(inst_45151)){
var statearr_45187_46282 = state_45178__$1;
(statearr_45187_46282[(1)] = (4));

} else {
var statearr_45188_46283 = state_45178__$1;
(statearr_45188_46283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (11))){
var inst_45148 = (state_45178[(10)]);
var inst_45167 = (state_45178[(2)]);
var tmp45186 = inst_45148;
var inst_45148__$1 = tmp45186;
var state_45178__$1 = (function (){var statearr_45189 = state_45178;
(statearr_45189[(11)] = inst_45167);

(statearr_45189[(10)] = inst_45148__$1);

return statearr_45189;
})();
var statearr_45190_46284 = state_45178__$1;
(statearr_45190_46284[(2)] = null);

(statearr_45190_46284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (9))){
var inst_45158 = (state_45178[(7)]);
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45178__$1,(11),out,inst_45158);
} else {
if((state_val_45179 === (5))){
var inst_45172 = cljs.core.async.close_BANG_(out);
var state_45178__$1 = state_45178;
var statearr_45193_46285 = state_45178__$1;
(statearr_45193_46285[(2)] = inst_45172);

(statearr_45193_46285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (10))){
var inst_45170 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45194_46286 = state_45178__$1;
(statearr_45194_46286[(2)] = inst_45170);

(statearr_45194_46286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (8))){
var inst_45158 = (state_45178[(7)]);
var inst_45157 = (state_45178[(8)]);
var inst_45148 = (state_45178[(10)]);
var inst_45159 = (state_45178[(9)]);
var inst_45162 = (function (){var cs = inst_45148;
var vec__45153 = inst_45157;
var v = inst_45158;
var c = inst_45159;
return (function (p1__45144_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45144_SHARP_);
});
})();
var inst_45163 = cljs.core.filterv(inst_45162,inst_45148);
var inst_45148__$1 = inst_45163;
var state_45178__$1 = (function (){var statearr_45198 = state_45178;
(statearr_45198[(10)] = inst_45148__$1);

return statearr_45198;
})();
var statearr_45199_46287 = state_45178__$1;
(statearr_45199_46287[(2)] = null);

(statearr_45199_46287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45202[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45202[(1)] = (1));

return statearr_45202;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_45178){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45178);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45204){var ex__43276__auto__ = e45204;
var statearr_45205_46289 = state_45178;
(statearr_45205_46289[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45178[(4)]))){
var statearr_45206_46290 = state_45178;
(statearr_45206_46290[(1)] = cljs.core.first((state_45178[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46291 = state_45178;
state_45178 = G__46291;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_45178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_45178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45207 = f__43431__auto__();
(statearr_45207[(6)] = c__43430__auto___46277);

return statearr_45207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45211 = arguments.length;
switch (G__45211) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43430__auto___46297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45236){
var state_val_45237 = (state_45236[(1)]);
if((state_val_45237 === (7))){
var inst_45218 = (state_45236[(7)]);
var inst_45218__$1 = (state_45236[(2)]);
var inst_45219 = (inst_45218__$1 == null);
var inst_45220 = cljs.core.not(inst_45219);
var state_45236__$1 = (function (){var statearr_45238 = state_45236;
(statearr_45238[(7)] = inst_45218__$1);

return statearr_45238;
})();
if(inst_45220){
var statearr_45239_46298 = state_45236__$1;
(statearr_45239_46298[(1)] = (8));

} else {
var statearr_45240_46299 = state_45236__$1;
(statearr_45240_46299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (1))){
var inst_45213 = (0);
var state_45236__$1 = (function (){var statearr_45241 = state_45236;
(statearr_45241[(8)] = inst_45213);

return statearr_45241;
})();
var statearr_45242_46300 = state_45236__$1;
(statearr_45242_46300[(2)] = null);

(statearr_45242_46300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (4))){
var state_45236__$1 = state_45236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45236__$1,(7),ch);
} else {
if((state_val_45237 === (6))){
var inst_45231 = (state_45236[(2)]);
var state_45236__$1 = state_45236;
var statearr_45245_46301 = state_45236__$1;
(statearr_45245_46301[(2)] = inst_45231);

(statearr_45245_46301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (3))){
var inst_45233 = (state_45236[(2)]);
var inst_45234 = cljs.core.async.close_BANG_(out);
var state_45236__$1 = (function (){var statearr_45248 = state_45236;
(statearr_45248[(9)] = inst_45233);

return statearr_45248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45236__$1,inst_45234);
} else {
if((state_val_45237 === (2))){
var inst_45213 = (state_45236[(8)]);
var inst_45215 = (inst_45213 < n);
var state_45236__$1 = state_45236;
if(cljs.core.truth_(inst_45215)){
var statearr_45250_46305 = state_45236__$1;
(statearr_45250_46305[(1)] = (4));

} else {
var statearr_45251_46306 = state_45236__$1;
(statearr_45251_46306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (11))){
var inst_45213 = (state_45236[(8)]);
var inst_45223 = (state_45236[(2)]);
var inst_45224 = (inst_45213 + (1));
var inst_45213__$1 = inst_45224;
var state_45236__$1 = (function (){var statearr_45252 = state_45236;
(statearr_45252[(10)] = inst_45223);

(statearr_45252[(8)] = inst_45213__$1);

return statearr_45252;
})();
var statearr_45253_46307 = state_45236__$1;
(statearr_45253_46307[(2)] = null);

(statearr_45253_46307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (9))){
var state_45236__$1 = state_45236;
var statearr_45254_46308 = state_45236__$1;
(statearr_45254_46308[(2)] = null);

(statearr_45254_46308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (5))){
var state_45236__$1 = state_45236;
var statearr_45255_46309 = state_45236__$1;
(statearr_45255_46309[(2)] = null);

(statearr_45255_46309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (10))){
var inst_45228 = (state_45236[(2)]);
var state_45236__$1 = state_45236;
var statearr_45256_46310 = state_45236__$1;
(statearr_45256_46310[(2)] = inst_45228);

(statearr_45256_46310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45237 === (8))){
var inst_45218 = (state_45236[(7)]);
var state_45236__$1 = state_45236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45236__$1,(11),out,inst_45218);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45257[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45257[(1)] = (1));

return statearr_45257;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_45236){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45236);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45258){var ex__43276__auto__ = e45258;
var statearr_45259_46312 = state_45236;
(statearr_45259_46312[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45236[(4)]))){
var statearr_45260_46313 = state_45236;
(statearr_45260_46313[(1)] = cljs.core.first((state_45236[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46315 = state_45236;
state_45236 = G__46315;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_45236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_45236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45261 = f__43431__auto__();
(statearr_45261[(6)] = c__43430__auto___46297);

return statearr_45261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45263 = (function (f,ch,meta45264){
this.f = f;
this.ch = ch;
this.meta45264 = meta45264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45265,meta45264__$1){
var self__ = this;
var _45265__$1 = this;
return (new cljs.core.async.t_cljs$core$async45263(self__.f,self__.ch,meta45264__$1));
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45265){
var self__ = this;
var _45265__$1 = this;
return self__.meta45264;
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45271 = (function (f,ch,meta45264,_,fn1,meta45272){
this.f = f;
this.ch = ch;
this.meta45264 = meta45264;
this._ = _;
this.fn1 = fn1;
this.meta45272 = meta45272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45273,meta45272__$1){
var self__ = this;
var _45273__$1 = this;
return (new cljs.core.async.t_cljs$core$async45271(self__.f,self__.ch,self__.meta45264,self__._,self__.fn1,meta45272__$1));
}));

(cljs.core.async.t_cljs$core$async45271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45273){
var self__ = this;
var _45273__$1 = this;
return self__.meta45272;
}));

(cljs.core.async.t_cljs$core$async45271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45262_SHARP_){
var G__45277 = (((p1__45262_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45262_SHARP_) : self__.f.call(null,p1__45262_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45277) : f1.call(null,G__45277));
});
}));

(cljs.core.async.t_cljs$core$async45271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45264","meta45264",-47071736,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45263","cljs.core.async/t_cljs$core$async45263",-1872036884,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45272","meta45272",-1215847212,null)], null);
}));

(cljs.core.async.t_cljs$core$async45271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45271");

(cljs.core.async.t_cljs$core$async45271.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45271.
 */
cljs.core.async.__GT_t_cljs$core$async45271 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45271(f__$1,ch__$1,meta45264__$1,___$2,fn1__$1,meta45272){
return (new cljs.core.async.t_cljs$core$async45271(f__$1,ch__$1,meta45264__$1,___$2,fn1__$1,meta45272));
});

}

return (new cljs.core.async.t_cljs$core$async45271(self__.f,self__.ch,self__.meta45264,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45279 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45279) : self__.f.call(null,G__45279));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45264","meta45264",-47071736,null)], null);
}));

(cljs.core.async.t_cljs$core$async45263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45263");

(cljs.core.async.t_cljs$core$async45263.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45263.
 */
cljs.core.async.__GT_t_cljs$core$async45263 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45263(f__$1,ch__$1,meta45264){
return (new cljs.core.async.t_cljs$core$async45263(f__$1,ch__$1,meta45264));
});

}

return (new cljs.core.async.t_cljs$core$async45263(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45280 = (function (f,ch,meta45281){
this.f = f;
this.ch = ch;
this.meta45281 = meta45281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45282,meta45281__$1){
var self__ = this;
var _45282__$1 = this;
return (new cljs.core.async.t_cljs$core$async45280(self__.f,self__.ch,meta45281__$1));
}));

(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45282){
var self__ = this;
var _45282__$1 = this;
return self__.meta45281;
}));

(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45281","meta45281",1677285205,null)], null);
}));

(cljs.core.async.t_cljs$core$async45280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45280");

(cljs.core.async.t_cljs$core$async45280.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45280.
 */
cljs.core.async.__GT_t_cljs$core$async45280 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45280(f__$1,ch__$1,meta45281){
return (new cljs.core.async.t_cljs$core$async45280(f__$1,ch__$1,meta45281));
});

}

return (new cljs.core.async.t_cljs$core$async45280(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45283 = (function (p,ch,meta45284){
this.p = p;
this.ch = ch;
this.meta45284 = meta45284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45285,meta45284__$1){
var self__ = this;
var _45285__$1 = this;
return (new cljs.core.async.t_cljs$core$async45283(self__.p,self__.ch,meta45284__$1));
}));

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45285){
var self__ = this;
var _45285__$1 = this;
return self__.meta45284;
}));

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45284","meta45284",-6225390,null)], null);
}));

(cljs.core.async.t_cljs$core$async45283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45283");

(cljs.core.async.t_cljs$core$async45283.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45283.
 */
cljs.core.async.__GT_t_cljs$core$async45283 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45283(p__$1,ch__$1,meta45284){
return (new cljs.core.async.t_cljs$core$async45283(p__$1,ch__$1,meta45284));
});

}

return (new cljs.core.async.t_cljs$core$async45283(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45290 = arguments.length;
switch (G__45290) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43430__auto___46343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45311){
var state_val_45312 = (state_45311[(1)]);
if((state_val_45312 === (7))){
var inst_45307 = (state_45311[(2)]);
var state_45311__$1 = state_45311;
var statearr_45313_46344 = state_45311__$1;
(statearr_45313_46344[(2)] = inst_45307);

(statearr_45313_46344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (1))){
var state_45311__$1 = state_45311;
var statearr_45314_46345 = state_45311__$1;
(statearr_45314_46345[(2)] = null);

(statearr_45314_46345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (4))){
var inst_45293 = (state_45311[(7)]);
var inst_45293__$1 = (state_45311[(2)]);
var inst_45294 = (inst_45293__$1 == null);
var state_45311__$1 = (function (){var statearr_45315 = state_45311;
(statearr_45315[(7)] = inst_45293__$1);

return statearr_45315;
})();
if(cljs.core.truth_(inst_45294)){
var statearr_45316_46347 = state_45311__$1;
(statearr_45316_46347[(1)] = (5));

} else {
var statearr_45317_46348 = state_45311__$1;
(statearr_45317_46348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (6))){
var inst_45293 = (state_45311[(7)]);
var inst_45298 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45293) : p.call(null,inst_45293));
var state_45311__$1 = state_45311;
if(cljs.core.truth_(inst_45298)){
var statearr_45318_46350 = state_45311__$1;
(statearr_45318_46350[(1)] = (8));

} else {
var statearr_45319_46351 = state_45311__$1;
(statearr_45319_46351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (3))){
var inst_45309 = (state_45311[(2)]);
var state_45311__$1 = state_45311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45311__$1,inst_45309);
} else {
if((state_val_45312 === (2))){
var state_45311__$1 = state_45311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45311__$1,(4),ch);
} else {
if((state_val_45312 === (11))){
var inst_45301 = (state_45311[(2)]);
var state_45311__$1 = state_45311;
var statearr_45320_46352 = state_45311__$1;
(statearr_45320_46352[(2)] = inst_45301);

(statearr_45320_46352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (9))){
var state_45311__$1 = state_45311;
var statearr_45321_46353 = state_45311__$1;
(statearr_45321_46353[(2)] = null);

(statearr_45321_46353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (5))){
var inst_45296 = cljs.core.async.close_BANG_(out);
var state_45311__$1 = state_45311;
var statearr_45322_46354 = state_45311__$1;
(statearr_45322_46354[(2)] = inst_45296);

(statearr_45322_46354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (10))){
var inst_45304 = (state_45311[(2)]);
var state_45311__$1 = (function (){var statearr_45323 = state_45311;
(statearr_45323[(8)] = inst_45304);

return statearr_45323;
})();
var statearr_45324_46355 = state_45311__$1;
(statearr_45324_46355[(2)] = null);

(statearr_45324_46355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45312 === (8))){
var inst_45293 = (state_45311[(7)]);
var state_45311__$1 = state_45311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45311__$1,(11),out,inst_45293);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45325 = [null,null,null,null,null,null,null,null,null];
(statearr_45325[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45325[(1)] = (1));

return statearr_45325;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_45311){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45311);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45326){var ex__43276__auto__ = e45326;
var statearr_45327_46356 = state_45311;
(statearr_45327_46356[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45311[(4)]))){
var statearr_45328_46357 = state_45311;
(statearr_45328_46357[(1)] = cljs.core.first((state_45311[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46358 = state_45311;
state_45311 = G__46358;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_45311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_45311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45329 = f__43431__auto__();
(statearr_45329[(6)] = c__43430__auto___46343);

return statearr_45329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45333 = arguments.length;
switch (G__45333) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43430__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45405){
var state_val_45406 = (state_45405[(1)]);
if((state_val_45406 === (7))){
var inst_45400 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45407_46361 = state_45405__$1;
(statearr_45407_46361[(2)] = inst_45400);

(statearr_45407_46361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (20))){
var inst_45369 = (state_45405[(7)]);
var inst_45381 = (state_45405[(2)]);
var inst_45382 = cljs.core.next(inst_45369);
var inst_45351 = inst_45382;
var inst_45352 = null;
var inst_45353 = (0);
var inst_45354 = (0);
var state_45405__$1 = (function (){var statearr_45410 = state_45405;
(statearr_45410[(8)] = inst_45353);

(statearr_45410[(9)] = inst_45352);

(statearr_45410[(10)] = inst_45354);

(statearr_45410[(11)] = inst_45381);

(statearr_45410[(12)] = inst_45351);

return statearr_45410;
})();
var statearr_45413_46362 = state_45405__$1;
(statearr_45413_46362[(2)] = null);

(statearr_45413_46362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (1))){
var state_45405__$1 = state_45405;
var statearr_45415_46363 = state_45405__$1;
(statearr_45415_46363[(2)] = null);

(statearr_45415_46363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (4))){
var inst_45340 = (state_45405[(13)]);
var inst_45340__$1 = (state_45405[(2)]);
var inst_45341 = (inst_45340__$1 == null);
var state_45405__$1 = (function (){var statearr_45416 = state_45405;
(statearr_45416[(13)] = inst_45340__$1);

return statearr_45416;
})();
if(cljs.core.truth_(inst_45341)){
var statearr_45417_46364 = state_45405__$1;
(statearr_45417_46364[(1)] = (5));

} else {
var statearr_45419_46365 = state_45405__$1;
(statearr_45419_46365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (15))){
var state_45405__$1 = state_45405;
var statearr_45423_46367 = state_45405__$1;
(statearr_45423_46367[(2)] = null);

(statearr_45423_46367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (21))){
var state_45405__$1 = state_45405;
var statearr_45424_46368 = state_45405__$1;
(statearr_45424_46368[(2)] = null);

(statearr_45424_46368[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (13))){
var inst_45353 = (state_45405[(8)]);
var inst_45352 = (state_45405[(9)]);
var inst_45354 = (state_45405[(10)]);
var inst_45351 = (state_45405[(12)]);
var inst_45364 = (state_45405[(2)]);
var inst_45366 = (inst_45354 + (1));
var tmp45420 = inst_45353;
var tmp45421 = inst_45352;
var tmp45422 = inst_45351;
var inst_45351__$1 = tmp45422;
var inst_45352__$1 = tmp45421;
var inst_45353__$1 = tmp45420;
var inst_45354__$1 = inst_45366;
var state_45405__$1 = (function (){var statearr_45429 = state_45405;
(statearr_45429[(14)] = inst_45364);

(statearr_45429[(8)] = inst_45353__$1);

(statearr_45429[(9)] = inst_45352__$1);

(statearr_45429[(10)] = inst_45354__$1);

(statearr_45429[(12)] = inst_45351__$1);

return statearr_45429;
})();
var statearr_45430_46373 = state_45405__$1;
(statearr_45430_46373[(2)] = null);

(statearr_45430_46373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (22))){
var state_45405__$1 = state_45405;
var statearr_45431_46374 = state_45405__$1;
(statearr_45431_46374[(2)] = null);

(statearr_45431_46374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (6))){
var inst_45340 = (state_45405[(13)]);
var inst_45349 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45340) : f.call(null,inst_45340));
var inst_45350 = cljs.core.seq(inst_45349);
var inst_45351 = inst_45350;
var inst_45352 = null;
var inst_45353 = (0);
var inst_45354 = (0);
var state_45405__$1 = (function (){var statearr_45434 = state_45405;
(statearr_45434[(8)] = inst_45353);

(statearr_45434[(9)] = inst_45352);

(statearr_45434[(10)] = inst_45354);

(statearr_45434[(12)] = inst_45351);

return statearr_45434;
})();
var statearr_45435_46375 = state_45405__$1;
(statearr_45435_46375[(2)] = null);

(statearr_45435_46375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (17))){
var inst_45369 = (state_45405[(7)]);
var inst_45373 = cljs.core.chunk_first(inst_45369);
var inst_45375 = cljs.core.chunk_rest(inst_45369);
var inst_45376 = cljs.core.count(inst_45373);
var inst_45351 = inst_45375;
var inst_45352 = inst_45373;
var inst_45353 = inst_45376;
var inst_45354 = (0);
var state_45405__$1 = (function (){var statearr_45437 = state_45405;
(statearr_45437[(8)] = inst_45353);

(statearr_45437[(9)] = inst_45352);

(statearr_45437[(10)] = inst_45354);

(statearr_45437[(12)] = inst_45351);

return statearr_45437;
})();
var statearr_45439_46376 = state_45405__$1;
(statearr_45439_46376[(2)] = null);

(statearr_45439_46376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (3))){
var inst_45402 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45405__$1,inst_45402);
} else {
if((state_val_45406 === (12))){
var inst_45390 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45441_46377 = state_45405__$1;
(statearr_45441_46377[(2)] = inst_45390);

(statearr_45441_46377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (2))){
var state_45405__$1 = state_45405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45405__$1,(4),in$);
} else {
if((state_val_45406 === (23))){
var inst_45398 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45443_46378 = state_45405__$1;
(statearr_45443_46378[(2)] = inst_45398);

(statearr_45443_46378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (19))){
var inst_45385 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45444_46379 = state_45405__$1;
(statearr_45444_46379[(2)] = inst_45385);

(statearr_45444_46379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (11))){
var inst_45369 = (state_45405[(7)]);
var inst_45351 = (state_45405[(12)]);
var inst_45369__$1 = cljs.core.seq(inst_45351);
var state_45405__$1 = (function (){var statearr_45445 = state_45405;
(statearr_45445[(7)] = inst_45369__$1);

return statearr_45445;
})();
if(inst_45369__$1){
var statearr_45446_46380 = state_45405__$1;
(statearr_45446_46380[(1)] = (14));

} else {
var statearr_45447_46381 = state_45405__$1;
(statearr_45447_46381[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (9))){
var inst_45392 = (state_45405[(2)]);
var inst_45393 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45405__$1 = (function (){var statearr_45449 = state_45405;
(statearr_45449[(15)] = inst_45392);

return statearr_45449;
})();
if(cljs.core.truth_(inst_45393)){
var statearr_45452_46382 = state_45405__$1;
(statearr_45452_46382[(1)] = (21));

} else {
var statearr_45453_46383 = state_45405__$1;
(statearr_45453_46383[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (5))){
var inst_45343 = cljs.core.async.close_BANG_(out);
var state_45405__$1 = state_45405;
var statearr_45455_46385 = state_45405__$1;
(statearr_45455_46385[(2)] = inst_45343);

(statearr_45455_46385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (14))){
var inst_45369 = (state_45405[(7)]);
var inst_45371 = cljs.core.chunked_seq_QMARK_(inst_45369);
var state_45405__$1 = state_45405;
if(inst_45371){
var statearr_45461_46390 = state_45405__$1;
(statearr_45461_46390[(1)] = (17));

} else {
var statearr_45462_46392 = state_45405__$1;
(statearr_45462_46392[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (16))){
var inst_45388 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45463_46393 = state_45405__$1;
(statearr_45463_46393[(2)] = inst_45388);

(statearr_45463_46393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (10))){
var inst_45352 = (state_45405[(9)]);
var inst_45354 = (state_45405[(10)]);
var inst_45362 = cljs.core._nth(inst_45352,inst_45354);
var state_45405__$1 = state_45405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45405__$1,(13),out,inst_45362);
} else {
if((state_val_45406 === (18))){
var inst_45369 = (state_45405[(7)]);
var inst_45379 = cljs.core.first(inst_45369);
var state_45405__$1 = state_45405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45405__$1,(20),out,inst_45379);
} else {
if((state_val_45406 === (8))){
var inst_45353 = (state_45405[(8)]);
var inst_45354 = (state_45405[(10)]);
var inst_45357 = (inst_45354 < inst_45353);
var inst_45358 = inst_45357;
var state_45405__$1 = state_45405;
if(cljs.core.truth_(inst_45358)){
var statearr_45465_46395 = state_45405__$1;
(statearr_45465_46395[(1)] = (10));

} else {
var statearr_45466_46396 = state_45405__$1;
(statearr_45466_46396[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43273__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43273__auto____0 = (function (){
var statearr_45471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45471[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43273__auto__);

(statearr_45471[(1)] = (1));

return statearr_45471;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43273__auto____1 = (function (state_45405){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45405);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45472){var ex__43276__auto__ = e45472;
var statearr_45473_46397 = state_45405;
(statearr_45473_46397[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45405[(4)]))){
var statearr_45474_46398 = state_45405;
(statearr_45474_46398[(1)] = cljs.core.first((state_45405[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46399 = state_45405;
state_45405 = G__46399;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43273__auto__ = function(state_45405){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43273__auto____1.call(this,state_45405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43273__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43273__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45475 = f__43431__auto__();
(statearr_45475[(6)] = c__43430__auto__);

return statearr_45475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));

return c__43430__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45480 = arguments.length;
switch (G__45480) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45485 = arguments.length;
switch (G__45485) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45493 = arguments.length;
switch (G__45493) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43430__auto___46408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45526){
var state_val_45527 = (state_45526[(1)]);
if((state_val_45527 === (7))){
var inst_45521 = (state_45526[(2)]);
var state_45526__$1 = state_45526;
var statearr_45528_46409 = state_45526__$1;
(statearr_45528_46409[(2)] = inst_45521);

(statearr_45528_46409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (1))){
var inst_45498 = null;
var state_45526__$1 = (function (){var statearr_45529 = state_45526;
(statearr_45529[(7)] = inst_45498);

return statearr_45529;
})();
var statearr_45530_46410 = state_45526__$1;
(statearr_45530_46410[(2)] = null);

(statearr_45530_46410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (4))){
var inst_45504 = (state_45526[(8)]);
var inst_45504__$1 = (state_45526[(2)]);
var inst_45507 = (inst_45504__$1 == null);
var inst_45508 = cljs.core.not(inst_45507);
var state_45526__$1 = (function (){var statearr_45531 = state_45526;
(statearr_45531[(8)] = inst_45504__$1);

return statearr_45531;
})();
if(inst_45508){
var statearr_45532_46411 = state_45526__$1;
(statearr_45532_46411[(1)] = (5));

} else {
var statearr_45533_46412 = state_45526__$1;
(statearr_45533_46412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (6))){
var state_45526__$1 = state_45526;
var statearr_45534_46413 = state_45526__$1;
(statearr_45534_46413[(2)] = null);

(statearr_45534_46413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (3))){
var inst_45523 = (state_45526[(2)]);
var inst_45524 = cljs.core.async.close_BANG_(out);
var state_45526__$1 = (function (){var statearr_45536 = state_45526;
(statearr_45536[(9)] = inst_45523);

return statearr_45536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45526__$1,inst_45524);
} else {
if((state_val_45527 === (2))){
var state_45526__$1 = state_45526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45526__$1,(4),ch);
} else {
if((state_val_45527 === (11))){
var inst_45504 = (state_45526[(8)]);
var inst_45515 = (state_45526[(2)]);
var inst_45498 = inst_45504;
var state_45526__$1 = (function (){var statearr_45537 = state_45526;
(statearr_45537[(7)] = inst_45498);

(statearr_45537[(10)] = inst_45515);

return statearr_45537;
})();
var statearr_45538_46414 = state_45526__$1;
(statearr_45538_46414[(2)] = null);

(statearr_45538_46414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (9))){
var inst_45504 = (state_45526[(8)]);
var state_45526__$1 = state_45526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45526__$1,(11),out,inst_45504);
} else {
if((state_val_45527 === (5))){
var inst_45498 = (state_45526[(7)]);
var inst_45504 = (state_45526[(8)]);
var inst_45510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45504,inst_45498);
var state_45526__$1 = state_45526;
if(inst_45510){
var statearr_45542_46415 = state_45526__$1;
(statearr_45542_46415[(1)] = (8));

} else {
var statearr_45545_46416 = state_45526__$1;
(statearr_45545_46416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (10))){
var inst_45518 = (state_45526[(2)]);
var state_45526__$1 = state_45526;
var statearr_45546_46417 = state_45526__$1;
(statearr_45546_46417[(2)] = inst_45518);

(statearr_45546_46417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45527 === (8))){
var inst_45498 = (state_45526[(7)]);
var tmp45541 = inst_45498;
var inst_45498__$1 = tmp45541;
var state_45526__$1 = (function (){var statearr_45547 = state_45526;
(statearr_45547[(7)] = inst_45498__$1);

return statearr_45547;
})();
var statearr_45548_46418 = state_45526__$1;
(statearr_45548_46418[(2)] = null);

(statearr_45548_46418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45550[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45550[(1)] = (1));

return statearr_45550;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_45526){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45526);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45551){var ex__43276__auto__ = e45551;
var statearr_45554_46419 = state_45526;
(statearr_45554_46419[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45526[(4)]))){
var statearr_45555_46420 = state_45526;
(statearr_45555_46420[(1)] = cljs.core.first((state_45526[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46421 = state_45526;
state_45526 = G__46421;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_45526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_45526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45558 = f__43431__auto__();
(statearr_45558[(6)] = c__43430__auto___46408);

return statearr_45558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45560 = arguments.length;
switch (G__45560) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43430__auto___46423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45598){
var state_val_45599 = (state_45598[(1)]);
if((state_val_45599 === (7))){
var inst_45594 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
var statearr_45600_46424 = state_45598__$1;
(statearr_45600_46424[(2)] = inst_45594);

(statearr_45600_46424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (1))){
var inst_45561 = (new Array(n));
var inst_45562 = inst_45561;
var inst_45563 = (0);
var state_45598__$1 = (function (){var statearr_45601 = state_45598;
(statearr_45601[(7)] = inst_45562);

(statearr_45601[(8)] = inst_45563);

return statearr_45601;
})();
var statearr_45602_46425 = state_45598__$1;
(statearr_45602_46425[(2)] = null);

(statearr_45602_46425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (4))){
var inst_45566 = (state_45598[(9)]);
var inst_45566__$1 = (state_45598[(2)]);
var inst_45567 = (inst_45566__$1 == null);
var inst_45568 = cljs.core.not(inst_45567);
var state_45598__$1 = (function (){var statearr_45603 = state_45598;
(statearr_45603[(9)] = inst_45566__$1);

return statearr_45603;
})();
if(inst_45568){
var statearr_45604_46428 = state_45598__$1;
(statearr_45604_46428[(1)] = (5));

} else {
var statearr_45605_46429 = state_45598__$1;
(statearr_45605_46429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (15))){
var inst_45588 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
var statearr_45608_46430 = state_45598__$1;
(statearr_45608_46430[(2)] = inst_45588);

(statearr_45608_46430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (13))){
var state_45598__$1 = state_45598;
var statearr_45609_46431 = state_45598__$1;
(statearr_45609_46431[(2)] = null);

(statearr_45609_46431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (6))){
var inst_45563 = (state_45598[(8)]);
var inst_45584 = (inst_45563 > (0));
var state_45598__$1 = state_45598;
if(cljs.core.truth_(inst_45584)){
var statearr_45611_46435 = state_45598__$1;
(statearr_45611_46435[(1)] = (12));

} else {
var statearr_45613_46436 = state_45598__$1;
(statearr_45613_46436[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (3))){
var inst_45596 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45598__$1,inst_45596);
} else {
if((state_val_45599 === (12))){
var inst_45562 = (state_45598[(7)]);
var inst_45586 = cljs.core.vec(inst_45562);
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45598__$1,(15),out,inst_45586);
} else {
if((state_val_45599 === (2))){
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45598__$1,(4),ch);
} else {
if((state_val_45599 === (11))){
var inst_45578 = (state_45598[(2)]);
var inst_45579 = (new Array(n));
var inst_45562 = inst_45579;
var inst_45563 = (0);
var state_45598__$1 = (function (){var statearr_45614 = state_45598;
(statearr_45614[(10)] = inst_45578);

(statearr_45614[(7)] = inst_45562);

(statearr_45614[(8)] = inst_45563);

return statearr_45614;
})();
var statearr_45615_46437 = state_45598__$1;
(statearr_45615_46437[(2)] = null);

(statearr_45615_46437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (9))){
var inst_45562 = (state_45598[(7)]);
var inst_45576 = cljs.core.vec(inst_45562);
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45598__$1,(11),out,inst_45576);
} else {
if((state_val_45599 === (5))){
var inst_45571 = (state_45598[(11)]);
var inst_45566 = (state_45598[(9)]);
var inst_45562 = (state_45598[(7)]);
var inst_45563 = (state_45598[(8)]);
var inst_45570 = (inst_45562[inst_45563] = inst_45566);
var inst_45571__$1 = (inst_45563 + (1));
var inst_45572 = (inst_45571__$1 < n);
var state_45598__$1 = (function (){var statearr_45616 = state_45598;
(statearr_45616[(11)] = inst_45571__$1);

(statearr_45616[(12)] = inst_45570);

return statearr_45616;
})();
if(cljs.core.truth_(inst_45572)){
var statearr_45617_46438 = state_45598__$1;
(statearr_45617_46438[(1)] = (8));

} else {
var statearr_45618_46439 = state_45598__$1;
(statearr_45618_46439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (14))){
var inst_45591 = (state_45598[(2)]);
var inst_45592 = cljs.core.async.close_BANG_(out);
var state_45598__$1 = (function (){var statearr_45620 = state_45598;
(statearr_45620[(13)] = inst_45591);

return statearr_45620;
})();
var statearr_45621_46441 = state_45598__$1;
(statearr_45621_46441[(2)] = inst_45592);

(statearr_45621_46441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (10))){
var inst_45582 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
var statearr_45622_46442 = state_45598__$1;
(statearr_45622_46442[(2)] = inst_45582);

(statearr_45622_46442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (8))){
var inst_45571 = (state_45598[(11)]);
var inst_45562 = (state_45598[(7)]);
var tmp45619 = inst_45562;
var inst_45562__$1 = tmp45619;
var inst_45563 = inst_45571;
var state_45598__$1 = (function (){var statearr_45623 = state_45598;
(statearr_45623[(7)] = inst_45562__$1);

(statearr_45623[(8)] = inst_45563);

return statearr_45623;
})();
var statearr_45624_46443 = state_45598__$1;
(statearr_45624_46443[(2)] = null);

(statearr_45624_46443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45625[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45625[(1)] = (1));

return statearr_45625;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_45598){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45598);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45627){var ex__43276__auto__ = e45627;
var statearr_45629_46446 = state_45598;
(statearr_45629_46446[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45598[(4)]))){
var statearr_45630_46447 = state_45598;
(statearr_45630_46447[(1)] = cljs.core.first((state_45598[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46448 = state_45598;
state_45598 = G__46448;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_45598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_45598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45631 = f__43431__auto__();
(statearr_45631[(6)] = c__43430__auto___46423);

return statearr_45631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45634 = arguments.length;
switch (G__45634) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43430__auto___46451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43431__auto__ = (function (){var switch__43272__auto__ = (function (state_45684){
var state_val_45685 = (state_45684[(1)]);
if((state_val_45685 === (7))){
var inst_45680 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
var statearr_45690_46452 = state_45684__$1;
(statearr_45690_46452[(2)] = inst_45680);

(statearr_45690_46452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (1))){
var inst_45636 = [];
var inst_45637 = inst_45636;
var inst_45638 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45684__$1 = (function (){var statearr_45694 = state_45684;
(statearr_45694[(7)] = inst_45637);

(statearr_45694[(8)] = inst_45638);

return statearr_45694;
})();
var statearr_45695_46453 = state_45684__$1;
(statearr_45695_46453[(2)] = null);

(statearr_45695_46453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (4))){
var inst_45641 = (state_45684[(9)]);
var inst_45641__$1 = (state_45684[(2)]);
var inst_45642 = (inst_45641__$1 == null);
var inst_45643 = cljs.core.not(inst_45642);
var state_45684__$1 = (function (){var statearr_45696 = state_45684;
(statearr_45696[(9)] = inst_45641__$1);

return statearr_45696;
})();
if(inst_45643){
var statearr_45700_46454 = state_45684__$1;
(statearr_45700_46454[(1)] = (5));

} else {
var statearr_45701_46455 = state_45684__$1;
(statearr_45701_46455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (15))){
var inst_45637 = (state_45684[(7)]);
var inst_45672 = cljs.core.vec(inst_45637);
var state_45684__$1 = state_45684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45684__$1,(18),out,inst_45672);
} else {
if((state_val_45685 === (13))){
var inst_45667 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
var statearr_45705_46456 = state_45684__$1;
(statearr_45705_46456[(2)] = inst_45667);

(statearr_45705_46456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (6))){
var inst_45637 = (state_45684[(7)]);
var inst_45669 = inst_45637.length;
var inst_45670 = (inst_45669 > (0));
var state_45684__$1 = state_45684;
if(cljs.core.truth_(inst_45670)){
var statearr_45706_46457 = state_45684__$1;
(statearr_45706_46457[(1)] = (15));

} else {
var statearr_45707_46458 = state_45684__$1;
(statearr_45707_46458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (17))){
var inst_45677 = (state_45684[(2)]);
var inst_45678 = cljs.core.async.close_BANG_(out);
var state_45684__$1 = (function (){var statearr_45711 = state_45684;
(statearr_45711[(10)] = inst_45677);

return statearr_45711;
})();
var statearr_45712_46459 = state_45684__$1;
(statearr_45712_46459[(2)] = inst_45678);

(statearr_45712_46459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (3))){
var inst_45682 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45684__$1,inst_45682);
} else {
if((state_val_45685 === (12))){
var inst_45637 = (state_45684[(7)]);
var inst_45660 = cljs.core.vec(inst_45637);
var state_45684__$1 = state_45684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45684__$1,(14),out,inst_45660);
} else {
if((state_val_45685 === (2))){
var state_45684__$1 = state_45684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45684__$1,(4),ch);
} else {
if((state_val_45685 === (11))){
var inst_45649 = (state_45684[(11)]);
var inst_45637 = (state_45684[(7)]);
var inst_45641 = (state_45684[(9)]);
var inst_45657 = inst_45637.push(inst_45641);
var tmp45713 = inst_45637;
var inst_45637__$1 = tmp45713;
var inst_45638 = inst_45649;
var state_45684__$1 = (function (){var statearr_45714 = state_45684;
(statearr_45714[(7)] = inst_45637__$1);

(statearr_45714[(8)] = inst_45638);

(statearr_45714[(12)] = inst_45657);

return statearr_45714;
})();
var statearr_45716_46465 = state_45684__$1;
(statearr_45716_46465[(2)] = null);

(statearr_45716_46465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (9))){
var inst_45638 = (state_45684[(8)]);
var inst_45653 = cljs.core.keyword_identical_QMARK_(inst_45638,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_45684__$1 = state_45684;
var statearr_45717_46466 = state_45684__$1;
(statearr_45717_46466[(2)] = inst_45653);

(statearr_45717_46466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (5))){
var inst_45649 = (state_45684[(11)]);
var inst_45638 = (state_45684[(8)]);
var inst_45650 = (state_45684[(13)]);
var inst_45641 = (state_45684[(9)]);
var inst_45649__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45641) : f.call(null,inst_45641));
var inst_45650__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45649__$1,inst_45638);
var state_45684__$1 = (function (){var statearr_45718 = state_45684;
(statearr_45718[(11)] = inst_45649__$1);

(statearr_45718[(13)] = inst_45650__$1);

return statearr_45718;
})();
if(inst_45650__$1){
var statearr_45719_46467 = state_45684__$1;
(statearr_45719_46467[(1)] = (8));

} else {
var statearr_45720_46468 = state_45684__$1;
(statearr_45720_46468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (14))){
var inst_45649 = (state_45684[(11)]);
var inst_45641 = (state_45684[(9)]);
var inst_45662 = (state_45684[(2)]);
var inst_45663 = [];
var inst_45664 = inst_45663.push(inst_45641);
var inst_45637 = inst_45663;
var inst_45638 = inst_45649;
var state_45684__$1 = (function (){var statearr_45721 = state_45684;
(statearr_45721[(14)] = inst_45664);

(statearr_45721[(7)] = inst_45637);

(statearr_45721[(8)] = inst_45638);

(statearr_45721[(15)] = inst_45662);

return statearr_45721;
})();
var statearr_45722_46469 = state_45684__$1;
(statearr_45722_46469[(2)] = null);

(statearr_45722_46469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (16))){
var state_45684__$1 = state_45684;
var statearr_45723_46470 = state_45684__$1;
(statearr_45723_46470[(2)] = null);

(statearr_45723_46470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (10))){
var inst_45655 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
if(cljs.core.truth_(inst_45655)){
var statearr_45724_46471 = state_45684__$1;
(statearr_45724_46471[(1)] = (11));

} else {
var statearr_45727_46473 = state_45684__$1;
(statearr_45727_46473[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (18))){
var inst_45674 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
var statearr_45728_46474 = state_45684__$1;
(statearr_45728_46474[(2)] = inst_45674);

(statearr_45728_46474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (8))){
var inst_45650 = (state_45684[(13)]);
var state_45684__$1 = state_45684;
var statearr_45729_46478 = state_45684__$1;
(statearr_45729_46478[(2)] = inst_45650);

(statearr_45729_46478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43273__auto__ = null;
var cljs$core$async$state_machine__43273__auto____0 = (function (){
var statearr_45730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45730[(0)] = cljs$core$async$state_machine__43273__auto__);

(statearr_45730[(1)] = (1));

return statearr_45730;
});
var cljs$core$async$state_machine__43273__auto____1 = (function (state_45684){
while(true){
var ret_value__43274__auto__ = (function (){try{while(true){
var result__43275__auto__ = switch__43272__auto__(state_45684);
if(cljs.core.keyword_identical_QMARK_(result__43275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43275__auto__;
}
break;
}
}catch (e45733){var ex__43276__auto__ = e45733;
var statearr_45734_46479 = state_45684;
(statearr_45734_46479[(2)] = ex__43276__auto__);


if(cljs.core.seq((state_45684[(4)]))){
var statearr_45735_46481 = state_45684;
(statearr_45735_46481[(1)] = cljs.core.first((state_45684[(4)])));

} else {
throw ex__43276__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46485 = state_45684;
state_45684 = G__46485;
continue;
} else {
return ret_value__43274__auto__;
}
break;
}
});
cljs$core$async$state_machine__43273__auto__ = function(state_45684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43273__auto____1.call(this,state_45684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43273__auto____0;
cljs$core$async$state_machine__43273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43273__auto____1;
return cljs$core$async$state_machine__43273__auto__;
})()
})();
var state__43432__auto__ = (function (){var statearr_45736 = f__43431__auto__();
(statearr_45736[(6)] = c__43430__auto___46451);

return statearr_45736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43432__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
