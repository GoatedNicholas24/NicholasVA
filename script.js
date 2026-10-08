const contactEmail = 'nicholaswatiti23@gmail.com';
const projects = [
  {
    title: 'Instant Property Lead Response',
    type: 'Real estate / lead management',
    status: 'Suggested demo',
    preview: 'preview-leads',
    problem: 'New buyer and seller enquiries can go cold when teams cannot respond quickly or capture the right details.',
    solution: 'An n8n workflow captures a website lead, uses AI to summarize intent, and routes a draft response and lead details to the right agent.',
    built: 'A compelling demo should show the trigger, qualification rules, CRM handoff, and a human approval step before messages go out.',
    technologies: ['n8n', 'Forms / Webhooks', 'CRM', 'AI'],
    features: 'Instant lead capture, intent summary, agent assignment, response draft, and follow-up reminder.'
  },
  {
    title: 'Listing-to-Marketing Content Flow',
    type: 'Real estate / listing operations',
    status: 'Suggested demo',
    preview: 'preview-social',
    problem: 'Agents repeatedly rewrite the same property details for listings, email campaigns, and social posts.',
    solution: 'When a listing is ready, n8n turns approved property facts into channel-specific copy and sends drafts for review.',
    built: 'Show how one source of listing data becomes consistent, reviewable marketing assets without publishing unapproved claims.',
    technologies: ['n8n', 'Property data', 'AI', 'Approval step'],
    features: 'Listing intake, description drafts, channel variations, agent approval, and content handoff.'
  },
  {
    title: 'Viewing Booking & Follow-up',
    type: 'Real estate / appointments',
    status: 'Suggested demo',
    preview: 'preview-support',
    problem: 'Coordinating viewing requests, confirmations, and follow-ups creates avoidable back-and-forth.',
    solution: 'An n8n flow records a viewing request, checks availability, sends a booking link, and prepares reminders and agent follow-up.',
    built: 'A demo can walk through the request, calendar handoff, confirmation, and rescheduling path.',
    technologies: ['n8n', 'Google Calendar', 'Email / messaging'],
    features: 'Request capture, calendar scheduling, confirmations, reminders, and CRM activity logging.'
  },
  {
    title: 'Maintenance Request Triage',
    type: 'Real estate / property management',
    status: 'Suggested demo',
    preview: 'preview-future',
    problem: 'Maintenance issues arrive through scattered channels and can be hard to prioritize or keep updated.',
    solution: 'A form-triggered workflow categorizes each request, flags urgent cases, and routes it to the property manager for assignment.',
    built: 'A demo should make the urgency rules and human handoff visible, rather than letting AI make safety-critical decisions alone.',
    technologies: ['n8n', 'Forms', 'AI classification', 'Task tracker'],
    features: 'Issue intake, urgency flags, manager review, contractor assignment, and tenant status updates.'
  }
];

const services = [
  'Real estate lead capture & follow-up',
  'Property listing & marketing workflows',
  'Viewing and calendar coordination',
  'Tenant and maintenance request routing',
  'AI integrations with human review'
];

