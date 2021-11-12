<template>
  <div class="body">
    <div class="row">
      <div class="sidebar flex-column justify-content-center text-center">
        <button
          class="sb-btn"
          data-bs-toggle="modal"
          data-bs-target="#addServer"
        >
          <svg viewBox="0 0 75 50">
            <text x="20" y="50">+</text>
          </svg>
        </button>
        <button class="sb-btn" v-on:click="changeTheme()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 50">
            <path
              d="M53.07,9.48A21.93,21.93,0,0,0,45.6,4.23a1.13,1.13,0,0,0-1.51,1.41A19.83,19.83,0,0,1,17.57,30.37a1.13,1.13,0,0,0-1.51,1.41A22.13,22.13,0,0,0,36.15,46.6l.79,0A22.08,22.08,0,0,0,53.07,9.48Z"
              transform="translate(3 0)"
            />
          </svg>
        </button>
      </div>
      <div class="main flex-column justify-content-center">
        <p>Current theme source: <strong id="theme-source">System</strong></p>
        <p v-for="server in servers">{{ server.address }}</p>
        <!-- <server-component
          v-for="server in servers"
          :serverinfo="server"
        ></server-component> -->
      </div>
    </div>
    <div id="addServer" class="modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add server</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-floating mb-3">
              <input
                type="text"
                v-model="serverinfo.address"
                class="form-control"
                id="addressInput"
              />
              <label for="addressInput">Address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                v-model="serverinfo.port"
                class="form-control"
                id="portInput"
              />
              <label for="portInput">Port</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                v-model="serverinfo.apikey"
                class="form-control"
                id="keyInput"
              />
              <label for="keyInput">Key</label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              v-on:click="addServer()"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ServerComponent from "./components/Server.vue";
import store from "./store";
export default {
  setup() {
    const addServer = ref(null);
    return {
      addServer,
    };
  },
  created() {
    this.servers = store.get("servers", []);
  },
  data() {
    return {
      serverinfo: {},
      servers: [],
    };
  },
  name: "App",
  components: {
    ServerComponent,
  },
  methods: {
    addServer() {
      this.servers.push(
        Object.assign(this.serverinfo, { id: this.servers.length })
      );
      store.set("servers", this.servers);
    },
    showAddServer() {
      this.addServer.modal("show");
    },
    changeTheme() {
      // console.log("dd:", nativeTheme);
      // remote.getCurrentWindow().setFullScreen(true);
      this.window.darkMode.toggle().then(() => {
        console.log("test!!!");
      });
    },
  },
};
</script>

<style>
@import "./assets/styles.css";
</style>
