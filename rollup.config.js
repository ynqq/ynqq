import serve from 'rollup-plugin-serve'
import {createMyPlugin} from './plugins/complier.js'


export default {
    input: './src/index.js',
    output: {
        name: 'main',
        dir: 'dist'
    },
    plugins: [
        createMyPlugin(),
        serve({
            port: 5000,
        })
    ]
}