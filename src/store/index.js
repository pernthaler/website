export const state = () => ({
    domain: `http://127.0.0.1:${process.env.PORT || 3000}`
});

export const mutations = {
    set(state, domain) {
        state.domain = domain;
    }
};

export const actions = {
    async nuxtServerInit({commit}, {req}) {
        commit("set", `http://${req.headers.host}`);
    }
};