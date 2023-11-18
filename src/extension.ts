import { commands, ExtensionContext } from "vscode";
import { UUIDPanel } from "./panels/UUIDPanel";

export function activate(context: ExtensionContext) {
  const uuidCommand = commands.registerCommand("devtools.jwt", () => {
    UUIDPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(uuidCommand);
}