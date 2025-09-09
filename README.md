# 📚 Book Finder App

A **React + Tailwind CSS** web application to search, filter, and explore books using the **OpenLibrary API**.  
Built with a responsive design, this app allows users to quickly search for books, apply filters, and view details.

---

## 🚀 Features

- 🔍 **Search Books** by title, author, or keywords.
- 🎨 **Responsive UI** with React + Tailwind CSS for seamless mobile and desktop experience.
- 🛠️ **Filter Functionality**:
  - Filter by **Author**
  - Show only **Available eBooks** or **Non-eBooks**
  - Filter by **Language** (e.g., eng, fre)
  - Filter by **Year of Publication**
- 📖 **Book Details** with cover image, author, publish year, and link to OpenLibrary page.
- 📱 **Mobile-Friendly Sidebar Filters** (slide-in drawer).
- ⚡ **State Management** with React hooks (`useState`) for query, filters, and results.
- 🖼️ **Fallback Cover** if no cover is available.

---

## 📂 Project Structure

book-finder
┣ 📂 public
┃ ┗ 📜 Gemini_Generated_Image.png # App logo
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ 📜 BookCard.jsx # Card UI for a single book
┃ ┃ ┣ 📜 BookFinder.jsx # Main search + filter + state management
┃ ┃ ┣ 📜 BookList.jsx # Grid of BookCards
┃ ┃ ┣ 📜 Filters.jsx # Sidebar + mobile filter functionality
┃ ┃ ┗ 📜 SearchBar.jsx # Search input + button
┃ ┣ 📂 pages
┃ ┃ ┗ 📜 Home.jsx # Main page with header, footer, and BookFinder
┃ ┗ 📜 main.jsx # React entry point
┣ 📜 index.html
┣ 📜 package.json
┗ 📜 tailwind.config.js


---

## ⚙️ How It Works

The app is designed with **component-based architecture** and **React state management**.  
Here’s the step-by-step flow:

1. **🏠 Home.jsx**
   - Displays the **header** with logo and navigation.
   - Loads the `BookFinder` component inside the main section.
   - Includes a **footer** with About info.

2. **📚 BookFinder.jsx (Main Brain of the App)**
   - Manages all **state**:  
     - `query` → search text  
     - `books` → list of search results  
     - `filters` → author, ebook availability, language, year  
     - `loading & error` → for API status  
   - Handles the **searchBooks function**:
     - Calls OpenLibrary API
     - Applies all active filters before displaying results
   - Splits layout:
     - **Sidebar filters** (desktop)
     - **Toggleable drawer filters** (mobile)
     - **Search bar + book results** in the main section

3. **🔍 SearchBar.jsx**
   - Input field with a search icon
   - "Search" button triggers the `searchBooks` function

4. **🎛️ Filters.jsx**
   - Includes filter options:
     - Author (text input)
     - Ebook availability (Available / Not Available buttons)
     - Language (short code like "eng")
     - Year of publication (number input)
   - **Reset Filters button** clears all filters
   - **Responsive Design**: acts as a sidebar on desktop, and as a slide-in drawer with toggle button on mobile

5. **📖 BookList.jsx**
   - Displays a grid of books using the `BookCard` component
   - Responsive: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

6. **📘 BookCard.jsx**
   - Shows a single book’s details:
     - Cover image (or fallback placeholder)
     - Title
     - Author(s)
     - Publish year
     - "View More" button → redirects to the OpenLibrary page of the book

---

## 🛠️ Tech Stack

- ⚛️ **React.js** – Component-based frontend
- 🎨 **Tailwind CSS** – Modern utility-first styling
- 🌍 **OpenLibrary API** – Fetching book data
- 📱 **Lucide React** – Icons for UI

---

## 🖥️ Installation & Setup

1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/book-finder.git
   cd book-finder

2.Install dependencies:

npm install


3.Run the development server:

npm run dev


4.Open in browser:

http://localhost:5173

Screenshots

<img width="1893" height="879" alt="image" src="https://github.com/user-attachments/assets/34f0b7cc-1cf3-439a-88fd-ab21e923ee26" />

<img width="1900" height="881" alt="Screenshot 2025-09-09 153421" src="https://github.com/user-attachments/assets/bccfb098-c4e1-4745-a359-b06bc567b427" />

👨‍💻 Author

Lakshay Pahwa
💡 Passionate Web Developer | Loves building clean and user-friendly apps
