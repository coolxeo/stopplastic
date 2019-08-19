import React from "react";
import Section from "./../Section";
import WhyStopPlastic from "./../WhyStopPlastic";
import ForgotPass from "./../ForgotPass";
import "./styles.scss";

function ForgotPassSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <WhyStopPlastic
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <ForgotPass buttonText={props.buttonText} parentColor={props.color} />
      </div>
    </Section>
  );
}

export default ForgotPassSection;
