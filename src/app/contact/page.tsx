"use client";
import React from "react";
import Feature from "@/components/Feature";

const ContactPage: React.FC = () => {
  return (
    <>
      {/* ✅ Custom Brand Banner */}
      <div className="bg-[#F9F1E7] py-12 text-center mt-20">
        <h1 className="text-[32px] sm:text-[38px] font-semibold text-gray-800">
          Contact <span className="text-[#B88E2F]"> LK Collections</span>
        </h1>
        <p className="text-gray-600 text-[16px] mt-2 max-w-[600px] mx-auto">
          We’d love to hear from you — reach out anytim
        </p>
      </div>

      {/* ✅ Contact Info Section */}
      <div className="flex flex-col items-center justify-center mt-16 px-4 text-center text-gray-700 space-y-4">
        <p className="text-[18px]">
          <p className="text-pink-700 text-base mb-2">
  If you’d like to customize any collection shown on our website, please contact us at this number and email.
</p>
          📞 <span className="font-semibold">Phone:</span> +92 3061102155
        </p>
        <p className="text-[18px]">
          ✉️ <span className="font-semibold">Email:</span> ayyanahmer@gmail.com
        </p>
      </div>

      {/* ✅ Features Section */}
      <Feature />
    </>
  );
};

export default ContactPage;
