# Eventify

![React](https://img.shields.io/badge/Frontend-React-blue)
![Rails](https://img.shields.io/badge/Backend-Ruby%20on%20Rails-red)
![Postgres](https://img.shields.io/badge/Database-Postgres-blue)
![Deployed](https://img.shields.io/badge/Deployed-Vercel-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

**Eventify** is a comprehensive web application designed to simplify event organization and ticket booking. Built using React for the front-end and Ruby on Rails with PostgreSQL for the back-end, Eventify supports both Admin and User functionalities. 

Users can browse events and make bookings, while Admins have full CRUD access to manage events via a RESTful API. Explore the deployed app or set it up locally to experience its full features!

- **Live Demo**: [Eventify App](https://new-eventify-p3mwykxe7-collins7-7.vercel.app/)
- **Demo Video**: [Eventify Video](https://watch.screencastify.com/v/5cpDBEjXsaCC9KwpHO1X)

---

## Table of Contents

- [Features](#features)
- [Admin MVPS](#admin-mvps)
- [Simple User MVPS](#simple-user-mvps)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Admin Dashboard**: Allows full CRUD functionality for managing events.
- **Event Browsing and Booking**: Simple users can browse and filter events, and make bookings.
- **Secure Authentication**: Login and registration features for both admin and regular users.
- **RESTful API**: Seamlessly connects the front-end and back-end for smooth data handling.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Admin MVPS

To access the Admin dashboard, login with:
- **Username**: `Messi`
- **Password**: `leomessi`

**Admin Capabilities**:
- Create, update, and delete events.
- Manage all events available on the platform.

---

## Simple User MVPS

**User Capabilities**:
- Sign up and log in to create an account.
- Browse and filter events by category using a dropdown menu.
- Book tickets for events of their choice.

---

## Tech Stack

- **Front-end**: React
- **Back-end**: Ruby on Rails
- **Database**: PostgreSQL
- **Deployment**: Vercel (front-end), hosted back-end (API)

---

## Installation

### Prerequisites
- **Node.js** and **npm**
- **Ruby on Rails** installed and configured with PostgreSQL
- **Vercel CLI** for deployment (optional)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Eventify.git
   cd Eventify
2. **Install Dependencies**
In the root directory, run:
```bash
npm install --legacy-peer-deps
```
3. **Run the Application**
Start the development server with:
```bash
npm start
```
The application should now be live on http://localhost:3000.

**Usage**
To view the deployed version of Eventify, visit the [Eventify App](https://new-eventify-p3mwykxe7-collins7-7.vercel.app/).

**Admin Access**
- Use the following credentials to access the Admin Dashboard:
- *Username*: Messi
- *Password*: leomessi
**User Access**
- Users can register with their details or log in if they already have an account.
- Once logged in, users can view and book events from the platform’s event listing page.
**Admin MVPS**
- *Create Event*: Admins can create new events with details such as name, category, date, and location.
- *Update Event*: Modify existing events to keep details up to date.
- *Delete Event*: Remove events that are no longer active or relevant.
- *Dashboard Access*: Access Admin functions using the provided credentials.

**User MVPS**
- *Sign Up / Login*: Users can register for an account or log in to access event features.
- *View Events*: Browse through available events, and filter events by category using a dropdown filter.
- *Book Events*: Securely book tickets for events they wish to attend.

**Future Enhancements**
- *Social Media Integration*: Allow users to share events on social media platforms.
- *Event Notifications*: Notify users of upcoming events based on their booking history.
- *Enhanced Filtering*: Add more filter options for events, such as location or price.
- *Analytics for Admins*: Provide insights into event attendance and popular categories.

**Contributing**
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request for review.
Please open an issue for major feature requests or bug reports before submitting a pull request.

**License**
This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
