require('../css/styles.css');

import React from 'react';
import {Link} from 'react-router';

class News extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Home">
      	<main className="news">
  	    	<section className="blue">
  	    		<h1>News &amp; Announcements</h1>
  	    	</section>
  	    	<section className="white">
  	     {/* Replace this with items from the announcements section! */}
  	    		<h3>Composting is cool!</h3>
  	    		<p>XOXO etsy echo park, food truck pickled whatever truffaut meggings bushwick kale chips street art fap. Tacos neutra asymmetrical cold-pressed keffiyeh, YOLO kombucha selfies PBR&B bitters meditation street art next level hammock humblebrag. Helvetica iPhone art party celiac, heirloom meditation health goth williamsburg. Pinterest shabby chic normcore taxidermy, irony hammock ennui hashtag flannel intelligentsia tofu. Humblebrag ugh artisan, hashtag +1 church-key organic sustainable kinfolk...<a href="#">[ READ MORE ]</a></p>

  	    		<h3>Composting is cool!</h3>
  	    		<p>XOXO etsy echo park, food truck pickled whatever truffaut meggings bushwick kale chips street art fap. Tacos neutra asymmetrical cold-pressed keffiyeh, YOLO kombucha selfies PBR&B bitters meditation street art next level hammock humblebrag. Helvetica iPhone art party celiac, heirloom meditation health goth williamsburg. Pinterest shabby chic normcore taxidermy, irony hammock ennui hashtag flannel intelligentsia tofu. Humblebrag ugh artisan, hashtag +1 church-key organic sustainable kinfolk...<a href="#">[ READ MORE ]</a></p>

  	    		<h3>Composting is cool!</h3>
  	    		<p>XOXO etsy echo park, food truck pickled whatever truffaut meggings bushwick kale chips street art fap. Tacos neutra asymmetrical cold-pressed keffiyeh, YOLO kombucha selfies PBR&B bitters meditation street art next level hammock humblebrag. Helvetica iPhone art party celiac, heirloom meditation health goth williamsburg. Pinterest shabby chic normcore taxidermy, irony hammock ennui hashtag flannel intelligentsia tofu. Humblebrag ugh artisan, hashtag +1 church-key organic sustainable kinfolk...<a href="#">[ READ MORE ]</a></p>

  	    		<h3>Composting is cool!</h3>
  	    		<p>XOXO etsy echo park, food truck pickled whatever truffaut meggings bushwick kale chips street art fap. Tacos neutra asymmetrical cold-pressed keffiyeh, YOLO kombucha selfies PBR&B bitters meditation street art next level hammock humblebrag. Helvetica iPhone art party celiac, heirloom meditation health goth williamsburg. Pinterest shabby chic normcore taxidermy, irony hammock ennui hashtag flannel intelligentsia tofu. Humblebrag ugh artisan, hashtag +1 church-key organic sustainable kinfolk...<a href="#">[ READ MORE ]</a></p>
  	    	</section>
  	    </main>
      </div>
    )
  }
}

export default News;