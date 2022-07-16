const getQueryString = function (): string {
  let _usr = process.env.DB_USERNAME || "guestuser"; // guestuser has read-only permissions
  let _pwd = process.env.DB_PASSWORD || "guestuser"; // guestuser has read-only permissions
  let _url = process.env.DB_URL || "cluster0.qa5hf3t.mongodb.net";
  let _db = process.env.DB_DATABASE || "sightseeings";

  let cS = `mongodb+srv://${_usr}:${_pwd}@${_url}/${_db}?retryWrites=true&w=majority`;
  console.log(cS);
  return cS;
};

export { getQueryString };
