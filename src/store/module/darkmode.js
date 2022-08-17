

const darkmode = {
	state: () => ({
		darkMode: false,
	}),
	mutations: {
		setDarkState(state, value) {
			state.darkMode = value
		}
	},
	actions: {
		getStoredState({commit}) {
			commit('setDarkState', localStorage.getItem('darkmodestate') === 'true' ? true : false)
		},
		changeStoredState({commit}, value) {
			localStorage.setItem('darkmodestate', value)
			commit('setDarkState', value)
		},
	},
	getters: {
		
	}
}

export default darkmode