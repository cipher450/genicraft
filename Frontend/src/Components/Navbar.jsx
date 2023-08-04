import { Container, Header, Sidebar, Sidenav, Navbar, Nav } from "rsuite";
import React from "react";

import MagicIcon from "@rsuite/icons/legacy/Magic";
import ParagraphIcon from "@rsuite/icons/Paragraph";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import { useSelector, useDispatch } from "react-redux";

// Tools
import Home from "./Home";
import Blog from "./TextModels/Blog/Blog";
import Metadata from "./TextModels/Metadata/Metadata";
import Enhancer from "./TextModels/Blog/Enhancer";
import Script from "./TextModels/Blog/Script";
import Instagram from "./TextModels/SocialMedia/Instagram";



export default function SuitNavbar({ Comp, Setcomp }) {
  const [expand, setExpand] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  const dispatch = useDispatch();

  const activeComp = useSelector((state) => state.navbar.activeComponent);
  /*


*/
  console.log(activeComp);
  function HandleNavKeys(key) {
    dispatch({ type: "SET_COMP", payload: key });
    switch (key) {
      case "🚀 Blog Post":
        Setcomp(<Blog />);
        break;
      case "🌈 Article Enhacer":
        Setcomp(<Enhancer />);
        break;
      case "  Article Enhacer":
        break;
      case "📖 Script":
        Setcomp(<Script />);
        break;
      case "Metadata":
        Setcomp(<Metadata />);
        break;
        case "Instagram":
        Setcomp(<Instagram />);
        break;
      case "Home":
        Setcomp(<Home />);
        break;
      default:
        Setcomp(<Home />);
        break;
    }
  }
  /**
   * NAV EXAPND
   *
   * expanded={expand}
   */
  return (
    <Sidebar
      onMouseEnter={() => {
        setExpand(true);
      }}
      onMouseLeave={() => {
        setExpand(false);
      }}
      width={expand ? 260 : 56}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#1A1D24",
      }}
      collapsible
    >
      <Sidenav
        defaultOpenKeys={["3"]}
        expanded={expand}
        style={{ backgroundColor: "#1A1D24", color: "white" }}
        appearance="subtle"
      >
        <Sidenav.Header className="Logo p-5 ">
          <p className="glitch">
            <span aria-hidden="true">GeniCraft</span>
            GeniCraft
            <span aria-hidden="true">GeniCraft</span>
          </p>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav activeKey="1">
            {
              // Text manipulation
            }
            <Nav.Menu
              eventKey="3"
              title="Text Manipulations"
              icon={<MagicIcon />}
            >
              <Nav.Menu
                icon={
                  <ParagraphIcon style={{ width: 20, height: 20 }} size="sm" />
                }
                eventKey="3-1"
                title="Long-form"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                <Nav.Item
                  eventKey="3-1-1"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  🚀 Blog Post
                </Nav.Item>
                <Nav.Item
                  eventKey="3-1-2"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  🌈 Article Enhacer
                </Nav.Item>
                <Nav.Item
                  eventKey="3-1-3"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  📖 Script
                </Nav.Item>
              </Nav.Menu>

              <Nav.Menu
                eventKey="3-2"
                title="Social media"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                <Nav.Item
                  eventKey="3-2-1"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  TikTok post
                </Nav.Item>
                <Nav.Item
                  eventKey="3-2-1"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  Instagram
                </Nav.Item>
                <Nav.Item
                  eventKey="3-2-1"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  Facebook post
                </Nav.Item>
              </Nav.Menu>

              <Nav.Menu
                eventKey="4-1"
                title="SEO"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                <Nav.Item
                  eventKey="4-1"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  Metadata
                </Nav.Item>
              </Nav.Menu>
            </Nav.Menu>

            {
              // Audio manipulation
            }
            <Nav.Menu
              eventKey="5"
              title="Audio"
              icon={
                <PlayOutlineIcon style={{ width: 20, height: 20 }} size="sm" />
              }
            ></Nav.Menu>
            <Nav.Menu
              title="Settings"
              placement="topStart"
              trigger="click"
              icon={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
            >
              <Nav.Item>Help</Nav.Item>
              <Nav.Item>Settings</Nav.Item>
              <Nav.Item>Sign out</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
}
