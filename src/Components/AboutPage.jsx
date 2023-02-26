import React, { useEffect } from 'react';

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0, behavior: "smooth"
    })
  }, [])


  return (
    <div id="aboutPageContainer">
      <div className="container">
        <div className="about_wrapper">
          <div id="aboutus">
            <h1> About us </h1>
            <p>
              Is food your first and last love? Happily over stuffed? A born traveller and foodie?
              Of all the places that you visit, food forms an essential part of your itinerary. Having visited the fanciest starred hotels, top-rated Trip advisor haunts and the tiniest holes-in-the-walls of the world, your insatiable love for food has grown stronger by the day? Whether it’s ‘Nani ke haath ke paranthe ’,‘ Rajasthan ka Ghevar ’,‘ Kolkata ki Misthi doi or ‘Mathura ke pede’ doesn’t matter. You can’t resist the thought of them even in your daydreams!

              Allow us to take you on a journey so epic, that it would make you happy and help you relive your Golden days. Dil-o-cious extends it from delicious sweets of north India to hot spices of the South. Witness the journey of food from their place of origin to your dinner plate.

              But what can be more exciting than the food which elevates the level of fun and passion in you and your life? A smile. Yes, it is everything that can change the stressed you into a happy you and we present to you some of the food items that definitely bring smile on your face.
            </p>
          </div>
          <div id="whoweare">
            <h1> Who We Are </h1>
            <p>
              We are an exotic food delivery service which provides you with the specialities of any place you can think of. It sources the authentic food products from the places that they are native to. Not only you can book the products for yourself but also can request them to be gift wrapped and delivered it to your relatives or loved ones.

              There are many Indian cities that can boast of foods that can only be found there. You visited a friend’s house in Mumbai and you shared your lives over an astounding wine in Taj, or when you were in Darjeeling with your special one, the smell of tea leaves is still fresh in your mind, don’t worry we have covered it all for you. It’s just not a service but the incarnation of culture. We want to bring unity with bringing diverse food culture closer and together.

              You can open our website. Find out your favourite mouth-watering delicacy from the Vendor which is famous for making it the best, book it and Boom! You will have the dish delivered to your dining table in a specified amount of time. The delivery will be absolutely free within 2 to 3 days and the dish will be available for booking at the local rates with some extra incentives included. Now you can be in Kerala and still can have the spicy Bikaneri Bhujia that is famous in Bikaner or people in Ahmedabad can take a bite of the most succulent of dishes like Soan Papdi from North without a fuss.
            </p>
          </div>
          <div id="whatwedo">
            <h1> What We Do </h1>
            <p>
              Dil-o-cious is making a profile of Indian cities that are famous for foods that are very unique. This includes cities from across India, big and small. Some of these dishes are streets foods and others are gourmet delicacies. In the end, it is all about your taste buds. If you are foodie, this is the perfect way to plan your 'food fantasy' across the Indian subcontinent. After all, in the end, in our own tradition, food is something holy. It's not just about nutrients and calories. It's about sharing. It's about honesty. It's about identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage