<template>
  <div class="PageProfile">
    <!--  -->

    <body class="bg-gray-50 dark:bg-gray-600">
      <noscript
        ><iframe
          src=""
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
              ></button>
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
                href=""
                class="text-md font-semibold flex items-center lg:mr-1.5"
              >
                <img src="../assets/logo.png" class="mr-2 h-8" alt="C FLEX" />
                <span
                  class="
                    hidden
                    md:inline-block
                    self-center
                    text-xl
                    font-bold
                    whitespace-nowrap
                  "
                ></span>
              </a>
            </div>
            <div class="flex items-center">
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
                        src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/bonnie-green.png"
                        class="w-11 h-11 rounded-full"
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
                          rounded-full
                          border border-white
                          dark:bg-gray-800
                        "
                      ></div>
                    </div>
                  </a>
                  <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src=""
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
                        src=""
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
                  <a href="#" class="flex py-3 px-4 hover:bg-gray-100">
                    <div class="flex-shrink-0">
                      <img
                        class="w-11 h-11 rounded-full"
                        src=""
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
                        learn how to implement the new design trend.
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
                        >parametre</a
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
                        >deconnexion</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
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
                    <a
                      href=""
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
                      <!-- <router-link to="/formdemanproprietaireint">
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >Profile</span
                      >
                      </router-link> -->
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
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
                      <router-link to="formdemanproprietaireint">
                        <span
                          class="ml-3 text-dark-500 text-sm font-light"
                          sidebar-toggle-item=""
                          >formulaire de modification de demande</span
                        >
                      </router-link>
                    </a>
                  </li>
                  <li></li>
                  <li></li>
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
                      <span
                        class="ml-3 text-dark-500 text-sm font-light"
                        sidebar-toggle-item=""
                        >-</span
                      >
                    </button>
                    <ul
                      id="dropdown-users"
                      sidebar-toggle-list=""
                      class="pb-2 pt-1 hidden"
                    >
                      <li>
                        <a
                          href=""
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
                          href=""
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
                          ><span class="">S</span
                          ><span class="hidden">S</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul
                      id="dropdown-pages"
                      sidebar-toggle-list=""
                      class="pb-2 pt-1 hidden"
                    >
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
                    </ul>
                  </li>
                  <li>
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
                          href=""
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
                          href=""
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
                          href=""
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
                <div class="pt-2"></div>
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
                parametre de la page
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
                        Francais
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
                        italien
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
          class="h-full w-full bg-white-50 relative overflow-y-auto lg:ml-64"
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
                  2xl:grid-cols-2
                "
              ></div>
              <div class="grid grid-cols-1 gap-6 mb-6 w-full">
                <div
                  class="
                    bg-white
                    shadow-lg shadow-gray-200
                    rounded-2xl
                    p-4
                    bg-gradient-to-r
                    from-dark-800
                    to-dark-900
                  "
                  style="position: relative"
                >
                  <div id="main-chart">
                    <div
                      id="apexchartsxsrv0ha6"
                      class="
                        apexcharts-canvas
                        apexchartsxsrv0ha6
                        apexcharts-theme-light
                      "
                    >
                      <div class="w-full mx-auto text-center">
                        <span class="text-orange-900 text-4xl font-bold"
                          >modification de la demande</span
                        >
                      </div>
                      <div class="w-full mx-auto text-center"></div>

                      <div
                        class="
                          relative
                          overflow-x-auto
                          shadow-md
                          sm:rounded-lg
                          mx-auto
                        "
                      >
                        <!-- <router-link to="/FormDemanproprietaireint">
  <button type="button" class="text-white bg-gradient-to-r from-green-400  to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-400 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " data-modal-toggle="popup-modal">nouvelle demande</button>
   </router-link> -->
                        <!-- tableau de donnees -->

                        <section>
                          <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                              <p class="mt-1 text-sm text-gray-600"></p>
                            </div>
                            <div
                              class="
                                p-4
                                mb-4
                                text-sm text-green-700
                                bg-green-100
                                rounded-lg
                                dark:bg-green-200 dark:text-green-800
                              "
                              role="alert"
                              v-if="success"
                            >
                              <span class="font-medium">Felictation !!</span>
                              Demande Proprietaire Modifiée avec succes !!!!!
                            </div>

                            <div
                              class="
                                p-4
                                mb-4
                                text-sm text-red-700
                                bg-red-100
                                rounded-lg
                                dark:bg-red-200 dark:text-red-800
                              "
                              role="alert"
                              v-if="error"
                            >
                              <span class="font-medium">Echec !!!</span> Demande
                              Proprietaire non modifiée
                            </div>
                          </div>

                          <form>
                            <div class="shadow overflow-hidden sm:rounded-md">
                              <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                  <div class="col-span-6 sm:col-span-3">
                                    <label
                                      for="first_name"
                                      class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                      "
                                      >immatriculation</label
                                    >
                                    <input
                                      type="text"
                                      name="immatricule"
                                      id="immatriculation"
                                      class="
                                        mt-1
                                        focus:ring-orange-500
                                        focus:border-orange-500
                                        block
                                        w-full
                                        shadow-sm
                                        sm:text-sm
                                        border-gray-300
                                        rounded-md
                                      "
                                      v-model="demande.immatriculation"
                                    />
                                  </div>

                                  <div class="col-span-6 sm:col-span-3">
                                    <label
                                      for="last_name"
                                      class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                      "
                                      >marque</label
                                    >
                                    <input
                                      type="text"
                                      name="marque"
                                      id="marque"
                                      class="
                                        mt-1
                                        focus:ring-orange-500
                                        focus:border-orange-500
                                        block
                                        w-full
                                        shadow-sm
                                        sm:text-sm
                                        border-gray-300
                                        rounded-md
                                      "
                                      v-model="demande.marque"
                                    />
                                  </div>

                                  <div class="col-span-6 sm:col-span-4">
                                    <label
                                      for="email_address"
                                      class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                      "
                                      >model</label
                                    >
                                    <input
                                      type="text"
                                      name="model"
                                      id="email_address"
                                      class="
                                        mt-1
                                        focus:ring-orange-500
                                        focus:border-orange-500
                                        block
                                        w-full
                                        shadow-sm
                                        sm:text-sm
                                        border-gray-300
                                        rounded-md
                                      "
                                      v-model="demande.model"
                                    />
                                  </div>

                                  <div class="col-span-6">
                                    <label
                                      for="street_address"
                                      class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                      "
                                      >nombre de place</label
                                    >
                                    <input
                                      type="text"
                                      name="zone"
                                      id="street_address"
                                      class="
                                        mt-1
                                        focus:ring-orange-500
                                        focus:border-orange-500
                                        block
                                        w-full
                                        shadow-sm
                                        sm:text-sm
                                        border-gray-300
                                        rounded-md
                                      "
                                      v-model="demande.nbPlace"
                                    />
                                  </div>

                                  <div
                                    class="
                                      col-span-6
                                      sm:col-span-6
                                      lg:col-span-2
                                    "
                                  >
                                    <label
                                      for="state"
                                      class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                      "
                                      >type de transport</label
                                    >

                                    <select
                                      id="country"
                                      name="type"
                                      autocomplete="country"
                                      class="
                                        mt-1
                                        block
                                        w-full
                                        py-2
                                        px-3
                                        border border-gray-300
                                        bg-white
                                        rounded-md
                                        shadow-sm
                                        focus:outline-none
                                        focus:ring-orange-500
                                        focus:border-orange-500
                                        sm:text-sm
                                      "
                                      v-model="demande.idTypeTransportFk.id"
                                    >
                                      <option
                                        v-for="listT in typetransport"
                                        :key="listT.id"
                                        :value="listT.id"
                                      >
                                        {{ listT.libelleTypeTransport }}
                                      </option>
                                    </select>
                                  </div>

                                  <div
                                    class="
                                      col-span-6
                                      sm:col-span-3
                                      lg:col-span-2
                                    "
                                  >
                                    <label
                                      class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                      "
                                      >zone</label
                                    >
                                    <select
                                      class="
                                        mt-1
                                        block
                                        w-full
                                        py-2
                                        px-3
                                        border border-gray-300
                                        bg-white
                                        rounded-md
                                        shadow-sm
                                        focus:outline-none
                                        focus:ring-orange-500
                                        focus:border-orange-500
                                        sm:text-sm
                                      "
                                      v-model="demande.idZoneFk.id"
                                    >
                                      <option
                                        v-for="listz in zones"
                                        :key="listz.id"
                                        :value="listz.id"
                                      >
                                        {{ listz.libelle }}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div
                                  class="col-span-6 sm:col-span-3 lg:col-span-2"
                                ></div>
                              </div>
                            </div>
                            <div
                              class="
                                px-4
                                py-3
                                bg-gray-50
                                text-right
                                sm:px-6
                                mx-auto
                                w-full
                                items-center
                                grid grid-cols-3
                              "
                            >
                              <router-link to="/pageprofile">
                                <button
                                  type="submit"
                                  class="
                                    inline-flex
                                    mx-auto
                                    py-2
                                    px-4
                                    border border-transparent
                                    shadow-sm
                                    text-sm
                                    font-medium
                                    rounded-md
                                    text-white
                                    bg-red-600
                                    hover:bg-red-700
                                    focus:ring-2
                                    focus:ring-offset-2
                                    focus:ring-red-500
                                  "
                                >
                                  Annuler
                                </button>
                              </router-link>
                              <button
                                type="submit"
                                @click="updateDemande"
                                class="
                                  inline-flex
                                  mx-auto
                                  py-2
                                  px-4
                                  border border-transparent
                                  shadow-sm
                                  text-sm
                                  font-medium
                                  rounded-md
                                  text-white
                                  bg-orange-600
                                  hover:bg-orange-700
                                  focus:ring-2
                                  focus:ring-offset-2
                                  focus:ring-orange-500
                                "
                              >
                                Modifier
                              </button>
                            </div>
                          </form>
                        </section>

                        <!-- <ModalAnldemande/> -->
                        <!-- <pre>{{ idemande }}</pre> -->
                        <!-- <pre>{{ zones }}</pre> -->
                        <!-- <pre>{{ typetransport }}</pre>  -->
                        <!-- <pre>{{ demande.immatriculation }}</pre> -->

                        <!-- test -->
                      </div>

                      <!-- modal components -->

                      <!--  -->

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

                  <div class="resize-triggers">
                    <div class="expand-trigger">
                      <div style="width: 563px; height: 633px"></div>
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
                    <h3 class="text-xl font-semibold"></h3>
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

                  <div
                    class="items-center p-6 rounded-b border-t border-gray-200"
                  ></div>
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
            © 2022 CFLEX
            <a
              href="https://creative-tim.com"
              class="hover:underline"
              target="_blank"
              >interface</a
            >
            et
            <a
              href="https://flowbite.com"
              class="hover:underline"
              target="_blank"
              >par CFLEX</a
            >.
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
  </div>
