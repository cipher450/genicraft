import {
  Loader,
  Form,
  Button,
  Input,
  List,
  Dropdown,
  Popover,
  Whisper,
  Panel,
  PanelGroup,
  Placeholder,
  Toggle,
  Stack,
  Notification,
  SelectPicker,
  Modal,
  Carousel,
} from "rsuite";
import Loading from "../../Controls/Loading";
import { useSelector, useDispatch } from "react-redux";
import { languages, tones, wrtingStyles } from "../../../store/strings";
import { IsEmpty } from "../../../Helpers";
import { useEffect, useRef, useState } from "react";
import { server } from "../../../store/store";
import SocialPost from "../../Controls/SocialPost";

export default function Instagram() {
  const dispatch = useDispatch();
  const [loading, SetLoading] = useState(false);
  const activeTheme = useSelector((state) => state.theme);

  const params = useSelector((state) => state.socialMedia.params);
  const posts = useSelector((state) => state.socialMedia.posts);
  console.log(params);
  console.log(posts);
  const HandleParamChange = (Keyname, event) => {
    switch (Keyname) {
      case "tone":
        params.tone = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "lang":
        params.language = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "writing":
        params.writing = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "subject":
        params.subject = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "sponsor":
        params.sponsor = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "sponsorText":
        params.sponsorText = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
      case "emojis":
        params.emojis = event;
        dispatch({ type: "SET_PARAMS", payload: params });
        break;
    }
    console.log(params);
  };

  /*
[
    {
        "description": "🏀 Le match de basket-ball commence bientôt ! Ne manquez pas les talents incroyables des joueurs sur le terrain. #BasketBall #Match #Talents",
        "hashtags": [
            "BasketBall",
            "Match",
            "Talents"
        ],
        "AiimagePrompt": "Créez une image pour représenter un match de basket-ball professionnel où les joueurs montrent leurs talents."
    },
    {
        "description": "🎾 Une journée parfaite pour le tennis ! Les joueurs s'affrontent dans un match palpitant aujourd'hui. #Tennis #Match #Compétition",
        "hashtags": [
            "Tennis",
            "Match",
            "Compétition"
        ],
        "AiimagePrompt": "Générez une image illustrant un match de tennis professionnel où les joueurs rivalisent dans une compétition intense."
    },
    {
        "description": "⚽ Le monde du football est en ébullition aujourd'hui ! Suivez notre équipe préférée et encouragez-les lors de ce match crucial. #Football #Match #Supporters",
        "hashtags": [
            "Football",
            "Match",
            "Supporters"
        ],
        "AiimagePrompt": "Imaginez une image représentant un match de football professionnel avec une foule de supporters enthousiastes qui encouragent leur équipe."
    },
    {
        "description": "🏐 Assistez à un match de volley-ball sensationnel ! Les joueurs s'élèvent dans les airs pour des attaques puissantes et des défenses solides. #VolleyBall #Match #Action",
        "hashtags": [
            "VolleyBall",
            "Match",
            "Action"
        ],
        "AiimagePrompt": "Créez une image mettant en scène un match de volley-ball professionnel avec des joueurs en action effectuant des attaques et des défenses impressionnantes."
    }
]
  */
  async function HandleNewRequest() {
    SetLoading(true);
    let isempty = IsEmpty(params);
    if (
      !isempty ||
      (params.sponsor == false && isempty == "sponsorText can not be empty.")
    ) {
      const response = await fetch(`${server.main}/text/socialmedia`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      const json = await response.json();
      
      console.log(json);
    } else {
      alert(isempty);
    }
    SetLoading(false);
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex overflow-hidden lg:flex-row flex-col gap-5 ">
          <div className="   flex flex-col gap-5 lg:w-1/3 ">
            <div className="flex gap-2  justify-end">
              <Button
                color="green"
                appearance="primary"
                onClick={HandleNewRequest}
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
            <PanelGroup
              accordion
              defaultActiveKey={1}
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
              <Panel header="Settings" eventKey={1} id="panel1">
                <div className="flex flex-col gap-3">
                  <span>Subject or prompt</span>
                  <Input
                    onChange={(e) => {
                      HandleParamChange("subject", e);
                    }}
                  />

                  <div className="flex gap-3 m-auto mt-5 mb-5">
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
                  <div className="flex gap-2 mb-2 ">
                    <Toggle
                      onChange={(e) => {
                        HandleParamChange("emojis", e);
                      }}
                    />
                    <span>Emojis</span>
                  </div>

                  <div className="flex gap-2  ">
                    <Toggle
                      onChange={(e) => {
                        HandleParamChange("sponsor", e);
                      }}
                    />
                    <span>Sponsored</span>
                  </div>
                  <div className=" w-full">
                    <span className="mb-5 "> Text feedback</span>
                    <Input
                      as="textarea"
                      rows={10}
                      cols={100}
                      style={{ backgroundColor: "whitesmoke", width: "100%" }}
                      onChange={(e) => {
                        HandleParamChange("sponsorText", e);
                      }}
                    />
                  </div>
                </div>
              </Panel>
              <Panel header="Analystique" eventKey={2} id="panel2">
                <Placeholder.Paragraph />
              </Panel>
              <Panel header="Image generatore" eventKey={3} id="panel3">
                <Placeholder.Paragraph />
              </Panel>
            </PanelGroup>
          </div>
          <div className="lg:w-2/3  flex lg:flex-row flex-col gap-5 m-auto flex-wrap items-center justify-center">
            {posts.map((post,i) => (
              <SocialPost
              key={i}
                activeTheme={activeTheme}
                description={post.description}
                hashtags={post.hashtags}
                image={post.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
