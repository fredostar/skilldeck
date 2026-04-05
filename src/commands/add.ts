import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";
import path from "path";

// Skills embarquées dans le package
const BUILTIN_SKILLS = ["crafter", "tester", "architect", "migrator",
    "java-spring", "python", "angular", "devops"];

const SKILLS_DIR = path.resolve(__dirname, "../../skills");

export async function add(skillName: string): Promise<void> {
    const spinner = ora(`Ajout du skill ${chalk.bold(skillName)}...`).start();

    if (!BUILTIN_SKILLS.includes(skillName)) {
        spinner.fail(chalk.red(`Skill inconnu : ${skillName}`));
        console.log(chalk.dim(`Skills disponibles : ${BUILTIN_SKILLS.join(", ")}`));
        process.exit(1);
    }

    try {
        const src = path.join(SKILLS_DIR, `${skillName}.md`);
        const dest = `.context-engineering/skills/${skillName}.md`;

        await fs.copy(src, dest);

        spinner.succeed(chalk.green(`Skill ${chalk.bold(skillName)} ajouté`));
    } catch (err) {
        spinner.fail(chalk.red(`Erreur lors de l'ajout du skill : ${(err as Error).message}`));
        process.exit(1);
    }
}