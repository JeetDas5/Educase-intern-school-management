exports.validateSchoolInput = ({ name, address, latitude, longitude }) => {
  if (!name || !address || latitude == null || longitude == null)
    return "All fields are required";
  if (isNaN(latitude) || isNaN(longitude))
    return "Latitude and longitude must be numbers";
  return null;
};

exports.validateCoordinates = (lat, lon) => {
  if (isNaN(lat) || isNaN(lon)) return "Invalid coordinates";
  return null;
};
