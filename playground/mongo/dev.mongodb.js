use("roo7690_me");

db.getCollection("blogs").updateMany(
  {},
  {
    $set: {
      "auts.$[].email": "roosevelt@leroo.io"
    }
  }
)