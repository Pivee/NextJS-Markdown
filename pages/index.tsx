import type { NextPage } from "next";
import Link from "next/link";

const DIRNAME = "articles";

const HomePage: NextPage = () => {
  return (
    <div className={"HomePage"}>
      <h1>Hello World!</h1>
      <Link href={DIRNAME}>
        <button>Go to Articles page</button>
      </Link>
    </div>
  );
};

export default HomePage;
