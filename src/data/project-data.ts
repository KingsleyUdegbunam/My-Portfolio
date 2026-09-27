import { ProjectData } from "../types/project";

export const projects: ProjectData[] = [
  {
    id: "leadbookstore",
    repo: "https://github.com/KingsleyUdegbunam/LeadBookStore",
    liveLink: "https://leadbookstore.netlify.app/",
    header: {
      title: "Lead Bookstore",
      year: 2026,
      role: "Design & Development",
      type: "Website",
      stack: ["React", "Supabase", "PayStack"],
    },
    heroImage: "/assets/lead-store.mp4",
    summary: "A leadership-centered bookstore",

    sections: {
      overview: {
        id: "overview",
        header: "Building a leadership-focused ecommerce platform",
        p: [
          "Creating an online bookstore centered around leadership, management, and personal growth, with a focused catalogue designed to serve readers at different stages of their leadership journey.",
        ],
      },
      challenge: {
        id: "challenge",
        p: [
          "With an enormous and continually growing catalogue of books, finding titles that align with a specific goal can feel overwhelming.",
          "The challenge was to reduce that sense of choice without making the catalogue feel restrictive — creating a more focused discovery experience while still giving readers enough variety to explore and find books relevant to their interests.",
        ],
      },
      direction: {
        id: "direction",
        header: "A bookstore with a point of view",
        p: [
          "Rather than building another general-purpose bookstore, I narrowed the catalogue around leadership, management, and personal growth.",
          "The focus was intentional: to create a bookstore for people actively interested in developing their leadership, professional skills, and personal growth, rather than trying to serve every kind of reader.",
        ],
      },
      experience: {
        id: "the experience",
        articles: [
          {
            id: "discover",
            p: [
              "The catalogue is organized around leadership, management, and personal growth, giving readers a focused starting point for finding books relevant to what they want to learn.",
            ],

            image: "/assets/project-data/discover.png",
          },
          {
            id: "evaluate",
            p: [
              "Product pages bring the important details together so readers can understand a book before adding it to their cart.",
            ],
            image: "/assets/project-data/evaluate.png",
          },
          {
            id: "purchase",
            p: [
              "The checkout flow takes the reader from cart to payment while keeping the steps and order information clear throughout the process.",
            ],

            image: "/assets/project-data/purchase.png",
          },
          {
            id: "Post-Checkout",
            p: [
              "The experience continues beyond checkout, with authenticated and non-authenticated routes for accessing order information.",
              "Authenticated customers can return to their account to view previous orders, while non-authenticated customers can access an order directly using their email address and order reference.",
            ],

            image: "/assets/project-data/post-checkout.png",
          },
        ],
      },
      engineering: {
        id: "The Engineering",
        articles: [
          {
            id: "Product & States",
            p: [
              "The application is primarily structured around reusable, state-driven components, with the catalogue, cart, and checkout following the same approach. This extends beyond the primary flows to account for loading, empty, error, and 404 states, keeping the interface intentional across different application conditions.",
            ],

            image: "/assets/project-data/states.png",
          },
          {
            id: "Authentication & Orders",
            p: [
              "The application supports authenticated and guest customers, with account state shaping the experience after checkout. Guest customers can access their order using their email address and order reference, while authenticated customers can track orders directly from their account.",
              "After checkout, guest customers are prompted to create an account, giving them a more convenient way to track future orders",
            ],

            image: "/assets/project-data/auth.png",
          },
          {
            id: "Payment & Checkout",
            p: [
              "The checkout flow brings together customer details, cart data, order creation, and payment processing. Paystack handles the payment transaction while the application manages the resulting order states, including successful, failed, and pending payments.",
            ],

            image: "/assets/project-data/payment.png",
          },
          {
            id: "Built from the Ground Up",
            p: [
              "Most of the interface from was delibrately built from scratch to understand the mechanisms behind the libraries and abstractions I was beginning to encounter. Core interactions such as the navigation menu, drawers, form controls, and responsive UI patterns were implemented without pre-built component libraries, while React Select and Embla Carousel were used where specialized functionality made more sense to leverage existing solutions.",
            ],
            image: "/assets/project-data/ground-up.png",
          },
        ],
      },
      constraints: {
        id: "Technical Constraints",
        p: [
          "Supabase was used for authentication and data storage, while the payment and order confirmation flow remains frontend-driven. After Paystack's onSuccess callback, the frontend proceeds with the order confirmation flow without independently verifying the transaction through a server-side workflow.",
        ],
      },
      reflection: {
        id: "reflection",
        p: [
          "Lead BookStore was my first attempt at building an e-commerce experience, which pushed me to think more deliberately about how each part of the product connects to bring the overall experience together.",
          "The project also reinforced the value of giving a product a clear point of view. Narrowing the bookstore to leadership-related books gave the interface a stronger direction and made the experience more intentional.",
        ],
      },
    },
  },
  {
    id: "memry",
    repo: "https://github.com/KingsleyUdegbunam/Memry",
    liveLink: "https://usememry.netlify.app",
    header: {
      title: "Memry",
      role: "Frontend Developer",
      year: 2025,
      type: "Web Application",
      stack: ["HTML", "CSS", "JavaScript"],
    },

    heroImage: "/assets/memry.mp4",
    summary: "A lightweight flashcard application built around active recall.",
    sections: {
      overview: {
        id: "overview",
        p: [
          "Memry is a simple flashcard application built around active recall.",
          "The experience takes a straightforward approach to studying: present a question, recall the answer, reveal it, and move to the next card.",
        ],
      },
      direction: {
        id: "direction",
        header: "Keep learning simple",
        p: [
          "The idea was to strip out anything that got in the way of the core study loop.",
          "Memry keeps the interface focused on the card in front of you, with only the controls needed to move through a session and reveal each answer.",
        ],
      },
      experience: {
        id: "experience",
        articles: [
          {
            id: "Learn. Recall. Repeat.",
            p: [
              "Users can start with a set of predefined flashcards or create their own, then move through each card, reveal the answer when they are ready, and see how far they've progressed through the set.",
              "The flow also accounts for both ends of a session, blocking navigation past the first or last card and surfacing the appropriate feedback at each boundary.",
            ],

            image: "/assets/project-data/memry.png",
          },
        ],
      },
      engineering: {
        id: "engineering",
        articles: [
          {
            id: "Zero framework",
            p: [
              "Memry was built with vanilla JavaScript, HTML, and CSS. This provided the opportunity to work through the core mechanics that frameworks usually handle for you.",
            ],
          },
          {
            id: "State and interaction",
            p: [
              "The flashcard experience is driven by JavaScript state: the active card, its position in the set, the current question or answer, and the user's progress are all tracked. Navigation, card flipping, boundary states, and completion feedback are all handled through the same flow.",
            ],
            image: "/assets/project-data/memry-states.png",
          },
          {
            id: "Persistence",
            p: [
              "Custom flashcards are stored in localStorage, allowing users to leave and return to their own set without requiring a backend or account system. The application falls back to the predefined cards when no custom set exists.",
            ],

            image: "/assets/project-data/memry-storage.png",
          },
          {
            id: "Modular structure",
            p: [
              "The JavaScript was split into separate modules — flashcard data, set selection, card interaction, and user-created data — to keep responsibilities separate as the project grew, rather than keeping the application in a single script.",
            ],
            image: "/assets/project-data/memry-modular.png",
          },
        ],
      },
      reflection: {
        id: "reflection",
        p: [
          "Memry is a reminder that a simple interface can still require thoughtful engineering.",
          "Building the application without a framework meant handling state, DOM updates, persistence, and interactions directly. This offered a better understanding of the underlying mechanics that frontend frameworks usually abstract away and reinforced the value of keeping the interface simple when the product itself doesn't need complexity.",
        ],
      },
    },
  },
  {
    id: "quantized",
    liveLink: "https://quantized23.netlify.app/",
    repo: "https://github.com/KingsleyUdegbunam/quantized",
    heroImage: "/assets/quantized.mp4",
    summary:
      "A photo gallery of memories from the Physics class of 2023 at the Federal University of Technology, Owerri, FUTO.",
    header: {
      title: "Quantized",
      year: 2025,
      type: "Web Application",
      role: "Design and Development",
      stack: ["HTML", "CSS", "JavaScript"],
    },
    sections: {
      overview: {
        id: "overview",
        header: "A photo gallery built around memories",
        p: [
          "Quantized is a photo gallery that holds memories from my undergraduate days with my peers, the Physics class of 2023 at FUTO.",
          'The idea came from wanting to build something that felt personal rather than another project picked from a list of "projects to build as a developer." As someone who loves holding onto memories, I made a habit of organizing group photographs at the end of every academic session, alongside candid shots of my colleagues and of myself with them. Quantized became the place to give those images a home.',
        ],
      },
      direction: {
        id: "direction",
        header: "Let the images lead",
        p: [
          "The interface was kept simple and visual, giving the collection room to breathe while still making it easy to move through the photographs and revisit different moments.",
        ],
      },
      experience: {
        id: "experience",
        articles: [
          {
            id: "Browse, open, remember",
            p: [
              "The gallery brings the collection together in a simple visual experience, allowing visitors to browse photographs and open individual images for a closer look.",
              "A lightbox keeps the experience focused on the photographs, letting visitors move between moments without leaving the gallery.",
            ],

            image: "/assets/project-data/quantized-exp.png",
          },
        ],
      },
      engineering: {
        id: "engineering",
        articles: [
          {
            id: "Learning by building",
            p: [
              "Quantized started as an exercise in HTML and CSS, but building the gallery quickly revealed the need for JavaScript to bring some of the interactions to life.",
              "This was my first introduction to working with JavaScript and integrating a JavaScript library into a project, giving me a practical look at how these tools could extend what I could build with HTML and CSS alone.",
            ],
          },
          {
            id: "Layout and composition",
            p: [
              "The gallery relies heavily on responsive layout, so understanding how different elements come together was essential to structuring the experience.",
              "Alongside the layout, I chose to experiment with CSS backgrounds, incorporating an image of scientific equations that fit the visual narrative of the gallery.",
            ],

            image: "/assets/project-data/quantized-bg.png",
          },
        ],
      },
      reflection: {
        id: "reflection",
        p: [
          "Quantized was my first project as a frontend developer, but it became more than a technical exercise. Building something around memories I genuinely cared about made the process feel personal, and seeing others revisit those moments through something I had built made the project feel worth creating.",
          "It was a small project, but it was the one that made building for the web feel real to me.",
        ],
      },
    },
  },
];
