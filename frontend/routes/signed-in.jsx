import { useUser, useSignOut, useFetch } from "@gadgetinc/react";
import reactLogo from "../assets/react-logo.svg";
import { api } from "../api";
import userIcon from "../assets/default-user-icon.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function () {
  const user = useUser(api);
  const signOut = useSignOut();
  const [apiKey, setApiKey] = useState("");
  const [apiId, setApiId] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [{ data, fetching, error }, send] = useFetch("/apikey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // Add any other headers you need here
    },
    json: true,
  });

  useEffect(() => {
    if (data && data.key) {
      setApiKey(data.key);
      setApiId(data.keyId);
    }
  }, [data]);

  const handleSubmit = async () => {
    // Define the data to be sent in the POST request
    const requestBody = {
      test: "test",
    };

    await send({
      body: JSON.stringify(requestBody),
    });
    console.log(data);
  };

  const generateApiKey = () => {
    // Generate a mock API key (for example purposes)
    handleSubmit();
  };

  const copyKey = async () => {
    navigator.clipboard.writeText(apiKey);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    // Optionally, show a message to the user indicating the key was copied.
  };

  const copyId = async () => {
    navigator.clipboard.writeText(apiId);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    // Optionally, show a message to the user indicating the key was copied.
  };

  return user ? (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-8">
        <img src={reactLogo} className="mx-auto h-20 w-20" alt="logo" />
        <span className="text-xl font-semibold">
          You are now signed into {process.env.GADGET_PUBLIC_APP_SLUG}{" "}
        </span>
      </div>
      <div className="text-center mb-4">
        <p className="mb-2 text-lg font-light">
          Start building your app&apos;s signed in area
        </p>
        <a
          href="/edit/files/frontend/routes/signed-in.jsx"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline hover:text-blue-600"
        >
          frontend/routes/signed-in.jsx
        </a>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <div className="flex items-center space-x-4">
            <img
              className="h-16 w-16 rounded-full border border-gray-300"
              src={user.googleImageUrl ?? userIcon}
              alt="user"
            />
            <div>
              <p className="text-sm font-medium">id: {user.id}</p>
              <p className="text-sm font-medium">
                name: {user.firstName} {user.lastName}
              </p>
              <p className="text-sm font-medium">
                email:{" "}
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {user.email}
                </a>
              </p>
              <p className="text-sm font-medium">
                created: {user.createdAt.toString()}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            This data is fetched from the user model
          </p>
          <div className="flex items-center space-x-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={generateApiKey}
            >
              Generate
            </button>
            <label
              htmlFor="apiKey"
              className="block text-sm font-medium text-gray-700"
            >
              API Key
            </label>

            <input
              className="border border-gray-300 py-2 px-4 rounded w-auto"
              type="text"
              value={apiKey}
              readOnly
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={copyKey}
              disabled={!apiKey}
            >
              {/* Clipboard icon (replace with an actual icon) */}
              Copy Key
            </button>
            <label
              htmlFor="apiId"
              className="block text-sm font-medium text-gray-700"
            >
              Key
            </label>

            <input
              className="border border-gray-300 py-2 px-4 rounded w-auto"
              type="text"
              value={apiId}
              readOnly
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={copyId}
              disabled={!apiId}
            >
              {/* Clipboard icon (replace with an actual icon) */}
              Copy
            </button>
            {showToast && (
              <div className=" bg-white border-2 border-green-500 text-green-500 py-2 px-4 rounded flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Copied to clipboard!
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <strong className="text-lg font-semibold">Actions:</strong>
          <Link to="/change-password" className="text-blue-500 hover:underline">
            Change password
          </Link>
          <button onClick={signOut} className="text-blue-500 hover:underline">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
