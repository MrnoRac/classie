(ns classie.gen-table
  (:require [re-frame.core :as re-frame]
            [clojure.pprint :as pprint]
            [camel-snake-kebab.core :as csk]
            [clojure.string :as str]))

(def reserved-names
  #{"ignore" "else" "table" "percent" "permissions" "analyse" "recover"
    "encrypt" "localtimestamp" "values" "unique" "rename" "using"
    "trailing" "right" "freeze" "placing" "localtime" "top" "collate"
    "of" "cast" "wallet" "off" "offset" "rejectlog" "cluster"
    "references" "backup" "delete" "resort" "not" "encryption"
    "mostly32" "intersect" "group" "parallel" "natural" "current_date"
    "by" "long" "emptyasnull" "is" "delta" "cross" "null" "like" "user"
    "binary" "union" "lzop" "grant" "new" "without" "gzip" "offline"
    "option" "enable" "lun" "partition" "where" "timestamp" "for"
    "increment" "snapshot" "text255" "overlaps" "truncatecolumns"
    "minus" "session_user" "update" "alter" "globaldict64k" "exclusive"
    "bytedict" "analyze" "any" "distinct" "immediate" "oid" "leading"
    "false" "limit" "tag" "modify" "check" "similar" "drop"
    "current_user" "both" "full" "connect" "nulls" "regexp" "outer"
    "select" "primary" "or" "lzo" "identity" "start" "case" "disable"
    "true" "current_timestamp" "on" "desc" "current" "old" "mostly13"
    "when" "allowoverwrite" "asc" "having" "deferrable" "tablesample"
    "and" "order" "column" "text32k" "delta32k" "explicit" "do"
    "authorization" "blanksasnull" "whenever" "row" "between" "rlike"
    "isnull" "from" "join" "insert" "notnull" "luns" "lock" "create"
    "aes256" "current_time" "with" "ilike" "set" "inner" "foreign"
    "some" "tdes" "bzip2" "deflate" "all" "exists" "maxextents" "then"
    "system" "rows" "globaldict256" "restore" "sysdate" "raw" "open"
    "respect" "current_user_id" "defrag" "only" "to" "trigger"
    "credentials" "into" "mostly8" "except" "encode" "default"
    "lateral" "as" "array" "readratio" "revoke" "end" "verbose" "left"
    "sample" "constraint" "in" "initially" "aes128"})


(defn check-field [field]
  (if (reserved-names field)
    (str field "_")
    field))


(defn conform-header [hdr]
  (let [conformed (-> hdr
                      str/trim
                      (str/replace #"^[0-9]" (fn [m]
                                               (str "_" m)))
                      (str/replace #"\W" "_")
                      (str/replace #"\p{C}" "")
                      str/lower-case
                      check-field)
        conformed-length (count conformed)]
    (cond
      (>= conformed-length 127)             (subs conformed 0 (- conformed-length 3))
      (and (= conformed-length 1)
           (re-matches #"[\d_]" conformed)) (str conformed "_column")
      :else conformed)))


(defn map->cols
  "Generate the table definitions from a clojure hashmap"
  [input]
  (prn "map cols called")
  (let [type-fn #(cond
                   (or (map? %) (sequential? %)) {:type "text" :json? true}
                   (boolean? %) {:type "boolean"}
                   :else {:type "text"})
        out (->> input
                 (map
                   (fn [[k v]]
                     (->> (merge
                            (hash-map :key k
                                      :name (-> (name k)
                                                csk/->snake_case
                                                conform-header
                                                str/upper-case))
                            (type-fn v))
                          (into (sorted-map)))))
                (sort-by :key)
                (into []))]
    out))

(defn get-all-cols
  "Loops through the data and gets all the columns"
  [data]
  (prn "get-all called")
  (loop [data* data
         cols {}]
    (let [row (first data*)
          new-cols (merge cols row)]
      (if (seq data*)
        (recur (rest data*) new-cols)
        new-cols))))

(defn parse-obj [data]
  (prn "initiating parsing")
  (if (sequential? data)
    (-> (get-all-cols data) map->cols)
    (map->cols data)))

(defn parse-json-string
  "Parses a json string and generates the column definition"
  [in]
  (prn "turning to clj map")
  (let [data (.parse js/JSON in)
        clj-map (js->clj data :keywordize-keys true)]
    (parse-obj clj-map)))

(defn output [o]
  (with-out-str (pprint/pprint o)))

(defn process [s]
  (try (let [parsed-obj (parse-json-string s)
             outgoing (output parsed-obj)]
           (prn "processed")
           (re-frame/dispatch [:update-outgoing outgoing]))
       (catch :default e
         (js/console.log e)
         (re-frame/dispatch [:update-outgoing (str e)]))))
