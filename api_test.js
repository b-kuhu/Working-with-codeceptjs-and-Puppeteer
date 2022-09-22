const joi = require("joi");

Feature("Students Registeration");

const characterSchema = joi
  .object({
    name: joi.string(),
    email: joi.string(),
  })
  .unknown();

Scenario("create characters", async ({ I }) => {
  const response = I.sendPostRequest("/users", {
    name: "kuhu",
    email: "kuhu@gmail.com",
  });

  I.seeResponseCodeIsSuccessful();
});

Scenario("get all users", ({ I }) => {
  I.sendGetRequest("/users");
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(["name", "email"]);
});

Scenario("check the first user", ({ I }) => {
  I.sendGetRequest("/users/1");
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(["name", "email"]);
});
