exports.getMenuListBasedOnRole = function (request, response) {
  var menuManager = require('../../Core/menuManager')
  var responseManager = request.responseManager

  menuManager.getMenuListBasedOnRole(request, response, function (menuList) {
    responseManager.ok(response, menuList)
  })
}

exports.isAccountVerified = function (request, response) {
  var accountManager = require('../../Core/accountManager')
  var responseManager = request.responseManager

  accountManager.checkUserIsVerified(request, response, function (status) {
    responseManager.ok(response, {
      'status': status
    })
  })
}

exports.getAllAccountList = function (request, response) {
  var accountManager = require('../../Core/accountManager')
  var responseManager = request.responseManager

  accountManager.getAllAccountList(request, response, function (accountList) {
    responseManager.ok(response, accountList)
  })
}

exports.patchAccount = function (request, response) {
  var accountManager = require('../../Core/accountManager')
  var responseManager = request.responseManager

  accountManager.patchAccount(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.deleteAccount = function (request, response) {
  var accountManager = require('../../Core/accountManager')
  var responseManager = request.responseManager

  accountManager.deleteAccount(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.getRoutineList = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.routineList(request, response, function (routineList) {
    responseManager.ok(response, routineList)
  })
}

exports.addRoutine = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.addRoutine(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.patchRoutine = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.patchRoutine(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.deleteRoutine = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.deleteRoutine(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.getStationList = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.stationList(request, response, function (stationList) {
    responseManager.ok(response, stationList)
  })
}

exports.addStation = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.addStation(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.patchStation = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.patchStation(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.deleteStation = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.deleteStation(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.getStationSchedule = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.getStationSchedule(request, response, function (scheduleList) {
    responseManager.ok(response, scheduleList)
  })
}

exports.createStationSchedule = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.createStationSchedule(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.patchStationSchedule = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.patchStationSchedule(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.deleteStationSchedule = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.deleteStationSchedule(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.getShuttleRoutine = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.getShuttleRoutine(request, response, function (shuttleRoutine) {
    responseManager.ok(response, shuttleRoutine)
  })
}

exports.patchShuttleRoutine = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.patchShuttleRoutine(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.getShuttleNoticeList = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.getShuttleNoticeList(request, response, function (shuttleNoticeList) {
    responseManager.ok(response, {
      'timeline': shuttleNoticeList
    })
  })
}

exports.patchShuttleNoticeList = function (request, response) {
  var shuttleManager = require('../../Core/shuttleManager')
  var responseManager = request.responseManager

  shuttleManager.patchShuttleNoticeList(request, response, function (status) {
    responseManager.ok(response, {
      'success': status
    })
  })
}

exports.getAllRoleList = function (request, response) {
  var roleManager = require('../../Core/roleManager')
  var responseManager = request.responseManager

  roleManager.getAllRoleList(request, response, function (roleList) {
    responseManager.ok(response, roleList)
  })
}

exports.getApiList = function (request, response) {
  var apiManager = require('../../Core/apiManager')
  var responseManager = request.responseManager

  apiManager.getApiList(function (apiList) {
    responseManager.ok(response, apiList)
  })
}

exports.getAlreadyRegisteredMyCalendarList = function (request, response) {
  var schoolManager = require('../../Core/schoolManager')
  var responseManager = request.responseManager

  schoolManager.getAlreadyRegisteredMyCalendarList(request, response, function (scheduleList) {
    responseManager.ok(response, scheduleList)
  })
}

exports.registerNewCalendarList = function (request, response) {
  var schoolManager = require('../../Core/schoolManager')
  var responseManager = request.responseManager

  schoolManager.registerNewCalendarList(request, response, function (status) {
    responseManager.ok(response, {
      success: status
    })
  })
}
