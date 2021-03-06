export const state = () => ({
    host: "127.0.0.1:3000"
});

export const mutations = {
    set(state, host) {
        state.host = host;
    }
};

export const actions = {
    async nuxtServerInit({commit}, {req}) {
        commit("set", req.headers.host);
    }
};