<template>
  <div>
    <h1 class="text-pink-400 flex justify-center">CANOPAS BLOG POST</h1>
  </div>
  <div class="container z-[1] space-x-20 rounded-lg">
    <div class="flex flex-col lg:flex-row">
      <a
        class="flex flex-col m-2.5 sm:m-5 flex-[1_1_0%] active:scale-[0.98]"
        v-for="blog in blogs"
        :key="blog"
        target="_blank"
      >
        <img
          :src="blog.image"
          class="w-full h-full object-cover rounded-t-x-lg"
          loading="lazy"
          :alt="blog.title"
        />

        <div
          class="flex flex-col justify-between flex-1 px-2.5 py-5 sm:p-5 shadow-[0_4px_4px_rgba(0,0,0,0.5)] bg-black-900 rounded-b-x-lg bg-black"
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
      <a class="v2-button flex item-center v2-normal-2-text" target="_blank">
        <span>VIEW ALL</span>
      </a>
    </div>
  </div>
</template>
<script type="module">
import flutter from "/assets/flutter.png";
import web from "/assets/web.jpeg";
export default {
  data() {
    return {
      blogs: [
        {
          id: "blog-1",
          image: flutter,
          name: "Jignesh Sanghani",
          date: "20-04-2022",
          title: "SwiftUI : Exploring NavigationStack and Making it Useful",
          Description:
            "Let’s be honest, NavigationView is terrible. Apart from the numerous limitations, developers had to deal with lots of bugs\
        and had to add workarounds.We were no exception at Canopas! While we were really excited about the newSwiftUI and were ready\
        to integrate it into a few production projects, navigation was always a pain. We even developed a library UIPilot to make\
        navigation as easy as possible.2–3 years later, Apple finally realized that we need something new entirely, and there comes\
        NavigationStack .",
        },
        {
          id: "blog-2",
          image: web,
          name: "Sumita K",
          date: "20-10-2022",
          title: "Golang : 1 Minute guide to Useful Tips and Libraries in 2022",
          Description:
            "Do you have 1 minute? If yes, that’s enough to know the latest Golang tips and libraries.\
        In this article, we’ll have a quick look at a few most essential libraries and tips that\
        make your day-to-day development effective and easy.Note — Think of these as more of a guideline to start with.\
        I would also advise you to later explore on your own as guidelines differ significantly based on project requirements and use cases..",
        },
      ],
    };
  },
};
</script>
