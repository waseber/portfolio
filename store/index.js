export const state = () => ({
    isIn: false
  })
  
export const mutations = {
  toggle (state) {
    state.isIn = !state.isIn
  }
  
  
}