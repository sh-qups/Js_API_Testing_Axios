const responseData = require("../data/data_getListUsers");
var expect = require("chai").expect;
var assert = require('assert');


describe("Reqres api test", () => {
  describe("#test_C001", async () => {
    let response = await responseData.dataListUsers();
    console.log(response.data)

    it("verify status code", () => {
      assert.strictEqual(response.status,200)
      expect(response.status).to.equal(200);
    });
    // it("verify body not none", () => {
    //   expect(response.data).to.not.be.null;
    // });
  });
});
