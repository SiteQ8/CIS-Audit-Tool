# CIS Controls Audit Tool

[![CIS Controls v8.1](https://img.shields.io/badge/CIS%20Controls-v8.1-blue.svg)](https://www.cisecurity.org/controls)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-success.svg)](https://siteq8.github.io/CIS-Audit-Tool/)

> A web-based reference tool and audit checklist for implementing CIS Critical Security Controls v8.1

## 🎯 Overview

The **CIS Controls Audit Tool** is an interactive web tool designed to help security professionals, auditors, and IT teams implement and audit against the CIS Critical Security Controls v8.1. This tool serves as both a reference guide and an audit management platform for anyone wanting to apply CIS Controls in their organization.

### Key Features

✅ **Complete CIS Controls v8.1 Coverage** - All 18 Controls and 153 Safeguards
✅ **Interactive Audit Checklist** - Track implementation progress with status indicators  
✅ **Implementation Group Guidance** - Detailed information for IG1, IG2, and IG3
✅ **Advanced Filtering** - Filter by IG level, asset type, and security function
✅ **Search Functionality** - Quick search across all controls and safeguards
✅ **Progress Tracking** - Visual progress indicators and completion statistics
✅ **Export Capabilities** - Download audit reports for documentation
✅ **CIS Benchmarks Reference** - Information about 100+ technology benchmarks
✅ **Framework Mapping** - Alignment with NIST, ISO 27001, PCI-DSS
✅ **Dark Mode** - Eye-friendly interface for extended use
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
✅ **Offline Capable** - Uses localStorage for data persistence

## 🚀 Live Demo

**[View Live Demo](https://siteq8.github.io/CIS-Audit-Tool/)**

## 🏗️ Project Structure

```
CIS-Audit-Tool/
├── docs/                          # GitHub Pages site (web GUI)
│   ├── index.html                 # Main dashboard page
│   ├── controls.html              # Controls explorer page
│   ├── audit.html                 # Audit checklist page
│   ├── implementation-groups.html # IG details page
│   ├── benchmarks.html            # CIS Benchmarks reference
│   ├── resources.html             # Resources and guides
│   ├── css/
│   │   ├── style.css             # Main stylesheet
│   │   └── themes.css            # Dark/light theme styles
│   ├── js/
│   │   ├── app.js                # Main application logic
│   │   ├── data.js               # CIS Controls data
│   │   ├── audit.js              # Audit functionality
│   │   └── utils.js              # Utility functions
│   ├── assets/
│   │   ├── images/               # Images and icons
│   │   └── fonts/                # Custom fonts
│   └── data/
│       └── cis-controls-v8.1.json # CIS Controls data
├── scripts/                       # Automation scripts
│   ├── audit-templates/          # Audit templates
│   │   ├── audit-template.xlsx   # Excel audit template
│   │   └── audit-template.csv    # CSV audit template
│   └── generators/               # Report generators
│       └── generate-report.py    # Python report generator
├── docs-content/                  # Documentation
│   ├── GETTING-STARTED.md        # Getting started guide
│   ├── IMPLEMENTATION-GUIDE.md   # Implementation guidance
│   ├── API-REFERENCE.md          # API documentation
│   └── CONTRIBUTING.md           # Contribution guidelines
├── LICENSE                        # MIT License
└── README.md                      # This file
```

## 🎓 What are CIS Controls?

The **CIS Critical Security Controls** are a prioritized set of actions that collectively form a defense-in-depth set of best practices to mitigate the most common cyber attacks against systems and networks. 

### CIS Controls v8.1 Structure

- **18 Controls** organized into logical security domains
- **153 Safeguards** providing specific implementation guidance
- **3 Implementation Groups** (IG1, IG2, IG3) for prioritization based on organizational resources and risk

### Implementation Groups

| Group | Safeguards | Target Audience |
|-------|-----------|----------------|
| **IG1** | 56 | Small/medium enterprises with limited cybersecurity expertise |
| **IG2** | +74 (130 total) | Organizations with multiple departments and increased complexity |
| **IG3** | +23 (153 total) | Enterprises with sensitive data and dedicated security teams |

## 📋 The 18 CIS Controls

1. **Inventory and Control of Enterprise Assets**
2. **Inventory and Control of Software Assets**
3. **Data Protection**
4. **Secure Configuration of Enterprise Assets and Software**
5. **Account Management**
6. **Access Control Management**
7. **Continuous Vulnerability Management**
8. **Audit Log Management**
9. **Email and Web Browser Protections**
10. **Malware Defenses**
11. **Data Recovery**
12. **Network Infrastructure Management**
13. **Network Monitoring and Defense**
14. **Security Awareness and Skills Training**
15. **Service Provider Management**
16. **Application Software Security**
17. **Incident Response Management**
18. **Penetration Testing**

## 🛠️ Getting Started

### Prerequisites

No prerequisites needed! This is a static web application that runs entirely in the browser.

### Installation

#### Option 1: Use the Live Demo
Simply visit the [live demo](https://siteq8.github.io/CIS-Audit-Tool/) to start using the tool immediately.

#### Option 2: Clone and Run Locally

```bash
# Clone the repository
git clone https://github.com/SiteQ8/CIS-Audit-Tool.git

# Navigate to the project directory
cd CIS-Audit-Tool

# Open the docs folder (this is your web GUI)
cd docs

# Open index.html in your browser
# On macOS:
open index.html

# On Linux:
xdg-open index.html

# On Windows:
start index.html

# Or use a local server (recommended):
python -m http.server 8000
# Then visit: http://localhost:8000
```

#### Option 3: Deploy to Your Own GitHub Pages

1. Fork this repository
2. Go to Settings > Pages
3. Select "main" branch and "/docs" folder as source
4. Your site will be published at `https://[your-username].github.io/CIS-Audit-Tool/`

## 💡 Usage

### Conducting an Audit

1. **Navigate to Audit Checklist**: Click on "Audit Checklist" in the sidebar
2. **Filter Safeguards**: Use filters to focus on specific Implementation Groups
3. **Mark Progress**: Click checkboxes and update status for each safeguard
4. **Track Progress**: View real-time progress indicators
5. **Add Notes**: Document findings and implementation details
6. **Export Results**: Download your audit report in multiple formats

### Exploring Controls

1. **Browse Controls**: Navigate to "Controls Explorer"
2. **View Details**: Click on any control to see detailed information
3. **Filter & Search**: Use filters to find specific controls
4. **Reference Safeguards**: See all associated safeguards for each control

### Implementation Guidance

1. **Select Your IG Level**: Navigate to "Implementation Groups"
2. **Review Requirements**: Understand which safeguards apply to you
3. **Access Resources**: Visit "Resources" for implementation guides
4. **Check Benchmarks**: Reference relevant CIS Benchmarks for your technologies

## 🔧 Advanced Features

### Data Persistence

All audit progress is automatically saved to your browser's localStorage. Your work persists across sessions without requiring a database or server.

### Export Formats

- **JSON**: Machine-readable format for integration
- **CSV**: Import into Excel or other tools
- **HTML**: Printable audit report
- **PDF**: Professional documentation (coming soon)

### Search and Filter

Advanced filtering options:
- **Implementation Group**: IG1, IG2, IG3
- **Asset Type**: Devices, Software, Data, Users, Network, Documentation
- **Security Function**: Identify, Protect, Detect, Respond, Recover, Governance
- **Status**: Not Started, In Progress, Completed, Not Applicable

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs**: Found a bug? [Open an issue](https://github.com/SiteQ8/CIS-Audit-Tool/issues)
- 💡 **Suggest Features**: Have an idea? [Start a discussion](https://github.com/SiteQ8/CIS-Audit-Tool/discussions)
- 📝 **Improve Documentation**: Help make the docs better
- 🔧 **Submit Pull Requests**: Fix bugs or add features

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/[your-username]/CIS-Audit-Tool.git

# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes

# Test thoroughly

# Commit your changes
git commit -m "Add: your feature description"

# Push to your fork
git push origin feature/your-feature-name

# Open a Pull Request
```

## 📚 Documentation

- **Getting Started Guide** - Quick start guide
- **Implementation Guide** - Detailed implementation guidance
- **API Reference** - Technical documentation
- **FAQ** - Frequently asked questions

## 🔗 Related Resources

### Official CIS Resources

- [CIS Controls v8.1](https://www.cisecurity.org/controls/v8) - Official CIS Controls page
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) - Download CIS Benchmarks
- [CIS-CAT Pro](https://www.cisecurity.org/cybersecurity-tools/cis-cat-pro) - Automated assessment tool
- [CIS SecureSuite](https://www.cisecurity.org/cis-securesuite) - CIS membership program

### Framework Mappings

- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security.html)
- [PCI DSS](https://www.pcisecuritystandards.org/)
- [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)

### Community Resources

- [CIS Community](https://www.cisecurity.org/cis-community) - Join the CIS community
- [SANS SEC566](https://www.sans.org/cyber-security-courses/implementing-auditing-cis-controls) - CIS Controls training

## 🙏 Acknowledgments

- **Center for Internet Security (CIS)** - For developing and maintaining the CIS Controls
- **CIS Community** - For collaborative development of security best practices
- **Contributors** - Thank you to all who have contributed to this project

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

### Third-Party Resources

- CIS Controls® is a registered trademark of the Center for Internet Security
- This tool is not officially endorsed by the Center for Internet Security
- All CIS Controls content is used in accordance with CIS licensing terms

## ⚠️ Disclaimer

This tool is provided for reference and educational purposes. While it aims to accurately represent the CIS Controls v8.1, users should:

- Refer to official CIS documentation for authoritative guidance
- Validate all implementations against your organization's requirements
- Consult with security professionals for critical implementations
- Keep the tool updated with the latest CIS Controls versions

## 📧 Contact

**Project Maintainer**: [@SiteQ8](https://github.com/SiteQ8)

- **GitHub Issues**: [Report bugs or request features](https://github.com/SiteQ8/CIS-Audit-Tool/issues)
- **LinkedIn**: Connect for professional inquiries

## 📈 Roadmap

### Version 1.0 (Current)
- ✅ Complete CIS Controls v8.1 coverage
- ✅ Interactive audit checklist
- ✅ Implementation Group guidance
- ✅ Dark mode support
- ✅ Export functionality

### Version 1.1 (Planned)
- ⏳ PDF export for audit reports
- ⏳ Multi-user collaboration features
- ⏳ Integration with CIS-CAT Pro
- ⏳ Automated compliance scoring
- ⏳ Evidence attachment support

### Version 2.0 (Future)
- 🔮 Backend API for team collaboration
- 🔮 Role-based access control
- 🔮 Custom control frameworks
- 🔮 Integration with SIEM tools
- 🔮 Automated remediation suggestions

---

**Built with ❤️ by cybersecurity professionals, for cybersecurity professionals**

*"Security is not a product, but a process." - Bruce Schneier*
