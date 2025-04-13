'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export function TestimonialsDemo() {
  return (
    <div className='relative  '>
      <div className='flex flex-col antialiased scroll-pl-36 snap-x justify-center gap-6 min-w-full snap-start'>
        <div className='snap-start'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='fast'
          />
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction='left'
          speed='fast'
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      '🚀 His knowledge and experience is a life saver for our team. Hard working person, who approaches the solution to a problem in a strategic and efficient manner.',
    username: '@sukritin',
    name: 'Sukritin Pal',
    linkedIn: 'https://www.linkedin.com/in/sukritin/',
  },
  {
    quote:
      '🔥 Completed many projects from Api integration to live streaming. Top notch and highly performant!',
    username: '@harshtyagimdr',
    name: 'Harsh Tyagi',
    linkedIn: 'https://www.linkedin.com/in/harshtyagimdr/',
  },
  {
    quote: '🌟 Harsh has single handedly handled the backend of a complex platform, showing leadership & top notch development skills',
    username: '@ketan-parikh-2173b4117',
    name: 'Ketan Parikh',
    linkedIn: 'https://www.linkedin.com/in/ketan-parikh-2173b4117/',
  },
  {
    quote:
      '💻 Very hardworking and talented person, quite a good knowledge of Backend. Always ready to take challenges and a very fast learner. He is a valuable asset to any company !!',
    username: '@arnima-b27',
    name: 'Arnima Aggarwal',
    linkedIn: 'https://www.linkedin.com/in/arnima-b27/',
  },
  {
    quote:
      '🔧 The user interfaces harsh has designed are highly intuitive and user friendly. Highly recommended!',
    username: '@abhina-s',
    name: 'Abhina S',
    linkedIn: 'https://www.linkedin.com/in/abhina-s/',
  },
  {
    quote:
      '🔧 Harsh is a talented backend developer with a knack for delivering efficient, high-quality code',
    username: '@agrawalharsh90',
    name: 'Harsh Agrawal',
    linkedIn: 'https://www.linkedin.com/in/agrawalharsh90',
  },
];
