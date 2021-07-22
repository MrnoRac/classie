goog.provide('rewrite_clj.node.token');

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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.token.TokenNode = (function (value,string_value,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.token.TokenNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k38046,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__38063 = k38046;
var G__38063__$1 = (((G__38063 instanceof cljs.core.Keyword))?G__38063.fqn:null);
switch (G__38063__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38046,else__4475__auto__);

}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__38067){
var vec__38068 = p__38067;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38068,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38068,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#rewrite-clj.node.token.TokenNode{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38045){
var self__ = this;
var G__38045__$1 = this;
return (new cljs.core.RecordIter((0),G__38045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1106307029 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38047,other38048){
var self__ = this;
var this38047__$1 = this;
return (((!((other38048 == null)))) && ((((this38047__$1.constructor === other38048.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38047__$1.value,other38048.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38047__$1.string_value,other38048.string_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38047__$1.__extmap,other38048.__extmap)))))))));
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.string_value.length;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.string_value;
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k38046){
var self__ = this;
var this__4479__auto____$1 = this;
var G__38086 = k38046;
var G__38086__$1 = (((G__38086 instanceof cljs.core.Keyword))?G__38086.fqn:null);
switch (G__38086__$1) {
case "value":
case "string-value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38046);

}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__38045){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__38089 = cljs.core.keyword_identical_QMARK_;
var expr__38090 = k__4481__auto__;
if(cljs.core.truth_((pred__38089.cljs$core$IFn$_invoke$arity$2 ? pred__38089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__38090) : pred__38089.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__38090)))){
return (new rewrite_clj.node.token.TokenNode(G__38045,self__.string_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38089.cljs$core$IFn$_invoke$arity$2 ? pred__38089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__38090) : pred__38089.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__38090)))){
return (new rewrite_clj.node.token.TokenNode(self__.value,G__38045,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__38045),null));
}
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value,null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__38045){
var self__ = this;
var this__4471__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,G__38045,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(rewrite_clj.node.token.TokenNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null)], null);
}));

(rewrite_clj.node.token.TokenNode.cljs$lang$type = true);

(rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.token/TokenNode",null,(1),null));
}));

(rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"rewrite-clj.node.token/TokenNode");
}));

/**
 * Positional factory function for rewrite-clj.node.token/TokenNode.
 */
rewrite_clj.node.token.__GT_TokenNode = (function rewrite_clj$node$token$__GT_TokenNode(value,string_value){
return (new rewrite_clj.node.token.TokenNode(value,string_value,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.token/TokenNode, taking a map of keywords to field values.
 */
rewrite_clj.node.token.map__GT_TokenNode = (function rewrite_clj$node$token$map__GT_TokenNode(G__38054){
var extmap__4512__auto__ = (function (){var G__38104 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38054,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-value","string-value",1109600561)], 0));
if(cljs.core.record_QMARK_(G__38054)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38104);
} else {
return G__38104;
}
})();
return (new rewrite_clj.node.token.TokenNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__38054),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__38054),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Create node for an unspecified EDN token.
 */
rewrite_clj.node.token.token_node = (function rewrite_clj$node$token$token_node(var_args){
var G__38113 = arguments.length;
switch (G__38113) {
case 1:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2 = (function (value,string_value){
return rewrite_clj.node.token.__GT_TokenNode(value,string_value);
}));

(rewrite_clj.node.token.token_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.node.token.js.map
