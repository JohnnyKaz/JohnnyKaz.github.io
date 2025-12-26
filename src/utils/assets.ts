/**
 * Simple utility functions for handling images in the portfolio
 */

/**
 * Get the full URL for a public image
 * @param path - The path to the image relative to the public directory
 * @returns The full URL for the image
 */
export const getImageUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
};

/**
 * Asset paths for portfolio images
 */
export const IMAGE_PATHS = {
  PROFILE: '/images/profile/profile-pic.png',
  ICON: '/images/profile/logo.ico',
  PROJECTS: '/images/projects/',
} as const;

/**
 * Get the URL for a project demo page
 * @param projectId - The project ID (e.g., 'spade')
 * @returns The URL path to the project's demo page
 */
export const getProjectDemoUrl = (projectId: string): string => {
  return `/projects/${projectId}/index.html`;
};
