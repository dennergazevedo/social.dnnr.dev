import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import HeaderProfile from "@/app/components/Profile/Header";

import styles from './styles.module.scss'
import CodeBlock from "@/app/components/CodeBlock";
import ColorBlock from "@/app/components/ColorBlock";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return (
    <section className={styles.blogPostContainer}>
      <div className={styles.blogPostHeader}>
        <ColorBlock />
        <HeaderProfile />
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page", {
    predicates: [prismic.filter.not("my.page.uid", "home")],
  });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
