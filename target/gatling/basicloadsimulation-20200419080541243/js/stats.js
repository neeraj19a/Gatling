var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11165",
        "ok": "11165",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3203",
        "ok": "3203",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "916",
        "ok": "916",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "878",
        "ok": "878",
        "ko": "-"
    },
    "percentiles1": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1486",
        "ok": "1486",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2648",
        "ok": "2648",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2902",
        "ok": "2902",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7040,
    "percentage": 63
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 859,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3266,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "797.5",
        "ok": "797.5",
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
        "total": "6090",
        "ok": "6090",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3203",
        "ok": "3203",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "877",
        "ok": "877",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "864",
        "ok": "864",
        "ko": "-"
    },
    "percentiles1": {
        "total": "520",
        "ok": "520",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1408",
        "ok": "1408",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2641",
        "ok": "2641",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2900",
        "ok": "2900",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3939,
    "percentage": 65
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 454,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1697,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "435",
        "ok": "435",
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
        "total": "5075",
        "ok": "5075",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3182",
        "ok": "3182",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "962",
        "ok": "962",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "percentiles1": {
        "total": "643",
        "ok": "643",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1558",
        "ok": "1558",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2654",
        "ok": "2654",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2902",
        "ok": "2902",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3101,
    "percentage": 61
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 405,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1569,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "362.5",
        "ok": "362.5",
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
