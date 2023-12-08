import fs from 'fs'
//自动生成路径，验证生效
export default {
    paths() {
        return fs
            .readdirSync('content/(*.*)',{})
            .map((pkg) => {
                return { params: { pkg }}
            })
    }
}