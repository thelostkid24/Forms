import React, { useState, useEffect } from "react";

export function ViewForms() {
  const [forms, setForms] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3000/api/v1/");
        if (!response.ok) {
          throw new Error("Failed to fetch forms");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log the data to check its structure
        // Access the forms inside totalForm.form
        if (data && data.totalForm && Array.isArray(data.totalForm.form)) {
          setForms(data.totalForm.form); // Set the forms correctly
        } else {
          setForms([]); // Set forms to an empty array if data is not in expected format
        }
      } catch (err) {
        setError(err.message); // Capture and set error
      } finally {
        setLoading(false); // Turn off loading state
      }
    };

    fetchForms();
  }, []);

  // Loading indicator
  if (loading) {
    return <div>Loading forms...</div>;
  }

  // Error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Check if forms is an array and has data to display
  if (forms.length === 0) {
    return <div>No forms available</div>;
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Submitted Forms
        </h1>
        <ul className="mt-6">
          {forms.map((form, index) => (
            <li key={index} className="mb-4 border-b pb-2">
              <strong>Name:</strong> {form.name} <br />
              <strong>Mother's Name:</strong> {form.motherName} <br />
              <strong>Father's Name:</strong> {form.fatherName} <br />
              <strong>Date of Birth:</strong> {form.dateOfBirth}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}