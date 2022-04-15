import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
// File: /packages/my-first-theme/src/components/index.js
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <ul>
          <li>
            <Link link="/">Home</Link>
          </li>
          <li>
            <Link link="/page/2">More posts</Link>
          </li>
          <li>
            <Link link="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
