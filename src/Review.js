import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  //default to 0 because arrays are index based
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return <h2>review component</h2>;
};

export default Review;
