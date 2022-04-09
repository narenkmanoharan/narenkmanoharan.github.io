import Head from "next/head";
import Link from "next/link";
import DEFAULT_CONFIG from '../config/default_config';
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Date from "../components/date";
import { MetaData } from "../components/meta_data";
import utilStyles from "../styles/utils.module.scss";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
const name = "Naren Manoharan";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{DEFAULT_CONFIG.author}</title>
        {MetaData()}
      </Head>
      <section className={utilStyles.profile}>
        <Link href="/">
          <a>
            <img
              src="/images/narenmanoharan.jpeg"
              className={`${utilStyles.profileImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>{name}</h2>
      </section>
      <section className={utilStyles.headingMd}>
        <div className="text-left">
          I'm an engineering manager at Wealthfront, working from home out of Austin, Texas. I work with incredibly smart people and learn something from them everyday.
          <br/><br/>
        </div>
        <br></br>

        <h3 className={utilStyles.headingLg}>Recent blogs</h3>
        <ul>
          {allPostsData.slice(0, 3).map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <p>
        <Link href="/blog">
          <a>See All Articles →</a>
        </Link>
      </p>

    </Layout>
  );
}
