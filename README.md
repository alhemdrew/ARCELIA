Upgrade the existing ARCELIA README.md to include a polished, colorful GitHub-style technology stack section.

IMPORTANT:
Do not invent technologies.

First inspect:

* package.json
* package-lock.json / other lockfile
* vite.config.* if present
* tsconfig.* if present
* actual source files and configuration

Determine the technologies that ARCELIA ACTUALLY uses.

Then add a visually impressive section near the top of README.md, immediately after the project introduction.

Use shields.io badges in this style:

### ✦ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/[TECH]-[VERSION_OR_ROLE]-[COLOR]?style=for-the-badge&logo=[LOGO]&logoColor=white" />
  ...
</p>

Use appropriate official/simple logos where available.

Examples of technologies that MAY be included ONLY IF THEY ARE ACTUALLY PRESENT:

* React
* TypeScript
* Vite
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* Node.js
* npm
* Git
* GitHub
* GitHub Pages

Also create a smaller "Built With" visual line if appropriate.

Example visual style:

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

Make the README feel like a premium, professionally maintained open-source/product repository.

Also add useful status badges underneath the project title where appropriate, such as:

* GitHub repository status
* License
* Deployment status
* Build status

BUT:

* Only add badges that can actually work.
* Do not create fake CI/build/deployment badges.
* If GitHub Actions is not configured yet, do not pretend that a build badge exists.
* If there is no license file, do not claim a license badge.
* If GitHub Pages is not yet deployed, do not claim deployment status.

Keep the README's existing ARCELIA branding and messaging.

Improve the visual hierarchy around:

# ARCELIA

### Invest today for your child's tomorrow.

Then:

[status badges]

Short description

[Tech Stack badges]

Do not make the README excessively long.

Keep the existing useful sections such as:

* What is ARCELIA?
* Core Experience
* Design Philosophy
* Getting Started
* Production Build
* Development Principles
* Roadmap
* Communication
* Repository
* Status
* Philosophy
* License

Clean up repetition where necessary.

Use proper Markdown, HTML where GitHub supports it, and attractive spacing.

The final README should look like it belongs to a serious real-estate technology product, not a beginner tutorial.

After editing, verify that:

1. All badges use valid shields.io syntax.
2. Every technology shown is actually used by the project.
3. No fake statistics, reviews, certifications, properties, or business claims are introduced.
4. The README renders correctly on GitHub.
5. The repository URL is correct:
   https://github.com/alhemdrew/ARCELIA
