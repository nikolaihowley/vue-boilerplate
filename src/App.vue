<template>
  <div class="h-screen flex flex-col">
    <nav>
      <ul class="flex justify-center space-x-4 w-full py-4 text-2xl border-b">
        <li>
          <router-link active-class="underline" to="/">Home</router-link>
        </li>
        <li>
          <router-link active-class="underline" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <main class="flex-grow flex justify-center flex-col">
      <router-view />
    </main>
  </div>
</template>
