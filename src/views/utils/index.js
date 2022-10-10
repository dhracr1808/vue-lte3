const regex = {
  email:
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^[A-Za-z]\w{5,20}$/,
};

export const validate = (e, data) => {
  if (regex[e.target.type].test(data[e.target.type].value)) {
    e.target.parentElement.parentElement.classList.remove("error");
    e.target.parentElement.parentElement.classList.add("success");
  } else {
    e.target.parentElement.parentElement.classList.remove("success");
    e.target.parentElement.parentElement.classList.add("error");
  }
};

export const validateForm = (email, password, confirmPass) => {
  return (
    regex.email.test(email) &&
    regex.password.test(password) &&
    password === confirmPass
  );
};
