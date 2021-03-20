export const state = () => ({
    title: "",
    name: "website",
    version: "0.0.0",
    sha: "0000000",
    domain: `http://127.0.0.1:${process.env.PORT || 3000}`
});

export const mutations = {
    SET_TITLE(state, title) {
        state.title = title;
    },
    SET_NAME(state, name) {
        state.name = name;
    },
    SET_VERSION(state, version) {
        state.version = version;
    },
    SET_SHA(state, sha) {
        state.sha = sha;
    },
    SET_DOMAIN(state, domain) {
        state.domain = domain;
    }
};

export const actions = {
    async nuxtServerInit({commit}, {req}) {
        const exec = require("util").promisify(require("child_process").exec);

        commit("SET_NAME", process.env.npm_package_name);
        commit("SET_VERSION", process.env.npm_package_version);
        commit("SET_DOMAIN", `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}`);
        commit("SET_SHA", (await exec("git rev-parse --short HEAD")).stdout.replace(/(\r\n|\n|\r)/gm, ""));
    }
};