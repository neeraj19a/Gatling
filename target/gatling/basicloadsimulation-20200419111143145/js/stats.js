var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47049",
        "ok": "47049",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20090",
        "ok": "20090",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4322",
        "ok": "4322",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6432",
        "ok": "6432",
        "ko": "-"
    },
    "percentiles1": {
        "total": "638",
        "ok": "638",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7232",
        "ok": "7239",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18313",
        "ok": "18313",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19633",
        "ok": "19633",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27146,
    "percentage": 58
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2690,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 17213,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "797.441",
        "ok": "797.441",
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
        "total": "28230",
        "ok": "28230",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20090",
        "ok": "20090",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5006",
        "ok": "5006",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6710",
        "ok": "6710",
        "ko": "-"
    },
    "percentiles1": {
        "total": "726",
        "ok": "726",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9115",
        "ok": "9120",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18415",
        "ok": "18414",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19648",
        "ok": "19648",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14864,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1368,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11998,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "478.475",
        "ok": "478.475",
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
        "total": "18819",
        "ok": "18819",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20059",
        "ok": "20059",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3297",
        "ok": "3297",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5842",
        "ok": "5842",
        "ko": "-"
    },
    "percentiles1": {
        "total": "537",
        "ok": "537",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1678",
        "ok": "1678",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18081",
        "ok": "18076",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19610",
        "ok": "19610",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12282,
    "percentage": 65
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1322,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5215,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "318.966",
        "ok": "318.966",
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
