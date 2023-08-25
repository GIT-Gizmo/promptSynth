import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
      PromptSynth is an open-source AI-Prompting tool fostering creativity by facilitating the creation and sharing of imaginative prompts across diverse applications.
      </p>

      <Feed />
    </section>
  )
}

export default Home;