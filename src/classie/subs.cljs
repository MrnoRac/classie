(ns classie.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::incoming
 (fn [db] (:incoming db)))

(re-frame/reg-sub
 ::outgoing
 (fn [db] (:outgoing db)))
