const Store = require("electron-store");
const schema = {
  servers: {
    type: "array",
    default: [],
  },
};
export default new Store(schema);
