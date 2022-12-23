<script>
import MenuHeader from "../components/Header.vue";
import AdminModel from "../components/AdminModal.vue";
import userModel from "../components/UserModel.vue";
import Loader from "../components/Loader.vue";
import moment from "moment";

export default {
  data() {
    return {
      users: [],
      loader: true,
      page: 1,
      pageCount: 0,
      pagination: [],
      currentPerson: {},
      currentPersonIndex: 0,
      authUser: {},
    };
  },
  async beforeCreate() {
    this.authUser = await JSON.parse(localStorage.getItem("loginUser"));
  },
  async created() {
    this.getPeopleByPageNumber(this.page);
  },
  methods: {
    getPeopleByPageNumber(page) {
      this.axios
        .get(`https://swapi.dev/api/people?page=${page}`)
        .then((response) => {
          let peopleData = response.data;
          this.users = peopleData.results;
          this.loader = false;
          this.pageCount = Math.ceil(peopleData.count / 10);
          this.pagination = this.displayPages();
        });
    },
    nextPage() {
      this.loader = true;
      this.getPeopleByPageNumber(this.page++);
    },
    previousPage() {
      this.loader = true;
      this.getPeopleByPageNumber(this.page--);
    },
    setPage(page) {
      this.loader = true;
      this.getPeopleByPageNumber((this.page = page));
    },
    displayPages() {
      const totalPages = this.pageCount;
      let currentPage = this.page;
      if ([1, 2].includes(currentPage)) {
        currentPage = 3;
      } else if ([totalPages - 1, totalPages].includes(currentPage)) {
        currentPage = totalPages - Math.trunc(5 / 2);
      }
      return [...Array(5).keys()].map(
        (i) => i - Math.trunc(5 / 2) + currentPage
      );
    },
    getPeople(user, index) {
      this.loader = true;
      this.axios.get(user.url).then((response) => {
        this.currentPerson = response.data;
        this.currentPersonIndex = index;
        this.loader = false;
      });
    },
    switchPerson(increamentOrDecreament) {
      increamentOrDecreament
        ? this.currentPersonIndex++
        : this.currentPersonIndex--;
      this.currentPerson = this.users[this.currentPersonIndex];
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY");
      }
    },
  },
  mounted() {},
  components: {
    MenuHeader,
    AdminModel,
    userModel,
    Loader,
  },
};
</script>

<template>
  <MenuHeader />
  <div class="container">
    <div id="products" class="row text-center border-1">
      <template v-if="!['admin', 'super_admin'].includes(authUser.user_role)">
        <div
          v-for="(user, index) in users"
          v-bind:key="user"
          class="item col-xs-4 col-md-6 col-lg-4"
        >
          <div
            class="bg-white rounded shadow-sm py-4 px-3 bg-custom-gray"
            data-bs-toggle="modal"
            data-bs-target="#userModel"
            @click="getPeople(user, index)"
          >
            <img
              src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
              alt=""
              width="100"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm d-none"
            />
            <h5 class="mb-0">{{ user.name }}</h5>
            <span class="small text-uppercase text-muted d-none">{{
              user.birth_year
            }}</span>
            <ul class="social mb-0 list-inline mt-3 d-none">
              <li class="list-inline-item">
                <a href="#" class="social-link"
                  ><i class="fa fa-facebook-f"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link"
                  ><i class="fa fa-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="social-link"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <div v-else class="card shadow m-sm-2 m-sx-2">
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
    </div>
    <!-- For Loader -->
    <Loader v-if="loader" />
    <!-- Pagination -->
    <nav class="paginator" aria-label="pagination example">
      <ul class="pagination pagination-circle justify-content-center">
        <!--Arrow left-->
        <li
          v-if="pagination.length > 0"
          class="page-item"
          :class="[
            page == 1 ? 'disabled' : '',
            !['admin', 'super_admin'].includes(authUser.user_role)
              ? 'page-item-orange'
              : '',
          ]"
          @click="previousPage()"
        >
          <a class="page-link prev" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>

        <!--Numbers-->
        <template v-for="n in pagination" :key="n">
          <li
            class="page-item"
            :class="[
              page == n
                ? ['admin', 'super_admin'].includes(authUser.user_role)
                  ? 'active'
                  : 'active-orange'
                : '',
              !['admin', 'super_admin'].includes(authUser.user_role)
                ? 'page-item-orange'
                : '',
            ]"
            @click="setPage(n)"
          >
            <a class="page-link">{{ n }}</a>
          </li>
        </template>

        <!--Arrow right-->
        <li
          v-if="pagination.length > 0"
          class="page-item"
          :class="[
            page == pageCount ? 'disabled' : '',
            !['admin', 'super_admin'].includes(authUser.user_role)
              ? 'page-item-orange'
              : '',
          ]"
          @click="nextPage()"
        >
          <a class="page-link next" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <AdminModel
    :person="currentPerson"
    :personIndex="currentPersonIndex"
    @switchPerson="switchPerson($event)"
    :users="users"
  />
  <userModel
    :person="currentPerson"
    :personIndex="currentPersonIndex"
    @switchPerson="switchPerson($event)"
    :users="users"
  />
