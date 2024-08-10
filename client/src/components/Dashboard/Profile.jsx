import React, { useState } from "react";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Omi Vaish",
    email: "omiiiitk@gmail.com",
    batchYear: "2021",
    hostel: "Manimala",
    phone: "8528326739",
    room: "224",
    profilePic: null, // Add a property to store the profile picture
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here, you can add logic to save changes to a server or database if needed
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Optionally, reset changes to discard edits
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prevState) => ({
          ...prevState,
          profilePic: reader.result, // Store the base64-encoded image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" p-14 px-24  border rounded shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className=" text-3xl font-semibold">Personal Profile</h2>
      </div>

      <div className="flex items-center mb-4 gap-10">
        <div className="flex-shrink-0">
          {userInfo.profilePic ? (
            <img
              src={userInfo.profilePic}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover"
            />
          ) : (
            <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}

          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block text-sm mt-2 w-48"
            />
          )}
        </div>

        <div className="ml-4 flex-1">
          <label className="block text-sm font-medium"></label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block text-5xl bg-white`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Batch Year:</label>
          <input
            type="number"
            name="batchYear"
            value={userInfo.batchYear}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Hostel:</label>
          <select
            name="hostel"
            value={userInfo.hostel}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          >
            <option value="Manimala">Manimala</option>
            <option value="Shayadri">Shayadri</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Phone:</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Room No:</label>
          <input
            type="text"
            name="room"
            value={userInfo.room}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        {isEditing ? (
          <>
            <button
              onClick={handleCancelClick}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveClick}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
