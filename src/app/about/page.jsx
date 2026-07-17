"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, RefreshCw, HelpCircle, Building } from "lucide-react";
import toast from "react-hot-toast";

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Corporate inquiry routed successfully. A representative will contact you shortly.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0E0E10] py-16 md:py-24">
      <Container>
        
        {/* --- DIGNIFIED HERO SECTION --- */}
        <div className="max-w-4xl mb-16 bg-white p-8 md:p-12 border border-[#EBEBE8] rounded-2xl shadow-sm mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#C97A4A] font-bold mb-4 block">
            Corporate Profile
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#0E0E10]">
            Commitment to Structural Integrity, Sustainable Value, and Exceptional Architecture.
          </h1>
          <p className="text-[#8A8578] text-base md:text-lg leading-relaxed max-w-3xl">
            Established on the principles of operational excellence and architectural precision, our organization serves as a premium benchmark in high-quality design and retail distribution. We operate through completely transparent supply matrices, ensuring every product reflects strict international quality compliance.
          </p>
        </div>

        {/* --- STRATEGIC PILLARS / VALUE GRID --- */}
        <h2 className="font-serif text-2xl font-bold mb-8 text-[#0E0E10] px-2">Core Corporate Tenets</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-[#EBEBE8] rounded-xl p-6 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#FAFAF8] rounded-lg flex items-center justify-center text-[#C97A4A] border border-[#EBEBE8]">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold">Quality Assurance</h3>
            <p className="text-sm text-[#8A8578] leading-relaxed">
              Every production lot undergoes rigorous multi-point stress and durability evaluation protocols, ensuring adherence to our strict internal criteria.
            </p>
          </div>
          
          <div className="bg-white border border-[#EBEBE8] rounded-xl p-6 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#FAFAF8] rounded-lg flex items-center justify-center text-[#C97A4A] border border-[#EBEBE8]">
              <RefreshCw size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold">Sustainable Logistics</h3>
            <p className="text-sm text-[#8A8578] leading-relaxed">
              We coordinate exclusively with ecologically compliant mills and ethical textile networks to eliminate structural waste patterns across our footprint.
            </p>
          </div>

          <div className="bg-white border border-[#EBEBE8] rounded-xl p-6 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-[#FAFAF8] rounded-lg flex items-center justify-center text-[#C97A4A] border border-[#EBEBE8]">
              <Building size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold">Direct Capital Efficiency</h3>
            <p className="text-sm text-[#8A8578] leading-relaxed">
              Our direct-to-client operations pipeline effectively rationalizes logistical resource allocation, transferring margin savings to our end clients.
            </p>
          </div>
        </div>

        {/* --- COMMUNICATIONS & CLIENT SERVICES HUB --- */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Communications Infrastructure & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#EBEBE8] rounded-xl p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-4">Corporate Channels</h2>
              <p className="text-[#8A8578] text-sm mb-6">
                Please route formal communiqués, media validation queries, or institutional procurement requests through our administrative divisions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-[#FAFAF8] border border-[#EBEBE8] rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#EBEBE8] rounded-lg flex items-center justify-center text-[#0E0E10]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#8A8578] font-semibold">General Administration</p>
                    <p className="text-sm font-medium">corporate@yourstore.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-[#FAFAF8] border border-[#EBEBE8] rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#EBEBE8] rounded-lg flex items-center justify-center text-[#0E0E10]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#8A8578] font-semibold">Operations Switchboard</p>
                    <p className="text-sm font-medium">+1 (800) 555-0192</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-[#FAFAF8] border border-[#EBEBE8] rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#EBEBE8] rounded-lg flex items-center justify-center text-[#0E0E10]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#8A8578] font-semibold">Headquarters & Atelier</p>
                    <p className="text-sm font-medium">404 Minimalist Way, Suite 100, NY</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-[#FAFAF8] border border-[#EBEBE8] rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-white border border-[#EBEBE8] rounded-lg flex items-center justify-center text-[#0E0E10]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#8A8578] font-semibold">Standard Operating Hours</p>
                    <p className="text-sm font-medium">Mon - Fri, 09:00 – 17:00 EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Matrix Card */}
            <div className="bg-[#EBEBE8]/40 border border-[#EBEBE8] rounded-xl p-6">
              <h3 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
                <HelpCircle size={18} className="text-[#C97A4A]" /> Institutional Support Matrix
              </h3>
              <div className="space-y-4 text-xs">
                <div className="border-b border-[#EBEBE8] pb-3 last:border-0 last:pb-0">
                  <h4 className="font-bold text-[#0E0E10]">What are the typical lead times for corporate logistics?</h4>
                  <p className="text-[#8A8578] mt-1">Standard dispatch timelines take 1–2 cycles; bulk freight routing is structured according to customized service level agreements.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0E0E10]">How are institutional returns handled?</h4>
                  <p className="text-[#8A8578] mt-1">We maintain an official 30-day compliance window for structural review, exchanges, or merchant account updates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Contact Input Portal */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-[#EBEBE8] rounded-2xl shadow-sm h-fit">
            <h3 className="font-serif text-2xl font-bold mb-2">Communications Portal</h3>
            <p className="text-xs text-[#8A8578] mb-8">Please declare your organizational profile and input specifications below to ensure correct internal routing.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase font-semibold text-[#8A8578] mb-2 tracking-wider">
                  Full Name / Entity Authorized Signatory
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAFAF8] border border-[#EBEBE8] text-sm text-[#0E0E10] rounded-lg focus:outline-none focus:border-[#0E0E10] focus:bg-white transition-all duration-200"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase font-semibold text-[#8A8578] mb-2 tracking-wider">
                  Official Corporate Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAFAF8] border border-[#EBEBE8] text-sm text-[#0E0E10] rounded-lg focus:outline-none focus:border-[#0E0E10] focus:bg-white transition-all duration-200"
                  placeholder="j.doe@organization.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-semibold text-[#8A8578] mb-2 tracking-wider">
                  Detailed Operational Overview / Brief
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAFAF8] border border-[#EBEBE8] text-sm text-[#0E0E10] rounded-lg focus:outline-none focus:border-[#0E0E10] focus:bg-white transition-all duration-200 resize-none"
                  placeholder="Please specify transaction parameters, structural sizes, or administrative requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0E0E10] hover:bg-[#2A2A2C] text-white py-4 text-sm font-semibold rounded-lg tracking-wider transition-all duration-200 flex items-center justify-center disabled:opacity-50 shadow-md"
              >
                {isSubmitting ? "Routing to Specialized Division..." : "Submit Formal Inquiry"}
              </button>
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
}