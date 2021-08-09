import axios from 'axios'

const URL_API = 'https://www.scorebat.com/video-api/v1/';

export const getMatches = async ({commit}) => {
    await axios.get(URL_API).then(response => {
        commit('SET_MATCHES', response.data)
    })
}
