<template>
  <section class="projects container mx-auto" id="projects">
    <div class="py-20">
      <h1 class="relative text-center text-3xl font-semibold opacity-75">PROJECTS</h1>
      <div class="mt-20 lg:flex lg:flex-wrap xl:w-5/6 xl:mx-auto">
        <div
          class="item mb-10 w-5/6 max-w-md mx-auto bg-black rounded-lg overflow-hidden"
          style="box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5)"
          v-for="project in projects"
          :key="project._id"
        >
          <ProjectItem :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  components: {
    ProjectItem: () => import('~/components/ProjectItem')
  },
  data() {
    return {
      projects: [
        {
          _id: 0,
          name: 'ROWDY BAGS',
          description:
            "Built for fashion brand ROWDY Bags during Corona Pandemic 2020. Built using Shopify, RoR, CSS, Liquid HTML and Javascript.",
          technologies: [
            {
              src: require('~/assets/img/Ruby.svg'),
              alt: 'Ruby Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            },
            {
              src: require('~/assets/img/html5.svg'),
              alt: 'HTML5 Logo'
            },
            {
              src: require('~/assets/img/css3.svg'),
              alt: 'CSS3 Logo'
            }
          ],
          background: require('~/assets/img/rowdy.jpeg'),
          liveURL: 'https://www.rowdybags.com',
          githubURL: 'https://github.com/CloudMunk'
        },
        {
          _id: 1,
          name: 'ROWDY BAGS Swiss',
          description:
            'Part of ROWDY Bags expansion into Europe, they also needed an eCommerce store in Swiss. Also built using Shopify, RoR, CSS, Liquid HTML and Javascript.',
          technologies: [
            {
              src: require('~/assets/img/Ruby.svg'),
              alt: 'Ruby Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            },
            {
              src: require('~/assets/img/html5.svg'),
              alt: 'HTML5 Logo'
            },
            {
              src: require('~/assets/img/css3.svg'),
              alt: 'CSS3 Logo'
            }
          ],
          background: require('~/assets/img/rowdySwiss.jpg'),
          liveURL: 'https://www.rowdybags.ch',
          githubURL: 'https://github.com/CloudMunk'
        },
        {
          _id: 2,
          name: 'Mysteries of Existence',
          description:
            "Passion project I live streamed and built over the Christmas Holidays of 2019, and launched in early January 2020.",
          technologies: [
            {
              src: require('~/assets/img/nuxt.svg'),
              alt: 'Nuxt Logo'
            },
            {
              src: require('~/assets/img/vuetify.svg'),
              alt: 'Vuetify Logo'
            },
            {
              src: require('~/assets/img/nest.svg'),
              alt: 'Node Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            }
          ],
          background: require('~/assets/img/moe.jpg'),
          liveURL: 'https://www.mysteriesofexistence.com',
          githubURL: 'https://github.com/CloudMunk/Mysteries-Of-Existence'
        },
        {
          _id: 3,
          name: 'Robo Friends',
          description:
            "React.js Project that filters through projects that are generated through an API request.",
          technologies: [
            {
              src: require('~/assets/img/react.svg'),
              alt: 'React Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            },
            {
              src: require('~/assets/img/css3.svg'),
              alt: 'CSS3 Logo'
            }
          ],
          background: require('~/assets/img/RoboFriends.png'),
          liveURL: 'https://sad-kare-e79291.netlify.app/',
          githubURL: 'https://github.com/CloudMunk/robofriends'
        },
        {
          _id: 4,
          name: 'Background Generator',
          description:
            "A background generator I built for creating linear backgrounds for my projects.",
          technologies: [
            {
              src: require('~/assets/img/html5.svg'),
              alt: 'React Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            },
            {
              src: require('~/assets/img/css3.svg'),
              alt: 'CSS3 Logo'
            }
          ],
          background: require('~/assets/img/bgGenerator.jpg'),
          liveURL: 'https://eloquent-pare-0bde7f.netlify.app/',
          githubURL: 'https://github.com/CloudMunk/background-generator_1.1'
        },
        {
          _id: 5,
          name: 'When Crypto News',
          description:
            "Crypto Currency News Website",
          technologies: [
            {
              src: require('~/assets/img/vue.svg'),
              alt: 'Vue Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            },
            {
              src: require('~/assets/img/vuetify.svg'),
              alt: 'Vuetify Logo'
            },
            {
              src: require('~/assets/img/firebase.svg'),
              alt: 'Firebase Logo'
            },
            {
              src: require('~/assets/img/storyblok.svg'),
              alt: 'Storyblok CMS Logo'
            }
          ],
          background: require('~/assets/img/whencn.png'),
          liveURL: 'https://www.whencryptonews.com/',
          githubURL: 'https://github.com/CloudMunk/WhenCryptoNews'
        },
        {
          _id: 6,
          name: 'North Side Soccer League',
          description:
            "A little leagues football page I built during my coding bootcamp in Barcelona in the srping of 2019.",
          technologies: [
            {
              src: require('~/assets/img/html5.svg'),
              alt: 'HTML5 Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            },
            {
              src: require('~/assets/img/css3.svg'),
              alt: 'CSS3 Logo'
            }
          ],
          background: require('~/assets/img/NYSL.png'),
          liveURL: 'https://compassionate-goodall-11cadd.netlify.app/',
          githubURL: 'https://github.com/CloudMunk/NYSL-Ubiqum'
        },
        {
          _id: 7,
          name: 'Thank God Its Fair',
          description:
            "This was a practice exercise we had 4 days to solve during my coding bootcamp in Barcelona.",
          technologies: [
            {
              src: require('~/assets/img/html5.svg'),
              alt: 'HTML5 Logo'
            },
            {
              src: require('~/assets/img/javascript.svg'),
              alt: 'Javascript Logo'
            },
            {
              src: require('~/assets/img/css3.svg'),
              alt: 'CSS3 Logo'
            }
          ],
          background: require('~/assets/img/TGIF.png'),
          liveURL: 'https://zealous-fermat-8090e8.netlify.app/',
          githubURL: 'https://github.com/CloudMunk/TGIF'
        }
      ]
    }
  }
}
</script>

<style scoped>
.item {
  transform: scale(0.4);
  transition: transform 750ms;
}

.projects > div > h1::after {
  @apply absolute;
  @apply bg-black;
  @apply bottom-0;
  @apply w-24;
  @apply h-1;
  content: '';
  left: calc(50% - 45px);
}
</style>