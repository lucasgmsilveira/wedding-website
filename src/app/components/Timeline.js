'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const TimelineItem = ({ title, date, description, imageUrl, isLeft }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-content">
        <Image src={imageUrl} alt={title} width={300} height={200} className="timeline-image" />
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-date">{date}</p>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem key={index} {...event} isLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Timeline;