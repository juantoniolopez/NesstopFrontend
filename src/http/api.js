const apiUrl = "http://localhost:4000";

async function fetchFormData(path, { body, method }) {
  const token = localStorage.getItem("token");
  const headers = new Headers({ Authorization: token });
  fetch(`${apiUrl}${path}`, { body, method, headers });
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

export async function newCompany(data) {
  const body = new FormData();
  body.append("name", data.name);
  body.append("surname", data.surname);
  body.append("dni", data.dni);
  body.append("email", data.email);
  body.append("password", data.password);
  return await fetchFormData("/user/", { body, method: "POST" });
}

export async function signUpApiUser(data) {
  return await fetchNesstopApi("/user/", {
    body: data,
    method: "POST",
  });
}

export async function signUpApiCompany(data) {
  return await fetchNesstopApi("/company/", {
    body: data,
    method: "POST",
  });
}

export async function getCompanies() {
  const companyData = await fetchNesstopApi("/company/", {
    method: "GET",
  });
  return companyData.data;
}
