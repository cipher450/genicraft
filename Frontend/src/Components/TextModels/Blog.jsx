import React, { useState } from "react";
import { Form, ButtonToolbar, Button, Input, TagInput, Row, Col } from "rsuite";
import MDEditor from "@uiw/react-md-editor";
import { Panel, PanelGroup, Placeholder, Toggle, Pagination } from "rsuite";
import { Slider, RangeSlider } from "rsuite";
export default function Blog() {
  const [value, setValue] = React.useState();
  const response = [
    {
      id:0,
      titel: "SampleTitel-1",
      QuickDescription: "sssssdzazeaze",
      tags: ["tag1", "tag2", "tag3"],
      content:
        "# The Power of Positive Thinking1\n\n![Positive Thinking]($image1$)\n\nPositive thinking is a mindset that can transform our lives and how we perceive the world around us. It is about adopting an optimistic outlook and focusing on the potential for growth, happiness, and success.\n\n## Shaping our Reality\n\nThe way we think has a profound impact on our reality. By cultivating positive thoughts and beliefs, we can attract positivity and create a more fulfilling and meaningful life.\n\n## Overcoming Challenges\n\n![Mountains]($image1$)\n\nPositive thinking enables us to approach challenges with resilience and determination. Instead of seeing obstacles as roadblocks, we view them as opportunities for growth and learning.\n\n## Nurturing Relationships\n\n![Hands]($image1$)\n\nA positive mindset enhances our relationships. It allows us to communicate effectively, resolve conflicts with empathy, and build strong connections based on trust and understanding.\n\n### Conclusion\n\nEmbracing positive thinking empowers us to take control of our lives, embrace opportunities, and navigate through difficulties with grace. By shifting our mindset and focusing on the positive aspects of life, we can unlock our true potential and live a happier, more fulfilling existence.",
    },
    {
      id:1,
      titel: "SampleTitel-2",
      QuickDescription: "sssssdzazeaze",
      tags: ["tag1", "tag2", "tag3"],
      content:
        "# The Power of Positive Thinking2\n\n![Positive Thinking]($image1$)\n\nPositive thinking is a mindset that can transform our lives and how we perceive the world around us. It is about adopting an optimistic outlook and focusing on the potential for growth, happiness, and success.\n\n## Shaping our Reality\n\nThe way we think has a profound impact on our reality. By cultivating positive thoughts and beliefs, we can attract positivity and create a more fulfilling and meaningful life.\n\n## Overcoming Challenges\n\n![Mountains]($image1$)\n\nPositive thinking enables us to approach challenges with resilience and determination. Instead of seeing obstacles as roadblocks, we view them as opportunities for growth and learning.\n\n## Nurturing Relationships\n\n![Hands]($image1$)\n\nA positive mindset enhances our relationships. It allows us to communicate effectively, resolve conflicts with empathy, and build strong connections based on trust and understanding.\n\n### Conclusion\n\nEmbracing positive thinking empowers us to take control of our lives, embrace opportunities, and navigate through difficulties with grace. By shifting our mindset and focusing on the positive aspects of life, we can unlock our true potential and live a happier, more fulfilling existence.",
    },
    {
      id:2,
      titel: "SampleTitel-3",
      QuickDescription: "sssssdzazeaze3",
      tags: ["tag1", "tag2", "tag3"],
      content:
      "# The Art of Photography\n\n![Camera](https://example.com/camera.jpg)\n\nPhotography is more than just capturing images; it is an art form that allows us to express our creativity and tell stories through visual compositions.\n\n## Capturing Moments\n\nPhotographers have the unique ability to freeze fleeting moments in time. With each click of the shutter, they preserve emotions, experiences, and the beauty of the world around us.\n\n## Exploring Perspectives\n\n![Landscape](https://example.com/landscape.jpg)\n\nPhotography opens our eyes to different perspectives. Whether it's capturing the vastness of a breathtaking landscape or zooming in on intricate details, every photograph has a story to tell.\n\n## Light and Shadows\n\n![Portrait](https://example.com/portrait.jpg)\n\nPlaying with light and shadows is an essential aspect of photography. The interplay between darkness and brightness adds depth, drama, and mood to the images, evoking emotions in the viewer.\n\n### Conclusion\n\nThe art of photography allows us to see the world through a new lens, appreciate the beauty in everyday moments, and convey our unique vision to others. So pick up a camera, explore your creativity, and let your photographs paint a thousand words."
    },
  ];
  const [activeSample, setActiveSample] = React.useState(0); // number of samples
  const [Ready, SetReady] = useState(true);
  const [Params, SetParams] = useState({
    subject: "",
    random: true,
    length: 0,
    samples: 0,
  });
  const [truncated, setTruncated] = useState(true);

  return (
    <div className="flex overflow-hidden lg:flex-row flex-col gap-5 ">
      <div className="lg:w-10/12  flex flex-col gap-5">
        <Panel
          header={
            <div className="flex justify-between ">
              <Toggle
                defaultValue={true}
                className="mb-5 "
                checkedChildren="Random on"
                unCheckedChildren="Random off"
                onChange={(value) => {
                  SetParams((prevparam) => ({
                    ...prevparam,
                    random: !value,
                  }));
                }}
              />
              <div className="flex gap-3 mr-6">
                <Button
                  color="green"
                  appearance="primary"
                 
                >
                  Generate
                </Button>  <Button
                  color="red"
                  appearance="primary"
                 
                >
                  Reset
                </Button>
              </div>
              </div>
          }
          collapsible
          shaded
          style={{
            color: "white",
            backgroundColor: "#1A1D24",
            minWidth: "40vw",
          }}
        >
          <Form disabled={!Params.random}>
            <Form.Group controlId="subject">
              <Form.ControlLabel>Subject</Form.ControlLabel>
              <Form.Control
                name="name"
                placeholder="Tech,Ai,Cocking "
                onChange={(value) => {
                  SetParams((prevparam) => ({
                    ...prevparam,
                    subject: value,
                  }));
                }}
              />
            </Form.Group>
            <Form.Group controlId="lenght">
              <Form.ControlLabel>Lenght</Form.ControlLabel>
              <Slider
                style={{ marginTop: "2px" }}
                progress
                defaultValue={50}
                onChange={(value) => {
                  SetParams((prevparam) => ({
                    ...prevparam,
                    length: value,
                  }));
                }}
              />
            </Form.Group>
            <Form.Group controlId="Samples">
              <Form.ControlLabel>Samples</Form.ControlLabel>
              <Slider
                style={{ marginTop: "2px" }}
                max={5}
                min={1}
                progress
                defaultValue={50}
                oonChange={(value) => {
                  SetParams((prevparam) => ({
                    ...prevparam,
                    length: value,
                  }));
                }}
              />
            </Form.Group>
          </Form>
        </Panel>

        <Panel
          collapsible
          header="Articel"
          shaded
          style={{ color: "white", backgroundColor: "#1A1D24" }}
        >
          <Form>
            {response.map((articel) => 
            {
              
              return(
                <div onClick={()=>{setActiveSample(articel.id)}} className="mb-3 flex border border-solid border-e-gray-50 rounded cursor-pointer transition-all hover:bg-white hover:text-black">
                <img
                  src="https://via.placeholder.com/240x240"
                  height="20"
                  width={150}
                />
                <div className="p-8 flex flex-col gap-2">
                  <label className="text-xl font-bold underline">
                    {articel.titel}
                  </label>
                  <small>{articel.content.substring(0, 150) + "..."}</small>
                </div>
              </div>
              )
            }
            )}
          </Form>
        </Panel>

        <Panel
          collapsible
          header="Edit"
          shaded
          style={{ color: "white", backgroundColor: "#1A1D24" }}
        >
          <Form>
            <Form.Group>
              <Form.ControlLabel>Titel</Form.ControlLabel>
              <Form.Control
                name="titel"
                placeholder="Titel"
                value={response != null && response[activeSample].titel}
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Tags</Form.ControlLabel>
              <TagInput
                defaultValue={response[activeSample].tags}
                style={{ width: 300 }}
                menuStyle={{ width: 300 }}
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Content</Form.ControlLabel>
              
            </Form.Group>
          </Form>

          <Pagination
            style={{
              marginTop: "20px",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            total={5}
            limit={1}
            activePage={activeSample}
            onChangePage={setActiveSample}
          />
        </Panel>
      </div>
      {Ready ? (
        <Panel
          header="Formated Markdown"
          collapsible
          style={{ minWidth: "50vw" }}
        >
          <MDEditor
                value={response != null && response[activeSample].content}
                onChange={
                  setValue
                  // NEED TO BE CHANGED
                }
              />
          
        </Panel>
      ) : (
        "Nothing"
      )}
    </div>
  );
}
