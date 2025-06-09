import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Absolutely love the collection! The quality is top-notch and the delivery was super fast."
    },
    {
      name: "Rahul Verma",
      rating: 4,
      comment: "Great customer service and stylish clothes. Will shop again!"
    },
    {
      name: "Anita Gupta",
      rating: 5,
      comment: "The perfect place for trendy and comfortable outfits. Highly recommend Fabrico!"
    },
    {
      name: "Siddharth Rao",
      rating: 4,
      comment: "Good variety and affordable prices. The fit was exactly as described."
    },
    {
      name: "Neha Singh",
      rating: 5,
      comment: "I found my new favorite dress here. So happy with my purchase!"
    }
  ];

  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h3>{review.name}</h3>
          <p>Rating: {"⭐".repeat(review.rating)}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
