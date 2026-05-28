"use client";  // Necesario para usar useState, efectos, etc.


import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import ProductSearch from "@/components/ProductSearch";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ProductSearch />
      <Benefits />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}