goog.provide('classie.gen_table');
classie.gen_table.reserved_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 184, ["ignore",null,"else",null,"table",null,"percent",null,"permissions",null,"analyse",null,"recover",null,"encrypt",null,"localtimestamp",null,"values",null,"unique",null,"rename",null,"using",null,"trailing",null,"right",null,"freeze",null,"placing",null,"localtime",null,"top",null,"collate",null,"of",null,"cast",null,"wallet",null,"off",null,"offset",null,"rejectlog",null,"cluster",null,"references",null,"backup",null,"delete",null,"resort",null,"not",null,"encryption",null,"mostly32",null,"intersect",null,"group",null,"parallel",null,"natural",null,"current_date",null,"by",null,"long",null,"emptyasnull",null,"is",null,"delta",null,"cross",null,"null",null,"like",null,"user",null,"binary",null,"union",null,"lzop",null,"grant",null,"new",null,"without",null,"gzip",null,"offline",null,"option",null,"enable",null,"lun",null,"partition",null,"where",null,"timestamp",null,"for",null,"increment",null,"snapshot",null,"text255",null,"overlaps",null,"truncatecolumns",null,"minus",null,"session_user",null,"update",null,"alter",null,"globaldict64k",null,"exclusive",null,"bytedict",null,"analyze",null,"any",null,"distinct",null,"immediate",null,"oid",null,"leading",null,"false",null,"limit",null,"tag",null,"modify",null,"check",null,"similar",null,"drop",null,"current_user",null,"both",null,"full",null,"connect",null,"nulls",null,"regexp",null,"outer",null,"select",null,"primary",null,"or",null,"lzo",null,"identity",null,"start",null,"case",null,"disable",null,"true",null,"current_timestamp",null,"on",null,"desc",null,"current",null,"old",null,"mostly13",null,"when",null,"allowoverwrite",null,"asc",null,"having",null,"deferrable",null,"tablesample",null,"and",null,"order",null,"column",null,"text32k",null,"delta32k",null,"explicit",null,"do",null,"authorization",null,"blanksasnull",null,"whenever",null,"row",null,"between",null,"rlike",null,"isnull",null,"from",null,"join",null,"insert",null,"notnull",null,"luns",null,"lock",null,"create",null,"aes256",null,"current_time",null,"with",null,"ilike",null,"set",null,"inner",null,"foreign",null,"some",null,"tdes",null,"bzip2",null,"deflate",null,"all",null,"exists",null,"maxextents",null,"then",null,"system",null,"rows",null,"globaldict256",null,"restore",null,"sysdate",null,"raw",null,"open",null,"respect",null,"current_user_id",null,"defrag",null,"only",null,"to",null,"trigger",null,"credentials",null,"into",null,"mostly8",null,"except",null,"encode",null,"default",null,"lateral",null,"as",null,"array",null,"readratio",null,"revoke",null,"end",null,"verbose",null,"left",null,"sample",null,"constraint",null,"in",null,"initially",null,"aes128",null], null), null);
classie.gen_table.check_field = (function classie$gen_table$check_field(field){
if(cljs.core.truth_((classie.gen_table.reserved_names.cljs$core$IFn$_invoke$arity$1 ? classie.gen_table.reserved_names.cljs$core$IFn$_invoke$arity$1(field) : classie.gen_table.reserved_names.call(null,field)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(field),"_"].join('');
} else {
return field;
}
});
classie.gen_table.conform_header = (function classie$gen_table$conform_header(hdr){
var conformed = classie.gen_table.check_field(clojure.string.lower_case(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.trim(hdr),/^[0-9]/,(function (m){
return ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
})),/\W/,"_"),/\p{C}/,"")));
var conformed_length = cljs.core.count(conformed);
if((conformed_length >= (127))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(conformed,(0),(conformed_length - (3)));
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conformed_length,(1));
if(and__4221__auto__){
return cljs.core.re_matches(/[\d_]/,conformed);
} else {
return and__4221__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(conformed),"_column"].join('');
} else {
return conformed;

}
}
});
/**
 * Generate the table definitions from a clojure hashmap
 */
classie.gen_table.map__GT_cols = (function classie$gen_table$map__GT_cols(input){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["map cols called"], 0));

var type_fn = (function (p1__38042_SHARP_){
if(((cljs.core.map_QMARK_(p1__38042_SHARP_)) || (cljs.core.sequential_QMARK_(p1__38042_SHARP_)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"json?","json?",889200488),true], null);
} else {
if(cljs.core.boolean_QMARK_(p1__38042_SHARP_)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null);

}
}
});
var out = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38043){
var vec__38044 = p__38043;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38044,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)],[k,clojure.string.upper_case(classie.gen_table.conform_header(camel_snake_kebab.core.__GT_snake_case(cljs.core.name(k))))]),type_fn(v)], 0)));
}),input)));
return out;
});
/**
 * Loops through the data and gets all the columns
 */
classie.gen_table.get_all_cols = (function classie$gen_table$get_all_cols(data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-all called"], 0));

var data_STAR_ = data;
var cols = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var row = cljs.core.first(data_STAR_);
var new_cols = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cols,row], 0));
if(cljs.core.seq(data_STAR_)){
var G__38052 = cljs.core.rest(data_STAR_);
var G__38053 = new_cols;
data_STAR_ = G__38052;
cols = G__38053;
continue;
} else {
return new_cols;
}
break;
}
});
classie.gen_table.parse_obj = (function classie$gen_table$parse_obj(data){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["initiating parsing"], 0));

if(cljs.core.sequential_QMARK_(data)){
return classie.gen_table.map__GT_cols(classie.gen_table.get_all_cols(data));
} else {
return classie.gen_table.map__GT_cols(data);
}
});
/**
 * Parses a json string and generates the column definition
 */
classie.gen_table.parse_json_string = (function classie$gen_table$parse_json_string(in$){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["turning to clj map"], 0));

var data = JSON.parse(in$);
var clj_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return classie.gen_table.parse_obj(clj_map);
});
classie.gen_table.output = (function classie$gen_table$output(o){
var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38047_38054 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38048_38055 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38049_38056 = true;
var _STAR_print_fn_STAR__temp_val__38050_38057 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38049_38056);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38050_38057);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(o);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38048_38055);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38047_38054);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
});
classie.gen_table.process = (function classie$gen_table$process(s){
try{var parsed_obj = classie.gen_table.parse_json_string(s);
var outgoing = classie.gen_table.output(parsed_obj);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["processed"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-outgoing","update-outgoing",1928550455),outgoing], null));
}catch (e38051){var e = e38051;
console.log(e);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-outgoing","update-outgoing",1928550455),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}});

//# sourceMappingURL=classie.gen_table.js.map
