import { ColorInput, InlineCode } from "@/once-ui/components";
import Link from "next/link";
import { TechLink } from "@/components/TechLink";

const person = {
    firstName: 'Jaedon',
    lastName:  'Munton',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer | Agentic AI, Search & Data Infrastructure',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'German']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about technology, startups, economics, and diamonds. Signing up to this means I will let you know when I write, build or launch something cool :) <br/> <br/>Spoiler: something coming very soon.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/jaedmunt',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jaedonmunton/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:jaedonmuntonwork@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer | Agentic AI, Search & Data Infrastructure</>,
    subline: <>I'm Jaedon, a hands-on software engineer specialising in production agentic AI, search, and data infrastructure. I've worked across startups backed by <InlineCode style={{ color: '#b2b2b2' }}>Oxford University Innovation</InlineCode> and in the <InlineCode style={{ color: '#b2b2b2' }}>Nvidia Inception</InlineCode> program, spanning semiconductor, VC, and future-of-work SaaS.<br/><br/>Founder of <Link href="https://fluxsearch.io"><InlineCode style={{ color: '#d2d2d2' }}>Flux Search</InlineCode></Link>, a freshness-first semantic search engine for developers and AI agents. Previously Software Engineer at <Link href="https://evvolve.io"><InlineCode style={{ color: '#b2b2b2' }}>Evvolve & Partners</InlineCode></Link>, VP of Partnerships at <Link href="https://www.chiphub.com"><InlineCode style={{ color: '#b2b2b2' }}>ChipHub</InlineCode></Link>, and Analyst at <Link href="https://www.yasinvest.com"><InlineCode style={{ color: '#b2b2b2' }}>Spartech Ventures</InlineCode></Link>.</>
}

