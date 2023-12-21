import fetch from "node-fetch";

// Function to validate an AI-generated image
export const validateImage = async (imageUrl) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 3003|pe1B0sAHTkKzHj3t4N1bHOJFPud7IEJoWjHtsjBp",
    },
    body: JSON.stringify({ image: imageUrl }),
  };

  try {
    const response = await fetch(
      "https://zylalabs.com/api/1973/ai+generated+image+detection+api/1733/validate+image",
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error validating image:", error);
    throw error;
  }
};
