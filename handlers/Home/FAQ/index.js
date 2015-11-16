// require('../css/styles.css');

import React from 'react';
import {Link} from 'react-router';

class FAQ extends React.Component {

  render(): ?ReactElement {
    return (
    	<main className="faq">
	    	<section className="blue">
	    		<h1>FAQ</h1>
	    	</section>
	    	<section className="white">
	    		<h2>Composting Questions</h2>

	    		<p>
	    			<strong>What can I put in my compost bucket?</strong><br />
	    			If it was edible and it's not meat, bones, fat, or dairy - it goes in. Napkins, flowers, egg shells, coffee grinds...they’re all welcome at the party in your friendly Crown Town Compost bucket. Please no charcoal, animal/human feces or urine, or excessive amounts of liquids. For a comprehensive list of what can and cannot go in your bucket, please see this list.
	    		</p>

	    		<p>
	    			<strong>Who will the compost serve? Where will it be used?</strong><br />
	    			We are exploring options to return compost to our customers. The compost produced by the commercial food waste we collect will also be available for sale.
	    		</p>

	    		<p>
	    			<strong>What is your composting system?</strong><br />
	    			Some of our customers’ food waste is composted at our partner community gardens. All of our commercial customers’ food waste is composted at an industrial facility operated by our commercial composting partner. At community gardens, we utilize a variety of methods, but prefer to keep it simple. Our commercial composting partner uses a windrow system.
	    		</p>

	    		<p>
	    			<strong>Why compost?</strong><br />
	    			Composting has two major benefits: it diverts food waste from going to the landfill and it creates a nutrient-rich resource for growing plants. What was just another smelly item in your trash before is transformed into a life-giving powder keg of food for your garden.
	    		</p>

	    		<p>
	    			<strong>How does compost work?</strong><br />
	    			Composting processes vary widely but they all consist of a few basic steps:
	    			<br />
					1. Compostable waste is collected separately from other types of waste.
					<br />
					2. It is broken down by microorganisms, including bacteria and fungi.
					<br />
					3. It sits for a period time while the decomposition process finishes.
	    		</p>

	    		<p>
	    			<strong>Won’t my bucket start to smell?</strong><br />
	    			We do everything possible to minimize smell. Your bucket will be lined with a paper bag to absorb any liquid. Keeping the lid on your bucket when you’re not adding food scraps to it will minimize smell as well. We will swap out your bucket each week with a clean one as well.
	    		</p>

	    		<hr />

	    		<h2>Residential Service Questions</h2>

	    		<p>
	    			<strong>Can we use a different bucket for collection?</strong><br />
	    			Yes, absolutely, as long as you dump your materials into our bucket when you put it out for pickup.
	    		</p>

	    		<p>
	    			<strong>What happens if we miss our scheduled collection?</strong><br />
	    			No big deal! Missing a pickup is fine. We'll pick it up the first time for free so the contents of your bin don't get old. However, after the first time, we'll have to charge $5 to make the extra trip out to pick it up. 
	    		</p>

	    		<p>
	    			<strong>How big of an area do you serve? What if I live just outside the city?</strong><br />
	    			Our service area is ever-changing. Right now we serve the Wilmore neighborhood. If you’re interested in subscribing see if your address falls in our service area here or contact us.
	    		</p>

	    		<p>
	    			<strong>I live in an apartment, can I use Crown Town Compost’s services?</strong><br />
	    			We do offer apartment service, however, we need approval from your complex to begin this service. Provide us your personal contact info along with your apartment complex’s contact information and we will see what we can do. Contact us.
	    		</p>

	    		<p>
	    			<strong>What is the cost?</strong><br />
	    			The cost for a residential subscriber starts at $10/month. Commercial accounts require a cost-free waste audit to determine pricing.
	    		</p>

	    		<p>
	    			<strong>What do I do with my bucket on pickup day?</strong><br />
	    			Place it on your front doorstep, we will pick it up from there and replace it with a clean bucket.
	    		</p>

	    		<p>
	    			<strong>How big is the bucket I'll get?</strong><br />
	    			Four gallons--it can fit under most sinks.
	    		</p>

	    		<p>
	    			<strong>Will my neighbors get mad at me for putting a compost bucket outside my house?</strong><br />
	    			We provide a basic black bucket so that it will not be an eyesore for the few hours per week that it is sitting out on your doorstep. We are happy to accommodate any special needs if you would rather have us pick up your bucket from a more hidden spot at your residence.
	    		</p>

	    		<hr />

	    		<h2>Business and Other Service Questions</h2>
	    		<p>
	    			<strong>Can my office or business start composting with Crown Town Compost?</strong><br />
	    			We would love to see if we’re a fit for your needs. Drop us a line at crowntowncompost@gmail.com or give us a call (980.253.7670) to discuss how we can support you.
	    		</p>

	    		<p>
	    			<strong>How is a bike going to pick up from a restaurant? We produce a lot of waste.</strong><br />
	    			No need to worry, we can handle lots of waste. Actually, one bike will carry up to 130 gallons at a time from a restaurant to a drop site--this is enough to fill two large rollout containers.
	    		</p>

	    		<p>
	    			<strong>I work at or attend a local school. Can we start composting with Crown Town Compost?</strong><br />
	    			Let’s find a way to make it happen! E-mail us at crowntowncompost@gmail.com or call us at (980.253.7670).
	    		</p>

	    		<hr />

	    		<h2>About Crown Town Compost</h2>
	    		<p>
	    			<strong>Are you a non-profit or a for profit?</strong><br />
	    			We are a for-profit business.
	    		</p>

	    		<p>
	    			<strong>Can I volunteer with you?</strong><br />
	    			Always. Although it may not be directly with us, it will involve composting. This could be at one of our community gardens or another dropsite. We believe getting your hands dirty will bring us closer to solving major issues of our time. Shoot an email to crowntowncompost@gmail.com and we will work some magic.
	    		</p>

	    		<p>
	    			<strong>How many people are on your team?</strong><br />
	    			We currently have three co-founders operating the business.
	    		</p>
	    	</section>
	    </main>
    )
  }
}

export default FAQ;