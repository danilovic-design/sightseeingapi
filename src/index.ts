import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { db } from "./database/tmp/db";
import { Query } from "./searchqueries/search";
import { DatabaseEntry } from "./database/databaseentry";
import { getQueryString } from "./database/mongodbquerystring";
import mongoose from "mongoose";
import {
  addNewAttraction,
  deleteAttractionById,
  getAllAttractions,
} from "./controller/attractioncontroller";
import bodyParser from "body-parser";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/search", (req: Request, res: Response) => {
  console.log("Incoming query. search");
  let query = new Query(db);
  let sendBackData: DatabaseEntry[] = [];
  if (req.query.city) {
    sendBackData = [
      ...sendBackData,
      ...query.searchForCity(req.query.city as string),
    ];
  }
  if (req.query.country) {
    sendBackData = [
      ...sendBackData,
      ...query.searchForCountry(req.query.country as string),
    ];
  }
  if (req.query.shortName) {
    sendBackData = [
      ...sendBackData,
      ...query.searchForShortName(req.query.shortName as string),
    ];
  }
  if (req.query.city) {
    sendBackData = [
      ...sendBackData,
      ...query.searchForType(req.query.city as string),
    ];
  }

  res.json(sendBackData);
});

app.post("/add", addNewAttraction);

app.get("/all", getAllAttractions);

app.delete("/deletebyid", deleteAttractionById);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "server hello" });
});

mongoose
  .connect(getQueryString())
  .then(() => {
    app.listen(port as string, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((err) => {
    console.log("DATABASE ERROR ON YOUR SIDE!!!!");
    console.log(err);
  });
