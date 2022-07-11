const getQueryString = function (): string {
  let _usr = process.env.DB_USERNAME;
  let _pwd = process.env.DB_PASSWORD;
  let _url = process.env.DB_URL;
  let _db = process.env.DB_DATABASE;

  let cS = `mongodb+srv://${_usr}:${_pwd}@${_url}/${_db}?retryWrites=true&w=majority`;
  console.log(cS);
  return cS;
};

export { getQueryString };
