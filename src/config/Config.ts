/**
 * Indicate if the app is running in a development environment.
 * @returns
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}
