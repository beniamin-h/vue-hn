<style src="./newsListing.css" scoped></style>
<script src="./newsListing.js"></script>
<template>
  <div>
    <h2>Hacker news</h2>
    <!--{{news}}-->
    <v-data-table
        v-bind:headers="headers"
        :items="news"
        hide-actions
        class="elevation-1"
      >
      <template slot="items" scope="props">
        <!--transition-group-->
        <tr>
          <td>{{ props.item.title }}</td>
          <td class="text-xs-center">{{ props.item.ago }}</td>
          <td class="text-xs-center">{{ props.item.score }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
