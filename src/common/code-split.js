export default function makeFlat(arr){
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        return _.flattenDeep(arr)
    })
    .catch( error => error+' error while flattening')
}
