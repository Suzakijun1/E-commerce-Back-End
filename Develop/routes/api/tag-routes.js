const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/api/tags", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    },
  })
    .then((dbTag) => res.json(dbTag))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ["product_name", "price", "stock", "category_id"],
    },
  })
    .then((dbTag) => res.json(dbTag))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbTag) => {
      if (!dbTag) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      res.json(dbTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTag) => {
      if (!dbTag) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      res.json(dbTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
