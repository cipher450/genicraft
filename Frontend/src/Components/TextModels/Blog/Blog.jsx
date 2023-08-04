import React, { useEffect, useState } from "react";
import {
  Loader,
  Form,
  Button,
  Input,
  Slider,
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
  SelectPicker,
  Modal,
} from "rsuite";
import { useToaster } from "rsuite";
import Info from "../../Controls/Info";
import MDEditor from "@uiw/react-md-editor";
import { copyToClipboard } from "../../../Helpers";
import { categories } from "../../../store/strings";
import Article from "./Article";
import Loading from "../../Controls/Loading";
import ImageSelection from "./ImageSelection";
import InfoOutlineIcon from "@rsuite/icons/InfoOutline";
import SearchIcon from "@rsuite/icons/Search";
import { useSelector, useDispatch } from "react-redux";

export default function Blog() {
  const activeTheme = useSelector((state) => state.theme);
  const toaster = useToaster();
  const [placement, setPlacement] = React.useState("topStart");
  const [popover1, Setpopover1] = useState(false);
  const [response, SetResponse] = useState([
    {
      id: 0,
      title: "Sampletitle-1",
      QuickDescription: "sssssdzazeaze",
      tags: ["tag1", "tag2", "tag3"],
      content: `# Topic: Exploring the Wonders of Underwater Caves

        ## Table of Contents
        1. [Introduction](#1-introduction)
        2. [Formation of Underwater Caves](#2-formation-of-underwater-caves)
        3. [Diving into the Depths](#3-diving-into-the-depths)
        4. [Breathtaking Beauty](#4-breathtaking-beauty)
        5. [Dangers and Challenges](#5-dangers-and-challenges)
        6. [Preservation and Conservation](#6-preservation-and-conservation)
        7. [Conclusion](#7-conclusion)
        
        ## 1. Introduction
        Welcome to the mesmerizing world of underwater caves! In this blog article, we will embark on a thrilling adventure as we explore the enchanting beauty hidden beneath the water's surface. From their formation to the dangers they pose, we will delve into the secrets of these captivating natural wonders.
        
        ![Image 1: Underwater Cave](https://example.com/image1.jpg)
        
        Word Count: 71
        
        ## 2. Formation of Underwater Caves
        Underwater caves, also known as cenotes or sinkholes, are formed through various geological processes. They can be created by the dissolution of limestone or other soluble rocks over thousands of years. Rainwater seeps through cracks and crevices in the ground, dissolving the rock and creating tunnels and chambers beneath the surface. Over time, these tunnels may collapse, forming stunning underwater caves.
        
        ![Image 2: Formation of Underwater Caves](https://example.com/image2.jpg)
        
        Word Count: 99
        
        ## 3. Diving into the Depths
        For avid scuba divers and adventure seekers, exploring underwater caves is a unique and exhilarating experience. As you descend into the depths, the crystal-clear water surrounds you, revealing a whole new world filled with awe-inspiring formations and mesmerizing marine life. The play of light and shadows creates an ethereal ambiance that leaves divers in awe.
        
        ![Image 3: Diving into the Depths](https://example.com/image3.jpg)
        
        Word Count: 92
        
        ## 4. Breathtaking Beauty
        One of the most captivating aspects of underwater caves is their stunning beauty. These hidden realms boast intricate stalactites and stalagmites, formed over centuries by the slow deposition of minerals. The mesmerizing formations, often adorned with delicate coral and vibrant marine plants, create a surreal and otherworldly atmosphere that captivates explorers.
        
        ![Image 4: Breathtaking Beauty](https://example.com/image4.jpg)
        
        Word Count: 101
        
        ## 5. Dangers and Challenges
        While underwater caves offer unparalleled beauty, they also present significant dangers and challenges. The absence of natural light and complex labyrinthine structures can disorient even experienced divers. Limited visibility and narrow passages increase the risk of entanglement, making it crucial to have proper training and equipment before attempting cave diving.
        
        ![Image 5: Dangers and Challenges](https://example.com/image5.jpg)
        
        Word Count: 106
        
        ## 6. Preservation and Conservation
        Given the delicate ecosystems that exist within underwater caves, it is vital to prioritize their preservation and conservation. Human activities, such as pollution and reckless diving practices, can have devastating effects on these fragile environments. Responsible diving, adherence to guidelines, and raising awareness about their ecological significance are essential to ensure the long-term survival of these natural wonders.
        
        ![Image 6: Preservation and Conservation](https://example.com/image6.jpg)
        
        Word Count: 111
        
        `,
    },
    {
      id: 1,
      title: "Sampletitle-2",
      QuickDescription: "sssssdzazeaze",
      tags: ["tag1", "tag2", "tag3"],
      content:
        "## The Rise of Artificial Intelligence in Healthcare\n\nArtificial Intelligence (AI) has been transforming various industries, and healthcare is no exception. With its ability to analyze large amounts of data, identify patterns, and make predictions, AI is revolutionizing the way medical professionals diagnose and treat patients. In this article, we will explore the impact of AI in healthcare and its potential future.\n\n### AI in Medical Diagnosis\n\nOne of the significant applications of AI in healthcare is medical diagnosis. AI algorithms can process vast amounts of patient data, including medical records, lab results, and imaging scans, to provide accurate and timely diagnoses. By comparing a patient's symptoms and medical history with a vast database of known cases, AI can assist doctors in identifying diseases and conditions more efficiently.\n\n### Precision Medicine\n\nAnother area where AI is making a significant impact is precision medicine. Traditional medicine often follows a one-size-fits-all approach, but AI enables personalized treatment plans based on an individual's genetic makeup, lifestyle, and other factors. AI algorithms can analyze a patient's genetic data to predict their risk for certain diseases and recommend tailored preventive measures or treatment options.\n\n### Drug Discovery and Development\n\nAI is also accelerating the drug discovery and development process. It can analyze vast amounts of scientific literature, clinical trial data, and genetic information to identify potential drug targets and predict the efficacy of new compounds. This speeds up the research and development phase, allowing for faster identification of promising drug candidates and reducing the time and cost involved in bringing new drugs to market.\n\n### AI-Enhanced Surgical Procedures\n\nAI technologies are also being integrated into surgical procedures to improve accuracy and patient outcomes. For example, robotic-assisted surgeries powered by AI algorithms can enhance the precision of surgical movements, reducing the risk of human error. AI can also provide real-time feedback during surgeries, helping surgeons make more informed decisions.\n\n### Challenges and Ethical Considerations\n\nWhile AI holds immense potential in healthcare, there are challenges and ethical considerations that need to be addressed. Ensuring the privacy and security of patient data is crucial, as well as addressing concerns about algorithm bias and transparency. Additionally, there is a need to strike the right balance between human expertise and AI decision-making, ensuring that AI is used as a tool to augment human capabilities rather than replacing healthcare professionals.\n\n### Conclusion\n\nThe rise of artificial intelligence in healthcare is transforming the industry, improving diagnostic accuracy, enabling personalized medicine, expediting drug discovery, and enhancing surgical procedures. However, it is essential to navigate the challenges and ethical considerations associated with AI to harness its full potential. As AI continues to evolve, we can expect further advancements that will revolutionize healthcare and improve patient outcomes.\n\nReferences:\n\n1. Smith, J., & Johnson, A. (2022). Artificial Intelligence in Healthcare: A Comprehensive Overview. Journal of Medical Informatics, 45(2), 123-145.\n2. Brown, C., & Davis, R. (2021). The Role of AI in Precision Medicine. Journal of Precision Medicine, 8(3), 210-225.\n3. Johnson, M., et al. (2020). AI-Enhanced Surgical Procedures: State of the Art and Future Perspectives. Surgical Innovations, 15(4), 345-360.",
    },
    {
      id: 2,
      title: "Sampletitle-3",
      QuickDescription: "sssssdzazeaze3",
      tags: ["tag1", "tag2", "tag3"],
      content:
        "# The Art of Photography\n\n![Camera](https://example.com/camera.jpg)\n\nPhotography is more than just capturing images; it is an art form that allows us to express our creativity and tell stories through visual compositions.\n\n## Capturing Moments\n\nPhotographers have the unique ability to freeze fleeting moments in time. With each click of the shutter, they preserve emotions, experiences, and the beauty of the world around us.\n\n## Exploring Perspectives\n\n![Landscape](https://example.com/landscape.jpg)\n\nPhotography opens our eyes to different perspectives. Whether it's capturing the vastness of a breathtaking landscape or zooming in on intricate details, every photograph has a story to tell.\n\n## Light and Shadows\n\n![Portrait](https://example.com/portrait.jpg)\n\nPlaying with light and shadows is an essential aspect of photography. The interplay between darkness and brightness adds depth, drama, and mood to the images, evoking emotions in the viewer.\n\n### Conclusion\n\nThe art of photography allows us to see the world through a new lens, appreciate the beauty in everyday moments, and convey our unique vision to others. So pick up a camera, explore your creativity, and let your photographs paint a thousand words.",
    },
    {
      id: 3,
      title: "Sampletitle-3",
      QuickDescription: "sssssdzazeaze3",
      tags: ["tag1", "tag2", "tag3"],
      content:
        "# The Art of Photography\n\nPhotography is an art form that has been around for many years. Over time, it has evolved into a popular hobby and profession. Photography is the process of capturing, creating, and preserving images through light. Photographers use various techniques and equipment to capture stunning and expressive photos.\n\n## The History of Photography\n\nPhotography has come a long way since its invention in the early 19th century. The first camera was invented in 1816 by Joseph Nicephore Niepce. However, the first photograph was taken in 1826 by Niepce's partner, Louis Daguerre.\n\nAs technology evolved, so did photography. In 1888, Kodak introduced the first handheld camera, the Kodak No. 1. This camera made photography accessible to the masses, and soon everyone was capturing memories.\n\n## Techniques in Photography\n\nThere are various techniques and styles used in photography. Some popular techniques include:\n\n- **Composition**: The arrangement of elements in an image.\n- **Lighting**: The use of light to create mood and effect.\n- **Perspective**: The angle and distance of the camera to the topic.\n- **Exposure**: The amount of light allowed to enter the camera to capture an image.\n\n## Types of Photography\n\nThere are many types of photography, including:\n\n- **Landscape Photography**: Photographs that showcase natural scenery, often featuring mountains, lakes, and forests.\n- **Portrait Photography**: Photographs that capture the personality and character of a person or group of people.\n- **Wildlife Photography**: Photographs that showcase animals in their natural habitats.\n- **Fashion Photography**: Photographs that showcase clothing and accessories.\n\n## Tips for Taking Better Photographs\n\nTaking a great photograph requires a combination of talent, skill, and patience. Here are some tips that can help you improve your photography skills:\n\n- **Know your Camera**: Read the manual and understand all the features and settings of your camera.\n- **Use a Tripod**: A tripod provides stability and can prevent blurry photos.\n- **Experiment with Lighting**: Play with different light sources to create mood and effect.\n- **Comprehend Composition**: Framing your shot and selecting the right elements can create a dynamic image.\n\n## Conclusion\n\nPhotography is an art form that continues to evolve with technology. With its rich history and variety of styles and techniques, there is something for everyone to appreciate. Use the tips provided to take your photography to the next level and capture stunning images.",
    },
  ]);

  const [activeSample, setActiveSample] = React.useState(0); // number of samples
  const [Ready, SetReady] = useState(true);
  const [loading, SetLoading] = useState(false);
  const [Keyword, SetKeyword] = useState("ai");
  const [Params, SetParams] = useState({
    random: false,
    topic: "",
    categorie: "music",
    length: 400,
    samples: 1,
  });
  const [truncated, setTruncated] = useState(true);
  const [images, SetImages] = useState([]);
  const [open, setOpen] = React.useState(false);

  function message(message, type) {
    // there should be notfiaction system set with context to be used around the application
    return (
      <Notification type={type} header={type} closable>
        <small>{message}</small>
      </Notification>
    );
  }

  async function generateArticle() {
    SetLoading(true);
    const response = await fetch("http://localhost:5000/text/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Params),
    });
    if (!response.ok) {
      toaster.push(message("there was an unxpetcted error", "error"), {
        placement,
      });
    } else {
      const json = await response.json();
      for (let index = 0; index < json.length; index++) {
        const article = json[index];
        console.log('Set response that we have back from the server')
        SetResponse(json);
        console.log('Starting insert images')
        insertimages(article.keyword);

        SetLoading(false);
      }
      
      
    }
  }
  async function fetchImages(Topic) {
   
  }

  async function insertimages(subject) {
    try {
 
      fetch(
        `https://api.pexels.com/v1/search?query=${subject}&per_page=20`,
        {
          headers: {
            Authorization: "X6AoDfsa89PpIfABgj5EipuLlUQwhGL51RwFQL9hEhTj4kLgoMunkcIw",
          },
        }
      )
      
        .then(response => response.json())
        .then(jsonResponse => {
          console.log('We got the response and set images')
          // Handle the jsonResponse here
          console.log(jsonResponse);
      
          // For example, set the images state
          SetImages(jsonResponse.photos);
      
          // Continue with other actions using the images state
         if(images.length>0){
           const articles = response;
          
          articles.forEach((article, index) => {
            console.log(index);
            let count = 1;
            const updatedArticle = article.content.replace(/\d+\.jpg/g, () => {
              console.log('Replacing each image')
              const image = images[count - 1].src.medium;
              count++;
              return image;
            });
            article.content = updatedArticle;
          });
          SetResponse(articles);
         }
      
          // You can also set loading state here if needed
          SetLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // Handle error and set loading state accordingly
          SetLoading(false);
        });
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {loading == false ? (
        <div className="flex overflow-hidden lg:flex-row flex-col gap-5 w-full ">
          <div className="lg:w-2/6  flex flex-col gap-5">
            <Panel
              expanded
              header={
                <div className="flex justify-between ">
                  <div className="flex gap-2 ">
                    <Info
                      message={
                        "Enabling random mode will generate you a random topicwith a random topic"
                      }
                    />
                    <Toggle
                      defaultValue={true}
                      className="mb-5 "
                      checkedChildren="Random on"
                      unCheckedChildren="Random off"
                      onChange={(value) => {
                        SetParams((prevparam) => ({
                          ...prevparam,
                          random: value,
                        }));
                      }}
                    />
                  </div>

                  <div className="flex gap-3 mr-6">
                    <Button
                      color="green"
                      appearance="primary"
                      onClick={() => {
                        generateArticle();
                      }}
                    >
                      Generate
                    </Button>{" "}
                    <Button
                      color="red"
                      appearance="primary"
                      onClick={() => {
                        SetResponse([]);
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              }
              collapsible
              shaded
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
              <Form disabled={Params.random}>
                <div className="flex gap-2">
                  <Form.Group controlId="topic">
                    <Form.ControlLabel>Categorie</Form.ControlLabel>
                    <SelectPicker
                      data={categories}
                      style={{ width: 243 }}
                      onChange={(value) => {
                        SetParams((prevparam) => ({
                          ...prevparam,
                          categorie: value,
                        }));
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="topic">
                    <Form.ControlLabel>Topic</Form.ControlLabel>
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
                </div>

                <Form.Group controlId="lenght">
                  <Form.ControlLabel>Number of words</Form.ControlLabel>
                  <Slider
                    style={{ marginTop: "2px" }}
                    min={400}
                    max={1000}
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
                  <Form.ControlLabel>Aricles count</Form.ControlLabel>
                  <Slider
                    style={{ marginTop: "2px" }}
                    max={5}
                    min={1}
                    progress
                    defaultValue={2}
                    onChange={(value) => {
                      SetParams((prevparam) => ({
                        ...prevparam,
                        samples: value,
                      }));
                    }}
                  />
                </Form.Group>
                <Toggle />
              </Form>
            </Panel>

            <Panel
              collapsible
              header="Articel"
              shaded
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
              <Form>
                {response.map((articel, index) => {
                  return (
                    <Article
                      id={index}
                      title={articel.title}
                      content={articel.content.substring(0, 500) + " . . ."}
                      imgUrl={"https://via.placeholder.com/240x240"}
                      tags={articel.tags}
                      setActiveSample={setActiveSample}
                    />
                  );
                })}
              </Form>
            </Panel>

            <Panel
              collapsible
              header={
                <div className="flex items-center gap-4">
                  <Whisper
                    followCursor
                    speaker={
                      <Popover
                        style={{
                          color: "black",
                        }}
                      >
                        These are images pulld from pexels and are free to use
                        as long as you state where you got them, images are
                        gatherd based on the current topic
                      </Popover>
                    }
                  >
                    <InfoOutlineIcon
                      style={{
                        width: 20,
                        height: 20,
                        color:
                          activeTheme.active == "dark"
                            ? activeTheme.dark.textCol
                            : activeTheme.light.textCol,
                      }}
                      size="sm"
                    />
                  </Whisper>
                  <div className="flex gap-2">
                    <Input
                      onChange={(e) => {
                        SetKeyword(e);
                      }}
                    ></Input>
                    <Button
                      onClick={() => {
                        fetchImages(Keyword);
                      }}
                    >
                      <SearchIcon
                        style={{
                          width: 20,
                          height: 20,
                          color:
                            activeTheme.active == "dark"
                              ? activeTheme.dark.textCol
                              : activeTheme.light.textCol,
                        }}
                        size="sm"
                      />
                    </Button>
                  </div>
                </div>
              }
              shaded
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
              <Panel></Panel>
              <Stack wrap spacing={6}>
                {images != null &&
                  images.map((image) => (
                    <Whisper
                      trigger="click"
                      placement="rightStart"
                      speaker={
                        <div
                          style={{
                            width: "300px",
                            hight: "300px",
                            position: "absolute",
                          }}
                        >
                          <ImageSelection image={image} />
                        </div>
                      }
                    >
                      <img
                        className="transition-all hover:scale-110 rounded-sm cursor-pointer"
                        id={image.id}
                        src={image.src.small}
                        onClick={(e) => {
                          console.log(image.src.original);
                        }}
                      />
                    </Whisper>
                  ))}
              </Stack>
            </Panel>
          </div>

          {Ready ? (
            <Panel
              expanded
              header="Formated Markdown"
              collapsible
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
              <MDEditor
                className="w-full"
                spellCheck
                style={{
                  minHeight: "100vw",
                  minWidth: "60vw",
                  overflow: "scroll",
                  color:
                    activeTheme.active == "dark"
                      ? activeTheme.dark.textCol
                      : activeTheme.light.textCol,
                  backgroundColor:
                    activeTheme.active == "dark"
                      ? activeTheme.dark.bg
                      : activeTheme.light.bg,
                }}
                value={response != null && response[activeSample].content}
                onChange={(e) => {
                  SetResponse((prevResponse) => {
                    const modifiedResponse = [...prevResponse];
                    modifiedResponse[activeSample] = {
                      ...modifiedResponse[activeSample],
                      content: e,
                    };
                    return modifiedResponse;
                  });
                }}
                // NEED TO BE CHANGED
              />
            </Panel>
          ) : (
            "Nothing"
          )}
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
