import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

const baseURL = "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads?offset=1";

export const App = () => {
  const [threads, setThreads] = useState([]);

  // useEffect(() => {
  //   axios.get(baseURL).then(response => {
  //     setThreads(response.data);
  //   });
  // }, []);

  const getThreads = () => {
    axios
      .get(baseURL)
      .then((res) => {
        const data = res.data.map((thread) => ({
          id: thread.id,
          title: thread.title,
        }));
        setThreads(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>掲示板</h1>
      </header>
      <main>
        {threads.map((thread) => (
          <div className="threads">
            <h3 key={thread.id}>{thread.title}</h3>
          </div>
        ))}
        <button onClick={getThreads}>スレッド取得</button>
      </main>
    </div>
  );
};