</template>




<script>
import axios from "axios";

export default {
  name: "FormDemproprietaire",

  components: {},

  data() {
    return {
      demande: {},
      idemande: this.$route.params.id,
      immatriculation: "",
      idPropretaire: "1",
      marque: "",
      model: "",
      nbPlace: "",
      idZoneFk: {},
      idTypeTransportFk: {},

      success: false,
      error: false,
      zone: "",
      type: "",
      zoneFk: "",
      typeFk: "",
      etat: true,
      typetransport: {},
      zones: {},
    };

    //  data(){
    //       return{

    // etat: true,
    // idPropretaire:"1",
    // marque: "",
    // model: "",
    // nbPlace: "",
    // idTypeTransport:"",
    // idZoneFk:"",
    // statut: false,
    // immatriculation:"",
    // error: false,
    // success: false,

    //      }
  },

  async created() {
    try {
      this.loading = true;

      await axios.get("/api/demandes/" + this.idemande).then((t) => {
        this.demande = t.data.data;
      });

      axios.get("/api/typetransport").then((t) => {
        this.typetransport = t.data.data;
      });

      axios.get("/api/zones").then((z) => {
        this.zones = z.data.data;
      });

      this.loading = false;
    } catch (e) {
      this.loading = false;

      console.log(e);
    }
  },

  methods: {
    listTypetransport() {
      axios
        .get(`/typetransport`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.type = response.data.data;
          console.log(this.type);
        })
        .catch((e) => {
          this.statut = false;
          console.log("error", this.errors);

          this.errors.push(e);
        });
    },

    listZone() {
      axios
        .get(`/zones`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.zones = response.data.data;
          console.log(this.zones);
        })
        .catch((e) => {
          this.statut = false;
          console.log("error", this.errors);

          this.errors.push(e);
        });
    },

    //   currentDateTime() {
    //   const current = new Date();
    //   const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    //   const dateTime = date +' '+ time;

    //   return dateTime;
    // },

    updateDemande() {
      console.log("testt")
      console.log({
        idPropretaireFk: {
          id: 1,
        },
        marque: this.marque,
        model: this.model,
        nBplace: this.nbPlace,
        idTypeTransportFk: {
          id: this.idTypeTransportFk,
        },
        idZoneFk: {
          id: this.idZoneFk,
        },
        statut: this.statut,
        immatriculation: this.immatriculation,
      });
     
//      {
//   "etat": true,
//   "idProprietaireFk": {
//     "id": 1
//   },
//   "date": "2022-05-23T12:37:10.8",
//   "marque": "sTYGg",
//   "model": "string",
//   "nbPlace": 130,
//   "idTypeTransportFk": {
//     "id": 1
//   },
//   "idZoneFk": {
//     "id": 1
//   },
//   "statut": true,
//   "immatriculation": "string"
// }







      axios.put(`api/demandes/updateDemande/${this.idemande}`, {
        
        idProprietaireFk: {
    id: 1
  },
 
  marque: "sTYGg",
  model: "sng",
  nbPlace: 130,
  idTypeTransportFk: {
    id: 1
  },
  idZoneFk: {
    id: 1
  },
  
  immatriculation: "string"

          // idPropretaireFk: {
          //   id: this.idPropretaireFk,
          // },
          // marque: this.marque,
          // model: this.model,
          // nBplace: this.nbPlace,

          // idTypeTransportFk: {
          //   id: this.idTypeTransportFk,
          // },
          // idZoneFk: {
          //   id: this.idZoneFk,
          // },
          // statut: this.statut,
          // immatriculation: this.immatriculation,
        })
        .then((res) => {
          this.reset();
          this.success = true;

          this.route.push("pageprofile");
          console.log(res);
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        })
        .finally(() => {
       //   Perform action in always
          this.loading = false;
        });
    },
    reset() {
      this.success = false;
      this.error = false;
      for (let field in this.formData) {
        this.formData[field] = null;
      }
    },
  },
};
</script>

<style>
</style>








