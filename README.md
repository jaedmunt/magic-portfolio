# **Build your portfolio with Once UI's Magic Portfolio**

Magic Portfolio was built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

## Gotchas:

1. The main branch of the repo is hooked up to Vercel so please branch off with the guidance below, otherwise any breaks will show on the production site. 

Please test for mobile, and use ismobile from react-device-detect to manage different on different devices and use the developer tools to check this. 

```
git branch <branch_name>
```
ideally just name it to yourself for ease, e.g:
```
git branch jaedon
```
to switch to the branch, use 
```
git checkout jaedon
```
just google the rest for how to request a merge with main...

back to add more so I might as well update this. 

To merge your branch, use 
```
git checkout <branch>
```
e.g 
```
git checkout jaedon
```

Check me out!

then to merge, go back to main after you have pushed your changes i.e
```
git checkout main
```

then to merge use:

```
git merge jaedon
```

2.The biggest annoying one is how Windows handles .mdx files. 

On Windows, Git and editors often use CRLF by default, which introduces hidden \r characters. Contentlayer expects LF line endings.

So if you change the .mdx files, you will probbaly get a bunch of annoying slug undefined issues that aren't real. 

You need to use prettier to clean the endings, after you have made changes to .mdx files or you will be unfucking a none-issue. 

None of you are even bothering to read this or contributing meaningfully - an issue I can't unfuck.

Anyway, navigate to the projects folder. 

You can do this when you are in root by using:

```
cd work/projects
```
and then
```
prettier --write --end-of-line lf "*.mdx"
```
or something like either

```
prettier --write --end-of-line lf "src/app/[locale]/work/projects/en/*.mdx"

```
from root, or

```
prettier --write --end-of-line lf "/**/*.mdx"
```
and you'll be fine. 

This cleans the files for these endings and you should get an output something like:

```
C:\Users\jaedo\Desktop\Repositories\magic-portfolio\src\app\[locale]\work\projects\en>prettier --write --end-of-line lf "*.mdx"
fpo-deanery-optimiser.mdx 287ms
nottingham-trent-investment-society.mdx 5ms
save-reality-knife-crime.mdx 36ms
small-modular-reactors.mdx 6ms
tailored-swift.mdx 53ms

```

**1. Clone the repository**
```
git clone https://github.com/jaedmunt/magic-portfolio.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
src/app/resources/config
```

**5. Edit content**
```
src/app/resources/content (or content-i18n for localization)
```

**6. Create blog posts / projects**
```
Add a new .mdx file to src/app/[locale]/blog/posts or src/app/[locale]/work/projects
```

