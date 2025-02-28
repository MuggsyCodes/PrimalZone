import Image from "next/image";

import Hero from "@/components/home/Hero";
import CustomerReviews from "@/components/home/CustomerReviews";
import FAQs from "@/components/home/FAQs";
import GotBlood from "@/components/home/GotBlood";
import HealthJourneys from "@/components/home/HealthJourneys";
import NotFeelingYourself from "@/components/home/NotFeelingYourself";
import OurTreatments from "@/components/home/OurTreatments";
import OurValues from "@/components/home/OurValues";
import SocialMedia from "@/components/home/SocialMedia";
import TalkToUs from "@/components/home/TalkToUs";
import TreatmentProcess from "@/components/home/TreatmentProcess";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main>
      <Hero />
      <NotFeelingYourself />
      <OurTreatments />
      <GotBlood />
      <TreatmentProcess />
      <TalkToUs />
      <HealthJourneys />
      <OurValues />
      <FAQs />
      <CustomerReviews />
      <SocialMedia />
      <Chatbot />
    </main>
  );
}
