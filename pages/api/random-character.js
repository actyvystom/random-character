import Chance from "chance";
export default function handler(request, response) {
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    avatar: chance.avatar({ protocol: "https", fileExtension: "jpg" }),
    pet: chance.animal({ type: "ocean" }),
    address: chance.address(),
  };
  response.status(200).json(character);
}
