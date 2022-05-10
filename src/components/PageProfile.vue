<template>
  <div>
    <h1>je suis dans le dashboard</h1>
    <!--  -->

    <body class="bg-gray-50">
      <noscript
        ><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-THQTXJ7"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe
      ></noscript>
      <nav class="fixed z-30 w-full bg-gray-50">
        <div class="py-3 px-3 lg:px-5 lg:pl-3">
          <div class="flex justify-between items-center">
            <div class="flex justify-start items-center">
              <button
                id="toggleSidebar"
                aria-expanded="true"
                aria-controls="sidebar"
                class="
                  hidden
                  p-2
                  mr-4
                  text-gray-600
                  rounded
                  cursor-pointer
                  lg:inline
                  hover:text-gray-900 hover:bg-gray-100
                "
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                class="
                  p-2
                  mr-2
                  text-gray-600
                  rounded
                  cursor-pointer
                  lg:hidden
                  hover:text-gray-900 hover:bg-gray-100
                  focus:bg-gray-100 focus:ring-2 focus:ring-gray-100
                "
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <a
                href="https://demos.creative-tim.com/soft-ui-flowbite-pro/"
                class="text-md font-semibold flex items-center lg:mr-1.5"
              >
                <img
                  src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/logo.svg"
                  class="mr-2 h-8"
                  alt="Creative Tim Logo"
                />
                <span
                  class="
                    hidden
                    md:inline-block
                    self-center
                    text-xl
                    font-bold
                    whitespace-nowrap
                  "
                  >Soft UI Flowbite PRO</span
                >
              </a>
              <form action="#" method="GET" class="hidden lg:block lg:pl-8">
                <label for="topbar-search" class="sr-only">Search</label>
                <div class="relative mt-1 lg:w-80">
                  <div
                    class="
                      flex
                      absolute
                      inset-y-0
                      left-0
                      items-center
                      pl-3
                      pointer-events-none
                    "
                  >
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    class="
                      bg-gray-50
                      border border-gray-300
                      text-gray-900
                      sm:text-sm
                      rounded-lg
                      focus:ring-2
                      focus:ring-fuchsia-50
                      focus:border-fuchsia-300
                      block
                      w-full
                      pl-10
                      p-2.5
                    "
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div class="flex items-center">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                class="
                  p-2
                  text-gray-500
                  rounded-2xl
                  lg:hidden
                  hover:text-gray-900 hover:bg-gray-100
                "
              >
                <span class="sr-only">Search</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                class="
                  p-2
                  text-gray-500
                  rounded-2xl
                  hover:text-gray-900 hover:bg-gray-100
                "
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
              <div
                class="
                  hidden
                  overflow-hidden
                  z-50
                  my-4
                  max-w-sm
                  text-base
                  list-none
                  bg-white
                  rounded
                  divide-y divide-gray-100
                  shadow-lg shadow-gray-300
                "
                id="notification-dropdown"
                data-popper-placement="bottom"
                style="
                  position: absolute;
                  inset: 0px auto auto 0px;
                  margin: 0px;
                  transform: translate3d(1162.5px, 65px, 0px);
                "
              >
                <div
                  class="
                    block
                    py-2
                    px-4
                    text-base
                    font-medium
                    text-center text-gray-700
                    bg-gray-50
                  "
                >
                  Notifications
                </div>
                <div>
                  <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png"
                        alt="Jese image"
                      />
                      <div
                        class="
                          flex
                          absolute
                          justify-center
                          items-center
                          ml-6
                          -mt-5
                          w-5
                          h-5
                          bg-fuchsia-600
                          rounded-full
                          border border-white
                        "
                      >
                        <svg
                          class="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                          ></path>
                          <path
                            d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="pl-3 w-full">
                      <div class="text-gray-500 font-normal text-sm mb-1.5">
                        New message from
                        <span class="font-semibold text-gray-900"
                          >Bonnie Green</span
                        >: "Hey, what's up? All set for the presentation?"
                      </div>
                      <div class="text-xs font-medium text-fuchsia-500">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos.png"
                        alt="Jese image"
                      />
                      <div
                        class="
                          flex
                          absolute
                          justify-center
                          items-center
                          ml-6
                          -mt-5
                          w-5
                          h-5
                          bg-gray-900
                          rounded-full
                          border border-white
                        "
                      >
                        <svg
                          class="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="pl-3 w-full">
                      <div class="text-gray-500 font-normal text-sm mb-1.5">
                        <span class="font-semibold text-gray-900"
                          >Jese leos</span
                        >
                        and
                        <span class="font-medium text-gray-900">5 others</span>
                        started following you.
                      </div>
                      <div class="text-xs font-medium text-fuchsia-500">
                        10 minutes ago
                      </div>
                    </div>
                  </a>
                  <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/joseph-mcfall.png"
                        alt="Joseph image"
                      />
                      <div
                        class="
                          flex
                          absolute
                          justify-center
                          items-center
                          ml-6
                          -mt-5
                          w-5
                          h-5
                          bg-red-600
                          rounded-full
                          border border-white
                        "
                      >
                        <svg
                          class="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="pl-3 w-full">
                      <div class="text-gray-500 font-normal text-sm mb-1.5">
                        <span class="font-semibold text-gray-900"
                          >Joseph Mcfall</span
                        >
                        and
                        <span class="font-medium text-gray-900"
                          >141 others</span
                        >
                        love your story. See it and view more stories.
                      </div>
                      <div class="text-xs font-medium text-fuchsia-500">
                        44 minutes ago
                      </div>
                    </div>
                  </a>
                  <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/leslie-livingston.png"
                        alt="Leslie image"
                      />
                      <div
                        class="
                          flex
                          absolute
                          justify-center
                          items-center
                          ml-6
                          -mt-5
                          w-5
                          h-5
                          bg-green-400
                          rounded-full
                          border border-white
                        "
                      >
                        <svg
                          class="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="pl-3 w-full">
                      <div class="text-gray-500 font-normal text-sm mb-1.5">
                        <span class="font-semibold text-gray-900"
                          >Leslie Livingston</span
                        >
                        mentioned you in a comment:
                        <span class="font-medium text-teal-500" href="#"
                          >@bonnie.green</span
                        >
                        what do you say?
                      </div>
                      <div class="text-xs font-medium text-fuchsia-500">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                  <a href="#" class="flex py-3 px-4 hover:bg-gray-100">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/robert-brown.png"
                        alt="Robert image"
                      />
                      <div
                        class="
                          flex
                          absolute
                          justify-center
                          items-center
                          ml-6
                          -mt-5
                          w-5
                          h-5
                          bg-purple-500
                          rounded-full
                          border border-white
                        "
                      >
                        <svg
                          class="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="pl-3 w-full">
                      <div class="text-gray-500 font-normal text-sm mb-1.5">
                        <span class="font-semibold text-gray-900"
                          >Robert Brown</span
                        >
                        posted a new video: Glassmorphism - learn how to
                        implement the new design trend.
                      </div>
                      <div class="text-xs font-medium text-fuchsia-500">
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  class="
                    block
                    py-2
                    text-base
                    font-normal
                    text-center text-gray-900
                    bg-gray-50
                    hover:bg-gray-100
                  "
                >
                  <div class="inline-flex items-center">
                    <svg
                      class="mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    View all
                  </div>
                </a>
              </div>
              <button
                type="button"
                data-dropdown-toggle="apps-dropdown"
                class="
                  p-2
                  text-gray-500
                  rounded-2xl
                  hover:text-gray-900 hover:bg-gray-100
                "
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </button>
              <div
                class="
                  hidden
                  overflow-hidden
                  z-50
                  my-4
                  max-w-sm
                  text-base
                  list-none
                  bg-white
                  rounded
                  divide-y divide-gray-100
                  shadow-lg shadow-gray-300
                "
                id="apps-dropdown"
                data-popper-placement="bottom"
                style="
                  position: absolute;
                  inset: 0px auto auto 0px;
                  margin: 0px;
                  transform: translate3d(1202.5px, 65px, 0px);
                "
              >
                <div
                  class="
                    block
                    py-2
                    px-4
                    text-base
                    font-medium
                    text-center text-gray-700
                    bg-gray-50
                  "
                >
                  Apps
                </div>
                <div class="grid grid-cols-3 gap-4 p-4">
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">Sales</div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">Users</div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">Inbox</div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">Profile</div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">
                      Settings
                    </div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">
                      Products
                    </div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">Pricing</div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">Billing</div>
                  </a>
                  <a
                    href="#"
                    class="block p-4 text-center rounded-2xl hover:bg-gray-100"
                  >
                    <svg
                      class="mx-auto mb-1 w-7 h-7 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    <div class="text-sm font-medium text-gray-900">Logout</div>
                  </a>
                </div>
              </div>
              <div class="ml-3">
                <div>
                  <button
                    type="button"
                    class="
                      flex
                      text-sm
                      bg-gray-800
                      rounded-full
                      focus:ring-4 focus:ring-gray-300
                    "
                    id="user-menu-button-2"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-2"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/neil-sims.png"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  class="
                    hidden
                    z-50
                    my-4
                    text-base
                    list-none
                    bg-white
                    rounded
                    divide-y divide-gray-100
                    shadow-lg shadow-gray-300
                  "
                  id="dropdown-2"
                  data-popper-placement="bottom"
                  style="
                    position: absolute;
                    inset: 0px auto auto 0px;
                    margin: 0px;
                    transform: translate3d(1250.5px, 61px, 0px);
                  "
                >
                  <div class="py-3 px-4" role="none">
                    <p class="text-sm" role="none">Neil Sims</p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                        "
                        role="menuitem"
                        >Dashboard</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                        "
                        role="menuitem"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                        "
                        role="menuitem"
                        >Earnings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="
                          block
                          py-2
                          px-4
                          text-sm text-gray-700
                          hover:bg-gray-100
                        "
                        role="menuitem"
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="https://www.creative-tim.com/product/soft-ui-flowbite-pro"
                target="_blank"
                class="
                  sm:inline-flex
                  ml-5
                  text-white
                  bg-gradient-to-br
                  from-pink-500
                  to-voilet-500
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  inline-flex
                  items-center
                  mr-3
                  shadow-md shadow-gray-300
                  hover:scale-[1.02]
                  transition-transform
                "
              >
                <svg
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  ></path>
                </svg>
                Buy now
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="flex overflow-hidden bg-white pt-16">
        <aside
          id="sidebar"
          class="
            flex
            hidden
            fixed
            top-0
            left-0
            z-20
            flex-col flex-shrink-0
            pt-16
            w-64
            h-full
            duration-200
            lg:flex
            transition-width
            lg:w-64
          "
          aria-label="Sidebar"
        >
          <div class="flex relative flex-col flex-1 pt-0 min-h-0 bg-gray-50">
            <div class="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
              <div class="flex-1 bg-gray-50 px-3" id="sidebar-items">
                <ul class="pb-2 pt-1">
                  <li>
                    <form action="#" method="GET" class="lg:hidden">
                      <label for="mobile-search" class="sr-only">Search</label>
                      <div class="relative">
                        <div
                          class="
                            flex
                            absolute
                            inset-y-0
                            left-0
                            items-center
                            pl-3
                            pointer-events-none
                          "
                        >
                          <svg
                            class="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="mobile-search"
                          class="
                            bg-gray-50
                            border border-gray-300
                            text-dark-500 text-sm
                            font-light
                            rounded-lg
                            focus:ring-2
                            focus:ring-fuchsia-50
                            focus:border-fuchsia-300
                            block
                            w-full
                            pl-10
                            p-2.5
                            mb-2
                          "
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </li>
                  <li>
                    <a
                      href="https://demos.creative-tim.com/soft-ui-flowbite-pro/"
                      class="
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      "
                      sidebar-toggle-collapse=""
                    >
                      <div
                        class="
                          bg-white
                          shadow-lg shadow-gray-300
                          text-dark-700
                          w-8
                          h-8
                          p-2.5
                          mr-1
                          rounded-lg
                          text-center
                          grid
                          place-items-center
                        "
                      >
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 45 40"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>shop</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1716.000000, -439.000000)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(0.000000, 148.000000)">
                                  <path
                                    class="color-background"
                                    d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                                    opacity="0.598981585"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >Dashboard</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://demos.creative-tim.com/soft-ui-flowbite-pro/kanban/"
                      class="
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      "
                      sidebar-toggle-collapse=""
                    >
                      <div
                        class="
                          bg-white
                          shadow-lg shadow-gray-300
                          text-dark-700
                          w-8
                          h-8
                          p-2.5
                          mr-1
                          rounded-lg
                          text-center
                          grid
                          place-items-center
                        "
                      >
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>document</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1870.000000, -591.000000)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g
                                  transform="translate(154.000000, 300.000000)"
                                >
                                  <path
                                    class="color-background"
                                    d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                    opacity="0.603585379"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >Kanban</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://demos.creative-tim.com/soft-ui-flowbite-pro/mailing/inbox/"
                      class="
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      "
                      sidebar-toggle-collapse=""
                    >
                      <div
                        class="
                          bg-white
                          shadow-lg shadow-gray-300
                          text-dark-700
                          w-8
                          h-8
                          p-2.5
                          mr-1
                          rounded-lg
                          text-center
                          grid
                          place-items-center
                        "
                      >
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 46 42"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>customer-support</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1717.000000, -291.000000)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(1.000000, 0.000000)">
                                  <path
                                    class="color-background"
                                    d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"
                                    opacity="0.59858631"
                                  ></path>
                                  <path
                                    class="color-foreground"
                                    d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"
                                  ></path>
                                  <path
                                    class="color-foreground"
                                    d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >Inbox</span
                      >
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="
                        w-full
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      "
                      sidebar-toggle-collapse=""
                      aria-controls="dropdown-ecommerce"
                      data-collapse-toggle="dropdown-ecommerce"
                    >
                      <div
                        class="
                          bg-white
                          shadow-lg shadow-gray-300
                          text-dark-700
                          w-8
                          h-8
                          p-2.5
                          mr-1
                          rounded-lg
                          text-center
                          grid
                          place-items-center
                        "
                      >
                        <svg
                          class="text-dark"
                          width="12px"
                          height="12px"
                          viewBox="0 0 42 44"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>basket</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1869.000000, -741.000000)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g
                                  id="basket"
                                  transform="translate(153.000000, 450.000000)"
                                >
                                  <path
                                    class="color-background"
                                    d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z"
                                    opacity="0.595377604"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >E-commerce</span
                      >
                      <svg
                        sidebar-toggle-item=""
                        class="w-4 h-4 ml-auto text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      id="dropdown-ecommerce"
                      sidebar-toggle-list=""
                      class="pb-2 pt-1 hidden"
                    >
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/e-commerce/products/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Products</span
                          ><span class="hidden">P</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/e-commerce/billing/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Billing</span
                          ><span class="hidden">B</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/e-commerce/invoice/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Invoice</span
                          ><span class="hidden">I</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="
                        w-full
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      "
                      sidebar-toggle-collapse=""
                      aria-controls="dropdown-users"
                      data-collapse-toggle="dropdown-users"
                    >
                      <div
                        class="
                          bg-white
                          shadow-lg shadow-gray-300
                          text-dark-700
                          w-8
                          h-8
                          p-2.5
                          mr-1
                          rounded-lg
                          text-center
                          grid
                          place-items-center
                        "
                      >
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 42 42"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>office</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1869.000000, -293.000000)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g
                                  id="office"
                                  transform="translate(153.000000, 2.000000)"
                                >
                                  <path
                                    class="color-background"
                                    d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                                    opacity="0.6"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >Users</span
                      >
                      <svg
                        sidebar-toggle-item=""
                        class="w-4 h-4 ml-auto text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      id="dropdown-users"
                      sidebar-toggle-list=""
                      class="pb-2 pt-1 hidden"
                    >
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/users/list/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Users list</span
                          ><span class="hidden">U</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/users/profile/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Profile</span
                          ><span class="hidden">P</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/users/settings/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Settings</span
                          ><span class="hidden">S</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="
                        w-full
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      "
                      sidebar-toggle-collapse=""
                      aria-controls="dropdown-pages"
                      data-collapse-toggle="dropdown-pages"
                    >
                      <div
                        class="
                          bg-white
                          shadow-lg shadow-gray-300
                          text-dark-700
                          w-8
                          h-8
                          p-2.5
                          mr-1
                          rounded-lg
                          text-center
                          grid
                          place-items-center
                        "
                      >
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 40"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>spaceship</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-1720.000000, -592.000000)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(4.000000, 301.000000)">
                                  <path
                                    class="color-background"
                                    d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                    opacity="0.598539807"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                    opacity="0.598539807"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >Pages</span
                      >
                      <svg
                        sidebar-toggle-item=""
                        class="w-4 h-4 ml-auto text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      id="dropdown-pages"
                      sidebar-toggle-list=""
                      class="pb-2 pt-1 hidden"
                    >
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/pages/pricing/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Pricing</span
                          ><span class="hidden">P</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/pages/maintenance/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Maintenance</span
                          ><span class="hidden">M</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/pages/404/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">404 not found</span
                          ><span class="hidden">4</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/pages/500/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">500 server error</span
                          ><span class="hidden">5</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="
                        w-full
                        flex
                        items-center
                        py-2.5
                        px-4
                        text-base
                        font-normal
                        text-dark-500
                        rounded-lg
                        hover:bg-gray-200
                        group
                        transition-all
                        duration-200
                      "
                      sidebar-toggle-collapse=""
                      aria-controls="dropdown-auth"
                      data-collapse-toggle="dropdown-auth"
                    >
                      <div
                        class="
                          bg-white
                          shadow-lg shadow-gray-300
                          text-dark-700
                          w-8
                          h-8
                          p-2.5
                          mr-1
                          rounded-lg
                          text-center
                          grid
                          place-items-center
                        "
                      >
                        <svg
                          width="12px"
                          height="12px"
                          viewBox="0 0 40 40"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>settings</title>
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              transform="translate(-2020.000000, -442.000000)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <g transform="translate(1716.000000, 291.000000)">
                                <g
                                  transform="translate(304.000000, 151.000000)"
                                >
                                  <polygon
                                    class="color-background"
                                    opacity="0.596981957"
                                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                  ></polygon>
                                  <path
                                    class="color-background"
                                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                    opacity="0.596981957"
                                  ></path>
                                  <path
                                    class="color-background"
                                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >Authentication</span
                      >
                      <svg
                        sidebar-toggle-item=""
                        class="w-4 h-4 ml-auto text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      id="dropdown-auth"
                      sidebar-toggle-list=""
                      class="pb-2 pt-1 hidden"
                    >
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/authentication/sign-in/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Sign in</span
                          ><span class="hidden">S</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/authentication/sign-up/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Sign up</span
                          ><span class="hidden">S</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/authentication/forgot-password/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Forgot password</span
                          ><span class="hidden">F</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/authentication/reset-password/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Reset password</span
                          ><span class="hidden">R</span></a
                        >
                      </li>
                      <li>
                        <a
                          href="https://demos.creative-tim.com/soft-ui-flowbite-pro/authentication/profile-lock/"
                          class="
                            text-sm text-dark-500
                            font-light
                            rounded-lg
                            flex
                            items-center
                            p-2
                            group
                            hover:bg-gray-200
                            transition
                            duration-75
                            pl-11
                          "
                          ><span class="">Profile lock</span
                          ><span class="hidden">P</span></a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr
                  class="
                    border-0
                    h-px
                    bg-gradient-to-r
                    from-gray-100
                    via-gray-300
                    to-gray-100
                  "
                />
                <div class="pt-2">
                  <a
                    href="https://creative-tim.com/product/soft-ui-flowbite-pro"
                    target="_blank"
                    class="
                      flex
                      items-center
                      py-2.5
                      px-4
                      text-base
                      font-normal
                      text-dark-500
                      rounded-lg
                      hover:bg-gray-200
                      group
                      transition-all
                      duration-200
                    "
                    sidebar-toggle-collapse=""
                  >
                    <div
                      class="
                        bg-white
                        shadow-lg shadow-gray-300
                        text-dark-700
                        w-8
                        h-8
                        p-2.5
                        mr-1
                        rounded-lg
                        text-center
                        grid
                        place-items-center
                      "
                    >
                      <svg
                        class="text-dark mb-1"
                        width="12px"
                        height="12px"
                        viewBox="0 0 42 42"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>box-3d-50</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="translate(-2319.000000, -291.000000)"
                            fill="currentColor"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(603.000000, 0.000000)">
                                <path
                                  class="color-background"
                                  d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                  opacity="0.7"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                  opacity="0.7"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span
                      class="ml-3 text-dark-500 text-sm font-light"
                      sidebar-toggle-item=""
                      >Buy now</span
                    >
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/flowbite/introduction/soft-ui-dashboard/"
                    target="_blank"
                    class="
                      flex
                      items-center
                      py-2.5
                      px-4
                      text-base
                      font-normal
                      text-dark-500
                      rounded-lg
                      hover:bg-gray-200
                      group
                      transition-all
                      duration-200
                    "
                    sidebar-toggle-collapse=""
                  >
                    <div
                      class="
                        bg-white
                        shadow-lg shadow-gray-300
                        text-dark-700
                        w-8
                        h-8
                        p-2.5
                        mr-1
                        rounded-lg
                        text-center
                        grid
                        place-items-center
                      "
                    >
                      <svg
                        class="text-dark mb-1"
                        width="12px"
                        height="12px"
                        viewBox="0 0 40 44"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>document</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="translate(-1870.000000, -591.000000)"
                            fill="currentColor"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(154.000000, 300.000000)">
                                <path
                                  class="color-background"
                                  d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                  opacity="0.603585379"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span
                      class="ml-3 text-dark-500 text-sm font-light"
                      sidebar-toggle-item=""
                      >Docs</span
                    >
                  </a>
                  <a
                    href="https://creative-tim.com/learning-lab/flowbite/alerts/soft-ui-dashboard/"
                    target="_blank"
                    class="
                      flex
                      items-center
                      py-2.5
                      px-4
                      text-base
                      font-normal
                      text-dark-500
                      rounded-lg
                      hover:bg-gray-200
                      group
                      transition-all
                      duration-200
                    "
                    sidebar-toggle-collapse=""
                  >
                    <div
                      class="
                        bg-white
                        shadow-lg shadow-gray-300
                        text-dark-700
                        w-8
                        h-8
                        p-2.5
                        mr-1
                        rounded-lg
                        text-center
                        grid
                        place-items-center
                      "
                    >
                      <svg
                        class="text-dark mb-1"
                        width="12px"
                        height="12px"
                        viewBox="0 0 40 44"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>switches</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="translate(-1870.000000, -440.000000)"
                            fill="currentColor"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(154.000000, 149.000000)">
                                <path
                                  class="color-background"
                                  d="M10,20 L30,20 C35.4545455,20 40,15.4545455 40,10 C40,4.54545455 35.4545455,0 30,0 L10,0 C4.54545455,0 0,4.54545455 0,10 C0,15.4545455 4.54545455,20 10,20 Z M10,3.63636364 C13.4545455,3.63636364 16.3636364,6.54545455 16.3636364,10 C16.3636364,13.4545455 13.4545455,16.3636364 10,16.3636364 C6.54545455,16.3636364 3.63636364,13.4545455 3.63636364,10 C3.63636364,6.54545455 6.54545455,3.63636364 10,3.63636364 Z"
                                  opacity="0.6"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M30,23.6363636 L10,23.6363636 C4.54545455,23.6363636 0,28.1818182 0,33.6363636 C0,39.0909091 4.54545455,43.6363636 10,43.6363636 L30,43.6363636 C35.4545455,43.6363636 40,39.0909091 40,33.6363636 C40,28.1818182 35.4545455,23.6363636 30,23.6363636 Z M30,40 C26.5454545,40 23.6363636,37.0909091 23.6363636,33.6363636 C23.6363636,30.1818182 26.5454545,27.2727273 30,27.2727273 C33.4545455,27.2727273 36.3636364,30.1818182 36.3636364,33.6363636 C36.3636364,37.0909091 33.4545455,40 30,40 Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span
                      class="ml-3 text-dark-500 text-sm font-light"
                      sidebar-toggle-item=""
                      >Components</span
                    >
                  </a>
                  <a
                    href="https://creative-tim.com/contact-us"
                    target="_blank"
                    class="
                      flex
                      items-center
                      py-2.5
                      px-4
                      text-base
                      font-normal
                      text-dark-500
                      rounded-lg
                      hover:bg-gray-200
                      group
                      transition-all
                      duration-200
                    "
                    sidebar-toggle-collapse=""
                  >
                    <div
                      class="
                        bg-white
                        shadow-lg shadow-gray-300
                        text-dark-700
                        w-8
                        h-8
                        p-2.5
                        mr-1
                        rounded-lg
                        text-center
                        grid
                        place-items-center
                      "
                    >
                      <svg
                        class="text-dark mb-1"
                        width="12px"
                        height="12px"
                        viewBox="0 0 44 43"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>megaphone</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="translate(-2168.000000, -591.000000)"
                            fill="currentColor"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(452.000000, 300.000000)">
                                <path
                                  class="color-background"
                                  d="M35.7958333,0.273166667 C35.2558424,-0.0603712374 34.5817509,-0.0908856664 34.0138333,0.1925 L19.734,7.33333333 L9.16666667,7.33333333 C4.10405646,7.33333333 0,11.4373898 0,16.5 C0,21.5626102 4.10405646,25.6666667 9.16666667,25.6666667 L19.734,25.6666667 L34.0138333,32.8166667 C34.5837412,33.1014624 35.2606401,33.0699651 35.8016385,32.7334768 C36.3426368,32.3969885 36.6701539,31.8037627 36.6666942,31.1666667 L36.6666942,1.83333333 C36.6666942,1.19744715 36.3370375,0.607006911 35.7958333,0.273166667 Z"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M38.5,11 L38.5,22 C41.5375661,22 44,19.5375661 44,16.5 C44,13.4624339 41.5375661,11 38.5,11 Z"
                                  opacity="0.601050967"
                                ></path>
                                <path
                                  class="color-background"
                                  d="M18.5936667,29.3333333 L10.6571667,29.3333333 L14.9361667,39.864 C15.7423448,41.6604248 17.8234451,42.4993948 19.6501416,41.764381 C21.4768381,41.0293672 22.3968823,38.982817 21.7341667,37.1286667 L18.5936667,29.3333333 Z"
                                  opacity="0.601050967"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span
                      class="ml-3 text-dark-500 text-sm font-light"
                      sidebar-toggle-item=""
                      >Help</span
                    >
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
                hidden
                relative
                bottom-0
                left-0
                justify-center
                w-full
                lg:flex
                bg-gray-100
                space-x-4
                p-4
              "
              sidebar-bottom-menu=""
            >
              <a
                href="#"
                class="
                  inline-flex
                  justify-center
                  p-2
                  text-gray-500
                  rounded
                  cursor-pointer
                  hover:text-dark-500 hover:bg-gray-200
                "
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://demos.creative-tim.com/soft-ui-flowbite-pro/users/settings/"
                data-tooltip-target="tooltip-settings"
                class="
                  inline-flex
                  justify-center
                  p-2
                  text-gray-500
                  rounded
                  cursor-pointer
                  hover:text-dark-500 hover:bg-gray-200
                "
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <div
                id="tooltip-settings"
                role="tooltip"
                class="
                  inline-block
                  absolute
                  invisible
                  z-10
                  py-2
                  px-3
                  text-sm
                  font-medium
                  text-white
                  bg-gray-900
                  rounded-lg
                  opacity-0
                  transition-opacity
                  duration-300
                  tooltip
                  shadow-lg-sm
                "
                data-popper-placement="top"
                style="
                  position: absolute;
                  inset: auto auto 0px 0px;
                  margin: 0px;
                  transform: translate3d(73px, -110px, 0px);
                "
              >
                Settings page
                <div
                  class="tooltip-arrow"
                  data-popper-arrow=""
                  style="
                    position: absolute;
                    left: 0px;
                    transform: translate3d(51px, 0px, 0px);
                  "
                ></div>
              </div>
              <button
                type="button"
                data-dropdown-toggle="language-dropdown"
                class="
                  inline-flex
                  justify-center
                  p-2
                  text-gray-500
                  rounded
                  cursor-pointer
                  hover:text-dark-500 hover:bg-gray-200
                "
              >
                <svg
                  class="h-5 w-5 rounded-full mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 3900 3900"
                >
                  <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                  <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    stroke-width="300"
                  ></path>
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path
                              id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            ></path>
                            <use xlink:href="#a" y="420"></use>
                            <use xlink:href="#a" y="840"></use>
                            <use xlink:href="#a" y="1260"></use>
                          </g>
                          <use xlink:href="#a" y="1680"></use>
                        </g>
                        <use xlink:href="#b" x="247" y="210"></use>
                      </g>
                      <use xlink:href="#c" x="494"></use>
                    </g>
                    <use xlink:href="#d" x="988"></use>
                    <use xlink:href="#c" x="1976"></use>
                    <use xlink:href="#e" x="2470"></use>
                  </g>
                </svg>
              </button>
              <div
                class="
                  hidden
                  z-50
                  my-4
                  text-base
                  list-none
                  bg-white
                  rounded
                  divide-y divide-gray-100
                  shadow-lg
                "
                id="language-dropdown"
                data-popper-placement="top"
                style="
                  position: absolute;
                  inset: auto auto 0px 0px;
                  margin: 0px;
                  transform: translate3d(128px, -56px, 0px);
                "
              >
                <ul class="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      "
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-us"
                          viewBox="0 0 512 512"
                        >
                          <g fill-rule="evenodd">
                            <g stroke-width="1pt">
                              <path
                                fill="#bd3d44"
                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              ></path>
                              <path
                                fill="#fff"
                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              ></path>
                            </g>
                            <path
                              fill="#192f5d"
                              d="M0 0h98.8v70H0z"
                              transform="scale(3.9385)"
                            ></path>
                            <path
                              fill="#fff"
                              d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                              transform="scale(3.9385)"
                            ></path>
                          </g>
                        </svg>
                        English (US)
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      "
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <path fill="#ffce00" d="M0 341.3h512V512H0z"></path>
                          <path d="M0 0h512v170.7H0z"></path>
                          <path fill="#d00" d="M0 170.7h512v170.6H0z"></path>
                        </svg>
                        Deutsch
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      "
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-it"
                          viewBox="0 0 512 512"
                        >
                          <g fill-rule="evenodd" stroke-width="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z"></path>
                            <path fill="#009246" d="M0 0h170.7v512H0z"></path>
                            <path
                              fill="#ce2b37"
                              d="M341.3 0H512v512H341.3z"
                            ></path>
                          </g>
                        </svg>
                        Italiano
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="
                        block
                        py-2
                        px-4
                        text-sm text-gray-700
                        hover:bg-gray-200
                      "
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          id="flag-icon-css-cn"
                          viewBox="0 0 512 512"
                        >
                          <defs>
                            <path
                              id="a"
                              fill="#ffde00"
                              d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                            ></path>
                          </defs>
                          <path fill="#de2910" d="M0 0h512v512H0z"></path>
                          <use
                            width="30"
                            height="20"
                            transform="matrix(76.8 0 0 76.8 128 128)"
                            xlink:href="#a"
                          ></use>
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-121 142.6 -47) scale(25.5827)"
                            xlink:href="#a"
                          ></use>
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-98.1 198 -82) scale(25.6)"
                            xlink:href="#a"
                          ></use>
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-74 272.4 -114) scale(25.6137)"
                            xlink:href="#a"
                          ></use>
                          <use
                            width="30"
                            height="20"
                            transform="matrix(16 -19.968 19.968 16 256 230.4)"
                            xlink:href="#a"
                          ></use>
                        </svg>
                        中文 (繁體)
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div
          class="hidden fixed inset-0 z-10 bg-gray-900 opacity-50"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div class="px-4 pt-6">
              <div
                class="
                  grid grid-cols-1
                  gap-6
                  mb-6
                  w-full
                  xl:grid-cols-2
                  2xl:grid-cols-4
                "
              >
                <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
                  <div class="flex items-center">
                    <div
                      class="
                        inline-flex
                        flex-shrink-0
                        justify-center
                        items-center
                        w-12
                        h-12
                        text-white
                        bg-gradient-to-br
                        from-pink-500
                        to-voilet-500
                        rounded-lg
                        shadow-md shadow-gray-300
                      "
                    >
                      <i
                        class="ni ni-money-coins text-lg"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="flex-shrink-0 ml-3">
                      <span
                        class="text-2xl font-bold leading-none text-gray-900"
                        >$3,600</span
                      >
                      <h3 class="text-base font-normal text-gray-500">
                        Today's Money
                      </h3>
                    </div>
                    <div
                      class="
                        flex flex-1
                        justify-end
                        items-center
                        ml-5
                        w-0
                        text-base
                        font-bold
                        text-green-500
                      "
                    >
                      +16%
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
                  <div class="flex items-center">
                    <div
                      class="
                        inline-flex
                        flex-shrink-0
                        justify-center
                        items-center
                        w-12
                        h-12
                        text-white
                        bg-gradient-to-br
                        from-pink-500
                        to-voilet-500
                        rounded-lg
                        shadow-md shadow-gray-300
                      "
                    >
                      <i class="ni ni-world text-lg" aria-hidden="true"></i>
                    </div>
                    <div class="flex-shrink-0 ml-3">
                      <span
                        class="text-2xl font-bold leading-none text-gray-900"
                        >2,300</span
                      >
                      <h3 class="text-base font-normal text-gray-500">
                        Today's Users
                      </h3>
                    </div>
                    <div
                      class="
                        flex flex-1
                        justify-end
                        items-center
                        ml-5
                        w-0
                        text-base
                        font-bold
                        text-green-500
                      "
                    >
                      +3%
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
                  <div class="flex items-center">
                    <div
                      class="
                        inline-flex
                        flex-shrink-0
                        justify-center
                        items-center
                        w-12
                        h-12
                        text-white
                        bg-gradient-to-br
                        from-pink-500
                        to-voilet-500
                        rounded-lg
                        shadow-md shadow-gray-300
                      "
                    >
                      <i
                        class="ni ni-paper-diploma text-lg"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="flex-shrink-0 ml-3">
                      <span
                        class="text-2xl font-bold leading-none text-gray-900"
                        >+3,462</span
                      >
                      <h3 class="text-base font-normal text-gray-500">
                        New Clients
                      </h3>
                    </div>
                    <div
                      class="
                        flex flex-1
                        justify-end
                        items-center
                        ml-5
                        w-0
                        text-base
                        font-bold
                        text-red-500
                      "
                    >
                      -2%
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
                  <div class="flex items-center">
                    <div
                      class="
                        inline-flex
                        flex-shrink-0
                        justify-center
                        items-center
                        w-12
                        h-12
                        text-white
                        bg-gradient-to-br
                        from-pink-500
                        to-voilet-500
                        rounded-lg
                        shadow-md shadow-gray-300
                      "
                    >
                      <i class="ni ni-cart text-lg" aria-hidden="true"></i>
                    </div>
                    <div class="flex-shrink-0 ml-3">
                      <span
                        class="text-2xl font-bold leading-none text-gray-900"
                        >$83,430</span
                      >
                      <h3 class="text-base font-normal text-gray-500">Sales</h3>
                    </div>
                    <div
                      class="
                        flex flex-1
                        justify-end
                        items-center
                        ml-5
                        w-0
                        text-base
                        font-bold
                        text-green-500
                      "
                    >
                      +5.34%
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  grid grid-cols-1
                  gap-6
                  mb-6
                  w-full
                  xl:grid-cols-2
                  2xl:grid-cols-3
                "
              >
                <div
                  class="
                    bg-white
                    shadow-lg shadow-gray-200
                    rounded-2xl
                    p-4
                    bg-gradient-to-r
                    from-dark-800
                    to-dark-900
                    2xl:col-span-2
                  "
                  style="position: relative"
                >
                  <div class="flex justify-between items-center mb-4">
                    <div class="flex-shrink-0">
                      <span
                        class="
                          text-2xl
                          font-bold
                          leading-none
                          text-white
                          sm:text-3xl
                        "
                        >$45,385</span
                      >
                      <h3 class="text-base font-normal text-gray-400">
                        Sales this week
                      </h3>
                    </div>
                    <div
                      class="
                        flex flex-1
                        justify-end
                        items-center
                        text-base
                        font-bold
                        text-green-500
                      "
                    >
                      12.5%
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div id="main-chart" style="min-height: 435px">
                    <div
                      id="apexchartsxsrv0ha6"
                      class="
                        apexcharts-canvas
                        apexchartsxsrv0ha6
                        apexcharts-theme-light
                      "
                      style="width: 530px; height: 420px"
                    >
                      <svg
                        id="SvgjsSvg1182"
                        width="530"
                        height="420"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev"
                        class="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style="background: transparent"
                      >
                        <g
                          id="SvgjsG1184"
                          class="apexcharts-inner apexcharts-graphical"
                          transform="translate(12, 30)"
                        >
                          <defs id="SvgjsDefs1183">
                            <linearGradient
                              id="SvgjsLinearGradient1187"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                id="SvgjsStop1188"
                                stop-opacity="0.4"
                                stop-color="rgba(216,227,240,0.4)"
                                offset="0"
                              ></stop>
                              <stop
                                id="SvgjsStop1189"
                                stop-opacity="0.5"
                                stop-color="rgba(190,209,230,0.5)"
                                offset="1"
                              ></stop>
                              <stop
                                id="SvgjsStop1190"
                                stop-opacity="0.5"
                                stop-color="rgba(190,209,230,0.5)"
                                offset="1"
                              ></stop>
                            </linearGradient>
                            <clipPath id="gridRectMaskxsrv0ha6">
                              <rect
                                id="SvgjsRect1192"
                                width="512"
                                height="385"
                                x="-2"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                            <clipPath id="forecastMaskxsrv0ha6"></clipPath>
                            <clipPath id="nonForecastMaskxsrv0ha6"></clipPath>
                            <clipPath id="gridRectMarkerMaskxsrv0ha6">
                              <rect
                                id="SvgjsRect1193"
                                width="512"
                                height="389"
                                x="-2"
                                y="-2"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                          </defs>
                          <rect
                            id="SvgjsRect1191"
                            width="10.885714285714284"
                            height="385"
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke-dasharray="3"
                            fill="url(#SvgjsLinearGradient1187)"
                            class="apexcharts-xcrosshairs"
                            y2="385"
                            filter="none"
                            fill-opacity="0.9"
                          ></rect>
                          <g
                            id="SvgjsG1219"
                            class="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1220"
                              class="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            ></g>
                          </g>
                          <g id="SvgjsG1229" class="apexcharts-grid">
                            <g
                              id="SvgjsG1230"
                              class="apexcharts-gridlines-horizontal"
                              style="display: none"
                            >
                              <line
                                id="SvgjsLine1232"
                                x1="0"
                                y1="0"
                                x2="508"
                                y2="0"
                                stroke="#e0e0e0"
                                stroke-dasharray="0"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1233"
                                x1="0"
                                y1="64.16666666666667"
                                x2="508"
                                y2="64.16666666666667"
                                stroke="#e0e0e0"
                                stroke-dasharray="0"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1234"
                                x1="0"
                                y1="128.33333333333334"
                                x2="508"
                                y2="128.33333333333334"
                                stroke="#e0e0e0"
                                stroke-dasharray="0"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1235"
                                x1="0"
                                y1="192.5"
                                x2="508"
                                y2="192.5"
                                stroke="#e0e0e0"
                                stroke-dasharray="0"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1236"
                                x1="0"
                                y1="256.6666666666667"
                                x2="508"
                                y2="256.6666666666667"
                                stroke="#e0e0e0"
                                stroke-dasharray="0"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1237"
                                x1="0"
                                y1="320.83333333333337"
                                x2="508"
                                y2="320.83333333333337"
                                stroke="#e0e0e0"
                                stroke-dasharray="0"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1238"
                                x1="0"
                                y1="385.00000000000006"
                                x2="508"
                                y2="385.00000000000006"
                                stroke="#e0e0e0"
                                stroke-dasharray="0"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG1231"
                              class="apexcharts-gridlines-vertical"
                              style="display: none"
                            ></g>
                            <line
                              id="SvgjsLine1240"
                              x1="0"
                              y1="385"
                              x2="508"
                              y2="385"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                            <line
                              id="SvgjsLine1239"
                              x1="0"
                              y1="1"
                              x2="0"
                              y2="385"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG1194"
                            class="apexcharts-bar-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1195"
                              class="apexcharts-series"
                              rel="1"
                              seriesName="Users"
                              data:realIndex="0"
                            >
                              <rect
                                id="SvgjsRect1198"
                                width="10.885714285714284"
                                height="385"
                                x="30.84285714285714"
                                y="0"
                                rx="6"
                                ry="6"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#4a576d"
                                class="apexcharts-backgroundBar"
                              ></rect>
                              <path
                                id="SvgjsPath1200"
                                d="M 30.84285714285714 385L 30.84285714285714 172.83333333333331Q 30.84285714285714 166.83333333333331 36.84285714285714 166.83333333333331L 35.72857142857143 166.83333333333331Q 41.72857142857143 166.83333333333331 41.72857142857143 172.83333333333331L 41.72857142857143 172.83333333333331L 41.72857142857143 385L 41.72857142857143 385z"
                                fill="rgba(203,12,159,1)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskxsrv0ha6)"
                                pathTo="M 30.84285714285714 385L 30.84285714285714 172.83333333333331Q 30.84285714285714 166.83333333333331 36.84285714285714 166.83333333333331L 35.72857142857143 166.83333333333331Q 41.72857142857143 166.83333333333331 41.72857142857143 172.83333333333331L 41.72857142857143 172.83333333333331L 41.72857142857143 385L 41.72857142857143 385z"
                                pathFrom="M 30.84285714285714 385L 30.84285714285714 385L 41.72857142857143 385L 41.72857142857143 385L 41.72857142857143 385L 41.72857142857143 385L 41.72857142857143 385L 30.84285714285714 385"
                                cy="166.83333333333331"
                                cx="103.41428571428571"
                                j="0"
                                val="34"
                                barHeight="218.16666666666669"
                                barWidth="10.885714285714284"
                              ></path>
                              <rect
                                id="SvgjsRect1201"
                                width="10.885714285714284"
                                height="385"
                                x="103.41428571428571"
                                y="0"
                                rx="6"
                                ry="6"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#4a576d"
                                class="apexcharts-backgroundBar"
                              ></rect>
                              <path
                                id="SvgjsPath1203"
                                d="M 103.41428571428571 385L 103.41428571428571 102.25Q 103.41428571428571 96.25 109.41428571428571 96.25L 108.3 96.25Q 114.3 96.25 114.3 102.25L 114.3 102.25L 114.3 385L 114.3 385z"
                                fill="rgba(203,12,159,1)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskxsrv0ha6)"
                                pathTo="M 103.41428571428571 385L 103.41428571428571 102.25Q 103.41428571428571 96.25 109.41428571428571 96.25L 108.3 96.25Q 114.3 96.25 114.3 102.25L 114.3 102.25L 114.3 385L 114.3 385z"
                                pathFrom="M 103.41428571428571 385L 103.41428571428571 385L 114.3 385L 114.3 385L 114.3 385L 114.3 385L 114.3 385L 103.41428571428571 385"
                                cy="96.25"
                                cx="175.98571428571427"
                                j="1"
                                val="45"
                                barHeight="288.75"
                                barWidth="10.885714285714284"
                              ></path>
                              <rect
                                id="SvgjsRect1204"
                                width="10.885714285714284"
                                height="385"
                                x="175.98571428571427"
                                y="0"
                                rx="6"
                                ry="6"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#4a576d"
                                class="apexcharts-backgroundBar"
                              ></rect>
                              <path
                                id="SvgjsPath1206"
                                d="M 175.98571428571427 385L 175.98571428571427 50.916666666666686Q 175.98571428571427 44.916666666666686 181.98571428571427 44.916666666666686L 180.87142857142854 44.916666666666686Q 186.87142857142854 44.916666666666686 186.87142857142854 50.916666666666686L 186.87142857142854 50.916666666666686L 186.87142857142854 385L 186.87142857142854 385z"
                                fill="rgba(203,12,159,1)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskxsrv0ha6)"
                                pathTo="M 175.98571428571427 385L 175.98571428571427 50.916666666666686Q 175.98571428571427 44.916666666666686 181.98571428571427 44.916666666666686L 180.87142857142854 44.916666666666686Q 186.87142857142854 44.916666666666686 186.87142857142854 50.916666666666686L 186.87142857142854 50.916666666666686L 186.87142857142854 385L 186.87142857142854 385z"
                                pathFrom="M 175.98571428571427 385L 175.98571428571427 385L 186.87142857142854 385L 186.87142857142854 385L 186.87142857142854 385L 186.87142857142854 385L 186.87142857142854 385L 175.98571428571427 385"
                                cy="44.916666666666686"
                                cx="248.55714285714282"
                                j="2"
                                val="53"
                                barHeight="340.0833333333333"
                                barWidth="10.885714285714284"
                              ></path>
                              <rect
                                id="SvgjsRect1207"
                                width="10.885714285714284"
                                height="385"
                                x="248.55714285714282"
                                y="0"
                                rx="6"
                                ry="6"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#4a576d"
                                class="apexcharts-backgroundBar"
                              ></rect>
                              <path
                                id="SvgjsPath1209"
                                d="M 248.55714285714282 385L 248.55714285714282 147.16666666666666Q 248.55714285714282 141.16666666666666 254.55714285714282 141.16666666666666L 253.44285714285712 141.16666666666666Q 259.4428571428571 141.16666666666666 259.4428571428571 147.16666666666666L 259.4428571428571 147.16666666666666L 259.4428571428571 385L 259.4428571428571 385z"
                                fill="rgba(203,12,159,1)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskxsrv0ha6)"
                                pathTo="M 248.55714285714282 385L 248.55714285714282 147.16666666666666Q 248.55714285714282 141.16666666666666 254.55714285714282 141.16666666666666L 253.44285714285712 141.16666666666666Q 259.4428571428571 141.16666666666666 259.4428571428571 147.16666666666666L 259.4428571428571 147.16666666666666L 259.4428571428571 385L 259.4428571428571 385z"
                                pathFrom="M 248.55714285714282 385L 248.55714285714282 385L 259.4428571428571 385L 259.4428571428571 385L 259.4428571428571 385L 259.4428571428571 385L 259.4428571428571 385L 248.55714285714282 385"
                                cy="141.16666666666666"
                                cx="321.1285714285714"
                                j="3"
                                val="38"
                                barHeight="243.83333333333334"
                                barWidth="10.885714285714284"
                              ></path>
                              <rect
                                id="SvgjsRect1210"
                                width="10.885714285714284"
                                height="385"
                                x="321.1285714285714"
                                y="0"
                                rx="6"
                                ry="6"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#4a576d"
                                class="apexcharts-backgroundBar"
                              ></rect>
                              <path
                                id="SvgjsPath1212"
                                d="M 321.1285714285714 385L 321.1285714285714 38.083333333333314Q 321.1285714285714 32.083333333333314 327.1285714285714 32.083333333333314L 326.0142857142857 32.083333333333314Q 332.0142857142857 32.083333333333314 332.0142857142857 38.083333333333314L 332.0142857142857 38.083333333333314L 332.0142857142857 385L 332.0142857142857 385z"
                                fill="rgba(203,12,159,1)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskxsrv0ha6)"
                                pathTo="M 321.1285714285714 385L 321.1285714285714 38.083333333333314Q 321.1285714285714 32.083333333333314 327.1285714285714 32.083333333333314L 326.0142857142857 32.083333333333314Q 332.0142857142857 32.083333333333314 332.0142857142857 38.083333333333314L 332.0142857142857 38.083333333333314L 332.0142857142857 385L 332.0142857142857 385z"
                                pathFrom="M 321.1285714285714 385L 321.1285714285714 385L 332.0142857142857 385L 332.0142857142857 385L 332.0142857142857 385L 332.0142857142857 385L 332.0142857142857 385L 321.1285714285714 385"
                                cy="32.083333333333314"
                                cx="393.69999999999993"
                                j="4"
                                val="55"
                                barHeight="352.9166666666667"
                                barWidth="10.885714285714284"
                              ></path>
                              <rect
                                id="SvgjsRect1213"
                                width="10.885714285714284"
                                height="385"
                                x="393.69999999999993"
                                y="0"
                                rx="6"
                                ry="6"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#4a576d"
                                class="apexcharts-backgroundBar"
                              ></rect>
                              <path
                                id="SvgjsPath1215"
                                d="M 393.69999999999993 385L 393.69999999999993 185.66666666666666Q 393.69999999999993 179.66666666666666 399.69999999999993 179.66666666666666L 398.58571428571423 179.66666666666666Q 404.58571428571423 179.66666666666666 404.58571428571423 185.66666666666666L 404.58571428571423 185.66666666666666L 404.58571428571423 385L 404.58571428571423 385z"
                                fill="rgba(203,12,159,1)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskxsrv0ha6)"
                                pathTo="M 393.69999999999993 385L 393.69999999999993 185.66666666666666Q 393.69999999999993 179.66666666666666 399.69999999999993 179.66666666666666L 398.58571428571423 179.66666666666666Q 404.58571428571423 179.66666666666666 404.58571428571423 185.66666666666666L 404.58571428571423 185.66666666666666L 404.58571428571423 385L 404.58571428571423 385z"
                                pathFrom="M 393.69999999999993 385L 393.69999999999993 385L 404.58571428571423 385L 404.58571428571423 385L 404.58571428571423 385L 404.58571428571423 385L 404.58571428571423 385L 393.69999999999993 385"
                                cy="179.66666666666666"
                                cx="466.2714285714285"
                                j="5"
                                val="32"
                                barHeight="205.33333333333334"
                                barWidth="10.885714285714284"
                              ></path>
                              <rect
                                id="SvgjsRect1216"
                                width="10.885714285714284"
                                height="385"
                                x="466.2714285714285"
                                y="0"
                                rx="6"
                                ry="6"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#4a576d"
                                class="apexcharts-backgroundBar"
                              ></rect>
                              <path
                                id="SvgjsPath1218"
                                d="M 466.2714285714285 385L 466.2714285714285 160Q 466.2714285714285 154 472.2714285714285 154L 471.1571428571428 154Q 477.1571428571428 154 477.1571428571428 160L 477.1571428571428 160L 477.1571428571428 385L 477.1571428571428 385z"
                                fill="rgba(203,12,159,1)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskxsrv0ha6)"
                                pathTo="M 466.2714285714285 385L 466.2714285714285 160Q 466.2714285714285 154 472.2714285714285 154L 471.1571428571428 154Q 477.1571428571428 154 477.1571428571428 160L 477.1571428571428 160L 477.1571428571428 385L 477.1571428571428 385z"
                                pathFrom="M 466.2714285714285 385L 466.2714285714285 385L 477.1571428571428 385L 477.1571428571428 385L 477.1571428571428 385L 477.1571428571428 385L 477.1571428571428 385L 466.2714285714285 385"
                                cy="154"
                                cx="538.842857142857"
                                j="6"
                                val="36"
                                barHeight="231"
                                barWidth="10.885714285714284"
                              ></path>
                              <g
                                id="SvgjsG1197"
                                class="apexcharts-bar-goals-markers"
                                style="pointer-events: none"
                              >
                                <g
                                  id="SvgjsG1199"
                                  className="apexcharts-bar-goals-groups"
                                ></g>
                                <g
                                  id="SvgjsG1202"
                                  className="apexcharts-bar-goals-groups"
                                ></g>
                                <g
                                  id="SvgjsG1205"
                                  className="apexcharts-bar-goals-groups"
                                ></g>
                                <g
                                  id="SvgjsG1208"
                                  className="apexcharts-bar-goals-groups"
                                ></g>
                                <g
                                  id="SvgjsG1211"
                                  className="apexcharts-bar-goals-groups"
                                ></g>
                                <g
                                  id="SvgjsG1214"
                                  className="apexcharts-bar-goals-groups"
                                ></g>
                                <g
                                  id="SvgjsG1217"
                                  className="apexcharts-bar-goals-groups"
                                ></g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1196"
                              class="apexcharts-datalabels"
                              data:realIndex="0"
                            ></g>
                          </g>
                          <line
                            id="SvgjsLine1241"
                            x1="0"
                            y1="0"
                            x2="508"
                            y2="0"
                            stroke="#b6b6b6"
                            stroke-dasharray="0"
                            stroke-width="1"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs"
                          ></line>
                          <line
                            id="SvgjsLine1242"
                            x1="0"
                            y1="0"
                            x2="508"
                            y2="0"
                            stroke-dasharray="0"
                            stroke-width="0"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs-hidden"
                          ></line>
                          <g
                            id="SvgjsG1243"
                            class="apexcharts-yaxis-annotations"
                          ></g>
                          <g
                            id="SvgjsG1244"
                            class="apexcharts-xaxis-annotations"
                          ></g>
                          <g
                            id="SvgjsG1245"
                            class="apexcharts-point-annotations"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG1228"
                          class="apexcharts-yaxis"
                          rel="0"
                          transform="translate(-18, 0)"
                        ></g>
                        <g id="SvgjsG1185" class="apexcharts-annotations"></g>
                      </svg>
                      <div
                        class="apexcharts-legend"
                        style="max-height: 210px"
                      ></div>
                      <div class="apexcharts-tooltip apexcharts-theme-light">
                        <div
                          class="apexcharts-tooltip-title"
                          style="
                            font-family: 'Open Sans', sans-serif;
                            font-size: 14px;
                          "
                        ></div>
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 1"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(203, 12, 159)"
                          ></span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: 'Open Sans', sans-serif;
                              font-size: 14px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span
                                class="apexcharts-tooltip-text-y-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-y-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span
                                class="apexcharts-tooltip-text-goals-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-goals-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span
                                class="apexcharts-tooltip-text-z-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-z-value"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          apexcharts-yaxistooltip
                          apexcharts-yaxistooltip-0
                          apexcharts-yaxistooltip-left
                          apexcharts-theme-light
                        "
                      >
                        <div class="apexcharts-yaxistooltip-text"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      pt-3
                      mt-5
                      border-t border-gray-700
                      sm:pt-6
                    "
                  >
                    <div>
                      <button
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-sm
                          font-medium
                          text-center text-gray-400
                          rounded-2xl
                          hover:text-white
                        "
                        type="button"
                        data-dropdown-toggle="weekly-sales-dropdown"
                      >
                        Last 7 days
                        <svg
                          class="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        class="
                          hidden
                          z-50
                          my-4
                          text-base
                          list-none
                          bg-white
                          rounded
                          divide-y divide-gray-100
                          shadow-lg shadow-gray-200
                        "
                        id="weekly-sales-dropdown"
                        data-popper-placement="bottom"
                        style="
                          position: absolute;
                          inset: 0px auto auto 0px;
                          margin: 0px;
                          transform: translate3d(152px, 919px, 0px);
                        "
                      >
                        <div class="py-3 px-4" role="none">
                          <p
                            class="text-sm font-medium text-gray-900 truncate"
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Yesterday</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Today</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 7 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 30 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 90 days</a
                            >
                          </li>
                        </ul>
                        <div class="py-1" role="none">
                          <a
                            href="#"
                            class="
                              block
                              py-2
                              px-4
                              text-sm text-gray-700
                              hover:bg-gray-100
                            "
                            role="menuitem"
                            >Custom...</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-xs
                          font-medium
                          text-white
                          uppercase
                          rounded-lg
                          sm:text-sm
                          hover:bg-gray-700
                        "
                      >
                        Sales Report
                        <svg
                          class="ml-1 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="resize-triggers">
                    <div class="expand-trigger">
                      <div style="width: 563px; height: 633px"></div>
                    </div>
                    <div class="contract-trigger"></div>
                  </div>
                </div>
                <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
                  <div class="flex justify-between items-center mb-4">
                    <div>
                      <h3 class="mb-2 text-xl font-bold text-gray-900">
                        Sales by Country
                      </h3>
                      <span class="text-base font-normal text-gray-500"
                        >This is a list of latest country</span
                      >
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          p-2
                          text-sm
                          font-medium
                          text-gray-900
                          rounded-lg
                          hover:bg-gray-100
                        "
                        >View all</a
                      >
                    </div>
                  </div>

                  <div class="flex flex-col mt-8">
                    <div class="overflow-x-auto rounded-2xl">
                      <div class="inline-block min-w-full align-middle">
                        <div
                          class="
                            overflow-hidden
                            shadow-lg shadow-gray-200
                            sm:rounded-2xl
                          "
                        >
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Country
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Sales
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Value
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Bounce
                                </th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                              <tr>
                                <td
                                  class="
                                    flex
                                    items-center
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      y="0.529053"
                                      width="25.7522"
                                      height="17.1429"
                                      rx="2"
                                      fill="white"
                                    ></rect>
                                    <mask
                                      id="mask0"
                                      style="mask-type: alpha"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="26"
                                      height="18"
                                    >
                                      <rect
                                        y="0.529053"
                                        width="25.7522"
                                        height="17.1429"
                                        rx="2"
                                        fill="white"
                                      ></rect>
                                    </mask>
                                    <g mask="url(#mask0)">
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M25.7522 0.529053H0V1.67191H25.7522V0.529053ZM25.7522 2.81477H0V3.95763H25.7522V2.81477ZM0 5.10048H25.7522V6.24333H0V5.10048ZM25.7522 7.3862H0V8.52905H25.7522V7.3862ZM0 9.67192H25.7522V10.8148H0V9.67192ZM25.7522 11.9576H0V13.1005H25.7522V11.9576ZM0 14.2433H25.7522V15.3862H0V14.2433ZM25.7522 16.5291H0V17.6719H25.7522V16.5291Z"
                                        fill="#D02F44"
                                      ></path>
                                      <rect
                                        y="0.529053"
                                        width="11.0367"
                                        height="8"
                                        fill="#46467F"
                                      ></rect>
                                      <g filter="url(#filter0_d)">
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M2.45237 2.2433C2.45237 2.5589 2.17786 2.81473 1.83922 2.81473C1.50059 2.81473 1.22607 2.5589 1.22607 2.2433C1.22607 1.92771 1.50059 1.67188 1.83922 1.67188C2.17786 1.67188 2.45237 1.92771 2.45237 2.2433ZM4.90496 2.2433C4.90496 2.5589 4.63045 2.81473 4.29182 2.81473C3.95318 2.81473 3.67867 2.5589 3.67867 2.2433C3.67867 1.92771 3.95318 1.67188 4.29182 1.67188C4.63045 1.67188 4.90496 1.92771 4.90496 2.2433ZM6.74441 2.81473C7.08304 2.81473 7.35756 2.5589 7.35756 2.2433C7.35756 1.92771 7.08304 1.67188 6.74441 1.67188C6.40578 1.67188 6.13126 1.92771 6.13126 2.2433C6.13126 2.5589 6.40578 2.81473 6.74441 2.81473ZM9.81015 2.2433C9.81015 2.5589 9.53564 2.81473 9.197 2.81473C8.85837 2.81473 8.58386 2.5589 8.58386 2.2433C8.58386 1.92771 8.85837 1.67188 9.197 1.67188C9.53564 1.67188 9.81015 1.92771 9.81015 2.2433ZM3.06552 3.95758C3.40415 3.95758 3.67867 3.70175 3.67867 3.38616C3.67867 3.07056 3.40415 2.81473 3.06552 2.81473C2.72689 2.81473 2.45237 3.07056 2.45237 3.38616C2.45237 3.70175 2.72689 3.95758 3.06552 3.95758ZM6.13126 3.38616C6.13126 3.70175 5.85675 3.95758 5.51811 3.95758C5.17948 3.95758 4.90496 3.70175 4.90496 3.38616C4.90496 3.07056 5.17948 2.81473 5.51811 2.81473C5.85675 2.81473 6.13126 3.07056 6.13126 3.38616ZM7.97071 3.95758C8.30934 3.95758 8.58386 3.70175 8.58386 3.38616C8.58386 3.07056 8.30934 2.81473 7.97071 2.81473C7.63207 2.81473 7.35756 3.07056 7.35756 3.38616C7.35756 3.70175 7.63207 3.95758 7.97071 3.95758ZM9.81015 4.52902C9.81015 4.84462 9.53564 5.10045 9.197 5.10045C8.85837 5.10045 8.58386 4.84462 8.58386 4.52902C8.58386 4.21343 8.85837 3.9576 9.197 3.9576C9.53564 3.9576 9.81015 4.21343 9.81015 4.52902ZM6.74441 5.10045C7.08304 5.10045 7.35756 4.84462 7.35756 4.52902C7.35756 4.21343 7.08304 3.9576 6.74441 3.9576C6.40578 3.9576 6.13126 4.21343 6.13126 4.52902C6.13126 4.84462 6.40578 5.10045 6.74441 5.10045ZM4.90496 4.52902C4.90496 4.84462 4.63045 5.10045 4.29182 5.10045C3.95318 5.10045 3.67867 4.84462 3.67867 4.52902C3.67867 4.21343 3.95318 3.9576 4.29182 3.9576C4.63045 3.9576 4.90496 4.21343 4.90496 4.52902ZM1.83922 5.10045C2.17786 5.10045 2.45237 4.84462 2.45237 4.52902C2.45237 4.21343 2.17786 3.9576 1.83922 3.9576C1.50059 3.9576 1.22607 4.21343 1.22607 4.52902C1.22607 4.84462 1.50059 5.10045 1.83922 5.10045ZM3.67867 5.67188C3.67867 5.98747 3.40415 6.2433 3.06552 6.2433C2.72689 6.2433 2.45237 5.98747 2.45237 5.67188C2.45237 5.35628 2.72689 5.10045 3.06552 5.10045C3.40415 5.10045 3.67867 5.35628 3.67867 5.67188ZM5.51811 6.2433C5.85675 6.2433 6.13126 5.98747 6.13126 5.67188C6.13126 5.35628 5.85675 5.10045 5.51811 5.10045C5.17948 5.10045 4.90496 5.35628 4.90496 5.67188C4.90496 5.98747 5.17948 6.2433 5.51811 6.2433ZM8.58386 5.67188C8.58386 5.98747 8.30934 6.2433 7.97071 6.2433C7.63207 6.2433 7.35756 5.98747 7.35756 5.67188C7.35756 5.35628 7.63207 5.10045 7.97071 5.10045C8.30934 5.10045 8.58386 5.35628 8.58386 5.67188ZM9.197 7.38616C9.53564 7.38616 9.81015 7.13032 9.81015 6.81473C9.81015 6.49914 9.53564 6.2433 9.197 6.2433C8.85837 6.2433 8.58386 6.49914 8.58386 6.81473C8.58386 7.13032 8.85837 7.38616 9.197 7.38616ZM7.35756 6.81473C7.35756 7.13032 7.08304 7.38616 6.74441 7.38616C6.40578 7.38616 6.13126 7.13032 6.13126 6.81473C6.13126 6.49914 6.40578 6.2433 6.74441 6.2433C7.08304 6.2433 7.35756 6.49914 7.35756 6.81473ZM4.29182 7.38616C4.63045 7.38616 4.90496 7.13032 4.90496 6.81473C4.90496 6.49914 4.63045 6.2433 4.29182 6.2433C3.95318 6.2433 3.67867 6.49914 3.67867 6.81473C3.67867 7.13032 3.95318 7.38616 4.29182 7.38616ZM2.45237 6.81473C2.45237 7.13032 2.17786 7.38616 1.83922 7.38616C1.50059 7.38616 1.22607 7.13032 1.22607 6.81473C1.22607 6.49914 1.50059 6.2433 1.83922 6.2433C2.17786 6.2433 2.45237 6.49914 2.45237 6.81473Z"
                                          fill="url(#paint0_linear)"
                                        ></path>
                                      </g>
                                    </g>
                                    <defs>
                                      <filter
                                        id="filter0_d"
                                        x="1.22607"
                                        y="1.67188"
                                        width="8.58408"
                                        height="6.71428"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        ></feFlood>
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        ></feColorMatrix>
                                        <feOffset dy="1"></feOffset>
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                        ></feColorMatrix>
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropshadow-lg shadow-gray-200"
                                        ></feBlend>
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_dropshadow-lg shadow-gray-200"
                                          result="shape"
                                        ></feBlend>
                                      </filter>
                                      <linearGradient
                                        id="paint0_linear"
                                        x1="1.22607"
                                        y1="1.67188"
                                        x2="1.22607"
                                        y2="7.38616"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stop-color="white"></stop>
                                        <stop
                                          offset="1"
                                          stop-color="#F0F0F0"
                                        ></stop>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <span
                                    class="
                                      mx-5
                                      ml-3
                                      w-32
                                      text-base
                                      font-medium
                                      text-gray-900
                                      sm:flex-none
                                    "
                                    >United States</span
                                  >
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  9600
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  $756,600
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  29.6%
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    flex
                                    items-center
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                    rounded-2xl rounded-left
                                  "
                                >
                                  <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      x="0.25"
                                      y="0.779053"
                                      width="25.2567"
                                      height="16.6429"
                                      rx="1.75"
                                      fill="white"
                                      stroke="#F3F4F6"
                                      stroke-width="0.5"
                                    ></rect>
                                    <mask
                                      id="mask0"
                                      style="mask-type: alpha"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="26"
                                      height="18"
                                    >
                                      <rect
                                        x="0.25"
                                        y="0.779053"
                                        width="25.2567"
                                        height="16.6429"
                                        rx="1.75"
                                        fill="white"
                                        stroke="white"
                                        stroke-width="0.5"
                                      ></rect>
                                    </mask>
                                    <g mask="url(#mask0)">
                                      <rect
                                        x="18.3975"
                                        y="0.529053"
                                        width="7.35907"
                                        height="17.1429"
                                        fill="#FF3131"
                                      ></rect>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 17.6719H7.35907V0.529053H0V17.6719Z"
                                        fill="#FF3131"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.8804 8.37761C14.6418 8.59995 14.2588 8.38268 14.3272 8.06378L14.718 6.2432L13.4915 6.81463L12.8782 5.10034L12.265 6.81463L11.0385 6.2432L11.4292 8.06378C11.4977 8.38268 11.1147 8.59995 10.8761 8.37761L10.6525 8.16923C10.5244 8.04994 10.326 8.04994 10.198 8.16923L9.81196 8.52891L8.58545 7.95749L9.1987 9.10034L8.84717 9.4279C8.70571 9.55971 8.70571 9.78383 8.84717 9.91564L10.4252 11.3861H12.265L12.5716 13.1003H13.1849L13.4915 11.3861H15.3313L16.9093 9.91564C17.0508 9.78383 17.0508 9.55971 16.9093 9.4279L16.5578 9.10034L17.171 7.95749L15.9445 8.52891L15.5585 8.16923C15.4305 8.04994 15.232 8.04994 15.104 8.16923L14.8804 8.37761Z"
                                        fill="#FF3131"
                                      ></path>
                                    </g>
                                  </svg>
                                  <span
                                    class="
                                      flex-none
                                      mx-5
                                      ml-3
                                      w-32
                                      text-base
                                      font-medium
                                      text-gray-900
                                    "
                                    >Canada</span
                                  >
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  8340
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  $545,760
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  29.6%
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    flex
                                    items-center
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      x="0.25"
                                      y="0.779053"
                                      width="25.2567"
                                      height="16.6429"
                                      rx="1.75"
                                      fill="white"
                                      stroke="#F3F4F6"
                                      stroke-width="0.5"
                                    ></rect>
                                    <mask
                                      id="mask0"
                                      style="mask-type: alpha"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="26"
                                      height="18"
                                    >
                                      <rect
                                        x="0.25"
                                        y="0.779053"
                                        width="25.2567"
                                        height="16.6429"
                                        rx="1.75"
                                        fill="white"
                                        stroke="white"
                                        stroke-width="0.5"
                                      ></rect>
                                    </mask>
                                    <g mask="url(#mask0)">
                                      <rect
                                        x="17.1714"
                                        y="0.529053"
                                        width="8.58558"
                                        height="17.1429"
                                        fill="#F44653"
                                      ></rect>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 17.6719H8.58558V0.529053H0V17.6719Z"
                                        fill="#1035BB"
                                      ></path>
                                    </g>
                                  </svg>
                                  <span
                                    class="
                                      flex-none
                                      mx-5
                                      ml-3
                                      w-32
                                      text-base
                                      font-medium
                                      text-gray-900
                                    "
                                    >France</span
                                  >
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  6700
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  $487,560
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  34.5%
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    flex
                                    items-center
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                    rounded-2xl rounded-left
                                  "
                                >
                                  <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      y="0.529053"
                                      width="25.7567"
                                      height="17.1429"
                                      rx="2"
                                      fill="white"
                                    ></rect>
                                    <mask
                                      id="mask0"
                                      style="mask-type: alpha"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="26"
                                      height="18"
                                    >
                                      <rect
                                        y="0.529053"
                                        width="25.7567"
                                        height="17.1429"
                                        rx="2"
                                        fill="white"
                                      ></rect>
                                    </mask>
                                    <g mask="url(#mask0)">
                                      <rect
                                        y="0.529053"
                                        width="25.7567"
                                        height="17.1429"
                                        fill="#0A17A7"
                                      ></rect>
                                      <path
                                        d="M-0.951485 0.195719H0H0.613256H0.714042L0.797945 0.251562L5.00683 3.05286H6.04257L10.8708 0.241006L11.3719 -0.0508112V0.529053V0.921924C11.3719 1.14501 11.2604 1.3533 11.0746 1.4769L10.89 1.19941L11.0746 1.47691L7.07914 4.13618V4.94011L10.8133 7.92254C11.2032 8.23391 10.983 8.86239 10.4841 8.86239C10.3801 8.86239 10.2784 8.83164 10.1918 8.774M-0.951485 0.195719L10.1918 8.774M-0.951485 0.195719L-0.208022 0.78951L3.95946 4.118V4.92192L-0.184689 7.68013L-0.333333 7.77907V7.95763V8.52905V9.10892L0.16775 8.8171L4.99603 6.00524H6.03177L10.1918 8.774M-0.951485 0.195719L10.3764 8.49651L10.1918 8.774"
                                        fill="#FF2E3B"
                                        stroke="white"
                                        stroke-width="0.666667"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 3.3862V5.67191H4.29279V8.43382C4.29279 8.80201 4.59127 9.10048 4.95946 9.10048H6.07914C6.44733 9.10048 6.74581 8.80201 6.74581 8.43382V5.67191H10.9852C11.3534 5.67191 11.6519 5.37343 11.6519 5.00524V4.05286C11.6519 3.68467 11.3534 3.3862 10.9852 3.3862H6.74581V0.529053H4.29279V3.3862H0Z"
                                        fill="url(#paint0_linear)"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 3.95762H4.90604V3.3862V0.529053H6.13256V3.3862V3.95762H11.0386V5.10048H6.13256V5.67191V8.52905H4.90604V5.67191V5.10048H0V3.95762Z"
                                        fill="url(#paint1_linear)"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.51945 14.5289L4.43807 15.0587L4.64459 13.9367L3.76973 13.1421L4.97876 12.9784L5.51945 11.9575L6.06015 12.9784L7.26918 13.1421L6.39432 13.9367L6.60084 15.0587L5.51945 14.5289Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M18.3979 15.3862L17.5306 15.6229L17.7846 14.8147L17.5306 14.0066L18.3979 14.2433L19.2652 14.0066L19.0112 14.8147L19.2652 15.6229L18.3979 15.3862Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M18.3979 4.52898L17.5306 4.76568L17.7846 3.95755L17.5306 3.14943L18.3979 3.38613L19.2652 3.14943L19.0112 3.95755L19.2652 4.76568L18.3979 4.52898Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.0771 7.95769L21.2098 8.19439L21.4638 7.38627L21.2098 6.57814L22.0771 6.81484L22.9444 6.57814L22.6904 7.38627L22.9444 8.19439L22.0771 7.95769Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14.7182 9.10052L13.8509 9.33721L14.105 8.52909L13.8509 7.72097L14.7182 7.95766L15.5855 7.72097L15.3315 8.52909L15.5855 9.33721L14.7182 9.10052Z"
                                        fill="white"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M20.2373 10.529L19.8036 10.6474L19.9307 10.2433L19.8036 9.83924L20.2373 9.95759L20.6709 9.83924L20.5439 10.2433L20.6709 10.6474L20.2373 10.529Z"
                                        fill="white"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear"
                                        x1="0"
                                        y1="0.529053"
                                        x2="0"
                                        y2="9.10048"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stop-color="white"></stop>
                                        <stop
                                          offset="1"
                                          stop-color="#F0F0F0"
                                        ></stop>
                                      </linearGradient>
                                      <linearGradient
                                        id="paint1_linear"
                                        x1="0"
                                        y1="0.529053"
                                        x2="0"
                                        y2="8.52905"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stop-color="#FF2E3B"></stop>
                                        <stop
                                          offset="1"
                                          stop-color="#FC0D1B"
                                        ></stop>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <span
                                    class="
                                      flex-none
                                      mx-5
                                      ml-3
                                      w-32
                                      text-base
                                      font-medium
                                      text-gray-900
                                    "
                                    >Australia</span
                                  >
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  3900
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  $380,670
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  40.22%
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    flex
                                    items-center
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      x="0.25"
                                      y="0.779297"
                                      width="25.2522"
                                      height="16.6429"
                                      rx="1.75"
                                      fill="white"
                                      stroke="#F3F4F6"
                                      stroke-width="0.5"
                                    ></rect>
                                    <mask
                                      id="mask0"
                                      style="mask-type: alpha"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="26"
                                      height="18"
                                    >
                                      <rect
                                        x="0.25"
                                        y="0.779297"
                                        width="25.2522"
                                        height="16.6429"
                                        rx="1.75"
                                        fill="white"
                                        stroke="white"
                                        stroke-width="0.5"
                                      ></rect>
                                    </mask>
                                    <g mask="url(#mask0)">
                                      <rect
                                        x="17.168"
                                        y="0.529297"
                                        width="8.58408"
                                        height="17.1429"
                                        fill="#E43D4C"
                                      ></rect>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 17.6722H8.58408V0.529297H0V17.6722Z"
                                        fill="#1BB65D"
                                      ></path>
                                    </g>
                                  </svg>
                                  <span
                                    class="
                                      flex-none
                                      mx-5
                                      ml-3
                                      w-32
                                      text-base
                                      font-medium
                                      text-gray-900
                                    "
                                    >Italy</span
                                  >
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  2470
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  $230,900
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  30.4%
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    flex
                                    items-center
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                    rounded-2xl rounded-left
                                  "
                                >
                                  <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 26 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      x="0.25"
                                      y="0.779053"
                                      width="25.2567"
                                      height="16.6429"
                                      rx="1.75"
                                      fill="white"
                                      stroke="#F3F4F6"
                                      stroke-width="0.5"
                                    ></rect>
                                    <mask
                                      id="mask0"
                                      style="mask-type: alpha"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="26"
                                      height="18"
                                    >
                                      <rect
                                        x="0.25"
                                        y="0.779053"
                                        width="25.2567"
                                        height="16.6429"
                                        rx="1.75"
                                        fill="white"
                                        stroke="white"
                                        stroke-width="0.5"
                                      ></rect>
                                    </mask>
                                    <g mask="url(#mask0)">
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 6.24334H25.7567V0.529053H0V6.24334Z"
                                        fill="#FFA44A"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 17.6718H25.7567V11.9575H0V17.6718Z"
                                        fill="#1A9F0B"
                                      ></path>
                                      <path
                                        d="M12.8783 11.1481C14.0559 11.1481 15.0514 10.2532 15.0514 9.10052C15.0514 7.94786 14.0559 7.0529 12.8783 7.0529C11.7007 7.0529 10.7052 7.94786 10.7052 9.10052C10.7052 10.2532 11.7007 11.1481 12.8783 11.1481Z"
                                        fill="#181A93"
                                        fill-opacity="0.15"
                                        stroke="#181A93"
                                        stroke-width="0.666667"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.8784 9.67191C13.2171 9.67191 13.4916 9.41607 13.4916 9.10048C13.4916 8.78489 13.2171 8.52905 12.8784 8.52905C12.5397 8.52905 12.2651 8.78489 12.2651 9.10048C12.2651 9.41607 12.5397 9.67191 12.8784 9.67191Z"
                                        fill="#181A93"
                                      ></path>
                                    </g>
                                  </svg>
                                  <span
                                    class="
                                      flex-none
                                      mx-5
                                      ml-3
                                      w-32
                                      text-base
                                      font-medium
                                      text-gray-900
                                    "
                                    >India</span
                                  >
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  700
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  $47,480
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  54.5%
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    flex
                                    items-center
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 28 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      x="0.25"
                                      y="0.25"
                                      width="27.5"
                                      height="19.5"
                                      rx="1.75"
                                      fill="white"
                                      stroke="#F5F5F5"
                                      stroke-width="0.5"
                                    ></rect>
                                    <mask
                                      id="mask0_267_1444"
                                      style="mask-type: alpha"
                                      maskUnits="userSpaceOnUse"
                                      x="0"
                                      y="0"
                                      width="28"
                                      height="20"
                                    >
                                      <rect
                                        x="0.25"
                                        y="0.25"
                                        width="27.5"
                                        height="19.5"
                                        rx="1.75"
                                        fill="white"
                                        stroke="white"
                                        stroke-width="0.5"
                                      ></rect>
                                    </mask>
                                    <g mask="url(#mask0_267_1444)">
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M14 16C17.3137 16 20 13.3137 20 10C20 6.68629 17.3137 4 14 4C10.6863 4 8 6.68629 8 10C8 13.3137 10.6863 16 14 16Z"
                                        fill="url(#paint0_linear_267_1444)"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_267_1444"
                                        x1="8"
                                        y1="4"
                                        x2="8"
                                        y2="16"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stop-color="#D81441"></stop>
                                        <stop
                                          offset="1"
                                          stop-color="#BB0831"
                                        ></stop>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <span
                                    class="
                                      flex-none
                                      mx-5
                                      ml-3
                                      w-32
                                      text-base
                                      font-medium
                                      text-gray-900
                                    "
                                    >Japan</span
                                  >
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  300
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  $7,200
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  24.5%
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      pt-3
                      border-t
                      sm:pt-6
                    "
                  >
                    <div>
                      <button
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-sm
                          font-medium
                          text-center text-gray-500
                          rounded-2xl
                          hover:text-gray-900
                        "
                        type="button"
                        data-dropdown-toggle="transactions-dropdown"
                      >
                        Last 7 days
                        <svg
                          class="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        class="
                          hidden
                          z-50
                          my-4
                          text-base
                          list-none
                          bg-white
                          rounded
                          divide-y divide-gray-100
                          shadow-lg shadow-gray-200
                        "
                        id="transactions-dropdown"
                        data-popper-placement="top"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        style="
                          position: absolute;
                          inset: auto auto 0px 0px;
                          margin: 0px;
                          transform: translate3d(152px, 444px, 0px);
                        "
                      >
                        <div class="py-3 px-4" role="none">
                          <p
                            class="text-sm font-medium text-gray-900 truncate"
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Yesterday</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Today</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 7 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 30 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 90 days</a
                            >
                          </li>
                        </ul>
                        <div class="py-1" role="none">
                          <a
                            href="#"
                            class="
                              block
                              py-2
                              px-4
                              text-sm text-gray-700
                              hover:bg-gray-100
                            "
                            role="menuitem"
                            >Custom...</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-xs
                          font-medium
                          text-gray-900
                          uppercase
                          rounded-lg
                          sm:text-sm
                          hover:bg-gray-100
                        "
                      >
                        Sales Report
                        <svg
                          class="ml-1 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2">
                <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
                  <div class="flex justify-between items-center mb-4">
                    <div>
                      <h3 class="mb-2 text-xl font-bold text-gray-900">
                        User Signups
                      </h3>
                      <span class="text-base font-normal text-gray-500"
                        >This is a list of latest users</span
                      >
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          p-2
                          text-sm
                          font-medium
                          text-gray-900
                          rounded-lg
                          hover:bg-gray-100
                        "
                        >View all</a
                      >
                    </div>
                  </div>

                  <div class="flex flex-col mt-8">
                    <div class="overflow-x-auto rounded-2xl">
                      <div class="inline-block min-w-full align-middle">
                        <div
                          class="
                            overflow-hidden
                            shadow-lg shadow-gray-200
                            sm:rounded-2xl
                          "
                        >
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Country
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Role
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  class="
                                    p-4
                                    text-xs
                                    font-medium
                                    tracking-wider
                                    text-left text-gray-500
                                    uppercase
                                  "
                                >
                                  Edit
                                </th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-4 h-4 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/neil-sims.png"
                                      alt="Neil image"
                                    />
                                    Neil Sims
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  United States
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Author
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-green-500
                                      to-green-700
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Completed</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-5 h-5 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png"
                                      alt="Bonnie image"
                                    />
                                    Bonnie Green
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  United States
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Author
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-green-500
                                      to-green-700
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Completed</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-4 h-4 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/helene-engels.png"
                                      alt="Helene image"
                                    />
                                    Helene Engels
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Canada
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Customer
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-pink-500
                                      to-violet-500
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Pending</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-4 h-4 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos.png"
                                      alt="Jese image"
                                    />
                                    Jese Leos
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  United States
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Admin
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-green-500
                                      to-green-700
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Completed</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-4 h-4 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/joseph-mcfall.png"
                                      alt="Joseph image"
                                    />
                                    Joseph Mcfall
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Australia
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Author
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-green-500
                                      to-green-700
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Completed</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-4 h-4 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/lana-byrd.png"
                                      alt="Lana image"
                                    />
                                    Lana Byrd
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Germany
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Editor
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-green-500
                                      to-green-700
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Completed</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-4 h-4 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/leslie-livingston.png"
                                      alt="Leslie image"
                                    />
                                    Leslie Livingston
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  United Stated
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Author
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-pink-500
                                      to-violet-500
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Pending</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  <div class="flex items-center">
                                    <img
                                      class="mr-2 w-4 h-4 rounded-full"
                                      src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png"
                                      alt="Michael image"
                                    />
                                    Michael Gough
                                  </div>
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-normal
                                    text-gray-500
                                    whitespace-nowrap
                                  "
                                >
                                  name@company.com
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  United States
                                </td>
                                <td
                                  class="
                                    p-4
                                    text-sm
                                    font-semibold
                                    text-gray-900
                                    whitespace-nowrap
                                  "
                                >
                                  Admin
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <span
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-green-500
                                      to-green-700
                                      text-xs
                                      font-bold
                                      uppercase
                                      mr-2
                                      px-2.5
                                      py-1
                                      rounded-md
                                    "
                                    >Completed</span
                                  >
                                </td>
                                <td class="p-4 whitespace-nowrap">
                                  <button
                                    type="button"
                                    data-modal-toggle="user-modal"
                                    class="
                                      text-white
                                      bg-gradient-to-br
                                      from-dark-600
                                      to-dark-900
                                      font-medium
                                      rounded-lg
                                      text-sm
                                      inline-flex
                                      items-center
                                      px-2.5
                                      py-1.5
                                      text-center
                                      shadow-md shadow-gray-300
                                      hover:scale-[1.02]
                                      transition-transform
                                    "
                                  >
                                    <svg
                                      class="mr-1 w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                                      ></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    Edit user
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center pt-3 sm:pt-6">
                    <div>
                      <button
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-sm
                          font-medium
                          text-center text-gray-500
                          rounded-2xl
                          hover:text-gray-900
                        "
                        type="button"
                        data-dropdown-toggle="transactions-dropdown"
                      >
                        Last 7 days
                        <svg
                          class="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        class="
                          hidden
                          z-50
                          my-4
                          text-base
                          list-none
                          bg-white
                          rounded
                          divide-y divide-gray-100
                          shadow-lg shadow-gray-200
                        "
                        id="transactions-dropdown"
                      >
                        <div class="py-3 px-4" role="none">
                          <p
                            class="text-sm font-medium text-gray-900 truncate"
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Yesterday</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Today</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 7 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 30 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 90 days</a
                            >
                          </li>
                        </ul>
                        <div class="py-1" role="none">
                          <a
                            href="#"
                            class="
                              block
                              py-2
                              px-4
                              text-sm text-gray-700
                              hover:bg-gray-100
                            "
                            role="menuitem"
                            >Custom...</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-xs
                          font-medium
                          text-gray-900
                          uppercase
                          rounded-lg
                          sm:text-sm
                          hover:bg-gray-100
                        "
                      >
                        View all users
                        <svg
                          class="ml-1 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    bg-white
                    shadow-lg shadow-gray-200
                    rounded-2xl
                    p-4
                    mb-4
                    xl:mb-0
                  "
                >
                  <div class="mb-4">
                    <h3 class="mb-2 text-xl font-bold text-gray-900">
                      Sessions by country
                    </h3>
                    <span class="text-base font-normal text-gray-500"
                      >View website visitors by hovering over the map</span
                    >
                  </div>
                  <div id="map" class="mb-8 svgMap-wrapper">
                    <div class="svgMap-container">
                      <div class="svgMap-map-container">
                        <div class="svgMap-map-wrapper">
                          <svg
                            class="svgMap-map-image"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:ev="http://www.w3.org/2001/xml-events"
                            style="overflow: hidden"
                          >
                            <g
                              id="viewport-20220510211409060"
                              class="svg-pan-zoom_viewport"
                              transform="matrix(0.33144853355643994,0,0,0.33144853355643994,-18.448533556439937,-9.389991044998169)"
                              style="
                                transform: matrix(
                                  0.331449,
                                  0,
                                  0,
                                  0.331449,
                                  -18.4485,
                                  -9.38999
                                );
                              "
                            >
                              <path
                                d="M1369.9,333.8h-5.4l-3.8-0.5l-2.5,2.9l-2.1,0.7l-1.5,1.3l-2.6-2.1l-1-5.4l-1.6-0.3v-2l-3.2-1.5l-1.7,2.3l0.2,2.6 l-0.6,0.9l-3.2-0.1l-0.9,3l-2.1-1.3l-3.3,2.1l-1.8-0.8l-4.3-1.4h-2.9l-1.6-0.2l-2.9-1.7l-0.3,2.3l-4.1,1.2l0.1,5.2l-2.5,2l-4,0.9 l-0.4,3l-3.9,0.8l-5.9-2.4l-0.5,8l-0.5,4.7l2.5,0.9l-1.6,3.5l2.7,5.1l1.1,4l4.3,1.1l1.1,4l-3.9,5.8l9.6,3.2l5.3-0.9l3.3,0.8l0.9-1.4 l3.8,0.5l6.6-2.6l-0.8-5.4l2.3-3.6h4l0.2-1.7l4-0.9l2.1,0.6l1.7-1.8l-1.1-3.8l1.5-3.8l3-1.6l-3-4.2l5.1,0.2l0.9-2.3l-0.8-2.5l2-2.7 l-1.4-3.2l-1.9-2.8l2.4-2.8l5.3-1.3l5.8-0.8l2.4-1.2l2.8-0.7L1369.9,333.8L1369.9,333.8z"
                                id="map-map-country-AF"
                                data-id="AF"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1077.5,300.5l-2,3.1l0.5,1.9l0,0l1,1l-0.5,1.9l-0.1,4.3l0.7,3l3,2.1l0.2,1.4l1,0.4l2.1-3l0.1-2.1l1.6-0.9V312 l-2.3-1.6l-0.9-2.6l0.4-2.1l0,0l-0.5-2.3l-1.3-0.6l-1.3-1.6l-1.3,0.5L1077.5,300.5L1077.5,300.5z"
                                id="map-map-country-AL"
                                data-id="AL"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1021,336.9l-3.6,0.4l-2.2-1.5h-5.6l-4.9,2.6l-2.7-1l-8.7,0.5l-8.9,1.2l-5,2l-3.4,2.6l-5.7,1.2l-5.1,3.5l2,4.1 l0.3,3.9l1.8,6.7l1.4,1.4l-1,2.5l-7,1l-2.5,2.4l-3.1,0.5l-0.3,4.7l-6.3,2.5l-2.1,3.2L944,383l-5.4,1l-8.9,4.7l-0.1,7.5v0.4l-0.1,1.2 l20.3,15.5l18.4,13.9l18.6,13.8l1.3,3l3.4,1.8l2.6,1.1l0.1,4l6.1-0.6l7.8-2.8l15.8-12.5l18.6-12.2l-2.5-4l-4.3-2.9l-2.6,1.2l-2-3.6 l-0.2-2.7l-3.4-4.7l2.1-2.6l-0.5-4l0.6-3.5l-0.5-2.9l0.9-5.2l-0.4-3l-1.9-5.6l-2.6-11.3l-3.4-2.6v-1.5l-4.5-3.8l-0.6-4.8l3.2-3.6 l1.1-5.3l-1-6.2L1021,336.9L1021,336.9z"
                                id="map-map-country-DZ"
                                data-id="DZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M985.4,301.7l0.2-0.4l-0.2-0.2l-0.7-0.2l-0.3-0.1l-0.4,0.3l-0.1,0.3l0.1,0.1v0.4l0.1,0.2h0.4L985.4,301.7 L985.4,301.7z"
                                id="map-map-country-AD"
                                data-id="AD"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1068.3,609.6l-16.6-0.1l-1.9,0.7l-1.7-0.1l-2.3,0.9l-0.5,1.2l2.8,4l1.1,4.3l1.6,6.1l-1.7,2.6l-0.3,1.3l1.3,3.8 l1.5,3.9l1.6,2.2l0.3,3.6l-0.7,4.8l-1.8,2.8l-3.3,4.2l-1.3,2.6l-1.9,5.7l-0.3,2.7l-2,5.9l-0.9,5.5l0.5,4l2.7-1.2l3.3-1l3.6,0.1 l3.2,2.9l0.9-0.4l22.5-0.3l3.7,3l13.4,0.9l10.3-2.5l-3.5-4l-3.6-5.2l0.8-20.3l11.6,0.1l-0.5-2.2l0.9-2.4l-0.9-3l0.7-3l-0.5-2 l-2.6-0.4l-3.5,1l-2.4-0.2l-1.4,0.6l0.5-7.6l-1.9-2.3l-0.3-4l0.9-3.8l-1.2-2.4v-4h-6.8l0.5-2.3h-2.9l-0.3,1.1l-3.4,0.3l-1.5,3.7 l-0.9,1.6l-3-0.9l-1.9,0.9l-3.7,0.5l-2.1-3.3l-1.3-2.1l-1.6-3.8L1068.3,609.6L1068.3,609.6z M1046.5,608.3l0.2-2.7l0.9-1.7l2-1.3 l-2-2.2l-1.8,1.1l-2.2,2.7l1.4,4.8L1046.5,608.3L1046.5,608.3z"
                                id="map-map-country-AO"
                                data-id="AO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M627.9,456.2l0.1-0.2l-0.2-0.1l-0.8,0.5v0.1L627.9,456.2z"
                                id="map-map-country-AI"
                                data-id="AI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M634.3,463.8l0.2-0.1v-0.1v-0.2l-0.1-0.1l-0.1-0.2l-0.4-0.2l-0.5,0.5v0.2l0.1,0.3l0.6,0.1L634.3,463.8L634.3,463.8z M634.5,460.3v-0.5l-0.1-0.2h-0.3l-0.1-0.1h-0.1l-0.1,0.1l0.1,0.6l0.5,0.3L634.5,460.3L634.5,460.3z"
                                id="map-map-country-AG"
                                data-id="AG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M669.8,920.7l0.9-3l-7.3-1.5l-7.7-3.6l-4.3-4.6l-3-2.8l5.9,13.5h5l2.9,0.2l3.3,2.1L669.8,920.7L669.8,920.7z M619.4,712.6l-7.4-1.5l-4,5.7l0.9,1.6l-1.1,6.6l-5.6,3.2l1.6,10.6l-0.9,2l2,2.5l-3.2,4l-2.6,5.9l-0.9,5.8l1.7,6.2l-2.1,6.5 l4.9,10.9l1.6,1.2l1.3,5.9l-1.6,6.2l1.4,5.4l-2.9,4.3l1.5,5.9l3.3,6.3l-2.5,2.4l0.3,5.7l0.7,6.4l3.3,7.6l-1.6,1.2l3.6,7.1l3.1,2.3 l-0.8,2.6l2.8,1.3l1.3,2.3l-1.8,1.1l1.8,3.7l1.1,8.2l-0.7,5.3l1.8,3.2l-0.1,3.9l-2.7,2.7l3.1,6.6l2.6,2.2l3.1-0.4l1.8,4.6l3.5,3.6 l12,0.8l4.8,0.9l2.2,0.4l-4.7-3.6l-4.1-6.3l0.9-2.9l3.5-2.5l0.5-7.2l4.7-3.5l-0.2-5.6l-5.2-1.3l-6.4-4.5l-0.1-4.7l2.9-3.1l4.7-0.1 l0.2-3.3l-1.2-6.1l2.9-3.9l4.1-1.9l-2.5-3.2l-2.2,2l-4-1.9l-2.5-6.2l1.5-1.6l5.6,2.3l5-0.9l2.5-2.2l-1.8-3.1l-0.1-4.8l-2-3.8 l5.8,0.6l10.2-1.3l6.9-3.4l3.3-8.3l-0.3-3.2l-3.9-2.8l-0.1-4.5l-7.8-5.5l-0.3-3.3l-0.4-4.2l0.9-1.4l-1.1-6.3l0.3-6.5l0.5-5.1 l5.9-8.6l5.3-6.2l3.3-2.6l4.2-3.5l-0.5-5.1l-3.1-3.7l-2.6,1.2l-0.3,5.7l-4.3,4.8l-4.2,1.1l-6.2-1l-5.7-1.8l4.2-9.6l-1.1-2.8 l-5.9-2.5l-7.2-4.7l-4.6-1L632,713.7l-1-1.3l-6.3-0.3l-1.6,5.1L619.4,712.6L619.4,712.6z"
                                id="map-map-country-AR"
                                data-id="AR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1219,325.1l-0.9-4.4l-2.5-1.1l-2.5-1.7l1-2l-3.1-2.2l0.7-1.5l-2.2-1.1l-1.4-1.7l-6.9,1l1.3,2.2v3.1l4.2,1.5 l2.4,1.9l1-0.2l1.8,1.7h2.3l0.2,1l2.8,3.7L1219,325.1L1219,325.1z"
                                id="map-map-country-AM"
                                data-id="AM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M586.6,492.9l-0.1-0.1l-0.3-0.6l-0.3-0.3l-0.1,0.1l-0.1,0.3l0.3,0.3l0.3,0.4l0.3,0.1L586.6,492.9L586.6,492.9z"
                                id="map-map-country-AW"
                                data-id="AW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1726.7,832l-3-0.5l-1.9,2.9l-0.6,5.4l-2.1,4l-0.5,5.3l3,0.2l0.8,0.3l6.6-4.3l0.6,1.7l4-4.9l3.2-2.2l4.5-7.3 l-2.8-0.5l-4.8,1.2l-3.4,0.9L1726.7,832L1726.7,832z M1776.8,659.7l0.5-2.3l0.1-3.6l-1.6-3.2l0.1-2.7l-1.3-0.8l0.1-3.9l-1.2-3.2 l-2.3,2.4l-0.4,1.8l-1.5,3.5l-1.8,3.4l0.6,2.1l-1.2,1.3l-1.5,4.8l0.1,3.7l-0.7,1.8l0.3,3.1l-2.6,5l-1.3,3.5l-1.7,2.9l-1.7,3.4 l-4.1,2.1l-4.9-2.1l-0.5-2l-2.5-1.6h-1.6l-3.3-3.8l-2.5-2.2l-3.9-2l-3.9-3.5l-0.1-1.8l2.5-3.1l2.1-3.2l-0.3-2.6l1.9-0.2l2.5-2.5 l2-3.4l-2.2-3.2l-1.5,1.2l-2-0.5l-3.5,1.8l-3.2-2l-1.7,0.7l-4.5-1.6l-2.7-2.7l-3.5-1.5l-3.1,0.9l3.9,2.1l-0.3,3.2l-4.8,1.2l-2.8-0.7 l-3.6,2.2l-2.9,3.7l0.6,1.5l-2.7,1.7l-3.4,5.1l0.6,3.5l-3.4-0.6h-3.5l-2.5-3.8l-3.7-2.9l-2.8,0.8l-2.6,0.9l-0.3,1.6l-2.4-0.7 l-0.3,1.8l-3,1.1l-1.7,2.5l-3.5,3.1l-1.4,4.8l-2.3-1.3l-2.2,3.1l1.5,3l-2.6,1.2l-1.4-5.5l-4.8,5.4l-0.8,3.5l-0.7,2.5l-3.8,3.3 l-2,3.4l-3.5,2.8l-6.1,1.9l-3.1-0.2l-1.5,0.6l-1.1,1.4l-3.5,0.7l-4.7,2.4l-1.4-0.8l-2.6,0.5l-4.6,2.3l-3.2,2.7l-4.8,2.1l-3.1,4.4 l0.4-4.8l-3.1,4.6l-0.1,3.7l-1.3,3.2l-1.5,1.5l-1.3,3.7l0.9,1.9l0.1,2l1.6,5l-0.7,3.3l-1-2.5l-2.3-1.8l0.4,5.9l-1.7-2.8l0.1,2.8 l1.8,5l-0.6,5l1.7,2.5l-0.4,1.9l0.9,4.1l-1.3,3.6l-0.3,3.6l0.7,6.5l-0.7,3.7l-2.2,4.4l-0.6,2.3l-1.5,1.5l-2.9,0.8l-1.5,3.7l2.4,1.2 l4,4.1h3.6l3.8,0.3l3.3-2.1l3.4-1.8l1.4,0.3l4.5-3.4l3.8-0.3l4.1-0.7l4.2,1.2l3.6-0.6l4.6-0.2l3-2.6l2.3-3.3l5.2-1.5l6.9-3.2l5,0.4 l6.9-2.1l7.8-2.3l9.8-0.6l4,3.1l3.7,0.2l5.3,3.8l-1.6,1.5l1.8,2.4l1.3,4.6l-1.6,3.4l2.9,2.6l4.3-5.1l4.3-2.1l6.7-5.5l-1.6,4.7 l-3.4,3.2l-2.5,3.7l-4.4,3.5l5.2-1.2l4.7-4.4l-0.9,4.8l-3.2,3.1l4.7,0.8l1.3,2.6l-0.4,3.3l-1.5,4.9l1.4,4l4,1.9l2.8,0.4l2.4,1 l3.5,1.8l7.2-4.7l3.5-1.2l-2.7,3.4l2.6,1.1l2.7,2.8l4.7-2.7l3.8-2.5l6.3-2.7l6-0.2l4.2-2.3l0.9-2l3-4.5l3.9-4.8l3.6-3.2l4.4-5.6 l3.3-3.1l4.4-5l5.4-3.1l5-5.8l3.1-4.5l1.4-3.6l3.8-5.7l2.1-2.9l2.5-5.7l-0.7-5.4l1.7-3.9l1.1-3.7v-5.1l-2.8-5.1l-1.9-2.5l-2.9-3.9 l0.7-6.7l-1.5,1l-1.6-2.8l-2.5,1.4l-0.6-6.9l-2.2-4l1-1.5l-3.1-2.8l-3.2-3l-5.3-3.3l-0.9-4.3l1.3-3.3l-0.4-5.5l-1.3-0.7l-0.2-3.2 l-0.2-5.5l1.1-2.8l-2.3-2.5l-1.4-2.7l-3.9,2.4L1776.8,659.7L1776.8,659.7z"
                                id="map-map-country-AU"
                                data-id="AU"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1060.2,264l-2.3-1.2l-2.3,0.3l-4-1.9l-1.7,0.5l-2.6,2.5l-3.8-2l-1.5,2.9l-1.7,0.8l1,4l-0.4,1.1l-1.7-1.3l-2.4-0.2 l-3.4,1.2l-4.4-0.3l-0.6,1.6l-2.6-1.7l-1.5,0.3l0.2,1.1l-0.7,1.6l2.3,1.1l2.6,0.2l3.1,0.9l0.5-1.2l4.8-1.1l1.3,2.2l7.2,1.6l4.2,0.4 l2.4-1.4l4.3-0.1l0.9-1.1l1.3-4l-1.1-1.3h2.8l0.2-2.6l-0.7-2.1L1060.2,264L1060.2,264z"
                                id="map-map-country-AT"
                                data-id="AT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1210.1,318.9l-1,0.2l1.2,2.4l3.2,2.9l3.7,0.9l-2.8-3.7l-0.2-1h-2.3L1210.1,318.9L1210.1,318.9z M1220.5,309.6 l-4.3-3.8l-1.5-0.2l-1.1,0.9l3.2,3.4l-0.6,0.7l-2.8-0.4l-4.2-1.8l-1.1,1l1.4,1.7l2.2,1.1l-0.7,1.5l3.1,2.2l-1,2l2.5,1.7l2.5,1.1 l0.9,4.4l5.3-4.7l1.9-0.5l1.9,1.9l-1.2,3.1l3.8,3.4l1.3-0.3l-0.8-3.2l1.7-1.5l0.4-2.2l-0.1-5l4.2-0.5l-2-1.7l-2.5-0.2l-3.5-4.5 l-3.4-3.2l0,0l-2.6,2.5l-0.5,1.5L1220.5,309.6L1220.5,309.6z"
                                id="map-map-country-AZ"
                                data-id="AZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M574.4,437.3l0.2-0.6l-0.3-0.1l-0.5,0.7l-0.6,0.3h-0.3l-0.7-0.3h-0.5l-0.4,0.5l-0.6,0.1l0.1,0.1v0.2l-0.2,0.3v0.2 l0.1,0.3l1.5-0.1l1.3-0.2l0.7-0.9L574.4,437.3z M575.2,435.3l-0.4-0.3l-0.4,0.3l0.1,0.3L575.2,435.3L575.2,435.3z M575.2,429.5 l-0.4-0.2l-0.3,0.5l0.3,0.1l0.7-0.1l0.5,0.1l0.5,0.4l0.3-0.2l-0.1-0.1l-0.4-0.3l-0.6-0.1h-0.2L575.2,429.5L575.2,429.5z M568.6,430.8l0.7-0.6l0.7-0.3l0.9-1.1l-0.1-0.9l0.2-0.4l-0.6,0.1l-0.1,0.3l-0.1,0.3l0.3,0.4v0.2l-0.2,0.4l-0.3,0.1l-0.1,0.2 l-0.3,0.1l-0.4,0.5l-0.8,0.6l-0.2,0.3L568.6,430.8L568.6,430.8z M569.8,427.6l-0.6-0.2L569,427l-0.4-0.1l-0.1,0.2v0.2l0.1,0.4 l0.2-0.1l0.8,0.4l0.4-0.3L569.8,427.6z M565.7,426.5v-0.7l-0.4-0.5l-0.6-0.4l-0.1-1.2l-0.3-0.7l-0.2-0.6l-0.4-0.8v0.5l0.1,0.1 l0.1,0.6l0.4,0.9l0.1,0.4l-0.1,0.4l-0.4,0.1l-0.1,0.2l0.5,0.3l0.8,0.3l0.5,1.3L565.7,426.5L565.7,426.5z M561.6,423l-0.5-0.3 l-0.2-0.3l-0.7-0.7l-0.3-0.1l-0.2,0.4l0.4,0.1l0.9,0.7l0.4,0.2L561.6,423L561.6,423z M568.9,419l-0.1-0.3h-0.1l-0.3,0.1l-0.3,0.9 h0.3L568.9,419L568.9,419z M551.3,417.9l-0.2-0.3l-0.3,0.2h-0.5l-0.2,0.1h-0.4l-0.3,0.2l0.4,0.8l0.3,0.3l0.1,1l0.2,0.1l-0.1,0.7 l1.1,0.1l0.4-0.8V420v-0.1v-0.2v-0.2v-0.9l-0.3-0.5l-0.4,0.6l-0.4-0.3l0.6-0.4L551.3,417.9L551.3,417.9z M564.2,418.2l-1-1.4v-0.2 l-0.5-1.5l-0.3-0.1l-0.1,0.1l-0.1,0.2l0.4,0.4v0.4l0.3,0.2l0.4,1.1l0.4,0.4l-0.1,0.3l-0.4,0.3l-0.1,0.2h0.1l0.6-0.1h0.4L564.2,418.2 L564.2,418.2z M553.7,413l0.5-0.2l0,0l-0.3-0.2h-0.7l-0.4,0.1l-0.2,0.2l0.1,0.1l0.4,0.1L553.7,413L553.7,413z M551.3,415l-0.5-0.6 l-0.3-0.9l-0.2-0.4l0.1-0.5l-0.3-0.4l-0.6-0.4l-0.3,0.1l0.1,1.1l-0.2,0.6l-0.8,1.1l0.1,0.4l0,0l0.1,0.2l-0.5,0.4v-0.3l-0.6,0.1 l0.3,0.5l0.6,0.4l0.3,0.1l0.3-0.2v0.5l0.3,0.4l0.1,0.4l0.3-0.3l0.6-0.2l0.2-0.2l0.7-0.4v-0.2l0.1-0.6L551.3,415L551.3,415z M558,410 l-0.3-0.5l-0.1,0.1l-0.1,0.4l-0.3,0.4l0.5-0.1l0.4,0.1l0.6,0.5l0.7,0.2l0.3,0.6l0.6,0.6v0.6l-0.4,0.6l-0.1,0.7l-0.6,0.1l0.1,0.1 l0.3,0.3l0.1,0.4l0.2,0.2v-0.7l0.3-0.8l0.4-1.3l-0.1-0.3l-0.3-0.3l-0.7-0.9l-0.7-0.3L558,410L558,410z M549.2,402.1l-0.5-0.4 l-0.2,0.4v0.1l-0.1,0.3l-0.5,0.4l-0.5,0.1l-0.7-0.6l-0.2-0.1l0.8,1.1l0.3,0.1h0.4l0.9-0.3l1.6-0.5l1.7-0.2l0.1-0.2l-0.1-0.3 l-0.8,0.2l-1-0.1l-0.2,0.2h-0.4L549.2,402.1z M555.3,407.3l0.2-0.3l0.4-1.8l0.8-0.6l0.1-1.2l-0.5-0.5l-0.4-0.2l-0.1-0.2l0.1-0.2 l-0.2-0.1l-0.3-0.2l-0.4-0.6l-0.4-0.4l-0.7-0.1l-0.6-0.1l-0.4-0.1l-0.5,0.3h0.8l1.5,0.3l0.7,1.5l0.5,0.4l0.1,0.4l-0.2,0.4v0.4 l-0.3,0.5l-0.1,0.8l-0.3,0.4l-0.7,0.5l0.4,0.2l0.3,0.6L555.3,407.3L555.3,407.3z"
                                id="map-map-country-BS"
                                data-id="BS"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1253,408.3l0.7-3l-0.5-0.9l-1.6,1.2l0.6,0.9l-0.2,0.7L1253,408.3z"
                                id="map-map-country-BH"
                                data-id="BH"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1486.5,431.9l-4.5-10.1l-1.5,0.1l-0.2,4l-3.5-3.3l1.1-3.6l2.4-0.4l1.6-5.3l-3.4-1.1l-5,0.1l-5.4-0.9l-1.2-4.4 l-2.7-0.4l-4.8-2.7l-1.2,4.3l4.6,3.4l-3.1,2.4l-0.8,2.3l3.7,1.7l-0.4,3.8l2.6,4.8l1.6,5.2l2.2,0.6l1.7,0.7l0.6-1.2l2.5,1.3l1.3-3.5 l-0.9-2.6l5.1,0.2l2.8,3.7l1.5,3.1l0.8,3.2l2,3.3l-1.1-5.1l2.1,1L1486.5,431.9L1486.5,431.9z"
                                id="map-map-country-BD"
                                data-id="BD"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M644.9,488.9l0.4-0.4l-0.3-0.3l-0.6-0.8l-0.3,0.1v1l0.1,0.3l0.5,0.3L644.9,488.9L644.9,488.9z"
                                id="map-map-country-BB"
                                data-id="BB"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1112.8,219.4l-5.2-1.5l-4.6,2.3l-2.6,1l0.9,2.6l-3.5,2l-0.5,3.4l-4.8,2.2h-4.6l0.6,2.7l1.7,2.3l0.3,2.4l-2.7,1.2 l1.9,2.9l0.5,2.7l2.2-0.3l2.4-1.6l3.7-0.2l5,0.5l5.6,1.5l3.8,0.1l2,0.9l1.6-1.1l1.5,1.5l4.3-0.3l2,0.6l-0.2-3.1l1.2-1.4l4.1-0.3l0,0 l-2-3.9l-1.5-2l0.8-0.6l3.9,0.2l1.6-1.3l-1.7-1.6l-3.4-1.1l0.1-1.1l-2.2-1.1l-3.7-3.9l0.6-1.6l-1-2.9l-4.8-1.4l-2.3,0.7 L1112.8,219.4L1112.8,219.4z"
                                id="map-map-country-BY"
                                data-id="BY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1000.7,246.2l-4.4,1.3l-3.6-0.5l0,0l-3.8,1.2l0.7,2.2l2.2,0.1l2.4,2.4l3.4,2.9l2.5-0.4l4.4,2.8l0.4-3.5l1.3-0.2 l0.4-4.2l-2.8-1.4L1000.7,246.2L1000.7,246.2z"
                                id="map-map-country-BE"
                                data-id="BE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M482.5,471.1l1.4-2.2l1-0.2l1.3-1.7l1-3.2l-0.3-0.6l0.9-2.3l-0.4-1l1.3-2.7l0.3-1.8h-1.1l0.1-0.9h-1l-2.5,3.9 l-0.9-0.8l-0.7,0.3l-0.1,1l-0.7,5l-1.2,7.2L482.5,471.1L482.5,471.1z"
                                id="map-map-country-BZ"
                                data-id="BZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M996.9,498l-4.3-3.7h-2l-1.9,1.9l-1.2,1.9l-2.7,0.6l-1.2,2.8l-1.9,0.7l-0.7,3.3l1.7,1.9l2,2.3l0.2,3.1l1.1,1.3 l-0.2,14.6l1.4,4.4l4.6-0.8l0.3-10.2L992,518l1-4l1.7-1.9l2.7-4l-0.6-1.7l1.1-2.5l-1.2-3.8L996.9,498L996.9,498z"
                                id="map-map-country-BJ"
                                data-id="BJ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M630.2,366.8l0.4-0.6h-0.1l-0.5,0.5l-0.6,0.2l0.1,0.1h0.1L630.2,366.8z"
                                id="map-map-country-BM"
                                data-id="BM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1474.7,395.5l-2.7-1.8l-2.9-0.1l-4.2-1.5l-2.6,1.6l-2.6,4.8l0.3,1.2l5.5,2.5l3.2-1l4.7,0.4l4.4-0.2l-0.4-3.9 L1474.7,395.5L1474.7,395.5z"
                                id="map-map-country-BT"
                                data-id="BT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M655.7,700.5l1.6-1.3l-0.8-3.6l1.3-2.8l0.5-5l-1.6-4l-3.2-1.7l-0.8-2.6l0.6-3.6l-10.7-0.3l-2.7-7.4l1.6-0.1 l-0.3-2.8l-1.2-1.8l-0.5-3.7l-3.3-1.9l-3.5,0.1l-2.5-1.9l-3.8-1.2l-2.4-2.4l-6.3-1l-6.4-5.7l0.3-4.3l-0.9-2.5l0.4-4.7l-7.3,1.1 l-2.8,2.3l-4.8,2.6l-1.1,1.9l-2.9,0.2l-4.2-0.6l5.5,10.3l-1.1,2.1l0.1,4.5l0.3,5.4l-1.9,3.2l1.2,2.4l-1.1,2.1l2.8,5.3L591,684 l3.1,4.3l1.2,4.6l3.2,2.7l-1.1,6.2l3.7,7.1l3.1,8.8l3.8-0.9l4-5.7l7.4,1.5l3.7,4.6l1.6-5.1l6.3,0.3l1,1.3l1.5-7.6l-0.2-3.4l2.1-5.6 l9.5-1.9l5.1,0.1l5.4,3.3L655.7,700.5L655.7,700.5z"
                                id="map-map-country-BO"
                                data-id="BO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1062.2,284.9l-2.3,0.1l-1,1.3l-1.9-1.4l-0.9,2.5l2.7,2.9l1.3,1.9l2.5,2.3l2,1.4l2.2,2.5l4.7,2.4l0.4-3.4l1.5-1.4 l0.9-0.6l1.2-0.3l0.5-2.9l-2.7-2.3l1-2.7h-1.8l0,0l-2.4-1.4l-3.5,0.1L1062.2,284.9L1062.2,284.9z"
                                id="map-map-country-BA"
                                data-id="BA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1116.7,685l-1-0.5l-3.2,1.5h-1.6l-3.7,2.5l-2-2.6l-8.6,2.2l-4.1,0.2l-0.9,22.7l-5.4,0.2l-0.6,18.5l1.4,1l3,6.1 l-0.7,3.8l1.1,2.3l4-0.7l2.8-2.8l2.7-1.9l1.5-3.1l2.7-1.5l2.3,0.8l2.5,1.8l4.4,0.3l3.6-1.5l0.6-2l1.2-3l3-0.5l1.7-2.4l2-4.3l5.2-4.7 l8-4.7l-3.4-2.9l-4.2-0.9l-1.5-4.1l0.1-2.2l-2.3-0.7l-6-7l-1.6-3.7l-1.1-1.1L1116.7,685L1116.7,685z"
                                id="map-map-country-BW"
                                data-id="BW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M659,560.1l-1.4,0.2l-3.1-0.5l-1.8,1.7l-2.6,1.1l-1.7,0.2l-0.7,1.3l-2.7-0.3l-3.5-3l-0.3-2.9l-1.4-3.3l1-5.4 l1.6-2.2l-1.2-3l-1.9-0.9l0.8-2.8l-1.3-1.5l-2.9,0.3l0.7,1.8l-2.1,2.4l-6.4,2.4l-4,1l-1.7,1.5l-4.4-1.6l-4.2-0.8l-1,0.6l2.4,1.6 l-0.3,4.3l0.7,4l4.8,0.5l0.3,1.4l-4.1,1.8l-0.7,2.7l-2.3,1l-4.2,1.5l-1.1,1.9l-4.4,0.5l-3-3.4l-1.1,0.8l-1-3.8l-1.6-2l-1.9,2.2 l-10.9-0.1v3.9l3.3,0.7l-0.2,2.4l-1.1-0.6l-3.2,1v4.6l2.5,2.4l0.9,3.6l-0.1,2.8l-2.2,17.4l-5.1-0.3l-0.7,1l-4.6,1.2l-6.2,4.3l-0.4,3 l-1.3,2.2l0.7,3.4l-3.3,1.9l0.1,2.7L562,620l2.6,5.8l3.3,3.8l-1,2.8l3.7,0.3l2.3,3.4l4.9,0.2l4.4-3.8l0.2,9.7l2.6,0.7l3-1.1l4.2,0.6 l2.9-0.2l1.1-1.9l4.8-2.6l2.8-2.3l7.3-1.1l-0.4,4.7l0.9,2.5l-0.3,4.3l6.4,5.7l6.3,1l2.4,2.4l3.8,1.2l2.5,1.9l3.5-0.1l3.3,1.9 l0.5,3.7l1.2,1.8l0.3,2.8l-1.6,0.1l2.7,7.4l10.7,0.3l-0.6,3.6l0.8,2.6l3.2,1.7l1.6,4l-0.5,5l-1.3,2.8l0.8,3.6l-1.6,1.3l1.9,3.6 l0.4,8.6l6,1.2l2.1-1.2l3.9,1.7l1.2,1.9l1,5.8l0.9,2.5l2,0.3l2-1.1l2.1,1.2l0.3,3.5l-0.3,3.8l-0.7,3.6l2.6-1.2l3.1,3.7l0.5,5.1 l-4.2,3.5l-3.3,2.6l-5.3,6.2l-5.9,8.6l3.4-0.7l6.2,4.9l1.9-0.2l6.2,4.1l4.8,3.5l3.8,4.3l-1.9,3l2.1,3.7l2.9-3.7l1.5-6l3.2-3l3.9-5 l4.5-11.2l3.4-3.5l0.8-3.1l0.3-6.4l-1.3-3.5l0.3-4.8l4.1-6.3l6-5.1l6-1.8l3.6-2.9l8.5-2.4h5.9l1.1-3.8l4.2-2.8l0.6-6.5l5.1-8.3 l0.5-8.5l1.6-2.6l0.3-4.1l1.1-9.9l-1-11.9l1.4-4.7l1.4-0.1l3.9-5.5l3.3-7.2l7.7-8.8l2.7-4.2l2-10.5l-1-3.9l-2-8.1l-2.1-2l-4.8-0.2 l-4.3-1.9l-7.3-7.1l-8.4-5.3l-8.4,0.3l-10.9-3.4l-6.5,2l0.8-3.5l-2.7-3.8l-9.4-3.8l-7.1-2.3l-4.2,4.1l-0.3-6.3l-9.9-1l-1.7-2 l4.2-5.2l-0.1-4.4l-3-1l-3-11.2l-1.3-3.5l-1.9,0.3l-3.5,5.8l-1.8,4.7l-2.1,2.4l-2.7,0.5l-0.8-1.8l-1.2-0.3l-1.8,1.8l-2.4-1.3 l-3.2-1.4l-2.7,0.7l-2.3-0.6l-0.5,1.8l0.9,1.3l-0.5,1.3L659,560.1L659,560.1z"
                                id="map-map-country-BR"
                                data-id="BR"
                                class="svgMap-country"
                                fill="#fbb2ea"
                              ></path>
                              <path
                                d="M619.2,455.1l0.3-0.2l-0.2-0.1h-0.4l-0.3,0.2l0.1,0.1H619.2L619.2,455.1z M620.3,454.7l0.4-0.4l-0.5,0.1l-0.2,0.2 l0.1,0.1h0.1L620.3,454.7L620.3,454.7z M621.1,452.9h-0.2h-0.5l0,0l0.1,0.1h0.3l0.3,0.1l0,0L621.1,452.9L621.1,452.9z"
                                id="map-map-country-VG"
                                data-id="VG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1617.8,543.4l2.7,3.3l1.1-2.2l2.7,0.2l0.1-4.1l0.1-3.1l-4.6,3.5L1617.8,543.4L1617.8,543.4z"
                                id="map-map-country-BN"
                                data-id="BN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1121.6,294.3l-3-0.7l-4-2.2l-5.8,1.4l-2.3,1.6l-7.5-0.3l-4-1l-1.9,0.5l-1.8-2.6l-1.1,1.4l0.7,2.3l2.8,2.6l-1.7,1.9 l-0.7,2l0.6,0.7l-0.7,0.9l2.8,2l0.8,4.1l3.8,0.2l3.9-1.7l3.9,2.1l4.6-0.6l-0.3-3l5-2l4.5,0.8l-2.1-3.5l1.3-4.4L1121.6,294.3 L1121.6,294.3z"
                                id="map-map-country-BG"
                                data-id="BG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M978.8,477.2h-3.6l-1.4-1.2l-3,0.9l-5.2,2.6l-1.1,2l-4.3,2.9l-0.8,1.6l-2.3,1.3l-2.7-0.9l-1.6,1.6l-0.8,4.4 l-4.5,5.2l0.2,2.2l-1.6,2.7l0.4,3.7l2.5,1.4l1,2.1l2.5,1.3l1.9-1.6l2.7-0.2l3.8,1.6l-0.8-4.8l0.2-3.6l9.7-0.3l2.4,0.5l1.8-1l2.6,0.5 l4.9,0.1l1.9-0.7l1.2-2.8l2.7-0.6l1.2-1.9l0.1-4.4l-6.4-1.4l-0.2-3.1l-3.1-4.1l-0.8-2.9L978.8,477.2L978.8,477.2z"
                                id="map-map-country-BF"
                                data-id="BF"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1148.2,590l-0.3-2.5l0,0l-3-0.4l-1.7,3.6l-3.5-0.5l1.4,2.9l0.1,1.1l2,6.1l-0.1,0.3l0.6-0.1l2.1-2.3l2.2-3.3 l1.4-1.4v-2L1148.2,590L1148.2,590z"
                                id="map-map-country-BI"
                                data-id="BI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1574.8,481.8l-5.2-2.3l-2,4.3l-4.9-2.4l-5.3-1l-7.1,1.3l-3,5.2l2.1,7.7l3.4,6.6l2.6,3.3l4.7,0.9l4.7-2.5l5.8-0.5 l-2.8-3.8l8.9-4.9l-0.1-7.7L1574.8,481.8L1574.8,481.8z"
                                id="map-map-country-KH"
                                data-id="KH"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1060.1,502.9l0.2-4.3l-0.5-4.2l-2.2-4.1l-1.6,0.4l-0.2,2l2.3,2.6l-0.6,1.1l-0.3,2.1l-4.6,5l-1.5,4l-0.7,3.3 l-1.2,1.4l-1.1,4.5l-3,2.6l-0.8,3.2l-1.2,2.6l-0.5,2.6l-3.9,2.2l-3.2-2.6l-2.1,0.1l-3.3,3.7l-1.6,0.1l-2.7,6.1l-1.4,4.5v1.8l1.4,0.9 l1.1,2.8l2.6,1.1l2.2,4.2l-0.8,5l9.2,0.2l2.6-0.4l3.4,0.8l3.4-0.8l0.7,0.3l7.1,0.3l4.5,1.7l4.5,1.5l0.4-3.5l-0.6-1.8l-0.3-2.9 l-2.6-2.1l-2.1-3.2l-0.5-2.3l-2.6-3.3l0.4-1.9l-0.6-2.7l0.4-5l1.4-1.1l2.7-6.5l0.9-1.7l-1.8-4.4l-0.8-2.6l-2.5-1.1l-3.3-3.7l1.2-3 l2.5,0.6l1.6-0.4l3.1,0.1L1060.1,502.9L1060.1,502.9z"
                                id="map-map-country-CM"
                                data-id="CM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M659,276.7l-0.7-3l-2.5,1.9l0.5,2.1l5.6,2.6l1.9-0.4l3.3-2.5l-4.7,0.1L659,276.7L659,276.7z M673.4,260.8l0.2-1.1 l-4.1-2.6l-5.9-1.6l-1.9,0.6l3.5,2.9l5.7,1.9L673.4,260.8L673.4,260.8z M368.1,264.5l0.2-3.4l-3.2-2.6l-0.4-2.9l-0.1-2.1l-4.1-0.7 l-2.4-0.9l-4.1-1.4l-1.4,1.5l-0.6,3.3l4.3,1.1l-0.4,1.8l2.9,2.2v2.2l6.3,2.8L368.1,264.5L368.1,264.5z M704.2,251l3.9-3.8l1.4-1.7 l-2.1-0.3l-4.9,2.2l-4.2,3.5l-8.1,9.8l-5.3,3.7l1.6,1.7l-3.8,2.2l0.2,1.9l9.6,0.1l5.4-0.3l4.4,1.5l-4.4,2.9l2.9,0.2l7.3-5.4l1.2,0.8 l-2.5,5.1l3,1.2l2.3-0.2l3.5-5.5l-0.5-3.9l0.3-3.3l-3.7,1.1l2.8-4.6l-4.3-1.9l-2.7,1.5l-3.9-1.7l2.4-2.1l-2.9-1.3l-3.8,2L704.2,251 L704.2,251z M347.4,229.8l-1.9,2l-1.4,2.6l0.9,1.9l-0.6,2.8l0.7,2.8h1.9l-0.2-4.9l7.1-6.9l-4.9,0.5L347.4,229.8L347.4,229.8z M628.3,182.8l-0.4-1.2l-1.7-0.1l-2.8,1.7l-0.4,0.4l0.1,1.7l1.7,0.5L628.3,182.8L628.3,182.8z M618.7,179.6l0.8-1.1l-6-0.1l-4.9,2.7 v1.5l3,0.2L618.7,179.6L618.7,179.6z M615.6,163l-2.7-0.5l-5,5.2l-3.6,4.4l-5.7,2.8l6.3-0.6l-0.8,3.4l8.2-3l6.2-3l0.8,2.6l5.9,1.3 l4.9-1.8l-1.9-1.8l-3.4,0.4l1.3-2.7l-3.7-1.7l-3.4-1.9l-1.5-1.5l-2.8,0.9L615.6,163L615.6,163z M660.2,154.8l3.7-1.7l1-0.7l1.4-2.3 l-2.3-1.5l-4.2,0.7l-3.8,3.1l-0.7,2.6L660.2,154.8L660.2,154.8z M586.4,144.1l-0.8-2l-0.3-1l-1.6-1l-3-1.5l-4.9,2.3l-5,1.7l3.5,2.4 l3.8-0.6l4.1,1.6L586.4,144.1z M608.8,142l-6.6-1l5.7-2.6l-0.4-6l-1.9-2.3l-4.5-0.8l-8.1,3.8l-5.5,5.8l2.9,2.1l1.6,3.3l-6.3,5.5 l-3.2-0.2l-6.2,4.4l4.2-5.2l-4.8-1.8l-4.5,0.9l-2.4,3.4l-5.9-0.1l-7.2,0.8l-5.1-2.4l-5,0.4l-1.5-2.9l-2.1-1.3l-3.8,0.5l-5.2,0.3 l-4.4,1.8l2,2.3l-7,2.8l-1.4-3.3l-4.4,1l-11.8,0.6l-6.4-1.2l8.5-2.6l-2.8-2.8l-4.4,0.4l-4.7-1l-7.5-1.9l-3.8-2.3l-4.5-0.3l-3.3,1.6 l-5.9,0.9l3.9-4.1l-9.4,3.6l-1.4-4.7l-2.1-0.6l-3.8,2.5l-4.5,1.2l-0.2-2.2l-8.2,1.4l-8.8,2.3l-5.2-0.6l-7,1.6l-6.2,2.3l-3.7-0.5 l-3.3-2.6l-5.9-1.3l0,0l-24.3,20.2l-35.4,32.4l4.2,0.1l2.7,1.6l0.6,2.6l0.2,3.9l7.6-3.3l6.4-1.9l-0.5,3l0.7,2.4l1.7,2.7l-1.1,4.2 l-1.5,6.8l4.6,3.8l-3.1,3.7l-5.1,2.9l0,0l-2.5,3.1l2.1,4.4l-3.1,4.9l4.1,2.6l-3.6,3.7l-1.3,5.5l6.9,2.5l1.6,2.7l5.4,6.1h0.7h13.9 h14.6h4.8h15h14.5h14.7h14.8h16.7h16.8h10.1l1.3-2.4h1.6l-0.8,3.4l1,1l3.2,0.4l4.6,1l3.8,1.9l4.4-0.8l5.3,1.6l0,0l3.2-2.4l3.2-1 l1.8-1.5l1.5-0.8l4,1.2l3.3,0.2l0.8,0.8l0.1,3.5l5.2,1l-1.7,1.7l1.2,1.9l-1.9,2.3l1.8,0.8l-1.9,2.1l0,0l1.2,0.2l1.3-0.9l0.5,1.4 l3.4,0.7l3.8,0.1l3.8,0.6l4,1.2l0.8,2l1.4,4.7l-2.4,2l-3.8-0.8l-1-3.8l-0.9,3.9l-3.8,3.4l-0.8,2.9l-1.1,1.7l-4.1,2l0,0l-3.7,3.4 l-2,2.2l2.7,0.4l4.5-2l2.9-1.7l1.6-0.3l2.6,0.6l1.7-0.9l2.8-0.8l4.7-0.8l0,0l0,0l0.3-1.8l-0.3,0.1l-1.7,0.3l-1.8-0.6l2.3-2.1 l1.9-0.7l3.9-0.9l4.6-0.9l1.8,1.2l1.9-1.4l1.9-0.8l0.9,0.4l0.1,0.1l6.7-4.2l2.7-1.2h7.7h9.3l1-1.6l1.7-0.3l2.5-0.9l2.7-2.8l3.2-4.9 l5.5-4.7l1.1,1.7l3.7-1.1l1.5,1.8l-2.8,8.5l2.1,3.5l5.9-0.8l8.1-0.2l-10.4,5.1l-1.5,5.2l3.7,0.5l7.1-4.5l5.8-2.4l12.2-3.7l7.5-4.1 l-2.6-2.2l1-4.5l-7.1,7l-8.6,0.8l-5.5-3.1l-0.1-4.6l0.6-6.8l6.1-4.1l-3.3-3.1l-7.6,0.6l-12.1,5.2l-10.9,8.2l-4.6,1l7.8-5.7l10.1-8.3 l7.2-2.7l5.7-4.4l5.2-0.5l7.3,0.1l10,1.3l8.6-1l7.8-5.1l8.7-2.2l4.2-2.1l4.2-2.3l2-6.8l-1.1-2.3l-3.4-0.8v-5.1l-2.3-1.9l-6.9-1.6 l-2.8-3.4l-4.8-3.4l3.4-3.7l-2-7.1l-2.6-7.5l-1-5.2l-4.3,2.7l-7.4,6.5l-8.1,3.2l-1.6-3.4l-3.7-1l2.2-7.3l2.6-4.9l-7.7-0.5l-0.1-2.2 l-3.6-3.3l-3-2l-4.5,1.5l-4.2-0.5l-6.6-1.6l-3.9,1.3l-3.8,9l-1,5.3l-8.8,6.1l3.1,4.5l0.5,5l-1.7,4l-4.7,4.1L610,224l-9,2.8l1.7,3.2 l-2.2,9.6l-5.6,6.3l-4.6,1.9l-4.4-5.8l-0.1-6.8l1.7-6l3.6-5.2l-4.8-0.6l-7.5-0.4l-3.6-2.5l-4.8-1.6l-1.7-2.9l-3.3-2.2l-7-2.6 l-7.1,1.2l0.7-4.5l1.5-5.5l-6-1l4.9-6.8l4.9-4.6l9.4-6.5l8.6-4.6l5.6-0.7l2.9-3.7l5.1-2.4l6.4-0.4l7.7-3.8l2.9-2.4l7.4-4.7l3.2-2.8 l3.2,1.7l6.5-0.9L637,155l2.3-2.7l-0.8-2.9l5-2.9l1.7-2.7l-3.5-2.6l-5.4-0.8l-5.5-0.4l-4.6,5.9l-6.5,4.6l-7.2,4l-1.3-3.7l4.2-4 l-2.2-3.5l-8.7,4.2L608.8,142L608.8,142z M533.3,123.1l-2.8-1l-14.1,3.2l-5.1,2l-7.8,3.9l5.4,1.4l6.2-0.1l-11.5,2.1v1.9l5.6,0.1 l9-0.4l6.5,1.2l-6.2,1l-5.5-0.3l-7.1,0.9l-3.3,0.6l0.6,4.2l4.2-0.6l4.1,1.5l-0.3,2.5l7.8-0.5l11.2-0.8l9.4-1.8l5-0.4l5.7,1.5 l6.7,0.8l3.1-1.9l-0.7-2.1l7-0.4l2.6-2.4l-5-2.5l-4.2-2.6l2.4-3.6l2.7-5.1l-2.2-2l-3-0.9l-4.2,0.8l-2.8,5.3l-4.3,2.1l2.2-5.1 l-1.7-1.7l-7.3,2.7L539,124l-10.4,1.5L533.3,123.1L533.3,123.1z M572.4,121.6l-1.7-1.1l-5.4,0.2l-2.1,0.7l2.2,3.6 C565.4,125,572.4,121.6,572.4,121.6z M680.1,123.2l-4.4-2.8l-8.4-0.5l-2.1,0.3l-1.7,1.8l2,2.8l0.9,0.3l4.8-0.7l4.1,0.1l4.1,0.1 L680.1,123.2L680.1,123.2z M640.7,122.9l5.7-3.2l-11.2,1.3l-5.8,2.1l-7.1,4.6l-3.3,5.2l5.6,0.1l-6.1,2.3l1.8,1.9l5.9,0.8l7.3,1.5 l13.8,1.2l7.9-0.6l3.2-1.6l2,1.8l3.3,0.3l2,3.3l-3.5,1.4l7.1,1.8l4.6,2.6l0.5,1.9L674,154l-8.6,5.4l-3.2,2.7l0.2,2l-9.2,0.7l-8,0.1 l-5.4,4.2l2.4,1.9l13-0.9l0.9-1.6l4.7,2.7l4.7,2.9l-2.4,1.6l3.8,2.8l7.6,3.3l10.7,2.3l0.3-2l-2.8-3.5l-3.5-4.9l8.5,4.6l4.7,1.5 l3.6-4.1v-5.6l-1-1.5l-4.4-2.5l-2.7-3.3l2.3-3.2l5.8-0.7l3.8,5.4l4,2.4l10.7-6.5l3.3-3.9l-6.4-0.3l-3.2-5.1l-5.9-1.2l-7.7-3.5l9-2.5 l-0.8-5l-2.2-2.1l-8.3-2.1l-1.9-3.3l-8.2,1.2l1.1-2.3l-3.6-2.5l-6.8-2.6l-5.2,2.1l-9,1.5l3.3-3.4l-2.3-5.3l-11.6,2.1l-7.1,4.1 L640.7,122.9L640.7,122.9z M590.7,119.5l-7.1,2.4l0.9,3.4l-7.4-0.7l-1.7,1.7l5.8,3.9l0.9,2l3.4,0.5l8.4-2l5.1-4.7l-3.8-2.2l6-2.4 l0.5-1.5l-7.5,0.6L590.7,119.5L590.7,119.5z M613,124.9l5.6-1l10-4.5l-6.1-1.2l-7.8-0.2l-5.2,1.4l-4.2,2.1l-2.5,2.6l-1.8,4.5 l4.3,0.2L613,124.9z M498.3,132.1l2.6-2.3l9.1-3.6l13.8-3.6l6.4-1.3l-1.6-2.1l-1.9-1.5l-9.4-0.2l-4.1-1.1l-14,0.8l-0.3,3.1l-7.6,3.3 l-7.4,3.8l-4.3,2.2l5.9,2.7l-0.6,2.3L498.3,132.1L498.3,132.1z M622.4,113.8l0.3-1.6l-1.4-1.7l-6.9,1.3L610,114l3.2,1.3l5.1,0.4 L622.4,113.8L622.4,113.8z M613.7,105.2l-1.1,0.7l-4.8-0.3l-7.6,1.6l-3.8-0.1l-4.3,3.8l6.6-0.4l-3.4,2.9l3.2,0.8l6.8-0.5l5.8-3.7 l2.8-2.5L613.7,105.2z M574.6,107.7l1.8-2.3l-3.1-0.5l-5.7,1.7l-0.7,4.7l-6.1-0.4L558,108l-8.2-1.6l-5.4,1.4l-11.6,4.8l4.1,0.8 l17.8-0.5l-10.6,2.2l-1.5,1.6l5.9-0.1l12.2-2.2l13.8-0.8l5.1-2.3l2.3-2.4l-3.7-0.2l-4.3,0.8C573.9,109.5,574.6,107.7,574.6,107.7z M629.8,103.4l-7.1-0.3l-3.8,2l2.6,1.5l7,0.6l1.4,2.1l-2.2,2.4l-1.5,2.8l8.5,1.6l5.5,0.6l8-0.1l11.6-0.8l4.3,0.6l6.7-1l3.5-1.4l1-2 l-2.3-1.9l-5.8-0.3l-8,0.4l-7,1.1l-5.1-0.4l-4.8-0.3l-1.2-1.1l-3.1-1.1l2.8-1.9l-1.4-1.6l-7.3,0.1L629.8,103.4L629.8,103.4z M554.8,100.8l-6,0.7l-5.5-0.1l-12.1,3.1l-11.6,3.7l0,0l3.6,1l7-0.7l9.8-2.1l3.8-0.3l5.2-1.6L554.8,100.8z M635.3,101.4l1-0.5 l-1.5-0.9l-7.2-0.1l-0.6,1.3l6.4,0.3L635.3,101.4L635.3,101.4z M576.9,100.6l3.2-1.4l-4.1-0.8l-5.9,0.5l-5.1,1.5l3.3,1.5 C568.3,101.9,576.9,100.6,576.9,100.6z M584.7,96.4l-3.3-0.9l-1.6-0.2l-5.7,1.3l-1,0.7h6L584.7,96.4z M631.1,98.9l3-1.7l-2.3-1.6 l-1.7-0.3l-4.4-0.1l-2.1,1.8l-0.7,1.8l1.6,1.1L631.1,98.9L631.1,98.9z M617.4,97.7l0.1-2.2l-7.4-1.7l-6.1-0.6l-2.1,1.7l2.8,1.1 l-5.3,1.4l7.7,0.2l4,1.5l5.2,0.5L617.4,97.7z M671.1,91.6l0.6-2.8L667,88l-4.7-0.9l-1.6-2.2l-8.2,0.2l0.3,0.9l-3.9,0.3l-4.1,1.3 l-4.9,1.9l-0.3,1.9l2,1.5h6.5l-4.3,1.2l-2.1,1.6l1.6,1.9l6.7,0.6l6.8-0.4l10.5-3.4l6.4-1.3L671.1,91.6z M749.6,77.8l-7-0.2l-6.9-0.3 l-10.2,0.6l-1.4-0.4l-10.3,0.2l-6.4,0.4l-5.1,0.6l-5,2l-2.3-1l-3.9-0.2l-6.7,1.4l-7.4,0.6l-4.1,0.1l-6,0.8l-1.1,1.3l2.5,1.2l0.8,1.6 l4.4,1.5l12.4-0.3l7.2,0.5l-7.2,1.5l-2.2-0.4l-9.3-0.2l-1.1,2.2l3,1.7l-2.8,1.6l-7.5,1.1l-4.9,1.7l4.8,0.9l1.7,3l-7.5-2l-2.5,0.3 l-2,3.4l-8,1.1l-2,2.3l6.7,0.3l4.9,0.6l11.7-0.8l8.4,1.4l12.6-3l1-1.1l-6.4,0.2l0.5-1.1l6.5-1.4l3.6-1.9l6.8-1.3l5-1.6l-0.8-2.2 l3.3-0.8l-4.3-0.6l11.1-0.4l3.2-0.9l7.9-0.8l9.3-3.5l6.8-1.1l10.3-2.5h-7.4l3.9-0.9l9-0.8l9.7-1.6l1.1-1.1l-5.2-1l-6.7-0.4 L749.6,77.8L749.6,77.8z"
                                id="map-map-country-CA"
                                data-id="CA"
                                class="svgMap-country"
                                fill="#e35fc5"
                              ></path>
                              <path
                                d="M841.4,477.6l0.1-0.4l-0.2-0.6l-0.3-0.1l-0.6,0.4l-0.1,0.3l0.1,0.3l0.3,0.3l0.3,0.1L841.4,477.6L841.4,477.6z M847.7,475.9l0.4-0.2V475l-0.1-0.3h-0.4l-0.2,0.4v0.1v0.4L847.7,475.9L847.7,475.9L847.7,475.9z M846.3,476.7l-0.5-0.9l-0.3-0.1 l-0.6-0.7v-0.3l-0.3-0.1v0.2v0.4l-0.2,0.5v0.5l0.4,0.8l0.4,0.2l0.7,0.1L846.3,476.7L846.3,476.7z M849.4,468.9v0.5l-0.3,0.7l0.5,0.3 l0.3,0.1l0.6-0.4l0.2-0.5l-0.1-0.3l-0.3-0.3l-0.3-0.1l-0.1,0.1L849.4,468.9L849.4,468.9z M843,466.4l-1-0.1l-0.6-0.2h-0.1v0.3 l0.4,0.8l0.2-0.5l0.2-0.1l0.8,0.2l0.4-0.1l-0.1-0.1L843,466.4L843,466.4z M849.7,466.2l-0.1-0.5V465h-0.2l-0.3,0.2l0.1,0.7l0.1,0.1 l0.2,0.5L849.7,466.2L849.7,466.2z M838.6,465.2V465l-0.3-0.5l-0.3,0.1l-0.4,0.2l-0.1,0.3l0.4,0.2h0.2L838.6,465.2L838.6,465.2z M837.1,464.3l0.8-0.6l0.2-0.3l-0.2-0.5l-0.5-0.1l-1.2,0.6l-0.1,0.2l0.1,0.3l0.1,0.5l0.2,0.1L837.1,464.3L837.1,464.3z"
                                id="map-map-country-CV"
                                data-id="CV"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M527,449.1l-0.1-0.3l-0.1,0.1v0.6h0.5h0.2l0.3-0.2h0.6l-0.1-0.2l-0.8-0.1l-0.1,0.1l-0.2,0.1L527,449.1L527,449.1z M535,446.8L535,446.8l-0.1-0.1h-0.1l-0.3,0.1h-0.1h-0.1l-0.1,0.1l-0.1,0.1h0.2l0.4-0.2H535L535,446.8L535,446.8z M535.8,446.7 l0.5-0.2l0,0l-0.1-0.1h-0.1l-0.1,0.1h-0.1l-0.5,0.3h0.2L535.8,446.7L535.8,446.7z"
                                id="map-map-country-KY"
                                data-id="KY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1110.5,517.3l-0.5-0.3l-2-1.8l-0.3-2l0.8-2.6V508l-3.3-4l-0.7-2.7l-3.5,1.1l-2.8,2.5l-4,7l-5.2,2.9l-5.4-0.4 l-1.6,0.6l0.6,2.3l-2.9,2.2l-2.3,2.5l-7.1,2.4l-1.4-1.4l-0.9-0.2l-1,1.7l-4.7,0.4l-2.7,6.5l-1.4,1.1l-0.4,5l0.6,2.7l-0.4,1.9 l2.6,3.3l0.5,2.3l2.1,3.2l2.6,2.1l0.3,2.9l0.6,1.8l2.9-5.9l3.3-3.4l3.8,1.1l3.6,0.4l0.5-4.5l2.2-3.2l3-2l4.6,2.1l3.6,2.4l4.1,0.6 l4.2,1.2l1.6-3.8l0.8-0.5l2.6,0.6l6.2-3.1l2.2,1.3l1.8-0.2l0.9-1.5l2-0.6l4.3,0.7l3.6,0.1l1.8-0.6l-0.9-2.1l-4.2-2.5l-1.5-3.8 l-2.4-2.7l-3.8-3.4l-0.1-2l-3.1-2.6L1110.5,517.3L1110.5,517.3z"
                                id="map-map-country-CF"
                                data-id="CF"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1108.4,447.6l-22.4-12.2l-22.3-12.2l-5.4,3.5l1.6,9.9l2,1.6l0.2,2.1l2.3,2.2l-1.1,2.7l-1.8,12.9l-0.2,8.3l-6.9,6 l-2.3,8.4l2.4,2.3v4.1l3.6,0.2l-0.5,2.9l2.2,4.1l0.5,4.2l-0.2,4.3l3.1,5.8l-3.1-0.1l-1.6,0.4l-2.5-0.6l-1.2,3l3.3,3.7l2.5,1.1 l0.8,2.6l1.8,4.4l-0.9,1.7l4.7-0.4l1-1.7l0.9,0.2l1.4,1.4l7.1-2.4l2.3-2.5l2.9-2.2l-0.6-2.3l1.6-0.6l5.4,0.4l5.2-2.9l4-7l2.8-2.5 l3.5-1.1v-1.6l-2.1-1.8l-0.1-3.7l-1.2-2.5l-2,0.4l0.5-2.4l1.4-2.6l-0.7-2.7l1.8-1.9l-1.2-1.5l1.4-3.9l2.4-4.7l4.8,0.4L1108.4,447.6 L1108.4,447.6z"
                                id="map-map-country-TD"
                                data-id="TD"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M648.4,905.2l-3.7-0.7l-3.3,2.5l0.2,4.1l-1.2,2.8l-7.2-2.2l-8.6-4l-4.5-1.3l9.7,6.8l6.3,3.2l7.5,3.4l5.3,0.9 l4.3,1.8l3,0.5l2.3,0.1l3.2-1.8l0.5-2.4l-2.9-0.2h-5L648.4,905.2L648.4,905.2z M601.1,708.9l-3.7-7.1l1.1-6.2l-3.2-2.7l-1.2-4.6 L591,684l-1.2,3.3l-2.7,1.6l2.1,9l1.5,10.4l-0.1,14.2v13.2l0.9,12.3l-1.9,7.8l2.1,7.8l-0.5,5.3l3.2,9.5l-0.1,9.5l-1.2,10.2 l-0.6,10.5l-2.1,0.2l2.4,7.3l3.3,6.3l-1.1,4.3l1.9,11.6l1.5,8.8l3.5,0.9l-1.1-7.7l4,1.6l1.8,12.7l-6.4-2.1l2,10.2l-2.7,5.5l8.2,1.8 l-3.4,4.8l0.2,6l5,10.6l4.2,4.1l0.2,3.6l3.3,3.8l7.5,3.5l0,0l7.4,4.2l6.2,2l2-0.1l-1.8-5.7l3.4-2.2l1.7-1.5h4.2l-4.8-0.9l-12-0.8 l-3.5-3.6l-1.8-4.6l-3.1,0.4l-2.6-2.2l-3.1-6.6l2.7-2.7l0.1-3.9l-1.8-3.2l0.7-5.3l-1.1-8.2l-1.8-3.7l1.8-1.1l-1.3-2.3l-2.8-1.3 l0.8-2.6l-3.1-2.3l-3.6-7.1l1.6-1.2l-3.3-7.6l-0.7-6.4l-0.3-5.7l2.5-2.4l-3.3-6.3l-1.5-5.9l2.9-4.3l-1.4-5.4l1.6-6.2l-1.3-5.9 l-1.6-1.2l-4.9-10.9l2.1-6.5l-1.7-6.2l0.9-5.8l2.6-5.9l3.2-4l-2-2.5l0.9-2l-1.6-10.6l5.6-3.2l1.1-6.6l-0.9-1.6l-3.8,0.9L601.1,708.9 L601.1,708.9z"
                                id="map-map-country-CL"
                                data-id="CL"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1587.2,453.3l0.6-3.6l2-2.8l-1.6-2.5l-3.2-0.1l-5.8,1.8l-2.2,2.8l1,5.5l4.9,2L1587.2,453.3L1587.2,453.3z M1600.4,256.8l-6.1-6.1l-4.4-3.7l-3.8-2.7l-7.7-6.1l-5.9-2.3l-8.5-1.8l-6.2,0.2l-5.1,1.1l-1.7,3l3.7,1.5l2.5,3.3l-1.2,2l0.1,6.5 l1.9,2.7l-4.4,3.9l-7.3-2.3l0.6,4.6l0.3,6.2l2.7,2.6l2.4-0.8l5.4,1l2.5-2.3l5.1,2l7.2,4.3l0.7,2.2l-4.3-0.7l-6.8,0.8l-2.4,1.8 l-1.4,4.1l-6.3,2.4l-3.1,3.3l-5.9-1.3l-3.2-0.5l-0.4,4l2.9,2.3l1.9,2.1l-2.5,2l-1.9,3.3l-4.9,2.2l-7.5,0.2l-7.2,2.2l-4.4,3.3l-3.2-2 l-6.2,0.1l-9.3-3.8l-5.5-0.9l-6.4,0.8l-11.2-1.3l-5.5,0.1l-4.7-3.6l-4.9-5.7l-3.4-0.7l-7.9-3.8l-7.2-0.9l-6.4-1l-3-2.7l-1.3-7.3 l-5.8-5l-8.1-2.3l-5.7-3.3l-3.3-4.4l-1.7,0.5l-1.8,4.2l-3.8,0.6l2.5,6.2l-1.6,2.8l-10.7-2l1,11.1l-2,1.4l-9,2.4l8.7,10.7l-2.9,1.6 l1.7,3.5l-0.2,1.4l-6.8,3.4l-1,2.4l-6.4,0.8l-0.6,4l-5.7-0.9l-3.2,1.2l-4,3l1.1,1.5l-1,1.5l3,5.9l1.6-0.6l3.5,1.4l0.6,2.5l1.8,3.7 l1.4,1.9l4.7,3l2.9,5l9.4,2.6l7.6,7.5l0.8,5.2l3,3.3l0.6,3.3l-4.1-0.9l3.2,7l6.2,4l8.5,4.4l1.9-1.5l4.7,2l6.4,4.1l3.2,0.9l2.5,3.1 l4.5,1.2l5,2.8l6.4,1.5l6.5,0.6l3-1.4l1.5,5.1l2.6-4.8l2.6-1.6l4.2,1.5l2.9,0.1l2.7,1.8l4.2-0.8l3.9-4.8l5.3-4l4.9,1.5l3.2-2.6 l3.5,3.9l-1.2,2.7l6.1,0.9l3-0.4l2.7,3.7l2.7,1.5l1.3,4.9l0.8,5.3l-4.1,5.3l0.7,7.5l5.6-1l2.3,5.8l3.7,1.3l-0.8,5.2l4.5,2.4l2.5,1.2 l3.8-1.8l0.6,2.6l0.7,1.5l2.9,0.1l-1.9-7.2l2.7-1l2.7-1.5h4.3l5.3-0.7l4.1-3.4l3,2.4l5.2,1.1l-0.2,3.7l3,2.6l5.9,1.6l2.4-1l7.7,2 l-0.9,2.5l2.2,4.6l3-0.4l0.8-6.7l5.6-0.9l7.2-3.2l2.5-3.2l2.3,2.1l2.8-2.9l6.1-0.7l6.6-5.3l6.3-5.9l3.3-7.6l2.3-8.4l2.1-6.9l2.8-0.5 l-0.1-5.1l-0.8-5.1l-3.8-2l-2.5-3.4l2.8-1.7l-1.6-4.7l-5.4-4.9l-5.4-5.8l-4.6-6.3l-7.1-3.5l0.9-4.6l3.8-3.2l1-3.5l6.7-1.8l-2.4-3.4 l-3.4-0.2l-5.8-2.5l-3.9,4.6l-4.9-1.9l-1.5-2.9l-4.7-1l-4.7-4.4l1.2-3l5-0.3l1.2-4.1l3.6-4.4l3.4-2.2l4.4,3.3l-1.9,4.2l2.3,2.5 l-1.4,3l4.8-1.8l2.4-2.9l6.3-1.9l2.1-4l3.8-3.4l1-4.4l3.6,2l4.6,0.2l-2.7-3.3l6.3-2.6l-0.1-3.5l5.5,3.6l0,0l-1.9-3.1l2.5-0.1 l-3.8-7.3l-4.7-5.3l2.9-2.2l6.8,1.1l-0.6-6l-2.8-6.8l0.4-2.3l-1.3-5.6l-6.9,1.8l-2.6,2.5h-7.5l-6-5.8l-8.9-4.5L1600.4,256.8 L1600.4,256.8z"
                                id="map-map-country-CN"
                                data-id="CN"
                                class="svgMap-country"
                                fill="#f7a2e3"
                              ></path>
                              <path
                                d="M578.3,497.2l1.2-2.1l-1.3-1.7l-2-0.4l-2.9,3.1l-2.3,1.4l-4.6,3.2l-4.3-0.5l-0.5,1.3l-3.6,0.1l-3.3,3l-1.4,5.4 l-0.1,2.1l-2.4,0.7l-4.4,4.4l-2.9-0.2l-0.7,0.9l1.1,3.8l-1.1,1.9l-1.8-0.5l-0.9,3.1l2.2,3.4l0.6,5.4l-1.2,1.6l1.1,5.9l-1.2,3.7 l2,1.5l-2.2,3.3l-2.5,4l-2.8,0.4l-1.4,2.3l0.2,3.2l-2.1,0.5l0.8,2l5.6,3.6l1-0.1l1.4,2.7l4.7,0.9l1.6-1l2.8,2.1l2.4,1.5l1.5-0.6 l3.7,3l1.8,3l2.7,1.7l3.4,6.7l4.2,0.8l3-1.7l2.1,1.1l3.3-0.6l4.4,3l-3.5,6.5l1.7,0.1l2.9,3.4l2.2-17.4l0.1-2.8l-0.9-3.6l-2.5-2.4 v-4.6l3.2-1l1.1,0.6l0.2-2.4l-3.3-0.7v-3.9l10.9,0.1l1.9-2.2l1.6,2l1,3.8l1.1-0.8l-1.7-6.4l-1.4-2.2l-2-1.4l2.9-3.1l-0.2-1.5 l-1.5-1.9l-1-4.2l0.5-4.6l1.3-2.1l1.2-3.4l-2-1.1l-3.2,0.7l-4-0.3l-2.3,0.7l-3.8-5.5l-3.2-0.8l-7.2,0.6l-1.3-2.2l-1.3-0.6l-0.2-1.3 l0.8-2.4l-0.4-2.5l-1.1-1.4l-0.6-2.9l-2.9-0.5l1.8-3.7l0.9-4.5l1.8-2.4l2.2-1.8l1.6-3.2L578.3,497.2L578.3,497.2z"
                                id="map-map-country-CO"
                                data-id="CO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1221.1,650.5l-0.4-0.4h-0.4v0.2l0.1,0.4l1.1,0.2L1221.1,650.5L1221.1,650.5z M1225,649L1225,649l-0.3,0.1l-0.1,0.2 l-0.1,0.3h-0.3h-0.2h-0.4l0.8,0.5l0.5,0.5l0.2,0.2l0.1-0.2l0.1-0.7L1225,649L1225,649z M1219.4,647.9l0.2-0.3l-0.2-0.7l-0.4-0.8 l0.1-1.4l-0.2-0.2h-0.3l-0.1,0.1l-0.1,0.3l-0.3,2l0.4,0.6l0.3,0.1L1219.4,647.9L1219.4,647.9L1219.4,647.9z"
                                id="map-map-country-KM"
                                data-id="KM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1080.3,549.9l-3.6-0.4l-3.8-1.1l-3.3,3.4l-2.9,5.9l-0.4,3.5l-4.5-1.5l-4.5-1.7l-7.1-0.3l-0.4,2.8l1.5,3.3l4.2-0.5 l1.4,1.2l-2.4,7.4l2.7,3.8l0.6,4.9l-0.8,4.3l-1.7,3l-4.9-0.3l-3-3l-0.5,2.8l-3.8,0.8l-1.9,1.6l2.1,4.2l-4.3,3.5l4.6,6.7l2.2-2.7 l1.8-1.1l2,2.2l1.5,0.6l1.9-2.4l3.1,0.1l0.4,1.8l2,1.1l3.4-4l3.3-3.1l1.4-2l-0.2-5.3l2.5-6.2l2.6-3.2l3.7-3.1l0.6-2l0.2-2.4l0.9-2.2 l-0.3-3.6l0.7-5.6l1.1-4l1.6-3.4L1080.3,549.9L1080.3,549.9z"
                                id="map-map-country-CG"
                                data-id="CG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M509.1,502.6l-1.4,1.3l-1.7-0.4l-0.8-1.3l-1.7-0.5l-1.4,0.8l-3.5-1.7l-0.9,0.8l-1.4,1.2l1.5,0.9l-0.9,2l-0.1,2 l0.7,1.3l1.7,0.6l1.2,1.8l1.2-1.6l-0.3-1.8l1.4,1.1l0.3,1.9l1.9,0.8l2.1,1.3l1.5,1.5l0.1,1.4l-0.7,1.1l1.1,1.3l2.9,1.4l0.4-1.2 l0.5-1.3l-0.1-1.2l0.8-0.7l-1.1-1l0.1-2.5l2.2-0.6l-2.4-2.7l-2-2.6L509.1,502.6L509.1,502.6z"
                                id="map-map-country-CR"
                                data-id="CR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1065,280.4l-4-2.6l-1.6-0.8l-3.9,1.7l-0.3,2.5l-1.7,0.6l0.2,1.7l-2-0.1l-1.8-1l-0.8,1l-3.5-0.2l-0.2,0.1v2.2l1.7,2 l1.3-2.6l3.3,1l0.3,2l2.5,2.6l-1,0.5l4.6,4.5l4.8,1.8l3.1,2.2l5,2.3l0,0l0.5-1l-4.7-2.4l-2.2-2.5l-2-1.4l-2.5-2.3l-1.3-1.9l-2.7-2.9 l0.9-2.5l1.9,1.4l1-1.3l2.3-0.1l4.4,1l3.5-0.1l2.4,1.4l0,0l1.7-2.3l-1.7-1.8l-1.5-2.4l0,0l-1.8,0.9L1065,280.4L1065,280.4z"
                                id="map-map-country-HR"
                                data-id="HR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M539,427.3l-4.9-2.1l-4.3-0.1l-4.7-0.5l-1.4,0.7l-4.2,0.6l-3,1.3l-2.7,1.4l-1.5,2.3l-3.1,2l2.2,0.6l2.9-0.7l0.9-1.6 l2.3-0.1l4.4-3.3l5.4,0.3l-2.3,1.6l1.8,1.3l7,1l1.5,1.3l4.9,1.7l3.2-0.2l0.8,3.6l1.7,1.8l3.5,0.4l2.1,1.7l-4.1,3.5l7.9-0.6l3.8,0.5 l3.7-0.3l3.8-0.8l0.8-1.5l-3.9-2.6l-4-0.3l0.6-1.7l-3.1-1.3h-1.9l-3-2.8l-4.2-4l-1.8-1.5l-5.2,0.8L539,427.3L539,427.3z"
                                id="map-map-country-CU"
                                data-id="CU"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M595.9,494.9v-0.6l-0.9-0.4v0.3l0.1,0.2l0.3,0.1l0.1,0.2l-0.1,0.6l0.2,0.3L595.9,494.9L595.9,494.9z"
                                id="map-map-country-CW"
                                data-id="CW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1149.9,348.4l-0.3-0.1l-0.5,0.2l-0.4,0.4l-0.4,0.3l-0.5-0.3l0.2,0.9l0.6,1.1l0.2,0.3l0.3,0.2l1.1,0.3h0.3h0.6 l0.2,0.1l0.2,0.4h0.4v-0.1v-0.3l0.2-0.2l0.3-0.2h0.3l0.6-0.1l0.6-0.2l0.5-0.4l0.9-1h0.3h0.3h0.6l0.6-0.1l-0.2-0.4l-0.1-0.1l-0.4-0.5 l-0.2-0.4l0.1-0.6l2.5-1.9l0.5-0.5l-0.8,0.2l-0.6,0.4l-0.4,0.2l-0.7,0.4l-2.3,0.8l-0.8,0.1h-0.8l-1-0.1l-0.9-0.2v0.7l-0.2,0.6 l-0.6,0.2L1149.9,348.4L1149.9,348.4z"
                                id="map-map-country-CY"
                                data-id="CY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1049.4,248.5l-2.1,0.6l-1.4-0.7l-1.1,1.2l-3.4,1.2l-1.7,1.5l-3.4,1.3l1,1.9l0.7,2.6l2.6,1.5l2.9,2.6l3.8,2l2.6-2.5 l1.7-0.5l4,1.9l2.3-0.3l2.3,1.2l0.6-1.4l2.2,0.1l1.6-0.6l0.1-0.6l0.9-0.3l0.2-1.4l1.1-0.3l0.6-1.1h1.5l-2.6-3.1l-3.6-0.3l-0.7-2 l-3.4-0.6l-0.6,1.5l-2.7-1.2l0.1-1.7l-3.7-0.6L1049.4,248.5L1049.4,248.5z"
                                id="map-map-country-CZ"
                                data-id="CZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1124.9,539.4l-4.3-0.7l-2,0.6l-0.9,1.5l-1.8,0.2l-2.2-1.3l-6.2,3.1l-2.6-0.6l-0.8,0.5l-1.6,3.8l-4.2-1.2l-4.1-0.6 l-3.6-2.4l-4.6-2.1l-3,2l-2.2,3.2l-0.5,4.5l-0.3,3.8l-1.6,3.4l-1.1,4l-0.7,5.6l0.3,3.6l-0.9,2.2l-0.2,2.4l-0.6,2l-3.7,3.1l-2.6,3.2 l-2.5,6.2l0.2,5.3l-1.4,2l-3.3,3.1l-3.4,4l-2-1.1l-0.4-1.8l-3.1-0.1l-1.9,2.4l-1.5-0.6l-2,1.3l-0.9,1.7l-0.2,2.7l-1.5,0.7l0.8,2 l2.3-0.9l1.7,0.1l1.9-0.7l16.6,0.1l1.3,4.7l1.6,3.8l1.3,2.1l2.1,3.3l3.7-0.5l1.9-0.9l3,0.9l0.9-1.6l1.5-3.7l3.4-0.3l0.3-1.1h2.9 l-0.5,2.3h6.8v4l1.2,2.4l-0.9,3.8l0.3,4l1.9,2.3l-0.5,7.6l1.4-0.6l2.4,0.2l3.5-1l2.6,0.4l1.9,0.1l0.3,2l2.6-0.1l3.5,0.6l1.8,2.8 l4.5,0.9l3.4-2l1.2,3.4l4.3,0.8l2,2.8l2.1,3.5h4.3l-0.3-6.9l-1.5,1.2l-3.9-2.5l-1.4-1.1l0.8-6.4l1.2-7.5l-1.2-2.8l1.6-4.1l1.6-0.7 l7.5-1.1l1,0.3l0.2-1.1l-1.5-1.7l-0.7-3.5l-3.4-3.5l-1.8-4.5l1-2.7l-1.5-3.6l1.1-10.2l0.1,0.1l-0.1-1.1l-1.4-2.9l0.6-3.5l0.8-0.4 l0.2-3.8l1.6-1.8l0.1-4.8l1.3-2.4l0.3-5.1l1.2-3l2.1-3.3l2.2-1.7l1.8-2.3l-2.3-0.8l0.3-7.5l0,0l-5-4.2l-1.4-2.7l-3.1,1.3l-2.6-0.4 l-1.5,1.1l-2.5-0.8l-3.5-5.2l-1.8,0.6L1124.9,539.4L1124.9,539.4z"
                                id="map-map-country-CD"
                                data-id="CD"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1035.9,221.2l-1.7-3l-6.7,2l0.9,2.5l5.1,3.4L1035.9,221.2L1035.9,221.2z M1027.3,216.1l-2.6-0.9l-0.7-1.6l1.3-2 l-0.1-3l-3.6,1.6l-1.5,1.7l-4,0.4l-1.2,1.7l-0.7,1.6l0.4,6.1l2.1,3.4l3.6,0.8l3-0.9l-1.5-3l3.1-4.3l1.4,0.7L1027.3,216.1 L1027.3,216.1z"
                                id="map-map-country-DK"
                                data-id="DK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1217.8,499.2l-2.5-1.7l3.1-1.5l0.1-2.7l-1.4-1.9l-1.6,1.5l-2.4-0.5l-1.9,2.8l-1.8,3l0.5,1.7l0.2,2l3.1,0.1l1.3-0.5 l1.3,1.1L1217.8,499.2L1217.8,499.2z"
                                id="map-map-country-DJ"
                                data-id="DJ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M635.8,475.1l0.3-0.7l-0.1-1l-0.2-0.4l-0.8-0.3v0.2l-0.1,0.5l0.3,0.8l0.1,1.1L635.8,475.1z"
                                id="map-map-country-DM"
                                data-id="DM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M579.6,457.4v1.8l1.4,1l2.6-4.4l2-0.9l0.6,1.6l2.2-0.4l1.1-1.2l1.8,0.3l2.6-0.2l2.5,1.3l2.3-2.6l-2.5-2.3l-2.4-0.2 l0.3-1.9l-3,0.1l-0.8-2.2l-1.4,0.1l-3.1-1.6l-4.4-0.1l-0.8,1.1l0.2,3.5l-0.7,2.4l-1.5,1.1l1.2,1.9L579.6,457.4L579.6,457.4z"
                                id="map-map-country-DO"
                                data-id="DO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M553.1,573.1l-2.4-1.5l-2.8-2.1l-1.6,1l-4.7-0.9l-1.4-2.7l-1,0.1l-5.6-3.6l-3.9,2.5l-3.1,1.4l0.4,2.6l-2.2,4.1 l-1,3.9l-1.9,1l1,5.8l-1.1,1.8l3.4,2.7l2.1-2.9l1.3,2.8l-2.9,4.7l0.7,2.7l-1.5,1.5l0.2,2.3l2.3-0.5l2.3,0.7l2.5,3.2l3.1-2.6l0.9-4.3 l3.3-5.5l6.7-2.5l6-6.7l1.7-4.1L553.1,573.1z"
                                id="map-map-country-EC"
                                data-id="EC"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1129.7,374.8l-5.5-1.9l-5.3-1.7l-7.1,0.2l-1.8,3l1.1,2.7l-1.2,3.9l2,5.1l1.3,22.7l1,23.4h22.1h21.4h21.8l-1-1.3 l-6.8-5.7l-0.4-4.2l1-1.1l-5.3-7l-2-3.6l-2.3-3.5l-4.8-9.9l-3.9-6.4l-2.8-6.7l0.5-0.6l4.6,9.1l2.7,2.9l2,2l1.2-1.1l1.2-3.3l0.7-4.8 l1.3-2.5l-0.7-1.7l-3.9-9.2l0,0l-2.5,1.6l-4.2-0.4l-4.4-1.5l-1.1,2.1l-1.7-3.2l-3.9-0.8l-4.7,0.6l-2.1,1.8l-3.9,2L1129.7,374.8 L1129.7,374.8z"
                                id="map-map-country-EG"
                                data-id="EG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M487.2,487l0.6-2.5l-0.7-0.7l-1.1-0.5l-2.5,0.8l-0.1-0.9l-1.6-1l-1.1-1.3l-1.5-0.5l-1.4,0.4l0.2,0.7l-1.1,0.7 l-2.1,1.6l-0.2,1l1.4,1.3l3.1,0.4l2.2,1.3l1.9,0.6l3.3,0.1L487.2,487L487.2,487z"
                                id="map-map-country-SV"
                                data-id="SV"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1040.1,557.8l-9.2-0.2l-1.9,7.2l1,0.9l1.9-0.3h8.2V557.8L1040.1,557.8z"
                                id="map-map-country-GQ"
                                data-id="GQ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1198.1,474l-3.2-3.1l-1.8-5.9l-3.7-7.3l-2.6,3.6l-4,1l-1.6,2l-0.4,4.2l-1.9,9.4l0.7,2.5l6.5,1.3l1.5-4.7l3.5,2.9 l3.2-1.5l1.4,1.3l3.9,0.1l4.9,2.5l1.6,2.2l2.5,2.1l2.5,3.7l2,2.1l2.4,0.5l1.6-1.5l-2.8-1.9l-1.9-2.2l-3.2-3.7l-3.2-3.6L1198.1,474z"
                                id="map-map-country-ER"
                                data-id="ER"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1093.2,197.5l-5.5,0.9l-5.4,1.6l0.9,3.4l3.3,2.1l1.5-0.8l0.1,3.5l3.7-1l2.1,0.7l4.4,2.2h3.8l1.6-1.9l-2.5-5.5 l2.6-3.4l-0.9-1l0,0l-4.6,0.2L1093.2,197.5z"
                                id="map-map-country-EE"
                                data-id="EE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1187.6,477l-1.5,4.7l-6.5-1.3l-0.7,5.5l-2.1,6.2l-3.2,3.2l-2.3,4.8l-0.5,2.6l-2.6,1.8l-1.4,6.7v0.7l0.2,5l-0.8,2 l-3,0.1l-1.8,3.6l3.4,0.5l2.9,3.1l1,2.5l2.6,1.5l3.5,6.9l2.9,1.1v3.6l2,2.1h3.9l7.2,5.4h1.8l1.3-0.1l1.2,0.7l3.8,0.5l1.6-2.7 l5.1-2.6l2.3,2.1h3.8l1.5-2l3.6-0.1l4.9-4.5l7.4-0.3l15.4-19.1l-4.8,0.1l-18.5-7.6l-2.2-2.2l-2.1-3.1l-2.2-3.5l1.1-2.3l-1.3-1.1 l-1.3,0.5l-3.1-0.1l-0.2-2l-0.5-1.7l1.8-3l1.9-2.8l-2-2.1l-2.5-3.7l-2.5-2.1l-1.6-2.2l-4.9-2.5l-3.9-0.1l-1.4-1.3l-3.2,1.5 L1187.6,477L1187.6,477z"
                                id="map-map-country-ET"
                                data-id="ET"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M690.3,902.7l-0.1-0.3l-0.4-0.2l-0.2-0.1l0.1,0.2l0.1,0.3l0.1,0.2l0.2,0.1L690.3,902.7L690.3,902.7z M695.8,901.4 L695.8,901.4l-0.3-0.1l-0.1,0.2l0.2,0.3l0.4,0.1L695.8,901.4L695.8,901.4z M682.9,900l-0.1,0.2l-0.4,0.1l0.2,0.3l0.6,0.4h0.4 l0.1-0.3l-0.1-0.6h-0.3L682.9,900L682.9,900z M685.7,898l-0.9-0.3l-0.4-0.3h-0.3l0.4,0.4l0.1,0.2l0.1,0.2l0.6,0.3l0.6,0.3l0.4,0.3 l-0.1,0.1l-0.8,0.3h-0.3l-0.2,0.1l0.4,0.2l0.6-0.1l0.2-0.1h0.2l0.3,0.1v0.2l-0.1,0.2l-0.2,0.2l-0.4,0.3l-0.6,0.4h-0.8l-0.7,0.7 l0.9,0.5l0.7,0.3h0.9v-0.1l0.2-0.1h0.3l0.1-0.1l0.2-0.4v-0.6h0.2l0.3,0.1l0.7-0.1l0.3-0.1l0.6-0.9l0.4-0.8l0.2-0.4l0.3-0.2l0.1-0.2 l0.1-0.3l0.3-0.2v-0.3l-0.4-0.2l-0.3-0.2l-0.3,0.3l-0.2-0.1l-0.9,0.3h-0.4l-0.3-0.2l-0.4-0.1l-0.4,0.1l-0.5,0.5L685.7,898L685.7,898 z M686.4,897.6l0.1-0.3l-0.1-0.2l-0.5-0.2h-0.5l0.2,0.5l0.2,0.2H686.4z M692.3,896.9h-0.4l0.4,0.5l-0.8,0.8l0.2,0.6l0.3,0.4l0.1,0.2 l-0.1,0.1l-0.4,0.1l-0.3,0.1l-0.2,0.3l-0.9,0.9l0.2,0.2l-0.3,0.7l0.2,0.3l0.8,0.7l0.8,0.4v-0.7l0.4-0.1l0.4,0.2l0.4-0.2l-0.9-1h0.3 l2.5,0.5l-0.1-0.4l-0.1-0.2l-0.3-0.4l1.5-0.4l0.5-0.3l0.2-0.3l0.6-0.1l0.8-0.3l-0.1-0.1l0.1-0.3l-0.4-0.2l-0.5-0.1l0.1-0.3l0.5-0.1 l-0.8-0.7l-0.3-0.1l-1,0.1l-0.3,0.1v0.2l0.1,0.3l0.3,0.3l0.1,0.2l-0.2-0.1l-1.1-0.4l-0.2-0.1l-0.2-0.4l0.2-0.1l0.3,0.1l0.1-0.3 l-0.4-0.3l-0.4-0.1l-0.9,0.1L692.3,896.9L692.3,896.9z"
                                id="map-map-country-FK"
                                data-id="FK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M947,186.9v-0.3l-0.1-0.3v-0.2h-0.1l-0.5-0.1l-0.1-0.2h-0.1v0.2l0.1,0.4l0.5,0.4L947,186.9L947,186.9L947,186.9zM947.5,184.8v-0.1l-0.2-0.2l-0.5-0.2l-0.2-0.1l-0.2,0.1v0.2l0.1,0.1l0.4,0.1l0.4,0.3h0.1L947.5,184.8L947.5,184.8z M945.1,182.9l-0.2-0.1l-0.5,0.1h-0.3l0.1,0.3l0.6,0.2h0.3h0.3l0.2-0.1l-0.1-0.2L945.1,182.9L945.1,182.9z M947.6,182.4l-0.8-0.2l-0.6-0.3l-1,0.1l0.7,1.1l0.8,0.7l0.4,0.2v-0.1v-0.2l-0.4-0.5l-0.1-0.1V183l0.1-0.1h0.2l0.3,0.2h0.2L947.6,182.4L947.6,182.4z M948.6,182.2l-0.3-0.2l-0.4-0.4v0.5v0.3v0.1h0.1l0.3,0.1L948.6,182.2L948.6,182.2z"
                                id="map-map-country-FO"
                                data-id="FO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1976.7,674.4l-3.7,2l-1.9,0.3l-3.1,1.3l0.2,2.4l3.9-1.3l3.9-1.6L1976.7,674.4L1976.7,674.4z M1965.7,682.5l-1.6,1 l-2.3-0.8l-2.7,2.2l-0.2,2.8l2.9,0.8l3.6-0.9l1.8-3.3L1965.7,682.5L1965.7,682.5z"
                                id="map-map-country-FJ"
                                data-id="FJ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1093.4,144.4l0.8-3.8l-5.7-2.1l-5.8,1.8l-1.1,3.9l-3.4,2.4l-4.7-1.3l-5.3,0.3l-5.1-2.9l-2.1,1.4l5.9,2.7l7.2,3.7 l1.7,8.4l1.9,2.2l6.4,2.6l0.9,2.3l-2.6,1.2l-8.7,6.1l-3.3,3.6l-1.5,3.3l2.9,5.2l-0.1,5.7l4.7,1.9l3.1,3.1l7.1-1.2l7.5-2.1l8-0.5l0,0 l7.9-7.4l3.3-3.3l0.9-2.9l-7.3-3.9l0.9-3.7l-4.9-4.1l1.7-4.8l-6.4-6.3l2.8-4.1l-7.2-3.7L1093.4,144.4L1093.4,144.4z"
                                id="map-map-country-FI"
                                data-id="FI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1012.2,290.9l2.7,0.8l-0.5,2.7l-0.1,0.1l-0.3-0.2l-0.5,0.6l0,0.3l-3.6,2.6l-10-1.6l-7.4,2l-0.5,3.7l-6,0.8 l-1.3-0.7l0.7-0.3l0.2-0.4l-0.2-0.2l-0.7-0.2l-0.3-0.1l-0.4,0.3l-0.1,0.3l0.1,0.1v0.2l-3.7-1.8l-1.9,1.3l-9.4-2.8l-2-2.4l2.7-3.7 l1-12.3l-5.1-6.5l-3.6-3.1l-7.5-2.4l-0.4-4.6l6.4-1.3l8.2,1.6l-1.4-7l4.6,2.6l11.3-4.8l1.4-5.1l4.3-1.2l0.7,2.2l2.2,0.1l2.4,2.4 l3.4,2.9l2.5-0.4l4.4,2.8l0,0l1.1,0.5l1.4-0.1l2.4,1.6l7.1,1.2l-2.3,4.2l-0.5,4.5l-1.3,1l-2.3-0.6l0.2,1.6l-3.5,3.5v2.8l2.4-0.9 l1.8,2.7l0,0l-0.2,1.7l1.6,2.4l-1.7,1.8L1012.2,290.9z M1025.6,304.3l-1-6l-0.6,1.6l-2.7,1.1l-0.7,4.3l3,3.7L1025.6,304.3z"
                                id="map-map-country-FR"
                                data-id="FR"
                                class="svgMap-country"
                                fill="#ed81d4"
                              ></path>
                              <path
                                d="M681.4,556.2l1.8-4.7l3.5-5.8l-0.9-2.6l-5.8-5.4l-4.1-1.5l-1.9-0.7l-3.1,5.5l0.4,4.4l2.1,3.7l-1,2.7l-0.6,2.9 l-1.4,2.8l2.4,1.3l1.8-1.8l1.2,0.3l0.8,1.8l2.7-0.5L681.4,556.2z"
                                id="map-map-country-GF"
                                data-id="GF"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M213.2,704.9l-0.1-0.3l-0.2-0.3l-0.1,0.1l0.1,0.1l0.2,0.3v0.2L213.2,704.9z M222.5,690.2l-0.2-0.2l-0.4-0.2 l-0.2-0.1l-0.2-0.1l-0.1,0.1l0.1,0.1h0.1l0.3,0.2l0.3,0.1L222.5,690.2L222.5,690.2L222.5,690.2L222.5,690.2z M198,689.1l-0.6-0.3 l0.1,0.2l0.4,0.2l0.2,0.1L198,689.1L198,689.1z M218.5,688.9l-0.4-0.5h-0.3L218.5,688.9L218.5,688.9z M196.9,687.9l-0.4-0.4 l-0.2-0.3l-0.3-0.1l0.1,0.1l0.4,0.4l0.3,0.4l0.2,0.1L196.9,687.9z M196.6,685.8l-0.1-0.1l0,0v-0.3l0.2-0.3l0.6-0.4v-0.1l0,0 l-0.2,0.1l-0.4,0.2l-0.2,0.2l-0.1,0.2l-0.1,0.3l0.1,0.2l0.1,0.1h0.2L196.6,685.8L196.6,685.8z M149.2,684.7l-0.2-0.6l-0.3-0.5 l-0.8-0.1l-0.5,0.2l-0.1,0.2l0.1,0.4l0.5,0.7l0.5,0.1l0.8-0.1l0.4,0.6l0.2,0.1l0.4,0.1l0.1-0.3l-0.2-0.5L149.2,684.7L149.2,684.7z M146.3,683.8l0.1-0.4l-0.2-0.1h-0.5v0.2l0.1,0.2l0.1,0.1l0.3,0.2L146.3,683.8L146.3,683.8z M136.6,679.5h0.2l-0.4-0.6l-0.3-0.2v0.1 v0.7l0.3,0.1L136.6,679.5z M180.5,677.9h-0.2H180h-0.1l0.5,0.1l0.4,0.2L180.5,677.9L180.5,677.9z M179.8,678l-0.3-0.1l-0.3-0.2h-0.3 l0.7,0.3H179.8L179.8,678z M136,678.1l0.1-0.2l-0.1-0.1l-0.4-0.2l0.1,0.3v0.2H136L136,678.1L136,678.1z M168.8,676.1l-0.3-0.4 l-0.2-0.3l-0.2-0.4l-0.4-0.5l0.1,0.3l0.1,0.2l0.2,0.2l0.2,0.4l0.1,0.2l0.3,0.4h0.1L168.8,676.1L168.8,676.1z M185,674.6l0.1-0.5 h-0.2L185,674.6L185,674.6L185,674.6z M170.6,673l-0.6-0.6h-0.1l0.1,0.2l0.5,0.5l0.1,0.2V673L170.6,673z M201.4,639.1l0.1-0.2v-0.2 l-0.1-0.1l-0.3-0.1l0.1,0.7L201.4,639.1L201.4,639.1z M198.7,635.4l-0.1-0.2h-0.2l-0.1,0.1v0.5L198.7,635.4L198.7,635.4z M198.8,633.8l-0.8,0.5l0.2,0.4l0.4,0.1l0.2-0.2l0.8-0.1l0.3-0.4l-0.3,0.1L198.8,633.8L198.8,633.8z M192.7,632.1l0.2-0.5l-0.2-0.1 l-0.4,0.2v0.2l0.3,0.4L192.7,632.1L192.7,632.1z M195.3,629l0.3-0.1v-0.1l-0.2-0.2l-0.3-0.1l-0.1,0.1l-0.1,0.2l0.1,0.3L195.3,629 L195.3,629z M192.4,628.9l0.1-0.3v-0.2l-0.1-0.2l-0.9-0.2l-0.1,0.1v0.4l0.2,0.5h0.3L192.4,628.9z"
                                id="map-map-country-PF"
                                data-id="PF"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1050.2,557.7l-0.7-0.3l-3.4,0.8l-3.4-0.8l-2.6,0.4v7.6h-8.2l-1.9,0.3l-1.1,4.8l-1.3,4.6l-1.3,2l-0.2,2.1l3.4,6.6 l3.7,5.3l5.8,6.4l4.3-3.5l-2.1-4.2l1.9-1.6l3.8-0.8l0.5-2.8l3,3l4.9,0.3l1.7-3l0.8-4.3l-0.6-4.9l-2.7-3.8l2.4-7.4l-1.4-1.2l-4.2,0.5 l-1.5-3.3L1050.2,557.7L1050.2,557.7z"
                                id="map-map-country-GA"
                                data-id="GA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M882.8,488.5l5,0.1l1.4-0.9h1l2.1-1.5l2.4,1.4l2.4,0.1l2.4-1.5l-1.1-1.8l-1.8,1.1l-1.8-0.1l-2.1-1.5l-1.8,0.1 l-1.3,1.5l-6.1,0.2L882.8,488.5L882.8,488.5z"
                                id="map-map-country-GM"
                                data-id="GM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1200,300.2l-7.5-2.9l-7.7-1l-4.5-1.1l-0.5,0.7l2.2,1.9l3,0.7l3.4,2.3l2.1,4.2l-0.3,2.7l5.4-0.3l5.6,3l6.9-1l1.1-1 l4.2,1.8l2.8,0.4l0.6-0.7l-3.2-3.4l1.1-0.9l-3.5-1.4l-2.1-2.5l-5.1-1.3l-2.9,1L1200,300.2L1200,300.2z"
                                id="map-map-country-GE"
                                data-id="GE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1043.6,232.3l-2.4-1.9l-5.5-2.4l-2.5,1.7l-4.7,1.1l-0.1-2.1l-4.9-1.4l-0.2-2.3l-3,0.9l-3.6-0.8l0.4,3.4l1.2,2.2 l-3,3l-1-1.3l-3.9,0.3l-0.9,1.3l1,2l-1,5.6l-1.1,2.3h-2.9l1.1,6.4l-0.4,4.2l1,1.4l-0.2,2.7l2.4,1.6l7.1,1.2l-2.3,4.2l-0.5,4.5h4.2 l1-1.4l5.4,1.9l1.5-0.3l2.6,1.7l0.6-1.6l4.4,0.3l3.4-1.2l2.4,0.2l1.7,1.3l0.4-1.1l-1-4l1.7-0.8l1.5-2.9l-2.9-2.6l-2.6-1.5l-0.7-2.6 l-1-1.9l3.4-1.3l1.7-1.5l3.4-1.2l1.1-1.2l1.4,0.7l2.1-0.6l-2.3-3.9l0.1-2.1l-1.4-3.3l-2-2.2l1.2-1.6L1043.6,232.3L1043.6,232.3z"
                                id="map-map-country-DE"
                                data-id="DE"
                                class="svgMap-country"
                                fill="#e870cc"
                              ></path>
                              <path
                                d="M976.8,502.1l-2.6-0.5l-1.8,1l-2.4-0.5l-9.7,0.3l-0.2,3.6l0.8,4.8l1.4,9.1l-2.3,5.3l-1.5,7.2l2.4,5.5l-0.2,2.5 l5,1.8l5-1.9l3.2-2.1l8.7-3.8l-1.2-2.2l-1.5-4l-0.4-3.2l1.2-5.7l-1.4-2.3l-0.6-5.1l0.1-4.6l-2.4-3.3L976.8,502.1L976.8,502.1z"
                                id="map-map-country-GH"
                                data-id="GH"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1101.9,344.9l-0.8,2.8l6.6,1.2v1.1l7.6-0.6l0.5-1.9l-2.8,0.8v-1.1l-3.9-0.5l-4.1,0.4L1101.9,344.9L1101.9,344.9z M1113.4,307.5l-2.7-1.6l0.3,3l-4.6,0.6l-3.9-2.1l-3.9,1.7l-3.8-0.2l-1,0.2l-0.7,1.1l-2.8-0.1l-1.9,1.3l-3.3,0.6v1.6l-1.6,0.9 l-0.1,2.1l-2.1,3l0.5,1.9l2.9,3.6l2.3,3l1.3,4.3l2.3,5.1l4.6,2.9l3.4-0.1l-2.4-5.7l3.3-0.7l-1.9-3.3l5,1.7l-0.4-3.7l-2.7-1.8l-3.2-3 l1.8-1.4l-2.8-3l-1.6-3.8l0.9-1.3l3,3.2h2.9l2.5-1l-3.9-3.6l6.1-1.6l2.7,0.6l3.2,0.2l1.1-0.7L1113.4,307.5L1113.4,307.5z"
                                id="map-map-country-GR"
                                data-id="GR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M887.4,76.3l-26-0.4l-11.8,0.3l-5,1.3l-11.5-0.1l-12.7,2.1l-1.6,1.7l6.7,2.1l-6.2-1.3l-4.5-0.3l-7-1.4l-10.6,2.1 l-2.7-1.2h-10.4l-10.9,0.6l-8.9,1l-0.2,1.8l-5.3,0.5L744.2,88l-4.6,1.7l8.1,1.5l-2.8,1.6L730,95l-15.5,2.2l-2.2,1.7l6.4,2l14.5,1.2 l-7.5,0.2l-10.9,1.5l3.8,3.1l3,1.5l9.4-0.3l10.1-0.2l7.6,0.3l8,2.9l-1.4,2.1l3.6,1.9l1.4,5.3l1,3.6l1.4,1.9l-7,4.8l2.6,1.3l4.4-0.8 l2.6,1.8l5.3,3.4l-7.5-1.4h-3.8l-3,2.8l-1.5,3.6l4.2,1.8l4-0.8l2.6-0.8l5.5-1.9l-2.8,4.2l-2.6,2.3l-7.1,2l-7,6.3l2,2l-3.4,4l3.7,5.2 l-1.5,5l0.7,3.7l4.8,7.1l0.8,5.6l3.1,3.2h8.9l5,4.7l6.5-0.3l4.1-5.7l3.5-4.8l-0.3-4.4l8.6-4.6l3.3-3.7l1.4-3.9l4.7-3.5l6.5-1.3 l6.1-1.4l3-0.2l10.2-3.9l7.4-5.7l4.8-2.1l4.6-0.1l12.5-1.8l12.1-4.3l11.9-4.6l-5.5-0.3l-10.6-0.2l5.3-2.8l-0.5-3.6l4.2,3l2.7,2.1 l7.3-1l-0.6-4.3l-4.5-3.1l-5-1.3l2.4-1.4l7.2,2.1l0.5-2.3l-4.1-3.4h5.4l5.6-0.8l1.7-1.8l-4-2.1l8.6-0.3l-4-4.3l4.1-0.5l0.1-4.2 l-6.2-2.5l6.4-1.6l5.8-0.1l-3.6-3.2l1.1-5.1l3.6-2.9l4.9-3.2l-8-0.2l11.3-0.7l2.2-1l14.6-2.9l-1.6-1.7l-10-0.8l-16.9,1.5l-9.2,1.5 l4.5-2.3l-2.3-1.4l-7,1.2l-9.7-1.4l-12.1,0.5l-1.4-0.7l18.3-0.4l12.9-0.2l6.6-1.4L887.4,76.3L887.4,76.3z"
                                id="map-map-country-GL"
                                data-id="GL"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M632.1,495.7l0.5-0.2l0.2-1.1l-0.3-0.1l-0.3,0.3l-0.3,0.5v0.4l-0.2,0.3L632.1,495.7L632.1,495.7z"
                                id="map-map-country-GD"
                                data-id="GD"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M636.4,471.1l0.2-0.2v-0.3l-0.2-0.3l-0.2,0.1l-0.2,0.3v0.3l0.1,0.1H636.4L636.4,471.1z M634.5,470.3l0.2-0.2v-1.2 l0.1-0.3l-0.2-0.1l-0.2-0.2l-0.6-0.2l-0.1,0.1l-0.2,0.3l0.1,1.5l0.2,0.5l0.2,0.1L634.5,470.3L634.5,470.3z M636.1,468.9l0.8-0.2 l-0.9-0.6l-0.2-0.4v-0.3l-0.4-0.3l-0.2,0.2l-0.1,0.3l0.1,0.5l-0.3,0.4l0.1,0.4l0.4,0.1L636.1,468.9L636.1,468.9z"
                                id="map-map-country-GP"
                                data-id="GP"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M482.8,458.9l-5.1-0.1h-5.2l-0.4,3.6h-2.6l1.8,2.1l1.9,1.5l0.5,1.4l0.8,0.4l-0.4,2.1H467l-3.3,5.2l0.7,1.2l-0.8,1.5 l-0.4,1.9l2.7,2.6l2.5,1.3l3.4,0.1l2.8,1.1l0.2-1l2.1-1.6l1.1-0.7l-0.2-0.7l1.4-0.4l1.3-1.6l-0.3-1.3l0.5-1.2l2.8-1.8l2.8-2.4 l-1.5-0.8l-0.6,0.9l-1.7-1.1h-1.6l1.2-7.2L482.8,458.9L482.8,458.9z"
                                id="map-map-country-GT"
                                data-id="GT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M912.4,493l-0.8,0.4l-3-0.5l-0.4,0.7l-1.3,0.1l-4-1.5l-2.7-0.1l-0.1,2.1l-0.6,0.7l0.4,2.1l-0.8,0.9h-1.3l-1.4,1 l-1.7-0.1l-2.6,3.1l1.6,1.1l0.8,1.4l0.7,2.8l1.3,1.2l1.5,0.9l2.1,2.5l2.4,3.7l3-2.8l0.7-1.7l1-1.4l1.5-0.2l1.3-1.2h4.5l1.5,2.3 l1.2,2.7L917,515l0.9,1.7v2.3l1.5-0.3l1.2-0.2l1.5-0.7l2.3,3.9l-0.4,2.6l1.1,1.3l1.6,0.1l1.1-2.6l1.6,0.2h0.9l0.3-2.8l-0.4-1.2 l0.6-0.9l2-0.8l-1.3-5.1l-1.3-2.6l0.5-2.2l1.1-0.5l-1.7-1.8l0.3-1.9l-0.7-0.7l-1.2,0.6l0.2-2.1l1.2-1.6l-2.3-2.7l-0.6-1.7l-1.3-1.4 l-1.1-0.2l-1.3,0.9l-1.8,0.8l-1.6,1.4l-2.4-0.5l-1.5-1.6l-0.9-0.2l-1.5,0.8h-0.9L912.4,493L912.4,493z"
                                id="map-map-country-GN"
                                data-id="GN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M900.2,492.1l-10.3-0.3l-1.5,0.7l-1.8-0.2l-3,1.1l0.3,1.3l1.7,1.4v0.9l1.2,1.8l2.4,0.5l2.9,2.6l2.6-3.1l1.7,0.1 l1.4-1h1.3l0.8-0.9l-0.4-2.1l0.6-0.7L900.2,492.1L900.2,492.1z"
                                id="map-map-country-GW"
                                data-id="GW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M656.1,534.2l-2.1-2.3l-2.9-3.1l-2.1-0.1l-0.1-3.3l-3.3-4.1l-3.6-2.4l-4.6,3.8l-0.6,2.3l1.9,2.3l-1.5,1.2l-3.4,1.1 v2.9l-1.6,1.8l3.7,4.8l2.9-0.3l1.3,1.5l-0.8,2.8l1.9,0.9l1.2,3l-1.6,2.2l-1,5.4l1.4,3.3l0.3,2.9l3.5,3l2.7,0.3l0.7-1.3l1.7-0.2 l2.6-1.1l1.8-1.7l3.1,0.5l1.4-0.2l-3.3-5.6L655,551l-1.8-0.1l-2.4-4.6l1.1-3.3l-0.3-1.5l3.5-1.6L656.1,534.2L656.1,534.2z"
                                id="map-map-country-GY"
                                data-id="GY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M580.6,446.7l-4.6-1l-3.4-0.2l-1.4,1.7l3.4,1l-0.3,2.4l2.2,2.8l-2.1,1.4l-4.2-0.5l-5-0.9l-0.7,2.1l2.8,1.9l2.7-1.1 l3.3,0.4l2.7-0.4l3.6,1.1l0.2-1.8l-1.2-1.9l1.5-1.1l0.7-2.4L580.6,446.7z"
                                id="map-map-country-HT"
                                data-id="HT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M514.1,476.8l-1.3-1.8l-1.9-1l-1.5-1.4l-1.6-1.2l-0.8-0.1l-2.5-0.9l-1.1,0.5l-1.5,0.2l-1.3-0.4l-1.7-0.4l-0.8,0.7 l-1.8,0.7l-2.6,0.2l-2.5-0.6l-0.9,0.4l-0.5-0.6l-1.6,0.1l-1.3,1.1l-0.6-0.2l-2.8,2.4l-2.8,1.8l-0.5,1.2l0.3,1.3l-1.3,1.6l1.5,0.5 l1.1,1.3l1.6,1l0.1,0.9l2.5-0.8l1.1,0.5l0.7,0.7l-0.6,2.5l1.7,0.6l0.7,2l1.8-0.3l0.8-1.5h0.8l0.2-3.1l1.3-0.2h1.2l1.4-1.7l1.5,1.3 l0.6-0.8l1.1-0.7l2.1-1.8l0.3-1.3l0.5,0.1l0.8-1.5l0.6-0.2l0.9,0.9l1.1,0.3l1.3-0.8h1.4l2-0.8l0.9-0.9L514.1,476.8L514.1,476.8z"
                                id="map-map-country-HN"
                                data-id="HN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1604.9,430.9v-0.2v-0.2l-0.4-0.2h-0.3l0.1,0.2l0.4,0.5L1604.9,430.9L1604.9,430.9z M1603.6,430.9l-0.1-0.5l0.2-0.3 l-0.9,0.3l-0.1,0.3v0.1l0.2,0.1H1603.6L1603.6,430.9z M1605.2,429.7l-0.1-0.3l-0.2-0.1l-0.1-0.3l-0.1-0.2l0,0l-0.3-0.1l-0.2-0.1 h-0.4l-0.1,0.1h-0.2l-0.2,0.2l0,0v0.2l-0.5,0.4v0.2l0.3,0.2l0.5-0.1l0.6,0.2l0.8,0.3v-0.2v-0.3L1605.2,429.7L1605.2,429.7z"
                                id="map-map-country-HK"
                                data-id="HK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1079.1,263.8l-1.6,0.4l-1,1.5l-2.2,0.7l-0.6-0.4l-2.3,1l-1.9,0.2l-0.3,1.2l-4.1,0.8l-1.9-0.7l-2.6-1.6l-0.2,2.6 h-2.8l1.1,1.3l-1.3,4l0.8,0.1l1.2,2.1l1.6,0.8l4,2.6l4.2,1.2l1.8-0.9l0,0l3.7-1.6l3.2,0.2l3.8-1.1l2.6-4.3l1.9-4.2l2.9-1.3l-0.6-1.6 l-2.9-1.7l-1,0.6L1079.1,263.8L1079.1,263.8z"
                                id="map-map-country-HU"
                                data-id="HU"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M915.7,158.6l-6.9-0.4l-7.3,2.9l-5.1-1.5l-6.9,3l-5.9-3.8l-6.5,0.8l-3.6,3.7l8.7,1.3l-0.1,1.6l-7.8,1.1l8.8,2.7 l-4.6,2.5l11.7,1.8l5.6,0.8l3.9-1l12.9-3.9l6.1-4.2l-4.4-3.8L915.7,158.6L915.7,158.6z"
                                id="map-map-country-IS"
                                data-id="IS"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1414.1,380.1l-8.5-4.4l-6.2-4l-3.2-7l4.1,0.9l-0.6-3.3l-3-3.3l-0.8-5.2l-7.6-7.5l-3.7,5.4l-5.7,1l-8.5-1.6 l-1.9,2.8l3.2,5.6l2.9,4.3l5,3.1l-3.7,3.7l1,4.5l-3.9,6.3l-2.1,6.5l-4.5,6.7l-6.4-0.5l-4.9,6.6l4,2.9l1.3,4.9l3.5,3.2l1.8,5.5h-12 l-3.2,4.2l7.1,5.4l1.9,2.5l-2.4,2.3l8,7.7l4,0.8l7.6-3.8l1.7,5.9l0.8,7.8l2.5,8.1l3.6,12.3l5.8,8.8l1.3,3.9l2,8l3.4,6.1l2.2,3 l2.5,6.4l3.1,8.9l5.5,6l2.2-1.8l1.7-4.4l5-1.8l-1.8-2.1l2.2-4.8l2.9-0.3l-0.7-10.8l1.9-6.1l-0.7-5.3l-1.9-8.2l1.2-4.9l2.5-0.3 l4.8-2.3l2.6-1.6l-0.3-2.9l5-4.2l3.7-4l5.3-7.5l7.4-4.2l2.4-3.8l-0.9-4.8l6.6-1.3l3.7,0.1l0.5-2.4l-1.6-5.2l-2.6-4.8l0.4-3.8 l-3.7-1.7l0.8-2.3l3.1-2.4l-4.6-3.4l1.2-4.3l4.8,2.7l2.7,0.4l1.2,4.4l5.4,0.9l5-0.1l3.4,1.1l-1.6,5.3l-2.4,0.4l-1.1,3.6l3.5,3.3 l0.2-4l1.5-0.1l4.5,10.1l2.4-1.5l-0.9-2.7l0.9-2.1l-0.9-6.6l4.6,1.4l1.5-5.2l-0.3-3.1l2.1-5.4l-0.9-3.6l6.1-4.4l4.1,1.1l-1.3-3.9 l1.6-1.2l-0.9-2.4l-6.1-0.9l1.2-2.7l-3.5-3.9l-3.2,2.6l-4.9-1.5l-5.3,4l-3.9,4.8l-4.2,0.8l2.7,2l0.4,3.9l-4.4,0.2l-4.7-0.4l-3.2,1 l-5.5-2.5l-0.3-1.2l-1.5-5.1l-3,1.4l0.1,2.7l1.5,4.1l-0.1,2.5l-4.6,0.1l-6.8-1.5l-4.3-0.6l-3.8-3.2l-7.6-0.9l-7.7-3.5l-5.8-3.1 l-5.7-2.5l0.9-5.9L1414.1,380.1L1414.1,380.1z"
                                id="map-map-country-IN"
                                data-id="IN"
                                class="svgMap-country"
                                fill="#e35fc5"
                              ></path>
                              <path
                                d="M1651.9,637.3l0.5-1.7l-1.8-1.9l-2.8-2l-5.3,1.3l7,4.4L1651.9,637.3L1651.9,637.3z M1672.8,636.7l4-4.8l0.1-1.9 l-0.5-1.3l-5.7,2.6l-2.8,3.9l-0.7,2.1l0.6,0.8L1672.8,636.7L1672.8,636.7z M1637.2,623.7l-1.6,2.2l-3.1,0.1l-2.2,3.6l3,0.1l3.9-0.9 l6.6-1.2l-1.2-2.8l-3.5,0.6L1637.2,623.7L1637.2,623.7z M1665.3,623.7l-5.2,2.3l-3.8,0.5l-3.4-1.9l-4.5,1.3l-0.2,2.3l7.4,0.8 l8.6-1.8L1665.3,623.7L1665.3,623.7z M1585.8,615.3l-0.7-2.3l-2.3-0.5l-4.4-2.4l-6.8-0.4l-4.1,6.1l5.1,0.4l0.8,2.8l10,2.6l2.4-0.8 l4.1,0.6l6.3,2.4l5.2,1.2l5.8,0.5l5.1-0.2l5.9,2.5l6.6-2.4l-6.6-3.8l-8.3-1.1l-1.8-4.1l-10.3-3.1l-1.3,2.6L1585.8,615.3 L1585.8,615.3z M1732.4,611.7l0.2-3l-1.2-1.9l-1.3,2.2l-1.2,2.2l0.3,4.8L1732.4,611.7z M1691.4,594.2l-1.4-2.1l-5.7,0.3l1,2.7 l3.9,1.2L1691.4,594.2L1691.4,594.2z M1709.5,591.8l-6.1-1.8l-6.9,0.3l-1.5,3.5l3.9,0.2l3.2-0.4l4.6,0.5l4.7,2.6L1709.5,591.8 L1709.5,591.8z M1730.5,579.5l-0.8-2.4l-9-2.6l-2.9,2.1l-7.6,1.5l2.3,3.2l5,1.2l2.1,3.7l8.3,0.1l0.4,1.6l-4-0.1l-6.2,2.3l4.2,3.1 l-0.1,2.8l1.2,2.3l2.1-0.5l1.8-3.1l8.2,5.9l4.6,0.5l10.6,5.4l2.3,5.3l1,6.9l-3.7,1.8l-2.8,5.2l7.1-0.2l1.6-1.8l5.5,1.3l4.6,5.2 l1.5-20.8l1-20.7l-6-1.2l-4.1-2.3l-4.7-2.2h-5l-6.6,3.8l-4.9,6.8l-5.7-3.8L1730.5,579.5z M1680.5,563.1l-1-1.4l-5.5,4.6l-6.5,0.3 l-7.1-0.9l-4.4-1.9l-4.7,4.8l-1.2,2.6l-2.9,9.6l-0.9,5l-2.4,4.2l1.6,4.3l2.3,0.1l0.6,6.1l-1.9,5.9l2.3,1.9l3.6-1l0.3-9.1l-0.2-7.4 l3.8-1.9l-0.7,6.2l3.9,3.7l-0.8,2.5l1.3,1.7l5.6-2.4l-3,5.2l2.1,2.2l3.1-1.9l0.3-4.1l-4.7-7.4l1.1-2.2l-5.1-8.1l5-2.5l2.6-3.7 l2.4,0.9l0.5-2.9l-10.5,2.1l-3.1,2.9l-5-5.6l0.9-4.8l4.9-1l9.3-0.3l5.4,1.3l4.3-1.3L1680.5,563.1L1680.5,563.1z M1699.9,565 l-0.6-2.6l-3.3-0.6l-0.5-3.5l-1.8,2.3l-1,5.1l1.7,8.2l2.2,4l1.6-0.8l-2.3-3.3l0.9-3.9l2.9,0.6L1699.9,565L1699.9,565z M1639,560.5 l0.9-2.9l-4.3-6l3-5.8l-5-1h-6.4l-1.7,7.2l-2,2.2l-2.7,8.9l-4.5,1.3l-5.4-1.8l-2.7,0.6l-3.2,3.2l-3.6-0.4l-3.6,1.2l-3.9-3.5l-1-4.3 l-3.3,4.2l-0.6,5.9l0.8,5.6l2.6,5.4l2.8,1.8l0.7,8.5l4.6,0.8l3.6-0.4l2,3.1l6.7-2.3l2.8,2l4,0.4l2,3.9l6.5-2.9l0.8,2.3l2.5-9.7 l0.3-6.4l5.5-4.3l-0.2-5.8l1.8-4.3l6.7-0.8L1639,560.5L1639,560.5z M1570.3,609.4l0.7-9.8l1.7-8l-2.6-4l-4.1-0.5l-1.9-3.6l-0.9-4.4 l-2-0.2l-3.2-2.2l2.3-5.2l-4.3-2.9l-3.3-5.3l-4.8-4.4l-5.7-0.1l-5.5-6.8l-3.2-2.7l-4.5-4.3l-5.2-6.2l-8.8-1.2l-3.6-0.3l0.6,3.2 l6.1,7l4.4,3.6l3.1,5.5l5.1,4l2.2,4.9l1.7,5.5l4.9,5.3l4.1,8.9l2.7,4.8l4.1,5.2l2.2,3.8l7,5.2l4.5,5.3L1570.3,609.4L1570.3,609.4z"
                                id="map-map-country-ID"
                                data-id="ID"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1213.5,324.4l-3.2-2.9l-1.2-2.4l-3.3,1.8l2.9,7.3l-0.7,2l3.7,5.2l0,0l4.7,7.8l3.7,1.9l1,3.8l-2.3,2.2l-0.5,5 l4.6,6.1l7,3.4l3.5,4.9l-0.2,4.6h1.7l0.5,3.3l3.4,3.4l1.7-2.5l3.7,2.1l2.8-1l5.1,8.4l4.3,6.1l5.5,1.8l6.1,4.9l6.9,2.1l5.1-3.1l4-1.1 l2.8,1.1l3.2,7.8l6.3,0.8l6.1,1.5l10.5,1.9l1.2-7.4l7.4-3.3l-0.9-2.9l-2.7-1l-1-5.7l-5.6-2.7l-2.8-3.9l-3.2-3.3l3.9-5.8l-1.1-4 l-4.3-1.1l-1.1-4l-2.7-5.1l1.6-3.5l-2.5-0.9l0.5-4.7l0.5-8l-1.6-5.5l-3.9-0.2l-7.3-5.7l-4.3-0.7l-6.5-3.3l-3.8-0.6l-2.1,1.2 l-3.5-0.2l-3,3.7l-4.4,1.2l-0.2,1.6l-7.9,1.7l-7.6-1.1l-4.3-3.3l-5.2-1.3l-2.5-4.8l-1.3,0.3l-3.8-3.4l1.2-3.1l-1.9-1.9l-1.9,0.5 l-5.3,4.7l-1.8,0.2L1213.5,324.4L1213.5,324.4z"
                                id="map-map-country-IR"
                                data-id="IR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1207.3,334.9l-6.2-0.9l-2.1,1l-2.1,4.1l-2.7,1.6l1.2,4.7l-0.9,7.8l-11,6.7l3.1,7.7l6.7,1.7l8.5,4.5l16.7,12.7 l10.2,0.5l3.2-6.1l3.7,0.5l3.2,0.4l-3.4-3.4l-0.5-3.3h-1.7l0.2-4.6l-3.5-4.9l-7-3.4l-4.6-6.1l0.5-5l2.3-2.2l-1-3.8l-3.7-1.9 l-4.7-7.8l0,0l-2.3,1.1L1207.3,334.9L1207.3,334.9z"
                                id="map-map-country-IQ"
                                data-id="IQ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M947.3,231.7l-3.5-1.3l-2.9,0.1l1.1-3.2l-0.8-3.2l-3.7,2.8l-6.7,4.7l2.1,6.1l-4.2,6.4l6.7,0.9l8.7-3.6l3.9-5.4 L947.3,231.7L947.3,231.7z"
                                id="map-map-country-IE"
                                data-id="IE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1167.8,360.5l-1.4,0.1l-0.4,1.1h-1.8l-0.1,0.1l-0.6,1.6l-0.6,4.8l-1.1,2.9l0.4,0.4l-1.4,2.1l0,0l3.9,9.2l0.7,1.7 l1.7-10.2l-0.4-2.4l-2.4,0.8l0.1-1.7l1.2-0.8l-1.4-0.7l0.7-4.3l2,0.9l0.7-2h-0.1l0.6-1L1167.8,360.5L1167.8,360.5z"
                                id="map-map-country-IL"
                                data-id="IL"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1057.8,328.6l-1.6,5.1l0.9,2l-0.9,3.3l-4.2-2.4l-2.7-0.7l-7.5-3.3l0.6-3.4l6.2,0.6l5.2-0.7L1057.8,328.6z M1072.3,316.2l-0.8,2.3l-3.1-3l-4.5-1l-1.9,4.1l3.9,2.3l-0.4,3.3l-2.1,0.4l-2.5,5.6l-2.1,0.5l-0.1-2l0.8-3.5l1.1-1.3l-2.3-3.7 l-1.8-3.2l-2.2-0.8l-1.7-2.7l-3.4-1.2l-2.3-2.5l-3.9-0.4l-4.2-2.8l-4.9-4l-3.6-3.6l-1.9-6l-2.6-0.7l-4.2-2.1l-2.3,0.9l-2.8,2.8 l-2.1,0.5l0.5-2.7l-2.7-0.8l-1.5-4.8l1.7-1.8l-1.6-2.4l0.2-1.7l2.2,1.3l2.4-0.3l2.7-2.1l0.9,1l2.4-0.2l0.9-2.5l3.8,0.8l2.1-1.1 l0.3-2.5l3.1,0.9l0.5-1.2l4.8-1.1l1.3,2.2l7.2,1.6l-0.3,3l1.4,2.7l-4.1-0.9l-3.9,2.2l0.4,3l-0.5,1.8l1.9,3.1l4.9,3.1l2.9,5.1l6,5 l4-0.1l1.4,1.4l-1.4,1.2l4.8,2.3l3.9,1.9l4.7,3.2L1072.3,316.2z M1040.2,305.3l-0.1-0.6l-0.6,0.1l-0.2,0.5H1040.2z M1040.3,292.4 l-0.9,0.3l0.2,0.9l0.7-0.1L1040.3,292.4z M1021.6,311.6l-2.8-0.3l1.3,3.6l0.4,7.6l2.1,1.7l2-2.1l2.4,0.4l0.4-8.4l-3.3-4.4 L1021.6,311.6z"
                                id="map-map-country-IT"
                                data-id="IT"
                                class="svgMap-country"
                                fill="#f7a2e3"
                              ></path>
                              <path
                                d="M946.5,506.2l-2.3,0.9l-1.3,0.8l-0.9-2.7l-1.6,0.7l-1-0.1l-1,1.9l-4.3-0.1l-1.6-1l-0.7,0.6l-1.1,0.5l-0.5,2.2 l1.3,2.6l1.3,5.1l-2,0.8l-0.6,0.9l0.4,1.2l-0.3,2.8h-0.9l-0.3,1.8l0.6,3.1l-1.2,2.8l1.6,1.8l1.8,0.4l2.3,2.7l0.2,2.5l-0.5,0.8 l-0.5,5.2l1.1,0.2l5.6-2.4l3.9-1.8l6.6-1.1l3.6-0.1l3.9,1.3l2.6-0.1l0.2-2.5l-2.4-5.5l1.5-7.2l2.3-5.3l-1.4-9.1l-3.8-1.6l-2.7,0.2 l-1.9,1.6l-2.5-1.3l-1-2.1L946.5,506.2L946.5,506.2z"
                                id="map-map-country-CI"
                                data-id="CI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M550.7,458.5l3.9-0.1l-0.8-1.8l-2.7-1.5l-3.7-0.6l-1.2-0.2l-2.4,0.4l-0.8,1.5l2.9,2.3l3,1L550.7,458.5L550.7,458.5z "
                                id="map-map-country-JM"
                                data-id="JM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1692.5,354.9l-4.5-1.3l-1.1,2.7l-3.3-0.8l-1.3,3.8l1.2,3l4.2,1.8l-0.1-3.7l2.1-1.5l3.1,2.1l1.3-3.9L1692.5,354.9 L1692.5,354.9z M1716.9,335.6l-3.6-6.7l1.3-6.4l-2.8-5.2l-8.1-8.7l-4.8,1.2l0.2,3.9l5.1,7.1l1,7.9l-1.7,2.5l-4.5,6.5l-5-3.1v11.5 l-6.3-1.3l-9.6,1.9l-1.9,4.4l-3.9,3.3l-1.1,4l-4.3,2l4,4.3l4.1,1.9l0.9,5.7l3.5,2.5l2.5-2.7l-0.8-10.8l-7.3-4.7l6.1-0.1l5-3l8.6-1.4 l2.4,4.8l4.6,2.4l4.4-7.3l9.1-0.4l5.4-3l0.6-4.6l-2.5-3.2L1716.9,335.6L1716.9,335.6z M1705.1,291.4l-5.3-2.1l-10.4-6.4l1.9,4.8 l4.3,8.5l-5.2,0.4l0.6,4.7l4.6,6.1h5.7l-1.6-6.8l10.8,4.2l0.4-6.1l6.4-1.7l-6-6.9l-1.7,2.6L1705.1,291.4L1705.1,291.4z"
                                id="map-map-country-JP"
                                data-id="JP"
                                class="svgMap-country"
                                fill="#f7a2e3"
                              ></path>
                              <path
                                d="M1186.6,367.6l-3.1-7.7l-9.6,6.7l-6.3-2.5l-0.7,2l0.4,3.9l-0.6,1.9l0.4,2.4l-1.7,10.2l0.3,0.9l6.1,1l2.1-2l1.1-2.3 l4-0.8l0.7-2.2l1.7-1l-6.1-6.4l10.4-3.1L1186.6,367.6L1186.6,367.6z"
                                id="map-map-country-JO"
                                data-id="JO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1308.8,223.8l-9-1.3l-3.1,2.5l-10.8,2.2l-1.7,1.5l-16.8,2.1l-1.4,2.1l5,4.1l-3.9,1.6l1.5,1.7l-3.6,2.9l9.4,4.2 l-0.2,3l-6.9-0.3l-0.8,1.8l-7.3-3.2l-7.6,0.2l-4.3,2.5l-6.6-2.4l-11.9-4.3l-7.5,0.2l-8.1,6.6l0.7,4.6l-6-3.6l-2.1,6.8l1.7,1.2 l-1.7,4.7l5.3,4.3l3.6-0.2l4.2,4.1l0.2,3.2l2.8,1l4.4-1.3l5-2.7l4.7,1.5l4.9-0.3l1.9,3.9l0.6,6l-4.6-0.9l-4,1l0.9,4.5l-5-0.6l0.6,2 l3.2,1.6l3.7,5.5l6.4,2.1l1.5,2.1l-0.7,2.6l0.7,1.5l1.8-2l5.5-1.3l3.8,1.7l4.9,4.9l2.5-0.3l-6.2-22.8l11.9-3.6l1.1,0.5l9.1,4.5 l4.8,2.3l6.5,5.5l5.7-0.9l8.6-0.5l7.5,4.5l1.5,6.2l2.5,0.1l2.6,5l6.6,0.2l2.3,3h1.9l0.9-4.5l5.4-4.3l2.5-1.2l0.3-2.7l3.1-0.8 l9.1,2.1l-0.5-3.6l2.5-1.3l8.1,2.6l1.6-0.7l8.6,0.2l7.8,0.6l3.3,2.2l3.5,0.9l-1.7-3.5l2.9-1.6l-8.7-10.7l9-2.4l2-1.4l-1-11.1l10.7,2 l1.6-2.8l-2.5-6.2l3.8-0.6l1.8-4.2l-4.3-3.8l-6,0.9l-3.3-2.6l-3.9-1.2l-4.1-3.6l-3.2-1.1l-6.2,1.6l-8.3-3.6l-1.1,3.3l-18.1-15.5 l-8.3-4.7l0.8-1.9l-9.1,5.7l-4.4,0.4l-1.2-3.3l-7-2.1l-4.3,1.5L1308.8,223.8L1308.8,223.8z"
                                id="map-map-country-KZ"
                                data-id="KZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1211.7,547.2h-3.8l-2.3-2.1l-5.1,2.6l-1.6,2.7l-3.8-0.5l-1.2-0.7l-1.3,0.1h-1.8l-7.2-5.4h-3.9l-2-2.1v-3.6 l-2.9-1.1l-3.8,4.2l-3.4,3.8l2.7,4.4l0.7,3.2l2.6,7.3l-2.1,4.7l-2.7,4.2l-1.6,2.6v0.3l1.4,2.4l-0.4,4.7l20.2,13l0.4,3.7l8,6.3 l2.2-2.1l1.2-4.2l1.8-2.6l0.9-4.5l2.1-0.4l1.4-2.7l4-2.5l-3.3-5.3l-0.2-23.2L1211.7,547.2L1211.7,547.2z"
                                id="map-map-country-KE"
                                data-id="KE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1235.6,381.4l-3.7-0.5l-3.2,6.1l4.9,0.6l1.7,3.1l3.8-0.2l-2.4-4.8l0.3-1.5L1235.6,381.4L1235.6,381.4z"
                                id="map-map-country-KW"
                                data-id="KW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1387.2,302.6l-3.5-0.9l-3.3-2.2l-7.8-0.6l-8.6-0.2l-1.6,0.7l-8.1-2.6l-2.5,1.3l0.5,3.6l-9.1-2.1l-3.1,0.8l-0.3,2.7 l1.8,0.6l-3.1,4.1l4.6,2.3l3.2-1.6l7.1,3.3l-5.2,4.5l-4.1-0.6l-1.4,2l-5.9-1.1l0.6,3.7l5.4-0.5l7.1,2l9.5-0.9l1-1.5l-1.1-1.5l4-3 l3.2-1.2l5.7,0.9l0.6-4l6.4-0.8l1-2.4l6.8-3.4L1387.2,302.6L1387.2,302.6z"
                                id="map-map-country-KG"
                                data-id="KG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1574.8,481.8l0.2-6.4l-2-4.5l-4.8-4.4l-4.3-5.6l-5.7-7.5l-7.3-3.8l1.3-2.3l3.3-1.7l-3-5.5l-6.8-0.1l-3.4-5.7 l-4-5.1l-2.7,1l1.9,7.2l-2.9-0.1l-0.7-1.5l-4.1,4.1l-0.8,2.4l2.6,1.9l0.9,3.8l3.8,0.3l-0.4,6.7l1,5.7l5.3-3.8l1.8,1.2l3.2-0.2 l0.8-2.2l4.3,0.4l4.9,5.2l1.3,6.3l5.2,5.5l0.5,5.4l-1.5,2.9l4.9,2.4l2-4.3L1574.8,481.8L1574.8,481.8z"
                                id="map-map-country-LA"
                                data-id="LA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1102.1,210.1h-3.8l-4.4-2.2l-2.1-0.7l-3.7,1l-0.2,4.6l-3.6,0.1l-4.4-4.5l-4,2.1l-1.7,3.7l0.5,4.5l5-1.9l7.9,0.4 l4.4-0.6l0.9,1.3l2.5,0.4l5,2.9l2.6-1l4.6-2.3l-2.1-3.6l-1-2.8L1102.1,210.1L1102.1,210.1z"
                                id="map-map-country-LV"
                                data-id="LV"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1167.8,360.5l0.9-3.5l2.6-2.4l-1.2-2.5l-2.4-0.3l-0.1,0.2l-2.1,4.5l-1.3,5.2h1.8l0.4-1.1L1167.8,360.5 L1167.8,360.5z"
                                id="map-map-country-LB"
                                data-id="LB"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1128.1,766.5l1.1-2l3.1-1l1.1-2.1l1.9-3.1l-1.7-1.9l-2.3-2l-2.6,1.3l-3.1,2.5l-3.2,4l3.7,4.9L1128.1,766.5 L1128.1,766.5z"
                                id="map-map-country-LS"
                                data-id="LS"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M929.4,523.3l-1.6-0.2l-1.1,2.6l-1.6-0.1l-1.1-1.3l0.4-2.6l-2.3-3.9l-1.5,0.7l-1.2,0.2l-2.6,3l-2.6,3.4l-0.3,1.9 l-1.3,2l3.7,4.1l4.8,3.5l5.1,4.8l5.7,3.1l1.5-0.1l0.5-5.2l0.5-0.8l-0.2-2.5l-2.3-2.7l-1.8-0.4l-1.6-1.8l1.2-2.8l-0.6-3.1 L929.4,523.3L929.4,523.3z"
                                id="map-map-country-LR"
                                data-id="LR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1111.8,371.4l-1.5-2.1l-5.4-0.8l-1.8-1.1h-2l-2-2.8l-7.3-1.3l-3.6,0.8l-3.7,3l-1.5,3.1l1.5,4.8l-2.4,3l-2.5,1.6 l-5.9-3.1l-7.7-2.7l-4.9-1.2l-2.8-5.7l-7.2-2.8l-4.5-1.1l-2.2,0.6l-6.4-2.2l-0.1,4.9l-2.6,1.8l-1.5,2l-3.7,2.5l0.7,2.6l-0.4,2.7 l-2.6,1.4l1.9,5.6l0.4,3l-0.9,5.2l0.5,2.9l-0.6,3.5l0.5,4l-2.1,2.6l3.4,4.7l0.2,2.7l2,3.6l2.6-1.2l4.3,2.9l2.5,4l8.8,2.8l3.1,3.5 l3.9-2.4l5.4-3.5l22.3,12.2l22.4,12.2v-2.7h6.3l-0.5-12.7l-1-23.4l-1.3-22.7l-2-5.1l1.2-3.9l-1.1-2.7L1111.8,371.4L1111.8,371.4z"
                                id="map-map-country-LY"
                                data-id="LY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1024.4,273.6v-0.2l0.1-0.2l-0.1-0.1l-0.1-0.2l-0.1-0.1v-0.2l-0.1-0.1v-0.2l-0.1-0.1l-0.2,0.6v0.5l0.1,0.2h0.1 L1024.4,273.6L1024.4,273.6z"
                                id="map-map-country-LI"
                                data-id="LI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1100.4,221.2l-5-2.9l-2.5-0.4l-0.9-1.3l-4.4,0.6l-7.9-0.4l-5,1.9l1.7,5l5,1.1l2.2,0.9l-0.2,1.7l0.6,1.5l2.5,0.6 l1.4,1.9h4.6l4.8-2.2l0.5-3.4l3.5-2L1100.4,221.2L1100.4,221.2z"
                                id="map-map-country-LT"
                                data-id="LT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1007,258.6l0.2-2.7l-1-1.4l-1.3,0.2l-0.4,3.5l1.1,0.5L1007,258.6z"
                                id="map-map-country-LU"
                                data-id="LU"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1094,304.8l-2.8-2l-2.4,0.1l-1.7,0.4l-1.1,0.2l-2.9,1l-0.1,1.2h-0.7l0,0l-0.4,2.1l0.9,2.6l2.3,1.6l3.3-0.6l1.9-1.3 l2.8,0.1l0.7-1.1l1-0.2L1094,304.8L1094,304.8z"
                                id="map-map-country-MK"
                                data-id="MK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1255.7,658.4l-1.1-4.2l-1.4-2.7l-1.8-2.7l-2,2.8l-0.3,3.8l-3.3,4.5l-2.3-0.8l0.6,2.7l-1.8,3.2l-4.8,3.9l-3.4,3.7 h-2.4l-2.2,1.2l-3.1,1.3l-2.8,0.2l-1,4.1l-2.2,3.5l0.1,5.9l0.8,4l1.1,3l-0.8,4.1l-2.9,4.8l-0.2,2.1l-2.6,1.1l-1.3,4.6l0.2,4.6l1.6,5 l-0.1,5.7l1.2,3.3l4.2,2.3l3,1.7l5-2.7l4.6-1.5l3.1-7.4l2.8-8.9l4.3-12l3.3-8.8l2.7-7.4l0.8-5.4l1.6-1.5l0.7-2.7l-0.8-4.7l1.2-1.9 l1.6,3.8l1.1-1.9l0.8-3.1l-1.3-2.9L1255.7,658.4L1255.7,658.4z"
                                id="map-map-country-MG"
                                data-id="MG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1169.2,661.5l0.1-2.3l-1.2-1.9l0.1-2.8l-1.5-4.7l1.7-3.5l-0.1-7.7l-1.9-4.1l0.2-0.7l0,0l-1.1-1.7l-5.4-1.2l2.6,2.8 l1.2,5.4l-1,1.8l-1.2,5.1l0.9,5.3l-1.8,2.2l-1.9,5.9l2.9,1.7l3,3l1.6-0.6l2.1,1.6l0.3,2.6l-1.3,2.9l0.2,4.5l3.4,4l1.9-4.5l2.5-1.3 l-0.1-8.2l-2.2-4.6l-1.9-2h-0.3v0.8l1.1,0.3l1,3.4l-0.2,0.8l-1.9-2.5l-1,1.6L1169.2,661.5L1169.2,661.5z"
                                id="map-map-country-MW"
                                data-id="MW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1558.1,554.4l-0.5-3.8l-0.6-2.1l0.5-2.9l-0.5-4.3l-2.6-4.3l-3.5-3.8l-1.3-0.6l-1.7,2.6l-3.7,0.8l-0.6-3.3l-4.7-2.8 l-0.9,1.1l1.4,2.7l-0.4,4.7l2.1,3.4l1,5.3l3.4,4.3l0.8,3.2l6.7,5l5.4,4.8l4-0.5l0.1-2.1l-2.3-5.6L1558.1,554.4z M1560.9,563.3 l0.2,0.2l-0.1,0.2l-0.9,0.4l-0.9-0.4l0.3-0.6l0.6-0.1l0.5,0.2L1560.9,563.3z M1645.2,540.2l-3.8,0.4l1.2,3.1l-4,2.1l-5-1h-6.4 l-1.7,7.2l-2,2.2l-2.7,8.9l-4.5,1.3l-5.4-1.8l-2.7,0.6l-3.2,3.2l-3.6-0.4l-3.6,1.2l-3.9-3.5l-1-4.3l4.1,2.2l4.4-1.2l0.9-5.4l2.4-1.2 l6.7-1.4l3.8-5l2.6-4l2.7,3.3l1.1-2.2l2.7,0.2l0.1-4.1l0.1-3.1l4.1-4.4l2.5-5h2.3l3.1,3.2l0.4,2.8l3.8,1.7l4.8,2L1645.2,540.2z"
                                id="map-map-country-MY"
                                data-id="MY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1389.1,551.6L1389.1,551.6l0.1-0.3l-0.1-0.1h-0.1l-0.1,0.2v0.1v0.1H1389.1z M1389.4,545.7l0.1-0.2v-0.1v-0.1v-0.1 v-0.1l-0.1,0.1l-0.1,0.2v0.1l-0.1,0.1v0.1H1389.4L1389.4,545.7z"
                                id="map-map-country-MV"
                                data-id="MV"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1000.3,450.3l-6.1,0.6l-0.1-4l-2.6-1.1l-3.4-1.8l-1.3-3l-18.6-13.8l-18.4-13.9l-8.4,0.1l2.4,27.4l2.4,27.5l1,0.8 l-1.3,4.4l-22.3,0.1l-0.9,1.4l-2.1-0.4l-3.2,1.3l-3.8-1.8l-1.8,0.2l-1,3.7l-1.9,1.2l0.2,3.9l1.1,3.7l2.1,1.8l0.4,2.4l-0.3,2l0.3,2.3 h0.9l1.5-0.8l0.9,0.2l1.5,1.6l2.4,0.5l1.6-1.4l1.8-0.8l1.3-0.9l1.1,0.2l1.3,1.4l0.6,1.7l2.3,2.7l-1.2,1.6l-0.2,2.1l1.2-0.6l0.7,0.7 l-0.3,1.9l1.7,1.8l0.7-0.6l1.6,1l4.3,0.1l1-1.9l1,0.1l1.6-0.7l0.9,2.7l1.3-0.8l2.3-0.9l-0.4-3.7l1.6-2.7l-0.2-2.2l4.5-5.2l0.8-4.4 l1.6-1.6l2.7,0.9l2.3-1.3l0.8-1.6l4.3-2.9l1.1-2l5.2-2.6l3-0.9l1.4,1.2h3.6l3.6-0.3l2-2.2l7.6-0.6l4.9-1l0.5-3.9l3-4.3L1000.3,450.3 L1000.3,450.3z"
                                id="map-map-country-ML"
                                data-id="ML"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1053.6,344l-0.2-0.2l-0.5-0.5l-0.5-0.1l0.1,0.6l0.4,0.4h0.5L1053.6,344L1053.6,344z M1052.2,342.8L1052.2,342.8 v-0.2l-0.3-0.1l-0.4,0.1l0.1,0.1l0.3,0.2L1052.2,342.8z"
                                id="map-map-country-MT"
                                data-id="MT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M638,479.9l-0.2-0.7l-0.1-0.2l-0.2-0.3l0.1-0.3v-0.1h-0.2l-0.3-0.5l-0.6-0.3h-0.3l-0.2,0.2v0.3l0.3,0.9l0.2,0.2 l0.5,0.2l-0.4,0.4v0.1l0.1,0.3h0.9l0.2,0.3l0.1-0.1L638,479.9L638,479.9z"
                                id="map-map-country-MQ"
                                data-id="MQ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M949.8,413.3l-20.3-15.5l-0.2,9.7l-17.9-0.3l-0.2,16.3L906,424l-1.4,3.3l0.9,9.2l-21.6-0.1l-1.2,2.2l2.8,2.7l1.4,3 l-0.7,3.2l0.6,3.2l0.5,6.3l-0.8,5.9l-1.7,3.2l0.4,3.4l2-2l2.7,0.5l2.8-1.4h3.1l2.6,1.8l3.7,1.7l3.2,4.7l3.6,4.4l1.9-1.2l1-3.7 l1.8-0.2l3.8,1.8l3.2-1.3l2.1,0.4l0.9-1.4l22.3-0.1l1.3-4.4l-1-0.8l-2.4-27.5l-2.4-27.4L949.8,413.3L949.8,413.3z"
                                id="map-map-country-MR"
                                data-id="MR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1294.7,702.5l0.3-0.3l0.2-0.4l0.3-0.3l0.1-0.7l-0.2-0.8l-0.4-0.7l-0.5,0.1l-0.3,0.4l-0.2,0.5l-0.5,0.3l-0.1,0.3 l-0.2,0.7l-0.1,0.4l-0.2,0.1v0.2l0.3,0.3l0.8,0.1L1294.7,702.5L1294.7,702.5z"
                                id="map-map-country-MU"
                                data-id="MU"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1228.7,654.7v-0.3l0.2-0.5v-0.1l0.1-0.5l-0.3-0.3h-0.2l-0.2-0.3l-0.3,0.3l0.3,0.5l-0.1,0.3l-0.1,0.4l0.1,0.4 l0.2,0.2L1228.7,654.7L1228.7,654.7z"
                                id="map-map-country-YT"
                                data-id="YT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M444.4,407.8l-3.6-1.4l-3.9-2l-0.8-3l-0.2-4.5l-2.4-3.6l-1-3.7l-1.6-4.4l-3.1-2.5l-4.4,0.1l-4.8,5l-4-1.9l-2.2-1.9 l-0.4-3.5l-0.8-3.3l-2.4-2.8l-2.1-2l-1.3-2.2h-9.3l-0.8,2.6H391h-10.7l-10.7-4.4l-7.1-3.1l1-1.3l-7,0.7l-6.3,0.5l0.2,5.7l0.7,5.1 l0.7,4.1l0.8,4l2.6,1.8l2.9,4.5l-1,2.9l-2.7,2.3l-2.1-0.3l-0.6,0.5l2.3,3.7l2.9,1.5l1,1.7l0.9-0.9l3.1,2.9l2.1,2l0.1,3.4l-1.2,4.7 l2.5,1.6l3.3,3.1l2.9,3.6l0.7,3.9h1l2.7-2.3l0.4-1.2l-1.5-2.8l-1.6-2.9l-2.6-0.2l0.4-3.4l-0.9-3l-1-2.8l-0.5-5.9l-2.6-3.2l-0.6-2.3 l-1.2-1.6v-4.1l-1,0.1l-0.1-2.2l-0.7-0.5l-0.4-1.4l-2.7-4.4l-1.1-2.6l1-4.8l0.1-3l1.8-2.6l2.4,1.7l1.9-0.2l3.1,2.5l-0.9,2.4l0.4,4.9 l1.5,4.7l-0.4,2l1.7,3.1l2.3,3.4l2.7,0.5l0.3,4.4l2.4,3.1l2.5,1.5l-1.8,4l0.7,1.5l4.1,2.6l1.9,4l4.5,4.9l3.8,6.4l1.3,3.2v2.5 l1.4,2.9l-0.3,2.2l-1.6,1.6l0.3,1.8l-1.9,0.7l0.8,3.1l2.2,4l5.3,3.6l1.9,2.9l5.4,2l3,0.4l1.2,1.7l4.2,3l5.9,3l4,0.9l4.8,2.9l4,1.2 l3.7,1.7l2.9-0.7l4.8-2.4l3.1-0.4l4.4,1.6l2.6,2.1l5.5,6.9l0.4-1.9l0.8-1.5l-0.7-1.2l3.3-5.2h7.1l0.4-2.1l-0.8-0.4l-0.5-1.4 l-1.9-1.5l-1.8-2.1h2.6l0.4-3.6h5.2l5.1,0.1l0.1-1l0.7-0.3l0.9,0.8l2.5-3.9h1l1.2-0.1l1.2,1.6l2-5l1.2-2.7l-0.9-1.1l1.8-3.9l3.5-3.8 l0.6-3.1l-1.2-1.3l-3.4,0.5l-4.8-0.2l-6,1.5l-4,1.7l-1.2,1.8l-1.2,5.4l-1.8,3.7l-3.9,2.6l-3.6,1.1l-4.3,1.1l-4.3,0.6l-5.1,1.8 l-1.9-2.6l-5.6-1.7l-1.8-3.2l-0.7-3.6l-3-4.7l-0.4-5l-1.2-3.1l-0.5-3.4l1.1-3.1l1.8-8.6l1.8-4.5l3.1-5.6L444.4,407.8L444.4,407.8z"
                                id="map-map-country-MX"
                                data-id="MX"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1118.5,283.3l1.2-0.7l0.5-2.1l1.1-2l-0.5-1.1l1-0.5l0.6,0.9l3,0.2l1.2-0.5l-1-0.6l0.2-1l-2-1.5l-1.1-2.6l-1.9-1.1 v-2.1l-2.5-1.6l-2-0.3l-3.9-1.9l-3.2,0.6l-1.1,0.9l1.6,0.6l1.8,1.9l1.9,2.6l3.4,3.7l0.6,2.7l-0.2,2.7L1118.5,283.3z"
                                id="map-map-country-MD"
                                data-id="MD"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1013.5,295.2l0-0.3l0.5-0.6l0.3,0.2L1013.5,295.2z"
                                id="map-map-country-MC"
                                data-id="MC"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1473.7,252.1l-3.7-4.6l-6.6-1.5l-4.8-0.8l-6.9-2.5l-1.3,6.4l4,3.6l-2.4,4.3l-7.9-1.6l-5-0.2l-4.7-2.9l-5.1-0.1 l-5.3-1.9l-5.9,2.9l-6.6,5.4l-4.7,1l3.3,4.4l5.7,3.3l8.1,2.3l5.8,5l1.3,7.3l3,2.7l6.4,1l7.2,0.9l7.9,3.8l3.4,0.7l4.9,5.7l4.7,3.6 l5.5-0.1l11.2,1.3l6.4-0.8l5.5,0.9l9.3,3.8l6.2-0.1l3.2,2l4.4-3.3l7.2-2.2l7.5-0.2l4.9-2.2l1.9-3.3l2.5-2l-1.9-2.1l-2.9-2.3l0.4-4 l3.2,0.5l5.9,1.3l3.1-3.3l6.3-2.4l1.4-4.1l2.4-1.8l6.8-0.8l4.3,0.7l-0.7-2.2l-7.2-4.3l-5.1-2l-2.5,2.3l-5.4-1l-2.4,0.8l-2.7-2.6 l-0.3-6.2l-0.6-4.6l-5.5,0.5l-3.9-2.1l-3.3-0.7l-4.5,4.4l-5.8,1l-3.6,1.6l-6.7-1h-4.5l-4.9-3.1l-6.5-3l-5.4-0.8l-5.7,0.8l-3.9,1.1 L1473.7,252.1L1473.7,252.1z"
                                id="map-map-country-MN"
                                data-id="MN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1080,299.8l0.4-0.6l-2-1.2l-1.8-0.7l-0.8-0.8l-1.5-1.1l-0.9,0.6l-1.5,1.4l-0.4,3.4l-0.5,1l0,0l2.3,1.2l1.6,2.1 l1.1,0.4l0,0l-0.5-1.9l2-3.1l0.4,1.2l1.3-0.5L1080,299.8z"
                                id="map-map-country-ME"
                                data-id="ME"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M631.8,465.7l-0.1-0.5h-0.1l-0.2,0.4v0.3l0.3,0.1L631.8,465.7z"
                                id="map-map-country-MS"
                                data-id="MS"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M965.2,348.4l-2.3-0.1l-5.5-1.4l-5,0.4l-3.1-2.7h-3.9l-1.8,3.9l-3.7,6.7l-4,2.6l-5.4,2.9L927,365l-0.9,3.4l-2.1,5.4 l1.1,7.9l-4.7,5.3l-2.7,1.7l-4.4,4.4l-5.1,0.7l-2.8,2.4l-0.1,0.1l-3.6,6.5l-3.7,2.3l-2.1,4l-0.2,3.3l-1.6,3.8l-1.9,1l-3.1,4l-2,4.5 l0.3,2.2l-1.9,3.3l-2.2,1.7l-0.3,3h0.1l12.4-0.5l0.7-2.3l2.3-2.9l2-8.8l7.8-6.8l2.8-8.1l1.7-0.4l1.9-5l4.6-0.7l1.9,0.9h2.5l1.8-1.5 l3.4-0.2l-0.1-3.4l0,0h0.8l0.1-7.5l8.9-4.7l5.4-1l4.4-1.7l2.1-3.2l6.3-2.5l0.3-4.7l3.1-0.5l2.5-2.4l7-1l1-2.5l-1.4-1.4l-1.8-6.7 l-0.3-3.9L965.2,348.4L965.2,348.4z"
                                id="map-map-country-MA"
                                data-id="MA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1203,640.7l-0.8-2.9l0,0l0,0l-4.6,3.7l-6.2,2.5l-3.3-0.1l-2.1,1.9l-3.9,0.1l-1.4,0.8l-6.7-1.8l-2.1,0.3l-1.6,6 l0.7,7.3h0.3l1.9,2l2.2,4.6l0.1,8.2l-2.5,1.3l-1.9,4.5l-3.4-4l-0.2-4.5l1.3-2.9l-0.3-2.6l-2.1-1.6l-1.6,0.6l-3-3l-17.1,5.2l0.3,4.5 l0.3,2.4l4.6-0.1l2.6,1.3l1.1,1.6l2.6,0.5l2.8,2l-0.3,8.1l-1.3,4.4l-0.5,4.7l0.8,1.9l-0.8,3.7l-0.9,0.6l-1.6,4.6l-6.2,7.2l2.2,9 l1.1,4.5l-1.4,7.1l0.4,2.3l0.6,2.9l0.3,2.8h4.1l0.7-3.3l-1.4-0.5l-0.3-2.6l2.6-2.4l6.8-3.4l4.6-2.2l2.5-2.3l0.9-2.6l-1.2-1.1l1.1-3 l0.5-6.2l-1,0.3v-1.9l-0.8-3.7l-2.4-4.8l0.7-4.6l2.3-1.4l4.1-4.6l2.2-1.1l6.7-6.8l6.4-3.1l5.2-2.5l3.7-3.9l2.4-4.4l1.9-4.6l-0.9-3.1 l0.2-9.9l-0.4-5.6L1203,640.7L1203,640.7z"
                                id="map-map-country-MZ"
                                data-id="MZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1533.9,435.8l-0.6-2.6l-3.8,1.8l-2.5-1.2l-4.5-2.4l0.8-5.2l-3.7-1.3l-2.3-5.8l-5.6,1l-0.7-7.5l4.1-5.3l-0.8-5.3 l-1.3-4.9l-2.7-1.5l-2.7-3.7l-3,0.4l0.9,2.4l-1.6,1.2l1.3,3.9l-4.1-1.1l-6.1,4.4l0.9,3.6l-2.1,5.4l0.3,3.1l-1.5,5.2l-4.6-1.4 l0.9,6.6l-0.9,2.1l0.9,2.7l-2.4,1.5l0.5,4.6l-2.1-1l1.1,5.1l4.6,5.2l3.4,0.9l-0.4,2.2l5.4,7.4l1.9,5.9l-0.9,7.9l3.6,1.5l3.2,0.6 l5.8-4.6l3.2-3.1l3.1,5.2l2,8.1l2.6,7.6l2.6,3.3l0.2,6.9l2.2,3.8l-1.3,4.8l0.9,4.8l2.2-6.6l2.6-5.9l-2.8-5.8l-0.2-3l-1-3.5l-4.2-5.1 l-1.7-3.2l1.7-1.1l1.4-5.6l-2.9-4.2l-4.1-4.6l-3.5-5.6l2.2-1.1l1.5-6.9l3.9-0.3l2.8-2.8l3-1.4l0.8-2.4L1533.9,435.8L1533.9,435.8z"
                                id="map-map-country-MM"
                                data-id="MM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1105.4,683.7l-10.3,2.5l-13.4-0.9l-3.7-3l-22.5,0.3l-0.9,0.4l-3.2-2.9l-3.6-0.1l-3.3,1l-2.7,1.2l0.2,4.9l4.4,6.2 l1.1,4l2.8,7.7l2.7,5.2l2.1,2.6l0.6,3.5v7.6l1.6,9.8l1.2,4.6l1,6.2l1.9,4.7l3.9,4.8l2.7-3.2l2.1,1.8l0.8,2.7l2.4,0.5l3.3,1.2 l2.9-0.5l5-3.2l1.1-23.6l0.6-18.5l5.4-0.2l0.9-22.7l4.1-0.2l8.6-2.2l2,2.6l3.7-2.5h1.6l3.2-1.5V684l-2.1-1.4l-3.6-0.4L1105.4,683.7 L1105.4,683.7z"
                                id="map-map-country-NA"
                                data-id="NA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1915,575.5v-0.2h-0.1h-0.1l-0.1,0.2l0.1,0.1l0.1,0.1L1915,575.5L1915,575.5z"
                                id="map-map-country-NR"
                                data-id="NR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1455.2,394.8l-6.5-0.6l-6.4-1.5l-5-2.8l-4.5-1.2l-2.5-3.1l-3.2-0.9l-6.4-4.1l-4.7-2l-1.9,1.5l-2.8,2.9l-0.9,5.9 l5.7,2.5l5.8,3.1l7.7,3.5l7.6,0.9l3.8,3.2l4.3,0.6l6.8,1.5l4.6-0.1l0.1-2.5l-1.5-4.1L1455.2,394.8L1455.2,394.8z"
                                id="map-map-country-NP"
                                data-id="NP"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1005.5,243.9h2.9l1.1-2.3l1-5.6l-1-2l-3.9-0.2l-6.5,2.6l-3.9,8.9l-2.5,1.7l0,0l3.6,0.5l4.4-1.3l3.1,2.7l2.8,1.4 L1005.5,243.9L1005.5,243.9z"
                                id="map-map-country-NL"
                                data-id="NL"
                                class="svgMap-country"
                                fill="#fbb2ea"
                              ></path>
                              <path
                                d="M1897.3,716.1v-0.3l-0.4-0.2l-0.2,0.5v0.1l0.2,0.1h0.2L1897.3,716.1L1897.3,716.1z M1901.9,708.5L1901.9,708.5 l-0.1-0.4l0.1-0.2l-0.4,0.2l-0.6,0.2l0.1,0.8l-0.1,0.4l0.3,0.1l0.1,0.3h0.2l0.7-0.2l0.3-1.1h-0.4L1901.9,708.5L1901.9,708.5z M1898.9,706.8l0.3-0.5l0.1-0.2l-0.2-0.7l-0.3-0.3l0.3-1l-0.1-0.2l-0.4-0.2l-0.9,0.3l-0.1,0.2l0.5,0.1l0.2,0.2l-0.5,0.7l-0.5,0.1 l0.1,0.5l0.2,0.4l0.7,0.2l0.3,0.4H1898.9z M1895,703.9l0.3-0.3l0.3-0.4l-0.1-0.1v-0.3l0.2-0.4l0.3-0.1l-0.2-0.2l-0.2-0.1v0.3 l-0.3,0.7l-0.1,0.3l-0.5,0.6H1895L1895,703.9z M1882.7,701l-0.6-0.7l-0.1,0.2l-0.1,0.4v0.3l0.3,0.2l0.1,0.2l-0.1,0.5v0.4l0.6,0.9 l0.1,0.7l0.3,0.6l0.5,0.5l0.4,0.5l0.8,1.4l0.2,0.5l0.4,0.3l1,1.2l0.4,0.4l0.4,0.2l0.9,0.7l0.6,0.3l0.3,0.5l0.6,0.3l0.8,0.4l0.1,0.2 v0.3l0.1,0.3l0.5,0.4l0.6,0.3l0.1,0.2l0.1,0.2l0.3-0.1l0.3,0.1l0.9,0.7l0.4-0.1h0.3l0.5-0.2l0.3-0.4l-0.1-1.1l-0.5-0.5l-0.7-0.4 l-0.4-0.5l-0.4-0.5l-0.8-1l-1.1-1l-0.5-0.2l-0.3-0.4l-0.3-0.1l-0.2-0.3l-0.5-0.3l-0.3-0.6l-0.6-0.6l-0.1-0.3l0.1-0.3l-0.1-0.3 l-0.4-0.3l-0.2-0.5l-0.2-0.3l-0.4-0.2l-0.7-0.4l-1.6-1.9l-0.7-0.6l-0.7,0.2L1882.7,701L1882.7,701z M1860.7,695l0.2-0.4l0.1-0.8 l-0.2,0.4l-0.2,1L1860.7,695z"
                                id="map-map-country-NC"
                                data-id="NC"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1868.6,832.8l0.9-2.6l-5.8,2.9l-3.4,3.4l-3.2,1.6l-5.9,4.6l-5.6,3.2l-7,3.2l-5.5,2.4l-4.3,1.1l-11.3,6.1l-6.4,4.6 l-1.1,2.3l5.1,0.4l1.5,2.1l4.5,0.1l4-1.8l6.3-2.8l8.1-6.2l4.7-4.1l6.2-2.3l4-0.1l0.6-2.9l4.6-2.5l7-4.5l4.2-2.9l2.1-2.6l0.5-2.6 l-5.6,2.5L1868.6,832.8L1868.6,832.8z M1897.4,802.3l1.9-5.7l-3.1-1.7l-0.8-3.6l-2.3,0.5l-0.4,4.6l0.8,5.7l0.9,2.7l-0.9,1.1 l-0.6,4.4l-2.4,4.1l-4.2,5l-5.3,2.2l-1.7,2.4l3.7,2.5l-0.8,3.5l-6.9,5.1l1.4,0.9l-0.4,1.6l5.9-2.5l5.9-4.2l4.5-3.4l1.6-1.2l1.5-2.7 l2.8-2l3.8,0.2l4.2-3.8l5.1-5.7l-2.1-0.8l-4.6,2.5l-3.2-0.5l-2.9-2.1l2.3-4.9l-1.2-1.8l-2.9,4.4L1897.4,802.3L1897.4,802.3z"
                                id="map-map-country-NZ"
                                data-id="NZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M514.1,476.8l-1.9-0.2l-0.9,0.9l-2,0.8h-1.4l-1.3,0.8l-1.1-0.3l-0.9-0.9l-0.6,0.2l-0.8,1.5l-0.5-0.1l-0.3,1.3 l-2.1,1.8l-1.1,0.7l-0.6,0.8l-1.5-1.3l-1.4,1.7h-1.2l-1.3,0.2l-0.2,3.1h-0.8l-0.8,1.5l-1.8,0.3l-0.4,0.4l-0.9-1l-0.7,1l2.6,2.9 l2.2,2l1,2.1l2.5,2.6l1.8,2l0.9-0.8l3.5,1.7l1.4-0.8l1.7,0.5l0.8,1.3l1.7,0.4l1.4-1.3l-0.8-1.1l-0.1-1.7l1.2-1.6l-0.2-1.7l0.7-2.7 l0.9-0.7l0.1-2.8l-0.2-1.7l0.4-2.8l0.9-2.5l1.4-2.2l-0.3-2.3l0.4-1.4L514.1,476.8L514.1,476.8z"
                                id="map-map-country-NI"
                                data-id="NI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1051.3,425.6l-8.8-2.8l-18.6,12.2l-15.8,12.5l-7.8,2.8l0.1,14.6l-3,4.3l-0.5,3.9l-4.9,1l-7.6,0.6l-2,2.2l-3.6,0.3 l-0.5,3.1l0.8,2.9l3.1,4.1l0.2,3.1l6.4,1.4l-0.1,4.4l1.9-1.9h2l4.3,3.7l0.3-5.7l1.6-2.6l0.8-3.6l1.4-1.4l6-0.8l5.6,2.4l2.1,2.4 l2.9,0.1l2.6-1.5l6.8,3.3l2.8-0.2l3.3-2.7l3.3,0.2l1.6-0.9l3,0.4l4.3,1.8l4.3-3.5l1.3,0.2l3.9,7l1-0.2l0.2-2l1.6-0.4l0.5-2.9 l-3.6-0.2v-4.1l-2.4-2.3l2.3-8.4l6.9-6l0.2-8.3l1.8-12.9l1.1-2.7l-2.3-2.2l-0.2-2.1l-2-1.6l-1.6-9.9l-3.9,2.4L1051.3,425.6 L1051.3,425.6z"
                                id="map-map-country-NE"
                                data-id="NE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1055.8,492.7l-1,0.2l-3.9-7l-1.3-0.2l-4.3,3.5l-4.3-1.8l-3-0.4l-1.6,0.9l-3.3-0.2l-3.3,2.7l-2.8,0.2l-6.8-3.3 l-2.6,1.5l-2.9-0.1l-2.1-2.4l-5.6-2.4l-6,0.8l-1.4,1.4l-0.8,3.6l-1.6,2.6l-0.3,5.7l-0.2,2.1l1.2,3.8l-1.1,2.5l0.6,1.7l-2.7,4 L993,514l-1,4l0.1,4.1l-0.3,10.2h4.9h4.3l3.9,4.2l1.9,4.6l3,3.9l4.5,0.2l2.2-1.4l2.1,0.3l5.8-2.3l1.4-4.5l2.7-6.1l1.6-0.1l3.3-3.7 l2.1-0.1l3.2,2.6l3.9-2.2l0.5-2.6l1.2-2.6l0.8-3.2l3-2.6l1.1-4.5l1.2-1.4l0.7-3.3l1.5-4l4.6-5l0.3-2.1l0.6-1.1L1055.8,492.7 L1055.8,492.7z"
                                id="map-map-country-NG"
                                data-id="NG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1644.7,302.3L1644.7,302.3l-5.5-3.6l0.1,3.5l-6.3,2.6l2.7,3.3l-4.6-0.2l-3.6-2l-1,4.4l-3.8,3.4l-2.1,4l3.3,1.7 l3.4,0.7l0.8,1l0.4,3.5l1.1,1.2l-0.9,0.7l-0.1,2.9l1.9,1l1.6,0.6l0.8,1.2l1.3-0.5v-1.3l3.1,1.3l0.1-0.6l2.4,0.2l0.7-2.9l3.5-0.3 l2.1-0.4l-0.1-1.6l-4.3-2.8l-2.6-1l0.2-0.7l-1.2-2.8l1.3-1.7l2.9-1l1-1.9l0.3-1.1l1.9-1.4l-2.8-4.5l0.3-2.1l0.9-2l2.2,0.3l0,0l0,0 l0,0L1644.7,302.3L1644.7,302.3z"
                                id="map-map-country-KP"
                                data-id="KP"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1088.8,133.1l-6.9,1.1l-7.3-0.3l-5.1,4.4l-6.7-0.3l-8.5,2.3l-10.1,6.8l-6.4,4l-8.8,10.7l-7.1,7.8l-8.1,5.8 l-11.2,4.8l-3.9,3.6l1.9,13.4l1.9,6.3l6.4,3l6-1.4l8.5-6.8l3.3,3.6l1.7-3.3l3.4-4l0.9-6.9l-3.1-2.9l-1-7.6l2.3-5.3l4.3,0.1l1.3-2.2 l-1.8-1.9l5.7-7.9l3.4-6.1l2.2-3.9l4,0.1l0.6-3.1l7.9,0.9v-3.5l2.5-0.3l2.1-1.4l5.1,2.9l5.3-0.3l4.7,1.3l3.4-2.4l1.1-3.9l5.8-1.8 l5.7,2.1l-0.8,3.8l3.2-0.5l6.4-2.2l0,0l-5.4-3.3l4.8-1.4L1088.8,133.1L1088.8,133.1z M1066.2,99.8l-5.6-1l-1.9-1.7l-7.2,0.9l2.6,1.5 l-2.2,1.2l6.7,1.1L1066.2,99.8z M1040.8,91.5l-4.8-1.6l-5.1,0.2l-1,1.5h-5l-2.2-1.5l-9.3,1.6l3.2,3.5l7.6,3.8l5.7,1.4l-3,1.7 l8.4,2.9l4.4-0.2l0.9-3.9l3-0.9l1.2-3.4l8.5-1.8C1053.3,94.8,1040.8,91.5,1040.8,91.5z M1065,88.4l-9.1-1l-3.2,1.2l-5.3-1l-10.4,1.2 l4.3,2h5.1l0.9,1.3l10.6,0.7l10.1-0.5l4.3-2.4C1072.3,89.9,1065,88.4,1065,88.4z"
                                id="map-map-country-NO"
                                data-id="NO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1301,437.8l2.1-2l0.8-1.8l1.6-3.8l-0.1-1.4l-2.1-0.8l-1.6-2.1l-2.9-3.7l-3.3-1.1l-4.1-0.9l-3.3-2.3l-2.9-4.3h-2.8 l-0.1,4.2l1.1,0.8l-2.4,1.3l0.3,2.6l-1.4,2.6l0.1,2.6l2.9,4.5l-2.6,12.7l-16.1,6.4l5.2,10.5l2.1,4.4l2.5-0.3l3.6-2.2l3.1,0.6 l2.5-1.8l-0.2-2.5l2.1-1.6h3.4l1.2-1.3l0.2-3.1l3.3-2.4h2.6l0.4-0.8l-1-4.2l0.6-3.2l1-1.5l2.5,0.3L1301,437.8L1301,437.8z M1284.4,407.4l0.2-2.6l-0.7-0.6l-1.3,2.2l1.3,2.2L1284.4,407.4z"
                                id="map-map-country-OM"
                                data-id="OM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1388.3,346.3l-9.4-2.6l-2.9-5l-4.7-3l-2.8,0.7l-2.4,1.2l-5.8,0.8l-5.3,1.3l-2.4,2.8l1.9,2.8l1.4,3.2l-2,2.7 l0.8,2.5l-0.9,2.3l-5.1-0.2l3,4.2l-3,1.6l-1.5,3.8l1.1,3.8l-1.7,1.8l-2.1-0.6l-4,0.9l-0.2,1.7h-4l-2.3,3.6l0.8,5.4l-6.6,2.6 l-3.8-0.5l-0.9,1.4l-3.3-0.8l-5.3,0.9l-9.6-3.2l3.2,3.3l2.8,3.9l5.6,2.7l1,5.7l2.7,1l0.9,2.9l-7.4,3.3l-1.2,7.4l7.6-0.9l8.9-0.1 l9.9-1.2l4.9,4.8l2.1,4.6l4.2,1.6l3.2-4.2h12l-1.8-5.5l-3.5-3.2l-1.3-4.9l-4-2.9l4.9-6.6l6.4,0.5l4.5-6.7l2.1-6.5l3.9-6.3l-1-4.5 l3.7-3.7l-5-3.1l-2.9-4.3l-3.2-5.6l1.9-2.8l8.5,1.6l5.7-1L1388.3,346.3L1388.3,346.3z"
                                id="map-map-country-PK"
                                data-id="PK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1166.9,366.1l-2-0.9l-0.7,4.3l1.4,0.7l-1.2,0.8l-0.1,1.7l2.4-0.8l0.6-1.9L1166.9,366.1L1166.9,366.1z"
                                id="map-map-country-PS"
                                data-id="PS"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M543.5,517l-2-1.8l-1.7-1.9l-2.5-1.1l-3.1-0.2l0.3-0.6l-3.1-0.4l-2,1.9l-3.5,1.3l-2.5,1.6l-2.7,0.5l-1.5-1.6 l-0.5,0.5l-2.3-0.3l0.2-1.3l-1.9-2.3l-2.2,0.6l-0.1,2.5l1.1,1l-0.8,0.7l0.1,1.2l-0.5,1.3l-0.4,1.2l0.6,1l0.3-1.4h2.4l1.4,0.7 l2.3,0.5l1,2.5l1.8,0.4l0.8-1.1l0.8,3.8l2.6-0.3l0.9-0.9l1.5-0.9l-2.5-3.4l0.6-1.3l1.3-0.3l2.3-1.6l1.2-2.2l2.5-0.4l2.7,1.8l1,2.1 l1.4,0.4l-1.5,1.7l1,3.5l1.8,1.8l0.9-3.1l1.8,0.5l1.1-1.9l-1.1-3.8L543.5,517z"
                                id="map-map-country-PA"
                                data-id="PA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1850.7,615.6l0.9-1.8l-2.4-2.2l-2.5-4l-1.6-1.5l-0.5-1.9l-0.8,0.7l0.9,4.8l2.2,4l2.2,2.5L1850.7,615.6 L1850.7,615.6z M1829.5,607l2.1-3.9l0.4-3.5l-1.1-1l-3.4,0.1l0.4,3.7l-3.3,2.3l-1.7,2.2l-3.2,0.5l-0.4-3.4l-0.8,0.1l-1,3.1l-3.1,0.5 l-5-0.9l-0.6,1.9l3.1,1.8l4.5,1.9h2.9l3-1.5l3.2-1.6l1-1.8L1829.5,607L1829.5,607z M1801.7,619.2l-0.9-4.3l5.2-0.7l-1.1-3.3l-9.1-4 l-0.6-3.7l-2.9-3.2l-3.7-3.3l-10.2-3.6l-9.6-4.4l-1,20.7l-1.5,20.8l5.7,0.2l3.1,1.1l4.6-2.2l-0.3-4.7l3.6-2.1l4.9-1.8l7,2.8l2.4,5.6 l2.9,3.5l3.9,4l5.5,1l4.8,0.7l1.1,1.6l3.8-0.4l0.8-1.8l-5.6-2.7l1.8-1.2l-4.2-1.1l0.5-2.8l-3.2,0.2l-3-6.8L1801.7,619.2 L1801.7,619.2z M1836.4,600.8l-0.5-3.3l-2-2.1l-2.1-2.6l-2.3-1.5l-1.9-1.4l-2.9-1.8l-1.6,1.5l3.9,1.9l3.1,2.7l2.4,2.1l1.2,2.4 l0.8,3.8L1836.4,600.8L1836.4,600.8z"
                                id="map-map-country-PG"
                                data-id="PG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M655.7,700.5l-0.3-1.9l-5.4-3.3l-5.1-0.1l-9.5,1.9l-2.1,5.6l0.2,3.4l-1.5,7.6l11.2,10.4l4.6,1l7.2,4.7l5.9,2.5 l1.1,2.8l-4.2,9.6l5.7,1.8l6.2,1l4.2-1.1l4.3-4.8l0.3-5.7l0.7-3.6l0.3-3.8l-0.3-3.5l-2.1-1.2l-2,1.1l-2-0.3l-0.9-2.5l-1-5.8 l-1.2-1.9l-3.9-1.7l-2.1,1.2l-6-1.2l-0.4-8.6L655.7,700.5L655.7,700.5z"
                                id="map-map-country-PY"
                                data-id="PY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M584.3,599.5l-2.9-3.4l-1.7-0.1l3.5-6.5l-4.4-3l-3.3,0.6l-2.1-1.1l-3,1.7l-4.2-0.8l-3.4-6.7l-2.7-1.7l-1.8-3l-3.7-3 l-1.5,0.6l0.8,4.9l-1.7,4.1l-6,6.7l-6.7,2.5l-3.3,5.5l-0.9,4.3l-3.1,2.6l-2.5-3.2l-2.3-0.7l-2.3,0.5l-0.2-2.3l1.5-1.5l-0.7-2.7 l-4.4,4l-1.6,4.5l3,6.1l-1.7,2.8l4.1,2.6l4.5,4.1l2,4.7l2.4,2.9l6,12.7l6.2,11.7l5.4,8.4l-0.8,1.8l2.8,5.3l4.6,3.9l10.7,6.9 l11.6,6.4l0.7,2.6l5.9,3.7l2.7-1.6l1.2-3.3l2.8-6.9l-2.8-5.3l1.1-2.1l-1.2-2.4l1.9-3.2l-0.3-5.4l-0.1-4.5l1.1-2.1l-5.5-10.3l-3,1.1 l-2.6-0.7l-0.2-9.7l-4.4,3.8l-4.9-0.2l-2.3-3.4l-3.7-0.3l1-2.8l-3.3-3.8L562,620l1.5-1.1l-0.1-2.7l3.3-1.9l-0.7-3.4l1.3-2.2l0.4-3 l6.2-4.3l4.6-1.2l0.7-1L584.3,599.5L584.3,599.5z"
                                id="map-map-country-PE"
                                data-id="PE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1684.6,518.6l-0.6-2.3l-0.8-3.2l-4.8-3l0.8,4.9l-3.9,0.2l-0.7,2.8l-4.2,1.7l-2.2-2.8l-2.8,2.4l-3.4,1.7l-1.9,5.4 l1.1,1.9l3.9-3.6l2.7,0.3l1.5-2.7l3.8,3l-1.5,3.1l1.9,4.6l6.8,3.7l1.4-3l-2.1-4.7l2.4-3.2l2.5,6.4l1.5-5.8l-0.6-3.5L1684.6,518.6 L1684.6,518.6z M1670.1,506.8v-6.1l-3.6,6.1l0.5-4.2l-3,0.3l-0.3,4l-1.2,1.8l-1,1.7l3.8,4.4l1.6-1.9l1.4-4L1670.1,506.8 L1670.1,506.8z M1640,512.9l2.6-4.4l3.4-3.5l-1.5-5.2l-2.4,6.3l-2.9,4.4l-3.8,4l-2.4,4.4L1640,512.9L1640,512.9z M1657.4,496.5 l1.2,3l-0.1,3.3l0.5,2.9l3.3-1.9l2.4-2.7l-0.2-2.6h-3.6L1657.4,496.5L1657.4,496.5z M1677.4,494.8l-1.8-2.4l-5.4-0.1l4,4.8l0.3,2.4 l-3.3-0.5l1.2,3.9l1.7,0.3l0.7,4.5l2.5-1.4l-1.7-4l-0.4-2.1l4.5,1.7L1677.4,494.8L1677.4,494.8z M1654.5,489l-2.2-2.3l-4.8-0.2 l3.4,4.8l2.8,3.2L1654.5,489L1654.5,489z M1648.1,454.4h-3.3l-0.9,5.8l1.1,9.9l-2.6-2l1.2,6l1.2,2.8l3.3,3.7l0.4-2.3l1.8,1.4 l-1.5,1.7l0.1,2.6l2.9,1.4l5-0.9l4,3.8l1.1-2.4l2.5,3.4l4.8,3.1l0.2-2.9l-2-1.6l0.1-3.4l-7.5-3.6l-2.3,0.8l-3.1-0.7l-2-5.1l0.1-5.1 l3-2.1l0.6-5.3l-2.7-4.6l0.4-2.6l-0.7-1.6l-1.5,1.6L1648.1,454.4L1648.1,454.4z"
                                id="map-map-country-PH"
                                data-id="PH"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M274.2,727.4v-0.2l-0.1-0.2l-0.2-0.1l-0.1,0.1l0.1,0.2l0.2,0.2H274.2L274.2,727.4z"
                                id="map-map-country-PN"
                                data-id="PN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1069.4,228.3l-4.6-0.1l-0.5-1.4l-4.8-1.1l-5.7,2.1l-7.1,2.8l-3.1,1.7l1.4,3.1l-1.2,1.6l2,2.2l1.4,3.3l-0.1,2.1 l2.3,3.9l2.4,1.9l3.7,0.6l-0.1,1.7l2.7,1.2l0.6-1.5l3.4,0.6l0.7,2l3.6,0.3l2.6,3.1l0.3,0.4l1.9-0.9l2.7,2.2l2.8-1.3l2.4,0.6l3.4-0.8 l4.9,2.3l1.1,0.4l-1.6-2.8l3.8-5.1l2.3-0.7l0.3-1.8l-3.1-5.3l-0.5-2.7l-1.9-2.9l2.7-1.2l-0.3-2.4l-1.7-2.3l-0.6-2.7l-1.4-1.9 l-2.5-0.6l-8.7,0.1L1069.4,228.3L1069.4,228.3z"
                                id="map-map-country-PL"
                                data-id="PL"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M937.6,335.9l-0.4-2.1l2-2.5l0.8-1.7l-1.8-1.9l1.6-4.3l-2-3.8l2.2-0.5l0.3-3l0.9-0.9l0.2-4.9l2.4-1.7l-1.3-3.1 l-3-0.2l-0.9,0.8h-3l-1.2-3.1l-2.1,0.9l-1.9,1.6l0.1,2.1l0.9,2.2l0.1,2.7l-1.3,3.8l-0.4,2.5l-2.2,2.3l-0.6,4.2l1.2,2.4l2.3,0.6 l0.4,4l-1,5.1l2.8-0.7l2.7,0.9L937.6,335.9L937.6,335.9z"
                                id="map-map-country-PT"
                                data-id="PT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M600.8,457.3v-0.1l0,0h0.1v-0.1l0.1-0.1l0,0v-0.1h-0.1l0,0h-0.3h-0.1v0.1v0.1l0.2,0.1l0,0L600.8,457.3L600.8,457.3 L600.8,457.3z M614.4,457l0.7-0.2v-0.1l-0.4-0.1h-0.6l-0.5,0.2l0.1,0.2h0.2H614.4z M610.7,454.8l-0.1-0.2h-0.2l-3.5-0.1l-1.3-0.2 l-0.3,0.1l-0.3,0.1l-0.1,0.4l-0.2,0.2l-0.3,0.2l0.1,0.3l0.1,0.2l0.2,0.4l-0.1,0.5l-0.2,1l0.3,0.2l0.7-0.1l0.3,0.1l0.3,0.1l0.4-0.1 l0.4-0.2l0.9,0.1l0.5-0.1l0.6,0.3l0.4-0.1l0.2,0.1h0.3h0.6l0.9-0.2l0.8-0.5l0.3-0.5l0.4-0.3l0.6-0.4v-0.9l-0.7-0.1l-0.6-0.3 l-1.1-0.1h-0.1l0.1,0.2h-0.1L610.7,454.8L610.7,454.8z"
                                id="map-map-country-PR"
                                data-id="PR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1258,415.5l0.8-3.8l-0.5-3.7l-1.9-2l-1.4,0.7l-1.1,3.3l0.8,4.7l1.8,1.2L1258,415.5L1258,415.5z"
                                id="map-map-country-QA"
                                data-id="QA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1284,707.9l0.2-0.4l0.1-0.8l-0.4-0.8l-0.4-0.7l-0.4-0.2l-0.8-0.1l-0.7,0.3l-0.4,0.6l-0.2,0.3l0.4,1.1l0.2,0.3 l1.1,0.6h0.5L1284,707.9L1284,707.9z"
                                id="map-map-country-RE"
                                data-id="RE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1108.1,266.3h-2.1l-1,1.5l-3.6,0.6l-1.6,0.9l-2.4-1.5h-3.2l-3.2-0.7l-1.9,1.3l-2.9,1.3l-1.9,4.2l-2.6,4.3l-3.8,1.1 l2.9,2.5l0.8,1.9l3.2,1.5l0.7,2.5l3.1,1.8l1.4-1.3l1.4,0.7l-1.1,1.1l1,1l1.8,2.6l1.9-0.5l4,1l7.5,0.3l2.3-1.6l5.8-1.4l4,2.2l3,0.7 l0.4-7.4l1.6,0.5l2.3-1.3l-0.4-1.6l-2.4-1.1l-2.2,1l-2.4-1.1l-1.3-2.8l0.2-2.7l-0.6-2.7l-3.4-3.7l-1.9-2.6l-1.8-1.9L1108.1,266.3 L1108.1,266.3z"
                                id="map-map-country-RO"
                                data-id="RO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1332.3,95.1l-4.5-4l-13.6-4.1l-9.4-2.1l-6.2,0.9l-5.3,2.9l5.8,0.8l6.6,3.2l8,1.7l11.5,1.3 C1325.2,95.7,1332.3,95.1,1332.3,95.1z M1153.6,87.8l0.9-0.6l-5.7-0.9L1146,87l-1.3,1l-1.5-1.2l-5.2,0.1l-6.2,0.8l7.7,0.1l-1.1,1.3 l4.4,1l3.6-0.7l0.1-0.7l2.9-0.3C1149.4,88.4,1153.6,87.8,1153.6,87.8z M1354.1,97.7l-1.5-1.8l-12.5-2.6l-3-0.3l-2.2,0.5l1.2,6 C1336.1,99.5,1354.1,97.7,1354.1,97.7z M1369.3,104l-9.2-0.7l3.4-1.2l-8.2-1.5l-6.1,1.9l-1,2l1.5,2.1l-6.9-0.1l-5.3,2.6l-4.3-1.1 l-9.3,0.5l0.3,1.3l-9.2,0.7l-4.9,2.4l-4.2,0.2l-1.2,3.3l5.5,2.6l-7.7,0.7l-9.5-0.3l-5.8,1.1l4.8,5.4l6.9,4.3l-9.6-3l-7.9,0.3l-5.1,2 l4.5,3.8l-4.9-1l-2.1-5l-4.2-2.8l-1.8,0.1l3.6,3.7l-4.6,3.5l8.1,4.2l0.4,5.4l2.9,2.9l4.7,0.5l0.4,3.5l4.4,3.1l-1.9,2.6l0.5,2.7 l-3.7,1.4l-0.5,2l-5.3-0.8l3.5-7.8l-0.5-3.6l-6.7-3.3l-3.8-7.3l-3.7-3.7l-3.6-1.6l0.8-4.2l-2.9-2.9l-11.3-1.4l-2.1,1l0.5,4.7 l-4.3,4.7l1.2,1.7l4.7,4.1l0.1,2.6l5.3,0.5l0.8,1.1l5.8,2.9l-1,2.8l-18.5-6.1l-6.6-1.7l-12.8-1.6l-1.2,1.7l5.9,3.1l-2.7,3.6 l-6.4-3.2l-5,2.2l-7.6,0.1l-2.1,1.9l-5.3-0.6l2.5-3.3l-3.2-0.2l-12.3,4.6l-7.6,2.6l0.4,3.5l-6,1.2l-4-1.9l-1.2-3l5-0.7l-3.6-3 l-12.2-1.8l4.3,3.4l-0.8,3.2l4.7,3.3l-1.1,3.8l-4.6-1.9l-4-0.3l-8,5.4l4.2,4.1l-3.2,1.4l-11.4-3.5l-2.1,2.1l3.3,2.4l0.2,2.7 l-3.8-1.4l-6-1.7l-1.9-5.8l-1-2.6l-8-4l2.9-0.7l20.1,4.2l6.4-1.5l3.7-2.9l-1.6-3.6l-4-2.6l-17.6-6.1l-11.6-1.3l-7.6-3.2l-3.6,1.8 l0,0l-6.4,2.2l-3.2,0.5l0.4,3.7l7.2,3.7l-2.8,4.1l6.4,6.3l-1.7,4.8l4.9,4.1l-0.9,3.7l7.3,3.9l-0.9,2.9l-3.3,3.3l-7.9,7.4l0,0 l5.3,2.8l-4.5,3.2l0,0l0.9,1l-2.6,3.4l2.5,5.5l-1.6,1.9l2.4,1.4l1,2.8l2.1,3.6l5.2,1.5l1,1.4l2.3-0.7l4.8,1.4l1,2.9l-0.6,1.6 l3.7,3.9l2.2,1.1l-0.1,1.1l3.4,1.1l1.7,1.6l-1.6,1.3l-3.9-0.2l-0.8,0.6l1.5,2l2,3.9l0,0l1.8,0.2l1-1.4l1.5,0.3l4.8-0.5l3.8,3.4 l-0.9,1.3l0.7,1.9l4,0.2l2.2,2.7l0.2,1.2l6.6,2.2l3.5-1l3.6,2.9l2.9-0.1l7.6,2l0.4,1.9l-1.3,3.2l1.8,3.4l-0.3,2.1l-4.7,0.5l-2.2,1.7 l0.4,2.8l4.2-1l0.4,1.3l-6.8,2.6l3.2,2.4l-3.2,5.2l-3.4,1l5,3.6l6.2,2.4l7.4,5.1l0.5-0.7l4.5,1.1l7.7,1l7.5,2.9l1.1,1.2l2.9-1 l5.1,1.3l2.1,2.5l3.5,1.4l1.5,0.2l4.3,3.8l2.4,0.4l0.5-1.5l2.6-2.5l0,0l-7.3-7.3l-0.4-4.1l-5.9-5.9l3.5-6.3l4.6-1.1l1.4-3.7l-2.8-1 l-0.2-3.2l-4.2-4.1l-3.6,0.2l-5.3-4.3l1.7-4.7l-1.7-1.2l2.1-6.8l6,3.6l-0.7-4.6l8.1-6.6l7.5-0.2l11.9,4.3l6.6,2.4l4.3-2.5l7.6-0.2 l7.3,3.2l0.8-1.8l6.9,0.3l0.2-3l-9.4-4.2l3.6-2.9l-1.5-1.7l3.9-1.6l-5-4.1l1.4-2.1l16.8-2.1l1.7-1.5l10.8-2.2l3.1-2.5l9,1.3l4.3,6.3 l4.3-1.5l7,2.1l1.2,3.3l4.4-0.4l9.1-5.7l-0.8,1.9l8.3,4.7l18.1,15.5l1.1-3.3l8.3,3.6l6.2-1.6l3.2,1.1l4.1,3.6l3.9,1.2l3.3,2.6l6-0.9 l4.3,3.8l1.7-0.5l4.7-1l6.6-5.4l5.9-2.9l5.3,1.9l5.1,0.1l4.7,2.9l5,0.2l7.9,1.6l2.4-4.3l-4-3.6l1.3-6.4l6.9,2.5l4.8,0.8l6.6,1.5 l3.7,4.6l8.4,2.6l3.9-1.1l5.7-0.8l5.4,0.8l6.5,3l4.9,3.1h4.5l6.7,1l3.6-1.6l5.8-1l4.5-4.4l3.3,0.7l3.9,2.1l5.5-0.5l7.3,2.3l4.4-3.9 l-1.9-2.7l-0.1-6.5l1.2-2l-2.5-3.3l-3.7-1.5l1.7-3l5.1-1.1l6.2-0.2l8.5,1.8l5.9,2.3l7.7,6.1l3.8,2.7l4.4,3.7l6.1,6.1l9.9,1.9 l8.9,4.5l6,5.8h7.5l2.6-2.5l6.9-1.8l1.3,5.6l-0.4,2.3l2.8,6.8l0.6,6l-6.8-1.1l-2.9,2.2l4.7,5.3l3.8,7.3l-2.5,0.1l1.9,3.1l0,0 l1.4,1.1l0,0l0,0l0,0l-0.4-2l4-4.5l5.1,3l3.2-0.1l4.4-3.6l1-3.7l2.1-7.1l1.9-7.2l-1.3-4.3l1-9l-5.2-9.9l-5.5-7.3l-1.3-6.2l-4.7-5.1 l-12.7-6.7l-5.6-0.4l-0.3,3l-5.8-1.3l-5.7-3.8l-8-0.7l4.9-14.1l3.5-11.5l13.1-1.8l14.9,1l2.5-2.8l7.9,0.8l4.3,4.3l6.4-0.6l8.4-1.6 l-7.7-3.5v-9.8l9.1-1.9l12.1,7.1l3.6-6.4l-3.2-4.7l4.7-0.5l6.5,8.1l-2.4,4.6l-0.8,6l0.3,7.5l-5.7,1.3l2.8,2.7l-0.1,3.6l6.4,8.3 l16,13.4l10.5,8.8l5.7,4.3l1.6-5.7l-4.5-6.2l5.7-1.5l-5.4-6.9l5-3.1l-4.7-2.6l-3.4-5l4.1-0.2l-9-8.6l-6.7-1.4l-2.9-2.4l-1.1-5.6 l-3.1-3.9l7,0.8l1.3-2.5l4.7,2.2l6.1-4.6l11.4,4l-1.7-2.6l2-3.6l1.5-4l3.1-0.7l6.5-4.3l9.8,1.2l-0.9-1.5l-3.8-2.3l-4.1-1.6l-9.1-4.6 l-8.1-3l6.1,0.4l2-2.5l0,0l-32.9-21.9l-9.4-2.3l-15.7-2.6l-7.9,0.3l-15.2-1.4l1.8,2.3l8.5,3.4l-2.5,1.8l-14.2-4.8l-6.8,0.6l-9.2-1.1 l-7,0.2l-3.9,1.1l-7.2-1.6l-5.1-3.8l-6.5-2.2l-9.2-0.9l-14.7,1l-16.1-4l-7.8-3l-40.1-3.4l-2.1,2.2l9.3,4.8l-7.5-0.7l-1,1.5l-9.7-1.6 l-5,1.4l-9.3-2.4l3,5.5l-8.9-2.1l-10-4.1l-0.4-2.2l-6-3.3l-9.8-2.6h-6.1l-9.3-0.9l4.7,3.9l-17.2-0.8l-3.9-2.3l-13.3-0.9l-5.3,0.8 l-0.1,1.3l-5.8-3.2l-2.3,0.9l-7.2-1.2l-5.6-0.7l1.1-1.5l6.6-2.8l2.3-1.5l-2.4-2.5l-5.5-1.9l-11.5-2.3l-10.8-0.1l-1.9,1.2L1369.3,104 L1369.3,104z M1207.1,135.6l-9.9-4.3l-3.1-4.3l3.3-4.9l2.8-5l8.6-4.7l9.8-2.4l11.3-2.4l1.3-1.5l-4.2-1.9l-6.6,0.6l-4.9,1.8 l-11.7,0.9l-10.1,3.1l-6.8,2.7l2.5,2.2l-6.6,4.4l3.9,0.7l-5.4,4.3l1.6,2.8l-3.4,1.1l1.9,2.8l7.9,1.4l2.2,2.3l13.4,0.7L1207.1,135.6 L1207.1,135.6z M1521.1,110.9l-17.9-2.6l-10.2-0.2l-3.4,0.9l3.4,3.4l12.4,3.2l4.5-1.2l14.2,0.2 C1524.1,114.6,1521.1,110.9,1521.1,110.9z M1546.3,113.2l-11.7-1.3l-8.2-0.7l1.7,1.6l10.3,2l6.8,0.4L1546.3,113.2L1546.3,113.2z M1533.8,122.7l-2.5-1.4l-8.3-1.9l-4.1,0.5l-0.8,2l1.1,0.2l8.8,0.6C1528,122.7,1533.8,122.7,1533.8,122.7z M1696.4,135l-6-3.6 l-1.4,2.2l3.5,1.6L1696.4,135z M1084,228.9l-0.6-1.5l0.2-1.7l-2.2-0.9l-5-1.1l-6.3,2l-0.7,2.6l5.9,0.7L1084,228.9z M1673.7,250.7 l-7.2-6.2l-5.1-6l-6.8-5.8l-4.9-4l-1.3,0.8l4.4,2.8l-1.9,2.8l6.8,8.3l7.8,6l6.4,8.3l2.4,4.6l5.5,6.8l3.8,6l4.6,5.2l-0.1-4.8l6.5,3.8 l-3-4.4l-9.5-6.3l-3.7-9l8.9,2L1673.7,250.7L1673.7,250.7z"
                                id="map-map-country-RU"
                                data-id="RU"
                                class="svgMap-country"
                                fill="#fbb2ea"
                              ></path>
                              <path
                                d="M1147.6,579.4l-3.3,1.9l-1.4-0.6l-1.6,1.8l-0.2,3.8l-0.8,0.4l-0.6,3.5l3.5,0.5l1.7-3.6l3,0.4l0,0l1.6-0.8l0.4-3.7 L1147.6,579.4L1147.6,579.4z"
                                id="map-map-country-RW"
                                data-id="RW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M629.9,463.2v-0.3l-0.2-0.2h-0.3v0.5l0.2,0.2L629.9,463.2z M629.4,462.5l-0.1-0.2l-0.1-0.1l-0.2-0.4l-0.4-0.4 l-0.2,0.1l-0.1,0.2v0.1l0,0l0.3,0.3l0.4,0.1l0.2,0.4L629.4,462.5L629.4,462.5z"
                                id="map-map-country-KN"
                                data-id="KN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M637.4,484.2l0.1-1.2l-0.1-0.5l-0.2,0.1l-0.3,0.4l-0.4,0.6l-0.1,0.3v0.6l0.6,0.4L637.4,484.2L637.4,484.2z"
                                id="map-map-country-LC"
                                data-id="LC"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M634.5,491.4L634.5,491.4v-0.1h0.1v-0.1l0,0v-0.1h-0.1v0.1l0,0v0.1h-0.1L634.5,491.4L634.5,491.4L634.5,491.4 L634.5,491.4z M635.2,489.5l0.1-0.2l0.1-0.1l0,0l0,0l-0.1-0.1l0,0v0.1l-0.2,0.1l0,0v0.1l0,0v0.1H635h-0.1l0,0h0.1l0,0l0.1,0.1l0,0 l0,0l0,0L635.2,489.5L635.2,489.5z M635.5,488.4l0.3-0.2l0.1-0.6l-0.1-0.4h-0.2l-0.3,0.1l-0.2,0.3l-0.1,0.5L635.5,488.4L635.5,488.4 L635.5,488.4z"
                                id="map-map-country-VC"
                                data-id="VC"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1040.3,293.5l-0.7,0.1l-0.2-0.9l0.9-0.3L1040.3,293.5z"
                                id="map-map-country-SM"
                                data-id="SM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1014.1,571.4l0.5-0.8v-0.5l-0.3-0.5h-0.4l-0.5,0.4l-0.3,0.4v0.3l0.1,0.7l0.1,0.3l0.3,0.2L1014.1,571.4 L1014.1,571.4z M1018.4,562.2l0.2-0.4v-0.2l-0.1-0.1l-0.1-0.1l-0.2,0.1l-0.3,0.5l0.1,0.2l0.2,0.2L1018.4,562.2L1018.4,562.2z"
                                id="map-map-country-ST"
                                data-id="ST"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1228.7,387l-10.2-0.5l-16.7-12.7l-8.5-4.5l-6.7-1.7l-0.9,1l-10.4,3.1l6.1,6.4l-1.7,1l-0.7,2.2l-4,0.8l-1.1,2.3 l-2.1,2l-6.1-1l-0.5,2.5v2.2l-0.6,3.5h2.7l3.2,4.4l3.7,5.1l2.5,4.7l1.7,1.5l1.7,3.3l-0.2,1.4l2.1,3.7l3,1.3l2.8,2.5l3.6,7v3.8 l0.9,4.4l4,6.1l2.5,1l4.1,4.4l1.9,5.2l3.2,5.3l3,2.3l0.6,2.5l1.8,1.9l0.9,2.8l2.3-2.1l-0.7-2.7l1.2-3.1l2.4,1.7l1.5-0.6l6.4-0.2 l1,0.7l5.4,0.6l2.1-0.3l1.6,2.1l2.5-1l3.5-6.7l5-2.9l15.7-2.4l16.1-6.4l2.6-12.7l-2.9-4.5l-1,1.3l-16.8-3.2l-2.6-6.4l-0.4-1.5 l-1.2-2.4l-1.5,0.4l-1.8-1.2l-1-1.6l-0.9-2.1l-1.7-1.8l-1-2.1l0.4-2.1l-0.6-2.7l-4-2.6l-1.2-2.3l-2.9-1.4l-2.7-5.5l-3.8,0.2 l-1.7-3.1L1228.7,387L1228.7,387z"
                                id="map-map-country-SA"
                                data-id="SA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M908.9,479.2l-3.6-4.4l-3.2-4.7l-3.7-1.7l-2.6-1.8h-3.1l-2.8,1.4l-2.7-0.5l-2,2l-1.3,3.3l-2.8,4.4l-2.5,1.2l2.7,2.3 l2.2,5l6.1-0.2l1.3-1.5l1.8-0.1l2.1,1.5l1.8,0.1l1.8-1.1l1.1,1.8l-2.4,1.5l-2.4-0.1l-2.4-1.4l-2.1,1.5h-1l-1.4,0.9l-5-0.1l0.8,4.9 l3-1.1l1.8,0.2l1.5-0.7l10.3,0.3l2.7,0.1l4,1.5l1.3-0.1l0.4-0.7l3,0.5l0.8-0.4l0.3-2l-0.4-2.4l-2.1-1.8l-1.1-3.7L908.9,479.2 L908.9,479.2z"
                                id="map-map-country-SN"
                                data-id="SN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1084.8,285.2l-3.2-1.5l-0.8-1.9l-2.9-2.5l-3.2-0.2l-3.7,1.6l0,0l1.5,2.4l1.7,1.8l-1.7,2.3l0,0h1.8l-1,2.7l2.7,2.3 l-0.5,2.9l-1.2,0.3l1.5,1.1l0.8,0.8l1.8,0.7l2,1.2l-0.4,0.6l1.2-0.5l0.5-2l0.9-0.4l0.8,0.9l1,0.4l0.8,1l0.8,0.3l1.1,1.1h0.8 l-0.5,1.5l-0.5,0.7l0.2,0.5l1.7-0.4l2.4-0.1l0.7-0.9l-0.6-0.7l0.7-2l1.7-1.9l-2.8-2.6l-0.7-2.3l1.1-1.4l-1-1l1.1-1.1l-1.4-0.7 l-1.4,1.3l-3.1-1.8L1084.8,285.2L1084.8,285.2z"
                                id="map-map-country-RS"
                                data-id="RS"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1288.5,602l-0.5-0.8l-0.4,0.3l0.2,0.3l0.3,0.2l0.1,0.4l0.3,0.2V602L1288.5,602z"
                                id="map-map-country-SC"
                                data-id="SC"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M919.4,518.7l-1.5,0.3v-2.3L917,515l0.2-1.8l-1.2-2.7l-1.5-2.3H910l-1.3,1.2l-1.5,0.2l-1,1.4l-0.7,1.7l-3,2.8 l0.7,4.7l0.9,2.3l2.9,3.5l4.1,2.5l1.5,0.5l1.3-2l0.3-1.9l2.6-3.4L919.4,518.7L919.4,518.7z"
                                id="map-map-country-SL"
                                data-id="SL"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1561,563.7l0.1-0.2l-0.2-0.2l-0.3-0.1l-0.5-0.2l-0.6,0.1l-0.3,0.6l0.9,0.4L1561,563.7L1561,563.7z"
                                id="map-map-country-SG"
                                data-id="SG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M627.1,457.2L627.1,457.2l0.2,0.2l0.3,0.1l0.1-0.1v-0.2H627.1z"
                                id="map-map-country-SX"
                                data-id="SX"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1087.4,260.9l-4.9-2.3l-3.4,0.8l-2.4-0.6l-2.8,1.3l-2.7-2.2l-1.9,0.9l-0.3-0.4h-1.5l-0.6,1.1l-1.1,0.3l-0.2,1.4 l-0.9,0.3l-0.1,0.6l-1.6,0.6l-2.2-0.1l-0.6,1.4l-0.3,0.8l0.7,2.1l2.6,1.6l1.9,0.7l4.1-0.8l0.3-1.2l1.9-0.2l2.3-1l0.6,0.4l2.2-0.7 l1-1.5l1.6-0.4l5.5,1.9l1-0.6l0.7-2.5L1087.4,260.9L1087.4,260.9z"
                                id="map-map-country-SK"
                                data-id="SK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1059.4,277l-1.2-2.1l-0.8-0.1l-0.9,1.1l-4.3,0.1l-2.4,1.4l-4.2-0.4l-0.3,3l1.4,2.7l-1.1,0.5l3.5,0.2l0.8-1l1.8,1 l2,0.1l-0.2-1.7l1.7-0.6l0.3-2.5L1059.4,277L1059.4,277z"
                                id="map-map-country-SI"
                                data-id="SI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1909.1,646.4l-0.2-0.2l-0.1-0.4h-0.3l-0.3,0.1l0.2,0.6h0.2L1909.1,646.4L1909.1,646.4z M1873.5,647.2l-0.1-0.2 l-0.5-0.4l-1.9-1.3l-0.4-0.1l-0.1,0.1l-0.1,0.3l0.1,0.2l0.5,0.1v0.1l0.3,0.2l0.7,0.2l0.4,0.3l0.1,0.5l0.3,0.1l0.3,0.1L1873.5,647.2 L1873.5,647.2z M1905.5,640.6L1905.5,640.6l0.2-0.4l-0.2-0.1l-0.5-0.1l-0.7,0.1l-0.3,0.2l-0.2,0.3h-0.2v0.2l0.1,0.4l0.2-0.1l0.2,0.1 l0.5-0.5h0.3h0.1L1905.5,640.6L1905.5,640.6z M1881.1,638.3l-0.1-0.2l-0.2-0.1l-0.9-0.7l-0.5-0.2h-0.5l-0.1,0.5v0.3h0.6l0.4,0.2v0.6 l0.2,0.2v0.5l1.2,0.9l0.7,0.4l0.7,0.1l0.4,0.2l0.5-0.1l0.5,0.2l0.4-0.1l-0.4-0.3v-0.4l-0.5-1.3l-0.3-0.3l-0.5,0.1l-0.5-0.2h-0.4 L1881.1,638.3L1881.1,638.3z M1880.7,633.4l-0.6-1.6l-0.2-0.1l0.1,0.6l0.1,0.4l-0.1,0.5l-0.1,0.6l0.2,0.2l0.2-0.2l0.4,0.5v-0.2 V633.4z M1870.9,631.2l-0.3-0.1l-0.4,0.3l-0.1,0.3l-0.1,0.7v0.4l0.3,0.7l0.3,0.5l0.3,0.3l0.2,0.2l0.9,0.1l1.7,0.1l0.9,0.4l0.9,0.2 l0.4-0.1l0.5-0.2l0.1-0.1l-0.1-0.6l-0.2-0.3l-0.4-0.2l-0.2-0.6l-0.5-0.4l-0.9-0.7h-1.6l-0.6,0.1L1870.9,631.2L1870.9,631.2z M1873.5,629.4l-0.5,0.2v0.3l0.4,0.1l0.4,0.2l0.1,0.3l0,0l0.2-0.1l0.4,0.2l0.2-0.3l-0.4-0.5l-0.4-0.3h-0.1L1873.5,629.4 L1873.5,629.4z M1867.9,630.2l0.3-0.2v-0.4h-0.3l-0.1-0.2h-0.2l-0.3,0.2l-0.2,0.3l0.1,0.2h0.4L1867.9,630.2L1867.9,630.2 L1867.9,630.2z M1859.5,627.9l-0.1-0.2l-0.3-0.2h-0.2l-0.5,0.1l0.1,0.1l0.6,0.3l0.3,0.1L1859.5,627.9L1859.5,627.9z M1862.6,628.3 l0.3-0.2l-0.1-0.2l-0.1-0.5l-0.4,0.7l0.1,0.2H1862.6z M1862.1,627.4v-0.2V627l-0.2-0.1l0.4-0.3l-0.1-0.1l-0.6-0.2l-0.2,0.2l-0.2,0.1 l-0.1,0.1l-0.1,0.1l-0.1,0.5l0.2,0.4l0.4,0.2L1862.1,627.4L1862.1,627.4z M1858.1,627.6l-0.3-0.4l0.1-0.5l0.2-0.1l0.2-0.5l-0.1-0.4 l-0.2,0.1l-0.7,0.6l-0.1,0.3l0.6,0.8L1858.1,627.6L1858.1,627.6L1858.1,627.6z M1871.1,626.3l-0.2-0.4v-0.2l-0.3-0.2l-0.2,0.1 l-0.1,0.3l0.1,0.2l0.4,0.3L1871.1,626.3L1871.1,626.3z M1877.1,625.1h-0.2l-0.1,0.1h-0.2h-0.3l-0.1,0.2l0.6,1.1l-0.3,0.5l0.4,2.2 l0.4,1.2l0.8,0.8v0.2l0.8,0.5l0.6,1.3l0.2,0.1l0.1-0.2v-0.6l-0.5-1.1l0.1-0.8l-0.2-0.3V630l-0.2-0.8l-0.6-0.7l-0.3-0.1l-0.2-0.3 l0.2-0.6l0.2-0.2l0.1-0.3L1877.1,625.1L1877.1,625.1z M1860.5,624.6l-0.6-0.2l-0.2-0.3v-1l-0.6-0.3l-0.3,0.2l-0.6,0.7l-0.2,0.4 l-0.5,0.3l-0.1,0.3v0.4l0.4,0.1l0.3-0.4l0.9-0.1l0.3,0.1v0.4l0.1,0.7l0.3,0.3l0.5,0.2l0.4,0.6l0.1-0.3h0.2l0.2-0.4l-0.3-1.2 L1860.5,624.6L1860.5,624.6z M1854,624.2l0.1-0.5l-0.1-0.9l-0.2,0.1v0.2l-0.1,0.4L1854,624.2L1854,624.2z M1857.2,623.8l0.2-0.2 v-0.4v-0.5l-0.2-0.4l-0.2-0.2l-0.5,0.1l-0.4,0.5v0.5l0.4,0.6L1857.2,623.8L1857.2,623.8L1857.2,623.8z M1854.6,622.6l0.2-0.3 l0.5-0.7l0.1-0.3l-0.5-0.2l-0.4-0.5l-0.4-0.2l-0.3,0.4v0.4l0.5,0.6l-0.1,0.4l0.2,0.1l0.1,0.4L1854.6,622.6L1854.6,622.6z M1872.1,626.5l-0.1-0.5l-0.3-0.4l0.4-0.5l-2.2-1.9l-0.3-0.2l-0.4-0.1l-0.5-0.4l-0.5-0.1l-0.5-0.4l-0.2-0.3l-0.6-0.4l-0.6-0.8 l-1.5-0.3l0.1,0.2l0.4,0.4l0.1,0.7l0.5,0.4l0.5,0.6l0.2,0.1l0.2,0.2l0.4,0.5l0.8,0.4l0.8,0.6l0.3,0.1l0.3,0.3l1.5,0.7l0.5,0.7 L1872.1,626.5L1872.1,626.5L1872.1,626.5z M1850.3,617.3l0.2-0.3l-0.7-0.5l-0.2,0.3l-0.2,0.5l0.4,0.2L1850.3,617.3L1850.3,617.3z M1859.4,618.8L1859.4,618.8l-0.4-0.1l-0.4-0.2l-0.7-0.8l-0.2-0.3l-0.2-1l-0.4-0.4l-1.4-0.8l-0.8-0.8l-0.7-0.2l-0.2,0.2v0.5l0.2,0.3 l1,0.9l1.1,1.7l1,1l0.8,0.1h0.4v0.1l0.1,0.2l0.5,0.2l0.5-0.4L1859.4,618.8L1859.4,618.8z"
                                id="map-map-country-SB"
                                data-id="SB"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1223.4,505.7l-2.6-2.7l-1.2-2.6l-1.8-1.2l-2,3.4l-1.1,2.3l2.2,3.5l2.1,3.1l2.2,2.2l18.5,7.6l4.8-0.1l-15.4,19.1 l-7.4,0.3l-4.9,4.5l-3.6,0.1l-1.5,2l-4.8,7.2l0.2,23.2l3.3,5.3l1.3-1.5l1.3-3.4l6.1-7.7l5.3-4.8l8.3-6.4l5.6-5.1l6.4-8.7l4.7-7.1 l4.6-9.3l3.2-8.2l2.5-7.1l1.3-6.8l1.1-2.3l-0.2-3.4l0.4-3.7l-0.2-1.7h-2.1l-2.6,2.2l-2.9,0.6l-2.5,0.9l-1.8,0.2l0,0l-3.2,0.2 l-1.9,1.1l-2.8,0.5l-4.8,1.9l-6.1,0.8l-5.2,1.6L1223.4,505.7L1223.4,505.7z"
                                id="map-map-country-SO"
                                data-id="SO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1148.2,713.7l-2.9-0.6l-1.9,0.8l-2.6-1.1l-2.2-0.1l-8,4.7l-5.2,4.7l-2,4.3l-1.7,2.4l-3,0.5l-1.2,3l-0.6,2l-3.6,1.5 l-4.4-0.3l-2.5-1.8l-2.3-0.8l-2.7,1.5l-1.5,3.1l-2.7,1.9l-2.8,2.8l-4,0.7l-1.1-2.3l0.7-3.8l-3-6.1l-1.4-1l-1.1,23.6l-5,3.2l-2.9,0.5 l-3.3-1.2l-2.4-0.5l-0.8-2.7l-2.1-1.8l-2.7,3.2l3.5,8.2v0.1l2.5,5.3l3.2,6l-0.2,4.8l-1.7,1.2l1.4,4.2l-0.2,3.8l0.6,1.7l0.3-0.9 l2.1,2.9l1.8,0.1l2.1,2.3l2.4-0.2l3.5-2.4l4.6-1l5.6-2.5l2.2,0.3l3.3-0.8l5.7,1.2l2.7-1.2l3.2,1l0.8-1.8l2.7-0.3l5.8-2.5l4.3-2.9 l4.1-3.8l6.7-6.5l3.4-4.6l1.8-3.2l2.5-3.3l1.2-0.9l3.9-3.2l1.6-2.9l1.1-5.2l1.7-4.7h-4.1l-1.3,2.8l-3.3,0.7l-3-3.5l0.1-2.2l1.6-2.4 l0.7-1.8l1.6-0.5l2.7,1.2l-0.4-2.3l1.4-7.1l-1.1-4.5L1148.2,713.7L1148.2,713.7z M1128.1,766.5l-2,0.6l-3.7-4.9l3.2-4l3.1-2.5 l2.6-1.3l2.3,2l1.7,1.9l-1.9,3.1l-1.1,2.1l-3.1,1L1128.1,766.5L1128.1,766.5z"
                                id="map-map-country-ZA"
                                data-id="ZA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1637.3,331.7l6.2,5.5l-3.4,1.1l5.2,6.8l1.1,4.8l2.1,3.5l4.5-0.5l3.2-2.7l4.2-1.2l0.5-3.6l-3.4-7.5l-3.3-4.2 l-8.2-7.6l0.1,1.6l-2.1,0.4l-3.5,0.3l-0.7,2.9l-2.4-0.2L1637.3,331.7L1637.3,331.7z"
                                id="map-map-country-KR"
                                data-id="KR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1166,508.7l-0.7-2.2l-2.9-2.5l-0.8-4.6l0.5-4.7l-2.6-0.5l-0.3,1.5l-3.4,0.3l1.4,1.8l0.6,3.9l-3,3.5l-2.7,4.5 l-2.8,0.7l-4.8-3.7l-2.1,1.3l-0.5,1.9l-2.9,1.2l-0.2,1.3h-5.5l-0.8-1.3l-4.1-0.3l-2,1.1l-1.5-0.5l-3-3.7l-1-1.8l-4,0.9l-1.5,2.9 l-1.3,5.7l-1.9,1.2l-1.7,0.7l3.8,2.5l3.1,2.6l0.1,2l3.8,3.4l2.4,2.7l1.5,3.8l4.2,2.5l0.9,2.1l3.5,5.2l2.5,0.8l1.5-1.1l2.6,0.4 l3.1-1.3l1.4,2.7l5,4.2l0,0l2.3-1.7l3.5,1.4l4.5-1.5l4,0.1l3.4-3l3.4-3.8l3.8-4.2l-3.5-6.9l-2.6-1.5l-1-2.5l-2.9-3.1l-3.4-0.5 l1.8-3.6l3-0.1l0.8-2l-0.2-5l-0.8-0.1L1166,508.7L1166,508.7z"
                                id="map-map-country-SS"
                                data-id="SS"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M888.3,390.4l1-0.1v0.3l-1.2,1l-0.5,1.4l-0.4,0.6l-0.3,0.2l-0.6,0.2l-0.7-0.9l-0.4-1l-0.2-0.3l0.4-0.2h0.5l1-0.1 l0.3-0.1L888.3,390.4z M883.3,392.7h-0.2l-0.2,0.2l-0.2,0.4l0.3,0.5l0.2,0.1h0.2l0.5-0.4v-0.2l-0.1-0.3L883.3,392.7z M880.6,389 l-0.3-0.4h-0.7l-0.4,0.6l0.6,1.2l0.1,0.5h0.1l0.5-0.5l0.1-0.3l-0.1-0.5l0.2-0.2L880.6,389z M878.7,395.5h-0.6l0.1,0.2l0.1,0.2 l0.7,0.4l0.6-1.1l-0.2-0.2L878.7,395.5z M901.1,389.3l-0.3,0.2l-0.1,0.6l-0.7,1.3l-0.5,1.2l-0.7,0.6l-0.7,0.2l0.1,0.1l0.7,0.1 l0.8-0.7l1.5-0.5l0.3-1l0.3-1.1v-0.7l-0.3-0.3L901.1,389.3L901.1,389.3z M893.1,393.1L893.1,393.1L893.1,393.1h-0.2l-1.3-0.1 l-0.2,0.6l-0.5,0.4v0.7l0.5,0.7l0.3,0.1l0.5,0.1l0.7-0.4l0.2-0.4l0.1-0.8l-0.1-0.4V393.1z M994.3,318.7l-0.3-0.1l-0.5,0.2l-0.5-0.2 l0.1-0.3l0.1-0.2l0.1-0.1l-0.2-0.2v-0.1l0.2-0.2l-0.2-0.1l-1.3,0.4l-0.7,0.4l-2.1,1.5v0.3l0.1,0.2h0.4l0.2,0.4l0.4-0.4l0.3-0.1 l0.3,0.1l0.3,0.2l0.1,0.6l0.1,0.2l0.6,0.1l0.9,0.4l0.4-0.2l0.5-0.3l0.2-0.6l0.3-0.5l0.3-0.5l0.3-0.4l-0.1-0.4L994.3,318.7z M998.6,317.1l-0.9-0.3l-1,0.1l-0.1,0.1v0.4l0.1,0.1l0.6,0.1l1.6,0.7h0.1l0.1-0.4v-0.1L998.6,317.1z M992,301.9l-6,0.8l-1.3-0.7 l-0.2,0.1h-0.4l-0.1-0.2v-0.2l-3.7-1.8l-1.9,1.3l-9.4-2.8l-2-2.4l-8.2-0.2l-4.2,0.3l-5.4-1h-6.8l-6.2-1.1l-7.4,4.5l2,2.6l-0.4,4.4 l1.9-1.6l2.1-0.9l1.2,3.1h3l0.9-0.8l3,0.2l1.3,3.1l-2.4,1.7l-0.2,4.9l-0.9,0.9l-0.3,3l-2.2,0.5l2,3.8l-1.6,4.3l1.8,1.9l-0.8,1.7 l-2,2.5l0.4,2.1l4.8,1l1.4,3.7l2,2.2l2.5,0.6l2.1-2.5l3.3-2.3l5,0.1h6.7l3.8-5l3.9-1.3l1.2-4.2l3-2.9l-2-3.7l2-5.1l3.1-3.5l0.5-2.1 l6.6-1.3l4.8-4.2L992,301.9z M903.7,386.3l-0.2,0.4l-0.6,0.2l-0.8,0.4l-0.2,0.3l-0.2,0.9l0.4,0.1l0.3-0.4l0.9-0.3l0.5-0.3l0.1-0.9 l0.2-0.3l-0.2-0.3L903.7,386.3z M983.7,323.1l-0.2,0.3v0.3l-0.3,0.1l-0.1,0.4l0.1,0.2l0.8,0.1l0.2-0.4h0.3l0.6-0.7v-0.3l-0.3-0.2 L983.7,323.1z M984.2,325.1l-0.1,0.2l-0.1,0.2v0.2h0.5l0.4,0.1l0.1-0.1v-0.2h-0.5L984.2,325.1z"
                                id="map-map-country-ES"
                                data-id="ES"
                                class="svgMap-country"
                                fill="#f291dc"
                              ></path>
                              <path
                                d="M1432.2,532.7l2.3-1.8l0.6-6.6l-3-6.6l-2.9-4.5l-4.1-3.5l-1.9,10.3l1.4,9.1l2.8,5.1L1432.2,532.7L1432.2,532.7z"
                                id="map-map-country-LK"
                                data-id="LK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1180.8,468.5l0.4-4.2l1.6-2l4-1l2.6-3.6l-3.1-2.4l-2.2-1.6l-2.5-7.6l-1.1-6.5l1.1-1.2l-2.1-6.2h-21.8h-21.4h-22.1 l0.5,12.7h-6.3v2.7l1.1,25.2l-4.8-0.4l-2.4,4.7l-1.4,3.9l1.2,1.5l-1.8,1.9l0.7,2.7l-1.4,2.6l-0.5,2.4l2-0.4l1.2,2.5l0.1,3.7l2.1,1.8 v1.6l0.7,2.7l3.3,4v2.6l-0.8,2.6l0.3,2l2,1.8l0.5,0.3l1.7-0.7l1.9-1.2l1.3-5.7l1.5-2.9l4-0.9l1,1.8l3,3.7l1.5,0.5l2-1.1l4.1,0.3 l0.8,1.3h5.5l0.2-1.3l2.9-1.2l0.5-1.9l2.1-1.3l4.8,3.7l2.8-0.7l2.7-4.5l3-3.5l-0.6-3.9l-1.4-1.8l3.4-0.3l0.3-1.5l2.6,0.5l-0.5,4.7 l0.8,4.6l2.9,2.5l0.7,2.2v3.1l0.8,0.1v-0.7l1.4-6.7l2.6-1.8l0.5-2.6l2.3-4.8l3.2-3.2l2.1-6.2l0.7-5.5l-0.7-2.5L1180.8,468.5 L1180.8,468.5z"
                                id="map-map-country-SD"
                                data-id="SD"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M668,533.8l-4.6,0.5l-0.6,1.1l-6.7-1.2l-1,5.7l-3.5,1.6l0.3,1.5l-1.1,3.3l2.4,4.6l1.8,0.1l0.7,3.5l3.3,5.6l3.1,0.5 l0.5-1.3l-0.9-1.3l0.5-1.8l2.3,0.6l2.7-0.7l3.2,1.4l1.4-2.7l0.6-2.9l1-2.8l-2.1-3.7l-0.4-4.4l3.1-5.5L668,533.8L668,533.8z"
                                id="map-map-country-SR"
                                data-id="SR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1150.5,736.6l-2.7-1.2l-1.6,0.5l-0.7,1.8l-1.6,2.4l-0.1,2.2l3,3.5l3.3-0.7l1.3-2.8l-0.3-2.8L1150.5,736.6 L1150.5,736.6z"
                                id="map-map-country-SZ"
                                data-id="SZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1077.7,161.1l-1.9-2.2l-1.7-8.4l-7.2-3.7l-5.9-2.7l-2.5,0.3v3.5l-7.9-0.9l-0.6,3.1l-4-0.1l-2.2,3.9l-3.4,6.1 l-5.7,7.9l1.8,1.9l-1.3,2.2l-4.3-0.1l-2.3,5.3l1,7.6l3.1,2.9l-0.9,6.9l-3.4,4l-1.7,3.3l4.2,8.4l4.4,6.7l2,5.7l5.3-0.3l2.2-4.7 l5.7,0.5l2-5.5l0.6-10l4.6-1.3l3.3-6.6l-4.8-3.3l-3.6-4l2.1-8.1l7.7-4.9l6.1-4.5l-1.2-3.5l3.4-3.9L1077.7,161.1L1077.7,161.1z"
                                id="map-map-country-SE"
                                data-id="SE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1024.3,270.6l-5.4-1.9l-1,1.4h-4.2l-1.3,1l-2.3-0.6l0.2,1.6l-3.5,3.5v2.8l2.4-0.9l1.8,2.7l2.2,1.3l2.4-0.3l2.7-2.1 l0.9,1l2.4-0.2l0.9-2.5l3.8,0.8l2.1-1.1l0.3-2.5l-2.6-0.2l-2.3-1.1l0.7-1.6L1024.3,270.6L1024.3,270.6z"
                                id="map-map-country-CH"
                                data-id="CH"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1183.5,359.9l11-6.7l0.9-7.8l-1.2-4.7l2.7-1.6l2.1-4.1l-5.9,1.1l-2.8-0.2l-5.7,2.5h-4.3l-3-1.2l-5.5,1.8l-1.9-1.3 l0.1,3.6l-1.2,1.5l-1.2,1.4l-1,2.6l1.1,5l2.4,0.3l1.2,2.5l-2.6,2.4l-0.9,3.5l0.3,2.6l-0.6,1h0.1l6.3,2.5L1183.5,359.9L1183.5,359.9z "
                                id="map-map-country-SY"
                                data-id="SY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1642.3,427.2l1.2-10.2l0.1-3.9l-2.9-1.9l-3.3,4.8l-1.9,6.3l1.5,4.7l4,5.4L1642.3,427.2L1642.3,427.2z"
                                id="map-map-country-TW"
                                data-id="TW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1344.1,315.7l-2.1,0.2l-1.3-1.8l0.2-2.9l-6.4,1.5l-0.5,4l-1.5,3.5l-4.4-0.3l-0.6,2.8l4.2,1.6l2.4,4.7l-1.3,6.6 l1.8,0.8l3.3-2.1l2.1,1.3l0.9-3l3.2,0.1l0.6-0.9l-0.2-2.6l1.7-2.3l3.2,1.5v2l1.6,0.3l1,5.4l2.6,2.1l1.5-1.3l2.1-0.7l2.5-2.9l3.8,0.5 h5.4l-1.8-3.7l-0.6-2.5l-3.5-1.4l-1.6,0.6l-3-5.9l-9.5,0.9l-7.1-2l-5.4,0.5l-0.6-3.7l5.9,1.1L1344.1,315.7L1344.1,315.7z"
                                id="map-map-country-TJ"
                                data-id="TJ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1149.6,578.6l-2,0.8l2.3,3.6l-0.4,3.7l-1.6,0.8l0,0l0.3,2.5l1.2,1.5v2l-1.4,1.4l-2.2,3.3l-2.1,2.3l-0.6,0.1 l-0.3,2.7l1.1,0.9l-0.2,2.7l1,2.6l-1.3,2.4l4.5,4.3l0.3,3.9l2.7,6.5l0,0l0.3,0.2l2.2,1.1l3.5,1.1l3.2,1.9l5.4,1.2l1.1,1.7l0,0 l0.4-1.2l2.8,3.4l0.3,6.7l1.8,2.4v0.1l2.1-0.3l6.7,1.8l1.4-0.8l3.9-0.1l2.1-1.9l3.3,0.1l6.2-2.5l4.6-3.7l0,0l-2-1.4l-2.2-6.3 l-1.8-3.9l0.4-3.1l-0.3-1.9l1.7-3.9l-0.2-1.6l-3.5-2.3l-0.3-3.6l2.8-7.9l-8-6.3l-0.4-3.7l-20.2-13l0,0l-2.8,2.8l-1.9,2.9l2.2,2.2 l-3.2,1.6l-0.7-0.8l-3.2,0.4l-2.5,1.4l-1.6-2.4l1.1-4.5l0.2-3.8l0,0l0,0L1149.6,578.6L1149.6,578.6z"
                                id="map-map-country-TZ"
                                data-id="TZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1562.7,481.4l1.5-2.9l-0.5-5.4l-5.2-5.5l-1.3-6.3l-4.9-5.2l-4.3-0.4l-0.8,2.2l-3.2,0.2l-1.8-1.2l-5.3,3.8l-1-5.7 l0.4-6.7l-3.8-0.3l-0.9-3.8l-2.6-1.9l-3,1.4l-2.8,2.8l-3.9,0.3l-1.5,6.9l-2.2,1.1l3.5,5.6l4.1,4.6l2.9,4.2l-1.4,5.6l-1.7,1.1 l1.7,3.2l4.2,5.1l1,3.5l0.2,3l2.8,5.8l-2.6,5.9l-2.2,6.6l-1.3,6.1l-0.3,3.9l1.2,3.6l0.7-3.8l2.9,3.1l3.2,3.5l1.1,3.2l2.4,2.4 l0.9-1.1l4.7,2.8l0.6,3.3l3.7-0.8l1.7-2.6l-3.1-3.3l-3.4-0.8l-3.3-3.6l-1.4-5.5l-2.6-5.8l-3.7-0.2l-0.7-4.6l1.4-5.6l2.2-9.3l-0.2-7 l4.9-0.1l-0.3,5l4.7-0.1l5.3,2.9l-2.1-7.7l3-5.2l7.1-1.3L1562.7,481.4L1562.7,481.4z"
                                id="map-map-country-TH"
                                data-id="TH"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1676.8,631.9l4.9-1.8l6-2.8l2.2-1.7l-2-0.8l-1.8,0.8l-4,0.2l-4.9,1.4l-0.8,1.5l0.5,1.3L1676.8,631.9L1676.8,631.9z "
                                id="map-map-country-TL"
                                data-id="TL"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M981.7,502.2l-4.9-0.1l-0.4,1.9l2.4,3.3l-0.1,4.6l0.6,5.1l1.4,2.3l-1.2,5.7l0.4,3.2l1.5,4l1.2,2.2l4.6-1.3l-1.4-4.4 l0.2-14.6l-1.1-1.3l-0.2-3.1l-2-2.3l-1.7-1.9L981.7,502.2L981.7,502.2z"
                                id="map-map-country-TG"
                                data-id="TG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M13.3,707.7L13.3,707.7l-0.2,0.3v0.2l0.4,0.4L13.3,707.7z M11.7,706.8h-0.2H11.7l-0.4-0.3h-0.4l-0.2-0.1v-0.2 l-0.2,0.3l0.2,0.3l0.9,0.4l0.3,0.2l0.2-0.6v-0.2l-0.3,0.1v0.1H11.7z M14.2,690.8l0.1-0.2v-0.2l-0.3-0.1h-0.1l-0.3,0.5l0.1,0.1 l0.3,0.2h0.1L14.2,690.8z"
                                id="map-map-country-TO"
                                data-id="TO"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M635.4,507.7l0.1-0.2v-0.6l0.2-0.4l-0.2-0.4l-0.1-0.6l0.1-0.5v-0.7l0.2-0.3l0.5-0.8h-0.9l-0.6,0.2l-1.1,0.1 l-0.5,0.2l-0.7,0.1L632,504l0.1,0.1l0.5,0.2l0.2,0.2l0.1,0.2l0.1,0.4l-0.3,1.7l-0.1,0.1L632,507l-0.2,0.3l-1.4,0.8l0.8-0.1l0.9,0.1 l2.4-0.1L635.4,507.7L635.4,507.7z M637.2,501l1.2-0.5l0.1-0.4h-0.2l-0.8,0.3l-0.6,0.5v0.2L637.2,501z"
                                id="map-map-country-TT"
                                data-id="TT"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1038,361.4l-2-1l-1.5-3l-2.8-0.1l-1.1-3.5l3.4-3.2l0.5-5.6l-1.9-1.6l-0.1-3l2.5-3.2l-0.4-1.3l-4.4,2.4l0.1-3.3 l-3.7-0.7l-5.6,2.6l-1,3.3l1,6.2l-1.1,5.3l-3.2,3.6l0.6,4.8l4.5,3.8v1.5l3.4,2.6l2.6,11.3l2.6-1.4l0.4-2.7l-0.7-2.6l3.7-2.5l1.5-2 l2.6-1.8L1038,361.4L1038,361.4z"
                                id="map-map-country-TN"
                                data-id="TN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1166.6,308.9l-9.7-4.4l-8.5,0.2l-5.7,1.7l-5.6,4l-9.9-0.8l-1.6,4.8l-7.9,0.2l-5.1,6.1l3.6,3l-2,5l4.2,3.6l3.7,6.4 l5.8-0.1l5.4,3.5l3.6-0.8l0.9-2.7l5.7,0.2l4.6,3.5l8-0.7l3.1-3.7l4.6,1.5l3.2-0.6l-1.7,2.4l2.3,3l1.2-1.4l1.2-1.5l-0.1-3.6l1.9,1.3 l5.5-1.8l3,1.2h4.3l5.7-2.5l2.8,0.2l5.9-1.1l2.1-1l6.2,0.9l2.1,1.6l2.3-1.1l0,0l-3.7-5.2l0.7-2l-2.9-7.3l3.3-1.8l-2.4-1.9l-4.2-1.5 v-3.1l-1.3-2.2l-5.6-3l-5.4,0.3l-5.5,3.2l-4.5-0.6l-5.8,1L1166.6,308.9L1166.6,308.9z M1117,312.9l2-1.9l6.1-0.4l0.7-1.5l-4.7-2 l-0.9-2.4l-4.5-0.8l-5,2l2.7,1.6l-1.2,3.9l-1.1,0.7l0.1,1.3l1.9,2.9L1117,312.9L1117,312.9z"
                                id="map-map-country-TR"
                                data-id="TR"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1325.6,334.2l-0.8-4l-7.7-2.7l-6.2-3.2l-4.2-3l-7-4.4l-4.3-6.4l-2-1.2l-5.5,0.3l-2.3-1.3l-1.9-4.9l-7.8-3.3 l-3.3,3.6l-3.8,2.2l1.6,3.1l-5.8,0.1l-2.5,0.3l-4.9-4.9l-3.8-1.7l-5.5,1.3l-1.8,2l2.5,4l-0.5-4.5l3.7-1.6l2.4,3.6l4.6,3.7l-4,2 l-5.3-1.5l0.1,5.2l3.5,0.4l-0.4,4.4l4.5,2.1l0.7,6.8l1.8,4.5l4.4-1.2l3-3.7l3.5,0.2l2.1-1.2l3.8,0.6l6.5,3.3l4.3,0.7l7.3,5.7 l3.9,0.2l1.6,5.5l5.9,2.4l3.9-0.8l0.4-3l4-0.9l2.5-2l-0.1-5.2l4.1-1.2l0.3-2.3l2.9,1.7L1325.6,334.2L1325.6,334.2z"
                                id="map-map-country-TM"
                                data-id="TM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M578.7,433.1l-0.1,0.4v0.2l0.2,0.1l0.6-0.1l0.1-0.1l0.2-0.1v-0.1l-0.4,0.1L578.7,433.1z M582.3,433.7l0.2-0.2 l-0.2-0.2l-0.7-0.2l-0.2,0.1v0.3h0.6L582.3,433.7L582.3,433.7L582.3,433.7z M581.2,433.2l-0.1-0.1l-0.1-0.6h-0.5v0.2l0.1,0.2h0.1 l0.1,0.2l0.3,0.2L581.2,433.2L581.2,433.2z"
                                id="map-map-country-TC"
                                data-id="TC"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1167.6,545.1l-3.4,3l-4-0.1l-4.5,1.5l-3.5-1.4l-2.3,1.7l0,0l-0.3,7.5l2.3,0.8l-1.8,2.3l-2.2,1.7l-2.1,3.3l-1.2,3 l-0.3,5.1l-1.3,2.4l-0.1,4.8l1.4,0.6l3.3-1.9l2-0.8l6.2,0.1l0,0l-0.3-2.5l2.6-3.7l3.5-0.9l2.4-1.5l2.9,1.2l0.3,0.5v-0.3l1.6-2.6 l2.7-4.2l2.1-4.7l-2.6-7.3l-0.7-3.2L1167.6,545.1L1167.6,545.1z"
                                id="map-map-country-UG"
                                data-id="UG"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1138.5,241l-4.8,0.5l-1.5-0.3l-1,1.4l-1.8-0.2l0,0l-4.1,0.3l-1.2,1.4l0.2,3.1l-2-0.6l-4.3,0.3l-1.5-1.5l-1.6,1.1 l-2-0.9l-3.8-0.1l-5.6-1.5l-5-0.5l-3.7,0.2l-2.4,1.6l-2.2,0.3l3.1,5.3l-0.3,1.8l-2.3,0.7l-3.8,5.1l1.6,2.8l-1.1-0.4l-1.1,1.7 l-0.7,2.5l2.9,1.7l0.6,1.6l1.9-1.3l3.2,0.7h3.2l2.4,1.5l1.6-0.9l3.6-0.6l1-1.5h2.1l1.1-0.9l3.2-0.6l3.9,1.9l2,0.3l2.5,1.6v2.1 l1.9,1.1l1.1,2.6l2,1.5l-0.2,1l1,0.6l-1.2,0.5l-3-0.2l-0.6-0.9l-1,0.5l0.5,1.1l-1.1,2l-0.5,2.1l-1.2,0.7l2.4,1.1l2.2-1l2.4,1.1 l3.3-4.6l1.3-3.4l4.5-0.8l0.7,2.4l8,1.5l1.7,1.4l-4.5,2.1l-0.7,1.2l5.8,1.8l-0.6,2.9l3,1.3l6.3-3.6l5.3-1.1l0.6-2.2l-5.1,0.4 l-2.7-1.5l-1-3.9l3.9-2.3l4.6-0.3l3-2l3.9-0.5l-0.4-2.8l2.2-1.7l4.7-0.5l0.3-2.1l-1.8-3.4l1.3-3.2l-0.4-1.9l-7.6-2l-2.9,0.1 l-3.6-2.9l-3.5,1l-6.6-2.2l-0.2-1.2l-2.2-2.7l-4-0.2l-0.7-1.9l0.9-1.3L1138.5,241L1138.5,241z"
                                id="map-map-country-UA"
                                data-id="UA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1283.9,408.6l-1.3-2.2l-3,3.9l-3.7,4.1l-3.3,4.3l-3.3-0.2l-4.6-0.2l-4.2,1l-0.3-1.7l-1,0.3l0.4,1.5l2.6,6.4 l16.8,3.2l1-1.3l-0.1-2.6l1.4-2.6l-0.3-2.6l2.4-1.3l-1.1-0.8l0.1-4.2h2.8L1283.9,408.6L1283.9,408.6z"
                                id="map-map-country-AE"
                                data-id="AE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M950,227.5l-4.9-3.7l-3.9,0.3l0.8,3.2l-1.1,3.2l2.9-0.1l3.5,1.3L950,227.5z M963,203.2l-5.5,0.5l-3.6-0.4l-3.7,4.8 l-1.9,6.1l2.2,3l0.1,5.8l2.6-2.8l1.4,1.6l-1.7,2.7l1,1.6l5.7,1.1h0.1l3.1,3.8l-0.8,3.5l0,0l-7.1-0.6l-1,4l2.6,3.3l-5.1,1.9l1.3,2.4 l7.5,1l0,0l-4.3,1.3l-7.3,6.5l2.5,1.2l3.5-2.3l4.5,0.7l3.3-2.9l2.2,1.2l8.3-1.7l6.5,0.1l4.3-3.3l-1.9-3.1l2.4-1.8l0.5-3.9l-5.8-1.2 l-1.3-2.3l-2.9-6.9l-3.2-1l-4.1-7.1l-0.4-0.6l-4.8-0.4l4.2-5.3l1.3-4.9h-5l-4.7,0.8L963,203.2L963,203.2z"
                                id="map-map-country-GB"
                                data-id="GB"
                                class="svgMap-country"
                                fill="#ed81d4"
                              ></path>
                              <path
                                d="M116.7,450.7l2-0.9l2.5-1.4l0.2-0.4l-0.9-2.2l-0.7-0.8l-0.8-0.6l-1.9-1.1l-0.4-0.1l-0.4,0.6v1.3l-1.2,1l-0.4,0.7 l0.4,2.3l-0.6,1.8l1.2,0.9L116.7,450.7L116.7,450.7z M116.1,440.8l0.6-0.7l-1.2-1l-1.8-0.6L113,439v0.4l0.5,0.5l0.6,1.4L116.1,440.8 L116.1,440.8z M113.1,437.4l-2.6-0.2l-0.6,0.7l2.9,0.2L113.1,437.4z M108.4,436.5l-1.1-2.1L107,434l-1.7,0.9l0.1,0.2l0.4,1.5 l1.8,0.2l0.4,0.1L108.4,436.5L108.4,436.5z M100.1,432.3l0.3-1.5l-1.3-0.1l-1,0.6l-0.4,0.5l1.6,1.1L100.1,432.3z M512.2,259.1h-1.6 l-1.3,2.4h-10.1h-16.8h-16.7h-14.8h-14.7h-14.5h-15h-4.8h-14.6h-13.9l-1.6,5.1l-2.4,5.1l-2.3,1.6l1.1-5.9l-5.8-2.1l-1.4,1.2 l-0.4,2.9l-1.8,5.4l-4.2,8.3l-4,5.6l-4,5.6l-5.4,5.8l-1.1,4.7l-2.8,5.3l-3.9,5.2l1,3.4l-1.9,5.2l1.5,5.4l1.3,2.2l-0.8,1.5l0.4,9 l2.5,6.5l-0.8,3.5l1,1l4.6,0.7l1.3,1.7l2.8,0.3l-0.1,1.9l2.2,0.7l2.1,3.7l-0.3,3.2l6.3-0.5l7-0.7l-1,1.3l7.1,3.1l10.7,4.4H391h4.3 l0.8-2.6h9.3l1.3,2.2l2.1,2l2.4,2.8l0.8,3.3l0.4,3.5l2.2,1.9l4,1.9l4.8-5l4.4-0.1l3.1,2.5l1.6,4.4l1,3.7l2.4,3.6l0.2,4.5l0.8,3 l3.9,2l3.6,1.4l2.1-0.2l-0.6-2.2l0.4-3.1l1-4.4l1.9-2.8l3.7-3.1l6-2.7l6.1-4.7l4.9-1.5l3.5-0.4l3.5,1.4l4.9-0.8l3.3,3.4l3.8,0.2 l2.4-1.2l1.7,0.9l1.3-0.8l-0.9-1.3l0.7-2.5l-0.5-1.7l2.4-1l4.2-0.4l4.7,0.7l6.2-0.8l3,1.5l2,3l0.9,0.3l6.1-2.9l1.9,1l3,5.3l0.8,3.5 l-2,4.2l0.4,2.5l1.6,4.9l2,5.5l1.8,1.4l0.4,2.8l2.6,0.8l1.7-0.8l2-3.9l0.7-2.5l0.9-4.3l-1.2-7.4l0.5-2.7l-1.5-4.5l-0.7-5.4l0.1-4.4 l1.8-4.5l3.5-3.8l3.7-3l6.9-4.1l1.3-2.2l3.3-2.3l2.8-0.4l4.4-3.8l6-1.9l4.6-4.8l0.9-6.5l0.1-2.2l-1.4-0.4l1.5-6.2l-3-2.1l3.2,1v-4.1 l1.9-2.7l-1,5.3l2,2.5l-2.9,4.4l0.4,0.2l4.4-5.1l2.4-2.5l0.6-2.5l-0.9-1.1l-0.1-3.5l1.2,1.6l1.1,0.4l-0.1,1.6l5.2-4.9l2.5-4.5 l-1.4-0.3l2.1-1.8l-0.4,0.8h3.3l7.8-1.9l-1.1-1.2l-7.9,1.2l4.8-1.8l3.1-0.3l2.4-0.3l4.1-1.1l2.4,0.1l3.8-1l1-1.7l-1.1-1.4l-0.2,2.2 L615,306l-0.6-3.3l1.1-3.3l1.4-1.3l3.9-3.7l5.9-1.8l6-2.1l6.3-3l-0.2-2l-2.1-3.5l2.8-8.5l-1.5-1.8l-3.7,1.1l-1.1-1.7l-5.5,4.7 l-3.2,4.9l-2.7,2.8l-2.5,0.9l-1.7,0.3l-1,1.6h-9.3h-7.7l-2.7,1.2l-6.7,4.2l0.2,0.9l-0.6,2.4l-4.6,2l-3.9-0.5l-4-0.2l-2.6,0.7 l-0.3,1.8l0,0l-0.1,0.6l-5.8,3.7l-4.5,1.8l-2.9,0.8l-3.7,1.7l-4,0.9l-2.5-0.3l-2.7-1.3l2.7-2.4l0,0l2-2.2l3.7-3.4l0,0l0,0l0.7-2.5 l0.5-3.5l-1.6-0.7l-4.3,2.8l-0.9-0.1l0.3-1.5l3.8-2.5l1.6-2.8l0.7-2.8l-2.7-2.4l-3.7-1.3l-1.7,2.4l-1.4,0.6l-2.2,3.1l0.4-2.1 l-2.6,1.5l-2.1,2l-2.6,3.1l-1.3,2.6l0.1,3.8l-1.8,4l-3.3,3l-1.4,0.9l-1.6,0.7h-1.8l-0.3-0.4l-0.1-3.3l0.7-1.6l0.7-1.5l0.6-3l2.5-3.5 l2.9-4.3l4.6-4.7h-0.7l-5.4,4l-0.4-0.7l2.9-2.3l4.7-4l3.7-0.5l4.4-1.3l3.7,0.7h0.1l4.7-0.5l-1.5-2.5l0,0l-1.2-0.2l0,0l0,0l-1.4-0.3 l-0.4-1.7l-5.1,0.5l-5,1.4l-2.5-2.3l-2.5-0.8l3.1-3.3l-5.3,2l-4.9,2.1l-4.6,1.5l-2.1-2.1l-5.5,1.3l0.4-0.9l4.6-2.6l4.7-2.5l5.9-2.1 l0,0l0,0l-5.3-1.6l-4.4,0.8l-3.8-1.9l-4.6-1l-3.2-0.4l-1-1L512.2,259.1L512.2,259.1z M271.6,212.2l6.9-2.8v-1.8l-2.6-0.4l-3.4,0.9 l-6.4,2.1l-2.2,2.7l0.7,1.6L271.6,212.2z M232.9,195.8l2.3-2.3l-2.9-0.5l-5.7,1l0.8,1.6l1.6,1.1L232.9,195.8L232.9,195.8z M234.1,173.5l-3.1,2.2l0.4,0.5l4.2-0.4l0.3,1.1l1.7,1.2l4.9-1.2l1.2-0.6l-3.3-0.8l-1.6-1.5l-3.4,0.6L234.1,173.5L234.1,173.5z M359,133.3l-4.4-1.1l-10.2,2.8l-3.2-0.3l-11,2.3l-4.8,0.6l-7.8,2.5l-4.8,2.6l-8.6,2.5l-7.6,0.1l-6.3,2.9l3.2,1.7l0.7,2.3l-0.8,2.7 l2.3,2.1l-1.2,3.5l-9.2,0.2l4.3-2.8h-3.4l-13.1,2.7l-9.1,2.3l1,3.3l-1.2,2.2l4.5,1.4l6.9-0.7l1.8,1.3l2.9-1.3l6.1-1.2h2.7l-5.9,2.1 l1.1,1l-2.5,2.6l-5.5,1.8l-2.5-0.5l-7,2.7l-1.8-0.9l-4.1,0.4l-5.3,3l-7.6,3.1l-5.8,3.4l0.3,2.4l-4,3.3l1.4,1.4l0.5,2.7l7.2-1.1 l0.4,2.1l-3.3,2.1l-3.6,3.5h2.8l7.2-2.3l-1.6,2.9l3.6-2.1l-0.4,3l4.8-2.2l0.4,1.1l7.2-1.8l-6.2,3.4l-5.7,4.5l-5.7,2.1l-2.3,1.2 l-10.3,3.6l-4.9,2.4l-6.5,0.7l-8.5,3.3l-6.6,1.8l-8.1,2.8l-0.4,1l10-1.7l6-2l6.9-2l6.1-1.7l2.8,0.5l8.1-2.6l4.5-2.8l10.5-3.1 l3.9-2.6l6.6-1.8l7.6-2.5l8.9-4.2l-0.2-2.9l11.1-4.1l7.4-3.9l9.2-3.2l-0.4,1.4l-6.7,1.8l-8.3,5.7l-3.2,3.5l6.4-1.3l6.1-1.9l6.5-1.3 l2.9-0.3l3.5-4.1l6.3-1.2l2.6,2.5l6,2.7l6.7-0.5l5.7,2l3.2,1.1l3.3,6.1l3.7,1.7l7.1,0.2l4.1,0.4l-2.7,5.5l1.6,4.9l-3.3,5.2l2.5,1.9 l0.6,2.2l0,0l5.1-2.9l3.1-3.7l-4.6-3.8l1.5-6.8l1.1-4.2l-1.7-2.7l-0.7-2.4l0.5-3l-6.4,1.9l-7.6,3.3l-0.2-3.9l-0.6-2.6l-2.7-1.6 l-4.2-0.1l35.4-32.4l24.3-20.2l0,0l0,0l-3.5-0.7l-4.1-1.6l-6.5,0.8l-2.2-0.7l-7.1-0.5l-6.2-1.6l-4.8,0.5l-4.9-0.9l2-1.2l-6.3-0.3 l-3.3,1L359,133.3L359,133.3z"
                                id="map-map-country-US"
                                data-id="US"
                                class="svgMap-country"
                                fill="#cb0c9f"
                              ></path>
                              <path
                                d="M617.9,458.9l-0.7,0.2l-0.1,0.4h1.1l0.7-0.3h-0.6L617.9,458.9L617.9,458.9z M618.8,455.4l-0.5-0.1l-0.2,0.2l0,0 l0.3,0.1L618.8,455.4z M617.7,455.5l-0.2-0.2l-0.3-0.1l-0.4,0.1l0.5,0.3L617.7,455.5L617.7,455.5z"
                                id="map-map-country-VI"
                                data-id="VI"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M692.5,787l-2.1-3.7l1.9-3l-3.8-4.3l-4.8-3.5l-6.2-4.1l-1.9,0.2l-6.2-4.9l-3.4,0.7l-0.5,5.1l-0.3,6.5l1.1,6.3 l-0.9,1.4l0.4,4.2l3.9,3.5l3.6-0.2l5.4,2.7l2.7-0.6l4.2,1.2l5.3-3.5L692.5,787L692.5,787z"
                                id="map-map-country-UY"
                                data-id="UY"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1339.8,303.1l-2.5,1.2l-5.4,4.3l-0.9,4.5h-1.9l-2.3-3l-6.6-0.2l-2.6-5l-2.5-0.1l-1.5-6.2l-7.5-4.5l-8.6,0.5 l-5.7,0.9l-6.5-5.5l-4.8-2.3l-9.1-4.5l-1.1-0.5l-11.9,3.6l6.2,22.8l5.8-0.1l-1.6-3.1l3.8-2.2l3.3-3.6l7.8,3.3l1.9,4.9l2.3,1.3 l5.5-0.3l2,1.2l4.3,6.4l7,4.4l4.2,3l6.2,3.2l7.7,2.7l0.8,4h2.9l4.3,1.4l1.3-6.6l-2.4-4.7l-4.2-1.6l0.6-2.8l4.4,0.3l1.5-3.5l0.5-4 l6.4-1.5l-0.2,2.9l1.3,1.8l2.1-0.2l4.1,0.6l5.2-4.5l-7.1-3.3l-3.2,1.6l-4.6-2.3l3.1-4.1L1339.8,303.1L1339.8,303.1z"
                                id="map-map-country-UZ"
                                data-id="UZ"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1908.6,676.9l-2.7-3.6l-0.6,1.7l1.3,2.8L1908.6,676.9L1908.6,676.9z M1906.6,667.2l-2.3-2l-0.9,4.9l0.5,1.8 l1.2-0.4l1.3,0.8L1906.6,667.2L1906.6,667.2z"
                                id="map-map-country-VU"
                                data-id="VU"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1039.5,304.8l0.6-0.1l0.1,0.6h-0.9L1039.5,304.8z"
                                id="map-map-country-VA"
                                data-id="VA"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M642,518.9l-2.2-1.5l-2.9,0.2l-0.7-5.1l-4.1-3.2l-4.4-0.4l-1.8-3l4.8-1.9l-6.7,0.1l-6.9,0.4l-0.2,1.6l-3.2,1.9 l-4.2-0.7l-3.1-2.9l-6,0.7l-5-0.1l-0.1-2.1l-3.5-3.5l-3.9-0.1l-1.7-4.5l-2.1,2l0.6,3l-7.1,2.6v4.8l1.6,2.2l-1.5,4.6l-2.4,0.4l-1.9-5 l2.7-3.7l0.3-3.3l-1.7-2.9l3.3-0.8l0.3-1.5l-3.7,1.1l-1.6,3.2l-2.2,1.8l-1.8,2.4l-0.9,4.5l-1.8,3.7l2.9,0.5l0.6,2.9l1.1,1.4l0.4,2.5 l-0.8,2.4l0.2,1.3l1.3,0.6l1.3,2.2l7.2-0.6l3.2,0.8l3.8,5.5l2.3-0.7l4,0.3l3.2-0.7l2,1.1l-1.2,3.4l-1.3,2.1l-0.5,4.6l1,4.2l1.5,1.9 l0.2,1.5l-2.9,3.1l2,1.4l1.4,2.2l1.7,6.4l3,3.4l4.4-0.5l1.1-1.9l4.2-1.5l2.3-1l0.7-2.7l4.1-1.8l-0.3-1.4l-4.8-0.5l-0.7-4l0.3-4.3 l-2.4-1.6l1-0.6l4.2,0.8l4.4,1.6l1.7-1.5l4-1l6.4-2.4l2.1-2.4l-0.7-1.8l-3.7-4.8l1.6-1.8v-2.9l3.4-1.1l1.5-1.2l-1.9-2.3l0.6-2.3 L642,518.9L642,518.9z"
                                id="map-map-country-VE"
                                data-id="VE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1571.6,435l-5.9-1.6l-3-2.6l0.2-3.7l-5.2-1.1l-3-2.4l-4.1,3.4l-5.3,0.7h-4.3l-2.7,1.5l4,5.1l3.4,5.7l6.8,0.1l3,5.5 l-3.3,1.7l-1.3,2.3l7.3,3.8l5.7,7.5l4.3,5.6l4.8,4.4l2,4.5l-0.2,6.4l1.8,4.2l0.1,7.7l-8.9,4.9l2.8,3.8l-5.8,0.5l-4.7,2.5l4.5,3.7 l-1.3,4.3l2.3,4l6.6-5.9l4.1-5.3l6.1-4.1l4.3-4.2l-0.4-11.2l-4-11.7l-4.1-5.1l-5.6-4l-6.4-8.3l-5.3-6.7l0.5-4.4l3.7-6L1571.6,435z"
                                id="map-map-country-VN"
                                data-id="VN"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M928.8,396.2h0.8v0.4l-0.1,1.2l-0.2,9.7l-17.9-0.3l-0.2,16.3L906,424l-1.4,3.3l0.9,9.2l-21.6-0.1l-1.2,2.2l0.3-2.7 h0.1l12.4-0.5l0.7-2.3l2.3-2.9l2-8.8l7.8-6.8l2.8-8.1l1.7-0.4l1.9-5l4.6-0.7l1.9,0.9h2.5l1.8-1.5l3.4-0.2L928.8,396.2z"
                                id="map-map-country-EH"
                                data-id="EH"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1271.5,466.2l-2.1-4.4l-5.2-10.5l-15.7,2.4l-5,2.9l-3.5,6.7l-2.5,1l-1.6-2.1l-2.1,0.3l-5.4-0.6l-1-0.7l-6.4,0.2 l-1.5,0.6l-2.4-1.7l-1.2,3.1l0.7,2.7l-2.3,2.1l0.4,2.7l-0.6,1.3l0.7,2.9l-1.1,0.3l1.7,2.6l1.3,4.7l1,1.9v3.4l1.6,3.8l3.9,0.3 l1.8-0.9l2.7,0.2l0.8-1.7l1.5-0.4l1.1-1.7l1.4-0.4l4.7-0.3l3.5-1.2l3.1-2.7l1.7,0.4l2.4-0.3l4.7-4.5l8.8-3l5.3-2.7v-2.1l0.9-2.9 L1271.5,466.2L1271.5,466.2z"
                                id="map-map-country-YE"
                                data-id="YE"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1149.2,626.7l-1.9-0.5l0.4-1.3l-1-0.3l-7.5,1.1l-1.6,0.7l-1.6,4.1l1.2,2.8l-1.2,7.5l-0.8,6.4l1.4,1.1l3.9,2.5 l1.5-1.2l0.3,6.9h-4.3l-2.1-3.5l-2-2.8l-4.3-0.8l-1.2-3.4l-3.4,2l-4.5-0.9l-1.8-2.8l-3.5-0.6l-2.6,0.1l-0.3-2l-1.9-0.1l0.5,2l-0.7,3 l0.9,3l-0.9,2.4l0.5,2.2l-11.6-0.1l-0.8,20.3l3.6,5.2l3.5,4l4.6-1.5l3.6,0.4l2.1,1.4v0.5l1,0.5l6.2,0.7l1.7,0.7l1.9-0.1l3.2-4.1 l5.1-5.3l2-0.5l0.7-2.2l3.3-2.5l4.2-0.9l-0.3-4.5l17.1-5.2l-2.9-1.7l1.9-5.9l1.8-2.2l-0.9-5.3l1.2-5.1l1-1.8l-1.2-5.4l-2.6-2.8 l-3.2-1.9l-3.5-1.1l-2.2-1.1l-0.3-0.2l0,0l0.5,1.1l-1,0.4L1149.2,626.7L1149.2,626.7z"
                                id="map-map-country-ZM"
                                data-id="ZM"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1148.2,713.7l6.2-7.2l1.6-4.6l0.9-0.6l0.8-3.7l-0.8-1.9l0.5-4.7l1.3-4.4l0.3-8.1l-2.8-2l-2.6-0.5l-1.1-1.6 l-2.6-1.3l-4.6,0.1l-0.3-2.4l-4.2,0.9l-3.3,2.5l-0.7,2.2l-2,0.5l-5.1,5.3l-3.2,4.1l-1.9,0.1l-1.7-0.7l-6.2-0.7l1.9,5.1l1.1,1.1 l1.6,3.7l6,7l2.3,0.7l-0.1,2.2l1.5,4.1l4.2,0.9l3.4,2.9l2.2,0.1l2.6,1.1l1.9-0.8L1148.2,713.7L1148.2,713.7z"
                                id="map-map-country-ZW"
                                data-id="ZW"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                              <path
                                d="M1080,299.8l1.2-0.5l0.5-2l0.9-0.4l0.8,0.9l1,0.4l0.8,1l0.8,0.3l1.1,1.1h0.8l-0.5,1.5l-0.5,0.7l0.2,0.5l-1.1,0.2l-2.9,1l-0.1,1.2h-0.7l-0.5-2.3l-1.3-0.6l-1.3-1.6L1080,299.8z"
                                id="map-map-country-XK"
                                data-id="XK"
                                class="svgMap-country"
                                fill="#ced4da"
                              ></path>
                            </g>
                          </svg>
                          <div class="svgMap-map-controls-wrapper">
                            <div class="svgMap-map-controls-zoom">
                              <button
                                class="
                                  svgMap-control-button
                                  svgMap-zoom-button
                                  svgMap-zoom-in-button
                                "
                                type="button"
                                aria-label="Zoom in"
                                aria-disabled="false"
                              ></button
                              ><button
                                class="
                                  svgMap-control-button
                                  svgMap-zoom-button
                                  svgMap-zoom-out-button
                                "
                                type="button"
                                aria-label="Zoom out"
                                aria-disabled="false"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      pt-3
                      mt-6
                      border-t border-gray-200
                      sm:pt-6
                    "
                  >
                    <div>
                      <button
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-sm
                          font-medium
                          text-center text-gray-500
                          rounded-2xl
                          hover:text-gray-900
                        "
                        type="button"
                        data-dropdown-toggle="dropdown-sessions-by-country"
                      >
                        Last 7 days
                        <svg
                          class="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        class="
                          hidden
                          z-50
                          my-4
                          text-base
                          list-none
                          bg-white
                          rounded
                          divide-y divide-gray-100
                          shadow-lg shadow-gray-200
                        "
                        id="dropdown-sessions-by-country"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="top"
                        style="
                          position: absolute;
                          inset: auto auto 0px 0px;
                          margin: 0px;
                          transform: translate3d(834px, 206px, 0px);
                        "
                      >
                        <div class="py-3 px-4" role="none">
                          <p
                            class="text-sm font-medium text-gray-900 truncate"
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Yesterday</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Today</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 7 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 30 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 90 days</a
                            >
                          </li>
                        </ul>
                        <div class="py-1" role="none">
                          <a
                            href="#"
                            class="
                              block
                              py-2
                              px-4
                              text-sm text-gray-700
                              hover:bg-gray-100
                            "
                            role="menuitem"
                            >Custom...</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-xs
                          font-medium
                          text-gray-900
                          uppercase
                          rounded-lg
                          sm:text-sm
                          hover:bg-gray-100
                        "
                      >
                        Location Overview
                        <svg
                          class="ml-1 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  grid grid-cols-1
                  my-4
                  xl:grid-cols-2
                  2xl:grid-cols-3
                  xl:gap-6
                "
              >
                <div
                  class="
                    p-4
                    mb-4
                    h-full
                    bg-white
                    rounded-2xl
                    shadow-lg shadow-gray-200
                    sm:p-6
                  "
                >
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold leading-none text-gray-900">
                      Latest Customers
                    </h3>
                    <a
                      href="#"
                      class="
                        inline-flex
                        items-center
                        p-2
                        text-sm
                        font-medium
                        text-gray-900
                        rounded-lg
                        hover:bg-gray-100
                      "
                    >
                      View all
                    </a>
                  </div>
                  <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200">
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/neil-sims.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Neil Sims
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $320
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/neil-sims.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Micheal Gough
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $320
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/neil-sims.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Helene Engels
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $320
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/neil-sims.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Leslie Livingston
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $320
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/neil-sims.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Robert Brown
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $320
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Bonnie Green
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $3467
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/michael-gough.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Michael Gough
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $67
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/thomas-lean.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Thomes Lean
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $2367
                          </div>
                        </div>
                      </li>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/lana-byrd.png"
                              alt="Neil image"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              Lana Byrd
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              email@flowbite.com
                            </p>
                          </div>
                          <div
                            class="
                              inline-flex
                              items-center
                              text-base
                              font-semibold
                              text-gray-900
                            "
                          >
                            $367
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      pt-3
                      border-t border-gray-200
                      sm:pt-6
                    "
                  >
                    <div>
                      <button
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-sm
                          font-medium
                          text-center text-gray-500
                          rounded-2xl
                          hover:text-gray-900
                        "
                        type="button"
                        data-dropdown-toggle="customers-dropdown"
                      >
                        Last 7 days
                        <svg
                          class="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        class="
                          hidden
                          z-50
                          my-4
                          text-base
                          list-none
                          bg-white
                          rounded
                          divide-y divide-gray-100
                          shadow-lg shadow-gray-200
                        "
                        id="customers-dropdown"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="top"
                        style="
                          position: absolute;
                          inset: auto auto 0px 0px;
                          margin: 0px;
                          transform: translate3d(160px, 1277px, 0px);
                        "
                      >
                        <div class="py-3 px-4" role="none">
                          <p
                            class="text-sm font-medium text-gray-900 truncate"
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Yesterday</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Today</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 7 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 30 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 90 days</a
                            >
                          </li>
                        </ul>
                        <div class="py-1" role="none">
                          <a
                            href="#"
                            class="
                              block
                              py-2
                              px-4
                              text-sm text-gray-700
                              hover:bg-gray-100
                            "
                            role="menuitem"
                            >Custom...</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-xs
                          font-medium
                          text-gray-900
                          uppercase
                          rounded-lg
                          sm:text-sm
                          hover:bg-gray-100
                        "
                      >
                        Sales Report
                        <svg
                          class="ml-1 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    bg-white
                    shadow-lg shadow-gray-200
                    rounded-2xl
                    p-4
                    2xl:col-span-2
                  "
                  style="position: relative"
                >
                  <h3 class="text-xl font-bold leading-none text-gray-900">
                    Acquisition Overview
                  </h3>
                  <div class="grid gap-6 lg:grid-cols-2"></div>
                  <div
                    id="traffic-channels-chart"
                    class="py-6"
                    style="min-height: 283.7px"
                  >
                    <div
                      id="apexchartsqspkrgty"
                      class="
                        apexcharts-canvas
                        apexchartsqspkrgty
                        apexcharts-theme-light
                      "
                      style="width: 530px; height: 283.7px"
                    >
                      <svg
                        id="SvgjsSvg1246"
                        width="530"
                        height="283.7"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev"
                        class="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style="background: transparent"
                      >
                        <g
                          id="SvgjsG1248"
                          class="apexcharts-inner apexcharts-graphical"
                          transform="translate(125.5, 0)"
                        >
                          <defs id="SvgjsDefs1247">
                            <clipPath id="gridRectMaskqspkrgty">
                              <rect
                                id="SvgjsRect1250"
                                width="287"
                                height="305"
                                x="-3"
                                y="-1"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                            <clipPath id="forecastMaskqspkrgty"></clipPath>
                            <clipPath id="nonForecastMaskqspkrgty"></clipPath>
                            <clipPath id="gridRectMarkerMaskqspkrgty">
                              <rect
                                id="SvgjsRect1251"
                                width="285"
                                height="307"
                                x="-2"
                                y="-2"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                          </defs>
                          <g id="SvgjsG1252" class="apexcharts-pie">
                            <g
                              id="SvgjsG1253"
                              transform="translate(0, 0) scale(1)"
                            >
                              <circle
                                id="SvgjsCircle1254"
                                r="6.553658536585367"
                                cx="140.5"
                                cy="140.5"
                                fill="transparent"
                              ></circle>
                              <g id="SvgjsG1255" class="apexcharts-slices">
                                <g
                                  id="SvgjsG1256"
                                  class="
                                    apexcharts-series apexcharts-pie-series
                                  "
                                  seriesName="Organic"
                                  rel="1"
                                  data:realIndex="0"
                                >
                                  <path
                                    id="SvgjsPath1257"
                                    d="M 140.5 9.426829268292664 A 131.07317073170734 131.07317073170734 0 0 1 265.15799313585745 181.00383726270653 L 146.73289965679288 142.52519186313532 A 6.553658536585367 6.553658536585367 0 0 0 140.5 133.94634146341463 L 140.5 9.426829268292664 z"
                                    fill="rgba(23,193,232,1)"
                                    fill-opacity="1"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="2"
                                    stroke-dasharray="0"
                                    class="
                                      apexcharts-pie-area
                                      apexcharts-donut-slice-0
                                    "
                                    index="0"
                                    j="0"
                                    data:angle="108"
                                    data:startAngle="0"
                                    data:strokeWidth="2"
                                    data:value="30"
                                    data:pathOrig="M 140.5 9.426829268292664 A 131.07317073170734 131.07317073170734 0 0 1 265.15799313585745 181.00383726270653 L 146.73289965679288 142.52519186313532 A 6.553658536585367 6.553658536585367 0 0 0 140.5 133.94634146341463 L 140.5 9.426829268292664 z"
                                    stroke="#ffffff"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1258"
                                  class="
                                    apexcharts-series apexcharts-pie-series
                                  "
                                  seriesName="Referral"
                                  rel="2"
                                  data:realIndex="1"
                                >
                                  <path
                                    id="SvgjsPath1259"
                                    d="M 265.15799313585745 181.00383726270653 A 131.07317073170734 131.07317073170734 0 0 1 107.90342796039195 267.4552660464699 L 138.8701713980196 146.8477633023235 A 6.553658536585367 6.553658536585367 0 0 0 146.73289965679288 142.52519186313532 L 265.15799313585745 181.00383726270653 z"
                                    fill="rgba(33,82,255,1)"
                                    fill-opacity="1"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="2"
                                    stroke-dasharray="0"
                                    class="
                                      apexcharts-pie-area
                                      apexcharts-donut-slice-1
                                    "
                                    index="0"
                                    j="1"
                                    data:angle="86.4"
                                    data:startAngle="108"
                                    data:strokeWidth="2"
                                    data:value="24"
                                    data:pathOrig="M 265.15799313585745 181.00383726270653 A 131.07317073170734 131.07317073170734 0 0 1 107.90342796039195 267.4552660464699 L 138.8701713980196 146.8477633023235 A 6.553658536585367 6.553658536585367 0 0 0 146.73289965679288 142.52519186313532 L 265.15799313585745 181.00383726270653 z"
                                    stroke="#ffffff"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1260"
                                  class="
                                    apexcharts-series apexcharts-pie-series
                                  "
                                  seriesName="Direct"
                                  rel="3"
                                  data:realIndex="2"
                                >
                                  <path
                                    id="SvgjsPath1261"
                                    d="M 107.90342796039195 267.4552660464699 A 131.07317073170734 131.07317073170734 0 0 1 11.748495477659162 165.06066303862644 L 134.06242477388295 141.72803315193133 A 6.553658536585367 6.553658536585367 0 0 0 138.8701713980196 146.8477633023235 L 107.90342796039195 267.4552660464699 z"
                                    fill="rgba(18,155,186,1)"
                                    fill-opacity="1"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="2"
                                    stroke-dasharray="0"
                                    class="
                                      apexcharts-pie-area
                                      apexcharts-donut-slice-2
                                    "
                                    index="0"
                                    j="2"
                                    data:angle="64.79999999999998"
                                    data:startAngle="194.4"
                                    data:strokeWidth="2"
                                    data:value="18"
                                    data:pathOrig="M 107.90342796039195 267.4552660464699 A 131.07317073170734 131.07317073170734 0 0 1 11.748495477659162 165.06066303862644 L 134.06242477388295 141.72803315193133 A 6.553658536585367 6.553658536585367 0 0 0 138.8701713980196 146.8477633023235 L 107.90342796039195 267.4552660464699 z"
                                    stroke="#ffffff"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1262"
                                  class="
                                    apexcharts-series apexcharts-pie-series
                                  "
                                  seriesName="Social"
                                  rel="4"
                                  data:realIndex="3"
                                >
                                  <path
                                    id="SvgjsPath1263"
                                    d="M 11.748495477659162 165.06066303862644 A 131.07317073170734 131.07317073170734 0 0 1 29.831261667126086 70.26748301909446 L 134.9665630833563 136.9883741509547 A 6.553658536585367 6.553658536585367 0 0 0 134.06242477388295 141.72803315193133 L 11.748495477659162 165.06066303862644 z"
                                    fill="rgba(203,12,159,1)"
                                    fill-opacity="1"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="2"
                                    stroke-dasharray="0"
                                    class="
                                      apexcharts-pie-area
                                      apexcharts-donut-slice-3
                                    "
                                    index="0"
                                    j="3"
                                    data:angle="43.19999999999999"
                                    data:startAngle="259.2"
                                    data:strokeWidth="2"
                                    data:value="12"
                                    data:pathOrig="M 11.748495477659162 165.06066303862644 A 131.07317073170734 131.07317073170734 0 0 1 29.831261667126086 70.26748301909446 L 134.9665630833563 136.9883741509547 A 6.553658536585367 6.553658536585367 0 0 0 134.06242477388295 141.72803315193133 L 11.748495477659162 165.06066303862644 z"
                                    stroke="#ffffff"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1264"
                                  class="
                                    apexcharts-series apexcharts-pie-series
                                  "
                                  seriesName="Other"
                                  rel="5"
                                  data:realIndex="4"
                                >
                                  <path
                                    id="SvgjsPath1265"
                                    d="M 29.831261667126086 70.26748301909446 A 131.07317073170734 131.07317073170734 0 0 1 84.6917582226657 21.901449269453977 L 137.7095879111333 134.5700724634727 A 6.553658536585367 6.553658536585367 0 0 0 134.9665630833563 136.9883741509547 L 29.831261667126086 70.26748301909446 z"
                                    fill="rgba(121,40,202,1)"
                                    fill-opacity="1"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="2"
                                    stroke-dasharray="0"
                                    class="
                                      apexcharts-pie-area
                                      apexcharts-donut-slice-4
                                    "
                                    index="0"
                                    j="4"
                                    data:angle="32.39999999999998"
                                    data:startAngle="302.4"
                                    data:strokeWidth="2"
                                    data:value="9"
                                    data:pathOrig="M 29.831261667126086 70.26748301909446 A 131.07317073170734 131.07317073170734 0 0 1 84.6917582226657 21.901449269453977 L 137.7095879111333 134.5700724634727 A 6.553658536585367 6.553658536585367 0 0 0 134.9665630833563 136.9883741509547 L 29.831261667126086 70.26748301909446 z"
                                    stroke="#ffffff"
                                  ></path>
                                </g>
                                <g
                                  id="SvgjsG1266"
                                  class="
                                    apexcharts-series apexcharts-pie-series
                                  "
                                  seriesName="Email"
                                  rel="6"
                                  data:realIndex="5"
                                >
                                  <path
                                    id="SvgjsPath1267"
                                    d="M 84.6917582226657 21.901449269453977 A 131.07317073170734 131.07317073170734 0 0 1 140.47712341621315 9.426831264651213 L 140.49885617081065 133.94634156323255 A 6.553658536585367 6.553658536585367 0 0 0 137.7095879111333 134.5700724634727 L 84.6917582226657 21.901449269453977 z"
                                    fill="rgba(20,23,39,1)"
                                    fill-opacity="1"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="2"
                                    stroke-dasharray="0"
                                    class="
                                      apexcharts-pie-area
                                      apexcharts-donut-slice-5
                                    "
                                    index="0"
                                    j="5"
                                    data:angle="25.19999999999999"
                                    data:startAngle="334.79999999999995"
                                    data:strokeWidth="2"
                                    data:value="7"
                                    data:pathOrig="M 84.6917582226657 21.901449269453977 A 131.07317073170734 131.07317073170734 0 0 1 140.47712341621315 9.426831264651213 L 140.49885617081065 133.94634156323255 A 6.553658536585367 6.553658536585367 0 0 0 137.7095879111333 134.5700724634727 L 84.6917582226657 21.901449269453977 z"
                                    stroke="#ffffff"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                          <line
                            id="SvgjsLine1268"
                            x1="0"
                            y1="0"
                            x2="281"
                            y2="0"
                            stroke="#b6b6b6"
                            stroke-dasharray="0"
                            stroke-width="1"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs"
                          ></line>
                          <line
                            id="SvgjsLine1269"
                            x1="0"
                            y1="0"
                            x2="281"
                            y2="0"
                            stroke-dasharray="0"
                            stroke-width="0"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs-hidden"
                          ></line>
                        </g>
                        <g id="SvgjsG1249" class="apexcharts-annotations"></g>
                      </svg>
                      <div class="apexcharts-legend"></div>
                      <div class="apexcharts-tooltip apexcharts-theme-dark">
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 6"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(23, 193, 232)"
                          ></span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: 'Open Sans', sans-serif;
                              font-size: 14px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span
                                class="apexcharts-tooltip-text-y-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-y-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span
                                class="apexcharts-tooltip-text-goals-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-goals-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span
                                class="apexcharts-tooltip-text-z-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-z-value"
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 5"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(33, 82, 255)"
                          ></span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: 'Open Sans', sans-serif;
                              font-size: 14px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span
                                class="apexcharts-tooltip-text-y-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-y-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span
                                class="apexcharts-tooltip-text-goals-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-goals-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span
                                class="apexcharts-tooltip-text-z-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-z-value"
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 4"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(18, 155, 186)"
                          ></span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: 'Open Sans', sans-serif;
                              font-size: 14px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span
                                class="apexcharts-tooltip-text-y-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-y-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span
                                class="apexcharts-tooltip-text-goals-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-goals-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span
                                class="apexcharts-tooltip-text-z-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-z-value"
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 3"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(203, 12, 159)"
                          ></span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: 'Open Sans', sans-serif;
                              font-size: 14px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span
                                class="apexcharts-tooltip-text-y-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-y-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span
                                class="apexcharts-tooltip-text-goals-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-goals-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span
                                class="apexcharts-tooltip-text-z-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-z-value"
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 2"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(121, 40, 202)"
                          ></span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: 'Open Sans', sans-serif;
                              font-size: 14px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span
                                class="apexcharts-tooltip-text-y-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-y-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span
                                class="apexcharts-tooltip-text-goals-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-goals-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span
                                class="apexcharts-tooltip-text-z-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-z-value"
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="apexcharts-tooltip-series-group"
                          style="order: 1"
                        >
                          <span
                            class="apexcharts-tooltip-marker"
                            style="background-color: rgb(20, 23, 39)"
                          ></span>
                          <div
                            class="apexcharts-tooltip-text"
                            style="
                              font-family: 'Open Sans', sans-serif;
                              font-size: 14px;
                            "
                          >
                            <div class="apexcharts-tooltip-y-group">
                              <span
                                class="apexcharts-tooltip-text-y-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-y-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span
                                class="apexcharts-tooltip-text-goals-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-goals-value"
                              ></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span
                                class="apexcharts-tooltip-text-z-label"
                              ></span
                              ><span
                                class="apexcharts-tooltip-text-z-value"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="block overflow-x-auto w-full">
                    <table
                      class="items-center w-full bg-transparent border-collapse"
                    >
                      <thead>
                        <tr>
                          <th
                            class="
                              py-3
                              px-4
                              text-xs
                              font-semibold
                              text-left text-gray-700
                              uppercase
                              align-middle
                              whitespace-nowrap
                              border-r-0 border-l-0
                            "
                          >
                            Top Channels
                          </th>
                          <th
                            class="
                              py-3
                              px-4
                              text-xs
                              font-semibold
                              text-left text-gray-700
                              uppercase
                              align-middle
                              whitespace-nowrap
                              border-r-0 border-l-0
                            "
                          >
                            Users
                          </th>
                          <th
                            class="
                              py-3
                              px-4
                              text-xs
                              font-semibold
                              text-left text-gray-700
                              uppercase
                              align-middle
                              whitespace-nowrap
                              border-r-0 border-l-0
                              min-w-140-px
                            "
                          ></th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100">
                        <tr class="text-gray-500">
                          <th
                            class="
                              p-4
                              px-4
                              text-sm
                              font-normal
                              text-left
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            Organic Search
                          </th>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              font-medium
                              text-gray-900
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            5,649
                          </td>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">30%</span>
                              <div class="relative w-full">
                                <div class="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    class="h-2 bg-cyan-500 rounded-sm"
                                    style="width: 30%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500">
                          <th
                            class="
                              p-4
                              px-4
                              text-sm
                              font-normal
                              text-left
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            Referral
                          </th>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              font-medium
                              text-gray-900
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            4,025
                          </td>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">24%</span>
                              <div class="relative w-full">
                                <div class="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    class="h-2 bg-blue-500 rounded-sm"
                                    style="width: 24%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500">
                          <th
                            class="
                              p-4
                              px-4
                              text-sm
                              font-normal
                              text-left
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            Direct
                          </th>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              font-medium
                              text-gray-900
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            3,105
                          </td>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">18%</span>
                              <div class="relative w-full">
                                <div class="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    class="h-2 bg-cyan-700 rounded-sm"
                                    style="width: 18%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500">
                          <th
                            class="
                              p-4
                              px-4
                              text-sm
                              font-normal
                              text-left
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            Social
                          </th>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              font-medium
                              text-gray-900
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            1251
                          </td>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">12%</span>
                              <div class="relative w-full">
                                <div class="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    class="h-2 bg-fuchsia-500 rounded-sm"
                                    style="width: 12%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500">
                          <th
                            class="
                              p-4
                              px-4
                              text-sm
                              font-normal
                              text-left
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            Other
                          </th>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              font-medium
                              text-gray-900
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            734
                          </td>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">9%</span>
                              <div class="relative w-full">
                                <div class="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    class="h-2 bg-voilet-500 rounded-sm"
                                    style="width: 9%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr class="text-gray-500">
                          <th
                            class="
                              p-4
                              px-4
                              text-sm
                              font-normal
                              text-left
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            Email
                          </th>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              font-medium
                              text-gray-900
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            456
                          </td>
                          <td
                            class="
                              p-4
                              px-4
                              text-xs
                              align-middle
                              whitespace-nowrap
                              border-t-0
                            "
                          >
                            <div class="flex items-center">
                              <span class="mr-2 text-xs font-medium">7%</span>
                              <div class="relative w-full">
                                <div class="w-full h-2 bg-gray-200 rounded-sm">
                                  <div
                                    class="h-2 bg-dark-900 rounded-sm"
                                    style="width: 7%"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      pt-3
                      border-t border-gray-200
                      sm:pt-6
                    "
                  >
                    <div>
                      <button
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-sm
                          font-medium
                          text-center text-gray-500
                          rounded-2xl
                          hover:text-gray-900
                        "
                        type="button"
                        data-dropdown-toggle="sessions-dropdown"
                      >
                        Last 7 days
                        <svg
                          class="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      <div
                        class="
                          hidden
                          z-50
                          my-4
                          text-base
                          list-none
                          bg-white
                          rounded
                          divide-y divide-gray-100
                          shadow-lg shadow-gray-200
                        "
                        id="sessions-dropdown"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="top"
                        style="
                          position: absolute;
                          inset: auto auto 0px 0px;
                          margin: 0px;
                          transform: translate3d(834px, 1269.5px, 0px);
                        "
                      >
                        <div class="py-3 px-4" role="none">
                          <p
                            class="text-sm font-medium text-gray-900 truncate"
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Yesterday</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Today</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 7 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 30 days</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="
                                block
                                py-2
                                px-4
                                text-sm text-gray-700
                                hover:bg-gray-100
                              "
                              role="menuitem"
                              >Last 90 days</a
                            >
                          </li>
                        </ul>
                        <div class="py-1" role="none">
                          <a
                            href="#"
                            class="
                              block
                              py-2
                              px-4
                              text-sm text-gray-700
                              hover:bg-gray-100
                            "
                            role="menuitem"
                            >Custom...</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <a
                        href="#"
                        class="
                          inline-flex
                          items-center
                          p-2
                          text-xs
                          font-medium
                          text-gray-900
                          uppercase
                          rounded-lg
                          sm:text-sm
                          hover:bg-gray-100
                        "
                      >
                        Acquisition Report
                        <svg
                          class="ml-1 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="resize-triggers">
                    <div class="expand-trigger">
                      <div style="width: 563px; height: 834px"></div>
                    </div>
                    <div class="contract-trigger"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="
                hidden
                overflow-y-auto overflow-x-hidden
                fixed
                right-0
                left-0
                top-4
                z-50
                justify-center
                items-center
                md:inset-0
                h-modal
                sm:h-full
              "
              id="user-modal"
              aria-hidden="true"
            >
              <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                <div
                  class="
                    relative
                    bg-white
                    rounded-2xl
                    shadow-xl shadow-gray-700
                  "
                >
                  <div
                    class="
                      flex
                      justify-between
                      items-start
                      p-5
                      rounded-t
                      border-b
                    "
                  >
                    <h3 class="text-xl font-semibold">Edit user</h3>
                    <button
                      type="button"
                      class="
                        text-gray-400
                        bg-transparent
                        hover:bg-gray-200 hover:text-gray-900
                        rounded-2xl
                        text-sm
                        p-1.5
                        ml-auto
                        inline-flex
                        items-center
                      "
                      data-modal-toggle="user-modal"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div class="p-6 space-y-6">
                    <form action="#">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >First Name</label
                          >
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="Bonnie"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Last Name</label
                          >
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="Green"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Email</label
                          >
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="example@company.com"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="phone-number"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Phone Number</label
                          >
                          <input
                            type="number"
                            name="phone-number"
                            id="phone-number"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="e.g. +(12)3456 789"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="department"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Department</label
                          >
                          <input
                            type="text"
                            name="department"
                            id="department"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="Development"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="company"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Company</label
                          >
                          <input
                            type="number"
                            name="company"
                            id="company"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="123456"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="current-password"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Current Password</label
                          >
                          <input
                            type="password"
                            name="current-password"
                            id="current-password"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="••••••••"
                            required=""
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="new-password"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >New Password</label
                          >
                          <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            class="
                              border border-gray-300
                              text-gray-900
                              sm:text-sm
                              rounded-lg
                              focus:ring-2
                              focus:ring-fuchsia-50
                              focus:border-fuchsia-300
                              block
                              w-full
                              p-2.5
                            "
                            placeholder="••••••••"
                            required=""
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div
                    class="items-center p-6 rounded-b border-t border-gray-200"
                  >
                    <button
                      class="
                        text-white
                        bg-gradient-to-br
                        from-dark-600
                        to-dark-900
                        font-medium
                        rounded-lg
                        text-sm
                        px-5
                        py-2.5
                        text-center
                        shadow-md shadow-gray-300
                        hover:scale-[1.02]
                        transition-transform
                      "
                      type="submit"
                    >
                      Save all
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer
            class="
              p-6
              my-6
              mx-4
              bg-white
              rounded-2xl
              shadow-lg shadow-gray-200
              md:flex md:items-center md:justify-between
            "
          >
            <ul class="flex flex-wrap items-center mb-6 md:mb-0">
              <li>
                <a
                  href="#"
                  class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  "
                  >Terms and conditions</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  "
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  "
                  >Licensing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    mr-4
                    text-sm
                    font-normal
                    text-gray-500
                    hover:underline
                    md:mr-6
                  "
                  >Cookie Policy</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm font-normal text-gray-500 hover:underline"
                  >Contact</a
                >
              </li>
            </ul>
            <div class="flex space-x-6 sm:justify-center">
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </footer>
          <p class="my-10 text-sm text-center text-gray-500">
            © 2019-2022 Built with ❤️ by
            <a
              href="https://creative-tim.com"
              class="hover:underline"
              target="_blank"
              >Creative Tim</a
            >
            and
            <a
              href="https://flowbite.com"
              class="hover:underline"
              target="_blank"
              >Flowbite</a
            >. All rights reserved.
          </p>
        </div>
      </div>
      
      <div class="svgMap-tooltip">
        <div class="svgMap-tooltip-content-wrapper"></div>
        <div class="svgMap-tooltip-pointer"></div>
      </div>

      <svg
        id="SvgjsSvg1089"
        width="2"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev"
        style="
          overflow: hidden;
          top: -100%;
          left: -100%;
          position: absolute;
          opacity: 0;
        "
      >
        <defs id="SvgjsDefs1090"></defs>
        <polyline id="SvgjsPolyline1091" points="0,0"></polyline>
        <path id="SvgjsPath1092" d="M0 0 "></path>
      </svg>
    </body>

    <!--  -->
  </div>
</template>





<script>









export default {
  name: "PageProfile",
};
<script/>