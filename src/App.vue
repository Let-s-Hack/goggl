<template>
  <div id="app">
    <div id="nav">
      <router-link to="/timer">Timer</router-link> |
      <router-link to="/reports">Reports</router-link>
      <router-link to="/calendar">Calendar</router-link>
    </div>
    <router-view/>
  </div>
</template>
