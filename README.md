<div align="center">
  
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Sample Movie Streaming Web  Application</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Resources | Assets](#links)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with React.js 19 for the user interface, Appwrite for the Trending Movies Algorithm, and styled with TailwindCSS, onStream is a WebApp project to help me review my ReactJS skills, after 3 years of absinance from this awesome Library.

The platform offers, guided by [JavaScript Mastery](https://www.youtube.com/watch?v=dCLhUialKPQ&t=3750s) a sleek and modern experience for browsing and discovering movies.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js 19
- Appwrite
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Browse All Movies**: Explore a wide range of movies available on the platform.

👉 **Search Movies**: Easily search for specific movies using a search function.

👉 **Trending Movies Algorithm**: Displays trending movies based on a dynamic algorithm.

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/okomojacob/onstream.git
cd onstream
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_IMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual **[TheMovieDatabase API](https://developer.themoviedb.org/reference/intro/getting-started)** and **[Appwrite](https://apwr.dev/JSM050)** credentials. You can obtain these credentials by signing up on the [TheMovieDatabase](https://developer.themoviedb.org/reference/intro/getting-started) and creating a new project on the [Appwrite](https://apwr.dev/JSM050)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>index.css</code></summary>

```css
@import url("link-to-googlefonts.css");
@import "tailwindcss";

@theme {
  --color-primary: #030014;
}

@layer base {
  body {
    font-family: "DM Sans", serif;
    font-optical-sizing: auto;
    background: #030014;
  }

  h1 {
    @apply mx-auto max-w-4xl text-center text-5xl font-bold leading-tight tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px];
  }


  header img {
    @apply w-full max-w-lg h-auto object-contain mx-auto drop-shadow-md;
  }
}

@layer components {
  .pattern {
    @apply bg-hero-pattern w-screen h-screen bg-center bg-cover absolute z-0;
  }

}

@utility text-gradient {
  @apply bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent;
}

@utility fancy-text {
  -webkit-text-stroke: 5px rgba(206, 206, 251, 0.5);
  font-size: 190px;
  font-family: "Bebas Neue", sans-serif;
}

@utility hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
```

</details>

## <a name="snippets">🕸️ React Snippets</a>

### GET /snippets

- The header variables to make the API calls.

```javascript
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
```

#### Explaining the fetchMovies Function:

- `fetchMovies function`: An async function that fetches movie data from the TMDb API. It sets the loading status to true, clears the error message, and makes a GET request to the TMDb API endpoint. 
- The response is then parsed as JSON and the movie list is updated with the results array. 
- If an error occurs during the fetch or the API response indicates an error, the error message is updated accordingly. 
- Finally, the loading status is set to false.

```javascript
const fetchMovies = async () => {
  setIsLoading(true);
  setErrorMsg("");

  try {
    const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);
    const data = await response.json();
    setMovieList(data.results || []);
    console.log("Got Movies ==>:", data);

    if (data.response === "False") {
      setErrorMsg(data.Error || "Failed to fetch movies.");
      setMovieList([]);
      return;
    }
  } catch (error) {
    console.log(`Error fetching movies: ${error}`);
    setErrorMsg("Error fetching movies. Please try again later.");
  } finally {
    setIsLoading(false);
  }
};
```

`useEffect` hook: The `useEffect hook` is used to fetch movie data when the component mounts. The fetchMovies function is called inside the effect.

## <a name="links">🔗 Resources | Assets</a>

1. [The Movie Database](https://developer.themoviedb.org/reference/keyword-movies)
2. [useDebounce Hook](https://github.com/streamich/react-use/blob/HEAD/docs/useDebounce.md)
3. 

