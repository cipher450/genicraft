import React, { useState } from "react";
import {
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
import MDEditor from "@uiw/react-md-editor";
import Info from "../../Controls/Info"
import Loading from "../../Controls/Loading";
export default function Metadata() {
  const [isLoading, SetIsloading] = useState(false);
  const [Params,SetParams] = useState({
/*
        Add a tool where you generate a styled html page for example an email campagne or somthing 
        it should be simple coding 
*/
  })
  return (
    <>
      {!isLoading ? (
        <div className="flex overflow-hidden lg:flex-row flex-col gap-5 ">
          <div className="lg:w-10/12  flex flex-col gap-5">
            <Panel
            expanded
              collapsible
              header={<div className="flex gap-x-2">
                 <Info message={`sdsqd`}/>
                 <span>Informations</span>
              </div>}
              shaded
              style={{ color: "white", backgroundColor: "#1A1D24" }}
            >
                <Form>
                  <Form.Group>
                  <Form.ControlLabel>title</Form.ControlLabel>
                    <Form.Control
                      name="name"
                      
                      placeholder="Tech,Ai,Cocking "
                      onChange={(value) => {
                        SetParams((prevparam) => ({
                          ...prevparam,
                          topic: value,
                        }));
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                  <Form.ControlLabel>What is this about ? </Form.ControlLabel>
                    <Form.Control
                      name="name"
                      placeholder="Tech,Ai,Cocking "
                      onChange={(value) => {
                        SetParams((prevparam) => ({
                          ...prevparam,
                          topic: value,
                        }));
                      }}
                    />
                  </Form.Group>
                </Form>


            </Panel>
            <Panel
              collapsible
              header="Informdations"
              shaded
              style={{ color: "white", backgroundColor: "#1A1D24" }}
            >
              
            </Panel>
            <Panel
              collapsible
              header="Informations"
              shaded
              style={{ color: "white", backgroundColor: "#1A1D24" }}
            ></Panel>
          </div>
          <Panel
          expanded
            header="Formated Markdown"
            collapsible
            style={{
              color: "white",
              backgroundColor: "#1A1D24",
              minWidth: "40vw",
            }}
          >

            <MDEditor
            hideToolbar
              content="ff"
              value="dd"
             
            />

          </Panel>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
