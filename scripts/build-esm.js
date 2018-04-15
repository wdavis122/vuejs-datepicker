import path from 'path'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: path.join(__dirname, '..', 'src', 'components', 'Datepicker.vue'),
  output: {
    file: path.join(__dirname, '..', 'dist', 'vuejs-datepicker.esm.js'),
    format: 'es',
    name: 'vuejs-datepicker'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve(),
    vue(),
    buble(),
    uglify()
  ]
}
