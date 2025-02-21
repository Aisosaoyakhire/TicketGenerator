import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

// StepProgress Component
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

const Step1 = () => {
  const [selectedTicket, setSelectedTicket] = useState("Regular Access");
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const tickets = [
    { price: "Free", type: "REGULAR ACCESS", available: 20 / 52 },
    { price: "$50", type: "VIP ACCESS", available: 20 / 52 },
    { price: "$150", type: "VVIP ACCESS", available: 20 / 52 },
  ];

  const handleNext = () => {
    if (selectedTicket) {
      const attendeeData = {
        selectedTicket,
        ticketCount,
      };
      localStorage.setItem("attendeeData", JSON.stringify(attendeeData));
      navigate("/step2");
    }
  };

  return (
    <div className="min-h-screen bg-[#02191D]">
      {/* Navbar */}
      <div className="px-6 md:px-20">
        <Navbar />
      </div>

      {/* Main Container */}
      <div className="container flex justify-center items-center mx-auto p-4 md:p-6">
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3 bg-[#041E23] border border-[#24A0B5] mt-10 md:mt-20 text-white p-6 rounded-2xl shadow-md">
          <div className="flex flex-col sm:flex-row justify-between w-full text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Ticket Selection
            </h2>
            <p className="text-sm sm:text-base">Step 1/3</p>
          </div>
          <StepProgress step={currentStep} />

          {/* Event Details */}
          <div className="text-center w-full bg-[#08252B] border border-[#24A0B5] mt-6 md:mt-12 p-4 md:p-6 rounded-2xl">
            <div className="border border-[#24A0B5] rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Techember Fest '25
              </h1>
              <p className="pt-2 text-sm md:text-base">
                Join us for an unforgettable experience at
              </p>
              <p className="text-sm md:text-base">
                [Event name] Secure your spot now.
              </p>
              <p className="pt-2 text-sm md:text-base">
                📍 Event Location | March 15, 2025 | 7:00 PM
              </p>
            </div>
            <hr className="border-t-2 border-[#07373F] my-3 md:my-4" />

            {/* Ticket Selection */}
            <div className="w-full">
              <h3 className="font-medium text-left pb-2 md:pb-3">
                Select Ticket Type:
              </h3>
              <div className="bg-[#052228] p-3 border border-[#07373F] rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-3">
                  {tickets.map((ticket) => (
                    <button
                      key={ticket.type}
                      className={`p-2 border border-[#24A0B5] rounded-lg w-full ${
                        selectedTicket === ticket.type
                          ? "bg-[#12464E] text-white"
                          : "bg-[#052228]"
                      }`}
                      onClick={() => setSelectedTicket(ticket.type)}
                      aria-label={`Select ${ticket.type} ticket`}
                    >
                      <span className="font-bold text-lg">{ticket.price}</span>
                      <p className="text-sm md:text-base">{ticket.type}</p>
                      <p className="text-sm md:text-base">
                        Available: {(ticket.available * 52).toFixed(0)}/52
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket Count Selection */}
            <div className="mt-4 text-left w-full">
              <label className="block font-medium" htmlFor="ticketCount">
                Number of Tickets
              </label>
              <select
                id="ticketCount"
                aria-label="Select number of tickets"
                className="p-2 border border-[#24A0B5] bg-[#02191D] rounded w-full"
                value={ticketCount}
                onChange={(e) => setTicketCount(Number(e.target.value))}
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
              <button
                className="p-2 w-full sm:w-1/2 bg-[#02191D] border border-[#24A0B5] text-white rounded"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button
                className={`p-2 w-full sm:w-1/2 ${
                  selectedTicket
                    ? "bg-[#24A0B5] text-white"
                    : "bg-gray-500 cursor-not-allowed"
                } rounded`}
                onClick={handleNext}
                disabled={!selectedTicket}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
