import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'src/main.js',
  output: {
    file: './public/bundle.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true
    })
  ]
};