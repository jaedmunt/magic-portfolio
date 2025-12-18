import { ColorInput, InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
    firstName: 'Jaedon',
    lastName:  'Munton',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Venture Capital and Technology Professional',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'German', 'Afrikaans']  // optional: Leave the array empty if you don't want to display languages
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
        name: 'Email - ChipHub',
        icon: 'email',
        link: 'mailto:jaedon@chiphub.com',
    },
    {
        name: 'Email - YAS Invest & Spartech',
        icon: 'email',
        link: 'mailto:jaedon@yasinvest.com',
    },
    {
        name: 'Email - Century 💎',
        icon: 'email',
        link: 'mailto:jmunton@centuryglobalpartners.com',
    },
    {
        name: 'Email - NTU 🦁',
        icon: 'email',
        link: 'mailto:n1098983@my.ntu.ac.uk',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Venture Capital and Technology Professional</>,
    subline: <>I'm Jaedon, an Analyst & Developer at <Link href="https://evvolve.io"><InlineCode style={{ color: 'stone-500' }}>Evvolve & Partners</InlineCode></Link> where I support raises from pre-seed to series C and connect startups with investors. I'm also building a breathing map of the internet,<Link href="https://fluxsearch.io"><InlineCode style={{ color: 'stone-900' }}>Flux Search</InlineCode></Link>, a constantly fresh search engine. 
    <></> 
    <br/>
    <br/>
    Previously, I was Vice President of Partnerships at <Link href="https://www.chiphub.com"><InlineCode style={{ color: 'stone-500' }}>ChipHub</InlineCode></Link> in the semiconductor industry, and Analyst at <Link href="https://www.yasinvest.com"><InlineCode style={{ color: 'stone-500' }}>Spartech Ventures</InlineCode></Link>, venture fund where I sourced MENA's most innovative startups.<br/>
    <br/>
    With 2 years VC experience in MENA and 3 years developing innovative software in the UK and USA, I've developed a global perspective on company building and capital markets.</>
}

