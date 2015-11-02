"use strict";

const Constants = require("../../../Constants");
const Events = Constants.Events;
const Endpoints = Constants.Endpoints;
const apiRequest = require("../../../core/ApiRequest");

module.exports = function(guildId) {
  return new Promise((rs, rj) => {
    apiRequest
    .get(Endpoints.GUILD_INSTANT_INVITES(guildId))
    .auth(this.token)
    .end((err, res) => {
      return res.ok ? rs(res.body) : rj(err);
    });
  });
}