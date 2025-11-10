// CIS Controls v8.1 Data
const cisData = {
  version: '8.1',
  releaseDate: 'June 2024',
  totalControls: 18,
  totalSafeguards: 153,
  controls: [
    {
      id: 1,
      title: 'Inventory and Control of Enterprise Assets',
      description: 'Actively manage all enterprise assets connected to the infrastructure physically, virtually, remotely, and those within cloud environments.',
      safeguardsCount: 5,
      assetTypes: ['Devices'],
      securityFunctions: ['Identify', 'Detect', 'Respond'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 2,
      title: 'Inventory and Control of Software Assets',
      description: 'Actively manage all software on the network so that only authorized software is installed and can execute.',
      safeguardsCount: 7,
      assetTypes: ['Applications'],
      securityFunctions: ['Identify', 'Detect', 'Respond', 'Protect'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 3,
      title: 'Data Protection',
      description: 'Develop processes and technical controls to identify, classify, securely handle, retain, and dispose of data.',
      safeguardsCount: 14,
      assetTypes: ['Data'],
      securityFunctions: ['Identify', 'Protect'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 4,
      title: 'Secure Configuration of Enterprise Assets and Software',
      description: 'Establish and maintain the secure configuration of enterprise assets and software.',
      safeguardsCount: 12,
      assetTypes: ['Devices', 'Software'],
      securityFunctions: ['Identify', 'Protect', 'Governance'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 5,
      title: 'Account Management',
      description: 'Use processes and tools to assign and manage authorization to credentials for user accounts.',
      safeguardsCount: 6,
      assetTypes: ['Users', 'Devices'],
      securityFunctions: ['Identify', 'Protect', 'Governance'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 6,
      title: 'Access Control Management',
      description: 'Use processes and tools to create, assign, manage, and revoke access credentials and privileges.',
      safeguardsCount: 8,
      assetTypes: ['Users', 'Applications', 'Network'],
      securityFunctions: ['Protect'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 7,
      title: 'Continuous Vulnerability Management',
      description: 'Develop a plan to continuously assess and track vulnerabilities on all enterprise assets.',
      safeguardsCount: 7,
      assetTypes: ['Applications', 'Devices'],
      securityFunctions: ['Identify', 'Respond', 'Governance'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 8,
      title: 'Audit Log Management',
      description: 'Collect, alert, review, and retain audit logs of events that could help detect, understand, or recover from an attack.',
      safeguardsCount: 12,
      assetTypes: ['Network', 'Devices', 'Data'],
      securityFunctions: ['Protect', 'Detect'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 9,
      title: 'Email and Web Browser Protections',
      description: 'Improve protections and detections of threats from email and web vectors.',
      safeguardsCount: 7,
      assetTypes: ['Applications'],
      securityFunctions: ['Protect'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 10,
      title: 'Malware Defenses',
      description: 'Prevent or control the installation, spread, and execution of malicious applications, code, or scripts.',
      safeguardsCount: 7,
      assetTypes: ['Devices', 'Applications'],
      securityFunctions: ['Protect', 'Detect', 'Respond'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 11,
      title: 'Data Recovery',
      description: 'Establish and maintain data recovery practices sufficient to restore assets to a pre-incident state.',
      safeguardsCount: 5,
      assetTypes: ['Data'],
      securityFunctions: ['Protect', 'Recover'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 12,
      title: 'Network Infrastructure Management',
      description: 'Establish, implement, and actively manage network devices to prevent attackers from exploiting vulnerable network services.',
      safeguardsCount: 8,
      assetTypes: ['Network'],
      securityFunctions: ['Identify', 'Protect'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 13,
      title: 'Network Monitoring and Defense',
      description: 'Operate processes and tooling to establish and maintain comprehensive network monitoring and defense.',
      safeguardsCount: 11,
      assetTypes: ['Network'],
      securityFunctions: ['Detect', 'Respond'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 14,
      title: 'Security Awareness and Skills Training',
      description: 'Establish and maintain a security awareness program to influence behavior among the workforce.',
      safeguardsCount: 9,
      assetTypes: ['N/A'],
      securityFunctions: ['Protect', 'Governance'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 15,
      title: 'Service Provider Management',
      description: 'Develop a process to evaluate service providers who hold sensitive data or are responsible for critical IT platforms.',
      safeguardsCount: 7,
      assetTypes: ['N/A'],
      securityFunctions: ['Identify', 'Governance'],
      igLevels: ['IG2', 'IG3']
    },
    {
      id: 16,
      title: 'Application Software Security',
      description: 'Manage the security life cycle of in-house developed, hosted, or acquired software.',
      safeguardsCount: 14,
      assetTypes: ['Applications'],
      securityFunctions: ['Identify', 'Protect', 'Detect', 'Governance'],
      igLevels: ['IG2', 'IG3']
    },
    {
      id: 17,
      title: 'Incident Response Management',
      description: 'Establish a program to develop and maintain an incident response capability.',
      safeguardsCount: 9,
      assetTypes: ['N/A'],
      securityFunctions: ['Protect', 'Detect', 'Respond', 'Recover', 'Governance'],
      igLevels: ['IG1', 'IG2', 'IG3']
    },
    {
      id: 18,
      title: 'Penetration Testing',
      description: 'Test the effectiveness and resiliency of enterprise assets through identifying and exploiting weaknesses.',
      safeguardsCount: 5,
      assetTypes: ['N/A'],
      securityFunctions: ['Identify'],
      igLevels: ['IG2', 'IG3']
    }
  ]
};

// Generate all safeguards dynamically
function generateSafeguards() {
  const safeguards = [];
  let safeguardId = 1;
  
  // IG1 safeguards (56 total)
  const ig1Distribution = [5, 7, 3, 4, 3, 3, 2, 4, 3, 3, 2, 3, 3, 4, 0, 0, 3, 0];
  // IG2 additional (74 total, cumulative 130)
  const ig2Distribution = [0, 0, 7, 5, 2, 3, 3, 5, 3, 3, 2, 3, 5, 3, 5, 10, 4, 3];
  // IG3 additional (23 total, cumulative 153)
  const ig3Distribution = [0, 0, 4, 3, 1, 2, 2, 3, 1, 1, 1, 2, 3, 2, 2, 4, 2, 2];
  
  cisData.controls.forEach((control, index) => {
    const ig1Count = ig1Distribution[index];
    const ig2Count = ig2Distribution[index];
    const ig3Count = ig3Distribution[index];
    
    // Generate IG1 safeguards
    for (let i = 0; i < ig1Count; i++) {
      safeguards.push({
        id: `${control.id}.${i + 1}`,
        controlId: control.id,
        controlName: control.title,
        description: `Safeguard ${control.id}.${i + 1}: Implementation requirement for ${control.title.toLowerCase()}`,
        igLevel: 'IG1',
        status: 'Not Started'
      });
    }
    
    // Generate IG2 safeguards
    for (let i = 0; i < ig2Count; i++) {
      safeguards.push({
        id: `${control.id}.${ig1Count + i + 1}`,
        controlId: control.id,
        controlName: control.title,
        description: `Safeguard ${control.id}.${ig1Count + i + 1}: Advanced implementation requirement for ${control.title.toLowerCase()}`,
        igLevel: 'IG2',
        status: 'Not Started'
      });
    }
    
    // Generate IG3 safeguards
    for (let i = 0; i < ig3Count; i++) {
      safeguards.push({
        id: `${control.id}.${ig1Count + ig2Count + i + 1}`,
        controlId: control.id,
        controlName: control.title,
        description: `Safeguard ${control.id}.${ig1Count + ig2Count + i + 1}: Enterprise-level implementation for ${control.title.toLowerCase()}`,
        igLevel: 'IG3',
        status: 'Not Started'
      });
    }
  });
  
  return safeguards;
}

const safeguards = generateSafeguards();

// State management using JavaScript variables
let currentPage = 'dashboard';
let auditProgress = {};
let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize the application
function init() {
  setupNavigation();
  setupThemeToggle();
  setupMobileMenu();
  setupGlobalSearch();
  renderControlsExplorer();
  renderAuditChecklist();
  loadAuditProgress();
  updateProgressDisplay();
}

// Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const actionCards = document.querySelectorAll('.action-card');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateToPage(page);
    });
  });
  
  actionCards.forEach(card => {
    card.addEventListener('click', () => {
      const page = card.dataset.page;
      if (page) {
        navigateToPage(page);
      }
    });
  });
}

function navigateToPage(page) {
  currentPage = page;
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show selected page
  const selectedPage = document.getElementById(`page-${page}`);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
  
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
  
  // Close mobile menu if open
  document.getElementById('sidebar').classList.remove('active');
}

// Theme Toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  
  // Set initial theme
  if (isDarkMode) {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
  }
  
  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-color-scheme', isDarkMode ? 'dark' : 'light');
  });
}

// Mobile Menu
function setupMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const sidebar = document.getElementById('sidebar');
  
  mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Global Search
function setupGlobalSearch() {
  const searchInput = document.getElementById('globalSearch');
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 2) {
      performSearch(query);
    }
  });
}

function performSearch(query) {
  const results = cisData.controls.filter(control => 
    control.title.toLowerCase().includes(query) ||
    control.description.toLowerCase().includes(query)
  );
  
  if (results.length > 0) {
    navigateToPage('controls');
    renderControlsExplorer(results);
  }
}

// Controls Explorer
function renderControlsExplorer(filteredControls = null) {
  const controlsList = document.getElementById('controlsList');
  const controls = filteredControls || cisData.controls;
  
  controlsList.innerHTML = controls.map(control => `
    <div class="control-card" data-control-id="${control.id}">
      <div class="control-header">
        <div class="control-title-section">
          <div class="control-id">Control ${control.id}</div>
          <h3 class="control-title">${control.title}</h3>
          <div class="control-meta">
            <span class="control-tag">${control.safeguardsCount} Safeguards</span>
            ${control.igLevels.map(ig => `<span class="control-tag">${ig}</span>`).join('')}
          </div>
        </div>
        <div class="control-expand-icon">+</div>
      </div>
      <div class="control-body">
        <p class="control-description">${control.description}</p>
        <div class="control-details">
          <div class="control-detail-item">
            <h4>Asset Types</h4>
            <ul>
              ${control.assetTypes.map(type => `<li>${type}</li>`).join('')}
            </ul>
          </div>
          <div class="control-detail-item">
            <h4>Security Functions</h4>
            <ul>
              ${control.securityFunctions.map(func => `<li>${func}</li>`).join('')}
            </ul>
          </div>
          <div class="control-detail-item">
            <h4>Implementation Groups</h4>
            <ul>
              ${control.igLevels.map(ig => `<li>${ig}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Add click handlers for expand/collapse
  document.querySelectorAll('.control-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.control-card');
      card.classList.toggle('expanded');
    });
  });
  
  // Setup filters
  setupControlsFilters();
}

