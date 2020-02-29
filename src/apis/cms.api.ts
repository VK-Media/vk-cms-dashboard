import axios from 'axios'

export default axios.create({
	baseURL: process.env.REACT_APP_CMS_API_BASE_URL || 'http://localhost:5000'
})
