// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-3d-alien-bracket",
          title: '3D Alien Bracket',
          description: "Aug 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3D-alien-bracket/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-auditorium-architectural-model",
          title: 'Auditorium Architectural Model',
          description: "Nov 2017",
          section: "Projects",handler: () => {
              window.location.href = "/projects/auditorium/";
            },},{id: "projects-automatic-marble-run",
          title: 'Automatic Marble Run',
          description: "Aug - Sep 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/automatic-marble-run/";
            },},{id: "projects-backdrive-resistant-mechanism",
          title: 'Backdrive Resistant Mechanism',
          description: "May 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/backdrive-resistant-mechanism/";
            },},{id: "projects-reverse-engineering-a-bluebike",
          title: 'Reverse Engineering a Bluebike',
          description: "Feb - Mar 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bluebike/";
            },},{id: "projects-capacitor-plushie",
          title: 'Capacitor Plushie',
          description: "Jun 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/capacitor-plushie/";
            },},{id: "projects-chameleon",
          title: 'Chameleon',
          description: "Feb - May 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chameleon/";
            },},{id: "projects-chinese-learning-practice",
          title: 'Chinese Learning Practice',
          description: "Aug 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chinese-learning-practice/";
            },},{id: "projects-continuous-to-intermittent-motion-mechanisms",
          title: 'Continuous to Intermittent Motion Mechanisms',
          description: "Jun 2018 - Apr 2019",
          section: "Projects",handler: () => {
              window.location.href = "/projects/continuous-to-intermittent-motion/";
            },},{id: "projects-curta-calculator",
          title: 'Curta Calculator',
          description: "Aug 2024 - Feb 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/curta-calculator/";
            },},{id: "projects-donuts",
          title: 'Donuts',
          description: "May 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/donuts/";
            },},{id: "projects-e-bike-kickstand",
          title: 'E-Bike Kickstand',
          description: "Sep 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ebike-kickstand/";
            },},{id: "projects-jenga-calculator",
          title: 'Jenga Calculator',
          description: "Apr - Jul 2016",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jenga-calculator/";
            },},{id: "projects-jenga-structures",
          title: 'Jenga Structures',
          description: "Mar 2014 - Feb 2017",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jenga-structures/";
            },},{id: "projects-locks",
          title: 'Locks',
          description: "Jul 2018 - Sep 2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/locks/";
            },},{id: "projects-mechanical-ball-clock-2",
          title: 'Mechanical Ball Clock 2',
          description: "Jan 2021 - Aug 2026",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical-ball-clock-2/";
            },},{id: "projects-mechanical-ball-clock",
          title: 'Mechanical Ball Clock',
          description: "Apr - Jul 2019",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical-ball-clock/";
            },},{id: "projects-mechanical-design-challenges",
          title: 'Mechanical Design Challenges',
          description: "Oct 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical-design-challenges/";
            },},{id: "projects-milk-jug",
          title: 'Milk Jug',
          description: "Sep 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/milk-jug/";
            },},{id: "projects-mooncake-stamp",
          title: 'Mooncake Stamp',
          description: "Apr 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mooncake-stamp/";
            },},{id: "projects-motorcycle-scream-o-meter",
          title: 'Motorcycle Scream-O-Meter',
          description: "Dec 2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/motorcycle-scream-o-meter/";
            },},{id: "projects-nixie-tube-clock",
          title: 'Nixie Tube Clock',
          description: "Jan 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nixie-tube-clock/";
            },},{id: "projects-polyhedron-generator",
          title: 'Polyhedron Generator',
          description: "May 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/polyhedron-generator/";
            },},{id: "projects-puzzles",
          title: 'Puzzles',
          description: "Jun - Sep 2018",
          section: "Projects",handler: () => {
              window.location.href = "/projects/puzzles/";
            },},{id: "projects-raspberry-pi-ball-launcher",
          title: 'Raspberry Pi Ball Launcher',
          description: "Jan - Feb 2021",
          section: "Projects",handler: () => {
              window.location.href = "/projects/raspberry-pi-ball-launcher/";
            },},{id: "projects-rgb-exit-light",
          title: 'RGB Exit Light',
          description: "May - Jun 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rgb-exit-light/";
            },},{id: "projects-romanesco",
          title: 'Romanesco',
          description: "Feb 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/romanesco/";
            },},{id: "projects-self-assembling-virus",
          title: 'Self Assembling Virus',
          description: "Nov 2019",
          section: "Projects",handler: () => {
              window.location.href = "/projects/self-assembling-virus/";
            },},{id: "projects-single-use-mechanisms",
          title: 'Single Use Mechanisms',
          description: "Nov 2023 - Mar 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/single-use-mechanisms/";
            },},{id: "projects-split-ring-gearbox",
          title: 'Split Ring Gearbox',
          description: "May 2018",
          section: "Projects",handler: () => {
              window.location.href = "/projects/split-ring-gearbox/";
            },},{id: "projects-springless-ratchet",
          title: 'Springless Ratchet',
          description: "Oct 2017",
          section: "Projects",handler: () => {
              window.location.href = "/projects/springless-ratchet/";
            },},{id: "projects-streetlamp-morse-code",
          title: 'Streetlamp Morse Code',
          description: "Jul - Oct 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/streetlamp/";
            },},{id: "projects-tide-pod",
          title: 'Tide Pod',
          description: "Feb 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tide-pod/";
            },},{id: "projects-trillionaire",
          title: 'Trillionaire',
          description: "Jan 2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trillionaire/";
            },},{id: "projects-waterphone",
          title: 'Waterphone',
          description: "May 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/waterphone/";
            },},{id: "projects-wheelchair-speed-governor",
          title: 'Wheelchair Speed Governor',
          description: "Sep - Dec 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wheelchair-speed-governor/";
            },},{id: "projects-wingnut",
          title: 'Wingnut',
          description: "May 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wingnut/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%78.%66%61%6E.%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
