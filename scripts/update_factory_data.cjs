const fs = require('fs');
const path = require('path');

const PROJECTS_DIR = path.resolve(__dirname, '../../AI-Image-studio/projects');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/factoryData.js');

// Mock Cron Data (Skippy will update this via tool call)
const cronJobs = [
  {
    id: "cc6ceeb3-39e2-445d-b3c7-41d9d7a186e3",
    name: "Daily Morning Brief",
    schedule: "30 14 * * * (UTC)",
    nextRun: "10:30 AM Atlantic",
    enabled: true
  }
];

if (!fs.existsSync(PROJECTS_DIR)) {
    console.error("Projects dir not found:", PROJECTS_DIR);
    // Create dummy data if folder missing (for dev)
    const dummy = `export const factoryData = { projects: [], cron: ${JSON.stringify(cronJobs, null, 2)} };`;
    fs.writeFileSync(OUTPUT_FILE, dummy);
    process.exit(0);
}

const projects = fs.readdirSync(PROJECTS_DIR).filter(f => fs.statSync(path.join(PROJECTS_DIR, f)).isDirectory());

const projectData = projects.map(p => {
    const pPath = path.join(PROJECTS_DIR, p);
    
    // Status Checks
    const hasPrompts = fs.existsSync(path.join(pPath, 'prompts/pages.txt'));
    const hasSystem = fs.existsSync(path.join(pPath, 'prompts/system.txt'));
    
    // Count assets
    const charDir = path.join(pPath, 'assets/characters');
    const charCount = (fs.existsSync(charDir) && fs.readdirSync(charDir).length) || 0;
    
    const pageDir = path.join(pPath, 'assets/pages');
    const pageCount = (fs.existsSync(pageDir) && fs.readdirSync(pageDir).length) || 0;

    // Clean name
    let name = p.replace(/-/g, ' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (name.length > 50) name = name.substring(0, 47) + '...';

    return {
        id: p,
        name: name,
        hasPrompts,
        hasSystem,
        charCount,
        pageCount,
        isCompiled: false, // Placeholder
        isListed: false    // Placeholder
    };
});

const fileContent = `export const factoryData = {
  lastUpdated: "${new Date().toISOString()}",
  cron: ${JSON.stringify(cronJobs, null, 2)},
  projects: ${JSON.stringify(projectData, null, 2)}
};`;

fs.writeFileSync(OUTPUT_FILE, fileContent);
console.log(`Updated factoryData.js with ${projectData.length} projects.`);
