<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {};
  },
  props: ["users"],
  mounted() {},
  methods: {},
  updated() {},
};
</script>

<template>
  <!--Admin/ Super Admin Modal -->
  <div class="card shadow m-sm-2 m-sx-2">
    <div class="card-body table-responsive">
      <table class="table">
        <thead class="table-primary">
          <tr>
            <th scope="col"><b>Name</b></th>
            <th scope="col"><b>Birth Year</b></th>
            <th scope="col"><b>Created At</b></th>
            <th scope="col"><b>Gender</b></th>
            <th scope="col"><b>Action</b></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" v-bind:key="user">
            <th scope="row">{{ user.name }}</th>
            <td>{{ user.birth_year }}</td>
            <td>{{ formatDate(user.created) }}</td>
            <td>{{ user.gender }}</td>
            <td
              data-bs-toggle="modal"
              data-bs-target="#AdminModel"
              @click="getPeople(user, index)"
              class="text-secondary action-btn"
              title="View Person Detail"
            >
              <i class="fa fa-user-circle-o"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
