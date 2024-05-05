import { Metadata } from "next";

import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";

import styles from './page.module.scss'
import CodeBlock from "./components/CodeBlock";
import Profile from "./components/Profile";
import Tabs from "./components/Tabs";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const feed = await client.getByUID("feed", "feed");
  const experiences = await client.getByUID("experiences", "experiences");

  return (
    <main className={styles.main}>
      <CodeBlock />
      <Profile />
      <Tabs feed={feed?.data?.slices} experiences={experiences?.data?.slices}/>
    </main>
  )
}
