// Mock user data - in a real app, this would be handled by a backend
const users = [{ username: "hannah", password: "jwd987", role: "admin" }];

export const login = (username, password) => {
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  if (user) {
    const token = btoa(JSON.stringify({ username, role: user.role }));
    localStorage.setItem("authToken", token);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  return !!token;
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return null;

  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
};
