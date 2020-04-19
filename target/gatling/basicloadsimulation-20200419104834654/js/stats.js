var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "62260",
        "ok": "62260",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5238",
        "ok": "5238",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1326",
        "ok": "1326",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1721",
        "ok": "1721",
        "ko": "-"
    },
    "percentiles1": {
        "total": "315",
        "ok": "314",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3016",
        "ok": "3013",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4780",
        "ok": "4780",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5051",
        "ok": "5051",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 39396,
    "percentage": 63
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4121,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18743,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1197.308",
        "ok": "1197.308",
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
        "total": "33960",
        "ok": "33960",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5238",
        "ok": "5238",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1309",
        "ok": "1309",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1703",
        "ok": "1703",
        "ko": "-"
    },
    "percentiles1": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2350",
        "ok": "2348",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4817",
        "ok": "4816",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5070",
        "ok": "5070",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21029,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2856,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10075,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "653.077",
        "ok": "653.077",
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
        "total": "28300",
        "ok": "28300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5237",
        "ok": "5237",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1346",
        "ok": "1346",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1743",
        "ok": "1743",
        "ko": "-"
    },
    "percentiles1": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3313",
        "ok": "3307",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4717",
        "ok": "4717",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4999",
        "ok": "4998",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18367,
    "percentage": 65
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1265,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8668,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "544.231",
        "ok": "544.231",
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
