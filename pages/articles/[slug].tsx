import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import { IMDArticle } from "../../interfaces/IMDArticle";

const DIRNAME = "articles";

export async function getStaticPaths() {
  function getSlugs(dirName: string) {
    const files = fs.readdirSync(dirName);
    return files.map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    }));
  }

  const paths = getSlugs(DIRNAME);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const mdfile = fs.readFileSync(`${DIRNAME}/${slug}.md`);
  const { data: frontMatter, content } = matter(mdfile);

  return {
    props: {
      frontMatter,
      content,
    },
  };
}

function Article({ frontMatter, content }: IMDArticle) {
  console.log(frontMatter);
  console.log(content);
  return (
    <div>
      <h1>{frontMatter?.title}</h1>
      <article
        className={"Article"}
        dangerouslySetInnerHTML={{ __html: md().render(content || "") }}
      />
    </div>
  );
}

export default Article;
