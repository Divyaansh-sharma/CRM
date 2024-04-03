export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const token = localStorage.getItem("token");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return {
    duration,
    token,
  };
}
