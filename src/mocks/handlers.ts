import { rest } from "msw";
import { mockedDrones } from "./dronesArray";

const routes = { user: "/user", login: "/login" };

const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        token: "aj39jdjadjawdij",
      })
    );
  }),
  rest.get(`${apiUrl}/drones`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        drones: mockedDrones,
      })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(ctx.status(401));
  }),
  rest.get(`${apiUrl}/drones`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
