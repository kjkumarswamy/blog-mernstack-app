import React from "react";
import Layout from "../../components/Layout/Layout";
import "./style.css";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contactProfile">
          <img
            src="https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys="
            alt=""
            className="contactProfileImg"
          />
        </div>
        <div className="contactInfo">
          <h2 className="contactInfoTitle">CONTACT US</h2>
          <p className="contactInfoHeadPara">
            Blog is a free writing website you can write watever you want, your
            intrest, hobby, news, events, otherthings you can write it here
            freely. and you can share this with your friends on internet.
          </p>
          <table className="contactTable" border="1" cellPadding="5px">
            <thead>
              <tr>
                <th>
                  <i className="far fa-envelope"></i> Email
                </th>
                <th>
                  <i className="fas fa-mobile-alt"></i> Mobile No
                </th>
                <th>
                  <i className="fas fa-phone"></i> Phone No
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>blog@blog.com</td>
                <td>+91 - 123456789</td>
                <td>080 - 223344</td>
              </tr>
            </tbody>
          </table>
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

export default Contact;
