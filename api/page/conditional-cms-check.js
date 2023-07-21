import { cmsifyPrefix } from 'cmsify-utils'
import { Route } from 'cmsify-utils/utils/route-parser.js'

export default [
    new Route({
        method: 'GET',
        path: `${cmsifyPrefix}/unique-cms-endpoint-for-conditional-cms-rendering-check`,
        handler: (req, res) => {
            res.send("CMS exists.")
        }
    })
]