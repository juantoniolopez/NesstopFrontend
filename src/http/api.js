const apiUrl = "http://localhost:4000";

async function fetchFormData(path, { body, method }) {
  fetch(`${apiUrl}${path}`, { body, method });
}

async function fetchNesstopApi(path, { body, method }) {
  const token = localStorage.getItem("token");

  const headers = new Headers({
    "Content-Type": "application/json",
  });
  if (token) {
    headers.append("Authorization", token);
  }
  const request = await fetch(`${apiUrl}${path}`, {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
  });
  const requestData = await request.json();
  if (requestData.status === "error") {
    throw requestData.message;
  }
  return requestData;
}

export async function login(email, password) {
  const tokenData = await fetchNesstopApi("/user/login", {
    body: { email, password },
    method: "POST",
  });
  const token = tokenData.data.token;

  localStorage.setItem("token", token);
  return token;
}

// const now = new Date();

// export async function signUpApi(name, surname, dni, email, password) {
//   return await fetchNesstopApi("/user", {
//     method: "POST",
//     body: { name, surname, dni, email, password },
//   });
// }

export async function getUserInfo(userId) {
  const userData = await fetchNesstopApi(`/user/${userId}`, {
    method: "GET",
  });
  return userData.data;
}

export async function getCompanyDetail(id) {
  const userData = await fetchNesstopApi(`/company/:id/`, {
    method: "GET",
  });
  return userData.data;
}

// export async function newUser(data) {
//   const body = new FormData();
//   body.append("name", data.name);
//   body.append("surname", data.surname);
//   body.append("dni", data.dni);
//   body.append("email", data.email);
//   body.append("password", data.password);
//   return await fetchFormData("/user/", { method: "POST", body });
// }

export async function signUpApi(data) {
  const body = new FormData();
  body.append("name", data.name);
  body.append("surname", data.surname);
  body.append("dni", data.dni);
  body.append("email", data.email);
  body.append("password", data.password);
  return await fetchFormData("/user/", { method: "POST", body });
}
