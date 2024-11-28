import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("access_token");

    // Si el token está presente, lo agregamos al encabezado Authorization
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Si hay un error al configurar la solicitud, lo rechazamos
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa, simplemente la devuelves
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response && error.response.status === 401) {
      // El código 401 indica que el usuario no está autenticado
      // Eliminar el token de la sesión
      sessionStorage.removeItem("access_token");

      // Redirigir al usuario a la página de login (usando Vue Router)
      // router.push("/login"); // Redirige al login
      window.location.href = "/login"; // Redirige al login

      // Opcional: Puedes mostrar un mensaje de error o realizar otras acciones
      console.error(
        "Sesión expirada o no autorizada. Redirigiendo al login..."
      );

      // Rechazar la promesa con el error para continuar con el flujo
      return Promise.reject(error);
    }

    // Si el error no es 401, simplemente rechaza el error
    return Promise.reject(error);
  }
);

export const login = async (username, password) => {
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  return api.post("/login", form);
};

export const getItems = async () => {
  return api.get("/items");
};

export default {
  login,
  getItems,
};
