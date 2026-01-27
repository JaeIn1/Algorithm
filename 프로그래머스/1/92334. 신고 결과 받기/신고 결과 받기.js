function solution(id_list, report, k) {
    const uniqueReports = [...new Set(report)];
    const reportedCount = new Map();
    const userReports = new Map();
    
    uniqueReports.forEach(r => {
        const [reporter, reported] = r.split(' ');
        
        // 신고당한 횟수 증가
        reportedCount.set(reported, (reportedCount.get(reported) || 0) + 1);
        
        // 신고한 사람 기록
        if (!userReports.has(reporter)) {
            userReports.set(reporter, []);
        }
        userReports.get(reporter).push(reported);
    });
    
    const suspended = [];
    reportedCount.forEach((count, user) => {
        if (count >= k) suspended.push(user);
    });
    
    const result = id_list.map((user) => {
        const myReports = userReports.get(user) || [];
        return myReports.filter(reported => suspended.includes(reported)).length;
    })
    
    return result
    
    
    
}