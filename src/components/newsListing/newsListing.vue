<style src="./newsListing.css" scoped></style>
<script src="./newsListing.js"></script>
<template>
  <div>
    <h2>Hacker news</h2>
    <!--{{news}}-->
    <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        must-sort
        class="elevation-1"
      >
      <template slot="items" scope="props">
        <tr :data-id="props.item.id">
          <td><a :href="props.item.url" class="grey--text text--lighten-4" target="_blank">{{ props.item.title }}</a></td>
          <td class="text-xs-center">{{ props.item.ago }}</td>
          <td class="text-xs-center">{{ props.item.score }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
