import { Command } from "commander";
import { init } from "./commands/init.js";
import { add } from "./commands/add.js";
import { exportContext } from "./commands/export.js";
import { version } from "../package.json";

export const program = new Command();

program
    .name("skilldeck")
    .description("Context Engineering Framework for AI agents")
    .version(version);

program
    .command("init")
    .description("Initialise le framework dans le projet courant")
    .option("--stack <stack>", "Stack technique", "java-spring")
    .option("--tool <tool>", "Outil cible : copilot | mistral", "copilot")
    .action(init);

program
    .command("add <skill>")
    .description("Ajoute un skill : crafter, tester, architect, migrator")
    .action(add);

program
    .command("export <target>")
    .description("Exporte vers copilot ou mistral")
    .action(exportContext);