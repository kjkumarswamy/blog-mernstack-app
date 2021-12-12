import React from "react";
import Layout from "../../components/Layout/Layout";
import "./style.css";

const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="aboutProfile">
          <img
            src="https://www.impactplus.com/hubfs/blogging-for-business-heres-everything-you-need-to-know.jpg"
            alt=""
            className="aboutProfileImg"
          />
        </div>
        <div className="aboutInfo">
          <h2 className="aboutInfoTitle">ABOUT BLOG</h2>
          <p className="aboutInfoHeadPara">
            Blog is a free writing website you can write watever you want, your
            intrest, hobby, news, events, otherthings you can write it here
            freely. and you can share this with your friends on internet.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam odit et, nesciunt nostrum debitis qui obcaecati neque aut
            sed praesentium quae ea a corporis corrupti deserunt ipsum quisquam
            doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam odit et, nesciunt nostrum debitis qui obcaecati neque aut
            sed praesentium quae ea a corporis corrupti deserunt ipsum quisquam
            doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquam odit et, nesciunt nostrum debitis qui obcaecati neque aut
            sed praesentium quae ea a corporis corrupti deserunt ipsum quisquam
            doloribus?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
