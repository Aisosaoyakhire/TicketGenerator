import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const StepProgress = ({ step }) => {
  return (
    <div className="w-full my-4">
      <div className="relative w-full h-3 bg-gray-700 rounded-lg">
        <div
          className="absolute h-3 bg-[#24A0B5] rounded-lg transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const Step2 = () => {
  const navigate = useNavigate();
  const [attendee, setAttendee] = useState(null);
  const [currentStep, setCurrentStep] = useState(2);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const avatar = watch("avatar");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("attendeeData"));
    if (!storedData) {
      navigate("/"); // Redirect if no data
    } else {
      setAttendee(storedData);

      // Prepopulate form fields if available
      setValue("avatar", storedData.avatar || "");
      setValue("name", storedData.name || "");
      setValue("email", storedData.email || "");
    }
  }, [navigate, setValue]);

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("attendeeData")) || {};
    localStorage.setItem(
      "attendeeData",
      JSON.stringify({ ...storedData, ...data })
    );
    navigate("/step3");
  };

  if (!attendee) return null;

  return (
    <div className="min-h-screen bg-[#02191D]">
      <div className="px-6 md:px-20">
        <Navbar />
      </div>
      <div className="container flex justify-center items-center mx-auto p-4 md:p-6">
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3 bg-[#041E23] border border-[#24A0B5] mt-10 md:mt-20 text-white p-6 rounded-2xl shadow-md">
          <div className="flex flex-col sm:flex-row justify-between w-full text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Attendance Details
            </h2>
            <p className="text-sm sm:text-base">Step 2/3</p>
          </div>

          <StepProgress step={currentStep} />

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            {/* Avatar Input */}
            <label className="block text-sm font-medium mb-2">
              Upload Profile Photo
            </label>
            <input
              type="url"
              {...register("avatar", {
                required: "Avatar URL is required",
                pattern: {
                  value: /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i,
                  message:
                    "Invalid image URL (must end with jpg, jpeg, png, or gif)",
                },
              })}
              className="w-full p-2 border rounded bg-gray-700 text-white"
              placeholder="Enter Cloudinary image URL"
            />
            {errors.avatar && (
              <p className="text-red-500 text-sm">{errors.avatar.message}</p>
            )}

            {/* Name Input */}
            <label className="block text-sm font-medium mt-4">
              Enter your name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded bg-gray-700 text-white"
              placeholder="Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            {/* Email Input */}
            <label className="block text-sm font-medium mt-4">
              Enter your email *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 border rounded bg-gray-700 text-white"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => navigate("/step1")}
                className="px-4 py-2 bg-gray-600 rounded"
              >
                Back
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-500 rounded">
                Get My Free Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
