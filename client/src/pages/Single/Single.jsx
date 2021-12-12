import React from "react";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./style.css";

const Single = () => {
  return (
    <Layout>
      <div className="single">
        <SinglePost />
        <Sidebar single={true} />
      </div>
    </Layout>
  );
};

export default Single;
