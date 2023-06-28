// ** Reactstrap Imports
import {Button} from "reactstrap";

// ** Custom Components
import {Settings, Shield, Target} from "react-feather";
import older from "@src/assets/images/pages/older.jpg";

// ** Source Code
const About = () => {
  return (
    <div id="about" className="sec-2">
      <div className="container mx-auto">
        <div className="sec-2H1">OUR PROFESSIONAL SERVICES</div>
        <div className="sec-2H2">Competitive Advantages</div>
        <img
          className="sec-3L mx-auto"
          src={older}
          id="reading"
          alt="redaing"
        />
        <div className="sec-2CT mx-auto pt-3">
          <strong>AwakeAI</strong> system will process anonymized video taken in
          the resident's room, detect the senior’s activities, and send detected
          actions in concise textual information to the caregivers’ and their
          family members’ tablets or mobile phones (see diagram). Our system
          preserves client privacy by keeping all personal client information in
          secure cloud servers (Microsoft Azure) and not needing to send
          identifiable information over the internet.
          <br /> <br />
          Our AI system can monitor activities that can be divided into 5
          categories: emergencies, activity/physical status, diet/medicine
          intake, health, and human-human interactions. Our system can detect
          other activities based on a customization request. Furthermore, we are
          aiming to predict fall situations and help to prevent those.
        </div>
        <div className="sec-2E mx-auto mt-3 justify-content-center">
          <div className="sec-2C">
            <Button
              color="github"
              className="spotcustomer"
              style={{
                width: "10%"
              }}
            >
              <Settings size={20} color="#000000" />
            </Button>
            <div className="sec-2CH">Fully Autonomous</div>
            <div className="sec-2CP">
              No wearable and manual operations are needed, no extra burder on
              any user.
            </div>
          </div>

          <div className="sec-2C">
            <Button
              color="github"
              className="spotcustomer"
              style={{
                width: "10%"
              }}
            >
              <Shield size={20} color="#000000" />
            </Button>
            <div className="sec-2CH">Privacy Preserving</div>
            <div className="sec-2CP">
              Video will be processed locally, without video transmission,
              leaving no concern of leak.
            </div>
          </div>

          <div className="sec-2C">
            <Button
              color="github"
              className="spotcustomer"
              style={{
                width: "10%"
              }}
            >
              <Target size={20} color="#000000" />
            </Button>
            <div className="sec-2CH">Broadly Applicable</div>
            <div className="sec-2CP">
              The application can be extended to hospitals long-term care
              facilities and homecare facilities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