function setupControlsFilters() {
  const igFilter = document.getElementById('igFilter');
  const assetFilter = document.getElementById('assetFilter');
  const functionFilter = document.getElementById('functionFilter');
  
  const applyFilters = () => {
    const igValue = igFilter.value;
    const assetValue = assetFilter.value;
    const functionValue = functionFilter.value;
    
    let filtered = cisData.controls;
    
    if (igValue !== 'all') {
      filtered = filtered.filter(c => c.igLevels.includes(igValue));
    }
    
    if (assetValue !== 'all') {
      filtered = filtered.filter(c => c.assetTypes.includes(assetValue));
    }
    
    if (functionValue !== 'all') {
      filtered = filtered.filter(c => c.securityFunctions.includes(functionValue));
    }
    
    renderControlsExplorer(filtered);
  };
  
  igFilter.addEventListener('change', applyFilters);
  assetFilter.addEventListener('change', applyFilters);
  functionFilter.addEventListener('change', applyFilters);
}

// Audit Checklist
function renderAuditChecklist(filteredSafeguards = null) {
  const auditList = document.getElementById('auditList');
  const items = filteredSafeguards || safeguards;
  
  auditList.innerHTML = items.map(safeguard => `
    <div class="audit-item" data-safeguard-id="${safeguard.id}">
      <input type="checkbox" class="audit-checkbox" ${auditProgress[safeguard.id] === 'Completed' ? 'checked' : ''}>
      <div class="audit-info">
        <div class="audit-id">Safeguard ${safeguard.id}</div>
        <div class="audit-control-name">${safeguard.controlName}</div>
        <div class="audit-description">${safeguard.description}</div>
        <div class="audit-item-meta">
          <span class="control-tag">${safeguard.igLevel}</span>
        </div>
      </div>
      <select class="audit-status-select" data-safeguard-id="${safeguard.id}">
        <option value="Not Started" ${(auditProgress[safeguard.id] || 'Not Started') === 'Not Started' ? 'selected' : ''}>Not Started</option>
        <option value="In Progress" ${auditProgress[safeguard.id] === 'In Progress' ? 'selected' : ''}>In Progress</option>
        <option value="Completed" ${auditProgress[safeguard.id] === 'Completed' ? 'selected' : ''}>Completed</option>
        <option value="Not Applicable" ${auditProgress[safeguard.id] === 'Not Applicable' ? 'selected' : ''}>Not Applicable</option>
      </select>
    </div>
  `).join('');
  
  // Add event listeners
  document.querySelectorAll('.audit-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const item = e.target.closest('.audit-item');
      const safeguardId = item.dataset.safeguardId;
      const select = item.querySelector('.audit-status-select');
      
      if (e.target.checked) {
        select.value = 'Completed';
        auditProgress[safeguardId] = 'Completed';
      } else {
        select.value = 'Not Started';
        auditProgress[safeguardId] = 'Not Started';
      }
      
      saveAuditProgress();
      updateProgressDisplay();
    });
  });
  
  document.querySelectorAll('.audit-status-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const safeguardId = e.target.dataset.safeguardId;
      const item = e.target.closest('.audit-item');
      const checkbox = item.querySelector('.audit-checkbox');
      
      auditProgress[safeguardId] = e.target.value;
      checkbox.checked = (e.target.value === 'Completed');
      
      saveAuditProgress();
      updateProgressDisplay();
    });
  });
  
  setupAuditFilters();
  setupAuditActions();
}

