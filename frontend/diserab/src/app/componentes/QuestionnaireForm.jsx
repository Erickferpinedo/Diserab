"use client";

import React, { useState } from "react";

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    questions: [""],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index] = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const addQuestion = () => {
    setFormData({ ...formData, questions: [...formData.questions, ""] });
  };

  const removeQuestion = (index) => {
    const updatedQuestions = formData.questions.filter((_, i) => i !== index);
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/submit-questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Gracias por tu consulta. Te hemos enviado un email de confirmación.");
        setErrorMessage("");
        setFormData({ name: "", email: "", phone: "", message: "", questions: [""] });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Ocurrió un error al enviar el formulario.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Error al enviar el formulario. Por favor, inténtalo nuevamente más tarde.");
      setSuccessMessage("");
    }
  };

  return (
    <div id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-neutral-800 p-8 rounded-lg shadow-lg transition duration-500 transform hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-200">Contactanos</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
          Completa el siguiente formulario con tus preguntas y comentarios. Nos pondremos en contacto contigo lo antes posible.
        </p>

        {successMessage && (
          <p className="text-green-400 text-center mb-6 bg-green-900 p-3 rounded-lg">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-400 text-center mb-6 bg-red-900 p-3 rounded-lg">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div className="relative">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>

          {/* Correo Electrónico */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-300"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Preguntas dinámicas */}
          <div>
            <label className="block text-gray-300 mb-2">Preguntas</label>
            {formData.questions.map((question, index) => (
              <div key={index} className="flex items-center space-x-4 mb-3">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="flex-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder={`Pregunta ${index + 1}`}
                  required
                />
                {formData.questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(index)}
                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition transform hover:scale-105"
                  >
                    ✖
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition transform hover:scale-105 mt-4"
            >
              + Añadir Pregunta
            </button>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition transform hover:scale-105 duration-300"
          >
            🚀 Enviar Consulta
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
