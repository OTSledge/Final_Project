import React from 'react';
import authorHeadshot from './assets/Author-Headshot.JPG';
import footprints from './assets/footprints.JPG'
import wife from './assets/wife.JPG'


function About() {
  return (
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ maxWidth: '400px', padding: '0 10px' }}>
        <h1>About the Author</h1>
        <img className="fade-in-on-scroll" src={authorHeadshot} alt="Author Headshot" width="100%"  title="Landscape Image"></img>
        <p>Howdy, My name is Maysen.</p>
        <p>I grew up a member of The Church of Jesus Christ of Latter-day Saints. 
        As such, I have been profoundly impacted by the contents of the Book of Mormon. 
        I built this site as a way for readers to share how their readings have impacted them and other insights they have had about the substance within the book.</p>
        <h1>Why footnotes in the sand?</h1>
        <img className="fade-in-on-scroll" src={footprints} alt="Footprints in Sand" width="100%"  title="Landscape Image"></img>
        <p>The motivation of this project is to provide a platform for a rich form of personal study and reflection that individuals always have access to and that can be shared across congregations and through generations.</p>
        <p>Think of this like your personal book club where you can read the markings of everyone you follow as you read. This app makes it possible to see how this book has affected your grandparents, or maybe how it is effecting your children.</p>
        <p>The famous “footprints in the sand” Poem is the namesake of this project. Love it or hate it, the principal of being carried through our mortal struggles is a powerful one that we should not neglect. Many of the individuals who visit this site will be struggling. Be that with doctrinal principles or mortal challenges. The hope for this project is that the thoughts and inspiration given by family and peers alike can help to bolster these individuals in the storms of life. </p>
        <h1>My story</h1>
        <img className="fade-in-on-scroll" src={wife} alt="Authors Wife" width="100%"  title="Landscape Image"></img>
        <p>My love for the Book of Mormon motivated me to serve a volunteer mission in Macedonia. While there I discovered so much about myself, my love for Gods Children, and about the role we all play in supporting our brothers and sisters. It was also where I met my amazing wife. My life will forever be impacted by the influence of Book of Mormon. </p>
        <p>2 nephi 2 is renowned as one of the most doctorinally dense chapters in the book of mormon and it has always been a personal favorite of mine.</p>
    </div>
</div>
  );
}

export default About;