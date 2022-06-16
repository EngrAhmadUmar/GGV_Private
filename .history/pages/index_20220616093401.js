import { About, JoinUs, Partners } from "./Components";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-400">
        Hello world!
      </h1>
      {/* <Home /> */}
      <About />
      <Partners />
      <JoinUs />
    </>
  );
}
