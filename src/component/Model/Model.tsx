// title
// info
// children
// open
// setOpen

// use case for Code generated display
// Copy, Download File

import {
  AMP_CTA_LAYER,
  AMP_GRID_LAYER,
  AMP_IMAGE,
  AMP_STORY,
  AMP_STORY_PAGE,
  AMP_TEXT,
  HTML_TEMPLATE,
} from "@/lib";
import Editor from "@monaco-editor/react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Cross2Icon,
  EnterFullScreenIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import useLocalStorage from "use-local-storage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import styles from "./Model.module.css";

const Model = () => {
  const [data, setData] = useLocalStorage("state", []);

  const ampStory = AMP_STORY(
    data
      .map((el: any, i: any) => {
        return AMP_STORY_PAGE(
          AMP_GRID_LAYER(
            AMP_IMAGE(el.image, 360, 720, "fill", "fade-in"),
            "fill"
          ) + AMP_GRID_LAYER(AMP_TEXT(el.text, "fly-in-top"), "vertical"),
          i
        );
      })
      .join("\n"),
    "this is an amp story",
    "Coolhead",
    "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  );

  const newData = HTML_TEMPLATE(
    ampStory,
    `
    body {
      background-color: #000;
      padding: 0 1rem;
      text-align: center;
      font-family: 'Inter', sans-serif;
    }
  h1{
    font-size: 14px;
    margin-top:  50%;
  }
    `,
    `
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
    `
  );

  const baseData = btoa(unescape(encodeURIComponent(newData)));

  //Buffer.from(newData, "base64");

  //Buffer.from(newData, "base64").toString();

  const previewLink = `https://playground.amp.dev/#share=${baseData}`;

  const options = {
    selectOnLineNumbers: true,
    minimap: {
      autohide: true,
      enabled: false,
    },
    fontSize: 14,
  };

  const handle = useFullScreenHandle();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="btn violet flex center gap-10">
          <GearIcon />
          Generate Code
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            Edit profile
          </Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            <button
              onClick={handle.enter}
              style={{ padding: "2px 5px" }}
              className="btn flex gap-10 center"
            >
              <EnterFullScreenIcon />
              FullScreen
            </button>
          </Dialog.Description>
          <FullScreen handle={handle}>
            <Editor
              options={options}
              width="100%"
              height="100%"
              language="html"
              theme="vs-dark"
              className={styles.editor}
              value={newData || "somethng"}
            />
          </FullScreen>
          {/* <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.Input}
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.Input}
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset> */}
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <a
                target="_blank"
                rel="noreferrer"
                href={previewLink}
                className="btn inter flex gap-10 "
              >
                Preview
              </a>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Model;
