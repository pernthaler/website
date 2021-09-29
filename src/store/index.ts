import { ActionTree, MutationTree } from "vuex";

export type RootState = ReturnType<typeof state>;

export const state = () => ({
  title: "",
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
  revision: "0000000",
  domain: `http://127.0.0.1:${process.env.PORT || 3000}`
});

export const mutations: MutationTree<RootState> = {
  SET_TITLE: (state, title: string) => (state.title = title),
  SET_REVISION: (state, revision: string) => (state.revision = revision),
  SET_DOMAIN: (state, domain: string) => (state.domain = domain)
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({commit}, {req}) {
    const exec = require("util").promisify(require("child_process").exec);

    commit("SET_REVISION", (await exec("git rev-parse --short HEAD")).stdout.replace(/(\r\n|\n|\r)/, ""));
    commit("SET_DOMAIN", `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}`);
  }
};