import React, { useState } from "react";

export default function PasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!isCurrentPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="mb-4">
        <label
          htmlFor="currentPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Current Password
        </label>
        <div className="relative">
          <input
            type={isCurrentPasswordVisible ? "text" : "password"}
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
          <button
            type="button"
            onClick={toggleCurrentPasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {isCurrentPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {isConfirmPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <br></br>
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Update Password
      </button>
    </form>
  );
}
