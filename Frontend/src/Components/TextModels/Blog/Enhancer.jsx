import React, { useState } from "react";
import {
  List,
  SelectPicker,
  Progress,
  Loader,
  Form,
  ButtonToolbar,
  Button,
  Input,
  TagInput,
  Row,
  Col,
  Slider,
  RangeSlider,
  Dropdown,
  Popover,
  Whisper,
  Panel,
  PanelGroup,
  Placeholder,
  Toggle,
  Pagination,
  Stack,
  Notification,
} from "rsuite";
import Info from "../../Controls/Info";
import Rate from "../../Controls/rate";
import MDEditor from "@uiw/react-md-editor";
import { useSelector, useDispatch } from "react-redux";
import { languages, tones, wrtingStyles } from "../../../store/strings";

export default function Enhancer() {
  const dispatch = useDispatch();
  const activeTheme = useSelector((state) => state.theme);

  const content = useSelector((state) => state.Enhancer.content);
  const params = useSelector((state) => state.Enhancer.params);
  const [rating, SetRating] = useState({
    overall: 70,
    readability: 75,
    grammar: 80,
    coherence: 65,
    structure: 70,
    feedback: "it pretty good men !",
  });
  console.log(params);

  // handling redux store state changing
  const HandleContetnChange = (event) => {
    dispatch({ type: "SET_TEXT", payload: event });
  };

  const HandleParamChange = (Keyname, event) => {
    switch (Keyname) {
      case "grammer":
        params.grammer = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "restruct":
        params.restruct = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "fancy":
        params.fancyVocabulair = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "count":
        params.WordCOunt = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "tone":
        params.tone = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "lang":
        params.Translate = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "writing":
        params.writing = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "SEO":
        params.SEO = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "expand":
        params.expand = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
    }
    console.log(params);
  };

  return (
    <div className="flex overflow-hidden lg:flex-row flex-col gap-5 ">
      <div className="lg:w-2/4  flex flex-col gap-5">
       

        <Panel
          shaded
          header={
            <div className="flex justify-between mb-5">
              <div className="flex gap-2">
                <Info
                  message={
                    <>
                      These are ratings given by ai based on a given text 
                    </>
                  }
                />
                <span
                  className={
                    activeTheme.active == "dark" ? "text-white" : "text-black"
                  }
                >
                  Rating
                </span>
              </div>
              <Button
                color="green"
                appearance="primary"
                onClick={() => {}}
                style={{ minWidth: "100px" }}
              >
                Rate
              </Button>
            </div>
          }
          style={{
            color:
              activeTheme.active == "dark"
                ? activeTheme.dark.textCol
                : activeTheme.light.textCol,
            backgroundColor:
              activeTheme.active == "dark"
                ? activeTheme.dark.bg
                : activeTheme.light.bg,
          }}
        >
          <div className="flex  gap-5 justify-center ">
            <div className="flex flex-col items-center gap-2">
              <span>Overall</span>
              <Rate value={rating.overall} width={"75px"} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span>Readability</span>
              <Rate value={rating.readability} width={"75px"} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span>Grammer</span>
              <Rate value={rating.grammar} width={"75px"} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span>Coherence</span>
              <Rate value={rating.coherence} width={"75px"} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span>Structure</span>
              <Rate value={rating.structure} width={"75px"} />
            </div>
          </div>

          <div className="mt-5">
            <span className="mb-5 "> Text feedback</span>
            <Input
              as="textarea"
              rows={5}
              value={rating.feedback}
              style={{ backgroundColor: "whitesmoke" }}
            />
          </div>
        </Panel>

        <Panel
          expanded
          shaded
          header={
            <div className="flex justify-between  ">
              <div className="flex gap-2">
                <Info
                message={'params'}
                />
              <span
                className={
                  activeTheme.active == "dark" ? "text-white" : "text-black"
                }
              >
                Parametres
              </span>
              </div>
              <div className="flex gap-2">
                <Button
                  color="green"
                  appearance="primary"
                  onClick={() => {}}
                  style={{ minWidth: "100px" }}
                >
                  Generate
                </Button>
                <Button
                  color="red"
                  appearance="primary"
                  onClick={() => {}}
                  style={{ minWidth: "100px" }}
                >
                  Rest
                </Button>
              </div>
            </div>
          }
          style={{
            color:
              activeTheme.active == "dark"
                ? activeTheme.dark.textCol
                : activeTheme.light.textCol,
            backgroundColor:
              activeTheme.active == "dark"
                ? activeTheme.dark.bg
                : activeTheme.light.bg,
          }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <div className="flex gap-3">
              <div className="flex flex-col  gap-2">
                <span> Translate</span>
                <SelectPicker
                  data={languages}
                  style={{ width: 150 }}
                  onChange={(e) => {
                    HandleParamChange("lang", e);
                  }}
                />
              </div>

              <div className="flex flex-col  gap-2">
                <span>Tone</span>
                <SelectPicker
                  data={tones}
                  style={{ width: 150 }}
                  onChange={(e) => {
                    HandleParamChange("tone", e);
                  }}
                />
              </div>
              <div className="flex flex-col  gap-2">
                <span>Writing style</span>
                <SelectPicker
                  data={wrtingStyles}
                  style={{ width: 150 }}
                  onChange={(e) => {
                    HandleParamChange("writing", e);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start ">
              <div className="flex flex-col gap-2 w-full">
                <Form.ControlLabel>Tags</Form.ControlLabel>
                <TagInput
                  style={{ height: "150px", color: "black" }}
                  onChange={(e) => {
                    HandleParamChange("SEO", e);
                  }}
                />
              </div>
            </div>

            <div className="flex gap-5">
              <List size="lg" style={{ border: "none" }}>
                <div className="flex  gap-2 mb-2 mt-2">
                  <Toggle
                    value={params.grammer}
                    onChange={(e) => {
                      HandleParamChange("grammer", e);
                    }}
                  />
                  <span>Grammer Fix</span>
                </div>

                <div className="flex gap-2 mb-2 ">
                  <Toggle
                    value={params.fancyVocabulair}
                    onChange={(e) => {
                      HandleParamChange("fancy", e);
                    }}
                  />
                  <span> Vocabulary enrichment </span>
                </div>
                <div className="flex gap-2 mb-2 ">
                  <Toggle
                    value={params.restruct}
                    onChange={(e) => {
                      HandleParamChange("expand", e);
                    }}
                  />
                  <span>Expand/Summarizer</span>
                </div>
                <div className="flex gap-2 mb-2 ">
                  <Toggle
                    value={params.restruct}
                    onChange={(e) => {
                      HandleParamChange("restruct", e);
                    }}
                  />
                  <span> Restructuring</span>
                </div>
              </List>
            </div>
          </Form>
        </Panel>
      </div>

      <Panel
        expanded
        header={<div>{content.lenght}</div>}
        collapsible
        style={{
          color: "white",
          backgroundColor: "#1A1D24",
          minWidth: "66vw",
        }}
      >
        <MDEditor
          spellCheck
          style={{
            minHeight: "100vh",
            overflow: "scroll",
          }}
          value={content}
          onChange={HandleContetnChange}
          // NEED TO BE CHANGED
        />
      </Panel>
    </div>
  );
}
