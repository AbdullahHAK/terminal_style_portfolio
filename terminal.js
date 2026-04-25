const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const promptLine = document.getElementById('prompt-line');
const cmdLine = document.getElementById('cmd-line');
const hiddenInput = document.getElementById('hidden-input');

const commands = {
  help: () => [
    'Available commands:',
    '',
    '  about        →  Who is Abdullah',
    '  skills       →  Technical skills & stack',
    '  projects     →  Projects built',
    '  experience   →  Work experience',
    '  education    →  Academic background',
    '  contact      →  Get in touch',
    '  resume       →  Download resume (PDF)',
    '  clear        →  Clear terminal',
    '  whoami       →  Current user info',
    '  ls           →  List available sections',
    '  sudo hire    →  ;)',
    '  banner       →  Show welcome banner',
    '  social       →  Social links',
    '',
    "Type any command and press Enter."
  ],
  about: () => [
    '╔══════════════════════════════════════════════╗',
    '║              ABOUT ABDULLAH                  ║',
    '╚══════════════════════════════════════════════╝',
    '',
    'Name     : Abdullah',
    'Role     : Software Engineer',
    'Location : Pakistan',
    'Email    : abdullah.compscientist@gmail.com',
    '',
    'Software engineer focused on backend engineering, cloud',
    'systems, and scalable software. Hands-on experience building',
    'APIs, deploying AWS infrastructure, training ML systems,',
    'and solving real engineering problems end-to-end.',
    '',
    'Currently finishing BS Computer Science at NUCES-FAST.',
    'Building things that actually work.'
  ],
  skills: () => [
    '╔══════════════════════════════════════════════╗',
    '║              TECHNICAL SKILLS                ║',
    '╚══════════════════════════════════════════════╝',
    '',
    'LANGUAGES',
    '  ████████████████████  Python',
    '  ████████████████░░░░  JavaScript',
    '  ██████████████░░░░░░  C++',
    '  ████████████░░░░░░░░  SQL / Bash',
    '',
    'BACKEND',
    '  Node.js · Express.js · REST APIs',
    '  Authentication · Databases',
    '',
    'CLOUD (AWS)',
    '  EC2 · RDS · S3 · VPC',
    '  Load Balancer · EFS · Auto Scaling',
    '',
    'DATABASES',
    '  MySQL · MongoDB · PostgreSQL',
    '',
    'TOOLS',
    '  Git · Linux · Docker · CI/CD',
    '',
    'CS CORE',
    '  DSA · OOP · DBMS · OS · Networks'
  ],
  projects: () => [
    '╔══════════════════════════════════════════════╗',
    '║                  PROJECTS                    ║',
    '╚══════════════════════════════════════════════╝',
    '',
    '[1] AUTO MININET — AI Network Topology Generator   (2025–2026)',
    '    Stack : Next.js · TypeScript · Python · HuggingFace · MongoDB · Docker',
    '    ───────────────────────────────────────────────────────',
    '    • AI platform converting natural language prompts into',
    '      runnable Mininet Python scripts using a fine-tuned LLM.',
    '    • Trained open-source model on custom topology dataset.',
    '    • Full-stack system: auth, chat history, admin panel, code output UI.',
    '',
    '[2] AWS 3-TIER ARCHITECTURE                         (2026)',
    '    Stack : AWS · VPC · EC2 · RDS · Load Balancer',
    '    ───────────────────────────────────────────────────────',
    '    • Secure VPC with public/private subnet separation.',
    '    • EC2 app tier behind Load Balancer with RDS backend.',
    '    • Scalable and fault-tolerant cloud architecture.',
    '',
    '[3] FULL STACK WEB APPLICATION                      (2024)',
    '    Stack : React/Vue.js · Node.js · SQL · MongoDB',
    '    ───────────────────────────────────────────────────────',
    '    • REST APIs, authentication, DB models, frontend integration.',
    '    • Improved backend performance and query efficiency.',
    '',
    "Type 'project 1', 'project 2', or 'project 3' for more detail."
  ],
  'projects 1': () => [
    'AUTO MININET — AI Network Topology Generator',
    '',
    'Natural language prompts become runnable Mininet Python scripts.',
    'Built a fine-tuned model for topology generation, integrated',
    'with a web frontend, auth system, and execution preview.',
    'Infrastructure includes model serving, logging, and Docker-based',
    'deployment for reproducible network experiments.'
  ],
  'projects 2': () => [
    'AWS 3-TIER ARCHITECTURE',
    '',
    'Designed and deployed a secure AWS network with public and',
    'private subnets, EC2 app servers, RDS database, and load balancer.',
    'Implemented autoscaling and monitoring for resilience and',
    'production-ready availability.'
  ],
  'projects 3': () => [
    'FULL STACK WEB APPLICATION',
    '',
    'Delivered a full-stack web app with React/Vue frontend, Node.js',
    'backend, SQL/MongoDB persistence, and secure authentication.',
    'Improved backend performance and delivered a polished user',
    'experience with rapid feature iteration.'
  ],
  'project 1': () => [
    'AUTO MININET — AI Network Topology Generator',
    '',
    'Natural language prompts become runnable Mininet Python scripts.',
    'Built a fine-tuned model for topology generation, integrated',
    'with a web frontend, auth system, and execution preview.',
    'Infrastructure includes model serving, logging, and Docker-based',
    'deployment for reproducible network experiments.'
  ],
  'project 2': () => [
    'AWS 3-TIER ARCHITECTURE',
    '',
    'Designed and deployed a secure AWS network with public and',
    'private subnets, EC2 app servers, RDS database, and load balancer.',
    'Implemented autoscaling and monitoring for resilience and',
    'production-ready availability.'
  ],
  'project 3': () => [
    'FULL STACK WEB APPLICATION',
    '',
    'Delivered a full-stack web app with React/Vue frontend, Node.js',
    'backend, SQL/MongoDB persistence, and secure authentication.',
    'Improved backend performance and delivered a polished user',
    'experience with rapid feature iteration.'
  ],
  'sudo hire': () => [''],
  experience: () => [
    '╔══════════════════════════════════════════════╗',
    '║                 EXPERIENCE                   ║',
    '╚══════════════════════════════════════════════╝',
    '',
    'FREELANCE DEVELOPER                             2023–2025',
    '  ───────────────────────────────────────────────────────',
    '  • Built web applications, backend systems, and social',
    '    media automation bots for clients.',
    '  • Managed deployment, debugging, maintenance, and',
    '    feature delivery end-to-end.',
    '  • Worked independently with full ownership and deadlines.'
  ],
  education: () => [
    '╔══════════════════════════════════════════════╗',
    '║                 EDUCATION                    ║',
    '╚══════════════════════════════════════════════╝',
    '',
    'BS COMPUTER SCIENCE',
    '  Institution : FAST National University (NUCES), Pakistan',
    '  Status      : Final Semester',
    '  Focus       : Backend Engineering · Cloud · ML Systems'
  ],
  contact: () => [
    '╔══════════════════════════════════════════════╗',
    '║               CONTACT ABDULLAH               ║',
    '╚══════════════════════════════════════════════╝',
    '',
    '  GitHub   → github.com/abdullah',
    '  LinkedIn → linkedin.com/in/abdullah',
    '',
    "  Or type 'sudo hire' if you're feeling decisive."
  ],
  social: () => [
    'GitHub   → github.com/abdullah',
    'LinkedIn → linkedin.com/in/abdullah'
  ],
  whoami: () => ['abdullah — Software Engineer · Cloud · Backend · ML'],
  ls: () => [
    'drwxr-xr-x  about/',
    'drwxr-xr-x  skills/',
    'drwxr-xr-x  projects/',
    'drwxr-xr-x  experience/',
    'drwxr-xr-x  education/',
    '-rw-r--r--  contact.txt',
    '-rw-r--r--  resume.pdf'
  ],
  banner: () => [
    '██████████████████████████████████████',
    '█                                    █',
    '█     ABDULLAH.SH — v1.0.0          █',
    '█     Software Engineer Portfolio    █',
    '█                                    █',
    '██████████████████████████████████████',
    '',
    "Welcome. Type 'help' to see available commands."
  ]
};

