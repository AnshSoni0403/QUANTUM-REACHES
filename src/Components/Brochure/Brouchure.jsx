import React from 'react';
import './Brochure.css';
import bulb from '../Brochure/bulb.jpg';

const Brouchure = () => {
  return (
    <div id="brochure">
    <div id="container2">	
	
	<div class="product-details">
		
	<h1>OUR BROCHURE</h1>
	
		
			<p class="information">"Crafted within our brochure, discover comprehensive details on our array of services, transparent pricing structures, accessible contact information, and an insight into our esteemed clientele." </p>

		
		
<div class="control">
	
	<button class="btn">
	 <span class="price"></span>
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <a href="https://drive.google.com/file/d/18uYHthhGVVWnwvTzF9EoO5jdCNY1IDHs/view?usp=sharing"><span class="buy">View Now!</span></a>
 </button>
	
</div>
			
</div>
	
<div class="product-image">
	
	<img src={bulb} alt=""></img>
    
	

{/* <div class="info">
	<h2> Description</h2>
	<ul>
		<li><strong>Height : </strong>5 Ft </li>
		<li><strong>Shade : </strong>Olive green</li>
		<li><strong>Decoration: </strong>balls and bells</li>
		<li><strong>Material: </strong>Eco-Friendly</li>
		
	</ul>
</div> */}
</div>

</div>
      
    </div>
  );
}

export default Brouchure;