const articles = [
  {
    title: 'Start with the Process, Not the Tool',
    category: 'Workflow design',
    note: 'A practical way to find the right first automation opportunity.',
    sections: [
      { heading: 'Find the friction before choosing software', paragraphs: [
        'When a team says, “We need AI,” the useful next question is usually, “Which part of the work is taking longer or failing more often than it should?” Starting with a specific problem keeps an automation grounded in a real outcome instead of turning a new tool into a solution in search of a problem.',
        'Pick a recurring process that has a clear beginning and end: a property enquiry arriving, a listing being approved, a viewing being requested, or a maintenance issue being reported. Ask the people doing the work to walk through what happens today, including the exceptions and the awkward handoffs.'
      ]},
      { heading: 'Map the current workflow', paragraphs: [
        'Write down each step in order. For every step, note who does it, what information they need, which app they use, and what they produce. Mark where people copy and paste, re-enter the same details, wait for an answer, or have to chase an update. Those are useful clues, not automatic instructions to remove a person from the process.',
        'Also record the rules: what makes a lead urgent, which property details must be confirmed, who can approve a message, and what should happen when information is missing. A workflow that handles only the happy path is likely to create more cleanup than it saves.'
      ]},
      { heading: 'Choose a small, measurable first version', paragraphs: [
        'Look for a step that is frequent, repetitive, and low-risk when checked. A first version might collect a web enquiry, organize its details into a consistent format, and notify the right agent. Leave negotiation, pricing decisions, and unsupervised promises to people.',
        'Before building, choose a simple measure: time to first response, number of enquiries with complete details, or time spent preparing a listing draft. Then test the workflow against ordinary cases and edge cases, ask its users what feels clumsy, and improve it. The best first automation is not the most impressive diagram. It is the smallest useful change that people trust enough to keep using.'
      ]}
    ]
  },
  {
    title: 'Building Reliable Workflows in n8n',
    category: 'n8n',
    note: 'A practical checklist for making an n8n workflow easier to trust and maintain.',
    sections: [
      { heading: 'Make each workflow easy to understand', paragraphs: [
        'A workflow is easier to support when its name explains the job it does. Use clear node names such as “Validate enquiry details” or “Notify assigned agent” rather than leaving every node with its default label. Group related steps, add a short description to the workflow, and keep a note of the credentials and services it depends on.',
        'Keep the path readable: receive data, validate it, transform it into a consistent shape, perform the action, and record the outcome. Split a large workflow when distinct responsibilities or error paths make it hard to follow. Reuse a sub-workflow when the same well-defined operation is needed in more than one place.'
      ]},
      { heading: 'Plan for imperfect inputs and temporary failures', paragraphs: [
        'Real data is incomplete. A lead may arrive without a phone number; a property address may use a different format; a user may submit the same form twice. Decide which fields are required, validate them before taking action, and send incomplete records to a review queue with a useful explanation.',
        'External APIs and email services can time out or enforce rate limits. Configure error handling so a failure is visible, useful context is retained, and safe retries do not create duplicate messages or records. Where an action has side effects, use a stable request identifier or another idempotency check before repeating it.'
      ]},
      { heading: 'Test, observe, and change it carefully', paragraphs: [
        'Build a small set of representative test cases: a normal enquiry, missing information, an unexpected value, a duplicate submission, and a downstream service failure. Use test records rather than real client data wherever possible. Confirm not just that nodes ran, but that the final record and message are correct.',
        'After activation, monitor failures and review a sample of outcomes with the people using the workflow. Document how to pause it, what credentials it needs, and who owns the process. Make one change at a time and test it before putting it live. In n8n, a successful execution is only part of reliability; the workflow must also fail visibly, recover safely, and remain understandable to the next person who maintains it.'
      ]}
    ]
  },
  {
    title: 'Where AI Agents Help—and Where They Don’t',
    category: 'AI agents',
    note: 'How to decide when a predictable workflow is better than an agent.',
    sections: [
      { heading: 'Use a fixed workflow for fixed rules', paragraphs: [
        'If the steps are known in advance—look up a record, check a required field, send a notification—a regular n8n workflow is usually the clearer choice. Explicit rules are easier to test, explain, and debug. Adding an agent to a deterministic task can introduce variation without adding useful flexibility.',
        'AI is more useful when the input is unstructured or language-heavy: summarizing a long enquiry, extracting details from a message, classifying a request, or drafting a response from approved facts. These tasks can benefit from a model, but the output should still be checked against the information and decisions the business actually trusts.'
      ]},
      { heading: 'Give the model a narrow job', paragraphs: [
        'Avoid asking an agent to “handle this lead” without explaining what that means. Define one bounded task, such as returning a short summary, a category from an allowed list, and any fields it could not identify. Provide only the context it needs and tell it not to invent missing facts.',
        'Treat model output as untrusted input. Check that the response can be parsed, that categories belong to the approved set, and that important fields are present before continuing. If the output is invalid or uncertain, route it to a human review path instead of letting it quietly decide what happens next.'
      ]},
      { heading: 'Keep consequential actions under control', paragraphs: [
        'An AI-generated property description should not publish itself with unverified claims about size, amenities, price, or availability. A suggested urgency label should not be the only factor in deciding how a maintenance issue is handled. Put an approval step before external messages, listing updates, financial actions, or decisions that could materially affect a person.',
        'Start with a small pilot and compare AI-assisted results with a human-reviewed baseline. Track correction rates, processing time, and the kinds of mistakes that occur. Keep a way to turn the AI step off while leaving the rest of the workflow usable. The right design is sometimes an agent, sometimes a simple rule, and often a combination: let AI help with language and let explicit logic govern what the system is allowed to do.'
      ]}
    ]
  },
  {
    title: 'Adding a Human Review Step to an AI Workflow',
    category: 'Human-in-the-loop',
    note: 'Design approval checkpoints that help people act quickly without surrendering control.',
    sections: [
      { heading: 'Decide what needs approval', paragraphs: [
        'Human review is not a sign that an automation failed. It is a deliberate control for work where an incorrect action has a real cost. In a real estate workflow, a person may need to approve a response to a buyer, a public listing description, or a maintenance priority before the system sends it outside the team.',
        'Not every step needs the same level of attention. Low-risk actions, such as formatting an internal summary, may be automated after testing. Higher-impact actions should show the original information, the proposed action, and the reason for the recommendation before asking someone to approve it.'
      ]},
      { heading: 'Make the review request actionable', paragraphs: [
        'A good approval request includes enough context to make a decision: who or what the request concerns, the source data, the draft or recommendation, and any fields the AI could not verify. Use a channel the reviewer already monitors and provide clear choices such as approve, edit, reject, or request more information.',
        'The workflow should wait for a response or time out to a defined fallback. If no one responds, do not assume approval. Send a reminder, reassign the task, or leave it in a visible queue. Capture who approved or changed the content and when, so the team can understand what happened later.'
      ]},
      { heading: 'Learn from edits without removing the safeguard', paragraphs: [
        'Reviewers’ edits reveal where prompts, source data, or business rules need improvement. Look for recurring corrections: incorrect tone, missing property details, or a category that does not match the team’s process. Improve the workflow based on those patterns, then keep checking a sample of results.',
        'A useful approval step should be quick, specific, and proportional to risk. If reviewers approve everything without reading, the request may not include the right context or the threshold for automation may be too cautious. If they rewrite every output, the system may need better source data or a narrower task. The goal is not to make a person rubber-stamp AI. It is to give that person a clear, informed decision at the moment it matters.'
      ]}
    ]
  },
  {
    title: 'Connecting the Apps Your Team Already Uses',
    category: 'Integrations',
    note: 'A practical approach to connecting a property team’s forms, CRM, calendar, and inbox.',
    sections: [
      { heading: 'Begin with information and ownership', paragraphs: [
        'Connecting two apps is easy to describe and easy to get wrong. Before building, identify which system owns each piece of information. If a property address is corrected in the CRM, should that update a spreadsheet? If a viewing time changes in the calendar, which system should notify the buyer and update the agent’s record?',
        'Agree on the fields that must travel between systems and the format each one expects. Define a stable identifier for a lead or property so the workflow can update the right record rather than create a new copy on every run.'
      ]},
      { heading: 'Design a clear handoff', paragraphs: [
        'A typical enquiry flow may start with a form or webhook, validate the contact details, search the CRM for a matching record, and then create or update the lead. From there it might notify an agent, create a follow-up task, or offer a booking link. Each action should have a clear owner and a result that can be checked.',
        'Plan for duplicates, missing permissions, expired credentials, and services that are temporarily unavailable. A failed CRM write should not be hidden behind a success notification. Record the failed step and enough context to retry or resolve the issue without exposing sensitive information in a broad channel.'
      ]},
      { heading: 'Keep access and maintenance manageable', paragraphs: [
        'Use the narrowest credentials and permissions the workflow needs. Avoid putting API keys in code, notes, or screenshots. Decide who owns the connection and what the team should do when a password or token needs renewal.',
        'Test with sample records before using live customer information. Have someone from the team verify that the CRM, calendar, and inbox show the expected result. Write down what the automation changes and how to pause it. A good integration is not just a bridge between apps; it preserves the team’s source of truth, makes failures visible, and is simple enough to maintain when a process changes.'
      ]}
    ]
  },
  {
    title: 'From Repetitive Task to Dependable Automation',
    category: 'Automation',
    note: 'How to move a manual task into production without surprising the people who rely on it.',
    sections: [
      { heading: 'Describe success before building', paragraphs: [
        'A repeated task can look like a good automation candidate because it happens often. Frequency alone is not enough. Define what “better” means for the people doing the work: fewer missed follow-ups, less duplicate data entry, faster routing, or a more consistent record of what happened.',
        'Measure the current process for a short period if you can. Note how long it takes, where delays occur, and how often people correct or repeat a step. That baseline makes it possible to tell whether the automation improved the process instead of merely moving work into another app.'
      ]},
      { heading: 'Build in safe steps', paragraphs: [
        'Start with an assistive version: collect the details, draft the next action, and let a person confirm it. Once the team trusts the data and the workflow handles common exceptions, consider automating lower-risk steps further. Avoid switching every user and every case at once.',
        'Test normal cases and failure cases, including duplicate triggers, missing fields, slow services, and a person changing the record while the automation is running. For actions that must not happen twice, build a duplicate check. For actions that fail, make sure someone can see what needs attention and retry it without losing the original context.'
      ]},
      { heading: 'Support the people and the system', paragraphs: [
        'Tell users what the automation will do, what it will not do, and where to go when something looks wrong. Name an owner who can review failures and approve changes. Keep a simple runbook with the purpose, connections, important rules, and pause or recovery steps.',
        'After launch, compare the original measure with actual results and ask users what has changed in their day. A workflow is not finished when it runs once; it needs occasional attention as apps, policies, and the business change. Dependable automation is a small operational product: measured against a real need, rolled out carefully, and maintained with the people who use it.'
      ]}
    ]
  }
];

