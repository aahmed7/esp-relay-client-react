package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type bulbStruct struct {
	Bulb bool `json:"bulb"`
}

var bulbState bulbStruct

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello\n")
}

func bulb(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Request received:", r.Method)
	if r.Method == http.MethodGet {
		out, _ := json.Marshal(bulbState)
		fmt.Fprint(w, string(out))
	}
	if r.Method == http.MethodPost {
		var n bulbStruct

		err := json.NewDecoder(r.Body).Decode(&n)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			fmt.Println("l34", err.Error())
			return
		}
		fmt.Println("l37", n)
		bulbState = n
		fmt.Println("l39", bulbState)
		out, _ := json.Marshal(bulbState)
		fmt.Fprint(w, string(out))
		fmt.Println("l42", string(out))
	}
}

func main() {
	bulbState.Bulb = false
	http.HandleFunc("/hello", hello)
	http.HandleFunc("/bulb", bulb)

	http.ListenAndServe(":9010", nil)
}
