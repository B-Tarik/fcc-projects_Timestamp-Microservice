
module.exports = function parseDate(req, res) {
  
  const date = req.params.date_string || new Date();
  const d = new Date(date);
  const t = d.getTime();
  
  if(isNaN(t)) return  res.json({ unix: null, utc : "Invalid Date" })
  
  return res.json({ unix: t, utc: d.toUTCString() })
}