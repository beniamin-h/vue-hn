<style src="./home.css" scoped></style>
<script src="./home.js"></script>
<template>
  <div>
    <router-link to="/topstories">Top stories</router-link>
    <router-link to="/newstories">New stories</router-link>
    <newsListing :type="type"></newsListing>
  </div>
</template>
