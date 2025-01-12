import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import { debounce } from "./helper";

const initialState = {
  data: [],
  word: "house",
  status: "loading",
};

function reducer(state, action) {
  console.log("action", action.payload);
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,

        word: action.payload,
        status: "fetching",
      };
    case "dataFetched":
      return {
        ...state,
        data: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, word, status } = state;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          );
          const resData = await response.json();
          console.log(resData);

          dispatch({
            type: "dataFetched",
            payload: resData[0]?.meanings[0],
          });
        } catch (err) {
          dispatch({ type: "dataFailed" });
        } finally {
          console.log("end");
        }
      }
      fetchData();
    },
    [word]
  );

  const handleInputChange = (e) => {
    dispatch({ type: "dataReceived", payload: e.target.value });
  };

  return (
    <>
      <div>
        <Header />
        <main>
          <div className="flex bg-slate-500 border-4 rounded-md">
            <input
              type="text"
              value={word}
              onChange={handleInputChange}
              placeholder="Type to search"
            />
          </div>

          {status === "ready" && (
            <div>
              <h3>Word: {word}</h3>
              <p>{data?.definitions[0]?.definition}</p>
              <div>
                {data?.definitions?.map((def, index) => {
                  return (
                    <ul>
                      <li key={index}> {def?.definition}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