const about = {
    label: 'CV',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/jaedonmunton/30min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm Jaedon, a hands-on software engineer specialising in production agentic AI, search, and data infrastructure. I'm building Flux Search, a freshness-first semantic search engine for developers and AI agents. Previously Software Engineer at Evvolve & Partners, VP of Partnerships at ChipHub (Nvidia Inception program), and Analyst at Spartech Ventures. I've worked across startups including one backed by Oxford University Innovation. Grounded in econometrics with strong commercial awareness across finance, product, and engineering.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Professional Experience',
        experiences: [
            {
                company: 'Flux Search (fluxsearch.io)',
                timeframe: 'Jun 2025 - Present',
                role: 'Founder',
                achievements: [
                    <>Architecting and building a freshness-first semantic search engine for developers and AI agents, focused on real-time indexing and hybrid retrieval.</>,
                    <>Cleaned over 1.5 billion parquet rows of URLs and web data by refactoring to Polars, Tokio, and Reqwest, reducing pipeline completion from 2 months to 3 days.</>,
                    <>Designed modular crawling and ingestion pipelines with dockerised EC2/K8S services deployed with Terraform, Helm, and GitHub Actions on AWS.</>,
                    <>Prototyped in Python before refactoring to Go and Rust for memory safety and concurrency via goroutines to handle thousands of requests per second.</>,
                    <>Implemented vector-based and keyword hybrid retrieval with controlled ranking logic and performance instrumentation.</>,
                    <>Built reusable modular Rust components: parsers, URL validators, robots.txt checkers, crawlers, and schedulers.</>,
                    <>Expanded coverage from news and blogs to codebases (GitHub, Crates.io, PyPI, NPM) and academic papers.</>
                ],
                images: []
            },
            {
                company: 'Evvolve & Partners',
                timeframe: 'Aug 2025 - Mar 2026',
                role: 'Software Engineer / Analyst',
                achievements: [
                  <>Solo 0-1 role designing and building a production-grade investor–startup matching engine in use by 80+ fundraising clients raising $500k–$30M.</>,
                  <>Implemented hybrid retrieval and ranking pipelines (vector DB, embeddings) combining filters, embedding similarity, and deterministic scoring logic.</>,
                  <>Created an investor matcher from co-investment datasets leveraging a custom GPU-accelerated Node2Vec implementation in PyTorch Geometric.</>,
                  <>Built AI agents to onboard startups with tool use to write answers to PostgreSQL and trigger OCR document extraction.</>,
                  <>Defined a data model aggregating multiple databases and CRMs (Attio, BigQuery) containing startup information, call notes, and investor data.</>,
                  <>Built ETL workflows to scrape, clean, enrich, and validate large investor datasets (Parquet, PostgreSQL, BigQuery), with QA and regression testing in LangSmith.</>,
                  <>Designed evaluation loops to measure precision, reduce duplication/poor quality records, and improve relevance across thousands of records.</>,
                  <>Containerised services and maintained reproducible environments for ranking, reranking, and match-reason generation pipelines in Docker/Go.</>,
                  <>Built robust retries, resumability, idempotency, and cost optimisation for long-running pipelines, with observability via Grafana and Prometheus.</>,
                  <>Converted Figma designs into frontend interfaces in TypeScript on Bun/Deno and deployed on Vercel and AWS EC2 behind Nginx/Caddy load balancers.</>,
                  <>Consulted startups on fundraising strategy and programmatically prepared pitch materials and investor presentations.</>
                ],
                images: []
              },
            {
                company: 'ChipHub',
                timeframe: 'Oct 2024 - May 2025',
                role: 'Vice-President of Partnerships',
                achievements: [
                    <>Designed and built an agentic web search feature for datasheet discovery for millions of datasheets via SERP-style APIs and search operators.</>,
                    <>Enhanced the Azure-deployed document RAG pipeline in Go and Python, cutting procurement research time by ~70% for secure industry use cases.</>,
                    <>Developed internal prospecting tools for ICP discovery, replacing $3,600/year in tooling costs and enabling domain-specific outreach.</>,
                    <>Pitched to global OEMs including Google, Apple, Meta, and Nexperia using the SPICED framework, creating PRDs and domain-tailored marketing content.</>,
                    <>Hired and managed UK-based frontend developers, owning roadmap prioritisation, ticket processes, and OEM customer feedback loops.</>
                ],
                images: []
            },
            {
                company: 'YAS Investments (Spartech Ventures Fund II)',
                timeframe: 'Oct 2023 - Aug 2025',
                role: 'Venture Capital Analyst',
                achievements: [
                    <>Built and used a scouting tool to find suitable startups, taking 4 targets to due diligence and 2 to agreed investment.</>,
                    <>Built and deployed a web-scraping and matching engine using embedding-based similarity scoring (BERT, all-MiniLM-v6) and automated ranking logic.</>,
                    <>Extended the matching engine for a Hub71 partnership, connecting 100+ family offices to startup deal flow.</>,
                    <>Conducted market research that shaped the fund's technology thesis, with analysis fed directly into DDQ materials prepared for Mubadala sovereign fund.</>
                ],
                images: []
            },
            {
                company: 'Certie',
                timeframe: 'Mar 2023 - Jun 2024',
                role: 'Product & Development Lead (Machine Learning)',
                achievements: [
                    <>Led product & research for a Sidetree (Microsoft x Ethereum) credential platform, developing business cases, GTM strategy, and pitching to university registrars.</>,
                    <>Managed a junior developer building an ML platform to convert unstructured text into a standardised taxonomy using SpaCy NER and BERT.</>,
                    <>Built prototypes in Streamlit and React, showcasing to customers and leading ethnographic feedback sessions with students.</>,
                    <>Represented Certie at London Tech Week (2023) and the Gibraltar Ministry of Finance; interviewed by Gibraltar Broadcasting Corporation.</>
                ],
                images: []
            },
            {
                company: 'Action Tutoring',
                timeframe: 'Jan 2023 - Apr 2024',
                role: 'Information Technology Lead / Tutoring Supervisor (English)',
                achievements: [
                    <>Managed tech administration across 4 school programmes in Nottingham, overseeing data collection used in impact assessments critical to funding bids.</>,
                    <>Oversaw examinations and data collection during impact assessments to measure the value of the programme.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Nottingham Business School',
                description: <>BSc (Hons) Economics (Triple Crown reaccreditation) | Sep 2022 – Jun 2025<br/><br/>
                Dissertation: <InlineCode style={{ color: '#d2d2d2' }}>How does open innovation impact innovation measurement in the technology sector?</InlineCode> Using mixed methods difference-in-differences and network analysis. Required joining and processing 95,000+ row datasets using Polars and CuPy.<br/><br/>
                Modules: Econometrics, Finance for Economists, Quantitative Economics, Resource Economics, Investment Portfolio Management.<br/><br/>
                Awards: Dean's Award (Dec '23) · Sustainability in Practice <InlineCode style={{ color: '#d2d2d2' }}>Gold</InlineCode> · Student Group Executive <InlineCode style={{ color: '#d2d2d2' }}>Gold</InlineCode></>
            },
            {
                name: "St. Peter's School, York",
                description: <>A-Levels (Economics, Maths, Politics) & iGCSEs | Sep 2014 – Jun 2019<br/><br/>
                Full-ride scholarship for a portfolio project exploring a novel approach to in-vivo delivery gene editing via retroviral mechanisms.</>
            }
        ]
    },
    technical: {
         // set to false to hide this section
            title: 'Technical Skills & Certifications',
            skills: [
                {
                title: 'Languages (Spoken)',
                description: <>English <InlineCode style={{ color: '#d2d2d2' }}>Native</InlineCode><br/>German <InlineCode style={{ color: '#b2b2b2' }}>Professional Working</InlineCode></>,
                images: []
                },
                {
                title: 'Programming Languages',
                description: <>
                        <TechLink href="https://golang.org/">Go</TechLink>
                        <TechLink href="https://www.python.org/">Python</TechLink>
                        <TechLink href="https://www.typescriptlang.org/">TypeScript</TechLink>
                        <TechLink href="https://www.postgresql.org/">SQL</TechLink>
                        <br/>
                        <InlineCode style={{ color: '#959595' }}>Learning</InlineCode>
                        <TechLink href="https://www.rust-lang.org/" dim>Rust</TechLink>
                        <TechLink href="https://ziglang.org/" dim>Zig</TechLink>
                        <TechLink href="https://en.cppreference.com/w/c" dim>C</TechLink>
                </>,
                images: []
                },
                {
                title: 'Infrastructure & Cloud',
                description: <>
                        <TechLink href="https://www.docker.com/">Docker</TechLink>
                        <TechLink href="https://kubernetes.io/">Kubernetes</TechLink>
                        <TechLink href="https://www.terraform.io/">Terraform</TechLink>
                        <TechLink href="https://helm.sh/" dim>Helm</TechLink>
                        <TechLink href="https://github.com/features/actions" dim>GitHub Actions</TechLink>
                        <br/>
                        <TechLink href="https://aws.amazon.com/" dim>AWS (S3, EKS, EC2, Glue, Batch)</TechLink>
                        <TechLink href="https://azure.microsoft.com/" dim>Azure (Blob, Copilot Studio)</TechLink>
                        <br/>
                        <TechLink href="https://nginx.org/" dim>Nginx</TechLink>
                        <TechLink href="https://caddyserver.com/" dim>Caddy</TechLink>
                        <TechLink href="https://www.linux.org/" dim>Linux (WSL, Arch, Ubuntu, RockyLinux)</TechLink>
                        <TechLink href="https://fastapi.tiangolo.com/" dim>FastAPI</TechLink>
                </>,
                images: []
                },
                {
                title: 'Data & ML',
                description: <>
                        <TechLink href="https://huggingface.co/">Hugging Face</TechLink>
                        <TechLink href="https://pytorch.org/">PyTorch (Geometric)</TechLink>
                        <TechLink href="https://pola.rs/">Polars</TechLink>
                        <TechLink href="https://pandas.pydata.org/" dim>Pandas</TechLink>
                        <TechLink href="https://numpy.org/" dim>NumPy/CuPy</TechLink>
                        <br/>
                        <TechLink href="https://spacy.io/" dim>spaCy</TechLink>
                        <TechLink href="https://python.langchain.com/" dim>LangChain</TechLink>
                        <TechLink href="https://weaviate.io/" dim>Weaviate</TechLink>
                        <TechLink href="https://github.com/facebookresearch/faiss" dim>FAISS</TechLink>
                        <TechLink href="https://duckdb.org/" dim>DuckDB</TechLink>
                        <TechLink href="https://www.postgresql.org/" dim>PostgreSQL</TechLink>
                        <TechLink href="https://cloud.google.com/bigquery" dim>BigQuery</TechLink>
                        <br/>
                        <InlineCode style={{ color: '#959595' }}>Self-hosted inference</InlineCode>
                        <TechLink href="https://docs.ray.io/" dim>Ray</TechLink>
                        <TechLink href="https://github.com/vllm-project/vllm" dim>vLLM</TechLink>
                        <TechLink href="https://github.com/ggerganov/llama.cpp" dim>llama.cpp</TechLink>
                        <TechLink href="https://ollama.com/" dim>Ollama</TechLink>
                        <br/>
                        <InlineCode style={{ color: '#b2b2b2' }}>Embeddings (Qwen, Jina AI, Voyage, OpenAI)</InlineCode>
                        <br/>
                        <InlineCode style={{ color: '#b2b2b2' }}>OCR (Docling, Tesseract, Mistral, Azure Document Intelligence)</InlineCode>
                </>,
                images: []
                },
                {
                title: 'Frontend & UX',
                description: <>
                        <TechLink href="https://reactjs.org/">ReactJS</TechLink>
                        <TechLink href="https://nextjs.org/">NextJS</TechLink>
                        <TechLink href="https://tailwindcss.com/" dim>Tailwind</TechLink>
                        <TechLink href="https://ui.shadcn.com/" dim>Shadcn</TechLink>
                        <TechLink href="https://remix.run/" dim>RemixJS</TechLink>
                        <TechLink href="https://hydrogen.shopify.dev/" dim>HydrogenJS</TechLink>
                        <TechLink href="https://www.sanity.io/" dim>SanityCMS</TechLink>
                        <TechLink href="https://www.figma.com/" dim>Figma</TechLink>
                        <TechLink href="https://vercel.com/" dim>Vercel</TechLink>
                </>,
                images: []
                },
                {
                title: 'Observability & Tooling',
                description: <>
                        <TechLink href="https://grafana.com/" dim>Grafana</TechLink>
                        <TechLink href="https://prometheus.io/" dim>Prometheus</TechLink>
                        <TechLink href="https://smith.langchain.com/" dim>LangSmith/Langfuse</TechLink>
                        <TechLink href="https://aws.amazon.com/cloudwatch/" dim>CloudWatch</TechLink>
                        <br/>
                        <TechLink href="https://git-scm.com/" dim>Git/GitHub</TechLink>
                        <TechLink href="https://bun.sh/" dim>Bun</TechLink>
                        <TechLink href="https://deno.com/" dim>Deno</TechLink>
                        <TechLink href="https://cursor.sh/" dim>Cursor</TechLink>
                        <TechLink href="https://claude.ai/code" dim>Claude Code</TechLink>
                        <TechLink href="https://colab.research.google.com/" dim>Google Colab</TechLink>
                </>,
                images: []
                },
                {
                title: 'Certifications',
                description: <>
                Boot.dev (Go, Python, Linux, Docker, Kubernetes, AI Agents)<br/>
                Bloomberg Market Concepts <a href="https://portal.bloombergforeducation.com/certificates/fXdroDXYZac4XvXptAHjjNEo">View Credential</a><br/>
                Wall Street Prep (Accounting, LBO, DCF Financial Modelling)<br/>
                Newton Venture Program (Newton Foundations)<br/>
                JetBrains RustRover (Rust Programming)<br/>
                Exercism (Zig Programming)<br/>
                Coursera / Imperial College London (Mathematics for Machine Learning)
                </>,
                images: []
                }
            ]
            },
            extracurricular: {
            display: true, // set to false to hide this section
        title: 'Extracurricular Activities',
        activities: [
            {
                title: 'President | Investment Society',
                timeframe: 'Jul 2023 - Mar 2025',
                description: <>Launched and grew the society to 100+ members, hosting speakers including the UK Minister for Enterprise, Markets, and Small Business and CEO of Wall Street Oasis.<br/>
                Equities research and trading for the Bloomberg Trading Competition ('23, '24); M&A strategic review for National Investment Banking Competition ('22, '23).<br/>
                Established long-term vision, operating procedures, and handover including automated forms to reduce churn and enable scaling to 200+ members.</>
            },
            {
                title: 'Vice President & Treasurer | Debating Society',
                timeframe: 'Sep 2023 - Jul 2024',
                description: <>Managed society finance with payment request forms and invoices. Led sessions, wrote and chaired motions and produced marketing materials.<br/>
                Competed at the World Universities Debating Competition ('23) in Madrid; hosted the East Midlands Debating Competition ('24) for 7 universities.</>
            },
            {
                title: 'Startup Mentor | Warwick Incubator, Warwick University Business School',
                timeframe: 'Jan 2024 - Mar 2024',
                description: <>Advised 4 startups, with attention to detail, iterating and preparing their pitch decks and presentations for VC investors at the Shard, London.</>
            },
            {
                title: 'Finance Executive | Enactus UK',
                timeframe: 'Sep 2024 - May 2025',
                description: <>Managed society finances and built a digital webapp for the 'Save Reality' project tackling youth knife crime, applying a network-based propagation thesis to model intervention points.</>
            },
            {
                title: 'Volunteer Producer (Elections) | Sky News',
                timeframe: 'Jun 2024 - Jun 2024',
                description: <>Provided live global coverage of the Ashfield declaration, streaming Reform UK's first parliamentary seat won by Lee Anderson in the 2024 general election.</>
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

// Commented out gallery for streamlined performance-focused design
// const cdn = 'https://jaedmuntonwebsite.s3.us-east-1.amazonaws.com/gallery/';

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: []  // Commented out for performance - original images array below
    /* images: [
        { 
            src: `${cdn}img-30.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        {
            src: `${cdn}img-01.jpg`,
            alt: `image`,
            orientation: `horizontal`
        },
        {
            src: `${cdn}img-02.png`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-23.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-04.png`,
            alt: `image`,
            orientation: `horizontal`
        },
        {
            src: `${cdn}img-05.png`,
            alt: `image`,
            orientation: `horizontal`
        },
        {
            src: `${cdn}img-06.png`,
            alt: `image`,
            orientation: `horizontal`
        },
        {
            src: `${cdn}img-03.png`,
            alt: `image`,
            orientation: `vertical`
        },
        {
            src: `${cdn}img-08.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        {
            src: `${cdn}img-09.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        {
            src: `${cdn}img-10.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-11.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        {
            src: `${cdn}img-12.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        {
            src: `${cdn}img-13.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-14.jpg`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-15.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-16.png`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-17.png`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-20.JPG`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-21.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-22.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-07.JPG`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-24.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-25.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-26.JPG`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-27.JPG`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-28.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-29.JPG`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-31.jpg`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-32.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-33.jpg`,
            alt: `image`,
            orientation: `horizontal`
        },
        { 
            src: `${cdn}img-34.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-35.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-36.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-37.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-38.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-39.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-40.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-41.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-42.jpg`,
            alt: `image`,
            orientation: `vertical`
        },
        { 
            src: `${cdn}img-43.jpg`,
            alt: `image`,
            orientation: `vertical`
        }
    ]
    */
}

export { person, social, newsletter, home, about, blog, work, gallery };