import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";
import path from "path";

interface InitOptions {
    stack: string;
    tool: string;
}

export async function init(options: InitOptions): Promise<void> {
    const spinner = ora("Initialisation du framework...").start();

    try {
        const dirs = [
            ".context-engineering/agents",
            ".context-engineering/skills",
            ".context-engineering/commands",
            ".context-engineering/config",
        ];

        for (const dir of dirs) {
            await fs.ensureDir(dir);
        }

        const projectName = path.basename(process.cwd());
        const [language] = options.stack.split("-");

        const projectConfig = `name: ${projectName}
stack:
  - language: ${language}
    framework: ${options.stack}
    version: latest
active_skills: []
target_tools:
  - ${options.tool}
`;

        await fs.writeFile(
            ".context-engineering/config/project.yaml",
            projectConfig
        );

        spinner.succeed(chalk.green("Framework initialisé !"));
        console.log(
            chalk.dim(`\nProchaine étape : ${chalk.white("npx skilldeck add crafter")}`)
        );
    } catch (err) {
        spinner.fail(chalk.red(`Erreur lors de l'initialisation : ${(err as Error).message}`));
        process.exit(1);
    }
}