import React, { useState } from "react";
import axios from "axios";
import "./NewThread.css";
import { useNavigate } from "react-router-dom";

export const NewThread = () => {
  const navigate = useNavigate();
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com/threads";
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, {
        title: title
      })
      .then((res) => {
        if(res.status === 201) {
          console.log("投稿しました");
          console.log(res);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTitle("");
  };

  return (
    <div>
      <h1>新規作成</h1>
      <form onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="submit" value="投稿" />
      </form>
    </div>
  );
};
