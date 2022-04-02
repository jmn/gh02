import type { ActionFunction } from "@remix-run/node";
import { authenticator } from "~/services/session.server";

export let action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
};
