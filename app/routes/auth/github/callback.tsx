// app/routes/auth/github/callback.tsx
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/services/session.server";

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("github", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
  });
};