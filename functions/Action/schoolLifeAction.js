exports.selectSchoolLifeService = function(request, response, callbackFunc) {
    const action = JSON.parse(JSON.stringify(request.action))
    const responseManager = request.responseManager
    global.log.debug('schoolLifeAction', 'selectSchoolLifeService', 'user data: ' + JSON.stringify(request.user) + ' action data: ' + JSON.stringify(request.action))
  
    responseManager.pushTemplate(action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO])
    for (var index in action['quickReplies']) {
      responseManager.pushQuickReply(action['quickReplies'][index])
    }
    callbackFunc()
}

exports.syncLatestSchoolLifeSchedule = function(request, response, callbackFunc) {
    const action = JSON.parse(JSON.stringify(request.action))
    const responseManager = request.responseManager
    global.log.debug('schoolLifeAction', 'syncLatestSchoolLifeSchedule', 'user data: ' + JSON.stringify(request.user) + ' action data: ' + JSON.stringify(request.action))

    const buttonsList = action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["basicCard"]["buttons"]
    action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["basicCard"]["buttons"] = []
    
    for(var index in buttonsList) {
        action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["basicCard"]["buttons"].push(buttonsList[index])
    }

    responseManager.pushTemplate(action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO])
    for (var index in action['quickReplies']) {
      responseManager.pushQuickReply(action['quickReplies'][index])
    }
    callbackFunc()
}

exports.latestLibrarySeatStatus = function(request, response, callbackFunc) {
    const util = require('util')
    const admin = global.admin
    const action = JSON.parse(JSON.stringify(request.action))
    const responseManager = request.responseManager
    const librarySetRef = admin.database().ref(global.define.DB_PATH_LIBRARY_SEAT)
    global.log.debug('schoolLifeAction', 'latestLibrarySeatStatus', 'user data: ' + JSON.stringify(request.user) + ' action data: ' + JSON.stringify(request.action))

    const buttonsList = action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["listCard"]["buttons"]
    action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["listCard"]["buttons"] = []

    const itemList = action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["listCard"]["items"] || []
    action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["listCard"]["items"] = []
    
    for(var index in buttonsList) {
        action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["listCard"]["buttons"].push(buttonsList[index])
    }

    librarySetRef.once('value', function(seatSnapshot) {
        const seatData = seatSnapshot.val()
        for(var roomID in seatData) {
            const summary = seatData[roomID]['summary']

            global.log.debug('schoolLifeAction', 'latestLibrarySeatStatus', '#' + roomID + ' summary: ' + JSON.stringify(summary))

            const descFormat = action['response'][1]['description']
            const titleFormat = action['response'][1]['title']

            action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO]["listCard"]["items"].push({
                'description': util.format(descFormat, summary['availableSeat'], summary['allSeat']),
                'title': util.format(titleFormat, summary['title'])
            })
        }

        responseManager.pushTemplate(action['response'][global.define.DEFAULT_RESPONSE_TYPE_ZERO])
        for (var index in action['quickReplies']) {
          responseManager.pushQuickReply(action['quickReplies'][index])
        }
        callbackFunc()
    })
}