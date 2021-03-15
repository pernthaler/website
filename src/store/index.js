export const state = () => ({
    title: "",
    domain: `http://127.0.0.1:${process.env.PORT || 3000}`
});

export const mutations = {
    SET_TITLE(state, title) {
        state.title = title;
    },
    SET_DOMAIN(state, domain) {
        state.domain = domain;
    }
};

export const actions = {
    async nuxtServerInit({commit}, {req}) {
        commit("SET_DOMAIN", `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}`);
    }
};