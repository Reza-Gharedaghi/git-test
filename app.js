const register = (username) => {
  if (username === "Reza" || username === "Erfan") {
    return true;
  } else {
    return false;
  }
};

const login = (username) => {
  if (username === "ADMIN") {
    return true;
  } else {
    return false;
  }
};

const test = () => {
  return true;
};
