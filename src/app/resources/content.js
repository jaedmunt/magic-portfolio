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
    subline: <>I'm Jaedon, Vice President of Partnerships at <Link href="https://www.chiphub.com"><InlineCode style={{ color: 'cyan' }}>ChipHub</InlineCode></Link> and Analyst at <Link href="https://www.spartechvc.com"><InlineCode style={{ color: 'cyan' }}>Spartech Ventures</InlineCode></Link>, a <Link href="https://www.yasinvest.com"><InlineCode style={{ color: 'cyan' }}>YAS Investments</InlineCode></Link> fund  where I source MENAs most innovative <InlineCode style={{ color: 'gold' }}>startups</InlineCode>. We support<InlineCode style={{ color: 'gold' }}>founders</InlineCode> and <InlineCode style={{ color: 'gold' }}>ideas</InlineCode> shaping the region and the world. <br/>
    <br/>
    After hours, I build my own projects.</>
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
        description: <>I'm Jaedon, Vice President of Partnerships at ChipHub and Analyst at Spartech Ventures, a YAS Investments fund where I source MENAs most innovative startups. We support founders and ideas shaping the region and the world.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Professional Experience',
        experiences: [
            {
                company: 'ChipHub',
                timeframe: 'Oct 2024 - Present',
                role: 'Vice-President of Partnerships',
                achievements: [
                    <>Led development of a feature requested by procurement directors and engineers of two leading global OEMs</>,
                    <>Developed the website and marketing materials targeting OEMs, CMs, JDMs et al, to drive sales and partnerships for our agentic AI-driven procurement solution.</>,
                    <>Developed and co-delivered investor/sales decks/presentations with the CEO.</>
                ],
                images: []
                },
            {
                company: 'Century Global Partners',
                timeframe: 'June 2024 - Present',
                role: 'Chief Technology Officer',
                achievements: [
                    <>Cofounded a gemstone brokerage and retail technology firm bringing digital innovation to the retail jewellery sector (a ‘learn-before-you-earn’ project).</>,
                    <>Formed a partnership with a prominent Antwerp-based direct-to-consumer diamond dealer to expand sales to the UK using a novel go-to-market strategy.</>,
                    <>Developing a flagship bespoke digital service leveraging computer vision and image-to-3D models with a proprietary pricing algorithm.</>
                ],
                images: []
            },
            {
                company: 'YAS Investments (Spartech Ventures)',
                timeframe: 'Oct 2023 - Present',
                role: 'Venture Capital Analyst Intern',
                achievements: [
                    <>Sourced for MENA-focused Spartech Venture II fund (seed, series A) successor to Spartech I ($100M, tech-enabled, sector agnostic).</>,
                    <>Created marketing materials for the fund to attract capital during fundraising, focused on UAE and KSA sovereign wealth funds.</>,
                    <>Outreach to founders seeking £1-2mm ticket sizes, qualifying startups for debt/equity financing, using written communication skills to generate memos.</>
                ],
                images: []
            },
            {
                company: 'Certie (Oxford-Innovation-backed)',
                timeframe: 'Mar 2023 - Jun 2024',
                role: 'Product & Development Lead',
                achievements: [
                    <>Managed 1 developer as Team lead for an ML platform converting text (like this CV) to a standardised taxonomy using natural language processing.</>,
                    <>Research/product for Sidetree protocol (ETH) credential product – developing business cases, marketing strategy, decks and pitching to universities.</>,
                    <>Delegate at London Tech Week (2023) and Gibraltar Finance Ministry (DLT framework author), interviews with Gibraltar Broadcasting Corporation.</>
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
                description: <>BA (Hons) Economics | [Sep 2022-present. Completion: Jun 2025]<br/><br/>
                Research project (dissertation) topic: <br/><br/>
                <InlineCode style={{ color: 'cyan' }}>How does open innovation impact innovation measurement in technology firms?</InlineCode><br/><br/>
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
                        <Link href="https://www.python.org/"><InlineCode style={{ color: 'cyan' }}>Python</InlineCode></Link>  
                        <Link href="https://golang.org/"><InlineCode style={{ color: 'cyan' }}>Golang</InlineCode></Link>
                        <Link href="https://reactjs.org/"><InlineCode style={{ color: 'cyan' }}>ReactJS</InlineCode></Link>  
                        <Link href="https://nextjs.org/"><InlineCode style={{ color: 'cyan' }}>NextJS</InlineCode></Link>
                        <Link href="https://remix.run/"><InlineCode style={{ color: 'cyan' }}>RemixJS</InlineCode></Link>
                        <Link href="https://hydrogen.shopify.dev/"><InlineCode style={{ color: 'cyan' }}>Hydrogen</InlineCode></Link>
                        <Link href="https://www.linux.org/"><InlineCode style={{ color: 'cyan' }}>Linux</InlineCode></Link>    
                        <Link href="https://code.visualstudio.com/"><InlineCode style={{ color: 'cyan' }}>VSCode</InlineCode></Link> 
                        <Link href="https://learn.microsoft.com/en-us/windows/wsl/"><InlineCode style={{ color: 'cyan' }}>WSL</InlineCode></Link>
                        <Link href="https://vercel.com/"><InlineCode style={{ color: 'cyan' }}>Vercel</InlineCode></Link>  
                        <br />
                        <Link href="https://resend.com/"><InlineCode style={{ color: 'cyan' }}>Resend</InlineCode></Link>
                        <Link href="https://www.mailgun.com/"><InlineCode style={{ color: 'cyan' }}>Mailgun</InlineCode></Link> 
                        <Link href="https://www.digitalocean.com/"><InlineCode style={{ color: 'cyan' }}>Digital Ocean</InlineCode></Link>   
                        <Link href="https://www.anaconda.com/"><InlineCode style={{ color: 'cyan' }}>Anaconda</InlineCode></Link>  
                        <Link href="https://git-scm.com/"><InlineCode style={{ color: 'cyan' }}>Git</InlineCode></Link> <br/> 
                        <Link href="https://hub.docker.com/"><InlineCode style={{ color: 'cyan' }}>DockerHub</InlineCode></Link>
                        <Link href="https://www.docker.com/"><InlineCode style={{ color: 'cyan' }}>Docker</InlineCode></Link>
                        <Link href="https://learn.microsoft.com/en-us/copilot-studio/"><InlineCode style={{ color: 'cyan' }}>Azure Copilot Studio</InlineCode></Link>
                        <Link href="https://aws.amazon.com/s3/"><InlineCode style={{ color: 'cyan' }}>AWS S3</InlineCode></Link> 
                        <br /> 
                        <Link href="https://aws.amazon.com/ec2/"><InlineCode style={{ color: 'cyan' }}>AWS EC2</InlineCode></Link>  
                        <Link href="https://www.gitpod.io/"><InlineCode style={{ color: 'cyan' }}>Gitpod</InlineCode></Link>  
                        <Link href="https://streamlit.io/"><InlineCode style={{ color: 'cyan' }}>Streamlit</InlineCode></Link>  
                        <Link href="https://jupyter.org/"><InlineCode style={{ color: 'cyan' }}>Jupyter</InlineCode></Link> <br/>
                        <Link href="https://colab.research.google.com/"><InlineCode style={{ color: 'cyan' }}>Google Colab</InlineCode></Link>  
                        <Link href="https://pandas.pydata.org/"><InlineCode style={{ color: 'cyan' }}>Pandas</InlineCode></Link> 
                        <Link href="https://pola.rs/"><InlineCode style={{ color: 'cyan' }}>Polars</InlineCode></Link>
                        <Link href="https://numpy.org/"><InlineCode style={{ color: 'cyan' }}>Numpy</InlineCode></Link>  
                        <Link href="https://scipy.org/"><InlineCode style={{ color: 'cyan' }}>Scipy</InlineCode></Link>
                        <Link href="https://www.mongodb.com/"><InlineCode style={{ color: 'cyan' }}>MongoDB</InlineCode></Link>  
                        <Link href="https://www.postman.com/"><InlineCode style={{ color: 'cyan' }}>Postman</InlineCode></Link> <br/> 
                        <Link href="https://elevenlabs.io/"><InlineCode style={{ color: 'cyan' }}>Elevenlabs</InlineCode></Link> 
                        <Link href="https://www.microsoft.com/microsoft-365"><InlineCode style={{ color: 'orange' }}>MS Office Suite</InlineCode></Link> 
                        <Link href="https://www.microsoft.com/microsoft-365/excel"><InlineCode style={{ color: 'orange' }}>Excel</InlineCode></Link>  
                        <Link href="https://www.minitab.com/"><InlineCode style={{ color: 'orange' }}>Minitab</InlineCode></Link>  
                        <Link href="https://www.eviews.com/"><InlineCode style={{ color: 'orange' }}>Eviews</InlineCode></Link> <br/> 
                        <Link href="https://www.notion.so/"><InlineCode style={{ color: 'green' }}>Notion</InlineCode></Link>
                        <Link href="https://medium.com/"><InlineCode style={{ color: 'green' }}>Medium</InlineCode></Link> 
                        <Link href="https://www.atlassian.com/software/jira"><InlineCode style={{ color: 'green' }}>Jira</InlineCode></Link>   
                        <Link href="https://monday.com/"><InlineCode style={{ color: 'green' }}>Monday</InlineCode></Link>  
                        <Link href="https://www.canva.com/"><InlineCode style={{ color: 'green' }}>Canva</InlineCode></Link>  
                        <InlineCode style={{ color: 'green' }}>CRM systems</InlineCode>
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
                timeframe: 'Jul 2023 - Present',
                description: <>Launched and grew the society to over 100 active members, leading equity research sessions, competitions, speaker events, and socials.<br/>
                Commercially aware, organising guest speakers including the UK Minister for Enterprise, Markets, and Small Business, CEO of Wall Street Oasis.<br/>
                Equities research and trading for the Bloomberg Trading Competition (‘23, ‘24); M&A strategic review for National Investment Banking Competition (’22,’23).<br/>
                Formed strategic partnerships with the Womens Societies Alliance and Warwick Incubator to expand our offering and promote inclusivity.</>
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
                timeframe: 'Sep 2024 - Present',
                description: <>Managed the financial health of Enactus NTU, including revenue analysis, expense tracking, and growth modelling.<br/>
                Oversaw annual budgeting, bank account management, and financial reporting to the executive team and stakeholders.<br/>
                Collaborated with the Commercial Director to maximise income generation through grants, sponsorships, and fundraising initiatives.</>
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