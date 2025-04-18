"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import RichTextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";

export default function EditTrainingPage({ params }) {
  const router = useRouter();
  const { id } = params;
  console.log(id)

  const [trainingName, setTrainingName] = useState("");
  const [trainingCategory, setTrainingCategory] = useState("");
  const [oldTrainingCategory, setOldTrainingCategory] = useState("")
  const [trainingDetails, setTrainingDetails] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = {
    tiktok : "TikTok Shop Training",
    ebay : "eBay Training",
    etsy : "Etsy Training"
  }





  // Fetch blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`/api/training/get_trainingById?id=${id}`);
        const { trainingName, trainingDetails, trainingCategory, imageUrl } = response.data;
        console.log(response.data); // Debugging
  
        setTrainingName(trainingName);
        setTrainingCategory(trainingCategory);
        setTrainingDetails(trainingDetails);
  
        // Ensure correct image handling
        if (imageUrl) {
          setImagePreview(imageUrl);
        }

        if(trainingCategory){
             const splitCategory = trainingCategory.split("-");
            setOldTrainingCategory(splitCategory[0]);
            console.log(oldTrainingCategory);
        }

         
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
  
    fetchBlogData();
  }, [id]);
  

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Show preview
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", tags);
      formData.append("description", description);
      if (image) formData.append("image", image);

      await axios.patch(`/api/blog/update_blog?id=${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      router.push("/dashboard/admin/blog"); // Redirect to blog list after success
      toast.success("Blog updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={trainingName}
          onChange={(e) => setTrainingName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* select training */}
         <select name="cars" id="cars" onChange={(e) => (setTrainingCategory(e.target.value))}
            className="w-full p-2 border rounded">
                
            <option value={trainingCategory}>{categories.oldTrainingCategory}</option>
            <option value="tiktok-shop-training">TikTok Shop Training</option>
            <option value="ebay-training">eBay Training</option>
            <option value="etsy-training">Etsy Training</option>
        </select>

        {/* Tags */}
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={trainingDetails}
          onChange={(e) => setTrainingDetails(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-40 object-cover rounded"
          />
        )}

        {/* Rich Text Editor for Description */}
        {/* <RichTextEditor value={description} onChange={setDescription} /> */}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Updating..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
