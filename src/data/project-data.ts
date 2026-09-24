import { ProjectData } from "../types/project";

export const projects: ProjectData[] = [
  {
    id: "leadbookstore",
    repo: "https://github.com/KingsleyUdegbunam/LeadBookStore",
    liveLink: "https://leadbookstore.netlify.app/",
    header: {
      title: "Lead Bookstore",

      context: "Study",
      year: 2026,
      team: "Frontend",
      role: "Design & Development",
      deliverables: "web app",
      type: "Personal Project",
    },
    heroImage: "/assets/lead-store.mp4",
    summary: "A leadership-centered bookstore",

    sections: {
      overview: {
        id: "overview",
        header: "Building a leadership-focused ecommerce platform",
        p1: "Creating an online bookstore centered around leadership, management, and personal growth, with a focused catalogue designed to serve readers at different stages of their leadership journey.",
        bgColor: "blue-100",
      },
      challenge: {
        id: "challenge",
        p1: "With an enormous and continually growing catalogue of books, finding titles that align with a specific goal can feel overwhelming.",
        p2: "The challenge was to reduce that sense of choice without making the catalogue feel restrictive — creating a more focused discovery experience while still giving readers enough variety to explore and find books relevant to their interests.",
      },
      direction: {
        id: "direction",
        header: "A bookstore with a point of view",
        p1: "Rather than building another general-purpose bookstore, I narrowed the catalogue around leadership, management, and personal growth.",
        p2: "The focus was intentional: to create a bookstore for people actively interested in developing their leadership, professional skills, and personal growth, rather than trying to serve every kind of reader.",
        bgColor: "blue-100",
      },
      experience: {
        id: "the experience",
        article1: {
          id: "discover",
          p1: "The catalogue is organized around leadership, management, and personal growth, giving readers a focused starting point for finding books relevant to what they want to learn.",
          image: "/assets/project-data/discover.png",
        },
        article2: {
          id: "evaluate",
          p1: "Product pages bring the important details together so readers can understand a book before adding it to their cart.",
          image: "/assets/project-data/evaluate.png",
        },
        article3: {
          id: "purchase",
          p1: "The checkout flow takes the reader from cart to payment while keeping the steps and order information clear throughout the process.",
          image: "/assets/project-data/purchase.png",
        },
        article4: {
          id: "Post-Checkout",
          p1: "The experience continues beyond checkout, with authenticated and non-authenticated routes for accessing order information.",
          p2: "Authenticated customers can return to their account to view previous orders, while non-authenticated customers can access an order directly using their email address and order reference.",
          image: "/assets/project-data/post-checkout.png",
        },
      },
      engineering: {
        id: "The Engineering",
        article1: {
          id: "Product & States",
          p1: "The application is primarily structured around reusable, state-driven components, with the catalogue, cart, and checkout following the same approach. This extends beyond the primary flows to account for loading, empty, error, and 404 states, keeping the interface intentional across different application conditions.",
          image: "/assets/project-data/states.png",
        },
        article2: {
          id: "Authentication & Orders",
          p1: "The application supports authenticated and guest customers, with account state shaping the experience after checkout. Guest customers can access their order using their email address and order reference, while authenticated customers can track orders directly from their account.",
          p2: "After checkout, guest customers are prompted to create an account, giving them a more convenient way to track future orders",
          image: "/assets/project-data/auth.png",
        },
        article3: {
          id: "Payment & Checkout",
          p1: "The checkout flow brings together customer details, cart data, order creation, and payment processing. Paystack handles the payment transaction while the application manages the resulting order states, including successful, failed, and pending payments.",
          image: "/assets/project-data/payment.png",
        },
        article4: {
          id: "Built from the Ground Up",
          p1: "Most of the interface from was delibrately built from scratch to understand the mechanisms behind the libraries and abstractions I was beginning to encounter. Core interactions such as the navigation menu, drawers, form controls, and responsive UI patterns were implemented without pre-built component libraries, while React Select and Embla Carousel were used where specialized functionality made more sense to leverage existing solutions.",
          image: "/assets/project-data/ground-up.png",
        },
      },
      constraints: {
        id: "Technical Constraints",
        p1: "Supabase was used for authentication and data storage, while the payment and order confirmation flow remains frontend-driven. After Paystack's onSuccess callback, the frontend proceeds with the order confirmation flow without independently verifying the transaction through a server-side workflow.",
      },
      reflection: {
        id: "reflection",
        p1: "Lead BookStore was my first attempt at building an e-commerce experience, which pushed me to think more deliberately about how each part of the product connects to bring the overall experience together.",
        p2: "The project also reinforced the value of giving a product a clear point of view. Narrowing the bookstore to leadership-related books gave the interface a stronger direction and made the experience more intentional.",
        bgColor: "blue-100",
      },
    },
  },
];
