import { DatabaseEntry } from "../database/databaseentry";

export class Query {
  db: DatabaseEntry[];

  constructor(db: DatabaseEntry[]) {
    this.db = db;
  }

  private search(searchType: string, searchWord: string) {
    let yourAttractions: DatabaseEntry[] = [];
    if (searchWord) {
      for (let entry of this.db) {
        if (
          entry[searchType].toLowerCase().startsWith(searchWord.toLowerCase())
        ) {
          yourAttractions.push(entry);
        }
      }
      return yourAttractions;
    }
    return [];
  }

  searchForCity(searchWord: string) {
    return this.search("city", searchWord);
  }

  searchForCountry(searchWord: string) {
    return this.search("country", searchWord);
  }

  searchForShortName(searchWord: string) {
    return this.search("shortName", searchWord);
  }

  searchForType(searchWord: string) {
    return this.search("type", searchWord);
  }

  searchForDescription(searchWord: string) {
    return this.search("description", searchWord);
  }
}
