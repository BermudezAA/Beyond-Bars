# Beyond Bars Website: Content Editing Guide

This file is the handoff guide for adding the organization's real content. You do not need to redesign the website to begin filling it in.

## Where to edit

Open a file in GitHub, click the pencil icon, make changes, and commit them to a branch. For now, continue working in `beyond-bars-site-skeleton` until the design is approved and the pull request is merged.

| Page or area | File to edit | What belongs there |
|---|---|---|
| Homepage | `_pages/about.md` | Main headline, short mission statement, three principles, featured project descriptions |
| About | `_pages/about-us.md` | Official mission, organization background, values, volunteer community |
| Projects directory | `_pages/projects.md` | Short descriptions of all four projects |
| 1000 Stories Project | `_pages/1000-stories.md` | Approved project description, participation process, stories, consent/privacy details |
| Digital Policy Tracker | `_pages/digital-policy-tracker.md` | Scope, legislative coverage, methodology, live tracker link |
| Data Visualization | `_pages/data-visualization.md` | Methods, sample graphics, reports, project leadership |
| Youth Justice Index | `_pages/youth-justice-index.md` | Indicator framework, country coverage, methodology, sources |
| Get Involved | `_pages/get-involved.md` | Volunteer opportunities and the approved application/contact link |
| Contact | `_pages/contact.md` | Official public email or contact form |

## What you should manually provide

1. **Brand assets:** final logo, approved colors, and any approved photographs or graphics. The current green/cream styling is provisional.
2. **Official organization language:** confirm the mission statement and homepage headline.
3. **Approved links:** volunteer application, public email/contact form, social accounts, and the live Digital Policy Tracker when available.
4. **Project-specific facts:** final methods, current status, outputs, dates, and public materials. The project pages currently contain starter copy and explicitly marked placeholders where details are not confirmed.
5. **People and roles:** confirm names, titles, and whether leadership should be displayed publicly. Project leads currently listed are limited to the roles already provided.
6. **Stories and data:** publish only material approved for public release, especially personal stories or sensitive information.

## Editing safely

- Do not paste private personal information, interview transcripts, or identifying details into public pages without explicit authorization and the relevant consent process.
- Keep the project overview pages separate from any standalone applications or databases. Add a link to a tool only after its public URL is confirmed.
- Keep the YAML header at the top of each Markdown page. The fields between the opening and closing `---` markers control the page title, URL, and navigation.
- The website's shared styling lives in `assets/css/beyond-bars.css`. You should not need to edit this file just to replace text.
- After changing a page, open the preview/deployed site and check desktop and mobile layouts.

## Current design status

This is a working first draft, not a finished public launch. The initial homepage and page structure have been added on the `beyond-bars-site-skeleton` branch. Review the open pull request before merging. The automated formatter initially flagged the stylesheet; that file has since been reformatted, but check the latest status in GitHub Actions before merging.
