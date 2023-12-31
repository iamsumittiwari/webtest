"use client";

import { animationMap } from "@/lib/animation";
import { state } from "@/pages";
import { useDroppable } from "@dnd-kit/core";
import {
  ArrowLeftIcon,
  PlusIcon,
  ArrowRightIcon,
  TrashIcon,
  ResetIcon,
  PlayIcon,
  PauseIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import classnames from "classnames";

import { nanoid } from "nanoid";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Alert from "./Alert";
import CTA from "./CTA";
import ToolTip from "./ToolTip/ToolTip";

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
  dragActive,
  newState,
  setNewState,
  newSelect,
  setNewSelect,
}: {
  dragActive: any;
  newState: state[];
  setNewState: any;
  newSelect: any;
  setNewSelect: any;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: "content_" + nanoid(),
  });
  const style = {
    backgroundColor: isOver ? "light-green" : "#fff",
  };

  function deleteState() {
    const state = newState.filter((el: any, i: any) => i !== newSelect);
    setNewState(state);
    setNewSelect(newSelect - 1);
  }

  function resetState() {
    const state = newState.filter((el: any, i: any) => i === 0);
    setNewState(state);
    setNewSelect(0);
  }

  const [mouseOver, setMouseOver] = useState(false);

  const [animation, setAnimation] = useState(false);

  const animate = () => {
    // Button begins to shake
    setAnimation(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setAnimation(false), 2500);
  };

  const newPage = Math.floor(Math.abs(newSelect / 10)) * 10;

  const slicedData = newState?.slice(newPage, newPage + 10);

  useHotkeys("ArrowLeft", () => {
    if (newSelect !== 0) {
      setNewSelect((w: any) => w - 1);
    }
  });

  useHotkeys("ArrowRight", () => {
    if (newState.length - 1 !== newSelect) {
      setNewSelect((w: any) => w + 1);
    }
  });

  return (
    <div className="flex center col jc  " suppressHydrationWarning={true}>
      <div
        className="flex center jc "
        style={{ margin: "10px 0px", width: "400px" }}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {slicedData &&
          slicedData?.map((el: state, i: any) => {
            return (
              <div
                onClick={() => setNewSelect(i + newPage)}
                key={i}
                style={{
                  width: "40px",
                  height: mouseOver ? "10px" : "5px",
                  borderRadius: "10px",
                  background: i + newPage === newSelect ? "#222" : "#ccc",
                  cursor: "pointer",
                  marginLeft: "2px",
                  transition: "all 100ms linear",
                }}
              />
            );
          })}
      </div>
      <div className="flex center gap-10 viewEditor">
        <ToolTip text="Previous Page">
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#eee",
              width: "fit-content",
              height: "fit-content",
              cursor: "pointer",
            }}
            name="Previous Page"
            id="Previous Page"
            aria-label="Previous Page"
            onClick={() => setNewSelect(newSelect - 1)}
            disabled={newSelect === 0}
          >
            <ArrowLeftIcon />
          </button>
        </ToolTip>
        <div
          ref={setNodeRef}
          style={{
            ...style,

            position: "relative",

            transition: "all 100ms linear 0s",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            width: "375px",
            height: "667x",
            borderRadius: "10px",
            border: "1px solid #eee",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className={
              animation ? animationMap[newState[newSelect]?.imageAnimation] : ""
            }
            style={{
              backgroundImage: `url(${newState[newSelect]?.image})`,
              transition: "all ease-in 216ms",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "375px",
              height: "667px",
              zIndex: 0,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              // left: "70px",
              zIndex: 4,

              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {newState[newSelect]?.cta && (
              <CTA
                url={newState[newSelect]?.url}
                text={newState[newSelect]?.ctaText || " "}
              />
            )}
          </div>

          {dragActive !== undefined && dragActive !== null && (
            <div
              style={{
                zIndex: 10,
                position: "absolute",
                color: "white",
                background: "rgba(255,255,255, 0.2)",
                width: "100%",
                height: "100%",
                fontSize: "24px",
                border: "2px solid #eee",
                borderRadius: "4px",
              }}
              className="dragOverlay flex center jc  "
            >
              Drag here
            </div>
          )}

          {newState[newSelect]?.overlay && (
            <div
              style={{
                zIndex: 3,
                position: "absolute",
              }}
              className="overlay"
            ></div>
          )}

          <p
            className={
              animation ? animationMap[newState[newSelect]?.textAnimation] : ""
            }
            style={{
              fontSize: `${newState[newSelect]?.fontSize}px`, // change to property
              color: newState[newSelect]?.color, // change to property
              position: "absolute",
              top: `${newState[newSelect]?.textPosition}%`,
              width: "100%",
              wordWrap: "break-word",
              textAlign: `${newState[newSelect]?.textAlign}`, // change to property
              background: `${
                newState[newSelect]?.highlight === "box"
                  ? newState[newSelect]?.background
                  : "none"
              }`,

              zIndex: 4,
              height: "fit-content",
              lineHeight: `${newState[newSelect]?.lineHeight}px`,
              padding:
                newState[newSelect]?.highlight === "box"
                  ? `${newState[newSelect]?.paddingY}px ${newState[newSelect]?.paddingX}px`
                  : "0px",
            }}
          >
            {newState[newSelect]?.highlight === "mark" ? (
              <span
                style={{
                  background: newState[newSelect]?.background,
                  borderRadius: "10px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  display: "inline",

                  padding: `${newState[newSelect]?.paddingY}px ${newState[newSelect]?.paddingX}px`,
                }}
              >
                {newState[newSelect]?.text}
              </span>
            ) : (
              newState[newSelect]?.text
            )}
          </p>
        </div>
        <>
          {newSelect === newState.length - 1 ? (
            <ToolTip text="Add new page">
              <button
                name="Add New Page"
                id="Add new Page"
                aria-label="Add New Page"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#000",
                  color: "#eee",
                  width: "fit-content",
                  height: "fit-content",
                  cursor: "pointer",
                }}
                onClick={(): state =>
                  setNewState([
                    ...newState,

                    {
                      image: image[newSelect + 1],
                      text: String(newSelect + 2),
                      fontSize: 16,
                      textAlign: "left",
                      color: "rgba(255, 255, 255, 1)",
                      background: "rgba(0, 0, 0, 1)",
                      highlight: "box",
                      textPosition: 36,
                      lineHeight: 25,
                      paddingX: 10,
                      paddingY: 20,
                      cta: false,
                      url: "",
                      ctaText: "",
                      textAnimation: "fade-in",
                      imageAnimation: "fade-in",
                      overlay: false,
                    },
                  ])
                }
              >
                <PlusIcon fontSize={30} />
              </button>
            </ToolTip>
          ) : (
            <ToolTip text={"Next page"}>
              <button
                name="Next Page"
                aria-label="Next Page"
                id="Next Page"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#eee",
                  width: "fit-content",
                  height: "fit-content",
                  cursor: "pointer",
                }}
                onClick={() => setNewSelect(newSelect + 1)}
              >
                <ArrowRightIcon />
              </button>
            </ToolTip>
          )}
        </>
      </div>
      <div className="flex gap-10 center mt-10">
        {/* <ToolTip text="Delete the present page">
          {newState.length > 1 && newSelect > 0 && (
            <button
              id="delete"
              aria-label="delete"
              name="delete"
              style={{
                padding: "10px",
                borderRadius: "10px",
                background: "#eee",
                width: "fit-content",
                height: "fit-content",
                cursor: "pointer",
                fontFamily: "Inter",
              }}
              onClick={() => deleteState()}
            >
              <TrashIcon />
            </button>
          )}
        </ToolTip> */}
        {/* <ToolTip text="Reset">
          <button
             id="reset"
             aria-label="reset"
             name="reset"
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#eee",
              width: "fit-content",
              height: "fit-content",
              cursor: "pointer",
              fontFamily: "Inter",
              fontSize: "12px",
            }}
          >
            <ResetIcon />
          </button>
        </ToolTip> */}
        <ToolTip text="Play the animation">
          <button
            aria-label="Click to Play animation"
            id="animation"
            name="Click to Play animation"
            className="flex center gap-10 inter "
            onClick={animate}
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#eee",
              width: "fit-content",
              height: "fit-content",
              cursor: "pointer",

              fontSize: "12px",
            }}
          >
            {animation ? <PauseIcon /> : <PlayIcon />}

            {/* Run */}
          </button>
        </ToolTip>
        <Alert
          action={() => {}}
          data={newState[newSelect]}
          actionName="Create Template"
          title={"Create Template"}
          type="Create Template"
          buttonText="Create Template"
          icon={<PlusCircledIcon />}
          description={""}
          triggerName="Create Template"
        />
        {newSelect !== 0 && (
          <Alert
            action={() => deleteState()}
            type="delete"
            icon={<TrashIcon />}
            triggerName=""
            actionName="delete action"
            title="Are you absolutely sure ?"
            description="This action cannot be undone. This will permanently delete.

        "
          />
        )}

        {newSelect !== 0 && (
          <Alert
            buttonText="Reset"
            action={() => resetState()}
            type="delete"
            icon={<ResetIcon />}
            triggerName="reset "
            actionName="reset action"
            title="Are you absolutely sure ?"
            description="This action cannot be undone. This will permanently reset view.

              "
          />
        )}

        {/* <ToolTip text="Reorder Pages">
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#eee",
              width: "fit-content",
              height: "fit-content",
              cursor: "pointer",
              fontFamily: "Inter",
              fontSize: "12px",
            }}
            className="flex gap-10 center"
          >
            Sort
            <CopyIcon />
          </button>
        </ToolTip> */}
      </div>
    </div>
  );
}

export default NewView;
