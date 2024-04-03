export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return true;
}
