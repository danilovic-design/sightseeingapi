import { Request, Response } from "express";
import { Attraction } from "../model/attraction";
import { sanitize } from "../security/sanitizer";

const getAllAttractions = async (req: Request, res: Response) => {
  try {
    let attractions = await Attraction.find();
    return res.json(attractions);
  } catch (e) {
    return res.json({ message: "Error fetching attractions" });
  }
};

const addNewAttraction = async (req: Request, res: Response) => {
  if (process.env.APIKEY === sanitize(req.body.apikey)) {
    //if (true) {
    try {
      let newAttraction = new Attraction();
      newAttraction.shortName = sanitize(req.body.shortName);
      newAttraction.description = sanitize(req.body.description);
      newAttraction.country = sanitize(req.body.country);
      newAttraction.city = sanitize(req.body.city);
      newAttraction.type = sanitize(req.body.type);
      let saveResult = await newAttraction.save();
      return res.json(saveResult);
    } catch (e) {
      console.log(e);
      return res.json({ message: "Error saving new attraction" });
    }
  }
  let resp = req.body;
  resp.message = "Auth error";
  return res.json(resp);
};

const deleteAttractionById = async (req: Request, res: Response) => {
  if (process.env.APIKEY === req.body.apikey) {
    try {
      let deletionResult = await Attraction.deleteOne({
        _id: req.body.id,
      });
      return res.json(deletionResult);
    } catch (e) {
      console.log(e);
      return res.json({ message: "Error deleting attraction" });
    }
  }
  return res.json({ message: "AUTH error" });
};

export { getAllAttractions, addNewAttraction, deleteAttractionById };
