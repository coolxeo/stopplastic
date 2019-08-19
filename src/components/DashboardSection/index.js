import React from "react";
import Section from "./../Section";
import WhyStopPlastic from "./../WhyStopPlastic";
import "./styles.scss";

function DashboardSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <WhyStopPlastic
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
      </div>
    </Section>
  );
}

export default DashboardSection;
