const Reviews = ( { reviewRef } ) => {

    // const handleScroll = (ref) => {
	// 	window.scrollTo({
	// 		top: ref.offsetTop,
	// 	});
	// };

    return ( 
        <section>
            <div id="reviews" className="reviews" ref={reviewRef}>
                <h1>Reviews</h1>
            </div>
        </section>
     );
}
 
export default Reviews;