function setupAuditFilters() {
  const igFilter = document.getElementById('auditIgFilter');
  const statusFilter = document.getElementById('auditStatusFilter');
  
  const applyFilters = () => {
    const igValue = igFilter.value;
    const statusValue = statusFilter.value;
    
    let filtered = safeguards;
    
    if (igValue !== 'all') {
      filtered = filtered.filter(s => s.igLevel === igValue);
    }
    
    if (statusValue !== 'all') {
      filtered = filtered.filter(s => (auditProgress[s.id] || 'Not Started') === statusValue);
    }
    
    renderAuditChecklist(filtered);
  };
  
  igFilter.addEventListener('change', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
}

function setupAuditActions() {
  const resetBtn = document.getElementById('resetAudit');
  const exportBtn = document.getElementById('exportAudit');
  
  resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all audit progress?')) {
      auditProgress = {};
      saveAuditProgress();
      renderAuditChecklist();
      updateProgressDisplay();
    }
  });
  
  exportBtn.addEventListener('click', exportAuditResults);
}

function loadAuditProgress() {
  // Since we can't use localStorage, we'll use an in-memory object
  // Progress will be lost on page refresh
  auditProgress = {};
}

function saveAuditProgress() {
  // Save to in-memory object only
  // In a real application, this would save to a backend
}

