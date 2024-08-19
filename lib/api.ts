export const sendContactForm = async (data) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      // If the server responds with an error, handle it
      const errorData = await response.json();
      throw new Error(
        `Server error: ${response.status} ${response.statusText}, ${errorData.message}`
      );
    }

    // If successful, return the server response
    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error?.message);
    throw new Error("There was an issue submitting the form. Please try again.");
  }
};
