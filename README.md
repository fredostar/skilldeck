# skilldeck

**Context Engineering Framework for AI agents**

Skilldeck scaffolds a `.context-engineering/` directory in any project and populates it with skill definition files, giving AI coding tools (GitHub Copilot, Mistral, etc.) structured context about your codebase.

---

## Installation

```bash
npm install -g skilldeck
# ou via npx, sans installation
npx skilldeck <commande>
```

## Usage

### 1. Initialiser le framework

```bash
npx skilldeck init
```

Options :

| Option | Valeur par défaut | Description |
|---|---|---|
| `--stack <stack>` | `java-spring` | Stack technique du projet |
| `--tool <tool>` | `copilot` | Outil cible (`copilot` ou `mistral`) |

Exemple :

```bash
npx skilldeck init --stack python --tool mistral
```

Crée la structure suivante dans le projet courant :

```
.context-engineering/
  agents/
  skills/
  commands/
  config/
    project.yaml
```

### 2. Ajouter un skill

```bash
npx skilldeck add <skill>
```

Skills disponibles :

| Skill | Description |
|---|---|
| `crafter` | Écriture et refactoring de code |
| `tester` | Génération de tests |
| `architect` | Conception et architecture |
| `migrator` | Migration de code |
| `java-spring` | Contexte spécifique Java / Spring |
| `python` | Contexte spécifique Python |
| `angular` | Contexte spécifique Angular |
| `devops` | Contexte CI/CD et infrastructure |

Exemple :

```bash
npx skilldeck add crafter
npx skilldeck add tester
```

Copie le fichier de définition du skill dans `.context-engineering/skills/`.

### 3. Exporter le contexte

```bash
npx skilldeck export <target>
```

Cibles supportées : `copilot`, `mistral`.

## Développement

```bash
# Compiler
npx tsup

# Tester le CLI localement
node dist/index.js init --stack angular --tool copilot
```

## Licence

MIT