import {useScreen} from "~/composables/useScreen";

export async function AppSetup() {
  const screen = useScreen();

  // vue transition bug handle
  const messages = [
    `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
    `NotFoundError: The object can not be found here.`, // safari
  ];
  if (typeof window !== "undefined") {
    window.addEventListener("error", (ev) => {
      if (messages.includes(ev.message)) {
        ev.preventDefault();
        window.location.reload();
      }
    });
  }
sh
  // return
  return {
  };
}
