'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

// Define the type for each object in the array
type DataItem = {
  id: string;
  name: string;
  level: string;
  category: string;
  primaryMuscles: string[];
  instructions: string[];
  images: string[];
};

const Home: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [showError, setShowError] = useState<boolean>(false); // Error state

  // Fetch data automatically on component mount
  useEffect(() => {
    axios
      .get("/apifolder/exercises/Myapi.json")
      .then((response) => {
        const fetchedData: DataItem[] = response.data;
        setData(fetchedData);
        setFilteredData(fetchedData); // Initially show all exercises

        // Initialize current image index and expanded state for each exercise
        const initialImageIndex: { [key: string]: number } = {};
        const initialExpandedState: { [key: string]: boolean } = {};
        fetchedData.forEach((item) => {
          initialImageIndex[item.id] = 0;
          initialExpandedState[item.id] = false;
        });
        setCurrentImageIndex(initialImageIndex);
        setExpandedCards(initialExpandedState);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handler for navigating to the next image
  const handleNextImage = (id: string, imagesLength: number): void => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % imagesLength, // Loop back to the first image
    }));
  };

  // Handler for navigating to the previous image
  const handlePrevImage = (id: string, imagesLength: number): void => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + imagesLength) % imagesLength, // Loop back to the last image
    }));
  };

  // Toggle instructions expansion
  const toggleExpand = (id: string): void => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Search handler
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter exercises based on level or category
    const filtered = data.filter(
      (item) =>
        item.level.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    setFilteredData(filtered);

    // If no results match the search, show the error message
    setShowError(filtered.length === 0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Search Box */}
      <div className="mb-6 w-full max-w-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by level or category of Exercises"
          className="w-full p-3 border rounded-lg shadow-md"
        />
      </div>

      {/* Error Message */}
      {showError && (
        <div className="mb-4 p-4 bg-red-200 text-red-700 rounded-lg">
          <strong>Oops!</strong> No results found. Please check your search term.
        </div>
      )}

      <h1 className="text-4xl font-bold mb-6 text-gray-800">Exercise Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            {/* Exercise Name */}
            <h2 className="text-xl font-semibold mb-4 text-gray-700">{item.name}</h2>

            {/* Image Slider */}
            <div className="relative w-full h-64 flex items-center justify-center overflow-hidden rounded-lg mb-4">
              <Image
                src={`/apifolder/exercises/${item.images[currentImageIndex[item.id]]}`}
                alt={item.name}
                width={400} // Set a fixed width
                height={256} // Set a fixed height
                className="object-cover rounded-md"
              />
              {item.images.length > 1 && (
                <>
                  <button
                    onClick={() => handlePrevImage(item.id, item.images.length)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                  >
                    ◀
                  </button>
                  <button
                    onClick={() => handleNextImage(item.id, item.images.length)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>

            {/* Exercise Details */}
            <div className="text-gray-700 text-sm">
              <p><strong>Level:</strong> {item.level}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Primary Muscles:</strong> {item.primaryMuscles.join(", ")}</p>
              <p>
                <strong>Instructions:</strong>{" "}
                {expandedCards[item.id]
                  ? item.instructions.join(" ")
                  : `${item.instructions[0]}...`}
              </p>
              {/* Toggle Button */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="text-blue-600 hover:text-blue-800 mt-2"
              >
                {expandedCards[item.id] ? "Show Less" : "See More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
