const captainModel = require("../models/captain.mode");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  capacity,
  plate,
  vehicleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !capacity ||
    !plate ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const captain = await captainModel.create({
    fullname: { firstname, lastname },
    email,
    password,
    vehicle: { color, capacity, plate, vehicleType },
  });
  return captain;
};
