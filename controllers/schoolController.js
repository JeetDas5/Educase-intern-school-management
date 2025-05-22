const {
  validateSchoolInput,
  validateCoordinates,
} = require("../validations/schoolValidation");
const { insertSchool, getAllSchools } = require("../models/schoolModel");
const calculateDistance = require("../utils/distance");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  const error = validateSchoolInput({ name, address, latitude, longitude });
  if (error) return res.status(400).json({ error });

  insertSchool({ name, address, latitude, longitude }, (err, result) => {
    if (err) return res.status(500).json({ error: "DB Error" });
    res.status(201).json({ message: "School added successfully" });
  });
};

exports.listSchools = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLong = parseFloat(req.query.longitude);
  const error = validateCoordinates(userLat, userLong);
  if (error) return res.status(400).json({ error });

  getAllSchools((err, schools) => {
    if (err) return res.status(500).json({ error: "DB Error" });

    const sorted = schools
      .map((school) => ({
        ...school,
        distance: calculateDistance(
          userLat,
          userLong,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  });
};
