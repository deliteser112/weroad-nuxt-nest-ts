# WeRoad Travel Booking System

Welcome to the WeRoad Travel Booking System, a fake booking system for WeRoad customers to book travels. This project is built using NestJS, GraphQL, Nuxt 3, and Tailwind CSS.

## Features

- Users can view available travels and book spots for their desired travel.
- Each travel has a maximum capacity of 15 travelers.
- Booked spots are reserved for 15 minutes during the checkout phase.
- Sold out travels are marked as sold out and cannot be booked.

## Tech Stack

- Backend: TypeScript, NestJS, GraphQL
- Frontend: TypeScript, Nuxt 3, Tailwind CSS

## Project Structure

The project is structured into backend and frontend folders:

### Backend

- `nestjs-travel-booking-backend`: Contains the NestJS backend code.
  - `src`: Contains the source code for the backend application.
  - `test`: Includes unit tests for backend services and resolvers.
  - `data`: Contains JSON files with fake travel data to get started.
  - `schema.gql`: GraphQL schema file for defining the API.

### Frontend

- `nuxt3-travel-booking-frontend`: Contains the Nuxt 3 frontend code.
  - `src`: Contains the source code for the frontend application.
  - `components`: Reusable Vue components for different parts of the UI.
  - `composables`: Vue composition functions for managing state and logic.
  - `pages`: Vue files representing different pages of the application.
  - `plugins`: Contains the Apollo Client setup for GraphQL integration.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/deliteser112/weroad-nuxtjs-nestjs-graphql.git
   ```

2. **Install Dependencies**

   - **Backend:**
     ```bash
     cd nestjs-travel-booking-backend
     npm install
     ```
   - **Frontend:**
     ```bash
     cd nuxt3-travel-booking-frontend
     npm install
     ```

3. **Start the Servers**

   - **Backend:**
     ```bash
     cd nestjs-travel-booking-backend
     npm run start:dev
     ```
   - **Frontend:**
     ```bash
     cd nuxt3-travel-booking-frontend
     npm run dev
     ```

4. **Access the Application**
   Open your browser and visit `http://localhost:3000` to access the WeRoad Travel Booking System.

## Backend API Endpoints

- **GraphQL API Endpoint:** `http://localhost:4000/graphql`

## Testing

- **Unit Tests:** Backend tests can be run using `npm run test` in the `nestjs-travel-booking-backend` folder.
- **End-to-End Tests:** Frontend tests can be run using `npm run test` in the `nuxt3-travel-booking-frontend` folder.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
