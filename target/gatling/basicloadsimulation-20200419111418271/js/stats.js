var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "41660",
        "ok": "41660",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14304",
        "ok": "14304",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4938",
        "ok": "4938",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5763",
        "ok": "5763",
        "ko": "-"
    },
    "percentiles1": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12384",
        "ok": "12384",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13981",
        "ok": "13981",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14149",
        "ok": "14150",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18828,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4016,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18816,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "706.102",
        "ok": "706.102",
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
        "total": "24807",
        "ok": "24807",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14298",
        "ok": "14298",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5530",
        "ok": "5530",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5835",
        "ok": "5835",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1299",
        "ok": "1299",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12600",
        "ok": "12602",
        "ko": "-"
    },
    "percentiles3": {
        "total": "14019",
        "ok": "14019",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14170",
        "ok": "14170",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9790,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2321,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12696,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "420.458",
        "ok": "420.458",
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
        "total": "16853",
        "ok": "16853",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14304",
        "ok": "14304",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4067",
        "ok": "4067",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5542",
        "ok": "5542",
        "ko": "-"
    },
    "percentiles1": {
        "total": "711",
        "ok": "711",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9937",
        "ok": "9940",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13918",
        "ok": "13918",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14120",
        "ok": "14120",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9038,
    "percentage": 54
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1695,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6120,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "285.644",
        "ok": "285.644",
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
