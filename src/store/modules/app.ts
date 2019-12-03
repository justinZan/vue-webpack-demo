import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

import { Apptypes } from '../types/app-types';
import { AppState } from '../states/app-state'
import { RootState } from '../states/root-state';

const getters: GetterTree<AppState, RootState> = {
    [Apptypes.getters.CONFIGS](state) {
        return state.configs;
    }
}

const mutations: MutationTree<AppState> = {
    [Apptypes.mutations.SET_CONFIGS](state, configs) {
        state.configs = configs;
    }
}

const actions: ActionTree<AppState, RootState> = {
    [Apptypes.actions.SET_CONFIGS]({ commit }: any, configs: any) {
        commit(Apptypes.mutations.SET_CONFIGS, configs);
    }
}

const app: Module<AppState, RootState> = {
    state: new AppState(),
    getters,
    mutations,
    actions
}
export default app;
