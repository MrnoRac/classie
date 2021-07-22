(ns classie.events
  (:require
   [re-frame.core :as re-frame]
   [classie.db :as db]
   [classie.gen-table :as gen-table]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-fx
 :process-data
 (fn [{[_ value] :event}]
   (gen-table/process value)))

(re-frame/reg-event-db
 :update-incoming
 (fn [db [_ value]]
   (assoc db :incoming value)))

(re-frame/reg-event-db
 :update-outgoing
 (fn [db [_ value]]
   (assoc db :outgoing value)))
