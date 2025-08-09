# IRN Cave Job Search Platform - MVP Product Requirements Document

## Overview
IRN Cave is a job search platform that aggregates job postings and allows users to search, filter, and save jobs. The platform focuses on job discovery and search functionality, with external application handling.

## Core MVP Features

### 1. Header & Navigation System

#### Primary Header (Default State)
- **Company logo** (left side)
- **Search bar** (center)
- **Location box** (right of search)
  - Shows user's detected location (IP-based)
  - Clickable to open location settings popup
- **Menu icon** (far right)
  - Displays menu focus group

#### Secondary Header (Saved Jobs/Account Pages)
- Same as primary header but **location box is removed**
- Maintains: logo, search bar, menu icon

#### Third Header (Job Results Active)
- Primary header elements PLUS
- **Category filters** (below main header)
- **Dynamic job-specific categories** (when jobs are visible)

### 2. Location Settings Popup
- **Title**: "Locations and Environments"
- **Location selector**: Auto-detects Germany (IP-based)
- **Workplace type checkboxes**: Remote, Hybrid, Onsite
- **Physical position**: Sitting/desk jobs, Active
- **Physical environment**: Office, Outdoor, Vehicle, Industrial, Customer-facing
- **Physical labor intensity**: Low, Medium, High
- **Cognitive demand**: Low, Medium, High
- **Computer usage level**: Low, Medium, High
- **Oral communication level**: Low, Medium, High
- **Actions**: Clear button, Apply button, Close icon
- **Default state**: All checkboxes checked

### 3. Menu Focus Group

#### Authenticated State
- Saved Jobs
- Account
- Inbox
- About Us
- Employers

#### Unauthenticated State
- Sign Up/Login
- About Us  
- Employers

**Note**: Remove from MVP:
- Saved Searches page
- Talent Network
- Light/Dark mode toggle

### 4. Job Search Categories & Filters

#### Static Categories (Always Available)
1. **Department**
   - Hierarchical checkboxes with expand/collapse
   - Examples: Technology (Engineering, Software Development, IT, Data Analytics)
   - Expand/Collapse all functionality
   - Search within departments

2. **Salary**
   - Hide undisclosed salaries checkbox
   - Desired compensation input
   - Frequency dropdown: Monthly, Weekly, Bi-weekly, Daily, Hourly
   - Listed frequency options
   - Currency dropdown
   - Apply/Clear buttons

3. **Commitment**
   - Checkboxes: Full-time, Part-time, Contract, Internship, Temporary, Seasonal, Volunteer
   - Default: All checked

4. **Experience**
   - **Seniority**: No prior experience, Entry level, Mid-level, Senior level
   - **Role type**: Individual contributor, People manager
   - **Years of experience**: Text input (remove range slider for MVP)
   - **Management experience**: Text input (remove range slider for MVP)

5. **Job Titles and Keywords**
   - **Job title terms**: Multi-line textarea with boolean query support
   - **Technical keywords**: Multi-line textarea
   - **Entire job description**: Multi-line textarea  
   - **Requirements keywords**: Multi-line textarea
   - Boolean query help links

6. **Education**
   - **Degree levels**: Associate, Bachelor, Master, Doctorate
   - **For each level**: Required, Preferred, Not mentioned (can select multiple)
   - **Include/Exclude majors**: Searchable dropdowns

7. **License and Certification**
   - Yes/No toggle for jobs requiring licenses
   - Include keywords search
   - Exclude keywords search

8. **Security Clearance**
   - Multiple checkboxes for clearance levels

9. **Languages**
   - Language requirements search
   - Exclude language requirements search

