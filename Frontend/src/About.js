import React from 'react';
import authorHeadshot from './assets/Author-Headshot.JPG';
import wife from './assets/wife.JPG'
import './About.css'; // Your existing CSS import

  
function About() {
  return (
    <div className="content-below-image">
    <div className="container">
      <div className="static-container">
      <h1>About the Author</h1>
      <img className='image' src={authorHeadshot} alt="Author Headshot" title="Landscape Image"></img>
      <p>Howdy, My name is Maysen.</p>
        <p>I grew up a member of The Church of Jesus Christ of Latter-day Saints. 
        As such, I have been profoundly impacted by the contents of the Book of Mormon. 
        I built this site as a way for readers to share how their readings have impacted them and other insights they have had about the substance within the book.</p>
        <h1>My story</h1>
        <img className="image" src={wife} alt="Authors Wife" width="100%"  title="Landscape Image"></img>
        <p>My love for the Book of Mormon motivated me to serve a volunteer mission in Macedonia. While there I discovered so much about myself, my love for Gods Children, and about the role we all play in supporting our brothers and sisters. It was also where I met my amazing wife. My life will forever be impacted by the influence of Book of Mormon. </p>
        <p>2 nephi 2 is renowned as one of the most doctorinally dense chapters in the book of mormon and it has always been a personal favorite of mine.</p>
      </div>
      </div>
</div>
  );
}

export default About;