"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function YouTubeUploader() {
  const [videoLinks, setVideoLinks] = useState(["", "", "", "", ""]);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleInputChange = (index, value) => {
    const newLinks = [...videoLinks];
    newLinks[index] = value;
    setVideoLinks(newLinks);
  };

  const handleUpload = () => {
    const validVideos = [];

    videoLinks.forEach((link) => {
      if (link.trim()) {
        const videoId = extractVideoId(link.trim());
        if (videoId) {
          validVideos.push({
            id: videoId,
            url: link.trim(),
            embedUrl: `https://www.youtube.com/embed/${videoId}`,
          });
        }
      }
    });

    if (validVideos.length > 0) {
      setUploadedVideos(validVideos);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleDeleteVideo = (videoId) => {
    setUploadedVideos(uploadedVideos.filter((video) => video.id !== videoId));
  };

  return (
    <div className="w-full py-14 px-6 bg-white  min-h-screen">
      <div className="">
        <h1 className="text-xl font-medium text-gray-800 mb-6">
          Paste YouTube Video Links Here
        </h1>

        <div className="flex items-center flex-col lg:flex-row gap-8">
          {/* Left side - Input fields */}
          <div className="flex-1">  
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="space-y-4">
                {videoLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gray-600 font-medium">{index + 1}.</span>
                    <input
                      type="text"
                      placeholder="Paste YouTube link here..."
                      value={link}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      className="flex-1 bg-gray-100 border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Upload button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleUpload}
              className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-3 font-medium transition-colors"
            >
              Upload Videos
            </button>
          </div>
        </div>

        {/* Success message */}
        {showSuccess && (
          <div className="mt-6">
            <p className="text-green-600 font-medium">Video uploaded successfully!</p>
          </div>
        )}
      </div>

      {/* Uploaded Videos Section */}
      {uploadedVideos.length > 0 && (
        <div className="mt-8 space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uploadedVideos.map((video) => (
            <div
              key={video.id}
              className=" relative"
            >
           

              <div className="aspect-video  relative">
                <iframe
                  src={video.embedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
                   <button
                onClick={() => handleDeleteVideo(video.id)}
                className="absolute -top-2 -right-4 z-10 bg-red-100 hover:bg-red-200 rounded-full p-2 transition-colors"
              >
                <Trash2 className="h-4 w-4 text-red-600" />
              </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}