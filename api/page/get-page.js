import { cmsifyPrefix } from 'cmsify-utils'
import { Route } from 'cmsify-utils/utils/route-parser.js'

export default [
    new Route({
        method: 'GET',
        path: `${cmsifyPrefix}/page/get-page`,
        handler: (req, res) => {

        }
    })
]