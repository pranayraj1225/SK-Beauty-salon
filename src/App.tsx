/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import ServiceCards from './components/ServiceCards';
import ExperienceSection from './components/ExperienceSection';
import CourseFeature from './components/CourseFeature';
import Testimonials from './components/Testimonials';
import ReviewWall from './components/ReviewWall';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import BookAppointment from './components/BookAppointment';
import AppointmentCTA from './components/AppointmentCTA';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import RevealSection from './components/RevealSection';

export default function App() {
  return (
    <div className="font-dm bg-ivory text-charcoal min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <RevealSection><TrustBar /></RevealSection>
        <RevealSection><About /></RevealSection>
        <RevealSection><ServiceCards /></RevealSection>
        <RevealSection><ExperienceSection /></RevealSection>
        <RevealSection><CourseFeature /></RevealSection>
        <RevealSection><Testimonials /></RevealSection>
        <RevealSection><ReviewWall /></RevealSection>
        <RevealSection><Gallery /></RevealSection>
        <RevealSection><WhyChooseUs /></RevealSection>
        <RevealSection><BookAppointment /></RevealSection>
        <RevealSection><Location /></RevealSection>
        <RevealSection><AppointmentCTA /></RevealSection>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
