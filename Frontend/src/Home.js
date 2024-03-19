import React from 'react';
import './Home.css'; // Ensure this is the correct path
import BOM from './assets/BOM.png';

const Home = () => {
  return (
    <div>
        <img src={BOM} alt="Inspirational Image" className="welcome-image" />
        {/* New div for content below the image */}
        <div className="content-below-image">
          <main>
            <section className="intro container">
              
              <h1>How do I use it?</h1>
              <p>The motivation of this project is to provide a platform for a rich form of personal study and reflection that individuals always have access to and that can be shared across congregations and through generations.</p>
              <p>Think of this like your personal book club where you can read the markings of everyone you follow as you read. This app makes it possible to see how this book has affected your grandparents, or maybe how it is affecting your children.</p>
              <h1>Why "Footnotes in the sand"?</h1>
              <p>The famous “footprints in the sand” Poem is the namesake of this project. Love it or hate it, the principle of being carried through our mortal struggles is a powerful one that we should not neglect. Many of the individuals who visit this site will be struggling, be that with doctrinal principles or mortal challenges. The hope for this project is that the thoughts and inspiration given by family and peers alike can help to bolster these individuals in the storms of life.</p>
            </section>
          </main>
        </div>
    </div>
  );
};

export default Home;

