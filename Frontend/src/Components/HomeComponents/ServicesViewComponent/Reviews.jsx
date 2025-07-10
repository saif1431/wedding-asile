import { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-6  mb-6 border-b border-gray-200">
      <div className="flex items-start gap-12 mb-4">
        <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {review.initials}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{review.names}</h2>
          <p className="text-gray-500">{review.date}</p>
          <div className="flex mt-2">
            {[...Array(review.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-gray-700 mb-4">
        {isExpanded ? review.text : `${review.text.slice(0, 100)}...`}
      </div>
      
      {review.text.length > 100 && (
        <button 
          onClick={toggleExpand}
          className="text-pink-600 hover:text-pink-800 font-medium"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      initials: 'G',
      names: 'Gurdip & Bobby',
      date: '07 September 2024',
      rating: 5,
      text: "Thank you Satty for providing an excellent service to us. We felt very comfortable on the day and enjoyed taking our photos. You captured some really special moments that we'll treasure forever. The attention to detail and your creative eye made all the difference in our wedding photos. We couldn't be happier with the results!"
    },
    {
      id: 2,
      initials: 'A',
      names: 'Amit & Priya',
      date: '15 August 2024',
      rating: 5,
      text: "Absolutely amazing experience! The photos turned out better than we could have imagined."
    },
    {
      id: 3,
      initials: 'R',
      names: 'Rahul & Sneha',
      date: '22 July 2024',
      rating: 4,
      text: "Great service overall. The photographer was professional and made us feel at ease. Only minor complaint would be that some group photos took longer to organize than expected, but the final results were worth it."
    }
  ];

  return (
    <div className="p-4">
      <p className='text-gray-500 border-b w-fit border-gray-500 p-2'>Reviews</p>
      <div className="mt-8">
        {reviewData.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;