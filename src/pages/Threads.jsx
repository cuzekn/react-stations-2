import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./Threads.css";
import { useNavigate } from "react-router-dom";

// https://app.swaggerhub.com/apis/INFO_3/BulletinBoardApplication/1.0.0

export const Threads = () => {
  const navigate = useNavigate();
  // const baseURL = "https://railway-react-bulletin-board.herokuapp.com/threads?offset=0+offset=10";
  const [threads, setThreads] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [threadPosts, setThreadPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://railway-react-bulletin-board.herokuapp.com/threads?offset=${pageIndex}`
      )
      .then((res) => {
        const data = res.data.map((thread) => ({
          id: thread.id,
          title: thread.title,
        }));

        setThreads(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://railway-react-bulletin-board.herokuapp.com/threads/24/posts?offset=0`
      )
      .then((res) => {
        const threadList = res.data.posts[0].post;
        setThreadPosts(threadList);
        console.log(threadList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageIndex]);

  return (
    <>
      {threads.map((thread) => (
        <div key={thread.id} className="threads">
          <h3>
            {thread.id} : {thread.title}
          </h3>
          {threadPosts}
          <br />
          <button onClick={() => navigate(`thread/${thread.id}`)}>
            もっと見る
          </button>
        </div>
      ))}
      <button onClick={() => setPageIndex(pageIndex - 10)}>戻る</button>
      <button onClick={() => setPageIndex(pageIndex + 10)}>次へ</button>
      <br />
      <button onClick={() => setPageIndex(0)}>Topへ</button>
    </>
  );
};
