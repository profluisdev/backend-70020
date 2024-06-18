import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {

  let person = {
    name: "Juan",
    lastName: "Perez"
  };

  res.render("home", person);
  
})

router.get("/admin", (req, res) => {

  let person = {
    name: "Juan",
    lastName: "Perez",
    isAdmin: true
  };

  res.render("admin", person);
  
})

router.get("/users", (req, res) => {
  let users = [
    {
      name: "Juan",
      lastName: "Perez",
    },
    {
      name: "Pedro",
      lastName: "Sanchez",
    },
    {
      name: "Ana",
      lastName: "Diaz",
    },
  ];

  res.render("users", { users })
  
})

router.post("/login", (req, res) => {
  
  const { email, password } = req.body;

  const user = {
    name: "Juan",
    email: "juan@gmail.com",
    password: "123"
  };

  if(email == user.email && password == user.password) return res.render("profile", user);

  res.render("login", { message: "Usuario o contraseña no válido" });
  
})

router.get("/login", (req, res) => {

  res.render("login")
})

export default router;
