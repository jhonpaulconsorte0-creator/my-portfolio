export const projects = [
    {
      id: 1,
      title: 'Product Catalog',
      tagline: 'Filterable catalog UI built with component-driven React.',
      description:
        'A practice project from earlier in the course: a product catalog with search, category filters, and a shopping cart drawer, all driven by component state and props. Focused on breaking a UI into small, reusable pieces.',
      stack: ['React', 'useState', 'CSS Grid'],
      link: 'https://github.com/jordanreyes/product-catalog',
      status: 'complete',
    },
    {
      id: 2,
      title: 'Student Directory',
      tagline: 'Searchable directory with sortable columns and detail cards.',
      description:
        'A directory of student profiles rendered from a JSON array, with live search-as-you-type filtering and click-to-expand detail cards. Used to practice list rendering with keys and controlled form inputs.',
      stack: ['React', 'Controlled Inputs', 'Array.filter'],
      link: 'https://github.com/jordanreyes/student-directory',
      status: 'complete',
    },
    {
      id: 3,
      title: 'This Portfolio Site',
      tagline: 'The site you are looking at right now — routed with React Router.',
      description:
        'A single-page portfolio with client-side navigation, a dynamic project-detail route, a custom 404, and a production deployment on Vercel with a rewrite rule so every route survives a direct visit or refresh.',
      stack: ['React Router', 'Vite', 'Vercel'],
      link: 'https://github.com/jordanreyes/my-portfolio',
      status: 'live',
    },
    {
      id: 4,
      title: 'Habit Tracker',
      tagline: 'Daily habit tracker with streaks stored in component state.',
      description:
        'A small habit-tracking app where each habit keeps a running streak count and a weekly grid of completed days. Built to practice lifting state up between a list of habit cards and their parent.',
      stack: ['React', 'useState', 'useEffect'],
      link: 'https://github.com/jordanreyes/habit-tracker',
      status: 'complete',
    },
    {
      id: 5,
      title: 'Weather Lookup',
      tagline: 'City weather lookup consuming a public REST API.',
      description:
        'A form-driven app that looks up current conditions for a typed-in city using a public weather API, with loading and error states handled explicitly rather than left implicit.',
      stack: ['React', 'fetch', 'Async State'],
      link: 'https://github.com/jordanreyes/weather-lookup',
      status: 'complete',
    },
    {
      id: 6,
      title: 'Markdown Notes',
      tagline: 'Local notes app that renders Markdown as you type.',
      description:
        'A notes app with a split-pane editor: Markdown on the left, a live-rendered preview on the right. Notes persist to local storage so a refresh does not lose your draft.',
      stack: ['React', 'localStorage', 'Markdown parsing'],
      link: 'https://github.com/jordanreyes/markdown-notes',
      status: 'in progress',
    },
  ];