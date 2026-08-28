# YojnaMitra — Civic-Tech Welfare Discovery Platform
> **"आपके लिए सरकारी योजनाएँ, अब एक जगह।"**

YojnaMitra is an independent civic-tech platform built on the MERN stack that helps Indian citizens discover, understand, and apply for verified Central and State Government schemes.

---

## 🛡️ Important Platform Notice
- **Independent Platform**: YojnaMitra is **NOT** an official government portal and does not claim affiliation with the Government of India.
- **Authentic Sources**: All schemes link directly to verified official ministry portals (`pmkisan.gov.in`, `scholarships.gov.in`, `pmaymis.gov.in`, etc.) with transparent verification dates.
- **No False Guarantees**: Our eligibility rules engine computes suitability without making false 100% entitlement claims, clearly stating: *"संभावित रूप से पात्र (Potentially Eligible)"*.

---

## 🚀 Key Features

1. **High-Fidelity Civic-Tech Hero & Instant Questionnaire**:
   - Modern Indian aesthetic matching civic design standards (`#168447` Green, `#142338` Dark Navy, `#FAF9F5` Warm Canvas).
   - Embedded interactive 5-step rapid questionnaire leading into the full evaluation engine.

2. **Multi-Dimensional Scheme Directory (`/schemes`)**:
   - Search across title, tags, description, and ministry departments.
   - Filter by: Government Level (Central vs State), State/UT, Category, Beneficiary Type.
   - Sort by Recently Verified, Newest, or Alphabetical.

3. **Dynamic 10-Step Eligibility Rules Engine (`/eligibility` & `/results`)**:
   - Evaluates Age, Gender, State, Occupation, Income slabs, Social Category, Area (Rural/Urban), and Disability status.
   - Dynamic branch questions for Farmers, Students, and Business owners.
   - Transparent qualification breakdown (*"यह योजना आपको क्यों दिखाई जा रही है?"*) and missing requirements (*"पात्रता में क्या कमी है?"*).

4. **Detailed Scheme Explorer (`/schemes/:slug`)**:
   - Official source links and verified timestamps.
   - Interactive **Document Readiness Checklist** with progress tracking.
   - Step-by-step application walkthrough and scheme FAQs.

5. **Citizen & Admin Features**:
   - JWT authentication with bookmarking / saved schemes.
   - Admin verification workflow (`DRAFT` ➔ `PENDING_REVIEW` ➔ `VERIFIED` ➔ `PUBLISHED`).
   - One-click verification timestamp update.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, React Router v7, Lucide React icons, Axios
- **Backend**: Node.js, Express.js, MongoDB / Mongoose (with automated In-Memory fallback mode for instant preview), JWT, bcryptjs, Morgan, CORS
- **Design System**: Noto Sans Devanagari & Inter typography, Indian civic color palette

---

## ⚡ Quick Start Guide

### 1. Prerequisites
- Node.js (v18+)
- npm

### 2. Installation
```bash
# Clone the repository
git clone <repo-url>
cd blinkit

# Install dependencies for both server and client
npm run install:all
```

### 3. Running Locally
```bash
# Terminal 1: Start Backend API (Port 5000)
npm run dev:server

# Terminal 2: Start Frontend Dev Server (Port 5173)
npm run dev:client
```

Access the application in your browser: **`http://localhost:5173`**

---

## 🔑 Demo Login Accounts

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@yojnamitra.in` | `Admin@123` |
| **Citizen** | `citizen@yojnamitra.in` | `User@123` |

*(Quick demo buttons are also provided on the login page for 1-click access)*

---

## 📡 API Endpoints Overview

### Public Schemes
- `GET /api/schemes` — Filtered scheme listing with pagination & sorting
- `GET /api/schemes/:slug` — Full scheme details by slug
- `GET /api/schemes/categories` — Category list with counts
- `GET /api/schemes/states` — Supported states list
- `POST /api/eligibility/check` — Evaluate demographic profile against rules engine

### User Authentication & Saved Schemes
- `POST /api/auth/register` — Citizen registration
- `POST /api/auth/login` — User & admin login
- `GET /api/auth/me` — Current profile
- `PUT /api/auth/profile` — Update demographic details
- `POST /api/auth/saved-schemes/:slug` — Toggle saved scheme bookmark

### Admin Management (Protected)
- `GET /api/admin/dashboard` — Verification metrics and stale scheme alerts
- `GET /api/admin/schemes` — All schemes including drafts & pending
- `POST /api/admin/schemes` — Create new scheme
- `PUT /api/admin/schemes/:id` — Edit scheme
- `DELETE /api/admin/schemes/:id` — Delete scheme
- `PATCH /api/admin/schemes/:id/status` — Change lifecycle status
- `PATCH /api/admin/schemes/:id/verify` — Mark as verified with current timestamp

---

## 📄 License & Disclaimer
YojnaMitra is licensed under the MIT License. Government logos, trademarks, and scheme names belong to their respective authorities and are referenced strictly for citizen awareness and educational convenience.
