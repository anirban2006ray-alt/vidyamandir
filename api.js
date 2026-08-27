// src/services/api.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function checkBackendStatus() {
  try {
    const response = await fetch(`${BASE_URL}/api/health`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to connect to backend:', error);
    throw error;
  }
}
