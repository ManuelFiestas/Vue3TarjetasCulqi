import axios from 'axios'
const cardDevRoute = `http://localhost:3000`

const saveCardData = async function (formData) {
  const response = await axios.post(`${cardDevRoute}/tokens`, formData)
  return response ? response.data : null
}

const getCardData = async function () {
  const response = await axios.get(`${cardDevRoute}/tokens`)
  return response ? response.data : null
}


export default {
  saveCardData,
  getCardData,
}
