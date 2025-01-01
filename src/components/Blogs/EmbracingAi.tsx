const EmbracingAi = () => {
  return (
    <div>
      {/* Computer Vision Section */}
      <div className="computer-vision-container">
        {/* Header Section */}
        <section className="header-section">
          <h1 className="title">Embracing the Future with AI</h1>
          <p className="description">
            In today's rapidly evolving world, Artificial Intelligence (AI) is
            no longer just a concept from science fiction – it's transforming
            industries and reshaping our everyday lives.
          </p>
        </section>

        {/* Content Section with Images and Key Components */}
        <section className="content-section">
          <div className="image-container">
            <img
              src="/img/Embracing_the_Future_with_AI.png"
              alt="AI Image 1"
              className="main-image"
            />
          </div>

          <div className="key-components-section">
            <div className="key-components-header">
              <h2>Why AI Awareness Matters:</h2>
            </div>
            <ul className="key-components-list">
              <li>
                <strong>1. Innovation:</strong> AI drives groundbreaking
                innovations in healthcare, finance, education, and beyond.
              </li>
              <li>
                <strong>2. Efficiency:</strong> From automating mundane tasks to
                optimizing complex processes, AI boosts productivity.
              </li>
              <li>
                <strong>3. Opportunities:</strong> Understanding AI opens doors
                to new career paths and business opportunities.
              </li>
              <li>
                <strong>4. Exploration:</strong> Engaging in AI opens doors to
                future possibilities and discussions.
              </li>
            </ul>
            <div className="key-components-header">
              <h2>Join the AI Revolution:</h2>
            </div>
            <ul>
              <li>
                <strong>1.</strong> Stay informed about the latest AI trends and
                advancements.
              </li>
              <li>
                <strong>2.</strong> Engage in discussions about the ethical
                implications of AI.
              </li>
              <li>
                <strong>3.</strong> Explore educational resources and courses on
                AI.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmbracingAi;
