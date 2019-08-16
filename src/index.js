import React from "react";
import ReactDOM from "react-dom";
import CardBasic from "backpack-ui/dist/components/cardBasic";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Navigation,
  NavigationTab
} from "backpack-ui/dist/components/navigation";

import { StyleRoot } from "radium";
import "./styles.css";

const Center = ({ children, backgroundColor, grow, shrink, basis }) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor,
      display: "flex",

      justifyContent: "center",
      padding: "32px",
      width: "100%"
    }}
  >
    {React.cloneElement(children, {
      style: {
        flexGrow: grow ? 1 : 0,
        flexShrink: shrink ? 1 : 0,
        flexBasis: basis
      }
    })}
  </div>
);

Center.defaultProps = {
  backgroundColor: "#f4fbfe",
  grow: false,
  shrink: false,
  basis: "auto"
};

const CardSize = ({ heading, bullets, imageSrc, href, license }) => (
  <div>
    <div style={{ padding: "32px" }}>
      <CardBasic
        heading={heading}
        bullets={bullets}
        imageSrc={imageSrc}
        href={href}
      />
    </div>
  </div>
);

const Jds = () => (
  <CardSize
    heading={"JDS Australia"}
    bullets={["AppDynamics", "Splunk", "ServiceNow", "Micro Focus"]}
    imageSrc={"dog.jpg"}
    href={"#"}
  />
);

const AppDynamics = () => (
  <CardSize
    heading={"AppDynamics"}
    bullets={["APM", "RUM", "Analytics", "Business Journeys"]}
    imageSrc={"appdynamics.jpg"}
    href={"#"}
  />
);

const Splunk = () => (
  <CardSize
    heading={"Splunk"}
    bullets={["AIOps", "Log Analytics"]}
    imageSrc={"splunk.jpg"}
    href={"#"}
  />
);

const ServiceNow = () => (
  <CardSize
    heading={"ServiceNow"}
    bullets={["Digital Workflows"]}
    imageSrc={"servicenow.jpg"}
    href={"#"}
  />
);

const MicroFocus = () => (
  <CardSize
    heading={"Micro Focus"}
    bullets={["Enterprise DevOps"]}
    imageSrc={"microfocus.jpg"}
    href={"#"}
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        <StyleRoot>
          <Center backgroundColor="black">
            <img
              src="https://i0.wp.com/www.jds.net.au/images/cropped-JDS_logo_white_close50px.png"
              alt="jds"
            />
          </Center>
          <Navigation height={80} sticky={false}>
            <Link to="/">
              <NavigationTab>JDS Australia</NavigationTab>
            </Link>
            <Link to="/product/appdynamics">
              <NavigationTab>AppDynamics</NavigationTab>
            </Link>
            <Link to="/product/splunk">
              <NavigationTab>Splunk</NavigationTab>
            </Link>
            <Link to="/product/servicenow">
              <NavigationTab>ServiceNow</NavigationTab>
            </Link>
            <Link to="/product/microfocus">
              <NavigationTab>Micro Focus</NavigationTab>
            </Link>
          </Navigation>
          <Route path="/" exact component={Jds} />
          <Route path="/product/appdynamics" exact component={AppDynamics} />
          <Route path="/product/splunk" exact component={Splunk} />
          <Route path="/product/servicenow" exact component={ServiceNow} />
          <Route path="/product/microfocus" exact component={MicroFocus} />
        </StyleRoot>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
