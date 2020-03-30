const request = require('request');
const slack = require('node-cloudflare')

// Getters

function _getEmail(action, settings){
    return action.params.CLOUDFLARE_EMAIL? action.params.CLOUDFLARE_EMAIL : settings.CLOUDFLARE_EMAIL;
}

function _getKey(action, settings){
    return action.params.CLOUDFLARE_KEY? action.params.CLOUDFLARE_KEY : settings.CLOUDFLARE_KEY;
}

function _getToken(action, settings){
    return action.params.CLOUDFLARE_TOKEN? action.params.CLOUDFLARE_TOKEN : settings.CLOUDFLARE_TOKEN;
}


// API Wrapper Functions


// Exports

module.exports = {
    browseZone: browseZone,
    exportZone: exportZone,
    addRecord: addRecord,
    editRecord: editRecord,
    delRecord: delRecord
}