10. **Shifts and Schedules**
    - **Shift types**: Morning/day, Afternoon/evening, Overnight/graveyard
    - **For each shift**: Required, Optional, Not indicated
    - **Availability options**: Weekend, Holiday, Overtime (Required/Not indicated/Doesn't matter)
    - **Travel requirements**: Non-minimal, Regular

11. **Travel Requirements**
    - **Air travel**: Non-minimal, Moderate, Extensive (default all checked)
    - **Land travel**: Non-minimal, Moderate, Extensive (default all checked)

12. **Benefits and Perks**
    - Multiple checkboxes for various benefits
    - Default: Unchecked

13. **Encouraged to Apply**
    - Multiple checkboxes
    - Default: Unchecked

#### Dynamic Categories (Visible When Jobs Load)
1. **Company**
   - Include company names (searchable)
   - Exclude company names (searchable)

2. **Industry**
   - **Profit type**: All, For-profit, Non-profit (single select)
   - **Company activities/keywords**: Include/exclude search
   - **Company industry**: Include/exclude search
   - **USJobs.gov options**: Include, Only show, Don't show (single select)

3. **Stage and Funding**
   - **Current stage**: All, Public, Private (single select)
   - **Investors**: Include/exclude search
   - **Latest round**: Include/exclude search
   - **Raised in/after**: Number input
   - **Latest round amount**: Number input

4. **Size**
   - Checkboxes: All, 1-10, 11-50, 51-200, 201-500, etc.

5. **Funding Year**
   - **Year range**: Minimum year input, Present year input

### 5. Search Results & Job Display

#### Results Controls
- **Sorting**: Relevance dropdown (Most recent, etc.)
- **Time filter**: 3 years dropdown (1 week, 2 weeks, 24 hours, etc.)
- **Apply forms**: 3 options dropdown
- **Show/Hide jobs**: 
  - Checkboxes: Exclude saved, Exclude applied, Exclude viewed
  - Title updates dynamically based on selections

#### Results Stats
- **Job count**: Dynamic number (e.g., "23 jobs")
- **Company count**: Dynamic number (e.g., "12 companies")  
- **Country**: Based on location settings

#### Job Cards (4 per row on desktop)
- **Job title**
- **Location**
- **Work type**: Remote/Full-time/etc.
- **Company logo and name**
- **Company description snippet**
- **Requirements preview**: Experience, skills
- **Tech stack tags**: Python, Pandas, etc.

**Remove from MVP**: View count with eye icon

#### Job Card Actions (On Hover)
- Apply Directly
- Mark Applied
- Save
- Copy Link
- Hide Job

### 6. Job Details & Application

#### Job Details Sidebar (40% width, right side)
- **Job Information**: Title, location, type, requirements
- **Company Information**: Founded date, employee count, industry, funding details, LinkedIn
- **Job Description**: Full description with copy button
- **Apply button**: Redirects to company's external application page

#### Application Flow
- **External application**: Redirect to company website for actual application
- **No internal application handling in MVP**
- **Application tracking**: Mark jobs as applied internally

### 7. Save Search Functionality

#### Save Search Popup
- **Toggle options**: Save new search / Update existing search
- **New search**: Name input field, Cancel/Save buttons
- **Update search**: Dropdown of existing searches
- **Success notification**: "Saved successfully" alert

#### Saved Searches Display
- **Your saved searches** section above job results
- **Saved search management** in results area

### 8. Authentication System

#### Unified Login/Signup
- **Single form**: Email and password inputs
- **Continue button**: Handles both login and signup logic
- **New email**: Sends verification code, returns to same form
- **Existing email**: Direct login
- **Social login**: Google integration
- **Welcome message**: "Welcome to IRN Cave"

#### Account Management Popup
- **Header**: "My Account" with logout option
- **Profile section**: Email display
- **Security**: Change password functionality
- **Account creation date**
- **Email notifications**: 
  - Daily Digest Beta checkbox
  - New matches from saved searches checkbox

### 9. Saved Jobs Management

#### Saved Jobs Page
- **Job status tracker**: Saved, Applied, Interviewed, Rejected, Hidden
- **Status counts**: Shows count for each status
- **Empty states**: "No saved jobs. Start adding jobs to your list" with action links

### 10. Inbox Feature
- **Request management**: View application requests from companies
- **Empty state**: "No requests yet. Join Talent Network..."
- **Integration ready**: For company-initiated contact

### 11. Empty States & Error Handling

#### No Results State
- **Message**: "You are all caught up. Try adjusting your filters for more results."
- **Actionable guidance**: Suggests filter adjustments

#### Empty Saved Items
- **Consistent messaging**: "Start adding jobs to your list" with contextual guidance
- **Action-oriented**: Links to job search functionality

## Technical Requirements

### Responsive Design
- **Desktop**: 4 job cards per row
- **Tablet/Mobile**: Responsive grid adjustment

### Search & Filter Logic
- **Real-time filtering**: Results update as filters change
- **Category highlighting**: Visual indication when filters are active
- **Dynamic counts**: Job and company counts update with filter changes

### Data Management
- **External job sources**: Aggregate from multiple job boards
- **Company information**: Rich company data with funding/size details
- **Location detection**: IP-based location with manual override

### Performance
- **Fast search**: Responsive filtering and search results
- **Lazy loading**: Efficient job card loading
- **Cached results**: Optimize repeated searches

## Out of Scope for MVP

### Excluded Features
- ❌ Saved Searches dedicated page
- ❌ Talent Network functionality  
- ❌ Light/Dark mode toggle
- ❌ View count tracking on job cards
- ❌ Internal application processing
- ❌ Advanced range sliders for experience
- ❌ Company application management
- ❌ Advanced boolean query interface
- ❌ Detailed application tracking beyond basic status

### Future Considerations
- Enhanced application tracking
- Company dashboard for employers
- Advanced analytics and reporting
- Premium search features
- Mobile application
- API for third-party integrations

## Success Metrics

### User Engagement
- Job search completion rate
- Filter usage patterns
- Save job conversion rate
- Search to application rate

### Platform Performance
- Search response times
- Job listing freshness
- User retention rates
- External application click-through rates
