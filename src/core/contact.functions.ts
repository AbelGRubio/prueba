// src/core/contact.functions.ts

// Interface (puede permanecer igual)
export interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  termsAccepted: boolean;
}

// Función para enviar email (similar pero sin dependencias de React)
export async function sendEmail(emailData: EmailRequest): Promise<void> {
  try {
    const response = await fetch("https://fastapi-agr.vercel.app/api/py/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// Función para manejar el envío con notificaciones
export async function handleSendEmail(emailData: EmailRequest) {
  try {
    // Usamos toast de sonner (necesitarás una alternativa para Astro)
    showNotification("loading", "Sending email...");
    const result = await sendEmail(emailData);
    showNotification("success", "📧 Email successfully sent!");
    return result;
  } catch (error) {
    showNotification("error", "❌ Failed to send email");
    throw error;
  }
}

// Función para manejar el submit del formulario
export async function handleSubmit(event: Event, form: HTMLFormElement) {
  event.preventDefault();
  
  const formData = new FormData(form);
  const data: EmailRequest = {
    name: "New client",
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    termsAccepted: formData.get("termsAccepted") === "on",
  };

  await handleSendEmail(data);
}

// Alternativa a sonner/toast para Astro
function showNotification(type: "loading" | "success" | "error", message: string) {
  // Implementación básica - puedes usar una librería como Notyf o Pico.css
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 p-4 rounded-md shadow-lg z-100 ${
    type === "success" ? "bg-green-100" : 
    type === "error" ? "bg-red-100" : "bg-blue-100"
  } text-black`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}