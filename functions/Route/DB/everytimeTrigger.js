exports.articleCreated = (snapshot, context) => {
    global.log.debug('everytimeTrigger', 'articleCreated', 'params: ' + JSON.stringify(context.params) + " snapshot:" + JSON.stringify(snapshot.val()))
    const article = snapshot.val();
    const schoolManager = require('../../Core/schoolManager')
    const everytimeManager = require('../../Core/everytimeManager')

    

    if (article && article.title) {
        const titleOrder = article.title.split(" ")
        if (titleOrder.length > 1 && titleOrder[0] === '교직원') {
            
            schoolManager.searchSchoolWorkerByName(titleOrder[1], (workerList) => {
                let commentMsg = '';
                if (!workerList || Object.keys(workerList).length <= 0) {
                    commentMsg = `교직원 ${titleOrder[1]} 검색 결과 0건\n`;
                } else {
                    const workerKeyList = Object.keys(workerList);
                    commentMsg = `교직원 ${titleOrder[1]} 검색 결과 ${workerKeyList.length}건\n`;
                    workerKeyList.forEach(key => {
                        // const worker = 
                        const worker = workerList[key];
                        commentMsg += `----------------\n소속: ${worker.area}\n성함: ${worker.name}\n연락처: ${worker.tel}\n이메일: ${worker.email}\n위치: ${worker.location}`
                    })
                }
                console.log('comment msg: ', commentMsg)
            })
        }
    }
    return snapshot.val();
}