import { type NextPage } from "next";
import NewTweetForm from "~/components/NewTweetForm";

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-10 bg-black pt-2">
        <h1>HOME</h1>
      </header>
      <NewTweetForm />
    </>
  );
};

export default Home;
