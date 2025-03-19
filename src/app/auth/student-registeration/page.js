"use client"
import { useState } from "react";

import Link from "next/link";
export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex justify-center items-center md:py-[55px] py-[45px] px-10 md:px-24 ">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-[500px]">
        <form onSubmit={handleSubmit}>
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "User Name", name: "username", type: "text" },
            { label: "E-Mail", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Password Confirmation", name: "confirmPassword", type: "password" },
          ].map(({ label, name, type }) => (
            <div className="mb-4" key={name}>
              <label className="block text-gray-700 mb-1">{label}</label>
              <input
                type={type}
                name={name}
                placeholder={label}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <div className="mb-4">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mr-2" />
            <span className="text-gray-600">
  By signing up, I agree with the website&apos;s{" "}
  <Link href="/terms" className="text-[#29AB87] hover:underline">
    Terms and Conditions
  </Link>
</span>

          </div>
          <button
            type="submit"
            className="w-full bg-[#29AB87] text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
