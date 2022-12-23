<!-- eslint-disable vue/multi-word-component-names -->
<script>
import moment from "moment";
export default {
  data() {
    return {};
  },
  props: ["person", "personIndex", "users"],
  mounted() {},
  methods: {
    switchPerson(increamentOrDecreament) {
      this.$emit("switchPerson", increamentOrDecreament);
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY");
      }
    },
  },
  updated() {},
};
</script>

<template>
  <!--Admin/ Super Admin Modal -->
  <div
    class="modal fade"
    id="AdminModel"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="AdminModelLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="AdminModelLabel">Person Detail</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="p-3 table-responsive">
            <table class="table text-start">
              <tbody>
                <tr>
                  <th scope="row"><b>Name</b></th>
                  <td>{{ person.name }}</td>
                </tr>
                <tr>
                  <th scope="row"><b>Birth Year</b></th>
                  <td>{{ person.birth_year }}</td>
                </tr>
                <tr>
                  <th scope="row"><b>Gender</b></th>
                  <td>{{ person.gender }}</td>
                </tr>
                <tr>
                  <th scope="row"><b>Height</b></th>
                  <td>{{ person.height }}</td>
                </tr>
                <tr>
                  <th scope="row"><b>Mass</b></th>
                  <td>{{ person.mass }}</td>
                </tr>
                <tr>
                  <th scope="row"><b>Eye Color</b></th>
                  <td>{{ person.eye_color }}</td>
                </tr>
                <tr>
                  <th scope="row"><b>Skin Color</b></th>
                  <td>{{ person.skin_color }}</td>
                </tr>
                <tr>
                  <th scope="row"><b>Created At</b></th>
                  <td>{{ formatDate(person.created) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button
            :disabled="personIndex > 0 ? false : true"
            type="button"
            class="btn btn-primary"
            @click="switchPerson(false)"
          >
            <i class="fa fa-step-backward me-2"></i> Previous
          </button>
          <button
            :disabled="users.length - 1 > personIndex ? false : true"
            type="button"
            class="btn btn-primary"
            @click="switchPerson(true)"
          >
            Next <i class="fa fa-step-forward ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