let history = [];
let historyIndex = -1;
let soundEnabled = false;

const soundData = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=';
const keyAudio = new Audio(soundData);
keyAudio.volume = 0.05;

function typewriter(text, delay = 30) {
  return new Promise((resolve) => {
    const line = document.createElement('div');
    line.className = 'line';
    output.appendChild(line);
    let idx = 0;
    function step() {
      if (idx < text.length) {
        line.textContent += text[idx++];
        output.scrollTop = output.scrollHeight;
        setTimeout(step, delay + Math.random() * 20);
      } else {
        resolve(line);
      }
    }
    step();
  });
}

function printLine(text, cls = '') {
  const div = document.createElement('div');
  div.className = `line ${cls}`.trim();
  div.innerHTML = text;
  output.appendChild(div);
  output.scrollTop = output.scrollHeight;
  return div;
}

async function printLines(lines, speed = 15) {
  for (const line of lines) {
    if (line === '') {
      printLine('');
      await new Promise((resolve) => setTimeout(resolve, 20));
      continue;
    }
    await typewriter(line, speed);
  }
}

function createPrompt() {
  promptLine.classList.remove('hidden');
  cmdLine.textContent = '';
  hiddenInput.value = '';
  terminal.scrollTop = terminal.scrollHeight;
}

function focusInput() {
  hiddenInput.focus();
}

function normalize(input) {
  return input.trim().toLowerCase();
}

function commandKeys() {
  return Object.keys(commands);
}

function autocomplete() {
  const value = hiddenInput.value.trim().toLowerCase();
  if (!value) return;
  const matches = commandKeys().filter((cmd) => cmd.startsWith(value));
  if (matches.length === 1) {
    hiddenInput.value = matches[0];
    cmdLine.textContent = matches[0];
  }
}

