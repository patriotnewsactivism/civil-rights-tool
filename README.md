# Constitutional Rights Research Platform

A sophisticated legal research tool providing forensic analysis of systematic constitutional violations through jurisdictional manipulation, documenting patterns of institutional circumvention of citizen rights across America's legal landscape.

## Features

- **Federal Circuit Analysis**: Comprehensive mapping of circuit court hostility levels and constitutional protection patterns
- **Stop and ID Laws**: Detailed constitutional analysis of identification statutes across all jurisdictions
- **First Amendment Landmarks**: Database of landmark cases with tactical impact analysis
- **Tactical Response Framework**: Immediate response protocols for constitutional encounters
- **State Constitutional Protections**: Enhanced protections exceeding federal minimums

## Technology Stack

- React 18
- Tailwind CSS
- Lucide React Icons
- Modern JavaScript (ES6+)

## Deployment Instructions

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view in browser

### Netlify Deployment

1. **Connect Repository**: Link your GitHub repository to Netlify

2. **Build Settings**: Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `build`

3. **Deploy**: Push to your main branch to trigger automatic deployment

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `build` folder contents to your hosting service

## Project Structure

```
src/
├── App.js                      # Main application component
├── App.css                     # Application styles
├── CivilRightsLegalTool.js     # Core legal research component
├── index.js                    # React entry point
└── index.css                   # Global styles

public/
├── index.html                  # HTML template
├── manifest.json               # PWA manifest
└── favicon.ico                 # Site icon

netlify.toml                    # Netlify configuration
package.json                    # Dependencies and scripts
README.md                       # This file
```

## Legal Disclaimer

This forensic analysis documents systematic constitutional violations and provides general tactical guidance. It does not constitute legal advice. Constitutional law changes rapidly, and circuit precedents evolve constantly. The documented patterns of institutional hostility require specialized legal counsel familiar with current jurisprudential trends.

## Contributing

This platform exposes jurisdictional manipulation of constitutional protections. Contributions from civil rights attorneys, constitutional scholars, and legal researchers are welcome.

## License

This project is designed for educational and research purposes in support of constitutional rights advocacy.