<style src="./newsListing.css"></style>
<script src="./newsListing.js"></script>
<template>
  <div>
    <h2>Hacker news</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="newsItem in news">
          <td>{{newsItem.title}}</td>
          <td>{{newsItem.score}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
