"use client";

import Header1 from "./../components/typography/header";

import styles from "./contact.scss";

import Main from "../components/main/main";

export default function Contact(options) {
  return (
    <Main>
      <div styles={{ display: "flex", alignItems: "center" }}>
        <Header1>Contact</Header1>
      </div>
      <div className="center">
        <p>Mail: flowevents13@gmail.com</p>
        <p>Tél: 06 80 22 42 59</p>
      </div>
    </Main>
  );
}
