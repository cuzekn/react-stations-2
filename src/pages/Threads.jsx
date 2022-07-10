import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./Threads.css";

export const Threads = () => {
  const baseURL = "https://railway-react-bulletin-board.herokuapp.com/threads?offset=0";
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        const data = res.data.map((thread) => ({
          id: thread.id,
          title: thread.title,
        }));
        setThreads(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {threads.map((thread) => (
        <div key={thread.id} className="threads">
          <h3>
            {thread.id} : {thread.title}
          </h3>
        </div>
      ))}
    </>
  );
};
