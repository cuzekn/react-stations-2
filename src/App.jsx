import { Link, Outlet } from "react-router-dom";

import "./App.css";

export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><h1>掲示板</h1></Link>
      </header>
      <main>
        <nav>
        <Link to="/thread/new" className="newThread">スレッド新規作成</Link>
        </nav>
        <Outlet />
      </main>
    </div>
  );
};
