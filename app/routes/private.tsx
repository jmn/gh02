import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/services/session.server";

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("github", request, {
    failureRedirect: "/login",
  });
};

export default function Private() {
  return (
    <>
      <h1>Private Route</h1>
      <form action="/logout" method="post">
        <button type="submit" className="w-full text-left">
          Logout
        </button>
      </form>
    </>
  );
}
