import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./style.css";
import { useSelector } from "react-redux";

const Home = () => {
  const { authenticate } = useSelector((state) => state.authState);

  return (
    <Layout>
      <Header />
      <div className="home">
        <Posts />
        {authenticate ? <Sidebar /> : null}
      </div>
    </Layout>
  );
};

export default Home;
