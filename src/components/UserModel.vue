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
  <!-- Modal -->
  <div
    class="modal fade"
    id="userModel"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="userModelLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userModelLabel">Person Detail</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="p-3 table-responsive">
            <div class="d-flex column justify-content-evenly">
              <div class="col-6">
                <div class="mb-2">
                  <b>Name</b>
                  <br />
                  {{ person.name }}
                </div>
                <div class="mb-2">
                  <b>Birth Year</b> <br />{{ person.birth_year }}
                </div>
                <div class="mb-2"><b>Gender</b> <br />{{ person.gender }}</div>
                <div>
                  <b>Created At</b> <br />{{ formatDate(person.created) }}
                </div>
              </div>
              <div class="col-6">
                <div class="mb-2"><b>Height</b> <br />{{ person.height }}</div>
                <div class="mb-2"><b>Mass</b> <br />{{ person.mass }}</div>
                <div class="mb-2">
                  <b>Eye Color</b> <br />{{ person.eye_color }}
                </div>
                <div><b>Skin Color</b> <br />{{ person.skin_color }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            :disabled="personIndex > 0 ? false : true"
            type="button"
            class="btn btn-secondary"
            @click="switchPerson(false)"
          >
            <i class="fa fa-step-backward me-2"></i> Previous
          </button>
          <button
            :disabled="users.length - 1 > personIndex ? false : true"
            type="button"
            class="btn btn-secondary"
            @click="switchPerson(true)"
          >
            Next <i class="fa fa-step-forward ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  background-color: #e2e5ec !important;
}
</style>
<!-- background-color: #334c71; -->
<!-- border-color: #334c71; -->
