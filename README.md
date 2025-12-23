## Bullshark Software Engineer Skill Assessment
Overview

This project is a small web application built as part of a software engineer skill assessment.
The app fetches and displays a list of products from a local JSON file, allows users to search, filter, sort items, and mark favourites with persistence via localStorage.

All data and requirements are hypothetical and used solely for assessment purposes.


## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Library:** Ant Design
- **State Management:** React Hooks
- **Persistence:** localStorage


How to Run the Project

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```


## Assumptions Made

- Data is static and provided locally (no backend/API required)
- Sorting, filtering, and searching are all handled client-side
- Favourites persistence is limited to the current browser via localStorage
- Accessibility is implemented at a basic, practical level

## Features Implemented

- Data Fetching
  - Items loaded from a local JSON file
  - Simulated API delay using setTimeout

- List Display
  - Product name
  - Category
  - Price
  - Rating
  - Favourite toggle (star icon)
    
- Search
   - Case-insensitive search
   - Debounced search (300ms)
     
- Filtering
   - Filter by category
   - “Show favourites only” toggle
     
- Sorting
   - Sort by price or rating
   - Ascending and descending order
   - Direction toggle with icons
     
- Favourites
   - Mark/unmark items as favourites
   - Persisted using localStorage
   - Restored after page refresh
     
- UI States
   - Loading indicator while data is being fetched
   - Empty state when no items match filters


## Bonus Features Implemented
- Debounced search (300ms)


## Not Implemented / Skipped
- Unit tests
- Pagination

## 👨‍💻 Author  
**Joco Badique**  
Software Engineer  
