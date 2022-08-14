export const config = {
  dev: {
    username: "kingdatabase",
    password: "kingdatabase",
    database: "kingdatabase",
    host: "kingdatabase.c2rrzug7t6oi.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
