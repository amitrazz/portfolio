"use server";

export type FormState = {
  success: boolean;
  error?: string;
  fieldErrors?: {
    email?: string[];
    message?: string[];
  };
};

export async function sendEmailAction(prevState: FormState | null, formData: FormData): Promise<FormState> {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return {
      success: false,
      error: "Validation failed.",
      fieldErrors: {
        email: ["Invalid email address"],
      },
    };
  }

  if (!message || typeof message !== "string" || message.length < 5) {
    return {
      success: false,
      error: "Validation failed.",
      fieldErrors: {
        message: ["Message must be at least 5 characters"],
      },
    };
  }

  try {
    // Log message securely on the server console
    console.log(`[SERVER Action] Message received from ${email}: ${message}`);

    // Simulate database write or API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred. Please try again later.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
