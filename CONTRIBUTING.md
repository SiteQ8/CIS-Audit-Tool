# Contributing to CIS Controls Audit Tool

Thank you for your interest in contributing to the CIS Controls Audit Tool! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)
- [Testing](#testing)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for everyone. Please be respectful and constructive in all interactions.

### Expected Behavior

- Be respectful and inclusive
- Welcome diverse perspectives
- Focus on what is best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Unprofessional conduct

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (browser, OS, version)

**Bug Report Template:**

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - Browser: [e.g., Chrome 100]
 - OS: [e.g., Windows 10]
 - Version: [e.g., 1.0]

**Additional context**
Any other context about the problem.
```

### Suggesting Features

Feature suggestions are welcome! Please provide:

- **Clear use case**
- **Expected behavior**
- **Potential implementation**
- **Benefits to users**

**Feature Request Template:**

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Any other context or screenshots.
```

### Improving Documentation

Documentation improvements are always appreciated:

- Fix typos or unclear instructions
- Add examples or clarifications
- Update outdated information
- Translate to other languages

### Contributing Code

1. **Find an issue** to work on or create one
2. **Comment** that you'd like to work on it
3. **Fork** the repository
4. **Create a branch** for your changes
5. **Make your changes** following our standards
6. **Test thoroughly**
7. **Submit a pull request**

## Development Setup

### Prerequisites

- Git
- A modern web browser
- Text editor or IDE
- Basic knowledge of HTML, CSS, JavaScript

### Local Setup

```bash
# Fork the repository on GitHub

# Clone your fork
git clone https://github.com/[your-username]/CIS-Audit-Tool.git

# Navigate to project directory
cd CIS-Audit-Tool

# Create a new branch
git checkout -b feature/your-feature-name

# Navigate to the docs folder (web GUI)
cd docs

# Start local server
python -m http.server 8000

# Or use Node.js http-server
npx http-server -p 8000

# Open in browser
# Visit: http://localhost:8000
```

### Project Structure

```
CIS-Audit-Tool/
├── docs/                      # GitHub Pages site
│   ├── index.html            # Dashboard
│   ├── controls.html         # Controls explorer
│   ├── audit.html            # Audit checklist
│   ├── css/
│   │   ├── style.css        # Main styles
│   │   └── themes.css       # Theme styles
│   ├── js/
│   │   ├── app.js           # Main app logic
│   │   ├── data.js          # CIS data
│   │   ├── audit.js         # Audit functionality
│   │   └── utils.js         # Utilities
│   └── assets/              # Images, fonts
├── scripts/                  # Automation scripts
└── docs-content/            # Documentation
```

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Maintain proper indentation (2 spaces)
- Add comments for complex sections
- Validate with W3C validator

**Example:**

```html
<!-- Main navigation -->
<nav class="sidebar" role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="#dashboard">Dashboard</a></li>
    <li><a href="#controls">Controls</a></li>
  </ul>
</nav>
```

### CSS

- Use CSS variables for theming
- Follow BEM naming convention
- Mobile-first responsive design
- Add comments for complex rules
- Group related properties

**Example:**

```css
/* Component: Card */
.card {
  /* Layout */
  display: flex;
  flex-direction: column;
  
  /* Spacing */
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  
  /* Visual */
  background: var(--color-background);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
}
```

### JavaScript

- Use modern ES6+ syntax
- Add JSDoc comments for functions
- Handle errors gracefully
- Use meaningful variable names
- Keep functions small and focused

**Example:**

```javascript
/**
 * Filters controls by implementation group
 * @param {Array} controls - Array of CIS controls
 * @param {string} igLevel - Implementation group (IG1, IG2, IG3)
 * @returns {Array} Filtered controls
 */
function filterByImplementationGroup(controls, igLevel) {
  if (!Array.isArray(controls) || !igLevel) {
    console.error('Invalid parameters');
    return [];
  }
  
  return controls.filter(control => 
    control.ig_levels.includes(igLevel)
  );
}
```

### Accessibility

- Use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

### Performance

- Minimize DOM manipulations
- Use event delegation
- Lazy load when appropriate
- Optimize images
- Minimize HTTP requests

## Pull Request Process

### Before Submitting

1. ✅ Code follows style guidelines
2. ✅ Comments added for complex logic
3. ✅ Documentation updated
4. ✅ Tested in multiple browsers
5. ✅ No console errors
6. ✅ Responsive design verified
7. ✅ Accessibility checked

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
How was this tested?

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested in multiple browsers
```

### Review Process

1. Submit pull request
2. Automated checks run
3. Code review by maintainer
4. Address feedback
5. Approval and merge

### After Merge

- Your contribution appears in the repository
- You're added to contributors list
- Changes deploy to GitHub Pages
- Issue is closed automatically

## Testing

### Manual Testing

Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Test these scenarios:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Filters and search work
- [ ] Audit checklist functions properly
- [ ] Data persists in localStorage
- [ ] Export functionality works
- [ ] Dark mode toggles correctly
- [ ] Responsive on mobile/tablet
- [ ] Keyboard navigation works
- [ ] No console errors

### Browser Testing

```bash
# Chrome DevTools
Right-click > Inspect > Console (check for errors)

# Responsive Design
Toggle device toolbar (Ctrl+Shift+M)
Test various screen sizes

# Accessibility
Lighthouse audit in DevTools
```

## Git Workflow

### Branch Naming

```
feature/description     # New feature
bugfix/description      # Bug fix
docs/description        # Documentation
refactor/description    # Code refactoring
```

### Commit Messages

Follow conventional commits format:

```
type(scope): description

feat: add dark mode toggle
fix: resolve audit export issue
docs: update README with examples
style: improve button styling
refactor: simplify filter logic
test: add unit tests for utilities
```

### Example Workflow

```bash
# Update your fork
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/add-export-pdf

# Make changes
# ... edit files ...

# Stage changes
git add .

# Commit with message
git commit -m "feat: add PDF export functionality"

# Push to your fork
git push origin feature/add-export-pdf

# Create pull request on GitHub
```

## Getting Help

### Resources

- **Documentation**: Check existing docs first
- **Issues**: Search existing issues
- **Discussions**: Ask questions in discussions
- **CIS Resources**: Review official CIS documentation

### Contact

- **GitHub Issues**: Technical questions
- **Discussions**: General questions
- **Email**: Contact maintainer for sensitive issues

## Recognition

Contributors are recognized in:
- README contributors section
- GitHub contributors page
- Release notes
- Project documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the CIS Controls Audit Tool! Your efforts help improve cybersecurity for everyone. 🛡️

**Happy Contributing!**
