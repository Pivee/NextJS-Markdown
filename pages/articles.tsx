import { NextPage } from "next";
import { IMDArticle } from "../interfaces/IMDArticle";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

const DIRNAME = "articles";

export async function getStaticProps() {
  function getArticles(dirName: string): IMDArticle[] {
    const files = fs.readdirSync(dirName);
    return files.map((filename) => {
      const slug = filename.replace(".md", "");
      const readFiles = fs.readFileSync(`${dirName}/${filename}`);
      const { data: frontMatter } = matter(readFiles);

      return {
        slug,
        frontMatter,
      } as IMDArticle;
    });
  }

  const articles = getArticles(DIRNAME);

  return {
    props: {
      articles: articles,
    },
  };
}

const ArticlesPage: NextPage = ({ articles }: { articles?: any[] }) => {
  console.log("articles:", articles);
  return (
    <div className={"ArticlesPage"}>
      <ul className="ArticleList">
        {articles?.map((article, index) => {
          return (
            <li className="ArticleLink" key={index}>
              <Link key={index} href={`/${DIRNAME}/${article.slug}`}>
                <a>
                  <p>
                    {`${article.frontMatter?.metaTitle}`}{" "}
                    <small>[Click to view]</small>
                  </p>
                  <p>
                    📝{" "}
                    <em>
                      <small>{`${article.frontMatter?.metaDescription}`}</small>
                    </em>
                  </p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesPage;