const about = {
    label: 'About',
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
        description: <>I'm Jaedon, a multidisciplinary technologist and venture analyst currently at evvolve. I'm also building Flux, a semantic search engine for developers, AI agents & content teams. Previously, I was Vice President of Partnerships at ChipHub and Analyst at Spartech Ventures, a YAS Investments fund where I sourced MENA's most innovative startups.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Professional Experience',
        experiences: [
            {
                company: 'Flux (fluxsearch.io)',
                timeframe: 'Jun 2025 - Present',
                role: 'Founder',
                achievements: [
                    <>Building a semantic search engine for developers, AI agents & content teams, offering the freshest results through novel approaches to crawling and indexing.</>
                ],
                images: []
            },
            {
                company: 'evvolve',
                timeframe: 'Present',
                role: 'Venture Analyst',
                achievements: [
                    <>Sourcing investments and conducting due diligence for early-stage technology startups.</>
                ],
                images: []
            },
            {
                company: 'ChipHub',
                timeframe: 'Oct 2024 - May 2025',
                role: 'Vice-President of Partnerships',
                achievements: [
                    <>More aptly titled 'founders' associate', responsible for strategising and executing GTM and fundraising, and hiring developers.</>,
                    <>Pitched to global OEMs including Google, Apple, Meta, Nexperia et al., using SPICED framework and collected feedback and ethnographic insights for the team.</>,
                    <>Coded dockerised agentic search and comparison tools for datasheets cutting time by ~70% in golang, python, and integrated into nextJS frontend.</>,
                    <>Developed internal prospecting tools to find ICPs, saving $300 per month (price of next best alternative), and enabling domain-specific outreach.</>,
                    <>Authored and delivered sales and investment decks and pitches, using excellent written communication, and formed partnerships for our GTM in N. America and Korea.</>
                ],
                images: []
            },
            {
                company: 'YAS Investments (Spartech Ventures Fund II)',
                timeframe: 'Oct 2023 - May 2025',
                role: 'Venture Capital Analyst',
                achievements: [
                    <>Sourced for MENA-focused Spartech Ventures 2nd fund (growth stage, tech-enabled, sector agnostic) maintaining strong relationships with growth stage executives.</>,
                    <>Outreach to founders seeking $2-5mm ticket sizes (equity) and $10M-$120M (debt), qualifying startups, using written communication skills to generate memos.</>,
                    <>Conducted market mapping, end-to-end due diligence series B and C rounds (~$80m fintech, ~$65m F&B), and supported DDQ answers for a UAE sovereign wealth fund.</>,
                    <>Coded a finance sector and stage matching service (all-mini-v6 and BERT) for Hub71 in python and docker, which scrapes web data and matches family office and startups.</>,
                    <>Created marketing materials, developed the website in NextJS (yasinvest.com) for the fund to attract capital during fundraising, ahead of partnership with Hub71.</>
                ],
                images: []
            },
            {
                company: 'Certie',
                timeframe: 'Mar 2023 - Jun 2024',
                role: 'Product & Development Lead (Machine Learning)',
                achievements: [
                    <>Managed a junior developer as team lead for an ML platform converting text (like this CV) to a standardised taxonomy using NLP – Spacy NER, BERT.</>,
                    <>Research/product for Sidetree protocol (ETH) credential product – developing business cases, marketing strategy, decks and pitching to university registrars.</>,
                    <>Delegate at London Tech Week (2023) and Gibraltar Finance Ministry (DLT framework author), interviewed by Gibraltar Broadcasting Corporation.</>
                ],
                images: []
            },
            {
                company: 'Chisholm Hunter',
                timeframe: 'Nov 2022 - Present',
                role: 'Sales Professional',
                achievements: [
                    <>Generated £145,000+ in sales per annum, part-time, using strong sales, customer relationship management skills and broad product knowledge.</>,
                    <>Achieved the highest Sales-Per-Labour-Hour (SPLH) of ~£185 in Nottingham store for consecutive years – the leading KPI for individual performance.</>,
                    <>Company-wide recognition for contributions including a £7000 sales day (4.7x weekly target) across 11 sales.</>
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
                description: <>BA (Hons) Economics | [Sep 2022-Dec 2025]<br/><br/>
                Dissertation: <br/><br/>
                <InlineCode style={{ color: 'cyan' }}>How does open innovation impact innovation measurement in the technology sector?</InlineCode> (mixed methods difference-in-differences and social network analysis)<br/><br/>
                Modules:<br/>
                <InlineCode style={{ color: 'gold' }}>Y1</InlineCode> Principles of Microeconomics, Principles of Macroeconomics, Introduction to Finance for Economists, Quantitative Economics<br/><br/>
                <InlineCode style={{ color: 'green' }}>Y2</InlineCode> Econometrics I, Applied Professional Development, Environmental and Resource Economics, Economic Evaluation<br/><br/>
                <InlineCode style={{ color: 'gold' }}>Y3</InlineCode> Research Project, Investment Portfolio Management, Macroeconomics Issues and Policy, Developing Professional Impact, The World Economy<br/><br/>
                Awards:<br/>
                
                Dean’s Award (Dec ’23)<br/> Sustainability in Practice <InlineCode style={{ color: 'gold' }}>Gold</InlineCode><br/> Student Group Executive <InlineCode style={{ color: 'gold' }}>Gold</InlineCode></>
            }
            
        ]
    },
    technical: {
         // set to false to hide this section
            title: 'Technical Skills & Certifications',
            skills: [
                {
                title: 'Languages',
                description: <>English <InlineCode style={{ color: 'gold' }}>Native</InlineCode><br/>German <InlineCode style={{ color: 'green' }}>Professional Working</InlineCode><br/>Afrikaans <InlineCode style={{ color: 'orange' }}>Limited Working</InlineCode></>,
                images: []
                },
                {
                title: 'Softwares/Platforms',
                description: <>
                        <Link href="https://www.python.org/"><InlineCode style={{ color: 'red' }}>Python</InlineCode></Link>
                        <Link href="https://www.rust-lang.org/"><InlineCode style={{ color: 'red' }}>Rust</InlineCode></Link>
                        <Link href="https://golang.org/"><InlineCode style={{ color: 'red' }}>Golang</InlineCode></Link>
                        <Link href="https://www.typescriptlang.org/"><InlineCode style={{ color: 'red' }}>TypeScript</InlineCode></Link>
                        <br />
                        <Link href="https://www.bun.sh/"><InlineCode style={{ color: 'cyan' }}>Bun</InlineCode></Link>
                        <Link href="https://www.terraform.io/"><InlineCode style={{ color: 'cyan' }}>Terraform</InlineCode></Link>
                        <Link href="https://www.docker.com/"><InlineCode style={{ color: 'cyan' }}>Docker</InlineCode></Link>
                        <Link href="https://k8s.io/"><InlineCode style={{ color: 'cyan' }}>Kubernetes (EKS/Minikube)</InlineCode></Link>
                        <Link href="https://www.linux.org/"><InlineCode style={{ color: 'cyan' }}>Linux (Arch/Ubuntu)</InlineCode></Link>
                        <br />
                        <Link href="https://reactjs.org/"><InlineCode style={{ color: 'cyan' }}>ReactJS</InlineCode></Link>  
                        <Link href="https://nextjs.org/"><InlineCode style={{ color: 'cyan' }}>NextJS</InlineCode></Link>
                        <Link href="https://remix.run/"><InlineCode style={{ color: 'cyan' }}>RemixJS</InlineCode></Link>
                        <Link href="https://hydrogen.shopify.dev/"><InlineCode style={{ color: 'cyan' }}>Hydrogen</InlineCode></Link>    
                        <Link href="https://weaviate.io/"><InlineCode style={{ color: 'cyan' }}>Weaviate Vector Database</InlineCode></Link>
                        <Link href="https://vercel.com/"><InlineCode style={{ color: 'cyan' }}>Vercel</InlineCode></Link>
                        <Link href="https://supabase.com/"><InlineCode style={{ color: 'cyan' }}>PSQL</InlineCode></Link>
                        <br />
                        <Link href="https://resend.com/"><InlineCode style={{ color: 'cyan' }}>Resend</InlineCode></Link>
                        <Link href="https://www.mailgun.com/"><InlineCode style={{ color: 'cyan' }}>Mailgun</InlineCode></Link> 
                        <Link href="https://www.digitalocean.com/"><InlineCode style={{ color: 'cyan' }}>Digital Ocean</InlineCode></Link>   
                        <Link href="https://www.anaconda.com/"><InlineCode style={{ color: 'cyan' }}>Anaconda</InlineCode></Link>  
                        <Link href="https://git-scm.com/"><InlineCode style={{ color: 'cyan' }}>Git</InlineCode></Link> <br/> 
                        <Link href="https://remix.run/"><InlineCode style={{ color: 'cyan' }}>RemixJS</InlineCode></Link>
                        <Link href="https://www.docker.com/"><InlineCode style={{ color: 'cyan' }}>Docker</InlineCode></Link>
                        <Link href="https://learn.microsoft.com/en-us/copilot-studio/"><InlineCode style={{ color: 'cyan' }}>Azure Copilot Studio</InlineCode></Link>
                        <Link href="https://www.openai.com/"><InlineCode style={{ color: 'cyan' }}>Langchain/Langsmith</InlineCode></Link>
                        <Link href="https://aws.amazon.com/"><InlineCode style={{ color: 'cyan' }}>AWS</InlineCode></Link> 
                        <br />
                        <Link href="https://jupyter.org/"><InlineCode style={{ color: 'cyan' }}>Jupyter</InlineCode></Link> <br/>
                        <Link href="https://colab.research.google.com/"><InlineCode style={{ color: 'cyan' }}>Google Colab</InlineCode></Link>  
                        <Link href="https://pandas.pydata.org/"><InlineCode style={{ color: 'cyan' }}>Pandas</InlineCode></Link> 
                        <Link href="https://pola.rs/"><InlineCode style={{ color: 'cyan' }}>Polars</InlineCode></Link>
                        <Link href="https://numpy.org/"><InlineCode style={{ color: 'cyan' }}>Numpy</InlineCode></Link>  
                        <Link href="https://scipy.org/"><InlineCode style={{ color: 'cyan' }}>Scipy</InlineCode></Link>
                        <Link href="https://www.postman.com/"><InlineCode style={{ color: 'cyan' }}>Postman</InlineCode></Link> <br/> 
                        <Link href="https://www.minitab.com/"><InlineCode style={{ color: 'orange' }}>Minitab</InlineCode></Link>  
                        <Link href="https://www.eviews.com/"><InlineCode style={{ color: 'orange' }}>Eviews</InlineCode></Link> <br/> 
                        <Link href="https://www.atlassian.com/software/jira"><InlineCode style={{ color: 'green' }}>Jira</InlineCode></Link>   
                        <Link href="https://monday.com/"><InlineCode style={{ color: 'green' }}>Monday</InlineCode></Link>  
                        <Link href="https://www.canva.com/"><InlineCode style={{ color: 'green' }}>Canva</InlineCode></Link>
                        <Link href="https://www.figma.com/"><InlineCode style={{ color: 'green' }}>Figma</InlineCode></Link>  
                        <Link href="https://www.attio.com/"><InlineCode style={{ color: 'green' }}>Attio</InlineCode></Link>
                        <Link href="https://www.airtable.com/"><InlineCode style={{ color: 'green' }}>Airtable</InlineCode></Link>
                </>,
                images: []
                },
                {
                title: 'Certifications',
                description: <>
                Bloomberg - Bloomberg Market Concepts<br/><a href="https://portal.bloombergforeducation.com/certificates/fXdroDXYZac4XvXptAHjjNEo">View Credential</a><br/>
                Newton Venture Program - Newton Foundations <a href="https://portal.bloombergforeducation.com/certificates/fXdroDXYZac4XvXptAHjjNEo">View Credential</a><br/>
                Coursera (Imperial College London) – Mathematics for Machine Learning <br/> 
                Wall Street prep – Accounting, LBO, DCF financial modelling.<br/> 
                
                FreeCodeCamp – Solidity and Smart Contracts, Blockchain
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
                description: <>Launched and grew the society to 100+ members, hosting guest speakers including the UK Minister for Enterprise, Markets, and Small Business, CEO of Wall Street Oasis.<br/>
                Equities research and trading for the Bloomberg Trading Competition ('23, '24); M&A strategic review for National Investment Banking Competition ('22,'23).</>
            },
            {
                title: 'Vice President & Treasurer | Debating Society',
                timeframe: 'Sep 2023 - Jul 2024',
                description: <>Managed society finance with payment request forms and invoices. Led sessions, wrote and chaired motions and produced marketing materials.<br/>
                Competed at the World Universities Debating Competition (‘23) in Madrid; hosted the East Midlands Debating Competition (‘24) for 7 universities.</>
            },
            {
                title: 'Startup Mentor | Warwick Incubator, Warwick University Business School',
                timeframe: 'Jan 2024 - Mar 2024',
                description: <>Advised 4 startups, with attention to detail, iterating and preparing their pitch decks and presentations for VC investors at the Shard, London.</>
            },
            {
                title: 'Finance Executive | Enactus UK',
                timeframe: 'Sep 2024 - May 2025',
                description: <>Managed society finances and solo-developed a digital app for the 'Save Reality' project tackling youth knife crime.</>
            },
            {
                title: 'Course Representative - Economics | NTSU',
                timeframe: 'Oct 2022 - Jul 2023',
                description: <>Surveyed and converted feedback into recommendations, presented to university administration, to advocate key issues on behalf of my cohort.</>
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

const cdn = 'https://jaedmuntonwebsite.s3.us-east-1.amazonaws.com/gallery/';

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
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
}

export { person, social, newsletter, home, about, blog, work, gallery };