function handleCommand(rawCommand) {
  const command = rawCommand.trim();
  if (!command) {
    printLine('');
    return Promise.resolve();
  }
  const display = document.createElement('div');
  display.className = 'line';
  display.textContent = `abdullah@portfolio:~$ ${command}`;
  output.appendChild(display);
  output.scrollTop = output.scrollHeight;

  if (command === 'clear' || command === 'cls') {
    output.innerHTML = '';
    return Promise.resolve();
  }

  if (command === 'ctrl+c' || command === 'c+c') {
    printLine('^C');
    return Promise.resolve();
  }

  const lower = normalize(command);
  if (lower.startsWith('sudo hire')) {
    return sudoHire();
  }

  const action = commands[lower];
  if (action) {
    const content = action();
    const customPrint = content.map((line) => {
      if (line.includes('mailto:')) {
        return line;
      }
      return line;
    });
    return printLines(content).then(() => {
      if (lower === 'contact') {
        const emailLine = document.createElement('div');
        emailLine.className = 'line';
        emailLine.innerHTML = '  Email    → <a href="mailto:abdullah.compscientist@gmail.com">abdullah.compscientist@gmail.com</a>';
        output.appendChild(emailLine);
      }
    });
  }

  if (lower === 'resume') {
    return handleResume();
  }

  if (lower === 'sound on' || lower === 'sound off') {
    soundEnabled = lower === 'sound on';
    printLine(`Sound ${soundEnabled ? 'enabled' : 'disabled'}.`, 'accent');
    return Promise.resolve();
  }

  printLine(`bash: ${command}: command not found`, 'error');
  printLine("Type 'help' to see available commands.");
  return Promise.resolve();
}

function handleResume() {
  printLine('Fetching resume.pdf...');
  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'abdullah_resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  printLine('Download started. ✓', 'accent');
  return Promise.resolve();
}

function sudoHire() {
  return new Promise(async (resolve) => {
    printLine('[sudo] password for recruiter: ████████');
    await new Promise((res) => setTimeout(res, 600));
    printLine('');
    printLine('Authenticating...');
    await new Promise((res) => setTimeout(res, 700));
    printLine('Access granted.');
    await new Promise((res) => setTimeout(res, 300));
    printLine('');
    printLine('Initiating hire sequence for: Abdullah');
    printLine('Status: HIGHLY RECOMMENDED ✓', 'accent');
    printLine('');
    printLine('Redirecting to: abdullah.compscientist@gmail.com');
    setTimeout(() => {
      window.location.href = 'mailto:abdullah.compscientist@gmail.com';
      resolve();
    }, 1500);
  });
}

hiddenInput.addEventListener('input', () => {
  cmdLine.textContent = hiddenInput.value;
  output.scrollTop = output.scrollHeight;
  if (soundEnabled) {
    keyAudio.currentTime = 0;
    keyAudio.play().catch(() => {});
  }
});

hiddenInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = hiddenInput.value;
    history.unshift(command);
    historyIndex = -1;
    hiddenInput.value = '';
    cmdLine.textContent = '';
    await handleCommand(command);
    createPrompt();
  }

  if (event.key === 'Tab') {
    event.preventDefault();
    autocomplete();
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (history.length === 0) return;
    historyIndex = Math.min(historyIndex + 1, history.length - 1);
    hiddenInput.value = history[historyIndex];
    cmdLine.textContent = hiddenInput.value;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (history.length === 0) return;
    historyIndex = Math.max(historyIndex - 1, -1);
    hiddenInput.value = historyIndex === -1 ? '' : history[historyIndex];
    cmdLine.textContent = hiddenInput.value;
  }

  if (event.ctrlKey && event.key.toLowerCase() === 'l') {
    event.preventDefault();
    output.innerHTML = '';
    createPrompt();
  }

  if (event.ctrlKey && event.key.toLowerCase() === 'c') {
    event.preventDefault();
    printLine('^C');
    hiddenInput.value = '';
    cmdLine.textContent = '';
    createPrompt();
  }
});

terminal.addEventListener('click', () => {
  focusInput();
});

window.addEventListener('resize', () => {
  terminal.scrollTop = terminal.scrollHeight;
});

async function bootSequence() {
  const bootLines = [
    'Initializing system...',
    'Loading kernel modules... [OK]',
    'Mounting file systems... [OK]',
    'Starting network services... [OK]',
    'Loading portfolio data... [OK]',
    '',
    '██████████████████████████████████████',
    '█                                    █',
    '█     ABDULLAH.SH — v1.0.0          █',
    '█     Software Engineer Portfolio    █',
    '█                                    █',
    '██████████████████████████████████████',
    '',
    'Welcome. Type \'help\' to see available commands.',
    ''
  ];

  for (const line of bootLines) {
    if (line === '') {
      printLine('');
      await new Promise((resolve) => setTimeout(resolve, 150));
      continue;
    }
    await typewriter(line, 20);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  createPrompt();
  focusInput();
}

bootSequence();
