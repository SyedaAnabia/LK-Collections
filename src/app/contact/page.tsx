"use client";
import React from "react";
import Feature from "@/components/Feature";

const ContactPage: React.FC = () => {
  return (
    <>
      {/* ✅ Custom Brand Banner */}
      <div className="bg-[#F9F1E7] py-12 text-center mt-20">
        <h1 className="text-[32px] sm:text-[38px] font-semibold text-gray-800">
          Contact <span className="text-[#B88E2F]">LK Collections</span>
        </h1>
        <p className="text-gray-600 text-[16px] mt-2 max-w-[600px] mx-auto">
          Have questions or want to customize your outfit? We’re here to help!
        </p>
      </div>

      {/* ✅ Contact Info Section */}
      <div className="flex flex-col items-center justify-center mt-16 px-4 text-center text-gray-700 space-y-4">
        <p className="text-[18px] leading-relaxed max-w-[600px]">
          <span className="text-pink-700 text-base mb-2 block">
            Want to personalize any dress from our collection?  
            You can easily reach out to us through WhatsApp or Email for all customization requests.
          </span>
        </p>

        <p className="text-[18px]">
          📞 <span className="font-semibold">Phone / WhatsApp:</span>{" "}
          <a
            href="https://wa.me/923061102155"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            +92 306 1102155
          </a>
        </p>

        <p className="text-[18px]">
          ✉️ <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:ayyanahmer@gmail.com"
            className="text-blue-600 hover:underline"
          >
            lakhilaba12@gmail.com
          </a>
        </p>

        <p className="text-gray-600 text-[16px] mt-4 max-w-[600px]">
          Share your preferred color, size, or any special design idea —  
          we’ll make it exactly how you want it.
        </p>
      </div>

      {/* ✅ Features Section */}
      <Feature />
    </>
  );
};

export default ContactPage;
