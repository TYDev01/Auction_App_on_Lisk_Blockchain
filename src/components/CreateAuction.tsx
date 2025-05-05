import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function CreateAuction() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: 1,
    startTime: "",
    endTime: "",
    amount: 0,
    image: null as File | null,
    previewImage: "" as string | null
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "quantity" || name === "amount" ? Number(value) : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ 
        ...prev, 
        image: file,
        previewImage: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auction data:", formData);
    alert("Auction created successfully!");
    navigate("/");
  };

  return (
    <>
        <Navbar />
        <div className="flex min-h-screen">
        
        {/* Sidebar positioned to the left */}
        <div className="w-50 p-4">
          <Sidebar />
        </div>
  
        {/* Main content area with form and image upload */}
        <div className="flex-1 flex p-6 gap-8">
          {/* Form section */}
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-6">Create New Auction</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Item Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows={3}
                  required
                />
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium mb-1">Price (ETH)</label>
                  <input
                    type="number"
                    name="amount"
                    min="0"
                    step="0.01"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
  
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Time</label>
                  <input
                    type="datetime-local"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium mb-1">End Time</label>
                  <input
                    type="datetime-local"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
  
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-purple-800 transition-all"
              >
                Create Auction
              </button>
            </form>
          </div>
  
          {/* Image upload section - larger and on the right */}
          <div className="w-1/2">
            <div className="sticky top-6">
              <label className="block text-lg font-medium mb-4">Item Image Preview</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-96">
                {formData.previewImage ? (
                  <img 
                    src={formData.previewImage} 
                    alt="Preview" 
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <svg
                      className="mx-auto h-12 w-12"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-2">Upload an image of your item</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-4 w-full p-2 border rounded hidden"
                  id="image-upload"
                  required
                />
                <label
                  htmlFor="image-upload"
                  className="mt-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-purple-800 transition-all cursor-pointer"
                >
                  Choose Image
                </label>
                {formData.image && (
                  <p className="mt-2 text-sm text-gray-500">{formData.image.name}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}