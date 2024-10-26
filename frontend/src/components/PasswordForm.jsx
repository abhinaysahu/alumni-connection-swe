import React, { useState } from "react";
import { Button, Label } from "flowbite-react";

export default function PasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!isCurrentPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!isNewPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="mb-4">
        <Label htmlFor="currentPassword" value="Current Password" />

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
        <Label htmlFor="newPassword" value="New Password" />
        <div className="relative">
          <input
            type={isNewPasswordVisible ? "text" : "password"}
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
          <button
            type="button"
            onClick={toggleNewPasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {isNewPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <br></br>
      <Button type="submit">Update Password </Button>
    </form>
  );
}
