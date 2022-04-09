import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import DEFAULT_CONFIG from '../config/default_config';
import { getSortedPostsData } from "../lib/posts";
import generateSitemap from '../lib/sitemap';
import Layout from "../components/layout";
import DateComponent from "../components/date";
import { MetaData } from "../components/meta_data";
import utilStyles from "../styles/utils.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const sitemap = generateSitemap(allPostsData);

  fs.writeFileSync('./public/sitemap.xml', sitemap);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog | {DEFAULT_CONFIG.author} </title>
        { MetaData() }
      </Head>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, readingTime }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateComponent dateString={date} /> • {readingTime} min read
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
