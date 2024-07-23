
export const checkProductData = async (req, res, next) => {
  try {
    const { title, description, price, thumbnail, code, stock, category } = req.body;
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      category,
    };

    // verificar que el producto tenga todas las propiedades
    if (Object.values(newProduct).includes(undefined)) {
      return res.status(400).json({ status: "error", msg: "Todos los campos son obligatorios" });
    }

    // Next permite que continué la ejecución del endpoint
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error interno del servidor" });
  }
};
