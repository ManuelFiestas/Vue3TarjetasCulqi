import service from './service'

export const state = () => ({})

export const actions = {
  async saveCardData ({ dispatch }, formData) {
    try {
        console.log('store index')
      dispatch('loading/setLoading', true, { root: true })
      const response = await service.saveCardData(formData)
      return response
    } catch (err) {
      dispatch('alert/addAlert', { text: err.response && err.response.data ? err.response.data.message : 'Ocurrio un error', type: 'error' }, { root: true })
    } finally { dispatch('loading/setLoading', false, { root: true }) }
  },
  async getCardData ({ dispatch }, cardDataInfo) {
    try {
      dispatch('loading/setLoading', true, { root: true })
      const response = await service.getCardData(cardDataInfo)
      return response
    } catch (err) {
      dispatch('alert/addAlert', { text: err.response && err.response.data ? err.response.data.message : 'Ocurrio un error', type: 'error' }, { root: true })
    } finally { dispatch('loading/setLoading', false, { root: true }) }
  },
}

export const mutations = {}
