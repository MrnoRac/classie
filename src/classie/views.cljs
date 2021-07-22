(ns classie.views
  (:require
   [re-frame.core :as re-frame]
   [classie.subs :as subs]
   ))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        outgoing @(re-frame/subscribe [::subs/outgoing])]
    [:div
     [:h1
      [:div "Let C-Lassie sniff out your data structure"]]
     [:textarea#incoming {:rows 40
                          :cols 80
                          :on-change #(re-frame/dispatch [:process-data (-> % .-target .-value)])}]
     [:textarea#outgoing {:rows 40
                          :cols 80
                          :value outgoing}]
     ]))