const projectGrid = document.querySelector('#project-grid');
const serviceList = document.querySelector('#service-list');
const articleList = document.querySelector('#article-list');

function renderProjects() {
  projectGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <div class="project-preview ${project.preview}" role="img" aria-label="Illustrative workflow preview for ${project.title}">
        <div class="preview-label">N8N WORKFLOW IDEA</div>
        <div class="preview-window">
          <div class="preview-bar"><i></i><i></i><i></i></div>
          <div class="preview-body">
            <div class="preview-lines"><span></span><span></span><span></span><span></span></div>
            <div class="preview-chart"><i></i><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-meta"><span>${project.type}</span><span class="project-status">${project.status}</span></div>
        <h3>${project.title}</h3>
        <dl>
          <div><dt>Problem</dt><dd>${project.problem}</dd></div>
          <div><dt>Workflow</dt><dd>${project.solution}</dd></div>
          <div><dt>Demo idea</dt><dd>${project.built}</dd></div>
          <div><dt>Key steps</dt><dd>${project.features}</dd></div>
        </dl>
        <div class="tech-list" aria-label="Technologies used">${project.technologies.map((technology) => `<span>${technology}</span>`).join('')}</div>
        <div class="project-links">
          <a href="mailto:${contactEmail}?subject=${encodeURIComponent(`Demo idea: ${project.title}`)}&body=${encodeURIComponent(`Hi Watiti,\n\nI would like to discuss the ${project.title} workflow idea.\n\n`) }" aria-label="Ask Watiti about the ${project.title} workflow idea">Ask about this idea ↗</a>
          <a href="#book" aria-label="Book a discovery call about ${project.title}">Discuss this workflow ↗</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderServices() {
  serviceList.innerHTML = services.map((service, index) => `
    <div class="service-item"><span class="service-number">${String(index + 1).padStart(2, '0')}</span><h3>${service}</h3><span class="service-arrow" aria-hidden="true">↗</span></div>
  `).join('');
}

function renderArticles() {
  articleList.innerHTML = articles.map((article, index) => `
    <details class="article-entry">
      <summary class="article-row">
        <span class="article-index">${String(index + 1).padStart(2, '0')}</span>
        <span class="article-summary"><span class="article-title">${article.title}</span><span class="article-note">${article.note}</span></span>
        <span class="article-category">${article.category}</span>
        <span class="article-arrow" aria-hidden="true">+</span>
      </summary>
      <div class="article-content">
        ${article.sections.map((section) => `
          <section>
            <h4>${section.heading}</h4>
            ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          </section>
        `).join('')}
        <p class="article-byline">Written by Watiti Nicholas · AI Automation &amp; n8n</p>
      </div>
    </article>
  `).join('');
}

renderProjects();
renderServices();
renderArticles();
document.querySelector('#current-year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('#theme-toggle');
const themeColor = document.querySelector('#theme-color');

function updateTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
  themeToggle.querySelector('.theme-toggle-icon').textContent = isDark ? '☀' : '☾';
  themeToggle.querySelector('.theme-toggle-label').textContent = isDark ? 'Light' : 'Dark';
  themeColor.content = isDark ? '#171615' : '#f7f6f2';
  localStorage.setItem('portfolio-theme', theme);
}

updateTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
themeToggle.addEventListener('click', () => {
  updateTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

const menuToggle = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
  primaryNavigation.classList.toggle('is-open', !isExpanded);
});

primaryNavigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    primaryNavigation.classList.remove('is-open');
  }
});

const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = `Portfolio enquiry from ${formData.get('name')}`;
  const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
  formFeedback.textContent = 'Opening a pre-filled email draft. Review it, then press Send in your email app.';
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
