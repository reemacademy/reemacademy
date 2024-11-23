import React from 'react';
import Hero from '../components/Hero';
import SpecializedCourses from '../components/SpecializedCourses';
import TerminologyDisplay from '../components/TerminologyDisplay';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpecializedCourses />
      <TerminologyDisplay />
    </>
  );
}