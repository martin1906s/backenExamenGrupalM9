require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const tareaRoutes = require("./routes/tareaRoutes");
const express = require("express");
const path = require("path");
const app = express();

const { apiReference } = require("@scalar/express-api-reference");

const port = process.env.PORT;

const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:4200";

const corsOptions = {
  origin: allowedOrigin,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());


console.log("puerto", port);

app.get("/", (req, res) => {
  res.send("API backend funcionando ");
});

app.use("/api", tareaRoutes);
app.use("/api", authRoutes);

app.use(
  "/docs",
  apiReference({
    theme: "purple",
    layout: "moderm",
    spec: {
      url: "/api/openapi.yaml",
    },
    configuration: {
      showSidebar: true,
      hideDownloadButton: false,
      hideTryItPanel: false,
      authentication: {
        preferredSecurityScheme: "bearerAuth",
        apiKey: {
          token: "token",
        },
      },
    },
  })
);

app.get("/api/openapi.yaml", (req, res) => {
  res.setHeader("Content-Type", "application/x-yaml");
  res.sendFile(path.join(__dirname, "../docs/openapi.yaml"));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
  console.log(`Documentación disponible en: http://localhost:${port}/docs`);
});