</template>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0%;
  left: 0px;
  filter: alpha(opacity=50);
  opacity: 0.2;
  background-color: black;
}

.bg-white {
  border: 1px solid #ddd;
  margin: 10px;
}

a i {
  color: #008fd5;
}

nav {
  margin: 0 auto;
  padding-top: 10px;
}
.pagination.pagination-circle .page-item.active .page-link {
  border-radius: 50%;
}
.pagination .page-item .page-link:hover {
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  border-radius: 0.125rem;
  background-color: #eee;
}
.pagination.pg-blue .page-item.active .page-link:hover {
  background-color: #1a73e8;
}

.pagination.pg-blue .page-item.active-orange .page-link:hover {
  background-color: #f60;
}

.pagination .page-item.active .page-link {
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  border-radius: 0.125rem;
  background-color: #1a73e8;
  color: #fff;
}

.pagination .page-item.active-orange .page-link {
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  border-radius: 0.125rem;
  background-color: #f60;
  color: #fff;
}
.pagination .page-item .page-link {
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  outline: 0;
  border: 0;
  background-color: transparent;
  font-size: 0.9rem;
  color: #999;
  font-weight: bold;
}
.pagination.pagination-circle .page-item .page-link:hover {
  border-radius: 50%;
}
.pagination.pagination-circle .page-item .page-link {
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 50%;
}
.pagination .page-item.active .page-link {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.page-link {
  border: none !important;
}

/*--------- paginator ---------*/
.paginator .pagination .page-item .page-link {
  color: #1a73e8;
  border: 2px solid #1a73e8 !important;
}

.paginator .pagination .page-item-orange .page-link {
  color: #f60;
  border: 2px solid #f60 !important;
}

/* page-item-orange */
/* f60 */
.paginator .pagination.pagination-circle .page-item.active .page-link {
  color: white;
}
.paginator .pagination.pagination-circle .page-item.active-orange .page-link {
  color: white;
}

.paginator .pagination.pagination-circle .page-item.active .page-link:hover {
  background-color: #1a73e8;
}
.paginator
  .pagination.pagination-circle
  .page-item.active-orange
  .page-link:hover {
  background-color: #f60;
}
.paginator .pagination .page-item .page-link.prev,
.paginator .pagination .page-item .page-link.next {
  border: 0 !important;
}
.paginator .pagination .page-item .page-link.prev:hover,
.paginator .pagination .page-item .page-link.next:hover {
  background-color: initial;
}
.paginator .pagination .page-item .page-link:hover {
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  border-radius: 0.125rem;
  background-color: #eee;
}
.paginator .pagination.pagination-circle .page-item .page-link:hover {
  border-radius: 50%;
}

.item,
.page-item,
.action-btn {
  cursor: pointer;
}

.disabled {
  display: none;
}

.bg-custom-gray {
  background-color: #cfd7ed !important;
}
</style>
