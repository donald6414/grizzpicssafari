// https://nuxt.com/docs/api/configuration/nuxt-config
// import axios from "axios";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Grizzpicssafari | The Best Safaris In Tanzania",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "4QMPivL3eEzG9uzRNjQOibiwUpaJXmxoNLdDhOo6FDA",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Embark on unforgettable Tanzanian adventures with Grizzpicssafari. Discover the beauty of wildlife through expert-guided safari tours, from exclusive photography expeditions to budget-friendly family safaris. Explore Tanzania's hidden gems, including the Serengeti and Ngorongoro Crater, with our tailor-made itineraries. Immerse yourself in sustainable and authentic experiences, from cultural encounters to wilderness camping. Choose Grizzpicssafari for personalized, eco-friendly, and extraordinary journeys through the heart of Africa.",
        },
        {
          property: "og:image",
          content: "https://www.grizzpicssafari.com/assests/grizzpicsLogo2.jpg",
        },
        { property: "og:site_name", content: "Grizzpicssafari" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://grizzpicssafari.com/" },
        {
          property: "og:title",
          content: "Grizzpicssafari | The Best Safaris In Tanzania",
        },
        {
          name: "keywords",
          content:
            "Safari, Tanzania Safari, Serengeti, Ngorongoro, Manyara, Tarangire, Kilimanjaro, Meru, Best Tanzania Safari, Best Safari, Serengeri Ngorongoro Tarangire Lake Manyara,safari tours in Tanzania, wildlife photography excursions, off-the-beaten-path safaris, budget-friendly safari packages, custom safari itineraries, guided wildlife adventures, unique Tanzanian safaris, private game drives, birdwatching safaris, wilderness camping experiences, cultural safari tours, hidden gems of Tanzania, exclusive safari photography, eco-friendly wildlife tours, tailor-made Tanzania safaris, group safari expeditions, family-friendly wildlife holidays, Tanzania safari specialists, luxury safari accommodations, sustainable tourism in Tanzania, authentic Maasai village visits, Serengeti migration experiences, Ngorongoro Crater exploration, Tarangire National Park safaris, Selous Game Reserve adventures, Kilimanjaro trekking and safaris, Tanzanian coastal wildlife tours, Tanzania safari and beach vacations,wildlife safaris Selous Game Reserve, chimpanzee trekking Gombe Stream, luxury mobile camping Tanzania, cultural tours Maasai villages, hot air balloon Serengeti, boat safaris Lake Manyara, affordable wildlife viewing Tanzania, camping safaris solo travelers, family photography tours Ngorongoro Crater, honeymoon safari packages Tanzania, green season birdwatching Tanzania, Swahili immersion courses dry season, best time wildebeest migration safari Tanzania, safaris dietary restrictions.",
        },
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/assets/logo/grizzpicsLogo2.jpg' },
        {
          rel: "stylesheet",
          // href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css'
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
        },
        // { src: 'jquery.min.js' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "https://api.grizzpicssafari.com/api/",
      backendUrl: "https://api.grizzpicssafari.com/",
    },
  },
  //   plugins: [
  //     // Other plugins...
  //     '~/plugins/laravel-vue-pagination',
  //   ],
});