function updateProgressDisplay() {
  const total = safeguards.length;
  const completed = Object.values(auditProgress).filter(status => status === 'Completed').length;
  const percentage = Math.round((completed / total) * 100);
  
  document.getElementById('progressPercent').textContent = `${percentage}%`;
  document.getElementById('progressCount').textContent = `${completed} of ${total} completed`;
  document.getElementById('progressFill').style.width = `${percentage}%`;
}

function exportAuditResults() {
  const results = safeguards.map(safeguard => ({
    id: safeguard.id,
    control: safeguard.controlName,
    description: safeguard.description,
    igLevel: safeguard.igLevel,
    status: auditProgress[safeguard.id] || 'Not Started'
  }));
  
  const completed = results.filter(r => r.status === 'Completed').length;
  const inProgress = results.filter(r => r.status === 'In Progress').length;
  const notStarted = results.filter(r => r.status === 'Not Started').length;
  const notApplicable = results.filter(r => r.status === 'Not Applicable').length;
  
  const report = `CIS Controls v8.1 Audit Report
Generated: ${new Date().toLocaleString()}

Summary:
- Total Safeguards: ${safeguards.length}
- Completed: ${completed}
- In Progress: ${inProgress}
- Not Started: ${notStarted}
- Not Applicable: ${notApplicable}

Detailed Results:
${results.map(r => `\n${r.id} - ${r.control}\nStatus: ${r.status}\n${r.description}`).join('\n---\n')}`;
  
  // Create downloadable file
  const blob = new Blob([report], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `CIS-Audit-Report-${new Date().toISOString().split('T')[0]}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
