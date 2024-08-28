type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const sendContactForm = async (data :ContactFormData) => {
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
      const errorData = await response.json();
      throw new Error(
        `Server error: ${response.status} ${response.statusText}, ${errorData.message}`
      );
    }

    return await response.json();
  } catch (error) {
    // Improved error handling to output specific error messages
    if (error instanceof Error) {
      throw new Error(`There was an issue submitting the form: ${error.message}`);
    } else {
      throw new Error("There was an issue submitting the form. Please try again.");
    }
  }
};
