# Getting Started with CIS Controls Audit Tool

## Welcome!

This guide will help you get started with the CIS Controls Audit Tool and conduct your first audit.

## Quick Start

### Step 1: Access the Tool

You have three options:

1. **Use the Live Demo** (Recommended for first-time users)
   - Visit: https://siteq8.github.io/CIS-Audit-Tool/
   - No installation required
   - Start using immediately

2. **Run Locally**
   ```bash
   git clone https://github.com/SiteQ8/CIS-Audit-Tool.git
   cd CIS-Audit-Tool/docs
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

3. **Deploy to Your GitHub Pages**
   - Fork the repository
   - Enable GitHub Pages in Settings
   - Select `/docs` folder as source

### Step 2: Understand the Interface

The tool has six main sections:

1. **Dashboard** - Overview and quick stats
2. **Controls Explorer** - Browse all 18 CIS Controls
3. **Audit Checklist** - Interactive audit with 153 safeguards
4. **Implementation Groups** - IG1, IG2, IG3 guidance
5. **Benchmarks** - CIS Benchmarks reference
6. **Resources** - Implementation guides and mappings

### Step 3: Determine Your Implementation Group

Before starting, identify which Implementation Group applies to your organization:

**Choose IG1 if:**
- Small to medium-sized business
- Limited IT and cybersecurity resources
- Need essential cyber hygiene
- Focus on basic security controls

**Choose IG2 if:**
- Medium to large organization
- Multiple departments with varying risk profiles
- Have dedicated IT staff
- Need comprehensive security measures

**Choose IG3 if:**
- Large enterprise or critical infrastructure
- Handle highly sensitive data
- Have dedicated security team
- Subject to regulatory compliance
- Need advanced security controls

### Step 4: Start Your Audit

1. Navigate to **Audit Checklist**
2. Click **Filter** and select your Implementation Group
3. Review each safeguard:
   - Read the description
   - Mark status (Not Started/In Progress/Completed/N/A)
   - Add notes about implementation
   - Attach evidence (if applicable)
4. Track your progress with the progress bar
5. Export results when complete

## Understanding CIS Controls

### What are CIS Controls?

CIS Controls are a prioritized set of cybersecurity best practices developed by security experts worldwide. They help organizations:

- Defend against common cyber attacks
- Prioritize security investments
- Measure security effectiveness
- Demonstrate compliance

### The 18 Controls at a Glance

**Basic Controls (Foundational)**
1. Enterprise Asset Inventory
2. Software Asset Inventory
3. Data Protection
4. Secure Configuration
5. Account Management
6. Access Control

**Foundational Controls**
7. Vulnerability Management
8. Audit Log Management
9. Email/Web Protection
10. Malware Defenses
11. Data Recovery
12. Network Infrastructure
13. Network Monitoring
14. Security Awareness

**Organizational Controls**
15. Service Provider Management
16. Application Security
17. Incident Response
18. Penetration Testing

### Asset Types

Controls apply to six asset types:

- **Devices**: Servers, workstations, IoT, network devices
- **Software**: OS, applications, services, APIs
- **Data**: Sensitive data, logs, physical data
- **Users**: User accounts, admin accounts, service accounts
- **Network**: Network infrastructure and architecture
- **Documentation**: Policies, procedures, plans

### Security Functions

Each control supports one or more security functions:

- **Identify**: Know what you have and what's at risk
- **Protect**: Implement safeguards to protect assets
- **Detect**: Discover cybersecurity events
- **Respond**: Take action on detected incidents
- **Recover**: Restore operations after incidents
- **Govern**: Manage the security program

## Best Practices

### Before Starting Your Audit

1. **Gather Information**
   - Current security controls
   - Asset inventories
   - Security policies
   - Previous audit results

2. **Assemble Your Team**
   - IT administrators
   - Security team
   - Compliance officers
   - Department heads

3. **Set Objectives**
   - What are you trying to achieve?
   - What's your timeline?
   - What resources are available?

### During the Audit

1. **Be Thorough**
   - Review each safeguard carefully
   - Gather evidence of implementation
   - Document gaps and findings

2. **Be Honest**
   - Don't mark things complete if they're not
   - Identify areas needing improvement
   - Note partial implementations

3. **Collaborate**
   - Work with relevant teams
   - Verify implementations
   - Get stakeholder input

4. **Save Regularly**
   - Progress is auto-saved to localStorage
   - Export backups periodically
   - Document as you go

### After the Audit

1. **Review Results**
   - Analyze completion rates
   - Identify priority gaps
   - Calculate risk scores

2. **Create Action Plan**
   - Prioritize findings
   - Assign responsibilities
   - Set timelines

3. **Track Progress**
   - Schedule follow-ups
   - Update audit regularly
   - Measure improvements

4. **Export Documentation**
   - Generate reports
   - Share with stakeholders
   - Archive for compliance

## Common Use Cases

### Use Case 1: Initial Assessment

**Scenario**: First-time CIS Controls implementation

**Steps**:
1. Review all controls in Controls Explorer
2. Determine your Implementation Group
3. Complete audit checklist
4. Identify quick wins and gaps
5. Create prioritized action plan

### Use Case 2: Annual Audit

**Scenario**: Regular compliance check

**Steps**:
1. Load previous audit results
2. Review changes since last audit
3. Update implementation status
4. Document improvements
5. Export updated report

### Use Case 3: Gap Analysis

**Scenario**: Identify security gaps

**Steps**:
1. Filter by Implementation Group
2. Focus on "Not Started" items
3. Assess risk and impact
4. Prioritize remediation
5. Track progress over time

### Use Case 4: Vendor Assessment

**Scenario**: Evaluate service provider security

**Steps**:
1. Navigate to Control 15 (Service Provider Management)
2. Review vendor security controls
3. Use checklist for vendor audit
4. Document findings
5. Compare against requirements

## Tips and Tricks

### Keyboard Shortcuts

- `Ctrl/Cmd + K`: Open search
- `Ctrl/Cmd + D`: Toggle dark mode
- `Ctrl/Cmd + E`: Export results
- `Esc`: Close modals

### Filtering Tips

- Use multiple filters simultaneously
- Combine IG level + asset type + security function
- Save custom filter presets
- Clear filters to see all items

### Search Tips

- Search by control number (e.g., "Control 1")
- Search by keyword (e.g., "vulnerability")
- Search by safeguard ID (e.g., "1.1")
- Search descriptions for detailed results

### Export Options

- **JSON**: For programmatic processing
- **CSV**: For Excel analysis
- **HTML**: For printing or presentations
- **PDF**: For formal documentation (coming soon)

## Troubleshooting

### Data Not Saving

**Problem**: Audit progress not persisting

**Solutions**:
- Check browser localStorage is enabled
- Clear browser cache and reload
- Export data as backup
- Try different browser

### Performance Issues

**Problem**: Slow loading or lag

**Solutions**:
- Close unnecessary browser tabs
- Clear browser cache
- Disable browser extensions
- Use modern browser (Chrome, Firefox, Edge)

### Display Issues

**Problem**: Layout broken or unreadable

**Solutions**:
- Refresh the page
- Clear browser cache
- Check browser zoom level (should be 100%)
- Update to latest browser version
- Try different browser

## Getting Help

### Documentation

- **Implementation Guide**: Detailed CIS Controls guidance
- **API Reference**: Technical documentation
- **FAQ**: Frequently asked questions

### Community

- **GitHub Issues**: Report bugs or request features
- **Discussions**: Ask questions and share ideas
- **CIS Community**: Join the official CIS community

### Support

- GitHub: https://github.com/SiteQ8/CIS-Audit-Tool
- Issues: https://github.com/SiteQ8/CIS-Audit-Tool/issues
- Email: Contact maintainer through GitHub profile

## Next Steps

Now that you're familiar with the basics:

1. ✅ Complete your first audit
2. ✅ Explore the Controls Explorer
3. ✅ Review Implementation Groups
4. ✅ Check out Benchmarks reference
5. ✅ Read the Implementation Guide
6. ✅ Join the CIS Community

Happy auditing! 🔒

---

*Last Updated: November 2024*
*CIS Controls Version: 8.1*
