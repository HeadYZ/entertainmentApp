import data from '../../data.json'

export const currentTrendings = () => {
	return  data.filter(data => data.isTrending === true)
}
