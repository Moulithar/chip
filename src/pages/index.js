import * as React from "react";
import "../style/global.css";
import Header from "../components/Header/Header";
import Navone from "../components/Navone/Navone";
import Welcome from"../components/Welcome/Welcome";
import Services from "../components/Services/Services";
import Service from "../components/Service/Service";
import Counter from "../components/Counter/Counter";
import Team from "../components/Team/Team";
import Blog from "../components/Blog/Blog";
import Footertop from "../components/Footertop/Footertop";
import Footerbottom from "../components/Footerbottom/Footerbottom";
import Countersec from "../components/Countersec/Countersec";
import image1 from "./assets/styles/image1.jpg";
import image2 from "./assets/styles/image2.jpg";
import image3 from "./assets/styles/image3.jpg";
import img1 from "./assets/styles/1.jpg";
import img2 from "./assets/styles/2.jpg";
import img3 from "./assets/styles/3.jpg"; 
import img4 from "./assets/styles/4.jpg";

const welcomeOptions = [
  {
    title: "Cloud Solution",
    desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.",
    icon:  <i className="icon icon-cloud"></i>,

  },
  {
    title: "Netwrok Services",
    desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.",
    icon:  <i className="icon icon-tv"></i>, 
  },
  {
    title: "Disaster Recovery",
    desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.",
    icon:  <i className="icon icon-camera"></i>, 
  },
  {
    title: "Webcast Services",
    desc: "Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.",
    icon:  <i className="icon icon-list"></i>,  
  },
]

const teamOptions = [
  {
    title: <div> 
      <h3>Fletch Skinner</h3>
      <p>product strategist</p>
    </div>,
    desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
    image: img1
  },
  {
    title:  <div> 
              <h3>Lance bogrol</h3>
              <p>visual designer</p>
            </div>,
    desc:   <div>
            <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p>
            </div>,
    image: img2  
  },
  {
    title:  <div> 
              <h3>valentina morose</h3>
              <p>android developer</p>
            </div>,
    desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
    image: img3  
  },
  {
    title:  <div> 
              <h3>Giles posture</h3>
              <p>IOS designer</p>
            </div>,
    desc: <div><p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.</p></div>,
    image: img4  
  },
]

const blogOptions = [
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim.</p>,
    image: image1
  },
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac ante ipsum.</p>,
    image: image2  
  },
  {
    title: <h6>Chip Expands the Leadership Team with David Lin, Controlle</h6>,
    desc: <p>Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem auctor malesuada. Morbi auctor tortor eu</p>,
    image: image3 
  },
]

const IndexPage = () => (
  <>
   <Navone />
   <Header />
   <Welcome dataItems={welcomeOptions} />
   <Services />
   <Service />
   <Counter />
   <Team dataItems={teamOptions} />
   <Blog dataItems={blogOptions}/>
   <Countersec />
   <Footertop />
   <Footerbottom />   
  </>
)

export default IndexPage
