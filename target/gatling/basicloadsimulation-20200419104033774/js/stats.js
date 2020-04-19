var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6325",
        "ok": "6325",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1321",
        "ok": "1321",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "percentiles4": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6268,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 44,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "234.259",
        "ok": "234.259",
        "ko": "-"
    }
},
contents: {
"req_get-all-video-g-1e227": {
        type: "REQUEST",
        name: "Get All Video Games",
path: "Get All Video Games",
pathFormatted: "req_get-all-video-g-1e227",
stats: {
    "name": "Get All Video Games",
    "numberOfRequests": {
        "total": "3450",
        "ok": "3450",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1321",
        "ok": "1321",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles4": {
        "total": "754",
        "ok": "754",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3422,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "127.778",
        "ok": "127.778",
        "ko": "-"
    }
}
    },"req_get-specific-ga-304cb": {
        type: "REQUEST",
        name: "Get Specific game",
path: "Get Specific game",
pathFormatted: "req_get-specific-ga-304cb",
stats: {
    "name": "Get Specific game",
    "numberOfRequests": {
        "total": "2875",
        "ok": "2875",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1308",
        "ok": "1308",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles3": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "percentiles4": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2846,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "106.481",
        "ok": "106.481",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
