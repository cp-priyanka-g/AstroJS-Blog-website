<template>
  <div>
    <h1 class="text-pink-400 flex justify-center">CANOPAS BLOG POST</h1>
  </div>
  <div class="container z-[1] lg:flex-wrap space-x-20">
    <div class="flex flex-col flex-wrap lg:flex-row">
      <a
        class="flex flex-col content-center hover:animate-jump-card -translate-y-6 m-2.5 sm:m-5 flex-[1_1_0%] active:scale-[0.98]"
        v-for="blog in blogs"
        :key="blog"
        target="_blank"
      >
        <img
          :src="blog.image"
          class="w-full h-full object-cover rounded-t-lg"
          :alt="blog.title"
        />

        <div
          class="flex flex-col justify-between flex-1 px-2.5 py-5 sm:p-5 shadow-[0_4px_4px_rgba(0,0,0,0.5)] bg-black-900 rounded-b-lg bg-black"
        >
          <div class="text-white">{{ blog.title }}</div>
          <div class="text-white mt-10">
            {{ blog.Description }}
          </div>
          <div class="w-full overflow-hidden mt-6">
            <div class="float-left text-white">
              {{ blog.date }}
            </div>
            <div class="float-right text-white">
              {{ blog.name }}
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="flex justify-end m-5">
      <a class="v2-button flex item-center" target="_blank">
        <span>VIEW ALL</span>
      </a>
    </div>
  </div>
</template>
<script type="module">
import flutter from "/assets/flutter.png";
import web from "/assets/web.jpeg";
import lotus from "/assets/lotus.jpeg";
import ios from "/assets/ios.jpeg";
export default {
  data() {
    return {
      blogs: [
        {
          id: "blog-1",
          image: flutter,
          name: "Nidhi Devra",
          date: "20-04-2022",
          title: "SwiftUI - Exploring NavigationStack and Making it Useful",
          Description:
            "Let's be honest, NavigationView is terrible. Apart from the numerous limitations, developers had to deal with lots of bugs\
        and had to add workarounds.We were no exception at Canopas! While we were really excited about the newSwiftUI and were ready\
        to integrate it into a few production projects, navigation was always a pain. We even developed a library UIPilot to make\
        navigation as easy as possible.2-3 years later, Apple finally realized that we need something new entirely, and there comes\
        NavigationStack .",
        },
        {
          id: "blog-2",
          image: lotus,
          name: "Priyanka Gour",
          date: "10-04-2022",
          title: "Qualities of an Effectively Creative People",
          Description:
            "I'm going to share with you some of the most important ideas that have ever been discovered in the area to\
            be a Highly Creative person.Creativity enables individuals to generate new or innovative ideas.\
             Having the Trait of a creative thinker often enables individuals to generate novel solutions to\
             any problem. Creative peoples have various qualities.",
        },
        {
          id: "blog-3",
          image: web,
          name: "Sumita K",
          date: "20-10-2022",
          title: "Golang - 1 Minute guide to Useful Tips and Libraries in 2022",
          Description:
            "Do you have 1 minute? If yes, that's enough to know the latest Golang tips and libraries.\
        In this article, we'll have a quick look at a few most essential libraries and tips that\
        make your day-to-day development effective and easy.Note - Think of these as more of a guideline to start with.\
        I would also advise you to later explore on your own as guidelines differ significantly based on project requirements and use cases..",
        },
        {
          id: "blog-4",
          image: ios,
          name: "Shruti Sonani",
          date: "25-2-2022",
          title: "1 min guide to iOS development best practices in 2022",
          Description:
            "1. Use SwiftUI-SwiftUI helps you build great-looking apps across all Apple platforms with the power of Swift - and as little\
            code as possible. With SwiftUI, you can bring even better experiences to all users, on any Apple device,\
             using just one set of tools and APIs.",
        },
      ],
    };
  },
};
</script>
