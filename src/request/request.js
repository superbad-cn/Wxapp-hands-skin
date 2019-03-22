import wepy from 'wepy'
import tip from '@/request/tip'
import { TOKEN } from '@/request/constant'
const wxRequest = async(params = {}, url, loading) => {
    if (loading) {
        tip.loading()
    }
    let data = params.query || {}
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': wepy.getStorageSync(TOKEN)
        },
    })
    if (loading) {
        tip.loaded()
    }
    return res
}
module.exports = {
    wxRequest
}