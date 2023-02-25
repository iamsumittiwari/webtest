import {
  ColorWheelIcon,
  FontSizeIcon,
  GearIcon,
  LineHeightIcon,
  SpaceBetweenHorizontallyIcon,
  SpaceBetweenVerticallyIcon,
  TextAlignBottomIcon,
  TextIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { BlockPicker } from "react-color";
import { AnimationOptions } from "@/lib";
import Model from "./Model/Model";
import { state } from "@/pages/index";
import Toggle from "./Toggle/Toggle";
import ColorComponent from "./ColorComponent";

// Text, Image, Cta, Animation,

// TODO: Add a Accordian here for text, image, CTA,

//

const LeftSidebar = ({
  inter,
  newState,
  newSelect,
  setNewState,
}: {
  inter: any;
  newState: state[];
  newSelect: any;
  setNewState: any;
}) => {
  function handleChange(e: any) {
    console.log(e);
    const state = newState.map((el: any, i: any) => {
      const newObject: any = {
        text: {
          ...el,
          text: e.target.value,
        },
        textAlign: {
          ...el,
          textAlign: e.target.value,
        },
        color: {
          ...el,
          color: e.target.value,
        },
        highlight: {
          ...el,
          highlight: e.target.value === "Box" ? "box" : "mark",
        },
        background: {
          ...el,
          background: e.target.value,
        },
        fontSize: {
          ...el,
          fontSize: e.target.value,
        },
        cta: {
          ...el,
          cta: e.target.value,
        },
        url: {
          ...el,
          url: e.target.value,
        },
        ctaText: {
          ...el,
          ctaText: e.target.value,
        },
        lineHeight: {
          ...el,
          lineHeight: e.target.value,
        },
        textPosition: {
          ...el,
          textPosition: e.target.value,
        },
        paddingX: {
          ...el,
          paddingX: e.target.value,
        },
        paddingY: {
          ...el,
          paddingY: e.target.value,
        },
        textAnimation: {
          ...el,
          textAnimation: e.target.value,
        },
        imageAnimation: {
          ...el,
          imageAnimation: e.target.value,
        },
        overlay: {
          ...el,
          overlay: e.target.value,
        },
      };

      return i === newSelect ? newObject[e.target.name] : el;
    });

    console.log("new state", state);

    setNewState(state);
  }
  return (
    newState && (
      <div
        style={{
          padding: "10px 10px",
          margin: "0px px",
          overflow: "scroll",

          width: "100%",
          height: "calc(100vh - 60px ) ",

          right: "0px",
          background: "#eee",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10px",
          fontSize: "14px",
        }}
        className={inter.className}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        {/* <AccordianContainer /> */}
        <div
          className="flex gap-10 col"
          style={{ transition: "width 300ms linear" }}
        >
          <fieldset className="flex js col mt-10  gap-10">
            <label
              htmlFor="text"
              aria-label="Change Text"
              className="label flex gap-10 center"
            >
              Change Text
              <TextIcon />
            </label>
            <textarea
              id="text"
              name="text"
              className={inter.className}
              style={{ minHeight: "70px" }}
              value={newState[newSelect]?.text}
              onChange={(e) => handleChange(e)}
            />
          </fieldset>

          <fieldset className="flex js  center mt-10 gap-10">
            <label
              htmlFor="fontSize"
              aria-label="font Size"
              className="label flex center gap-10"
            >
              Font Size
              <FontSizeIcon />
            </label>
            <input
              id="fontSize"
              onChange={(e) => handleChange(e)}
              name="fontSize"
              className={inter.className}
              type="number"
              min="14"
              value={String(newState[newSelect]?.fontSize)}
            />
          </fieldset>
          <fieldset className="flex js  center mt-10 gap-10">
            <label
              aria-label="Line height"
              htmlFor="lineHeight"
              className="label flex center gap-10"
            >
              Line height
              <LineHeightIcon />
            </label>
            <input
              id="lineHeight"
              onChange={(e) => handleChange(e)}
              name="lineHeight"
              className={inter.className}
              type="number"
              min="1"
              max="100"
              value={newState[newSelect]?.lineHeight}
            />
          </fieldset>
          <fieldset className="flex js center">
            <label
              aria-label="textAlign"
              htmlFor="textAlign"
              className="label flex gap-10 center"
            >
              Text Align
              <TextAlignBottomIcon />
            </label>
            <select
              id="textAlign"
              name="textAlign"
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.textAlign}
            >
              <option>left</option>

              <option>center</option>
              <option>right</option>
            </select>
          </fieldset>
          <fieldset className="flex js center">
            <label htmlFor="textPosition" className="label flex gap-10 center">
              Text Position
              <TextIcon />
            </label>
            <input
              id="textPosition"
              onChange={(e) => handleChange(e)}
              className={inter.className}
              name="textPosition"
              type="number"
              min="0"
              max="100"
              value={newState[newSelect]?.textPosition}
            />
          </fieldset>
          {/* <fieldset className="flex js center">
            <label htmlFor="textPosition" className="label">
              {" "}
              Text Position
            </label>
            <select
              name="textPosition"
              id="textPosition"
              // onChange={(e) => handleChange(e)}
              // value={newState[newSelect]?.textAlign}
            >
              <option>top</option>

              <option>middle</option>
              <option>bottom</option>
            </select>
          </fieldset> */}
          <fieldset className="flex js center">
            <label htmlFor="color" className="label flex gap-10 center">
              Text Color
              <ColorWheelIcon />
            </label>
            <ColorComponent
              colorValue={newState[newSelect]?.color}
              setColorValue={handleChange}
              name="color"
            />
          </fieldset>
          <fieldset className="flex js center">
            <label htmlFor="background" className="label flex gap-10 center">
              Background
              <ColorWheelIcon />
            </label>
            <ColorComponent
              colorValue={newState[newSelect]?.background}
              setColorValue={handleChange}
              name="background"
            />
          </fieldset>
          <fieldset className="flex js center">
            <label htmlFor="highlight" className="label">
              Text Highlight
            </label>
            <select
              aria-label="highlight"
              id="highlight"
              name="highlight"
              onChange={(e) => handleChange(e)}
              value={
                newState[newSelect]?.highlight === "box" ? "Box" : "Marked"
              }
            >
              <option>Box </option>
              <option>Marked</option>
            </select>
          </fieldset>

          <fieldset className="flex js center">
            <label htmlFor="paddingY" className="label flex gap-10 center">
              Padding Vertical
              <SpaceBetweenVerticallyIcon />
            </label>
            <input
              aria-label="Padding Vertical"
              id="paddingY"
              type="number"
              name="paddingY"
              min={0}
              max={100}
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.paddingY}
            />
          </fieldset>
          <fieldset className="flex js center">
            <label htmlFor="paddingX" className="label flex gap-10 center">
              Padding Horizontal
              <SpaceBetweenHorizontallyIcon />
            </label>
            <input
              aria-label="padding Horizontal"
              id="paddingX"
              type="number"
              name="paddingX"
              min={0}
              max={100}
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.paddingX}
            />
          </fieldset>
          <Toggle
            key="Overlay"
            infoText="Overlay will have a transparent gray gradient from top to bottom. This will increase contrast between the image and text "
            label="Overlay"
            name="overlay"
            onChange={handleChange}
            value={newState[newSelect]?.overlay === true ? "true" : "false"}
          />

          <Toggle
            key={"Cta"}
            infoText="You can only add one CTA per page"
            label="Call to Action"
            name="cta"
            onChange={handleChange}
            value={newState[newSelect]?.cta === true ? "true" : "false"}
          />

          <div>
            {newState[newSelect]?.cta ? (
              <>
                <fieldset className="flex js  col mt-10 gap-10">
                  <label htmlFor="url" className="label">
                    CTA Button URL
                  </label>
                  <input
                    id="url"
                    aria-label="CTA button url "
                    onChange={(e) => handleChange(e)}
                    name="url"
                    className={inter.className}
                    type="url"
                    value={newState[newSelect]?.url}
                  />
                </fieldset>
                <fieldset className="flex js  col  mt-10 gap-10">
                  <label htmlFor="ctaText" className="label">
                    CTA Button text
                  </label>
                  <input
                    id="ctaText"
                    aria-label="CTA button text"
                    onChange={(e) => handleChange(e)}
                    name="ctaText"
                    className={inter.className}
                    type="text"
                    value={newState[newSelect]?.ctaText}
                  />
                </fieldset>
              </>
            ) : null}
          </div>

          <fieldset className="flex js  col  mt-10 gap-10">
            <label htmlFor="textAnimation" className="label">
              Text Animation
            </label>
            <select
              id="textAnimation"
              aria-label="text animation"
              name="textAnimation"
              value={newState[newSelect]?.textAnimation}
              onChange={(e) => handleChange(e)}
            >
              {AnimationOptions.map((el) => (
                <option value={el.value} key={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="flex js  col  mt-10 gap-10">
            <label htmlFor="imageAnimation" className="label">
              Image Animation
            </label>
            <select
              id="imageAnimation"
              aria-label="image animation"
              name="imageAnimation"
              value={newState[newSelect]?.imageAnimation}
              onChange={(e) => handleChange(e)}
            >
              {AnimationOptions.map((el) => (
                <option value={el.value} key={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        <Model />
      </div>
    )
  );
};

export default LeftSidebar;

const CTA_Form = ({
  on,
  url,
  label,
}: {
  on: boolean;
  url: string;
  label: string;
}) => {
  return (
    <div>
      <label>CTA FORM</label>
    </div>
  );
};
