// image carousel

import { ArrowLeftIcon, PlusIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const image = [
  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
  "https://images.unsplash.com/photo-1554595666-19ceabf46a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

function NewView({
  newState,
  setNewState,
}: {
  newState: any;
  setNewState: any;
}) {
  const [state, setState] = useState([
    {
      image: image[0],
      text: "1",
    },
    {
      image: image[1],
      text: "2",
    },
  ]);

  const [select, setSelect] = useState(0);
  return (
    <div className="flex center col gap-10">
      <h1>Preview</h1>
      <div className="flex center gap-10">
        <button
          style={{
            padding: "10px",
            borderRadius: "10px",
            background: "#eee",
            width: "fit-content",
            height: "fit-content",
            cursor: "pointer",
          }}
          onClick={() => setSelect(select - 1)}
          disabled={select === 0}
        >
          <ArrowLeftIcon />
        </button>
        <div
          style={{
            backgroundImage: `url(${state[select].image})`,
            width: "360px",
            height: "720px",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              color: "#eee",
              position: "relative",
              top: "200px",
              left: "101px",
            }}
          >
            {state[select].text}
          </p>
        </div>
        <>
          {select === state.length - 1 ? (
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                background: "#eee",
                width: "fit-content",
                height: "fit-content",
                cursor: "pointer",
              }}
              onClick={() =>
                setState([
                  ...state,
                  {
                    image: image[select + 1],
                    text: String(select + 2),
                  },
                ])
              }
            >
              <PlusIcon fontSize={30} />
            </button>
          ) : (
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                background: "#eee",
                width: "fit-content",
                height: "fit-content",
                cursor: "pointer",
              }}
              onClick={() => setSelect(select + 1)}
            >
              <ArrowRightIcon />
            </button>
          )}
        </>
      </div>
    </div>
  );
}

export default NewView;
