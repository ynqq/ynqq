function parseVueRequest(id) {
  const [filename, rawQuery] = id.split(`?`, 2);
  const query = Object.fromEntries(new URLSearchParams(rawQuery));
  if (query.vue != null) {
    query.vue = true;
  }
  if (query.index != null) {
    query.index = Number(query.index);
  }
  if (query.raw != null) {
    query.raw = true;
  }
  if (query.url != null) {
    query.url = true;
  }
  if (query.scoped != null) {
    query.scoped = true;
  }
  return {
    filename,
    query,
  };
}

export function createMyPlugin() {
  return {
    name: "vite:ynqq",
    handleHotUpdate() {
      console.log("hot");
    },
    config() {
      console.log("config");
    },
    buildStart() {
      console.log("buildStart");
    },
    resolveId(id) {
      //   console.log(parseVueRequest(id), '-----');
    },
    load(id) {
      //   console.log(parseVueRequest(id), '-0000');
    },
    transform(code, id) {
      console.log(code, id, "-111");
      if (id.includes(".ynqq")) {
        console.log("rtttt");
        return {
          code: "export default  {}",
        };
      }
      return {
        code,
      };
    },
  };
}
