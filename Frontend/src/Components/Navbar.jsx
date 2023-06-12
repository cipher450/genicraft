import { Container, Header, Sidebar, Sidenav, Navbar, Nav } from "rsuite";

import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import React from "react";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import Blog from "./TextModels/Blog";

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default function SuitNavbar({ Comp, Setcomp }) {
  const [expand, setExpand] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");

  function HandleNavKeys(key) {
    switch (key) {
      case "Blog Post":
        break;
    }
  }

  return (
    <Sidebar
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#1A1D24",
      }}
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav defaultOpenKeys={["3"]} expanded={expand} style={{backgroundColor:'#1A1D24' ,color:'white'}} appearance="subtle">
        <Sidenav.Header className="Logo p-5 ">
          <p className="glitch">
            <span aria-hidden="true">GeniCraft</span>
            GeniCraft
            <span aria-hidden="true">GeniCraft</span>
          </p>
        </Sidenav.Header>
        <Sidenav.Body >
          <Nav activeKey="1" >
            <Nav.Menu
            
              eventKey="3"
              title="Text Manipulations"
              icon={<MagicIcon />}
              
            >
              <Nav.Menu
                eventKey="3-1"
                title="Content"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                <Nav.Item
                  eventKey="3-1"
                  onClick={(e) => {
                    HandleNavKeys(e.target.innerText);
                  }}
                >
                  Blog Post
                </Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
            <Nav.Menu eventKey="5" title="Audio" icon={<MagicIcon />}>
              <Nav.Item
                eventKey="3-1"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                Geo
              </Nav.Item>
              <Nav.Item
                eventKey="3-2"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                Devices
              </Nav.Item>
              <Nav.Item
                eventKey="3-3"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                Loyalty
              </Nav.Item>
              <Nav.Item
                eventKey="3-4"
                onClick={(e) => {
                  HandleNavKeys(e.target.innerText);
                }}
              >
                Visit Depth
              </Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Profile</Nav.Item>
              <Nav.Item eventKey="4-2">Api Keys</Nav.Item>
              <Nav.Item eventKey="4-3">Version</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidenav>
    </Sidebar>
  );
}
