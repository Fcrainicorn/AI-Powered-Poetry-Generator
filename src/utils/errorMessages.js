export function getErrorMessage(error) {
  // Handle outright network issues (no response at all)
  if (error.message && error.message.includes("NetworkError")) {
    return "The poem got lost on its way through the clouds. Please check your connection and try again.";
  }

  if (!error || !error.response) {
    return "Even poets stumble sometimes. The verse unraveled... try once more.";
  }

  const status = error.response.status;

  switch (status) {
    case 503: // Service unavailable / overloaded
      return Math.random() > 0.5
        ? "The words are still finding their rhythm. Please wait and retry."
        : "The poet is catching their breath. Try again in a moment.";
    case 401: // Unauthorized (likely API key issue)
    case 403:
      return "Our poet can’t find their quill — please verify your key.";
    case 408: // Request timeout
    case 504:
      return "The poem got lost on its way. Please try again.";
    default: // Fallback for anything else
      return "Even poets stumble sometimes. The verse unraveled... try once more.";
  }
}
