import { useEffect, useReducer } from "react";

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

export default function Content() {
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
    <main className="m-4">
      <div className="flex m-4">
        <input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Type to search"
          className="input"
        />
      </div>

      {status === "ready" && (
        <div className="p-2 bg-slate-700">
          <h3 className="word">{word}</h3>
          <h4 className="definition">Definitions:</h4>

          <div className="p-2 text-lg text-slate-300">
            {data?.definitions?.map((def, index) => {
              return (
                <ul className="mx-4 list-disc">
                  <li key={index}> {def?.definition}</li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
